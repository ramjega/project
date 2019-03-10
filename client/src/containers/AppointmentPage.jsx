import React, {PropTypes} from 'react';
import moment from 'moment';
import Auth from "../modules/Auth";
import AppointmentForm from '../components/AppointmentForm.jsx';

class AppointmentPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: {},
            appointment:{}
        };


    };

    processForm(event) {
        event.preventDefault();

        // create a string for an HTTP body message
        const appointmentTime = encodeURIComponent(this.state.appointment.appointmentTime);
        const mobileNumber = encodeURIComponent(this.state.appointment.mobileNumber);
        const address = encodeURIComponent(this.state.appointment.address);
        const task = encodeURIComponent(this.state.appointment.task);
        const taskNotes = encodeURIComponent(this.state.appointment.taskNotes);

        // adding additional things
        const userId = Auth.getUserId();
        const workerId = Auth.getWorkerId();
        const createdTime = moment().unix();
        const modifiedTime = moment().unix();
        const status = "pending";

        const formData = `appointmentTime=${appointmentTime}&mobileNumber=${mobileNumber}&address=${address}&task=${task}&taskNotes=${taskNotes}`;
        const additionalData = `userId=${userId}&workerId=${workerId}&createdTime=${createdTime}&modifiedTime=${modifiedTime}&status=${status}`;
        const payloadData = formData+ "&" +additionalData;

        // create an AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open('post', '/api/appointment');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                // success
                // change the component-container state
                this.setState({
                    errors: {}
                });

                // set a message
                localStorage.setItem('successMessage', xhr.response.message);

                // make a redirect
                this.context.router.replace('/myAppointments');
            } else {
                // failure
                const errors = xhr.response.errors ? xhr.response.errors : {};
                errors.summary = xhr.response.message;

                this.setState({
                    errors
                });
            }
        });
        xhr.send(payloadData);
    }


    changeAppointment(event) {
        const field = event.target.name;
        const appointment = this.state.appointment;
        appointment[field] = event.target.value;

        this.setState({
            appointment: appointment
        });
    }


    render() {
        return (
            <AppointmentForm
                onSubmit={this.processForm.bind(this)}
                onChange={this.changeAppointment.bind(this)}
                errors={this.state.errors}
                appointment={this.state.appointment}
            />
        );
    }

}

AppointmentPage.contextTypes = {
    router: PropTypes.object.isRequired
};


export default AppointmentPage;
