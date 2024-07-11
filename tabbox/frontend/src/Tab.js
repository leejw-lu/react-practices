import React from 'react';

function Tab({name, active, contents}) {
    if (active==true) {
        return (
            <li class="active">{name}</li>
        );
    } else {
        return (
            <li>{name}</li>
        );
    }
}

export default Tab;