import { useForm } from "react-hook-form";

import { Footer } from "./components/Footer";

function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>Stock Lookup!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="symbol">Stock symbol:</label>
        <input
          is="extendedInput"
          required
          type="text"
          placeholder="e.g: IBM"
          name="symbol"
          id="symbol"
          ref={register}
        />
        <label htmlFor="interval">Time interval:</label>
        <select required name="interval" id="interval" ref={register}>
          <option value="1min">1 minute</option>
          <option value="5min">5 minutes</option>
          <option value="15min">15 minutes</option>
          <option value="30min">30 minutes</option>
          <option value="60min">60 minutes</option>
        </select>
        <input
          is="extendedInput"
          required
          type="text"
          placeholder="Your Api Key"
          name="apikey"
        />

        <button type="submit">Show me the stonks!</button>
      </form>
      <Footer />
    </>
  );
}

export default App;
