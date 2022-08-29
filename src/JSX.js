import React from 'react';

/*
 * Lecture #1 - Topic 1: JSX
 *
 * JSX allows us to write HTML-like code in our JavaScript files.
 * With JSX, we can instruct React to create DOM elements in JavaScript in an efficient and expressive manner.
 */

function JSX(props){
    return (
        props.day === "today" ? <h1>There are {props.numOfStudents} students in class today</h1> : <h1>Tomorrow, there will be {props.numOfStudents} students in class</h1>
    )
}

export default JSX;