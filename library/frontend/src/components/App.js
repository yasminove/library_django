import React, { Component } from 'react';

import ReactDOM from 'react-dom'; 

class App extends Component {
    render(){
        return(
            <div>
                <h2>From react</h2>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))