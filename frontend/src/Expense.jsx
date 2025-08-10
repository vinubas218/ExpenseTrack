import React, { useState, useEffect } from 'react'
import expense1 from './img/expense1.jpg'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { LineChart, Line, CartesianGrid, Legend } from 'recharts';

const Expense = () => {
    const today = new Date();
    const [lineData, SetLineData] = useState([]);
    const [selectedDate, SetSelectedDate] = useState(new Date().toISOString().slice(0, 7));
    const [amounts, SetAmounts] = useState({})
    const [actualIncome, SetActualIncome] = useState(0)
    const [savings, SetSavings] = useState("")
    const total = Object.values(amounts).reduce((sum, val) => sum + val, 0);
    const save = actualIncome - total;

    const userId = JSON.parse(localStorage.getItem("register"))?._id

    const initialLineData = [
        { month: "Jan", savings: 0 },
        { month: "Feb", savings: 0 },
        { month: "Mar", savings: 0 },
        { month: "Apr", savings: 0 },
        { month: "May", savings: 0 },
        { month: "Jun", savings: 0 },
        { month: "Jul", savings: 0 },
        { month: "Aug", savings: 0 },
        { month: "Sep", savings: 0 },
        { month: "Oct", savings: 0 },
        { month: "Nov", savings: 0 },
        { month: "Dec", savings: 0 }
    ];

    const categories = [
        {
            id: 1,
            gallery: 'Foods & Drinks',
        },
        {
            id: 2,
            gallery: 'Groceries',
        },
        {
            id: 3,
            gallery: 'Shopping',
        },
        {
            id: 4,
            gallery: 'Transport',
        },
        {
            id: 5,
            gallery: 'Entertainment',
        },
        {
            id: 6,
            gallery: 'Health & Fitness',
        },
        {
            id: 7,
            gallery: 'Electricity Bill',
        },
        {
            id: 8,
            gallery: 'Water',
        },
        {
            id: 9,
            gallery: 'Rent Payment',
        },
        {
            id: 10,
            gallery: 'Others',
        }
    ]

    const handleAmountChange = (id, value) => {
        SetAmounts((prev) => (
            {
                ...prev, [id]: parseFloat(value) || 0,
            }
        ));
    };

    const chartData = categories.map(cat => ({
        ...cat,
        value: amounts[cat.id] ?? 0,
    }));

    const handleSave = async () => {
        const [year, month] = selectedDate.split("-")
        await fetch('https://expensetrack-yn8y.onrender.com/api/savings', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId,
                month: parseInt(month),
                year: parseInt(year),
                savings: save
            })
        })
        await fetchSavings()
    }

    const fetchSavings = async () => {
        const res = await fetch(`https://expensetrack-yn8y.onrender.com/api/savings/${userId}`)
        const data = await res.json()
        SetLineData(data)
    }

    useEffect(() => {
        if (userId) {
            fetchSavings()
        }
    }, [userId])

    return (
        <div>
            <div>
                <img src={expense1} alt="Expense image" className='w-full h-56 ' />
            </div>
            <div className=' bg-green-100 overflow-x-hidden rounded-xl m-2 md:m-5 p-6 md:p-7 md:ml-20 md:mr-20'>
                <p className='md:text-6xl text-2xl'>Monthly ExpenseTracker</p>
                <div className='py-12 flex flex-col md:flex-row gap-10 justify-items-center items-center'>
                    <div>
                        <input type="month" value={selectedDate} onChange={(e) => SetSelectedDate(e.target.value)}
                            className='border-b border-b-cyan-500 outline-none text-2xl shadow-2xl rounded-xl md:w-96 p-4'
                        />
                    </div>
                    <div className='flex flex-col p-5 bg-lime-300 shadow-2xl w-52 rounded-2xl'>
                        <label className='text-xl text-center text-gray-500'>Actual Income</label>
                        <div className='relative py-3'>
                            <span className='absolute left-4 top-1/2 -translate-y-1/2 text-4xl text-gray-700'>₹</span>
                            <input type="text" value={actualIncome} onChange={(e) => SetActualIncome(Number(e.target.value) || 0)} className=' w-44 outline-none text-center  text-4xl p-2' />
                        </div>
                    </div>
                    <div className='flex flex-col p-5 bg-lime-300 shadow-2xl w-52 rounded-2xl'>
                        <label className='text-xl text-center text-gray-500'>Expenses</label>
                        <div className='relative py-3'>
                            <span className='absolute left-4 top-1/2 -translate-y-1/2 text-4xl text-gray-700'>₹</span>
                            <input type="text" value={total} className=' w-44 outline-none text-center text-4xl p-2' />
                        </div>
                    </div>
                    <div className='flex flex-col p-5 shadow-2xl bg-lime-300 w-52 rounded-2xl'>
                        <label className='text-xl text-center text-gray-500'>Savings</label>
                        <div className='relative py-3'>
                            <span className='absolute left-4 top-1/2 -translate-y-1/2 text-4xl text-gray-700'>₹</span>
                            <input type="text" readOnly value={save} onChange={(e) => SetSavings(e.target.value)} className=' w-44 outline-none text-center text-4xl p-2' />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-12'>
                    <div className='flex flex-col gap-12'>
                        <div className='md:w-[540px] h-fit bg-amber-200 shadow-2xl rounded-2xl p-7'>
                            <p className='text-3xl pb-2 '>Categories</p>
                            <hr className='border-2 border-amber-800' />
                            {
                                categories.map((category) => (
                                    <div key={category.id} >
                                        <div className='py-4 flex justify-between'>
                                            <p className='pl-3'>{category.gallery}</p>
                                            <div className="relative w-32">
                                                <span className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-600">₹</span>
                                                <input
                                                    type="text"
                                                    value={amounts[category.id] || 0}
                                                    onChange={(e) => handleAmountChange(category.id, e.target.value)}
                                                    className="pl-6 text-center outline-none w-full"
                                                />
                                            </div>
                                        </div>
                                        <hr className='border-2 border-amber-500' />
                                    </div>
                                ))
                            }
                            <div className="flex justify-end">
                                <div className="flex items-center w-24 pt-4">
                                    <span className="text-gray-600 text-xl ">₹</span>
                                    <input
                                        type="text"
                                        value={total}
                                        readOnly
                                        className="text-xl outline-none px-2"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='bg-fuchsia-300 rounded-2xl p-5 shadow-2xl'>
                            <p className='md:text-2xl text-center leading-10 italic'>" Yes, I track my expenses, and no, <br />that doesn't stop me from making horrible decisions — it just documents them <br className='hidden md:block' /> beautifully. "</p>
                            <p className='md:text-2xl text-right md:pr-7 pt-1 italic'>~ Budget Bhai 🤑</p>
                        </div>
                    </div>
                    <div className='md:w-1/2 flex flex-col gap-12'>
                        <div className='bg-red-300 rounded-2xl p-5 shadow-2xl md:w-[540px]'>
                            <p className='md:text-2xl text-center leading-10 italic'>" Tracking your expenses is like checking your weight — painful, but necessary! "</p>
                            <p className='md:text-2xl text-right md:pr-7 pt-1 italic'>~ Simple truth 😄</p>
                        </div>
                        <div className='bg-indigo-200  rounded-2xl p-6  md:w-[540px] w-full shadow-2xl'>
                            <ResponsiveContainer width="100%" height={70 + categories.length * 50}>
                                <BarChart
                                    layout="vertical"
                                    data={chartData}
                                    margin={{ top: 20, right: 10, left: 5, bottom: 20 }}
                                >
                                    <XAxis type="number" tick={{ width: 10, fontSize: 10, textAnchor: 'end' }} />
                                    <YAxis dataKey="gallery" type="category" tick={{ width: 150, fontSize: 8, textAnchor: 'end' }} />
                                    <Tooltip />
                                    <Bar dataKey="value" fill="#818cf8" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="w-full p-6 bg-white rounded-lg shadow-2xl">
                            <p className=" pb-4 text-xl text-gray-600">Monthly Budget Progress - <span className='font-semibold text-lg'>₹ {total} of ₹ {actualIncome} used</span></p>
                            <div className="w-full bg-gray-200 rounded-full h-7 overflow-hidden">
                                <div
                                    className="bg-green-500 h-7"
                                    style={{
                                        width: `${actualIncome > 0 ? Math.min((total / actualIncome) * 100, 100) : 0}%`
                                    }}
                                ></div>
                            </div>
                            <p className="text-sm pt-4 text-center text-green-700">
                                {
                                    total > actualIncome
                                        ? "You've exceeded your budget! 🚨"
                                        : "You're on track! 🎯"
                                }
                            </p>
                        </div>
                    </div>
                </div>

                {
                    userId && (
                        <div className='py-12'>
                            <div className='md:p-6 p-2 rounded-2xl shadow-2xl '>
                                <ResponsiveContainer width="100%" height={400}>
                                    <LineChart
                                        data={lineData.length > 0 ? lineData : initialLineData}
                                        margin={{ top: 20, right: 30, left: -30, bottom: 0 }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" fontSize={6} />
                                        <YAxis fontSize={8} />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="savings" stroke="#8884d8" strokeWidth={2} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    )
                }

                <div className='pb-12 flex md:justify-end justify-center items-center'>
                    <button onClick={handleSave} className='bg-green-500 shadow-2xl cursor-pointer text-white rounded-xl px-6 py-3 text-center text-2xl'>Save</button>
                </div>

                <div className='text-center bg-green-200 p-4 rounded-xl'>
                    <p className='text-gray-600'>&copy; {today.getFullYear()} - ExpenseTrack. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Expense
