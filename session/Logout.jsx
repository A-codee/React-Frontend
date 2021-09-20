const logout = () =>{
    console.log("logout successfully")
    localStorage.email = '';
    localStorage.userID = '';
    window.location = "/login"
}
export default logout;