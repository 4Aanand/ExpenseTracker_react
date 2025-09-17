import React, { useState } from 'react';

const BillSplitter = () => {
  const [total, setTotal] = useState('');
  const [people, setPeople] = useState('');
  const [result, setResult] = useState('');

  const handleSplit = () => {
    const totalAmount = parseFloat(total);
    const numPeople = parseInt(people);

    if (isNaN(totalAmount) || isNaN(numPeople) || numPeople <= 0) {
      setResult('Please enter valid inputs.');
      return;
    }

    const share = (totalAmount / numPeople).toFixed(2);
    setResult(`Each person pays ₹${share}`);
  };

  return (
    <div className="splitter-container">
      <h2>Bill Splitter</h2>
      <input
        type="number"
        placeholder="Total Amount"
        value={total}
        onChange={(e) => setTotal(e.target.value)}
      />
      <input
        type="number"
        placeholder="Number of People"
        value={people}
        onChange={(e) => setPeople(e.target.value)}
      />
      <button onClick={handleSplit}>Split</button>
      <p>{result}</p>
    </div>
  );
};

export default BillSplitter;