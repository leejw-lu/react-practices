import React from 'react';
import {Email_Item} from './assets/scss/EmailItem.scss';

function EmailItem({firstName, lastName, email}) {
    return (
        <li className={Email_Item}>
            <h4>{firstName}{lastName}</h4>
            <span>{email}</span>
            <a href='' />
        </li>
    );
}

export default EmailItem;