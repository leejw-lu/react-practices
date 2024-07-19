import React, {useState} from 'react';
import {_Task, Task_Remove} from './assets/scss/Task.scss';

function Task({no, name, done}) {
    //const [check, setCheck]= useState(done);

    return (
        <li className={_Task}>
            <input type='checkbox' checked={done==='Y'} onChange={() => setCheck(!check)}/>
                {name}
            <a href='#' className={Task_Remove}></a>
        </li>
    );
}

export default Task;