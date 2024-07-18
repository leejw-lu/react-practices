import React from 'react';
import {Search_Bar} from './assets/scss/Searchbar.scss';

function Searchbar({fetchEmails}) {
    return (
        <div className={Search_Bar}>
            <input type='text' placeholder='찾기'
            onChange={(e)=> fetchEmails(e.target.value)}/>
        </div>
    );
}

export default Searchbar;