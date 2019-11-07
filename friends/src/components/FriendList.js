import React, {useState, useEffect} from 'react';
import axios from 'axios';


function FriendList(props) {

  
    const [error, setError] = useState()
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/api/friends", { headers: {Authorization: localStorage.getItem("token")}})
        .then(result => {
           const list = result.data
           list.forEach(element => {
               setData([...data, element])
           });
        })
        .catch(err => {
            setError(err.response.data.message)
        })
      }, []);




      
  return (
    <div>
            <h1>FriendList</h1>
           
    </div>
  );
}

export default FriendList;
