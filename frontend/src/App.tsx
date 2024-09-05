import React from 'react'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Todo from './components/Todo';
import Counter from './components/Counter/index';

const App: React.FC = () => {

    const toDoItems = [
        {
            id: 1,
            title: 'Do your home work'
        },
        {
            id: 2,
            title: 'Bring one pepsi'
        },
        {
            id: 3,
            title: 'Pay Electricity Bill'
        },
        {
            id: 4,
            title: 'Go to office'
        }
    ]

    return (
        <div> 
            <ToastContainer />
            <h1 className='w-1/2 mx-auto my-4 text-center text-4xl italic font-semibold'>TypeScript Practice!</h1>
            <div className='flex flex-wrap justify-center items-center'>
                {/* Sending Array of items object for each item we have title & description */}
                <Todo items={toDoItems}/> 
                <Todo items={toDoItems}/> 
                <Todo items={toDoItems}/> 
                <Todo items={toDoItems}/> 
                <Todo items={toDoItems}/> 
            </div>
            <div>
                <Counter />
            </div>
        </div>
    )
}

export default App;