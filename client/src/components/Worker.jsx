import React from 'react';
import RaisedButton from "material-ui/RaisedButton";
import {Link} from 'react-router';
import {Card} from 'material-ui/Card';
import Auth from "../modules/Auth";


const Worker = ({worker}) => (
    <Card className="panel panel-default" style={{padding: "1em", maxHeight: "10%"}}>
        <h3>{worker.job}</h3>
        <ul>
            <li>Experience - {worker.experience}</li>
            <li>Payment - {worker.paymentInfo}</li>
            <li>Description - {worker.notes}</li>
            <li>Rating - {worker.rating}</li>
        </ul>
        <Link to="/appointmentPage"><RaisedButton onClicked={Auth.selectedWorkerId(worker._id)} className="btn-block" o label="Book" primary/></Link>

    </Card>



);


export default Worker;
