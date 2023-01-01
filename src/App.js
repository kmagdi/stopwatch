import './App.css';
import React from 'react';
import { Watch } from './Watch';
import {TimeProvider} from './TimeContext';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Gradient } from 'react-gradient';

const gradients = [
  ['#bd19d6', '#ea7d10'],
  ['#ff2121', '#25c668'],
];

function App() {
  return (
    <TimeProvider>
      <div className="App border shadow">
      <Gradient gradients={ gradients } // required
                property="text"
                duration={ 3000 }
                angle="45deg">
         <h1 className="w-100 text-center">Stopwatch</h1>
      </Gradient>
           <Watch/>
      </div>
    </TimeProvider>
  );
}

export default App;
