import React from 'react'
import { Link } from 'react-router-dom'
import gif from "./assets/Revenue.gif"
import real from "./img/real.png"
import data from "./img/data.png"
import secure from "./img/secure.png"
import user from "./img/user.png"
import aarav from "./img/aarav.jpg"
import meera from "./img/meera.jpg"
import sahil from "./img/sahil.jpg"
import rajesh from "./img/rajesh.jpg"
import divya from "./img/divya.jpg"
import { FaArrowRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const HomePage = () => {
    const today = new Date();
    const reviews = [
        {
            id: 1,
            img: aarav,
            name: "Aarav",
            rating: 5,
            comment: "I finally understand where my money goes every month. This app is simple but powerful!"
        },
        {
            id: 2,
            img: meera,
            name: "Meera",
            rating: 4,
            comment: "No more spreadsheets! The pie chart is a lifesaver. Highly recommended."
        },
        {
            id: 3,
            img: rajesh,
            name: "Rajesh",
            rating: 5,
            comment: "Clean interface, works smoothly on mobile. I check it every time I shop."
        },
        {
            id: 4,
            img: divya,
            name: "Divya",
            rating: 4,
            comment: "It's easy to use and gives me a clear view of my monthly spending. Great for students like me!"
        },
        {
            id: 5,
            img: sahil,
            name: "Sahil",
            rating: 5,
            comment: "Best expense app I've used. Fast, clean UI, and the real-time updates are spot on!"
        }
    ];

    return (
        <div className='overflow-x-hidden bg-green-100 rounded-xl m-2 md:m-5 p-6 md:p-7 md:ml-20 md:mr-20'>
            <div className='flex justify-between pb-3 md:pb-7'>
                <Link to='/homepage' className='text-2xl cursor-pointer font-medium text-emerald-400 italic md:text-4xl md:font-semibold'>ExpenseTrack</Link>
                <div className='flex justify-items-center items-center gap-5'>
                    {/* <p className='text-xl hidden md:block cursor-pointer'></p> */}
                    {/* <Link to='/login' className='text-xl bg-green-500 px-5 py-2 rounded-2xl text-white hidden md:block cursor-pointer'>Log out</Link> */}
                    <img src={user} alt="User" className='h-10 w-10 rounded-full cursor-pointer' />
                </div>
            </div>

            <div className='md:flex md:justify-between'>
                <div className='flex flex-col gap-4 md:gap-5'>
                    <p className='text-5xl leading-16 md:text-6xl md:leading-20'>Track Your<br /> Expenses,<br /> Control Your<br /> Future</p>
                    <div>
                        <p className='md:text-xl leading-9'>An all-in-one tool to manage your <br /> money, visualize your spending, and <br /> achieve financial goals.</p>
                    </div>
                    <Link to='/expense' className='text-white outline-none cursor-pointer bg-green-500 w-fit p-3 md:text-xl rounded-xl'>Try the Demo</Link>
                </div>
                <div className='pt-10  md:pt-0'>
                    <img src={gif} alt="animated gif" className='md:w-[700px] md:h-[500px]' />
                </div>
            </div>

            <div className='flex flex-col gap-20 md:gap-14 md:flex-row py-5 md:py-24'>
                <div className='md:w-[600px] flex flex-col items-center justify-items-center shadow-2xl rounded-2xl p-2 md:p-5'>
                    <img src={real} alt="Real-Time" className='h-32 w-40 rounded-xl cursor-pointer hover:scale-105' />
                    <p className='text-3xl font-semibold py-4 text-center'>Real-Time Tracking</p>
                    <p className='text-center text-xl leading-9'>Log your expenses and income <br /> instantly. Stay  up-to-date<br /> with your finances. </p>
                </div>
                <div className='md:w-[600px]  flex flex-col items-center shadow-2xl rounded-2xl p-2 md:p-5'>
                    <img src={data} alt="visualization" className='h-32 w-40 rounded-xl cursor-pointer hover:scale-105' />
                    <p className='text-3xl font-semibold py-4 text-center'>Data Visualization</p>
                    <p className='text-center text-xl leading-9'>Understand your spending <br /> with line and bar <br /> charts.</p>
                </div>
                <div className='md:w-[600px]  flex flex-col items-center shadow-2xl rounded-2xl p-2 md:p-5'>
                    <img src={secure} alt="authentication" className='h-32 w-40 rounded-xl cursor-pointer hover:scale-105' />
                    <p className='text-3xl font-semibold py-4 text-center'>Secure & Private</p>
                    <p className='text-center text-xl leading-9'>Your data is protected with <br /> secure authentication <br /> and cloud storage.</p>
                </div>
            </div>

            <div className='py-12'>
                <div className="py-10 px-6 md:px-20 shadow-2xl bg-white text-center rounded-2xl">
                    <h2 className="text-3xl font-bold text-emerald-600 mb-8">About ExpenseTrack</h2>
                    <p className="text-gray-700 md:text-xl mx-auto md:leading-10">
                        ExpenseTrack is a fast, intuitive monthly expense tracker built for real people.
                        Whether you're managing rent, groceries, personal savings, or small business expenses,
                        it helps you stay on top of your financial activity with ease. With a clean interface and
                        quick entry system, you can record your income and expenses in seconds. Visual dashboards
                        and smart category breakdowns make it easy to understand your spending habits at a glance.
                        Say goodbye to messy spreadsheets — ExpenseTrack keeps everything simple, secure, and
                        organized. Your data is responsive across devices and fully under your control, empowering
                        you to build better money habits one month at a time.
                    </p>
                </div>
            </div>

            <div className='md:pt-24 pt-12'>
                <p className='text-4xl md:text-5xl md:pb-12 leading-14 md:text-center'>See Why People Love ExpenseTrack</p>
                <div className='md:ml-28'>
                    {reviews.map((review) => (
                        <div key={review.id} className='p-5'>
                            <div className='flex flex-col md:flex-row justify-items-center items-center gap-3 md:gap-10'>
                                <img src={review.img} alt="Persons" className='shadow-2xl h-20 w-20 rounded-full cursor-pointer' />
                                <div className='flex flex-col gap-2'>
                                    <p className='text-xl text-center'>{review.name}</p>
                                    <p>{"⭐".repeat(review.rating)}</p>
                                </div>
                                <p className='text-center'>"{review.comment}"</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex flex-col justify-items-center gap-8 items-center py-14'>
                <p className='text-3xl text-center'>Ready to take control of your money?</p>
                <Link to='/expense' className='bg-green-400 inline-flex justify-items-center items-center gap-2 
                rounded-tl-xl rounded-br-xl cursor-pointer text-xl text-white py-3 px-7 shadow-green-300
                hover:rounded-tr-xl transition-all duration-300  hover:rounded-bl-xl  shadow-xl'>
                    Start Today <FaArrowRight className=' pt-1' />
                </Link>
            </div>

            <footer className="bg-gray-100 rounded-2xl py-10 mb-10 px-6 md:px-20">
                <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-8 text-sm text-gray-700">

                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-emerald-600">ExpenseTrack</h2>
                        <div className="flex gap-3">
                            <a href="#"><FaInstagram className='size-5 hover:scale-125' /></a>
                            <a href="#"><FaTwitter className='size-5 hover:scale-125' /></a>
                            <a href="#"><FaLinkedin className='size-5 hover:scale-125' /></a>
                            <a href="#"><FaFacebookSquare className='size-5 hover:scale-125' /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">Company</h3>
                        <ul className="space-y-1">
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Security</a></li>
                            <li><a href="#">Terms & Privacy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">Download</h3>
                        <ul className="space-y-1">
                            <li><a href="#">iOS & Android</a></li>
                            <li><a href="#">Windows & Mac</a></li>
                            <li><a href="#">Web App</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">Resources</h3>
                        <ul className="space-y-1">
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Templates</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">For</h3>
                        <ul className="space-y-1">
                            <li><a href="#">Students</a></li>
                            <li><a href="#">Freelancers</a></li>
                            <li><a href="#">Households</a></li>
                            <li><a href="#">Startups</a></li>
                        </ul>
                    </div>
                </div>
            </footer>

            <div className='text-center bg-green-200 p-4 rounded-xl'>
                <p className='text-gray-600'>&copy; {today.getFullYear()} - ExpenseTrack. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default HomePage
