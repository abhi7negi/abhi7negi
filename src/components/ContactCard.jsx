import React from 'react'

const ContactCard = (props) => {
    const {id,name,email}=props.contact
  return (
    <div>
         <li>{name}</li>
         <li>{email}</li>

         <button onClick={()=>props.clickhandler(id)}>delete</button>
           
        </div>
  )
}

export default ContactCard