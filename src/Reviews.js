import React, { useState } from 'react';
import people from './data';
import { GrNext, GrPrevious  } from "react-icons/gr";

const Reviews = () => {
    const [index, setIndex] = useState(0);
    const {name, job, image, text} = people[index];

    const checkNumber = (number) => {
        if( number > people.length - 1) {
            return 0;
        }
        if( number < 0) {
            return people.length - 1;
        }
        return number;
    }

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;            
            return checkNumber(newIndex);
        });
    }

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index -1;
            return checkNumber(newIndex);
        });
    }

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length);
        if( randomNumber === index ) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    }

    return(
        <div className='review'>
            <div className='img-container'>
                <img src={image} alt={name} />
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <div className='text'>{text}</div>
            <div className='btn-wrapper'>
                <button className='prev-btn' onClick={ prevPerson }>
                    <GrPrevious />
                </button>
                <button className='next-btn' onClick={ nextPerson }>
                    <GrNext />
                </button>
            </div>
            <button className='random' onClick={ randomPerson }>Surprise me</button>
        </div>
    );
};

export default Reviews;