'use client'

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DateSelector = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());

  return (
    <div className="flex flex-col sm:flex-row sm:gap-4">
      <div className="form-control sm:basis-1/3 w-full">
        <label className="label">Tanggal</label>
        <DatePicker
          selected={startDate}
          minDate={new Date()}
          onChange={(date) => setStartDate(date)}
          className="border-base-content border border-opacity-20 w-full h-12 rounded-lg px-4"
        />
      </div>
      <div className="form-control sm:basis-1/3 w-full">
        <label className="label">Waktu</label>
        <DatePicker
      selected={startTime}
      onChange={(date) => setStartTime(date)}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={30}
      timeCaption="Time"
      dateFormat="h:mm aa"
      className="border-base-content border border-opacity-20 w-full h-12 rounded-lg px-4"
    />
      </div>
      <div className="form-control sm:basis-1/3 w-full">
        <label className="label">Ruangan</label>
        <select className="select select-bordered font-normal text-base">
          <option disabled selected>Pilih ruang seminar</option>
          <option>Ruang Seminar 1</option>
          <option>Ruang Seminar 2</option>
          <option>Ruang Seminar 3</option>
          <option>Ruang Seminar 4</option>
          <option>Ruang Seminar 5</option>
        </select>
      </div>
    </div>
  );
};

export default DateSelector;