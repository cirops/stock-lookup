const API_BASE = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&'

export const fetchStocks = async ({symbol, interval, apikey}) => {
  // console.log(`${API_BASE}symbol=${symbol}&interval=${interval}&apikey=${apikey}`)
  const req = await fetch(`${API_BASE}symbol=${symbol}&interval=${interval}&apikey=${apikey}`);
  const json = await req.json();
  return json;
}