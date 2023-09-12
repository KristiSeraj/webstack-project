import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const entererdData = { email, password }
        try {
            await axios.post('/api/auth/login', entererdData)
            .then((response) => {
                localStorage.setItem('user', JSON.stringify(response.data));
                toast.success('Login successful');
            })
            navigate('/')
        } catch (error) {
            console.log(`Error: ${error}`);
            toast.error('Login failed');
        }
    }

    return (
        <div className='w-full max-w-xs'>
            <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <div className='mb-4'>
                    <label htmlFor='email' className='block text-gray-700 text-sm font-bold mb-2'>
                        Email
                    </label>
                    <input
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='email'
                        autoComplete='off'
                        name='email'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='mb-6'>
                    <label htmlFor='password' className='block text-gray-700 text-sm font-bold mb-2'>
                        Password
                    </label>
                    <input
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' 
                        id='password'
                        autoComplete='off'
                        name='password'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className='bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                    Login
                </button>
            </form>
        </div>
    );
}
 
export default Login;