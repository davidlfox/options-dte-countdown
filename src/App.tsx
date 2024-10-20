import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [startDate, setStartDate] = useState<Date>(() => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), today.getDate());
  });

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const [year, month, day] = event.target.value.split('-');
    const selectedDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    setStartDate(selectedDate);
  };

  const renderBoxes = () => {
    const boxes = [];
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  
    for (let i = 0; i <= 7; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
  
      const dayOfWeek = daysOfWeek[currentDate.getDay()];
      const dateString = `${currentDate.getMonth() + 1}/${currentDate.getDate()}`;
      const dte = 7 - i;
  
      const boxColor = dte <= 2 ? 'red' : 'green';
  
      // Format the date for the ForexFactory link
      const month = months[currentDate.getMonth()];
      const day = currentDate.getDate();
      const year = currentDate.getFullYear();
      const forexLink = `https://www.forexfactory.com/calendar?day=${month}${day}.${year}`;
  
      boxes.push(
        <a href={forexLink} target="_blank" key={i}>
          <div className={`box ${boxColor}`}>
            <div className="box-content">
              <div>{dayOfWeek}</div>
              <div>{dateString}</div>
              <div>{`${dte} DTE`}</div>
            </div>
          </div>
        </a>
      );
    }
  
    return boxes;
  };  

  return (
    <div className="App">
      <h1>Options Trading Strategy - 7 DTE</h1>
      <em>If a "red" day brings high-impact news, 7 DTE option trades may be higher risk.</em>
      <label>
        Start Date:&nbsp;&nbsp;
        <input 
          type="date" 
          value={startDate.toISOString().split('T')[0]} 
          onChange={handleDateChange} 
        />
      </label>
      <div className="box-container">
        {renderBoxes()}
      </div>
    </div>
  );
}

export default App;
