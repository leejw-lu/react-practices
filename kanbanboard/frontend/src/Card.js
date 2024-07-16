import React from 'react';
import TaskList from './TaskList';
import {_Card, Card_Title, Card_Title_Open } from './assets/scss/Card.scss';

function Card({no, title, description, tasks}) {
    return (
        <div className={_Card}>
            <div className={Card_Title}>{title}</div>
            <div className={'Card_Details'}>{description}</div>
            
            {/* 클릭 event에 따라 task 숨기거나 보이기 */}
            <TaskList tasks={tasks} />
        </div>

    );
}

export default Card;