import React from "react"

export default function Login(navProps) {
    return (
        <div className="container--login">
            <form className="form" onSubmit={navProps.handleSubmit}>

                <i className="fa-solid fa-xmark" onClick={() => navProps.setLogin(false)}></i>
                <h2 className="greeting">Welcome back!</h2> 

                <label htmlFor="email">EMAIL ADDRESS</label>
                <input type="email" className="email" required
                       placeholder="name@email.com" id="email"
                       name="email" onChange={navProps.handleFormData}
                       value={navProps.formData.email}/>

                <label  htmlFor="password">PASSWORD</label>
                <input type="password" className="password" required
                       placeholder="Password" id="password"
                       name="password" onChange={navProps.handleFormData}
                       value={navProps.formData.password}/>

                <div className="middle-section">
                    <div>
                        <input type="checkbox" id="remember--me" name="isRemember"
                               onChange={navProps.handleFormData}
                               checked={navProps.formData.isRemember}/>   
                        <label htmlFor="remember--me">Remember me</label> 
                    </div>
                    <p className="forgot--password">Forgot password?</p>
                </div>
                   
                <button>Login</button>   

                <div className="register">
                    <p>Dont have an account?</p>
                    <span>Register</span>
                </div>

            </form>
        </div>
    )
}