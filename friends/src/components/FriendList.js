import React, {useState, useEffect} from 'react';
import Friend from './Friend.js';
import axios from 'axios';


function FriendList(props) {

  
    const [error, setError] = useState()
    const [data, setData] = useState()


    useEffect(() => {
        axios.get("http://localhost:5000/api/friends", { headers: {Authorization: localStorage.getItem("token")}})
        .then(result => {
           setData(result.data)
        })
        .catch(err => {
            setError(err.response.data.message)
        })
      }, []);

  return (
    <div>
            <h1>FriendList</h1>
            {data && <Friend data={data}/>}
           
    </div>
  );
}

export default FriendList;
