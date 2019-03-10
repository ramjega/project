import React, {PropTypes} from 'react';
import Auth from "../modules/Auth";
import Appointment from '../components/Appointment.jsx';

class MyAppointments extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: {},
            appointments: []

        };
    }

    componentDidMount() {
        this.getMyAppointments();
    }

    getMyAppointments() {
        // create an AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open('get', '/api/appointments/'+ Auth.getUserId());
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {

                this.setState({
                    errors: {},
                    appointments: xhr.response
                });

            } else {
                const errors = xhr.response.errors ? xhr.response.errors : {};
                errors.summary = xhr.response.message;

                this.setState({
                    errors
                });
            }
        });
        xhr.send();
    }

    render() {
        let appointments = this.state.appointments;
        return (
            <div className="container-fluid">
                <center><h1>My Appointments</h1></center>
                <div className="col-sm-12">
                    <div className="row">
                        {
                            appointments.length !== 0 &&
                            appointments.map((appointment, index) => {
                                return (
                                    <div className="col-sm-3" key={index}>
                                        <Appointment appointment={appointment}  key={index}/>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>


            </div>
        );
    }

}

MyAppointments.contextTypes = {
    router: PropTypes.object.isRequired
};


export default MyAppointments;
