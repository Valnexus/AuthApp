import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import useToken from './hooks/useToken';

const App = () => {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />            
          <Route path="/dashboard"  element={<Dashboard />} />            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
