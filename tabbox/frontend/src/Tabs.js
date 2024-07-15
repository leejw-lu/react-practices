import React from 'react';
import Tab from './Tab';
import {Tabs_} from './assets/scss/Tabs.scss';

function Tabs({tabs, selectTab}) {
    return (
        <ul className={Tabs_}>
            {tabs.map((e, i)=> <Tab idx={i} key={e.no} name={e.name} active={e.active} selectTab={selectTab} />)}
        </ul>
    );
}

export default Tabs;