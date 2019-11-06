import React, {useState} from 'react';


function Signin() {

const [data, setData] = useState({
    email: "",
    password: "",
})
  return (
    <div>
     <h1>Sign in form</h1>
     <form>
			<input type="email" name="email" placeholder="Email" value={data.email} onChange={handleChange} />
			<input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} />

			<button type="submit">Sign In</button>
	</form>
      
    </div>
  );
}

export default Signin;
