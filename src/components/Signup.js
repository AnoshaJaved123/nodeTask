import React, { useState } from 'react'
import { useDispatch } from "react-redux";

const Signup = () => {

  const [nameuser, setnameuser] = useState("")
  const [roleuser, setroleuser] = useState("")


  const [values, setValues] = useState({ name:"", email: "", password: "" })
  const { name,email, password } = values;
  // const dispatch = useDispatch();

  const handlesignup = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:5003/api/userAuth/usercreate`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({ name: values.name, email: values.email, password: values.password }) // body data type must match "Content-Type" header
    });
    const json = await response.json();
    console.log(json);

  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-5 offset-md-3">
            <form>
              <div className="form-group">
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Name</label>
                <input value={name} onChange={(e) => { setValues({ ...values, name: e.target.value }) }} type="text" className="form-control" id="exampleInputPassword1" placeholder="Name" />
              </div>
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input value={email} onChange={(e) => { setValues({ ...values, email: e.target.value }) }} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input value={password} onChange={(e) => { setValues({ ...values, password: e.target.value }) }} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
              <div  className="text-center">
                <button onClick={handlesignup} type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup