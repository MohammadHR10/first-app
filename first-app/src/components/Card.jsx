import React from 'react'
import "./Card.css"
/* Card.css is imported here to 
make styling in Card.jsx */

/* props are used to change stuff for
similar componants (see changes made in the
"card" compnant in App.jsx) */

/* passed props here */
const Card = (props) => {
  return (
/* here in style, {{}} means javascript under css */
    <div className='card'> 
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNaDWYCKam-Ict2okUWZkRfpR9i0VF0HRAnQ&s"
        width={300} style={{border: "2 px solid black", overflow: "hidden"}}></img>
        <h1>{props.title}</h1> 
        <p>{props.description}</p>
        </div>
  )
}

/* received props through title and description */
export default Card

/* props: passes data from one componant to another
componant */
