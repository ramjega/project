import React from 'react';
import {Card} from 'material-ui/Card';


const Worker = ({worker}) => (

            <div className="panel panel-default" style={{padding: "1em", maxHeight: "10%"}}>
                <h3>{worker.job}</h3>
                <ul>
                    <li>Experience - {worker.experience}</li>
                    <li>Payment - {worker.paymentInfo}</li>
                    <li>Description - {worker.notes}</li>
                    <li>Rating - {worker.rating}</li>
                </ul>
            </div>




);


export default Worker;
