import React from "react";
import Template from "../components/Template";

function Signup({setIsLoggedIn,setCurrentpage}){
    return(
        <div>
            <Template 
                title="Create Your Account"
                formtype="signup"
                setIsLoggedIn={setIsLoggedIn}
                setCurrentpage={setCurrentpage}
            />
        </div>
    )
}

export default Signup;