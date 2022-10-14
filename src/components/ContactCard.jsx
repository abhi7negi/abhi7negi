import React from 'react'
import { Link } from 'react-router-dom'

const ContactCard = (props) => {
    const {id,name,email}=props.contact
  return (
    <div>
         <li>{name}</li>
         <li>{email}</li>

         <button onClick={()=>props.clickhandler(id)}>delete</button>
         <br/>
         <Link   to={`/edit`}
      state={{ from: props.contact }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
           
        </div>
  )
}

export default ContactCard