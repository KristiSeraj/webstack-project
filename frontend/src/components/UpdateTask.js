import React, { useState } from 'react';
import { useTaskContext } from '../hooks/useTaskContext';

const UpdateTask = ({ closeModal, passedMethod, id }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { dispatch } = useTaskContext();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { title, description };
        if (title.trim() === '') {
            delete data.title;
        }
        if (description.trim() === '') {
            delete data.description;
        }
        const response = await fetch('/api/tasks/' + id, {
            method: passedMethod.replace(/"g/, ''),
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const json = await response.json();
        if (response.ok) {
            setTitle('');
            setDescription('')
            dispatch({ type: 'UPDATE_TASK', payload: json })
        };
        closeModal()
    
    }

    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative my-6 mx-auto w-1/4">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold text-black">
                                Update task
                            </h3>
                        </div>
                        <div className="relative p-6 flex-auto">
                            <form onSubmit={handleSubmit} className='space-y-6'>
                                <div>
                                    <label htmlFor='title' className='block text-sm font-medium leading-6 text-gray-900'>
                                        Title
                                    </label>
                                    <div className='mt-2'>
                                        <input
                                            autoComplete='off'
                                            type='text'
                                            id='title'
                                            name='title'
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            className='block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor='description' className='block text-sm font-medium leading-6 text-gray-900'>
                                        Description
                                    </label>
                                    <div className='mt-2'>
                                        <input
                                            autoComplete='off'
                                            type='text'
                                            id='description'
                                            name='description'
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            className='block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center justify-end px-6 pt-4 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="w-full hover:bg-red-500 hover:text-white text-red-500 background-transparent font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={closeModal}>
                                        Close
                                    </button>
                                    <button
                                        className="w-full hover:bg-emerald-700 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="submit">
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}
 
export default UpdateTask;