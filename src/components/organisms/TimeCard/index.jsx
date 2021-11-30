import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';
import { SerectHours, SerectMinits } from '../../atoms';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const TimeCard = ({title , minits, hours, setHours, setMinits}) => {
  return (
    <Card className="bg-light" sx={{ minWidth: 275　, verticalAlign:"center"}}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        
      </CardContent>
      <CardActions>
        <div className="row mt-5 mb-5 p-3">
            <div className="col-4">
                <SerectHours initial={hours} update={setHours}></SerectHours>
            </div>
            <div className="col-2 pt-3">時</div>
            <div className="col-4">
                <SerectMinits initial={minits} update={setMinits}></SerectMinits>
            </div>
            <div className="col-2 pt-3">分</div>
        </div>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}

export default TimeCard