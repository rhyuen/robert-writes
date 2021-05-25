

export async function sendEmailDetails(email){
    const endpointURL = "https://vercelcors.vercel.app/api/email";        
    const data = {
        email: email
    };

    const options = {
        mode: "cors",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };

    return fetch(endpointURL, options)
        .then(res => {
            if(res.ok){
                return res.json();
            }else{
                throw new Error("Issue with saving your email details.");
            }            
        });    
}