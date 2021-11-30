import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const DefaultCard = ({title, children}) => {
  return (
    <Card className="bg-light" sx={{ minWidth: 275　, verticalAlign:"center"}}>
    {
      title ?
      ( <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        </CardContent>)
      :""
    }
    <CardActions>
      <div className="mt-5 mb-5 p-3">
        {children}
      </div>
    </CardActions>
  </Card>
  );
}
export default DefaultCard