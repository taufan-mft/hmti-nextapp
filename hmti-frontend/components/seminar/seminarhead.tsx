
import React, { useState, useEffect } from "react";
import moment from "moment";
import { Reveal } from "../utils/reveal";

export default function SeminarHeader() {
    const [day, setDay] = useState("")
    const [date, setDate] = useState("")
    const [month, setMonth] = useState("")
    useEffect(() => {
        setDay(moment().format('dddd'));
        setDate(moment().format('DD'));
        setMonth(moment().format('MMMM'));
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
                    <div className="row-span-3 text-4xl font-bold mr-1">
                        {date}
                    </div>
                    <div className="col-span-2 text-sm">
                        {month}
                    </div>
                    <div className="row-span-2 text-sm opacity-50 font-beautiful">
                        {day}
                    </div>
                </div>
            </Reveal>
        </div>
    );
};