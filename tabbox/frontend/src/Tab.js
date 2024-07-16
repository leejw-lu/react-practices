import React from 'react';
import {Tab_} from './assets/scss/Tab.scss';

function Tab({idx, name, active, selectTab}) {  //idx대신 no로 하는 방법도 O

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