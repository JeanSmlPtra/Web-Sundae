import React from 'react';

const About = () => {
  return (
    <section id="features" style={{ 
        padding: '50px 0', 
        backgroundColor: '#f5f5f5', 
        textAlign: 'center' 
      }}>
        <h2 style={{ marginBottom: '30px' }}>Features</h2>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-around', 
          flexWrap: 'wrap' 
        }}>
          <div style={{ 
            width: '300px', 
            padding: '20px', 
            backgroundColor: 'white', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
            borderRadius: '10px' 
          }}>
            <h3>Feature 1</h3>
            <p>Description of feature 1.</p>
          </div>
          <div style={{ 
            width: '300px', 
            padding: '20px', 
            backgroundColor: 'white', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
            borderRadius: '10px' 
          }}>
            <h3>Feature 2</h3>
            <p>Description of feature 2.</p>
          </div>
          <div style={{ 
            width: '300px', 
            padding: '20px', 
            backgroundColor: 'white', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
            borderRadius: '10px' 
          }}>
            <h3>Feature 3</h3>
            <p>Description of feature 3.</p>
          </div>
        </div>
      </section>
  );
};

export default About;
