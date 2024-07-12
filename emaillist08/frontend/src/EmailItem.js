import React from 'react';
import {Email_Item} from './assets/scss/EmailItem.scss';

function EmailItem({name, email}) {
    return (
        <li className={Email_Item}>
        {name}
        <br/>
        {email}
        </li>
    );
}

export default EmailItem;