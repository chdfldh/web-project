import React from 'react';
import ReactDOM from'react-dom';

import App from './App';

ReactDOM.render(<App />,document.getElementById('root'));

import React from 'react';

class App extends React.Component { 
    
    render(){
        return(
            <div>App</div>
        )
    }
}

export default App;