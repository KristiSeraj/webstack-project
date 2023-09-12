import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import NewTask from '../components/NewTask';
import Tasks from '../components/Tasks';

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    
    const handleOpenModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }
    return (
        <>
            {/* <Navbar /> */}
            <div className='ml-[50%]'>
                <button onClick={handleOpenModal} className='bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 my-4 border border-gray-700 rounded'>Add task</button>
            </div>
            {showModal ? <NewTask closeModal={handleCloseModal} passedMethod='POST' /> : null}
            <Tasks />
        </>
    );
}
 
export default Home;