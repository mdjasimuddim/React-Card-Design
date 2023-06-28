import React from 'react'


const titleHeading = "Call Family";
const cardPara = "Bangladesh is a peaceful country all over the world.";
const date1 = new Date();
const Date1 = date1.getDate();
const getMonth = date1.getMonth();
const getYear = date1.getFullYear();

function Card() {
  return (
        <div className='card'>
            <h3 className='cardHeading'>{titleHeading}</h3>
            <p className='cardDesc'>{cardPara}</p>
            <p className='cardDate'>{Date1 + "/" + getMonth + "/" + getYear}</p>
        </div>
  )
}
export default Card;
