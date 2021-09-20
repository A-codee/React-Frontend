import axios from 'axios';
import {React,useState,useEffect} from 'react'
function Login() {
    const [email, setemail] = useState('');
    const [users, setusers] = useState([]);
    const [Alert, setsetAlert] = useState(false);
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            console.log(res.data)
            setusers(res.data)
        })
        .catch((err) => console.log(err))
        
    }, [])
    const signin = () =>{
        if(users)
        {
            for (let index = 0; index < users.length; index++) {
                if (users[index]['email'] != email)
                {
                    continue;
                } 
                else{
                    localStorage.setItem('email' ,users[index]['email']);
                    localStorage.setItem('userId' ,users[index]['id']);

                    window.location = "/"
                    return;
                }
            }
            setsetAlert(true);
        } 
    }
    return (
        <div className="container mt-5 shadow-sm p-3">
            { Alert &&
                <div className="alert alert-danger">
                    <span><strong>!Warning </strong> User not found</span>
                </div>
            }
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setemail(e.target.value)} />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="button" class="btn btn-primary" onClick={()=>{signin()}}>SignIn</button>
        </div>
    )
}

export default Login
