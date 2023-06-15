'use client'

import React, {useState, useContext} from "react";
import {useRouter} from 'next/navigation'
import {useSession, signIn, signOut} from 'next-auth/react';
import './login.css'

export default function SignIn(){
    const router = useRouter()
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const session = useSession()

    const isInvalid = password===''||emailAddress==='';

    const handleSignIn = (event) =>{
      console.log(emailAddress, password)
      event.preventDefault();
      fetch(`/api/user?email=${emailAddress}&password=${password}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(res => res.json())
      .then(data=>{
        console.log(data)
        if(data.status==400){
          setError(data.message)
          setEmailAddress("")
          setPassword("")
        } else {
          session.data = data
          session.status = "authenticated"
          router.push("/")
        }

      })
    }

    console.log(session)

    if(emailAddress && error){
      setError("")
    }
 
    return (
        <div>
          <div className="signin--container">
              <h1 className="signin--title">Log In</h1>
              {error && <div className="submit--error">{error}</div>}
              <form id="signin" className="signin--base" onSubmit={handleSignIn}>
                <input 
                  type="email" 
                  name="email" 
                  className="signin--input"
                  placeholder="Email Address"
                  value={emailAddress}
                  onChange={({target})=>setEmailAddress(target.value)} 
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
                  Log In
                </button>
                <button onClick={()=>signIn()} type="button" className="signin--submit">
                  Log In with Google
                </button>
              </form>
              <p className="signin--text">
                Don't have an account? <a className="signin--link" href="/signin">Sign up now.</a>
              </p>
              <p className="signin--textsmall">
                This page is protected by Google reCAPTCH to ensure you're not a bot. Learn more.
              </p>
          </div>
        </div>
    )
}