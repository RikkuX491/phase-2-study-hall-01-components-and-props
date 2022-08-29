import React from 'react';
import './App.css';
import AppLogo from './AppLogo'
import Paragraph from './Paragraph';
import AppLink from './AppLink';

function AppHeader(){
    return (
        <header className="App-header">
            <AppLogo />
            <Paragraph />
            <AppLink />
        </header>
    );
}

export default AppHeader;