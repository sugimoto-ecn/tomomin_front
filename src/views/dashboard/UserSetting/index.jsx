import React from 'react'
import styles from './UserSetting.module.css'
import DefaultLayout from '../../../components/templates/DefaultLayout'
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';


const card = (
    <CardContent>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '30ch', },
            }}
            noValidate
            autoComplete="off"
        >
            <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                // sx={{ width: 56, height: 56 }}
                sx={{ width: 80, height: 80 }}
            />
            <div>
                <TextField
                    label='ユーザー名'
                    id="standard"
                    defaultValue="もちもち"
                    variant="standard"
                    margin="normal"

                />
                <TextField
                    id="standard"
                    label="メールアドレス"
                    defaultValue="11111@e-mail.ne.jp"
                    variant="standard"
                    margin="normal"
                />
                <TextField
                    id="standard"
                    label="フリーコメント"
                    defaultValue="おはよう"
                    variant="standard"
                    margin="normal"
                />
            </div>
        </Box>
    </CardContent>

);

const UserSetting = () => {
    return (
        <div>
            <DefaultLayout>
                <>
                    <div>
                          <Typography variant="h4" gutterBottom component="div">
                            アカウント管理
                                </Typography>
                        <Box
                            sx={{
                                maxWidth: 500,
                                color: '#fff',
                                textAlign: 'center',
                            }}
                        >

                            <Card variant="outlined">{card}</Card>
                            <div className={`${styles.mabu}`}>
                                <Button size="large" >変更を保存</Button>
                            </div>

                        </Box>
                    </div>
                </>
            </DefaultLayout>
        </div>
    )
}


export default UserSetting
