import React ,{useEffect} from "react";



export const ModalWindow=({closeWindow,text})=>{
  useEffect(()=>{
      setTimeout(()=>{
          closeWindow()
      },3000)

  },[])

    return(
        <div>
            <p> { text}</p>
        </div>
    )
}