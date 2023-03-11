import * as React from "react"
import { Link } from "gatsby"
import lost from "../assets/lost.webp"
// styles
const pageStyles = {
  color: "#dcded6",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}
const fullbackground = {
  backgroundColor: "#000",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: -2,
  width: "100vw",
  height: "100vh",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 380,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const imgStyle = {

}
// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <div style={fullbackground} />
      
      <title>Not found</title>
      <h1 style={headingStyles}>We're as lost as you are.</h1>
      <p style={paragraphStyles}>
    
        <img src={lost} height={"512px"} width={"512px"} style={imgStyle}  alt={"woman in spacesuit"}/>
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
