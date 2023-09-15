
import React, { useState, useEffect } from "react";
import moment from "moment";

export default function HeadArtery () {
    const [currentDay, setcurrentDay] = useState("")
    const [currentDate, setcurrentDate] = useState("")
    const [currentMonth, setcurrentMonth] = useState("")
    useEffect(() => {
        setcurrentDay(moment().format('dddd'));
        setcurrentDate(moment().format('DD'));
        setcurrentMonth(moment().format('MMMM'));
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