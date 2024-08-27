import React from 'react';

const Header = () => {
  return (
    <header style={{ 
      padding: '20px', 
      backgroundColor: 'transpaent', 
      color: '#000000',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
    }}>
        <img src="././gambar/tanpa" alt="" />
      <nav style={{
        display: 'flex',
        justifyContent: 'end',
        color: '#000000',
        paddingRight: '220px'
      }}>
        <a href="#hero" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Home</a>
        <a hrstyef="#features" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>About</a>
        <a href="#contact" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Menu</a>
        <a href="#contact" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Best Seller</a>
        <a href="#contact" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
