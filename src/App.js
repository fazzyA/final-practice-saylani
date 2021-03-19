import logo from './logo.svg';
import './App.css';
import Myfunction, { UserContext } from './context/UserContext';
import User from './components/User';
function App() {
  return (
    <div className="App">
      <Myfunction>
        <User/>
      </Myfunction>
    </div>
  );
}

export default App;
