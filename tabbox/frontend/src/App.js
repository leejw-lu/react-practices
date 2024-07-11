import React from 'react';
import TabBox from './TabBox';
import './assets/css/App.css';

function App() {
    const tabs= [
        {no:1, name:'메뉴1', active:false, contents:'메뉴1의 뷰 내용'},
        {no:2, name:'메뉴2', active:false, contents:'메뉴2의 뷰 내용'},
        {no:3, name:'메뉴3', active:true, contents:'메뉴3 뷰 내용'},
        {no:4, name:'메뉴4', active:false, contents:'메뉴14 뷰 내용'},
        {no:5, name:'메뉴5', active:false, contents:'메뉴의5 뷰 내용'},
    ];

    //active = true이면 className=

    return (
        <div id={'App'} >
            <TabBox tabs={tabs} />
        </div>
    );
}

export default App;