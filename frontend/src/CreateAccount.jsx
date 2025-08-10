import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { TfiEmail } from "react-icons/tfi";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { BsPerson } from "react-icons/bs";
import axios from 'axios'

const CreateAccount = () => {
    const [name, SetName] = useState("")
    const [email, SetEmail] = useState("")
    const [showPassword, SetShowPassword] = useState(false)
    const [password, SetPassword] = useState("")
    const [error, SetError] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name || !password || !email) {
            SetError("All fields are required")
            return
        }
        SetError("")

        axios.post('http://localhost:8000/api/createaccount', { name, email, password })
            .then(result => {
                localStorage.setItem("register", JSON.stringify(result.data));
                console.log(result)
                navigate('/login')
            })
            .catch(error => { console.log(error) })
    }

    return (
        <div>
            <div className='bg-[url("img/bg.jpg")] bg-no-repeat bg-cover bg-center py-5 flex justify-center items-center min-h-screen'>
                <div className='shadow-xl rounded-xl md:h-fit p-10 max-w-[300px] md:max-w-fit bg-gray-200'>
                    <p className='font-semibold text-2xl text-center pb-4'>CREATE ACCOUNT 😉</p>

                    <div className='pb-6 px-3'>
                        <p className='text-sm text-green-600 space-y-1'>Today is a new day. It's your day. You shape it.</p>
                        <p className='text-sm text-green-600 space-y-1'>Sign in to start your day.</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col gap-2 pb-5'>
                            <label className='font-medium'>UserName</label>
                            <div className='relative inline-flex'>
                                <input type="text" value={name} onChange={(e) => SetName(e.target.value)} className='border-b border-b-green-400 outline-none w-xs p-1' />
                                <BsPerson className='absolute right-3 size-5 text-green-400 translate-y-1' />
                            </div>
                        </div>

                        <div className='flex flex-col gap-2 pb-5'>
                            <label className='font-medium'>Email</label>
                            <div className='relative inline-flex'>
                                <input type="text" value={email} onChange={(e) => SetEmail(e.target.value)} className='border-b border-b-green-400 outline-none w-xs p-1' />
                                <TfiEmail className='absolute right-3 size-5 text-green-400 translate-y-1' />
                            </div>
                        </div>

                        <div className='flex flex-col gap-2 pb-5'>
                            <label className='font-medium'>Password</label>
                            <div className='relative inline-flex'>
                                <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => SetPassword(e.target.value)} className='border-b border-b-green-400 outline-none w-xs p-1' />
                                <button type='button' onClick={() => SetShowPassword(!showPassword)} className='absolute right-3 text-green-400 translate-y-1'>
                                    {showPassword ? <LuEye size={20} /> : <LuEyeOff size={20} />}
                                </button>
                            </div>
                        </div>

                        {
                            error &&
                            (
                                <div className='text-sm text-red-600 text-center pb-4'>{error}</div>
                            )
                        }

                        <div className='bg-green-600 rounded-xl text-center p-3 cursor-pointer'>
                            <button type="submit" className='text-white font-semibold cursor-pointer'>Create Account</button>
                        </div>

                    </form>

                    <div className='pt-5 text-center'>
                        <p className='text-xs'>Already have an account? <Link to='/login' className='text-green-600'>Signin</Link></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CreateAccount
