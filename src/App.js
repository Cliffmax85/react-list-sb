import { useState, useEffect } from 'react';
import { fetchBands } from './services/fetch-utils';
import BandList from './Bands/BandList';
import './App.css';

function App() {
  const [bands, setBands] = useState([]);

  async function fetchBandsData() {
    const data = await fetchBands();

    setBands(data);
  }

  useEffect(() => {
    fetchBandsData();
  }, []);

  return (
    <div className="App">
      <BandList bands={bands} />
    </div>
  );
}

export default App;
