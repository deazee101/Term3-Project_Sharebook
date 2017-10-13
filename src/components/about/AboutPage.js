import React from 'react';
import { Link } from 'react-router'

class AboutPage extends React.Component {

  render() {
    return (

      <div className='aboutPage container'>
       <p>Reading books is one of the best ways to learn. Books are everywhere 
but its not always accessible to all people. Philippines, being a 
third world country does not have enough resources for educating the youth.

Having a task at hand, this spurred the team into action, thus, Bookshare was born. 
Bookshare sounds like Facebook which is essentially the same thing, sharing information.
 By posting your books in this app, 
you are giving your books a second home since
 your books will be given to another person. So go ahead and start posting!</p>
 <p>-- Siegren, Chelle, Deatotzky</p>
 <br/>
 <p className="aboutbook">A book is a gift you can open again and again</p>
 <p className="aboutbook">-- Garrison Keillor </p>

    )
  }

}



export default AboutPage;
