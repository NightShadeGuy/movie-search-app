import React from "react"

export default function Profile(navProps) {
    const userName = navProps.formData.email.slice(0, 11);

    function logout() {
        navProps.setFormData(prevFormData => {
            return {
                ...prevFormData,
                successFullyLogin: false
            }
        })
    }

    function lightMode() {
        navProps.setFormData(prevFormData => {
            return {...prevFormData, darkMode: !prevFormData.darkMode}
        })

        const navbar = document.querySelector(".navbar");
        const profileContainer = document.querySelector(".option");
        const sidebar = document.querySelector(".sidebar--container");

       // !profileContainer.classList.contains("lightMode")

        if(!navProps.formData.darkMode) {
            navbar.classList.add("lightMode");
             profileContainer.classList.add("lightMode"); 
            sidebar.classList.add("lightMode");       
        } else {
            navbar.classList.remove("lightMode");
             profileContainer.classList.remove("lightMode"); 
            sidebar.classList.remove("lightMode");
        }      
    }


    return (
        <div className="profile--container">
             <img src="./images/image.jpg" className="nav--image" onClick={navProps.toggle}/>

        { navProps.show &&
        <div className="option">
            <div className="user">
                <img src="./images/image.jpg" className="nav--image"/>
                <p>{userName[0].toUpperCase() + userName.substr(1)}</p>
            </div>

              <ul>
                  <div className="profile--item" onClick={lightMode}>               
                    { navProps.formData.darkMode && <i className="fa-solid fa-moon"></i> }
                    { !navProps.formData.darkMode && < i className="fa-solid fa-sun"></i> }
                    <li>{ navProps.formData.darkMode ? "DarkMode" : "LightMode" }</li>
                  </div>

                  <div className="profile--item" onClick={logout}>
                      <i className="fa-solid fa-arrow-right-from-bracket"></i>
                      <li>Logout</li>
                  </div>         
              </ul>
        </div> }
    </div>
    )
}