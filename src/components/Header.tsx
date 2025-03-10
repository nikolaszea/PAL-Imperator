import React, { useState, useEffect } from 'react';

interface HeaderProps {
  mode: 'Music' | 'Literature' | 'Other';
  setMode: (mode: 'Music' | 'Literature' | 'Other') => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ mode, setMode, theme, toggleTheme }) => {
  const [time, setTime] = useState(new Date());
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleModeChange = (newMode: 'Music' | 'Literature' | 'Other') => {
    setMode(newMode);
    setIsDropdownOpen(false);
  };

  return (
    <header style={{ ...styles.header, backgroundColor: 'blue', border: '2px solid red' }}>
      <div style={styles.rightSection}>
        <div style={styles.modeSelector}>
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} style={styles.modeButton}>
            {mode}
          </button>
          {isDropdownOpen && (
            <div style={styles.dropdown}>
              {(['Music', 'Literature', 'Other'] as const).map((m) => (
                <div key={m} onClick={() => handleModeChange(m)} style={styles.dropdownItem}>
                  {m}
                </div>
              ))}
            </div>
          )}
        </div>
        <div style={styles.clock}>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
        <button onClick={toggleTheme} style={styles.themeToggle}>
          {theme === 'light' ? '🌞' : '🌜'}
        </button>
      </div>
    </header>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '10px 20px',
    color: 'white',
    flex: '0 0 auto',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
  },
  modeSelector: {
    position: 'relative',
    marginRight: '20px',
  },
  modeButton: {
    backgroundColor: '#61dafb',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
    zIndex: 1000,
  },
  dropdownItem: {
    padding: '10px',
    cursor: 'pointer',
  },
  clock: {
    fontSize: '1.2em',
    marginRight: '10px',
  },
  themeToggle: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.2em',
    marginLeft: '10px',
  },
};

export default Header;
