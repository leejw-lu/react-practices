import React, {useState} from 'react';
import TaskList from './TaskList';
import {_Card, Card_Title} from './assets/scss/Card.scss';

function Card({no, title, description, tasks}) {
    const [show, setShow]= useState(false);

    return (
        <div className={_Card}>
            <div 
                className={[Card_Title, (show ? 'Card_Title_Open' : '')].join(' ')}
                onClick={() => { setShow(!show); }} >
                {title}
            </div>
            <div className={'Card_Details'}>{description}</div>
            
            {/* 클릭 event에 따라 task 숨기거나 보이기 */}
            {show ? <TaskList tasks={tasks} /> : null}
        </div>

    );
}

export default Card;