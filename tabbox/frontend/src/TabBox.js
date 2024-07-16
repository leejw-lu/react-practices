import React, {useState} from 'react';
import Tabs from './Tabs';
import TabView from './TabView';
import {Tab_Box} from './assets/scss/TabBox.scss';
import tabs from './assets/json/data';

function TabBox() {
    const [activeIndex, setActiveIndex] = useState(0);  //index0
    //방법2
    const selectTabByNo= function(no) {
        //const index=tabs.map(e=>e.no).indexOf(no);
        //setActiveIndex(index);

        setActiveIndex(tabs.findIndex(e=> e.no === no));
    }

    return (
        <div className={Tab_Box}>
            <Tabs 
                selectTab={(idx) => {       //방법1: index 값을 넘겨 바꿔주기
                    setActiveIndex(idx);
                }}
                //selectTab={selectTabByNo} //방법2: no 값을 넘겨 바꿔주기

                tabs={tabs.map((e, i) => {
                const{contents, ...rest} = e;

                if (i===activeIndex) {
                    rest.active=true;
                }
                return rest;
                })} 
            />

            <TabView contents={tabs[activeIndex].contents}/>
        </div>
    );
}

export default TabBox;