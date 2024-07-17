import React from 'react';
import CardList from './CardList';
import './assets/scss/KanbanBoard.scss';
import boards from './assets/json/data';

function KanbanBoard() {
    /* return 안에서 처리할 수 있으면 최대한 바깥보다 return 안에서 처리하도록.

    const TodoList = boards.filter(data => (
        data.status === "ToDo"				
    ));
    const DoingList = boards.filter(data => (
        data.status === "Doing"				
    ));
    const DoneList = boards.filter(data => (
        data.status === "Done"				
    ));*/

    return (
        <div className={'Kanban_Board'}>
            <CardList boards={boards.filter(data => ( data.status === "ToDo"))} status={"ToDo"}/>
            <CardList boards={boards.filter(data => ( data.status === "Doing"))} status={"Doing"}/>
            <CardList boards={boards.filter(data => ( data.status === "Done"))} status={"Done"}/>

            {/* <CardList boards={TodoList} status={"ToDo"}/>
            <CardList boards={DoingList} status={"Doing"}/>
            <CardList boards={DoneList} status={"Done"}/> */}
        </div>
    );
}

export default KanbanBoard;