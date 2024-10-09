
function getUserData(){
    const userData = {
    name: document.getElementById("fullName").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
    };

    console.log("JSON:")
    console.log(JSON.stringify(userData, null, 2));
}
