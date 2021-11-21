import React,{useState} from 'react'
import reactDom  from 'react-dom'

import './index.css';
export default function FormilyL() {
const [visible,setVisible] = useState(false)
  const modal = ()=>{
    return reactDom.createPortal(<div className="portal" style={{display:visible?"flex":"none"}} >
      <div className="form">
        <footer>
          <button onClick={(e)=>{e.stopPropagation();setVisible(false)}}>关闭</button>
        </footer>
      </div>

    </div>,document.querySelector("body"))
  }
  return (
    <div onClick = {()=>{setVisible(true)}} style={{width:200,height:200,background:"red"}}>
      {modal()}
    </div>
  )
}
