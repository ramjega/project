import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import Auth from '../modules/Auth';


const Base = ({children}) => (
    <div>
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand active" href="#">WAS</a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><a href="#">Home</a></li>
                </ul>
                {Auth.isUserAuthenticated() &&
                <ul className="nav navbar-nav pull-right">
                    <li className="active"><Link to="/logout">Log out</Link></li>
                </ul>
                }
                {!Auth.isUserAuthenticated() &&
                <ul className="nav navbar-nav pull-right">
                    <li className="active"><Link to="/login">Log in</Link></li>
                    <li className="active"><Link to="/signup">Sign up</Link></li>
                </ul>
                }
            </div>
        </nav>

        {/* child component will be rendered here */}
        {children}

    </div>
);

Base.propTypes = {
    children: PropTypes.object.isRequired
};

export default Base;
