// Home.js
import React, { useEffect, useState } from 'react';

function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('https://git-app-brown.vercel.app/')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error("Error fetching:", err));
  }, []);

  return (
    <div>
      <h2>Welcome to Home Page</h2>
      <p>Backend Response: {message}</p>
    </div>
  );
}

export default Home;

