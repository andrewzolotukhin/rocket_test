import React, { Component } from 'react';
import { Link } from 'react-router';
import Library from 'common';
import './style.scss';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <h1>Some header here</h1>
            <div>
                <Link to='/page2'>to page 2</Link>
            </div>
            <p>
                {Library()}
            </p>
        </div>;
    }
}

export default App;
