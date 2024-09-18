import React from "react";


export default function UndoToastComponent({ closeToast, toastProps }){

    return  <div>
    Lorem ipsum dolor {toastProps.position}
    <button>Undo!</button>
    <button onClick={closeToast}>Close</button>
  </div>
}
 
