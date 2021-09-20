import React from 'react'
import { Link } from 'react-router-dom'
import logout from './session/Logout'


function Navigation() {
    return (
        <div className=" bg-light">
            <nav class="navbar navbar-expand-lg navbar-light px-5">
                <div class="container-fluid">
                    <Link class="navbar-brand text-success" to="/" >Home</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="d-flex">
                        {localStorage.email === '' &&
                            <Link class="btn btn-primary" to="/login">Login</Link>
                        }
                        {localStorage.email != '' &&
                            <div>
                                <Link class="btn btn-primary" to="/profile">View Profile</Link>
                                
                                <button class="mx-3 btn btn-warning" type="button" onClick={()=>logout()}>Logout</button>
                            </div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation
