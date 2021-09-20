import axios from 'axios';
import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import '../Components/style.css'
function Home() {
    const [post, setpost] = useState([])
    const [tempost, settempost] = useState([])
    const [postname, setpostname] = useState('')
    const [user, setuser] = useState([])

    var userId = localStorage.userId;
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then((res) => {
                console.log(res.data)
                setpost(res.data)
                settempost(res.data)
            })
            .catch((err) => console.log(err))
            .finally(()=>{
              
            })

        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => {
            setuser(res.data)
        })
        .catch((err) => console.log(err))
        .finally(()=>{
            
        })    
    }, [])

    const strcmp = (str, name, n) =>
    {
        if (str.substring(0, n).toString() < name.toString()) return false;
        if (str.substring(0, n).toString() > name.toString()) return false;
        return true;
    }

    const filterPosts = (name) =>{
        setpost(tempost);
        let n = name.length;
        console.log(n)
        let filterPost = post.filter((getPost)=>{
            let str = getPost['title'];
            return strcmp(str, name ,n);
        });

        if (n === 0)
        {
            setpost(tempost);
        }
        else{
            setpost(filterPost);
        }

    }
    return (
        <div>
            <div className="container-fluid my-4">
                <div className="row px-5">
                    <div className="col-9">
                        <div className="shadow-sm rounded p-4 bg-light">
                            <input type="text" placeholder="search post by title" className="form-control" name="" id="" onChange={(e)=>filterPosts(e.target.value)} />
                        </div>
                        <div className="parent mt-4">
                            {post.map((data,index) => (
                                <div class="card" key={index}>
                                    <div class="card-header h5">
                                        {data['title']}
                                    </div>
                                    <div class="card-body">
                                    <p class="card-text">{data['body']}.</p>
                                    <a href="#" class="">Read More</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="bg-primary rounded ">
                            <div className="h3 text-center text-white">
                                Filter post by User 
                            </div>
                        </div>
                        <div className="bg-light h-100">
                            {user.map((data) => (
                                <div className="mt-4 px-3">
                                    <Link to={`/user_posts/${data['id']}`}>{data['name']}</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
