import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { useTaskContext } from '../hooks/useTaskContext';
import UpdateTask from './UpdateTask';

const TaskComponent = ({ task }) => {
    const [showModal, setShowModal] = useState(false);
    
    const handleOpenModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }
    const { dispatch } = useTaskContext();

    const handleDelete = async () => {
        const response = await fetch('/api/tasks/' + task._id, {
            method: 'DELETE'
        });
        const data = await response.json();
        if (response.ok) {
            dispatch({ type: 'DELETE_TASK', payload: data })
        }
    }
    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {task.title}
                </th>
                <td className="px-6 py-4">
                    {task.description}
                </td>
                <td className="px-6 py-4">
                    {formatDistanceToNow(new Date(task.createdAt), { addSuffix: true })}
                </td>
                <td className="px-6 py-4">
                    <button className='mr-2 hover:text-emerald-500' onClick={handleOpenModal}>Edit</button>
                    |
                    <button className='ml-2 hover:text-red-500' onClick={handleDelete}>Delete</button>
                </td>
            </tr>
            {showModal && (
                <UpdateTask closeModal={handleCloseModal} passedMethod='PUT' id={task._id}/>
            )}
        </>
    );
}
 
export default TaskComponent;