import React from 'react'
import { useState, useEffect } from "react"
import leftChevron from "../../assets/left-arrow.svg"
import rightChevron from "../../assets/right-arrow.svg"
import "./Slider.css"
import slideData from "../../data/sliderData"


export default function slider() {
  const [sliderIndex, setSliderIndextoggle] = useState(1)

  function toggleImage(indexPayload) {
    // let newState;
    // if(indexPayload + sliderIndex > slideData.length){
    //   newState = 1
    // }
    // else if(indexPayload + sliderIndex < 1){
    //   newState = slideData.length
    // }
    // else {
    //   newState = indexPayload + sliderIndex
    // }
    // setSliderIndextoggle(newState)
    setSliderIndextoggle(state => {
      if(indexPayload + state > slideData.length){
        return 1
      }
      else if(indexPayload + state < 1){
        return slideData.length
      }
      else {
        return state + indexPayload
      }
    })
  }

  useEffect(() => {

    const intervalID = setInterval(() => toggleImage(1), 2000)

    return () => clearInterval(intervalID)

  }, [])

  return (
    <>
      <p className="index-info">{sliderIndex} / {slideData.length} </p>

      <div className="slider">
        <p className="image-info">{slideData.find(obj => obj.id === sliderIndex).description}</p>
        <img src={`/images/img-${sliderIndex}.jpg`} alt="estate'rooms" className="slider-img" />

        <button
        onClick={() => toggleImage(-1)}
        className="navigation-button prev-button">
          <img src={leftChevron} alt="previous image" />
        </button>
        <button
        onClick={() => toggleImage(1)} 
        className="navigation-button next-button">
          <img src={rightChevron} alt="next image" />
        </button>
      </div>
    </>
  )
}
