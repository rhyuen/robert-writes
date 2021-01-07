import React from "react";

export default function Footer(){

    const [email, setEmail] =  React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpointURL = "https://vercelcors.vercel.app/api/email";        
        const data = {
            email: email
        };
        const response = await fetch(endpointURL, {
            mode: "cors",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json());
        console.log(response);
        setEmail("");
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