import React from 'react';
import milad from '../../assets/milad.jpeg';
function Home() {
    return <div style={{textAlign: 'center', paddingTop: '3%'}}>
        <img style={{width: '100px', borderRadius: '50%', boxShadow: '0 0 5px black'}} src={milad} alt='milad' />
    </div>
}

export default Home;