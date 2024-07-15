import React from 'react';
import {Tab_} from './assets/scss/Tab.scss';

function Tab({idx, name, active, selectTab}) {

    //console.log(idx);
    return (
        <li 
            className={[Tab_, (active ? 'active' : '')].join(' ')}
            onClick={() => {
                selectTab(idx);
            }}
            >{name}</li>
    );
}

export default Tab;