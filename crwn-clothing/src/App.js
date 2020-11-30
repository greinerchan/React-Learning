
import './App.css';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';


function App() {
  return (
    <div>
      <switch>
        <Route exact path='/' component={HomePage} />

      </switch>
    </div>
  );
}

export default App;
