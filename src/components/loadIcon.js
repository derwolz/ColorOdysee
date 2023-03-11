import React from "react"
//import PropTypes from "prop-types"
import LoaderSVG from '../assets/loading.svg'

const loadIcon = (props) =>{
  return (

        <div
              key={`loader`}
              id="___loader"
              style={{
                alignItems: "center",
                backgroundColor: "rgba(25,25,25,.2)",
                display: "flex",
                justifyContent: "center",
                position: "fixed",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                zIndex: 100,
              }}
           >
           <img 
              src={LoaderSVG} 
              alt="loading spinner" 
              width="150" 
              height="150"
           />
        </div>
  )
}

export default loadIcon;