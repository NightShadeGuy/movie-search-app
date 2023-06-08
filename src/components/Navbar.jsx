import React, { useState } from "react"
import Login from "./Login";
import Profile from "./Profile"


export default function Navbar(props) {
  const [show, setShow] = useState(false); 

  function toggle() {
    setShow(prevVal => !prevVal); 
  }

    return(
        <nav className="navbar">
            <h1 className="nav--title">PopVid</h1>
            <div className="wrapper">
                <i className="fa-solid fa-magnifying-glass"></i>  
                <input type="text" 
                       className="search" 
                       placeholder="Enter keywords..."
                       name="inputVal"
                       value={props.inputVal}
                       onChange={props.handleChange}
                       onKeyPress={props.handleKeyPress}/>
            </div>
            { props.formData.successFullyLogin &&
             <Profile  show={show}
                       formData={props.formData}
                       setFormData={props.setFormData}
                       toggle={toggle}/> 
            }

            {
              !props.formData.successFullyLogin &&
              <div className="nav--login" onClick={props.handleLogin}>
                  <i className="fa-solid fa-user" style={{color: props.formData.darkMode ? "black" : "" }}></i>
                  <h2 className="login" style={{color: props.formData.darkMode ? "black" : "" }}>Login</h2>
              </div>
            }
            
            { props.login && 
            <div className="overlay">
              <Login  formData={props.formData}
                      setLogin={props.setLogin} 
                      handleFormData={props.handleFormData}
                      handleLogin={props.handleLogin}
                      handleSubmit={props.handleSubmit} /> 
            </div>
            }
        </nav>
    )
}