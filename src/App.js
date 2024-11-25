import './App.css';
import handleSubmit from './handler/handlesubmit';
import { successAlert, failureAlert } from './utils/alerts';
import { useRef } from 'react';
 
function App() {
  const username = useRef();
  const password = useRef();
 
    const submithandler = (e) => {
      e.preventDefault();
      handleSubmit(username.current.value, password.current.value).then(() =>{
        successAlert("USUARIO REGISTRADO");
      }).catch((error) => {
        failureAlert("ERROR AL REGISTRAR USUARIO");
      })
      username.current.value = ""
      password.current.value = ""
    }
 
  return (
    <div className="App">
      <form onSubmit={submithandler}>
        <input type= "text" ref={username}/>
        <input type= "text" ref={password}/>
        <button type = "submit">Save</button>
        
      </form>
    </div>
  );
}
 
export default App;