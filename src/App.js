import './App.css';
import FormRegister from './components/registerComponent/registerForm'
import { Routes, Route } from 'react-router-dom';
import MainScreen from './components/mainScreenComponent/mainScreen';
import NavBar from './components/navBarComponent/NavBar';
import LoginForm from './components/loginComponent/loginForm';
import Profile from './components/profileComponent/profile';
import 'bootstrap/dist/css/bootstrap.min.css';

 
const App = () => (
  <div>
  <NavBar></NavBar>
  <Routes>
    <Route path="/" element={<MainScreen />} />
    <Route path="/register" element={<FormRegister/>} />
    <Route path="/login" element={<LoginForm/>}/>
    <Route path="/profile" element={<Profile/>}/>
  </Routes>
  </div>
)
 
export default App;