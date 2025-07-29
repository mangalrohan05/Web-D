"use client"

import React, { useState } from 'react'

const Navbar = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            This is Nav {count}
        </div>
    )
}

export default Navbar
