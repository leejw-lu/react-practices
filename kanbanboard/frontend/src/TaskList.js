import React from 'react';
import Task from './Task';
import {Task_List, Input_Add_Task} from './assets/scss/TaskList.scss';

function TaskList({tasks}) {
    // tasks의 배열 만큼 돌기
    return (
        <div className={Task_List}>
            <ul>
                {tasks.map(e=> <Task key={e.no} no={e.no} name={e.name} done={e.done} />) }
            </ul>
            <input className={Input_Add_Task} type='text' placeholder='태스크 추가'/>
        </div>
    );
}

export default TaskList;