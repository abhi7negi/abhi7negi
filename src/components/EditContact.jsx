import React,{useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const EditContact = (props) => {

    // const oldemail= props.location.state.contact.email;
    // const oldname= props.location.state.contact.name;
    const location = useLocation();
  const { from } = location.state;
 
    const [name,setName]=useState(from.name);

    const [email,setEmail]=useState(from.email);

    const navigate = useNavigate();

    function updateHandler(e){
    
        e.preventDefault();
        
        const state={id:from.id,name:name,email:email}

             props.editContact(state)
            navigate('/');
   
    }
  return (
    <div>
      <form action="" className='form' onSubmit={updateHandler}>
        <input type="email" name="" id="" value={email} onChange={(e)=>{
           setEmail(e.target.value) 

        }}/>
        <br />
        <input type="text" name="" id="" value={name} onChange={(e)=>{
                 setName(e.target.value)
        }}/>
         
          <input type="submit" value="UPDATE CONTACT" />
      </form>
    </div>
  )
}

export default EditContact
