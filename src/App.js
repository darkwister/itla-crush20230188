import './App.css';
import FormRegister from './components/registerComponent/registerForm'
import { Routes, Route } from 'react-router-dom';
import MainScreen from './components/mainScreenComponent/mainScreen';
import NavBar from './components/navBarComponent/NavBar';

 
const App = () => (
  <div>
  <NavBar></NavBar>
  <Routes>
    <Route path="/" element={<MainScreen />} />
    <Route path="/register" element={<FormRegister/>} />
  </Routes>
  </div>
)
 
export default App;