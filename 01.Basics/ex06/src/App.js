import React from 'react';

function App() {
    //const App = React.createElement('div', null, 'Hello World');
    //return App;

    return (
        <div>
            {'Hello World'}
        </div>
    );  //jsx (구문x if,for,변수선언 모두X) ->babel loader 통해 변환
}

export {App};