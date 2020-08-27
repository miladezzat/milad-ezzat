import React from 'react';
import milad from '../../assets/milad.jpeg';
function Home() {
    return <div style={{textAlign: 'center', paddingTop: '3%'}}>
        <img style={{width: '100px', borderRadius: '50%', boxShadow: '0 0 5px black'}} src={milad} alt='milad' />
        <h2 style={{padding:0, margin:0}}>Milad E. Fahmy</h2>    
        <p style={{padding:0, margin:0, opacity:0.4}}>Software Engineer</p>
    </div>
}

export default Home;