import React from 'react';
import Props from './Props';

/*
 * Lecture #1 - Topic 2: Components
 * 
 * Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
 * Components modularize both functionality and presentation in our code.
 * Components must contain a snippet of code that describes what they should render to the DOM.
 */

function Components(){
    return (
        <header className="App-header">
            <Props />
        </header>
    );
}

export default Components;