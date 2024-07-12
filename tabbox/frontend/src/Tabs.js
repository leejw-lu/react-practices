import React from 'react';
import Tab from './Tab';
import {Tabs_} from './assets/scss/Tabs.scss';

function Tabs({tabs}) {
    return (
        <ul className={Tabs_}>
            {tabs.map(e=> <Tab key={e.no} name={e.name} active={e.active} contents={e.contents} />)}
        </ul>
    );
}

export default Tabs;