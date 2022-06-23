import React from 'react'
// import { AppointmentForm, Appointments, EditingState, IntegratedEditing, Scheduler, ViewState, WeekView } from '@devexpress/dx-react-scheduler'
import {
    Scheduler,
    WeekView,
    Appointments,AppointmentForm
  } from '@devexpress/dx-react-scheduler-material-ui';
  import { ViewState,EditingState,IntegratedEditing } from '@devexpress/dx-react-scheduler';

  
const Calender = () => {
    const schedulerdata =[
        {startDate:'2022-06-22T09:50', EndDate:'2022-06-22T011:50', title:'Meeting with HR'},
        {startDate:'2022-06-21T10:50', EndDate:'2022-06-21T011:50', title:'Meeting with HR'},
    ]

    const saveAppointment =(data)=>{
        console.log('appointment save')
        console.log(data)
    }

    const currentDate = new Date(2021, 5, 2, 11, 30);
    

  return (
    <div>
   
    <Scheduler data={schedulerdata}>
        <ViewState/>
        <EditingState onCommitChanges={saveAppointment}/>
        <IntegratedEditing/>
        <WeekView startDayHour={9} endDayHour={19}/>
        <Appointments/>
        <AppointmentForm/>
    </Scheduler>
    </div>
  )
}

export default Calender