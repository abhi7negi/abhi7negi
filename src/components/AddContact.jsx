import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const AddContact = (props) => {

    const [name,setName]=useState('');

    const [email,setEmail]=useState('');

    const navigate = useNavigate();

    function submitHandler(e){
    
        e.preventDefault();
        
        const state={name:name,email:email}

             props.getContact(state)
            navigate('/');
   
    }
  return (
    <div>
      <form action="" className='form' onSubmit={submitHandler}>
        <input type="email" name="" id="" value={email} onChange={(e)=>{
           setEmail(e.target.value) 

        }}/>
        <br />
        <input type="text" name="" id="" value={name} onChange={(e)=>{
                 setName(e.target.value)
        }}/>
         
          <input type="submit" value="ADD CONTACT" />
      </form>
    </div>
  )
}

export default AddContact

           

