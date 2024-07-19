import React from 'react';

export default function Main() {
    return (
        <div>
            <h1>Main</h1>
            <ul>
                <a href="/guestbook" onClick={(e)=> {
                    e.preventDefault();
                    history.pushState();
                }}>방명록</a>
            </ul>
        </div>
    );
}