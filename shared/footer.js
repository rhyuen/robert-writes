import React from "react";
import {sendEmailDetails} from "../services/index";

export default function Footer(){

    const [email, setEmail] =  React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        let mounted = true;
        sendEmailDetails(email).then(res => {
            if(mounted){
                setEmail("");
            }
        
        }).catch(e => {
            console.log(e);
            console.log("error with sending email");
        }).finally(()=>{
            return () => {
                mounted = false;
            }
        });        
    }

    return (
        <footer>
            <h3>Perhaps consider adding your email below.</h3>
            <form onSubmit = {handleSubmit}>
                <input type ="text" 
                    value={email} 
                    onChange = {e => setEmail(e.target.value)} 
                    placeholder ="email"/><br/>
                <input type = "submit" value="Subscribe"/>
            </form>
        </footer>
    );
}