import React from 'react';
import Card from './Card';
import {Card_List} from './assets/scss/CardList.scss';

function CardList({boards}) {
    //console.log(boards[0].status);
    //boards의 배열 길이에 따라 Cards 만큼
    return (
        <div className={Card_List}>
            <h1>{boards[0].status}</h1>
            {boards.map(e=> <Card key={e.no} no={e.no} title={e.title} description={e.description} tasks={e.tasks}  />) }
        </div>
    );
}

export default CardList;