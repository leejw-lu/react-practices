import React from 'react';
import EmailItem from './EmailItem';
import {Email_list} from './assets/scss/Emaillist.scss';

function Emaillist({emails}) {
    return (
        <ul className={Email_list}>
            {emails?.map(e=> <EmailItem key={e.no} firstName={e.firstName} lastName={e.lastName} email={e.email} />)}
        </ul>
    );
}

export default Emaillist;