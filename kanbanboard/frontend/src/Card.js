import React, {useState, useEffect} from 'react';
import TaskList from './TaskList';
import {_Card, Card_Title} from './assets/scss/Card.scss';

function Card({no, title, description}) {
    const [show, setShow]= useState(false);

    const [tasks, setTasks] = useState([]);
    const fetchTasks = async () => {
        try {
            const response = await fetch(`/api/task?no=${no}`, {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: null
            });
            
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(json.message);
            }
            
            console.log(json.data);
            setTasks(json.data);
        } catch(err) {
            console.error(err);
        }
    }

    useEffect(()=> {    //mount, unmount될 때
        fetchTasks();
    }, []);

    const addTask= async (task) => {
        try{
            const response= await fetch('/api/task' , {
                method: 'post',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success'){
                throw new Error(json.message);
            }

            setTasks([json.data, ...tasks]);
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <div className={_Card}>
            <div 
                className={[Card_Title, (show ? 'Card_Title_Open' : '')].join(' ')}
                onClick={() => { setShow(!show); }} >
                {title}
            </div>
            <div className={'Card_Details'}>{description}</div>
            
            {/* 클릭 event에 따라 task 숨기거나 보이기 */}
            {show ? <TaskList no={no} tasks={tasks} addTask={addTask} /> : null}
        </div>

    );
}

export default Card;