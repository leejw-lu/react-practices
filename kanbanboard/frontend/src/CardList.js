import React from 'react';
import Card from './Card';
import {Card_List} from './assets/scss/CardList.scss';

function CardList({cards, status}) {
    //boards의 배열 길이에 따라 Cards 만큼
    return (
        <div className={Card_List}>
            <h1>{status}</h1>
            {cards.map(e=> <Card key={e.no} no={e.no} title={e.title} description={e.description} />) }
        </div>
    );
}

export default CardList;