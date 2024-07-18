import React from 'react';
import EmailItem from './EmailItem';
import {Email_list} from './assets/scss/Emaillist.scss';

function Emaillist({emails, deleteEmail}) {
    return (
        <ul className={Email_list}>
            {emails?.map(e=> <EmailItem key={e.no} no={e.no} firstName={e.firstName} lastName={e.lastName} email={e.email} deleteEmail={deleteEmail}/>)}
        </ul>
    );
}

export default Emaillist;