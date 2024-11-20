import './App.css';
import handleSubmit from './handler/handlesubmit';
import { useRef } from 'react';
 
function App() {
  const dataRef = useRef()
 
  const submithandler = (e) => {
    e.preventDefault()
    handleSubmit()
    dataRef.current.value = ""
  }
 
  return (
    <div className="App">
      <form onSubmit={submithandler}>
        <input type= "text" ref="User"/>
        <input type= "text" ref="Password"/>
        <button type = "submit">Save</button>
      </form>
    </div>
  );
}
 
export default App;