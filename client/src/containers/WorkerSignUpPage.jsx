import React, {PropTypes} from 'react';
import moment from 'moment';
import Auth from "../modules/Auth";
import WorkerSignUpForm from '../components/WorkerSignUpForm.jsx';

class WorkerSignUpPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: {},
            user: {},
            worker:{}
        };


    };

    componentWillMount() {
        this.getCurrentUser()
    }

    getCurrentUser() {
        // create an AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open('get', '/api/user/' + Auth.getUserId());
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {

                this.setState({
                    errors: {},
                    user: xhr.response[0]
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

    processForm(event) {
        event.preventDefault();

        // create a string for an HTTP body message
        const job = encodeURIComponent(this.state.worker.job);
        const experience = encodeURIComponent(this.state.worker.experience);
        const paymentInfo = encodeURIComponent(this.state.worker.paymentInfo);
        const notes = encodeURIComponent(this.state.worker.notes);

        // adding additional things
        const userId = Auth.getUserId();
        const createdTime = moment().unix();
        const modifiedTime =moment().unix();
        const status = "initial";
        const rating = 0;

        const formData = `job=${job}&experience=${experience}&paymentInfo=${paymentInfo}&notes=${notes}`;
        const additionalData = `userId=${userId}&createdTime=${createdTime}&modifiedTime=${modifiedTime}&status=${status}&rating=${rating}`;
        const payloadData = formData+ "&" +additionalData;

        // create an AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open('post', '/api/worker');
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
                this.context.router.replace('/');
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


    changeWorker(event) {
        const field = event.target.name;
        const worker = this.state.worker;
        worker[field] = event.target.value;

        this.setState({
            worker
        });
    }


    render() {
        return (
            <WorkerSignUpForm
                onSubmit={this.processForm.bind(this)}
                onChange={this.changeWorker.bind(this)}
                errors={this.state.errors}
                worker={this.state.worker}
            />
        );
    }

}

WorkerSignUpPage.contextTypes = {
    router: PropTypes.object.isRequired
};


export default WorkerSignUpPage;
