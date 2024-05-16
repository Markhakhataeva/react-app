import React from 'react';
import {Logo} from "./Logo";
import {Menu} from "./Menu";
import {Checkout} from "./Checkout";


export const Header = ({database}) => {

    return (
        <header className="header">
            <Logo/>
            <Menu/>
            <Checkout database={database}/>
        </header>
    );
}
