import React from 'react';
import {Card} from 'material-ui/Card';


const Appointment = ({appointment}) => (
    <Card className="panel panel-default" style={{padding: "1em", maxHeight: "10%"}}>
        <h3>{appointment.task}</h3>
        <ul>
            <li>Appointment on - {appointment.appointmentTime}</li>
            <li>Status - {appointment.status}</li>
            <li>Description - {appointment.taskNotes}</li>
            <li>Address - {appointment.address}</li>
            <li>Mobile - {appointment.mobileNumber}</li>
        </ul>
    </Card>


);


export default Appointment;
