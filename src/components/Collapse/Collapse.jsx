import React, { useState, useRef } from 'react'
import open from '../../assets/VectorOpen.svg'


export default function Collapse (props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("open");
  const content = useRef(null);
  
  function toggleCollapse() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`);
    setRotateState(setRotate === "open" ? "close" : "open");
  } 
  return (
        <div className="collapse_div">
          <button className={`collapse_btn ${setActive}`} onClick={toggleCollapse}  >
            <div className="collapse_title" >{props.title}</div>
            <img className={`${setRotate}`} src={open} alt="ouvrir" />
        </button>
    
          <div className="collapse_content" 
          ref={content}
          style={{ maxHeight: `${setHeight}` }}>
            <div className='collapse_content_container'>
            <div className="collapse_text">{props.content}</div>
            </div>
          </div>
        </div>
    )}

  