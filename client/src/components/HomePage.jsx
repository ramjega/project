import React from 'react';
import Worker from '../components/Worker.jsx';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            workers: []
        }


    };

    componentDidMount() {
        this.getWorkers();
    }

    getWorkers() {
        // create an AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open('get', '/auth/workers');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {

                this.setState({
                    errors: {},
                    workers: xhr.response
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
        console.log("workers", this.state.workers);
        let workers = this.state.workers;
        return (
            <div className="container-fluid">
                <center><h1>WAS home page</h1></center>
                <div className="col-sm-12">
                    <div className="row">
                        {
                            workers.length !== 0 &&
                            workers.map((worker, index) => {
                                return (
                                    <div className="col-sm-3">
                                        <Worker worker={worker} key={index}/>
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

export default HomePage;
