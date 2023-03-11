import React, { useEffect, useState } from "react"
import { css } from "@emotion/react"
const NamerBody = css`
position: fixed;
left: 40vw;
top: 30vh;
z-index: 2;
background-color: #ddd;
min-width: 400px;
display: flex;
flex-direction: column;
justify-items: space-between;
justify-content: space-between;
padding-top: 50px;
padding-bottom: 40px;
height-min: 4rem;
`


const centerMeElmo = css`
display: flex;
flex-flow: row;
justify-content: center;
align-items: center;
align-content: center;
justify-items: center;

`
const centerMeElmo2 = css`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
align-content: center;
justify-items: center;
input {
    margin-top: 10px;
    width: 80%
    border-radius: 3px;
}
button {
    background-color: #f67;
    border-radius: 3px;
    margin: 4px;
    padding: 4px;
}
`

const blockDiv = css`
background-color: #111;
position: fixed;
top: 0px;
left: 0px;

z-index: 1;
opacity: .1;
height: 100vh;
width: 100vw;
`
const PaletteNamer = ({ deleteMe, setPaletteName }) => {
    const [paletteName, setName] = useState("")


    const handleSetName = (pName) => {
        console.log(pName);
        setName(pName.target.value);
    }
    useEffect(()=>{
        console.log(paletteName);
    })
    const submitName = () => {
        console.log("palletteName", paletteName);
        setPaletteName(paletteName);
        deleteMe(true);
    }
    const unmountSelf = () =>{
        deleteMe(false);
    }
    const handleKeyDown = (ev) => {
        console.log(ev.key);
        if (ev.key === "Enter")
            submitName();
        
    }

    return (<>
        <div css={blockDiv} onClick={unmountSelf}/>
        <div css={NamerBody}>
            <div css={centerMeElmo}>
                <div css={centerMeElmo2} onKeyDown={handleKeyDown}>
                  Name Your Collection!
                    <input name={"name"} type={"text"} onChange={handleSetName} />
                    <button  onClick={submitName}>Done</button>
                </div>
            </div>
        </div>

    </>

    )
}
export default PaletteNamer;