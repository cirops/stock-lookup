import { useState } from 'react';

import { useForm } from "react-hook-form";

import { fetchStocks } from "./services/AlphaVantage";

import { Footer } from "./components/Footer";

function App() {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const [stocks, setStocks] = useState({});

  const onSubmit = async (data) => {
    const res = await fetchStocks(data);
    console.log(res);
    setStocks(res);
  };

  return (
    <>
      <h1>Stock Lookup!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="symbol">Stock symbol:</label>
        <input
          type="text"
          placeholder="e.g: IBM"
          name="symbol"
          id="symbol"
          {...register("symbol", {
            required: "Required",
          })}
        />
        <label htmlFor="interval">Time interval:</label>
        <select
          name="interval"
          id="interval"
          {...register("interval", {
            required: "Required",
          })}
          >
          <option value="1min">1 minute</option>
          <option value="5min">5 minutes</option>
          <option value="15min">15 minutes</option>
          <option value="30min">30 minutes</option>
          <option value="60min">60 minutes</option>
        </select>
        <input
          required
          type="text"
          placeholder="Your Api Key"
          name="apikey"
          {...register("apikey", {
            required: "Required",
          })}
        />

        <button type="submit">Show me the stonks!</button>
      </form>
      <Footer />
    </>
  );
}

export default App;
