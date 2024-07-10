import React from 'react'
import { login } from '../../services/authService'

const LoginForm = () => {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('');
    const handleSubmit = async (e) => {
        e.preventDefault()
        // Add your form submission logic here
        console.log(username, password)
        try {
            const response = await login({ username, password });
            console.log('Login successful:', response);
            // Handle successful login (e.g., redirect to dashboard, store token, etc.)
          } catch (err) {
            setError('Invalid email or password');
          }
    }
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <form className='bg-white p-8 rounded-lg shadow-md w-96' onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              className="mt-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              className="mt-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <button type='submit' className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700'>
            Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
