import { useEffect, useState } from 'react';

function App() {
  const [status, setStatus] = useState('loading...');

  useEffect(() => {
    fetch('http://localhost:3000/api/health')
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus('could not reach server'));
  }, []);

  return (
    <div>
      <h1>Woodworking Storefront</h1>
      <p>Server status: {status}</p>
    </div>
  );
}

export default App;