import React from 'react'
import { Outlet,NavLink } from 'react-router-dom'
const navbar = () => {
  return (
    <div>
        <div className="nav-outer">

       
     <div className="navbar">
        <div className="nav-section">
        <div className="logo-left">
          <h1 className='logo' >M-Ashiyana</h1>
        </div>
        <div className="nav-rigth">
         <ul>
         <NavLink  
          className={({isActive})=>(isActive?'color':'')} to={'/'} 
           end
            
            >
           <li>Home</li>
            </NavLink>
            <NavLink  
           className={({isActive})=>(isActive?'color':'')} to={'ourwork'} 
           end
            
            >
           <li>Our Work</li>
            </NavLink>
            <NavLink  
           className={({isActive})=>(isActive?'color':'')} to={'donation'} 
           end
            
            >
           <li>Donations</li>
            </NavLink>
            <NavLink  
           className={({isActive})=>(isActive?'color':'')} to={'blog'} 
           end
            
            >
           <li>Blog</li>
            </NavLink>
            
           
           
            <li>About</li>
         </ul>
         <div className="btn-join"><button className='join-our-team' >Join our Team</button></div>
         <ul>
           <NavLink  
           className={({isActive})=>(isActive?'color':'')} to={'login'} 
           end
            
            >
            Sing in 
            </NavLink>
         </ul>
          
        </div>

     </div>
     </div>
     </div>
      <Outlet/>
    </div>
  )
}

export default navbar
