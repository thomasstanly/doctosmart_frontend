import React from 'react'

const Login = () => {
  return (
    <>
    <div style={{margin:'0 auto'}} className='mx-40 border border-gray-900'>
        <h1>Login</h1>
        <form >
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                <input type="text" />
            </div>
        </form>
    </div>
    </>
  )
}

export default Login