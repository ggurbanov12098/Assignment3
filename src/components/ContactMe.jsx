import React from 'react';

import './ContactMe.css';

export default function ContactMe(){
// Workspace 1
  // const [inputs, setInputs] = React.useState({});

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setInputs(values => ({...values, [name]: value}))
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(inputs);
  // }
// /////////////////



  return(
    <div class="container">
      <div class="contactpage--form">
        <form action="http://localhost:3002/messages" class="contact--form" method="POST">

          <h1>CONTACT US!</h1>

          <input required
            // value={inputs.subject || ""} 
            // onChange={handleChange}

            type="text"
            id="subject"
            name="subject"
            placeholder="subject"
          />

          <textarea required 
            // value={inputs.content || ""} 
            // onChange={handleChange}

            id="content" 
            name="content" 
            placeholder="content of the message" 
            rows="20">
          </textarea>

          <input required 
            // value={inputs.email || ""} 
            // onChange={handleChange}

            type="email" 
            name="email" 
            placeholder="email address" />

          <button type="submit">SUBMIT</button>
          {/* <input type="submit" /> */}

        </form>
      </div>
      <div class="contactpage--photo">

      </div>
    </div>
  );
}