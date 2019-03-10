import React, {PropTypes} from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../components/Dashboard.jsx';

class DashboardPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            secretData: ''
        };
    }

    componentDidMount() {
        const xhr = new XMLHttpRequest();
        xhr.open('get', '/api/dashboard');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                this.setState({
                    secretData: xhr.response.message
                });
            }
        });
        xhr.send();
    }

    openWorkerSignUp() {
        // make a redirect
        this.context.router.replace('/workerSignUpPage');
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.openWorkerSignUp.bind(this)}>Add me as a worker</button>
                <Dashboard secretData={this.state.secretData}/>

            </div>
        );
    }

}
DashboardPage.contextTypes = {
    router: PropTypes.object.isRequired
};

export default DashboardPage;
