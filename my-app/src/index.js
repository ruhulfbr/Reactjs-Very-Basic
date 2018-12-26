import React from 'react';
import ReactDOM from 'react-dom';
// import HellowWorld from './App';
// import Method from './Method';
// import Clock from './Clock';
import Myevents from './Events';
import './index.css';
//import * as serviceWorker from './serviceWorker';

//var h1 = React.createElement('h1',null, 'I love React');


ReactDOM.render(
    <div>
        {/* <HellowWorld link='https://www.facebook.com/' linkTxt = 'Facebook '  />
        <HellowWorld link='https://www.google.com/' linkTxt = 'Google '  />
        <HellowWorld link='https://www.youtube.com/' linkTxt = 'Youtube '  />
        <HellowWorld link='https://www.linkedin.com/' linkTxt = 'LinkedIn '  />
        <Method/> */}
        {/* <Clock /> */}
        <Myevents />
        <br/>

    </div>

, document.getElementById('root'));




//serviceWorker.unregister();
