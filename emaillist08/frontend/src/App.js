import React, {useState, useEffect} from 'react';
import RegisterForm from './RegisterForm';
import Searchbar from './Searchbar';
import Emaillist from './Emaillist';
import './assets/scss/App.scss';

function App() {
    const [emails, setEmails] = useState(null);

    
    const deleteEmail = async (no) => {
        try{
            const response= await fetch(`/api/${no}` , {
                method: 'delete',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(no)
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success'){
                throw new Error(json.message);
            }

            setEmails(emails.filter((e) => e.no !==no));
            //fetchEmails('');

        } catch(err) {
            console.error(err);
        }
    }

    const addEmail= async (email) => {
        try{
            const response= await fetch('/api' , {
                method: 'post',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(email)
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success'){
                throw new Error(json.message);
            }

            setEmails([json.data, ...emails]);
        } catch(err) {
            console.error(err);
        }
    }

    const fetchEmails = async (keyword) => {
        try {
            const response = await fetch(`/api?kwd=${keyword ? keyword : ''}`, {
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
            
            setEmails(json.data);

        } catch(err) {
            console.error(err);
        }
    }

    useEffect(()=> {    //mount, unmount될 때
        fetchEmails();
    }, []);

    return (
        <div id={'App'} >
            <RegisterForm addEmail={addEmail} />
            <Searchbar fetchEmails={fetchEmails}/>
            <Emaillist emails={emails} deleteEmail={deleteEmail}/>
        </div>
    );
}

export default App;