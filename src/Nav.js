import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import './Nav.css';
function Nav() {
const [show, handleShow] = useState(false);
const history = useHistory();


const transitionNavBar = () =>{
    if(window.scrollY > 100){
        handleShow(true);
        
    }else{
        handleShow(false);
    }
}

useEffect(() => {
window.addEventListener('scroll',transitionNavBar);

return () => {
    window.removeEventListener('scroll',transitionNavBar);
}
},[]);
    return (
        <div className={`nav ${show && 'nav_black'}`}>
        <div className="nav_container">
        <img
            className="nav_logo"
            onClick={()=>history.push('/')}
            src="https://www.freepnglogos.com/uploads/netflix-tv-logo-png-9.png"
            alt=""
          />

        <img
                onClick={()=>history.push('/profile')}
              className="nav_avatar"
              src="https://th.bing.com/th/id/OIP.sI_At3px9qmLx-9TNEee0gHaGK?pid=Api&rs=1"
              alt=""
          />
        </div>
        </div>
    )
}

export default Nav
