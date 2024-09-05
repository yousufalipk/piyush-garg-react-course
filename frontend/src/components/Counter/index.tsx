import React, {useState} from 'react';
import { toast } from 'react-toastify';

const Counter: React.FC = () => {
    let [count, setCount] = useState(0);

    const handleIncremeant = () => {
        setCount(count+1);
        toast.success("Incremeant Successful!")
    }
    
    const handleDecremeant = () => {
        if(count == 0){
            toast.error("Already Zero!")
            return
        }
        setCount(count-1);
        toast.success("Decremeant Successful!")
    }

    return (
        <div className='counter-container'>
            <h1 className='flex flex-col'>
                <p className='text-4xl font-bold italic text-center'>{count}</p>
                <button
                    className='p-4 m-5 round-lg bg-green-600 text-white hover:bg-gray-500 w-1/4 mx-auto'
                    onClick={handleIncremeant}
                >
                    Incremeant
                </button>
                <button
                    className='p-4 m-5 round-lg bg-red-600 text-white hover:bg-gray-500 w-1/4 mx-auto'
                    onClick={handleDecremeant}
                >
                    Decremenat
                </button>
            </h1>
        </div>
    )
}

export default Counter;
