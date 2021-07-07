import React, {useState} from 'react';
import axios from 'axios';


function Signin(props) {

    const [error, setError] = useState()
    const [data, setData] = useState({
        username: "",
        password: "",
    })

const handleChange = (event) => {
	// In our handleChange function we setData to the state to be the value of whatever
	//the user typed in the forms using principle of inmutability 
		setData({
			...data,
			[event.target.name] : event.target.value
		})
    }
    
    //this function helps us handle the onSubmit event of the form
const handleSubmit = (event) => {
    //send datat to our endpoint
    console.log(data);
    event.preventDefault()
    axios.post("http://localhost:5000/api/login", data)
    .then(result => {
        console.log(result.data)
        localStorage.setItem("token", result.data.payload)
        props.history.push('/friendlist')
    })
    .catch(err => {
        setError(err.response.data.message)
    })

}


  return (
    <div>
            <h1>Sign in form</h1>
            <form onSubmit={handleSubmit}>
                    <input type="username" name="username" placeholder="Username" value={data.user} onChange={handleChange} />
                    <input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} />

                    <button type="submit">Sign In</button>
            </form>
            
    </div>
  );
}

export default Signin;
