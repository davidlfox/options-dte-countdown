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

    for (let i = 0; i <= 7; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);

      const dayOfWeek = daysOfWeek[currentDate.getDay()];
      const dateString = `${currentDate.getMonth() + 1}/${currentDate.getDate()}`;
      const dte = 7 - i;

      const boxColor = dte <= 2 ? 'red' : 'green';

      boxes.push(
        <div key={i} className={`box ${boxColor}`}>
          <div className="box-content">
            <div>{dayOfWeek}</div>
            <div>{dateString}</div>
            <div>{`${dte} DTE`}</div>
          </div>
        </div>
      );
    }

    return boxes;
  };

  return (
    <div className="App">
      <h1>Options Trading Strategy - 7 DTE</h1>
      <label>
        Start Date:
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
