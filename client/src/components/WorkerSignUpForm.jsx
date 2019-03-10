import React, {PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Card} from 'material-ui/Card';


const WorkerSignUpForm = ({
                              onSubmit,
                              onChange,
                              errors,
                              worker,
                          }) => (
    <Card className="container">

        <form action="/" onSubmit={onSubmit}>
            <h2 className="card-heading">Create Worker</h2>
            {errors.summary && <p className="error-message">{errors.summary}</p>}

            <div className="field-line">
                <TextField
                    floatingLabelText="Job"
                    name="job"
                    errorText={errors.job}
                    onChange={onChange}
                    value={worker.job}
                />
            </div>

            <div className="field-line">
                <TextField
                    floatingLabelText="Experience"
                    name="experience"
                    errorText={errors.experience}
                    onChange={onChange}
                    value={worker.experience}
                />
            </div>

            <div className="field-line">
                <TextField
                    floatingLabelText="Payment Information"
                    name="paymentInfo"
                    onChange={onChange}
                    errorText={errors.paymentInfo}
                    value={worker.paymentInfo}
                />
            </div>

            <div className="field-line">
                <TextField
                    floatingLabelText="Notes"
                    name="notes"
                    onChange={onChange}
                    errorText={errors.notes}
                    value={worker.notes}
                />
            </div>

            <div className="button-line">
                <RaisedButton type="submit" label="Create Worker" primary/>
            </div>

        </form>
    </Card>
);

WorkerSignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    worker: PropTypes.object.isRequired
};

export default WorkerSignUpForm;
