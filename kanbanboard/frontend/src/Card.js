import React, {useState, useEffect} from 'react';
import TaskList from './TaskList';
import {_Card, Card_Title} from './assets/scss/Card.scss';

function Card({no, title, description}) {
    const [show, setShow]= useState(false);
    const [tasks, setTasks] = useState([]); //배열로 미리 초기화

    // 1. Task Get Api
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
            
            if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
            const json = await response.json();
            if(json.result !== 'success') throw new Error(json.message);

            setTasks(json.data);
        } catch(err) {
            console.error(err);
        }
    }

    useEffect(()=> {    //mount, unmount될 때
        fetchTasks();
    }, []);

    // 2. Task Post Api
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

            if(!response.ok) throw new Error(`${response.status} ${response.statusText}`);
            const json = await response.json();
            if(json.result !== 'success') throw new Error(json.message);

            //삽입 후 상태 업데이트
            setTasks([...tasks, json.data]);
        } catch(err) {
            console.error(err);
        }
    }

    // 3. Task Put(update) Api
    const updateTask= async (task) => {
        try{
            const response= await fetch(`/api/task/${task.no}` , {
                method: 'put',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            });

            if(!response.ok) throw new Error(`${response.status} ${response.statusText}`);

            const json = await response.json();

            if(json.result !== 'success') throw new Error(json.message);


            // 상태 업데이트: 업데이트된 task만 교체
            setTasks((prevTasks) => prevTasks.map((e) => e.no === json.data.no ? json.data : e));
        } catch(err) {
            console.error(err);
        }
    }

     // 4. Task Delete Api
    const deleteTask = async (no) => {
        try{
            const response= await fetch(`/api/task/${no}` , {
                method: 'delete',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                },
                body: null
            });

            if(!response.ok) throw new Error(`${response.status} ${response.statusText}`);
            const json = await response.json();
            if(json.result !== 'success')throw new Error(json.message);

            //삭제 후 상태 업데이트
            setTasks(tasks.filter((e) => e.no !==no));
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
            {show ? <TaskList no={no} tasks={tasks} addTask={addTask} updateTask={updateTask} deleteTask={deleteTask} /> : null}
        </div>
    );
}

export default Card;