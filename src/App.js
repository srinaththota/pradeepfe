import Login from './components/Login';
import { useSelector } from 'react-redux'
import './App.css';
import { useEffect } from 'react';
import Home from './pages/home/Home';
function App() {
  const token = useSelector(state=>state.login.token)
  console.log(token,"**")

  return(
  <>
  {!token && <Login/>}
  {token && <Home/>}
  </>
)  
}

export default App;
