import React from 'react';
import JSX from './JSX';
import Destructuring from './Destructuring';

/*
 * Lecture #1 - Topic 3: Props
 * 
 * React allows us to pass units of information from a parent component down to a child component. We call these props.
 * Props are used to make reusable component templates.
 */

function Props(){
    const numberOfStudents = Math.ceil(Math.random() * 13);
    const students = [
        {
            id: 1,
            name: "Cho"
        },
        {
            id: 2,
            name: "Ian"
        },
        {
            id: 3,
            name: "Gaurav"
        },
        {
            id: 4,
            name: "Isabelle"
        },
        {
            id: 5,
            name: "Rafia"
        },
        {
            id: 6,
            name: "Parry"
        },
        {
            id: 7,
            name: "Leon"
        }
    ]
    const instructor = "Ricardo"

    return (
        <>
            <JSX numOfStudents={numberOfStudents} day="today" />
            <JSX numOfStudents={100} day="tomorrow" />
            <Destructuring students={students} instructor={instructor} />
        </>
    );
}

export default Props;