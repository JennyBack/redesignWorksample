import React from 'react';
import './App.css';

const HeaderBanner = () => {
  return <div style={{backgroundColor:'#babda2',display:'flex', justifyContent:'center',alignItems:'center'}}>
    <ul style={{height:'40px',listStyle: 'none',display:'flex',alignItems:'center',
    margin: 'auto',
    padding: '0'}}>
     <li><div style={{color:'rgb(124, 39, 29)', height:'10px',width:'10px',borderRadius:'10'}}>-</div><h3 style={{fontSize:'14px',fontWeight:'lighter'}}>This is a sample banner text</h3></li>
    </ul>
  </div>
}

const HeaderMainSection = () => {
  return <div style={{ display:'flex',justifyContent:'space-between', alignItems:'center',marginTop:'10px',marginBottom:'10px'}}>
    <div><input/></div>
    <div><img src='/logo.webp' alt='logo'/></div>
    <div>User Icons</div>

  </div>
}

const HeaderNavigationSection = () => {
  return <div style={{ display:'flex',justifyContent:'space-between', alignItems:'center'}}>
    <ul>
      <li>menu1</li>
      <li>menu2</li>
      <li>menu3</li>
    </ul>
  </div>
}

const HeroSection = () => {
  return <div style={{height:'auto', width:'100%', maxHeight:'600px',overflow:'hidden'}}><img alt='hero-image' src='/XBa9CMlpYyDVj811694459282.webp' /></div>
}

const CategoriesSection = () => {
  return <div><p>Kategorier</p></div>
}

const App = () => {
  return <div className='page-wrapper'>
    <HeaderBanner/>
    <HeaderMainSection/>
    <HeaderNavigationSection/>
    <HeroSection/>
    <CategoriesSection/>

    </div>
}

export default App;
