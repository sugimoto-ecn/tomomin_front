import React from 'react'
import styles from "./SleepData.module.css"
import DefaultLayout from '../../../components/templates/DefaultLayout'
import { Line } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Select, Row, Col, Card, } from 'react-bootstrap';
import { style } from 'dom-helpers';


const SleepData = () => {


    const data1 = {
        // x 軸のラベル
        labels: ['月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日', '日曜日'],
        datasets: [
            {
                label: '平均睡眠時間',
                // データの値
                data: [65, 59, 80, 81, 56, 55, 40],
                // グラフの枠線の色
                borderColor: 'rgb(75, 192, 192)',
                // グラフの枠線の太さ
                borderWidth: 2,
            },
        ],
    };
    const data2 = {
        // x 軸のラベル
        labels: ['月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日', '日曜日'],
        datasets: [
            {
                label: '平均就寝時間',
                // データの値
                data: [13, 59, 80, 81, 56, 55, 40],
                // グラフの枠線の色
                borderColor: 'rgb(0, 115, 168)',
                // グラフの枠線の太さ
                borderWidth: 2,
            },
        ],
    };
    const data3 = {
        // x 軸のラベル
        labels: ['月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日', '日曜日'],
        datasets: [
            {
                label: '平均起床時間',
                // データの値
                data: [13, 59, 80, 81, 56, 55, 40],
                // グラフの枠線の色
                borderColor: 'rgb(0, 106, 108)',
                // グラフの枠線の太さ
                borderWidth: 2,
            },
        ],
    };
    const options = {
        // アスペクト比
        maintainAspectRatio: false,
    };

    return (
        <div>
            <DefaultLayout>
                <>
                    <div>
                        <Container>


                            <h3 className={styles.title}>一週間の睡眠時間推移</h3>


                            <div className={styles.choose}>
                                <Row>
                                    <Col>
                                        <Form.Select aria-label="Default select" style={{ width: '10rem' }}>
                                            <option value="1">今週</option>
                                            <option value="2">先週</option>
                                            <option value="3">月</option>
                                            <option value="4">年</option>
                                        </Form.Select>
                                    </Col>
                                </Row>
                            </div>

                            <div className={styles.sleep}>
                                <Row xs={1} md={3}>
                                    <Col> <Card style={{ width: '15rem' }}>
                                        <Card.Body>
                                            <Card.Title style={{ fontSize: '1.2rem' }}>平均睡眠時間</Card.Title>
                                            <Card.Text style={{ fontSize: '2rem' }}>
                                                5:00<i className="i_sleep fas fa-circle"></i>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card></Col>
                                    <Col ><Card style={{ width: '15rem' }}>
                                        <Card.Body>
                                            <Card.Title style={{ fontSize: '1.2rem' }}>平均就寝時間</Card.Title>
                                            <Card.Text style={{ fontSize: '2rem' }}>
                                                23:00<i className="i_sleep fas fa-circle"></i>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card></Col>
                                    <Col><Card style={{ width: '15rem' }}>
                                        <Card.Body>
                                            <Card.Title style={{ fontSize: '1.2rem' }}>平均起床時間</Card.Title>
                                            <Card.Text style={{ fontSize: '2rem' }}>
                                                6:00<i className="i_sleep fas fa-circle"></i>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    </Col>
                                </Row>
                            </div>

                            <div className={styles.timegraph}>
                                <Row>
                                    <Col style={{ margin: '1rem' }}>
                                        <h4>平均睡眠時間</h4>
                                        <div className={styles.graph}>
                                            <Line type="line" data={data1} options={options} />
                                        </div>
                                    </Col>
                                    <Col style={{ margin: '1rem' }}>
                                        <h4>平均就寝時間</h4>
                                        <div className={styles.graph}>
                                            <Line type="line" data={data2} options={options} />
                                        </div>
                                    </Col>
                                    <Col style={{ margin: '1rem' }}>
                                        <h4>平均起床時間</h4>
                                        <div className={styles.graph}>
                                            <Line type="line" data={data3} options={options} />
                                        </div>
                                    </Col>
                                </Row>
                            </div>


                        </Container>




                    </div>
                </>
            </DefaultLayout>
        </div>
    )
}

export default SleepData
