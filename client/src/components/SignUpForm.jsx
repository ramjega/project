import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {Card, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const SignUpForm = ({
                        onSubmit,
                        onChange,
                        errors,
                        user,
                        toggleMode,
                        mechanicMode
                    }) => (
    <Card className="container">
        <br/>
        <button className="btn btn-primary pull-left" onClick={toggleMode}>{!mechanicMode ? <span>SignUp as mechanic</span> : <span>SignUp as user</span>}</button>

        <form action="/" onSubmit={onSubmit}>
            <h2 className="card-heading">{mechanicMode ? <span>SignUp as Mechanic</span> : <span>SignUp as User</span>}</h2>
            {errors.summary && <p className="error-message">{errors.summary}</p>}

            <div className="field-line">
                <TextField
                    floatingLabelText="Name"
                    name="name"
                    errorText={errors.name}
                    onChange={onChange}
                    value={user.name}
                />
            </div>

            <div className="field-line">
                <TextField
                    floatingLabelText="Email"
                    name="email"
                    errorText={errors.email}
                    onChange={onChange}
                    value={user.email}
                />
            </div>

            <div className="field-line">
                <TextField
                    floatingLabelText="Password"
                    type="password"
                    name="password"
                    onChange={onChange}
                    errorText={errors.password}
                    value={user.password}
                />
            </div>
            {mechanicMode &&
                <div>
                    <div className="field-line">
                        <TextField
                            floatingLabelText="Mobile Number"
                            name="mobileNumber"
                            type="number"
                            errorText={errors.mobileNumber}
                            onChange={onChange}
                            value={user.mobileNumber}
                        />
                    </div>

                    <div className="field-line">
                        <TextField
                            floatingLabelText="Address"
                            name="address"
                            errorText={errors.address}
                            onChange={onChange}
                            value={user.address}
                        />
                    </div>

                    <div className="field-line">
                        <TextField
                            floatingLabelText="UserType"
                            name="userType"
                            errorText={errors.userType}
                            onChange={onChange}
                            value={user.userType}
                        />
                    </div>
                </div>

            }

            <div className="button-line">
                <RaisedButton type="submit" label="Create New Account" primary/>
            </div>

            <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
        </form>
    </Card>
);

SignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

export default SignUpForm;
