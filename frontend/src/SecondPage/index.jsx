import React, { Component } from 'react';
import { Link } from 'react-router';
import Image1 from './images/image1.jpeg'

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <h1 class="header">Page 2 header</h1>
            <div>
                <img src={Image1} alt="" />
            </div>
            <div>
                <Link to='/'>to index</Link>
            </div>
        </div>;
    }
}

export default App;
