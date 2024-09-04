import React from 'react';

const CardFooter = ({ imgSrc, title, description }) => {
  return (
    <div style={styles.card}>
      <img src={imgSrc} alt={title} style={styles.image} />
      <div style={styles.content}>
      <h3 style={styles.title}>{title}</h3> {title}
        <p style={styles.description}>{description}</p>
      </div>
    </div>
  );
};






const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    padding: '16px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    textAlign: 'center', 
    justifyContent: 'flex-end' 
  },
  image: {
    width: '100px', 
    height: '100px',
    marginBottom: '16px', 
    borderRadius: '20', 
  },
  title: {
    margin: '0 0 8px 0',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#3498db',
  },
  description: {
    margin: 0,
    fontSize: '14px',
    color: '#666',
  },
};


export default CardFooter;
