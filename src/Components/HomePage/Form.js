import React, { useState } from "react";

function SignIn() {

    const[name,setname]=useState("")
    const[email,setemail]=useState("")
    const[number,setnumber]=useState("")    
    const[address,setaddress]=useState("")
    
    const handleSubmit=(e)=>{e.preventDefault();};
    return (
      <>
        <form className="form" onSubmit={handleSubmit}>
            <input className="elements" value={name} onChange={(e)=>setname(e.target.value)} placeholder="YOUR GAMING TITLE"/><br/>
            <input className="elements" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="YOUR ACTUAL EMAIL"/><br/>
            <input className="elements" value={number} onChange={(e)=>setnumber(e.target.value)} placeholder="CONTACT NUMBER"/><br/>
            <input className="elements" value={address} onChange={(e)=>setaddress(e.target.value)} placeholder="YOUR LOCATION"/><br/>
        </form>
      </>
    );
  }
  
export default SignIn;