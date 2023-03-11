//import UploadandDisplayImage from "./UploadAndDisplayImage";
import React, {  useState } from "react"
import { css } from "@emotion/react"
import UploadAndDisplayImage from "./UploadAndDisplayImage";
import PaletteDisplay from "../PaletteDisplay";
import PaletteSelector from "../PaletteSelector";
import {  imageApi, host } from "../../Config/api";
import { getSessionToken } from "../../Config/CookieHandler";
import ResultDisplay from "../../components/ResultDisplay";
import CollectionSubmit from "../../components/Collection/CollectionSubmit";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import WebShare from "./WebShare";

const projectPortalButton = ({ theme }) => css`

padding: 1rem;
  font-size: 1.1rem;
  &:hover {
    cursor: pointer;
    box-shadow: none;
  }
`;
const sideByside = css`
display: flex;
flex-flow: row;
flex-wrap: wrap;
align-items: center;
justify-items: center;
justify-content: center;

`;
const topOntop = css`
display: flex;
flex-flow: column;
flex-wrap: wrap;
align-items: center;
justify-items: center;
justify-content: center;

`;

export const ImageForm = () => {
  const AIFeed = css`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  `;
  const [stoken, setStoken] = useState(getSessionToken());
  const [isUpload, setIsUpload] = useState(0);
  const [products, setProd] = useState(null);
  const [backup, setBackup] = useState(null);
  const [K, setK] = useState(6);
  const [colors, setColors] = useState(null);
  const [image, setImage] = useState(null);
  const isMobile = useMediaQuery("(max-width:900px)");
  const [uploadFail, setUploadFail] = useState(false);
  const [shareImg, setShareImg] = useState(null);
  const [shareLink, setShareLink] = useState(null);
  
  const setProducts = (prod) => {
    setProd(prod);
  }

  const submitFormData = (formData) => {
    try {
      const response = imageApi.post("resolve-image/", formData, {
        headers:
        {
          'Authorization': 'Token ' + stoken,
          'Content-Type': 'multipart/form-data',

        },
      }).then(result => {
        setProducts(result.data['chosen_products']);
        setBackup(result.data['backup_serialized']);
        setColors(result.data['color_hex']);
        console.log("shareImage", result.data['shareImage']);
        setShareLink(host+result.data['shareImage']);
        setIsUpload(2);
        setUploadFail(false);
      }).catch((error) => {
        setIsUpload(0);
        setUploadFail(true);
      })

    }
    catch (err) {
      console.log(err);
    }
  }

  

  const handleChangeK = (newK) => {
    setK(newK);
  }
  const getMobileMode = () => {
    if (isMobile)
      return { justifyContent: "center", alignItems: "center", flexDirection: "column" }

  }

  return (
    <>
      {uploadFail ? <div>
        We were unable to process this image, please try a different image.
      </div> : ''}
      <div css={AIFeed} >

        {isUpload === 1 ?
          <UploadAndDisplayImage

            K={K}

            setIsUpload={(arg) => setIsUpload(arg)}

            submitFormData={(formData) => submitFormData(formData)}

            passImage={(img) => setImage(img)}
            passShareImg={(img) => setShareImg(img)}
          /> :
          isUpload === 0 ?

            <PaletteSelector
              setIsUpload={(arg) => setIsUpload(arg)}
              setK={(rg) => handleChangeK(rg)}
            /> :
            <div css={sideByside} style={getMobileMode()}>
                < ResultDisplay image={image} colors={colors} />

                <PaletteDisplay products={products} backup={backup} />
              <div css={topOntop}>
                <WebShare  imgURL={shareLink}  />
              
              <CollectionSubmit products={products} />
              </div>
            </div>}
      </div>

      {isUpload === 2 ?
        <button onClick={() => { setIsUpload(0) }} css={[(theme) => ({
          marginTop: 3 + 'rem',
          color: "White",
          boxShadow: "4px 4px #333",
          backgroundColor: "#f66",
        }),
          projectPortalButton,
        ]}>Start Over</button> : ''}
    </>
  );
}
