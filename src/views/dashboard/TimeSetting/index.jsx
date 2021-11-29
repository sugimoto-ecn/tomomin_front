import React, {useState, useContext} from "react";
import styles from "./TimeSetting.module.css";
import DefaultLayout from "../../../components/templates/DefaultLayout";
import { createSchedule } from "../../../api";
import { UserContext } from '../../../providers/UserProvider';

const TimeSetting = () => {
  const context = useContext(UserContext)
  const hours = [...Array(24)].map((_, i) => i);
  const minutes = [...Array(60)].map((_, i) => i);

  const [sleepHour, setSleepHour] = useState(0);
  const [sleepMinit, setSleepMinit] = useState(0);
  const [wakeupHour, setWakeupHour] = useState(0);
  const [wakeupMinit, setWakeupMinit] = useState(0);
  const filterTime = (value) => {
      if(value < 10){
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
            <div class="h3">就寝予定時刻</div>
            <div className="row">
                <div className="col-6 text-center">
                    <select
                    onChange={(e) => setSleepHour(e.target.value)} value={sleepHour}
                    aria-label="Default select example"
                    >
                    {hours.map((item) => (
                        <option value={item}>{item}</option>
                    ))}
                    </select>
                    <span>時</span>
                </div>
                
                <div className="col-6 text-left">
                    <select
                    onChange={(e) => setSleepMinit(e.target.value)} value={sleepMinit}
                    aria-label="Default select example"
                    >
                    {minutes.map((item) => (
                    <option value={item}>{item}</option>
                    ))}
                    </select>
                    <span>分</span>
                </div>
            </div>
          </div>


          <div className={`col-md-4`}>
            <div class="h3">起床予定時刻</div>
            <div className="row">
                <div className="col-6 text-center">
                    <select
                    onChange={(e) => setWakeupHour(e.target.value)} value={wakeupHour}
                    aria-label="Default select example"
                    >
                    {hours.map((item) => (
                        <option value={item}>{item}</option>
                    ))}
                    </select>
                    <span>時</span>
                </div>
                
                <div className="col-6 text-left">
                    <select
                    onChange={(e) => setWakeupMinit(e.target.value)} value={wakeupMinit}
                    aria-label="Default select example"
                    >
                    {minutes.map((item) => (
                    <option value={item}>{item}</option>
                    ))}
                    </select>
                    <span>分</span>
                </div>
            </div>
          </div>
        

          <div className={`col-md-4`}>
            {/* <div class="h3">起床予定時刻</div>
            <div className="row">
                <div className="col-6 text-center">
                    <select
                    onChange={(e) => setSleepHour(e.target.value)} value={sleepHour}
                    aria-label="Default select example"
                    >
                    {hours.map((item) => (
                        <option value={item}>{item}</option>
                    ))}
                    </select>
                    <span>時</span>
                </div>
                
                <div className="col-6 text-left">
                    <select
                    onChange={(e) => setSleepMinit(e.target.value)} value={sleepMinit}
                    aria-label="Default select example"
                    >
                    {minutes.map((item) => (
                    <option value={item}>{item}</option>
                    ))}
                    </select>
                    <span>分</span>
                </div>
            </div> */}
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
