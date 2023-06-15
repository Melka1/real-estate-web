'use client'

import React, {useState, useContext} from "react";
import {useSession, signIn, signOut} from 'next-auth/react';
import './login.css'

export default function SignIn(){

    const [email, setEmail] = useState("");
    const [name, setName] = useState("")
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const session = useSession()

    const isInvalid = password===''||email==='';

    const handleSignIn = (event) =>{
      event.preventDefault();
      console.log(name, email, password)
      fetch('/api/user',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      })
      .then(res => res.json())
      .then(data=>{
        console.log(data)
        if(data.status==400){
          setError(data.message)
          setEmail("")
          setName("")
          setPassword("")
        }
      })
      .catch(err => console.log(err))
    }

    // console.log(session)

    if(email && error){
      setError("")
    }
 
    return (
        <div>
          <div className="signin--container">
              <h1 className="signin--title">Sign In</h1>
              {error && <div className="submit--error">{error}</div>}
              <form id="signin" className="signin--base" onSubmit={handleSignIn}>
              <input 
                  type="text" 
                  name="name" 
                  className="signin--input"
                  value={name}
                  placeholder="Name" 
                  onChange={({target})=>setName(target.value)} 
                />
                <input 
                  type="email" 
                  name="email" 
                  className="signin--input"
                  value={email}
                  placeholder="Email Address"
                  onChange={({target})=>setEmail(target.value)} 
                />
                <input 
                  className="signin--input"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={({target})=>setPassword(target.value)} 
                />
                <button disabled={isInvalid} type="submit" className="signin--submit">
                  Sign In
                </button>
                <button onClick={()=>signIn()} type="button" className="signin--submit">
                  Sign In with Google
                </button>
              </form>
              <p className="signin--text">
                Already have an account? <a className="signin--link" href="/login">Log in.</a>
              </p>
              <p className="signin--textsmall">
                This page is protected by Google reCAPTCH to ensure you're not a bot. Learn more.
              </p>
          </div>
        </div>
    )
}