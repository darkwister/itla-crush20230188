import './App.css';
import FormRegister from './components/registerComponent/registerForm'
import { Routes, Route } from 'react-router-dom';
import MainScreen from './components/mainScreenComponent/mainScreen';
 
const App = () => (
  <Routes>
    <Route path="/" element={<MainScreen />} />
  </Routes>
)
 
export default App;