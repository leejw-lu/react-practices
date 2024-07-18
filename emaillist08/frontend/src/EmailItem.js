import React from 'react';
import {Email_Item} from './assets/scss/EmailItem.scss';

function EmailItem({no, firstName, lastName, email}) {
    return (
        <li className={Email_Item}>
            <h4>{firstName}{lastName}</h4>
            <span>{email}</span>
            <a href='' onClick={(e)=> {
                e.preventDefault();

                console.log('과제:' + no);
            }}/>
        </li>
    );
}

export default EmailItem;