import axios from 'axios';
import React, { useState,useEffect } from 'react'

function Profile() {
    const [user, setuser] = useState([])
    const [address, setaddress] = useState([])
    const [company, setcompany] = useState([])
    var userId = localStorage.userId;
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
            .then((res) => {
                console.log(res.data[0]['address'])
                setuser(res.data[0])
                setaddress(res.data[0]['address'])
                setcompany(res.data[0]['company'])
            })
            .catch((err) => console.log(err))
            .finally(()=>{
              
            })
    }, [])
    return (
        <div className="container my-5 ">
            {user &&
                <div className=" mt-5">
                    <div class="container ">
                        <div className="row">
                            <div className="col-sm-12 shadow p-4">
                                <div className="h3 text-center"> {user['name']}</div>
                                <div className="mt-2">
                                    <span><strong>username:</strong> {user['username']}</span>
                                </div>
                                <div className="mt-2">
                                    <span><strong>email:</strong> {user['email']}</span>
                                </div>
                                <div className="mt-2">
                                    <span><strong>phone:</strong> {user['phone']}</span>
                                </div>
                                <div className="mt-2">
                                    <span><strong>website:</strong> {user['website']}</span>
                                </div>
                                
                                <hr />
                                <div className="mt-2">
                                    <span><strong>address:</strong> {address['street']} ,{address['suite']}, city - {address['city']} ({address['zipcode']})</span>
                                </div>

                                <hr />
                                <div className="mt-2">
                                    <div className="h4 text-muted">Company Information</div>
                                    <div className="mt-2">
                                        <span><strong>Name:</strong> {company['name']}</span>
                                    </div>
                                    <div className="mt-2">
                                        <span><strong>catchPhrase:</strong> {company['catchPhrase']}</span>
                                    </div>
                                    <div className="mt-2">
                                        <span><strong>bs:</strong> {company['bs']}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Profile
