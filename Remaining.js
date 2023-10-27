import React from 'react';
import {faker} from '@faker-js/faker'
import './Remaining.css'

const Remaining = () => {
    let detail = [
        {
            id: 1,
            img: faker.image.avatar(),
            random: faker.person.firstName(),
            description: faker.person.jobTitle(),
            author: "⭐" + (Math.random() * 5).toFixed(1) + " " + faker.person.lastName(),
        },
        {
            id: 2,
            img: faker.image.avatar(),
            random: faker.person.firstName(),
            description: faker.person.jobTitle(),
            author: "⭐" + (Math.random() * 5).toFixed(1) + " " + faker.person.lastName(),
        },
        {
            id: 3,
            img: faker.image.avatar(),
            random: faker.person.firstName(),
            description: faker.person.jobTitle(),
            author: "⭐" + (Math.random() * 5).toFixed(1) + " " + faker.person.lastName(),
        },
    ];

    const item = detail.map((elements) => (
        <>
        
        <div className='Main-2' key={elements.id}>

            <div className='Card_1'>
        
                <div className='Card-img_1'>
                    <img src={elements.img} alt='imgs' />
                </div>

                <h1 className='random_1'>{elements.random}</h1>
                <p className='description_1'>{elements.description}</p>
                <h2>{elements.author}</h2>
        
            </div>
            

        </div>
       
        </>


    ));

    return (
        
<div>
        <div>{item}</div>
        
        </div>
    );
};

export default Remaining;