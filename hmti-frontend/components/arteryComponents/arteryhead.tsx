
import React, { useState, useEffect } from "react";

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function HeadArtery () {
    const [currentDay, setcurrentDay] = useState("")
    const [currentDate, setcurrentDate] = useState("")
    const [currentMonth, setcurrentMonth] = useState("")
    useEffect(() => {
        const now = new Date();
        const dayOfWeek = daysOfWeek[now.getDay()];
        const dayOfMonth = now.getDate();
        const month = monthsOfYear[now.getMonth()];
        setcurrentDay(`${dayOfWeek}`);
        setcurrentDate(`${dayOfMonth}`);
        setcurrentMonth(`${month}`);
    }, [])
    return (
        <div className='flex justify-between mx-5 lg:text-4xl text-3xl'>
        <div className="font-raleway">
            LIST OF SEMESTERS
        </div>
        <div className="grid grid-rows-3 grid-flow-col mx-2">
            <div className="row-span-3 font-bold mr-1">{currentDate}</div>
            <div className="col-span-2 text-sm">{currentMonth}</div>
            <div className="row-span-2 text-sm opacity-50 font-beautiful">{currentDay}</div>
        </div>
    </div>
    
    );
};