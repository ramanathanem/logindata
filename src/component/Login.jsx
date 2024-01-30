import './Login.css';
import profile from "./../image/a.png"
import email from "./../image/email.jpg";
import pass from "../image/pass.png";
import login from "./../image/login.jpg";
import Table from "react-bootstrap/Table";
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react';
function Login() {
    const[id,setId]=useState("");
    const[name,userName]=useState("");
    const[emailid,setEmail]=useState("");
    const[passwords,setPassowrd]=useState("")
    const[use,setUse]=useState([{
        
        
    }])
    const handleSumbit=()=>{
        setUse([...use,{id:id,name:name,emailid:emailid,passwords:passwords}])
      setEmail(""); setPassowrd("") ; userName("")

    }
  return (
    <div className="main" maxWidthstyle="lg md xs">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Login Page</h1>
           <div className="second-input">
             <img src={login} alt="pass" className="email"/>
             <input type="text" placeholder="user name " className="name" value={name} onChange={e=>userName
            (e.target.value)}/>
           </div>
           <div className="second-input">
             <img src={email} alt="email" className="email"/>
             <input type="text" placeholder="user email" className="name"
             value={emailid} onChange={e=>setEmail
                (e.target.value)}/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="user Password" className="name"
              value={passwords} onChange={e=>setPassowrd
                (e.target.value)}/>
           </div>
           
          <div className="login-button">
          <Link to="/login"><button onClick={handleSumbit}>Login</button></Link>
          
          </div>
      
         </div>
         {use.map(e=>(
            <div>
               
               
               <Table striped bordered hover>
         <table className='center '>
            <thead>
                
                <tr >
                 
                    <th >{e.name}</th>
                    <th> {e.passwords}</th>
                    <th >{e.emailid}</th>

                </tr>
              

            </thead>
         </table>
         </Table>
         </div>
         ))}
      
       </div>
    
    
    
     </div>
     
  
    </div>
  
    
  );
}

export default Login;
