import React, {  useState } from 'react'
import { css } from '@emotion/react'
import { useMediaQuery } from '../hooks/useMediaQuery';
const FinishChartCSS = css`
display: flex;
flex-direction: column;
margin-right: 40px;
justify-content: center;
flex-wrap: nowrap;
border-width: 500px;
border-radius: 300px;
border-color: black;
margin-bottom: 10px;
`
const graphBar = css`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
justify-items: center;
align-content: center;
width: 2em;
border-width: 5px;
border-radius: 3px;
border-color: black;
`
const graphText = css`
poisiton: relative;
left: -2em;
`
const FinishChart = ({ finishes, K }) => {
    const isMobile = useMediaQuery("(max-width:900px)");
    const [backgroundColors, setBackgroundColors] = useState(["#f00","#0f0","#00f","#0ff","#f0f","#ff0"])
    //console.log(K)
    //console.log('finishes',finishes);
    //console.log("keys",Object.keys(finishes));
    const limitFloat = (number) => {
        //console.log(number)
        return number.toFixed(2)
    }
    const getHeight = (x) =>{
        if (isMobile){
            return 30+'px'
        }
        return finishes[x]/K*100+"%";
    }
    const getWidth = (x) =>{
        if (isMobile){
            return finishes[x]/K*60+"vw";
        }
        return 30+'px'
    }
    return (
        
                <div css={FinishChartCSS}>
                    
                    {
                        
                        Object.keys(finishes).map((x, y)=>{ 
                            return (
                                <div css={graphBar} style={{ 
                                    height: getHeight(x), width: getWidth(x), backgroundColor: backgroundColors[y]}}>
                                
                                <div css={graphText}>
                                    {x}:{limitFloat(finishes[x]/K)*100}%
                                </div>
                                </div>
                            );
                        })
                    }
                       
                </div>

    );
}
export default FinishChart;