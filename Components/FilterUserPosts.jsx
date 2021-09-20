import axios from 'axios';
import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router'
import '../Components/style.css'
function FilterUserPosts() {
    var params = useParams()
    console.log(params)
    const [user, setuser] = useState([])
    const [post, setpost] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${params.id}`)
            .then((res) => {
                console.log(res.data)
                setpost(res.data)
            })
            .catch((err) => console.log(err))

        //get user data
        axios.get(`https://jsonplaceholder.typicode.com/users?id=${params.id}`)
        .then((res) => {
            setuser(res.data[0])
        })
        .catch((err) => console.log(err))     
    }, [])
    return (
        <div className="container mt-3">
            <div className="card text-center">
                <div className="cart-hreader py-2">
                    <span className="h5 "><strong>{user['name']}</strong> All Posts</span> 
                </div>
            </div>
            <div className="parent mt-4">
                {post.map((data,index) => (
                    <div class="card" key={index}>
                        <div class="card-header h5">
                            {data['title']}
                        </div>
                        <div class="card-body">
                        <p class="card-text">{data['body']}.</p>
                        <a href="#" class="">Read more</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FilterUserPosts
