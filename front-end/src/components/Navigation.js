
import React from 'react';
import {Link,useNavigate} from 'react-router-dom';

const Navigation = () => {
  const auth =localStorage.getItem('user');
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate('/signup')
  }
  return (
    <div >
      <img alt='logo' className='logo'src='https://img.freepik.com/premium-vector/ab-logo-vector-modern-letter-design-concept_487414-3217.jpg?w=360'/>
      {
        auth ?
        <ul class="nav-ul">
       <li><Link to="/">Products</Link></li>
       <li><Link to="/add">Add Product</Link></li>
       <li><Link to="/update">Update Product</Link></li>
       <li><Link to="/profile">Profile</Link></li>
       <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li></ul>
      :
      <ul className="nav-ul nav-right">
      <li><Link to="/signup">Sign up</Link></li>
       <li><Link to="/login">Login</Link></li>
       </ul>
      }
       
     </div> 
     
     
  )
}

export default Navigation;
