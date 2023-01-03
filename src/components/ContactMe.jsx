import './ContactMe.css';

export default function ContactMe(){
    
    return(
        <div class="container">
        <div class="contactpage--form">
          <form class="contact--form" method="post" action="http://localhost:3000/messages">
            <h1>CONTACT US!</h1>
            <input required
              type="text"
              id="subject"
              name="subject"
              placeholder="subject"
            />
            <textarea required
              id="content"
              name="content"
              placeholder="content of the message"
              rows="20"
            ></textarea>
            <input required type="email" name="email" placeholder="email address" />
            <button type="submit">SUBMIT</button>
          </form>
        </div>
        <div class="contactpage--photo">
          
        </div>
    </div>
    );
}