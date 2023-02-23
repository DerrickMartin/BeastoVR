import React, { useState } from "react";

import './menuModalStyles.css'

export default function MenuModal() { 

  const [isOpen, setOpen] = useState(false);
  const toggleModal = () => {
  setOpen(!isOpen)
  }
    return (
      <div className="wrapper-background">
        
        <div>
          <button 
          onClick={toggleModal}
          className="btn-modal">Hello Modal</button> 
        </div>
      
      </div> 
    )
  }
  