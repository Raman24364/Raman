import React from 'react';
import  './Email.css';
import Remaining from './Remaining.js';
import Part from './Part.js';
import Part1 from './Part1.js';
import Card from './Card.js';
import Final from './Final.js';
import Block from './Block.js';
import Part2 from './Part2.js';


function Email(){
    return (
        <>
        <div className='Box'>
            <h2>DEV@Deakin</h2>
            <input className='input_1' type='search' placeholder='Search' />
            <p className='paragraph'>Post</p>
            <p className='paragraph'>Login</p>
        </div>
        <div className='img'>
            <img src='img/Picture.jpg' alt='img' />
        </div>
        <h1 className='Articles'>Featured Article</h1>  
        <div>
        <Remaining/>
        <Part name="See All Articles"/>
        <Part2 name_2=" Featured Tutorials"/>
        <Card/>
        {/* <Part1 name_1="See All Tutorials "/> */}
        <Final/>
        <Block/>
        
     </div>
        
           
       
        
       
        </>
    )
}
export default Email;