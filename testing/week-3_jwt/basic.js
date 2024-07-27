async function getAnimalData() {
    //const response = axios.get("URL");
    const response = await fetch("URL", {
        headers : {
            "Authorization": localStorage.read("token")
            // whenever a req is sent,if token is available in local storage then only it will proceed
            // token will be available as long as user is loged in 
        }
    });
    const finalData = await response.json()
    console.log(finalData);
}

getAnimalData();