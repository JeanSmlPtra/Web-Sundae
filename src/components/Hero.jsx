import React from 'react';

const Hero = () => {
  return (
    <section id="hero" style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'flex-start',  
      justifyContent: 'center',  
      paddingLeft: '120px',     
      textAlign: 'left',         
      backgroundColor: '#F488C6', 
      width: '100%',
      maxWidth: '100vw',
      margin: '0 auto',
    }}>
      <h2 style={{ fontSize: '7rem', margin: '0' }}>Delight in Every</h2>
      <h2 style={{ fontSize: '7rem', margin: '0' }}>Scoop</h2>
      <p style={{ fontSize: '1.5rem', margin: '0px 0', maxWidth: '900px'  }}>At Sundae Everydae we create the ultimate ice cream sundaes with the finest ingredients. Each scoop is a blend of creamy texture and rich flavors, designed to bring a smile with every bite. Dive into pure happiness and enjoy the sweetest moments.</p>
      <div>
        <button style={{ 
          marginTop: '60px',
          padding: '10px 20px',   
          fontSize: '18px', 
          border: '2px solid  white', 
          borderRadius: '5px', 
          backgroundColor: 'transparent', 
          color: 'white', 
          cursor: 'pointer',
          padding
        }}>
          Get Started
        </button>
        <button style={{ 
          marginTop: '60px',
          padding: '10px 20px',   
          fontSize: '18px', 
          border: 'none', 
          borderRadius: '5px', 
          backgroundColor: '#282c34', 
          color: 'white', 
          cursor: 'pointer' 
        }}>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
