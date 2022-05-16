import React,{useState} from 'react'
import './Carousel.css'
import {images} from '../Helpers/CarouselData'


function Carousel() {

const [currImg, setCurrImg] = useState(0)


  return (
    <div className='carousel'>
        <div className="carouselInner" style={{backgroundImage:`url(${images[currImg].img})`}}>
    
    <div className="left"><div style={divme} onClick={()=>{currImg > 0 && setCurrImg(currImg - 1)}}></div></div>
    <div className="center">
        <h1>{images[currImg].title}</h1>
        <p>{images[currImg].subtitle}</p>
    </div>
    <div className="right"><div style={divme1} onClick={()=>{currImg < images.length-1 && setCurrImg(currImg + 1)}}></div></div>
        </div>
    </div>
  )
}

export default Carousel
const divme={
    backgroundColor:'red',height:'70px',width:'32px'
}
const divme1={
    backgroundColor:'blue',height:'70px',width:'32px'
}