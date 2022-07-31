import React from 'react';
import './floatingdiv.css';

function FloatingDiv({image, txttit, txtsub}) {
  return (
     <div className="floatingdiv">
        <img src={image} alt="" />
        <span>
            {txttit}
            <br/>
            {txtsub}
        </span>
     </div>
  )
}

export default FloatingDiv