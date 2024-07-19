import React, {useState, useEffect} from 'react';
import CardList from './CardList';
import './assets/scss/KanbanBoard.scss';

function KanbanBoard() {

    const [cards, setCards] = useState([]);
    const fetchCards = async () => {
        try {
            const response = await fetch('/api/card', {
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
            setCards(json.data);
        } catch(err) {
            console.error(err);
        }
    }

    useEffect(()=> {    //mount, unmount될 때
        fetchCards();
    }, []);


    /* return 안에서 처리할 수 있으면 최대한 바깥보다 return 안에서 처리하도록.*/
    return (
        <div className={'Kanban_Board'}>
            <CardList cards={cards.filter(data => ( data.status === "ToDo"))} status={"ToDo"}/>
            <CardList cards={cards.filter(data => ( data.status === "Doing"))} status={"Doing"}/>
            <CardList cards={cards.filter(data => ( data.status === "Done"))} status={"Done"}/>
            {/* <CardList boards={TodoList} status={"ToDo"}/>
            <CardList boards={DoingList} status={"Doing"}/>
            <CardList boards={DoneList} status={"Done"}/> */}
        </div>
    );
}

export default KanbanBoard;