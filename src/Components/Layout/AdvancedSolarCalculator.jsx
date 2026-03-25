import React, { useState, useEffect } from "react";
import "./AdvancedSolarCalculator.css";

const AdvancedSolarCalculator = () => {
  const [bill, setBill] = useState("");
  const [yearlySavings, setYearlySavings] = useState(0);
  const [longTermSavings, setLongTermSavings] = useState(0);
  const [systemSize, setSystemSize] = useState(0);

  useEffect(() => {
    if (bill > 0) {
      const yearly = bill * 12;
      const savings = yearly * 0.8;
      const savings25 = savings * 25;

      const size = (bill / 1500).toFixed(1);

      setYearlySavings(savings);
      setLongTermSavings(savings25);
      setSystemSize(size);
    } else {
      setYearlySavings(0);
      setLongTermSavings(0);
      setSystemSize(0);
    }
  }, [bill]);

  return (
    <section className="calculator-section">

      <div className="calculator-container">

        {/* HEADER */}
        <div className="calculator-header">

          <span className="calculator-tag">
            SOLAR ESTIMATOR
          </span>

          <h2>
            Solar Savings Calculator
          </h2>

          <p>
            Enter your monthly electricity bill and discover how much you can
            save by switching to solar energy.
          </p>

        </div>

        {/* INPUT */}
        <div className="calculator-input">
          <input
            type="number"
            placeholder="Enter Monthly Electricity Bill (₹)"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
        </div>

        {/* RESULTS */}
        {bill > 0 && (
          <div className="calculator-results">

            <div className="calc-card">
              <h3>Estimated System Size</h3>
              <p>{systemSize} kW</p>
            </div>

            <div className="calc-card">
              <h3>Yearly Savings</h3>
              <p>₹{yearlySavings.toLocaleString()}</p>
            </div>

            <div className="calc-card">
              <h3>25-Year Savings</h3>
              <p>₹{longTermSavings.toLocaleString()}</p>
            </div>

          </div>
        )}

      </div>

    </section>
  );
};

export default AdvancedSolarCalculator;