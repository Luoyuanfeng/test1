import React, { Component } from 'react';
import Router from './router/Router'

class App extends Component {

    componentWillMount() {
        console.log('aaaaaaaa')
    }

    render() {
        console.log('bbbbbbbb')
        return (
            <div><Router /></div>
        );
    }
}

export default App;
