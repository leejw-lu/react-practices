import React from 'react';
import Tab from './Tab';
import {Tabs_} from './assets/scss/Tabs.scss';

function Tabs({tabs, selectTab}) {
    return (
        <ul className={Tabs_}>
            {/* tabs의 idx가 아닌 no값을 넘기려면 no={e.no} 값을 넘기고, TabBox에서 no값 찾아서 active True로 변경하면 된다.*/}
            {tabs.map((e, i)=> <Tab idx={i} key={e.no} name={e.name} active={e.active} selectTab={selectTab} />)}
        </ul>
    );
}

export default Tabs;