
import React, { useState, useEffect } from "react";
import moment from "moment";
import { Reveal } from "../utils/reveal";

export default function SeminarHeader () {
    const [currentDay, setcurrentDay] = useState("")
    const [currentDate, setcurrentDate] = useState("")
    const [currentMonth, setcurrentMonth] = useState("")
    useEffect(() => {
        setcurrentDay(moment().format('dddd'));
        setcurrentDate(moment().format('DD'));
        setcurrentMonth(moment().format('MMMM'));
    }, [])
    return (
        <div className='flex justify-between sm:mx-5 mx-3'>
            <Reveal>
                <div className="flex flex-row gap-2 font-raleway text-4xl mt-0.5">
                    <div className="lg:flex hidden">LIST OF</div> 
                    <div className="sm:flex hidden">SEMESTER</div>
                    <div className="lg:hidden flex">LIST</div>
                    <div className="sm:hidden flex">SM</div>
                </div>
            </Reveal>
            <Reveal>
                <div className="grid grid-rows-3 grid-flow-col mx-2">
                    <div className="row-span-3 text-4xl font-bold mr-1">{currentDate}</div>
                    <div className="col-span-2 text-sm">{currentMonth}</div>
                    <div className="row-span-2 text-sm opacity-50 font-beautiful">{currentDay}</div>
                </div>
            </Reveal>
        </div>
    );
};