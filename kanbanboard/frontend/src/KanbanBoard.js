import React from 'react';
import CardList from './CardList';
import './assets/scss/KanbanBoard.scss';
import boards from './assets/json/data';

function KanbanBoard() {
    const TodoList = boards.filter(data => (
        data.status === "ToDo"				
    ));

    const DoingList = boards.filter(data => (
        data.status === "Doing"				
    ));

    const DoneList = boards.filter(data => (
        data.status === "Done"				
    ));

    return (
        <div className={'Kanban_Board'}>
            {/*TodoList.map(e=> <CardList key={e.no} no={e.no} title={e.title} description={e.description} status={e.status} tasks={e.tasks}  />) */}
            <CardList boards={TodoList}/>
            <CardList boards={DoingList}/>
            <CardList boards={DoneList} />
        </div>
    );
}

export default KanbanBoard;