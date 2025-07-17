'use client';
import { Calendar, Clock, X } from 'lucide-react';
import React from 'react';



interface BookTableDialogProps {
    show: boolean;
    setShowBookTable: (show: boolean) => void;
}

const BookTableDialog: React.FC<BookTableDialogProps> = ({ show, setShowBookTable }) => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [date, setDate] = React.useState('');
    const [time, setTime] = React.useState('');

    React.useEffect(() => {
        const handleOverflow = () => {
            if (window.innerWidth < 1024) { // mobile and tablet (below lg breakpoint)
                if (show) {
                    document.body.style.overflow = 'hidden';

                } else {
                    document.body.style.overflow = '';


                }
            }
        };

        handleOverflow();
        window.addEventListener('resize', handleOverflow);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('resize', handleOverflow);
        };
    }, [show]);


    if (!show) return null;

    return (
            <div className='fixed inset-0 bg-[#F8E8D9] z-50 flex flex-col gap-y-12 lg:gap-y-8 lg:w-[800px] lg:p-10 lg:fixed lg:inset-auto lg:left-1/2  lg:top-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:bg-white lg:rounded-4xl'>
                <div className='flex justify-between w-full  px-4 md:px-8 lg:px-0 mx-auto mt-4 lg:w-full lg:mt-0'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800'>Book Table</h1>
                    <button
                        onClick={() => setShowBookTable(false)}
                        aria-label="Close menu"
                        className="transition-all duration-200 hover:rotate-90 hover:bg-red-100 rounded-full p-2 text-gray-700 hover:text-red-600"
                    >
                        <X height={28} width={28} className='md:w-[34px] md:h-[34px] lg:w-[38px] lg:h-[38px]' />
                    </button>
                </div>
                <form onSubmit={() => console.log()} className='flex flex-col flex-1 justify-between'>
                    <div className='flex flex-col gap-y-20 lg:gap-y-10 px-4 md:px-8 lg:px-0 lg:mb-12'>
                        <label>
                            <input 
                                type='text' 
                                placeholder='Full Name' 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className='w-full p-4 md:p-5 lg:p-6 border-2 border-gray-300 rounded-xl text-base md:text-lg lg:text-xl placeholder-gray-500 focus:outline-none focus:ring-3 focus:ring-amber-400 focus:border-amber-500 transition-all duration-200 shadow-sm hover:shadow-md'
                            />
                        </label>
                        <label>
                            <input 
                                type='email' 
                                placeholder='Email Address' 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className='w-full p-4 md:p-5 lg:p-6 border-2 border-gray-300 rounded-xl text-base md:text-lg lg:text-xl placeholder-gray-500 focus:outline-none focus:ring-3 focus:ring-amber-400 focus:border-amber-500 transition-all duration-200 shadow-sm hover:shadow-md'
                            />
                        </label>
                        <label className='relative'>
                            <input 
                                type='date' 
                                placeholder='Date' 
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                                className='w-full p-4 md:p-5 lg:p-6 pr-14 lg:pr-16 border-2 border-gray-300 rounded-xl text-base md:text-lg lg:text-xl placeholder-gray-500 focus:outline-none focus:ring-3 focus:ring-amber-400 focus:border-amber-500 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md text-center [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:left-1/2 [&::-webkit-calendar-picker-indicator]:top-1/2 [&::-webkit-calendar-picker-indicator]:transform [&::-webkit-calendar-picker-indicator]:-translate-x-1/2 [&::-webkit-calendar-picker-indicator]:-translate-y-1/2 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer'
                                onClick={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const x = rect.left + rect.width / 2;
                                    const y = rect.top + rect.height / 2;
                                    e.currentTarget.style.transformOrigin = `${x}px ${y}px`;
                                    e.currentTarget.showPicker();
                                }}
                            />
                            <Calendar 
                                className='absolute right-4 lg:right-5 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none' 
                                size={22} 
                            />
                        </label>
                        <label className='relative'>
                            <input 
                                type='time' 
                                placeholder='Hour' 
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                required
                                className='w-full p-4 md:p-5 lg:p-6 pr-14 lg:pr-16 border-2 border-gray-300 rounded-xl text-base md:text-lg lg:text-xl placeholder-gray-500 focus:outline-none focus:ring-3 focus:ring-amber-400 focus:border-amber-500 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md text-center [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:left-1/2 [&::-webkit-calendar-picker-indicator]:top-1/2 [&::-webkit-calendar-picker-indicator]:transform [&::-webkit-calendar-picker-indicator]:-translate-x-1/2 [&::-webkit-calendar-picker-indicator]:-translate-y-1/2 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer'
                                onClick={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const x = rect.left + rect.width / 2;
                                    const y = rect.top + rect.height / 2;
                                    e.currentTarget.style.transformOrigin = `${x}px ${y}px`;
                                    e.currentTarget.showPicker();
                                }}
                            />
                            <Clock 
                                className='absolute right-4 lg:right-5 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none' 
                                size={22} 
                            />
                        </label>
                    </div>
                    <button
                        type='submit'
                        className='mx-4 md:mx-8 lg:mx-0 mb-6 lg:mb-0 py-4 lg:py-5 px-16 lg:px-20 bg-amber-600 hover:bg-amber-700 text-white text-lg md:text-xl lg:text-2xl font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]'
                    >
                        Book Table
                    </button>
                </form>
            </div>
    );
};

export default BookTableDialog;