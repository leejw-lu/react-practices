import React, {useRef} from 'react';
import Task from './Task';
import {Task_List, Input_Add_Task} from './assets/scss/TaskList.scss';

function TaskList({no, tasks, addTask, updateTask, deleteTask}) {   //no=cardNo
    const inputRef = useRef(null);   //input enter하고 남은 기록 없애주기

    return (
        <div className={Task_List}>
            <ul>
                {tasks.map((e)=> <Task key={e.no} no={e.no} name={e.name} done={e.done} updateTask={updateTask} deleteTask={deleteTask}/>) }
            </ul>
            <input
                ref={inputRef} 
                className={Input_Add_Task} type='text' placeholder='태스크 추가' 
                onKeyDown={(e) => {
                    if (e.key==="Enter") {
                        addTask({
                            name: e.target.value,
                            card_no: no
                        });
                        inputRef.current.value = null // 값을 초기화
                    }

                }}/>
        </div>
    );
}

export default TaskList;