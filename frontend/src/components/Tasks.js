import React, { useEffect } from 'react';
import TaskComponent from './TaskComponent';
import { useTaskContext } from '../hooks/useTaskContext';

const Tasks = () => {
    const { tasks, dispatch } = useTaskContext();
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/tasks/all');
            const data = await response.json();
            if (response.ok) {
                dispatch({ type: 'SET_TASK', payload: data })
            }
        }
        fetchData();
    }, [dispatch]);
    return (
        <div className="relative overflow-x-auto mx-5 border rounded-xl">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Created At
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tasks && tasks.map((task) => <TaskComponent key={task._id} task={task} />)}
                </tbody>
            </table>
        </div>
    );
}

export default Tasks;