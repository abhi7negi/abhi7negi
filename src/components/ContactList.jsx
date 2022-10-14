import React from 'react'
import ContactCard from './ContactCard'

function ContactList(props) {

    const removeContactHandler=(id)=>{

       

        props.getcontactId(id)

         
    }

    const renderedList=props.contacts.map((contact)=>{

          return(
             <ContactCard contact={contact} clickhandler={removeContactHandler} key={contact.id}/>
          )

    })
  return (
    <div>
        {renderedList}
    </div>
    
  )
}

export default ContactList