import React, {PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Card} from 'material-ui/Card';

const AppointmentForm = ({
                             onSubmit,
                             onChange,
                             errors,
                             appointment,
                         }) => (
    <Card className="container">

        <form action="/" onSubmit={onSubmit}>
            <h2 className="card-heading">Create Appointment</h2>
            {errors.summary && <p className="error-message">{errors.summary}</p>}

            <div className="field-line">
                <TextField
                    floatingLabelText="Appointment Time"
                    type="number"
                    name="appointmentTime"
                    errorText={errors.appointmentTime}
                    onChange={onChange}
                    value={appointment.appointmentTime}
                />
            </div>

            <div className="field-line">
                <TextField
                    floatingLabelText="Mobile Number"
                    type="number"
                    name="mobileNumber"
                    errorText={errors.mobileNumber}
                    onChange={onChange}
                    value={appointment.mobileNumber}
                />
            </div>

            <div className="field-line">
                <TextField
                    floatingLabelText="Address"
                    name="address"
                    errorText={errors.address}
                    onChange={onChange}
                    value={appointment.address}
                />
            </div>

            <div className="field-line">
                <TextField
                    floatingLabelText="Task"
                    name="task"
                    onChange={onChange}
                    errorText={errors.task}
                    value={appointment.task}
                />
            </div>

            <div className="field-line">
                <TextField
                    floatingLabelText="Notes"
                    name="taskNotes"
                    onChange={onChange}
                    errorText={errors.taskNotes}
                    value={appointment.taskNotes}
                />
            </div>

            <div className="button-line">
                <RaisedButton type="submit" label="Book" primary/>
            </div>

        </form>
    </Card>
);

AppointmentForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    appointment: PropTypes.object.isRequired
};

export default AppointmentForm;
