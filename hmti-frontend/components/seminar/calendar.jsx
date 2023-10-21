import * as dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "../utils/calendar";
import cn from "../utils/cn";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsFillCalendarCheckFill } from "react-icons/bs";

export default function Calendar() {

	const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const currentDate = dayjs();
	const [today, setToday] = useState(currentDate);
	const [selectDate, setSelectDate] = useState(currentDate);
	return (
		<div className="flex justify-center w-64 lg:w-68 xl:w-80 items-center sm:flex-row flex-col rounded-xl">
			<div className="w-96 h-auto ">
				<div className="flex justify-between items-center">
					<h1 className="select-none font-bold ml-2 text-primary-focus text-lg flex flex-row items-center gap-2">
                        <BsFillCalendarCheckFill/>
						{months[today.month()]}, {today.year()}
					</h1>
					<div className="flex gap-4 items-center ">
						<FaChevronLeft
							className="w-5 h-5 cursor-pointer hover:scale-105 transition-all text-red"
							onClick={() => {
								setToday(today.month(today.month() - 1));
							}}
						/>
						<FaChevronRight
							className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(today.month(today.month() + 1));
							}}
						/>
					</div>
				</div>
				<div className="grid grid-cols-7 ">
					{days.map((day, index) => {
						return (
							<h1
								key={index}
								className="text-sm font-semibold text-center h-12 w-13 grid place-content-center text-content opacity-80 select-none">
								{day}
							</h1>
						);
					})}
				</div>

				<div className=" grid grid-cols-7 ">
					{generateDate(today.month(), today.year()).map(
						({ date, currentMonth, today, tanggal }, index) => {
							return (
								<div
									key={index}
									className="p-2 text-center h-10 grid place-content-center text-sm font-semibold"
								>
									<h1
										className={cn(
											currentMonth ? "" : "text-base-content opacity-0",
											today
												? "bg-primary text-base-100"
												: "",
											selectDate
												.toDate()
												.toDateString() ===
												date.toDate().toDateString()
												? "bg-primary text-base-100 bg-opacity-60"
												: "",
											"h-9 w-9 rounded-full grid place-content-center hover:bg-primary-focus hover:text-base-100 transition-all cursor-pointer select-none"
										)}
										onClick={() => {
											setSelectDate(date);
										}}
									>
										{date.date()}
									</h1>
								</div>
							);
						}
					)}
				</div>
			</div>
		</div>
	);
}