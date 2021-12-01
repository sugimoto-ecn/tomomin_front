import React, {useState, useContext, useEffect} from "react";
import styles from "./TimeSetting.module.css";
import DefaultLayout from "../../../components/templates/DefaultLayout";
import { createSchedule , getSchedule} from "../../../api";
import { UserContext } from '../../../providers/UserProvider';
import { TimeCard , DefaultCard } from "../../../components/organisms";

const TimeSetting = () => {
  const context = useContext(UserContext)
  const [sleepHour, setSleepHour] = useState(0);
  const [sleepMinit, setSleepMinit] = useState(0);
  const [wakeupHour, setWakeupHour] = useState(0);
  const [wakeupMinit, setWakeupMinit] = useState(0);
  const [sleepTime, setSleepTime] = useState(null);

  const init = async () => {
    const res = await getSchedule(context.userInfo.id)
    if(!res[0]) return
    console.log(res[0])
    const wakeup = res[0]["wakeup"].split(':')
    const sleep = res[0]["sleep"].split(':')
    console.log(wakeup)
    console.log(sleep)
    setWakeupHour(wakeup[0])
    setWakeupMinit(wakeup[1])
    setSleepHour(sleep[0])
    setSleepMinit(sleep[1])
  }

  useEffect(() => {
      let result;
      result = wakeupHour - sleepHour + (wakeupMinit -sleepMinit )/60.0
      console.log(result)
      if(result < 0){
        result = 24 + result
      }
      console.log(result)
      const hours = String(result).split('.')[0]
      let minits =String(result).split('.')[1]? String(result).split('.')[1] * 6:0
      if(String(minits).length > 2){
        minits = String(minits).slice(0, 2)
      }

      setSleepTime(`${hours}時間${minits}分`);
  } , [sleepHour, sleepMinit, wakeupHour, wakeupMinit])

  useEffect(() => {
    init()
  }, [])
  
  const filterTime = (value) => {
      if(Number(value) < 10 && String(value).length <= 1){
          console.log(`0${value}`)
          return `0${value}`
      }
      return value
  }
  console.log(sleepHour)
  const save = async() => {
    const body = {
        sleep: filterTime(sleepHour)+":"+filterTime(sleepMinit)+":00",
        wakeup: filterTime(wakeupHour)+":"+filterTime(wakeupMinit)+":00"
    }

    console.log(body)

    const res = createSchedule(context.userInfo.id, body)
    console.log(res)
  }

  return (
    <div>
      <DefaultLayout>
        <div className="row p-0 no-gutters">
          <div className={`col-md-4`}>
          <TimeCard 
              hours={sleepHour} 
              setHours={setSleepHour} 
              minits={sleepMinit}
              setMinits={setSleepMinit}
              title="就寝予定時刻"></TimeCard>
          </div>


          <div className={`col-md-4`}>
              <TimeCard 
                hours={wakeupHour} 
                setHours={setWakeupHour} 
                minits={wakeupMinit}
                setMinits={setWakeupMinit}
                title="起床予定時刻"></TimeCard>
          </div>
        

          <div className={`col-md-4`}>
            <DefaultCard title="睡眠時間">
              <div class="text-center">
              {sleepTime ? (<p class="h5">{sleepTime}</p>):(<p class="h5">未設定</p>)}
              
              </div>
              
            </DefaultCard>
          </div>

        <br />
        <div className="text-center pt-5">
        <button className="btn btn-primary" onClick={save}>保存</button>
            
        </div>


          {/* <div className={`${styles.box2}`}>平均就寝時刻</div>

          <div className={`${styles.box3}`}>平均起床時間</div>

          <div className={`${styles.box4}`}>平均睡眠時間</div> */}
        </div>
      </DefaultLayout>
    </div>
  );
};

export default TimeSetting;
