import Login from './components/Login';
import { useSelector } from 'react-redux'
import './App.css';
import Home from './pages/home/Home';
function App() {
  const token = useSelector(state=>state.login.token)
  return(
  <>
  {!token && <Login/>}
  {token && <Home/>}
  </>
)  
}

export default App;
