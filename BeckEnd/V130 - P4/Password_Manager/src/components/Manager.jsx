import React, { useRef } from 'react'

const Manager = () => {
    const ref = useRef()
    const [form, setform] = useState({
        site: "",
        username: "",
        password: ""
    })

    const showPassword = () => {
        ref.current.src = ref.current.src.includes('icons/hide.png') ? 'icons/show.png' : 'icons/hide.png'
    }

    const savePassword = () => {

    }

    const handleChange = (e) => {
        setform({...form, [e.target.name]: e.target.value})
    }

    return (
        <>

            <div>
                <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            </div>

            <div className="mx-auto my-10 rounded-2xl bg-gradient-to-r from-emerald-950 via-blue-950 to-emerald-950 max-w-7/8 text-white px-10 py-5">
                <h1 className='text-4xl text-center font-bold'>
                    <div className='logo font-bold text-2xl'>
                        <span className='text-green-500'>&lt;</span>
                        Pass
                        <span className='text-green-500'>Man&gt;</span>
                    </div>

                </h1>
                <p className='text-lg text-center text-green-700'>Secure Password Manager</p>

                <div className='flex flex-col p-4 gap-8 items-center'>
                    <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='rounded-full w-full border border-green-500 focus: outline-none focus:border-green-800 px-5 py-1' type="text" name="site" id="" />

                    <div className="flex w-full gap-8 justify-between">
                        <input value={form.username} onChange={handleChange} placeholder='Enter username' className='rounded-full w-full border border-green-500 focus: outline-none focus:border-green-800 px-5 py-1' type="text" name='username'/>

                        <div className="relative">
                            <input value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full w-full border border-green-500 focus: outline-none focus:border-green-800 px-5 py-1' type="text" name='password' />
                            <span className='absolute right-3 top-[6px] cursor-pointer' onClick={showPassword}>
                                <img ref={ref} src="icons/show.png" alt="" />
                            </span>
                        </div>
                    </div>

                    <button onClick={savePassword} className='flex gap-2 font-bold cursor-pointer justify-center items-center bg-green-500 hover:bg-green-600 rounded-full px-4 py-2 w-fit'>
                        <lord-icon
                            src="https://cdn.lordicon.com/mfdeeuho.json"
                            trigger="hover"
                            stroke="bold"
                            state="hover-swirl"
                            colors="primary:#d1e3fa,secondary:#cb5eee"
                        >
                        </lord-icon>
                        <span>
                            Add Password
                        </span>
                    </button>
                </div>
            </div>

        </>
    )
}

export default Manager
