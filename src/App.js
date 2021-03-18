import logo from './logo.svg';
import './App.css';
import UserContextProvider, { UserContext } from './context/UserContext';
import User from './componenets/User';
function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <User/>
      </UserContextProvider>
    </div>
  );
}

export default App;
