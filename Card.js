import React from 'react';
import {faker} from '@faker-js/faker'
import './Card.css';


const Card=()=>{
    let details=[
    {
        id:1, 
        img: faker.image.avatar(),
        random:faker.person.firstName(),
        description:faker.person.jobTitle(),
        author: "⭐" + (Math.random() * 5).toFixed(1) + " " + faker.person.lastName(),
    },
    
    {
        id:2, 
        img: faker.image.avatar(),
        random:faker.person.firstName(),
        description:faker.person.jobTitle(),
        author: "⭐" + (Math.random() * 5).toFixed(1) + " " + faker.person.lastName(),
    },{
        id:3, 
        img: faker.image.avatar(),
        random:faker.person.firstName(),
        description:faker.person.jobTitle(),
        author: "⭐" + (Math.random() * 5).toFixed(1) + " " + faker.person.lastName(),
    },
    ];

const items = details.map((element)=>{
    return(
        <>
        <div className='Main'>
        <div className='Card'>
            <div className='Card-img' key={element.id}>
                <img src={element.img} alt='imgs' />
            </div>
            <div className='Card-make'>
            <h1 className='random'>{element.random}</h1>
            <p className='description'>{element.description}</p>
            <h2>{element.author}</h2>
            
            </div>
        </div>
        </div>
        

        </>
    );
})
return (
    <>
     {items} 
        </>
);
}
export default Card;

