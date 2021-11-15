import React from 'react'
import './splash.css'



const SplashPage = () => {
    //code out an instagram splash page
// Language: javascript
// splash page should have, email/username input field
// password input field
// login button
// sign up button
// demo login button

//import functioanlity for login signup and demo login



    return (
        <div>
            <div className="splash-page">
            <div className="splashImg"></div>
            <input type="text" placeholder="username or email" />
            <input type="password" placeholder="password" />
            <button>login</button>
            <button>sign up</button>
            <button>demo login</button>
            </div>
        </div>
    )
}

export default SplashPage
