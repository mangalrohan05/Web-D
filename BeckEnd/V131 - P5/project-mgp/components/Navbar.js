import React from 'react'

const Navbar = () => {
    return (
        <nav className='relative bg-black text-white flex justify-between items-center h-16'>

            <div className="logo font-bold px-4 text-lg">MWP - My Web Page</div>

            <ul className='flex justify-between gap-4 px-4'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Sign Up</li>
                <li>Login</li>
            </ul>
        </nav>
    )
}

export default Navbar
