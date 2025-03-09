import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>AI Model Interface</h1>
      <div style={styles.clock}>{time.toLocaleTimeString()}</div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#282c34',
    color: 'white',
  },
  title: {
    margin: 0,
  },
  clock: {
    fontSize: '1.2em',
  }
};

export default Header;
