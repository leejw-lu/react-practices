import React from 'react';
import {Tab_} from './assets/scss/Tab.scss';

function Tab({name, active}) {

    if (active) { //true
        return (
            <li className={[Tab_, 'active'].join(' ')}>{name}</li>
        );
    } else {
        return (
            <li className={Tab_}>{name}</li>
        );
    }

    // return (
    //     <li className={[Tab_, (active ? 'active' : '')].join(' ')}>{name}</li>
    // );
}

export default Tab;