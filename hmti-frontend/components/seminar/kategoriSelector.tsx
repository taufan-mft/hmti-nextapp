'use client'


import React, { useState } from 'react';

function KategoriSelector() {
  const [radioValue, setRadioValue] = useState('');
  const [customText, setCustomText] = useState('');

  const handleRadioChange = (event:any) => {
    const newValue = event.target.value;
    setRadioValue(newValue);

    // If the custom text field is empty, automatically uncheck the last radio button
    if (newValue === 'Lainnya' && customText === '') {
      setRadioValue('');
    }
  };

  const handleCustomTextChange = (event: any) => {
    setCustomText(event.target.value);
  };

  return (
    <div className="flex flex-col gap-2 py-4 border-base-content border border-opacity-20 rounded-xl">
      <div className="flex flex-row items-center px-4 gap-2">
        <input
          type="radio"
          name="radio-1"
          value="Sistem Manufaktur"
          checked={radioValue === 'Sistem Manufaktur'}
          onChange={handleRadioChange}
          className="radio mt-0.5"
        />
        <label className="label">Sistem Manufaktur</label>
      </div>
      <div className="flex flex-row items-center px-4 gap-2">
        <input
          type="radio"
          name="radio-1"
          value="Ergonomi dan Rekayasa Sistem Kerja"
          checked={radioValue === 'Ergonomi dan Rekayasa Sistem Kerja'}
          onChange={handleRadioChange}
          className="radio mt-0.5"
        />
        <label className="label">Ergonomi dan Rekayasa Sistem Kerja</label>
      </div>
      <div className="flex flex-row items-center px-4 gap-2">
        <input
          type="radio"
          name="radio-1"
          value="Optimasi Sistem dan Rekayasa Rantai Pasok"
          checked={radioValue === 'Optimasi Sistem dan Rekayasa Rantai Pasok'}
          onChange={handleRadioChange}
          className="radio mt-0.5"
        />
        <label className="label">Optimasi Sistem dan Rekayasa Rantai Pasok</label>
      </div>
      <div className="flex flex-row items-center px-4 gap-2">
        <input
          type="radio"
          name="radio-1"
          value="Rekayasa Kualitas dan Manajemen Industri"
          checked={radioValue === 'Rekayasa Kualitas dan Manajemen Industri'}
          onChange={handleRadioChange}
          className="radio mt-0.5"
        />
        <label className="label">Rekayasa Kualitas dan Manajemen Industri</label>
      </div>
      <div className="flex flex-row items-center px-4 gap-2">
      <div 
      className="tooltip tooltip-info tooltip-left" 
      data-tip="Tulis topik untuk memilih">
        <input
          type="radio"
          name="radio-1"
          value={customText}
          checked={radioValue === 'Lainnya'}
          onChange={handleRadioChange}
          className="radio mt-0.5"
        />
        </div>
        <label className="label w-20">Lainnya:</label>
        <input
          type="text"
          placeholder="Tuliskan topik seminar anda"
          value={customText}
          onChange={handleCustomTextChange}
          className="input w-full border-b grow"
        />
      </div>
    </div>
  );
}

export default KategoriSelector;