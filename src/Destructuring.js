import React from 'react';

/*
 * Lecture #1 - Topic 4: Destructuring
 * 
 * Destructuring allows us to extract multiple properties from an object.
 * Destructuring can be used to access props more easily.
 * Destructuring takes the keys from the props object and creates variables with the same names.
 */

function Destructuring({students, instructor}){

    const studentLIs = students.map(student => {
        return <li key={student.id}>{student.name}</li>
    })

    return (
        <>
            <h1>The instructor is {instructor}</h1>
            <ul>Ricardo's students are:
                {studentLIs}
            </ul>
        </>
    );
}

export default Destructuring;