import React from 'react'
import styles from  "./TimeSetting.module.css"
import DefaultLayout from '../../../components/templates/DefaultLayout'

const TimeSetting = () => {
    const hours = [...Array(24)].map((_, i) => i)
    const minutes = [...Array(60)].map((_, i) => i)
    console.log(hours)
    return (
        <div>
             <DefaultLayout>
                <>{/*消さない*/}

                <div className={`${styles.title1}`}>
                    就寝予定時刻
                </div>


                <select className={`${styles.hours1}`} aria-label="Default select example">
                  <option selected>時</option> 
                  {
                        hours.map((item) => (
                            <option value={item}>{item}</option>
                        ))
                    }
                    
                </select>
                

                <select className={`${styles.minutes1}`} aria-label="Default select example">
                  <option selected>分</option>
                  {
                        minutes.map((item) => (
                            <option value={item}>{item}</option>
                        ))
                    }
                  
                </select>


            <div className={`${styles.box}`}>

                <div className={`${styles.title2}`}>
                    起床予定時刻
                </div>

                <select className={`${styles.hours2}`} aria-label="Default select example">
                  <option selected>時</option>
                  {
                        hours.map((item) => (
                            <option value={item}>{item}</option>
                        ))
                    }
                </select>

                <select className={`${styles.minutes2}`} aria-label="Default select example">
                  <option selected>分</option>
                  {
                        minutes.map((item) => (
                            <option value={item}>{item}</option>
                        ))
                    }
                  
                </select>

            </div>

                <div className={`${styles.box1}`}>
                    睡眠時刻
                </div>

                <div className={`${styles.box2}`}>
                    平均就寝時刻
                </div>

                <div className={`${styles.box3}`}>
                    平均起床時間
                </div>

                <div className={`${styles.box4}`}>
                    平均睡眠時間
                </div>
                </>
            </DefaultLayout>
        </div>
    )
}

export default TimeSetting
