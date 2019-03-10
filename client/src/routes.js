import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import WorkerSignUpPage from './containers/WorkerSignUpPage.jsx';
import Auth from './modules/Auth';
import MyAppointments from "./containers/MyAppointments.jsx";
import AppointmentPage from "./containers/AppointmentPage.jsx";


const routes = {
    // base component (wrapper for the whole application).
    component: Base,
    childRoutes: [

        {
            path: '/',
            getComponent: (location, callback) => {
                if (Auth.isUserAuthenticated()) {
                    callback(null, HomePage);
                } else {
                    callback(null, HomePage);
                }
            }
        },
        {
            path: '/createJob',
            getComponent: (location, callback) => {
                if (Auth.isUserAuthenticated()) {
                    callback(null, WorkerSignUpPage);
                } else {
                    callback(null, LoginPage);
                }
            }
        },

        {
            path: '/appointmentPage',
            getComponent: (location, callback) => {
                if (Auth.isUserAuthenticated()) {
                    callback(null, AppointmentPage);
                } else {
                    callback(null, LoginPage);
                }
            }
        },

        {
            path: '/myAppointments',
            getComponent: (location, callback) => {
                if (Auth.isUserAuthenticated()) {
                    callback(null, MyAppointments);
                } else {
                    callback(null, LoginPage);
                }
            }
        },

        {
            path: '/login',
            component: LoginPage
        },

        {
            path: '/signup',
            component: SignUpPage
        },

        {
            path: '/dashBoard',
            component: DashboardPage
        },

        {
            path: '/workerSignUpPage',
            component: WorkerSignUpPage
        },

        {
            path: '/logout',
            onEnter: (nextState, replace) => {
                Auth.deauthenticateUser();
                Auth.removeUser();

                // change the current URL to /
                replace('/');
            }
        }

    ]
};

export default routes;
