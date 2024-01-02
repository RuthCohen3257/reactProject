
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { observer } from 'mobx-react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import service from '../../store/service';
import AddNewMeeting from '../addNewMeeting/AddNewMeeting';
import AddNewService from '../addNewService/AddNewService';
import LoginStore from '../../store/LoginStore';
import { useEffect } from 'react';
import logo from '../../assets/images/logo.png'

const Services = (observer(() => {

  useEffect(() => {
    service.initialServices()
   },[]);

  return (
    <>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-evenly' }}>
      {service.servicesList.map((item, index) => (

        <Card sx={{ width: 250 }} index={index} key={index}>
          <CardMedia
            sx={{ height: 120 }}
            image={item.imgService}
            title="service"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
          <CardActions>
            {
              !LoginStore.isLogin && <AddNewMeeting service={item} />
            }
          </CardActions>
        </Card>))}</div>
        { 
          LoginStore.isLogin && <AddNewService/>
        }     
        </>
)
 }
))
export default Services