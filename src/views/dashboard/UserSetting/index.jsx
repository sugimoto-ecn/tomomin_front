// import React from 'react'
// import styles from './UserSetting.module.css'
// import DefaultLayout from '../../../components/templates/DefaultLayout'
// import Box from '@material-ui/core/Box';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import Avatar from '@material-ui/core/Avatar';
// import TextField from '@material-ui/core/TextField';


// const card = (
//     <CardContent>
//         <Box
//             component="form"
//             // sx={{
//             //     '& .MuiTextField-root': { m: 1, width: '30ch', },
//             // }}
//             noValidate
//             autoComplete="off"
//         >
//             <Avatar
//                 alt="Remy Sharp"
//                 src="/static/images/avatar/1.jpg"
//                 // sx={{ width: 56, height: 56 }}
//                 sx={{ width: 80, height: 80 }}
//             />
//             <div>
//                 <TextField
//                     label='ユーザー名'
//                     id="standard"
//                     defaultValue="Tomomin"
//                     variant="standard"
//                     margin="normal"

//                 />
//                 <TextField
//                     id="standard"
//                     label="メールアドレス"
//                     defaultValue="Tomomin@e-mail.ne.jp"
//                     variant="standard"
//                     margin="normal"
//                 />
//                 <TextField
//                     id="standard"
//                     label="フリーコメント"
//                     defaultValue="毎日ねむい"
//                     variant="standard"
//                     margin="normal"
//                 />
//             </div>
//         </Box>
//     </CardContent>

// );

// const UserSetting = () => {
//     return (
//         <div>
//             <DefaultLayout>
         
//                     <div>
//                     <div className={styles.kanri}>
//                           <Typography variant="h4" gutterBottom component="div">
//                             アカウント管理
//                                 </Typography>
//                                 </div>

//                                 <div className={styles.account}>
//                         <Box sx={{
//                                 maxWidth: 500,
//                                 // color: '#fff',
//                                 textAlign: 'center',
//                             }}
//                         >

//                             <Card variant="outlined">{card}</Card>
//                             <div className={`${styles.mabu}`}>
//                                 {/* <Button size="large" >変更を保存</Button> */}
//                             </div>

//                         </Box>
//                         </div>
//                     </div>
//                 </>
//             </DefaultLayout>
//         </div>
//     )
// }


// export default UserSetting

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DefaultLayout from '../../../components/templates/DefaultLayout'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function UserSetting() {
  return (
    <DefaultLayout>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
                                   <div className={`${styles.mabu}`}>                                 {/* <Button size="large" >変更を保存</Button> */}
                           </div>

    </DefaultLayout>
  );
}
