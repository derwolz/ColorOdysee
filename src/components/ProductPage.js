import React, { useState } from "react"
import { css } from "@emotion/react"
const catalog = css`
display: flex;
flex-flow: row;
justify-content: space-between;
width: 80vw;
flex-wrap: wrap;
height: 80vh;
padding-top: 5vh;
`

const catalogProduct = css`
width: 120px;
display: flex;
flex-flow: column;
justify-content:center;
align-items: center;
padding: 4px 20px 4px 20px ;
`
const ProductPage = ({products}) => {
    const [items, setItems] = useState(products.results)
    return (
        <div css={catalog}>
            {items.map((i) => {
                return (
                    <div css={catalogProduct}>
                        <a href={i['amazon_link']}>
                        <img src={i['amazon_img_link']}/>
                        <h4>{i['name']}</h4>
                        </a>
                    </div>
                )
            })}

        </div>
    )
}
export default ProductPage;