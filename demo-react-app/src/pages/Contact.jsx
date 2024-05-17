import React from 'react'

function Contact(ContactProps) {
  return (
    <div>
      <h4>Contact Pages</h4>
      <p>My Name is {ContactProps.name} and my number is {ContactProps.number} </p>
    </div>
  );
}

export default Contact
