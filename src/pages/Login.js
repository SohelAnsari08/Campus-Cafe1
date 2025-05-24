import React from "react";
import Template from "../components/Template";

function Login({setIsLoggedIn, setCurrentpage}){
    return(
        <Template 
            title="Welcome Back"
            formtype="login"
            setIsLoggedIn={setIsLoggedIn}
            setCurrentpage={setCurrentpage}
        />
    )
}

export default Login;