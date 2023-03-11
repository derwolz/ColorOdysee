import React, {  useState, useRef } from "react";
import { css } from "@emotion/react"

import LoadIcon from "../loadIcon";
import Slider from "../Slider/Slider";
import ImageEditor from './ImageEditor';
import magnifier from '../../assets/magnifier.svg';

const imageCss = css`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const projectPortalButton = () => css`
margin-top: 20px;  

padding: 1rem 3rem;
  font-size: 1.1rem;
  &:hover {
    cursor: pointer;
    box-shadow: none;
  }
`;
const sliderSet = css`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
flex-wrap: nowrap;
min-width: 900px;
`
const UploadAndDisplayImage = ({ submitFormData, passImage, K, passShareImg }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [radius, setRadius] = useState(0);
  const [zoom, setZoom] = useState(0.25);
  const [submitted, setSubmitted] = useState(false);
  const [k, setK] = useState(K);
  const editorRef = useRef(null);
  const revertZoom = () => {
    setZoom(.25);
  }
  const handleSubmit = (event) => {
    setSubmitted(true);
    const formData = new FormData();
    console.log(editorRef);
    console.log(selectedImage);
    const img = selectedImage.current.getImageScaledToCanvas().toDataURL();
    console.log(img)
    const file = dataURItoBlob(img);
    console.log(file)
      passImage(img);
      passShareImg(file);
      formData.append("file", file)
      setK(K);
      formData.append("owner", 1);
      formData.append("K", k);
      event.preventDefault();
      submitFormData(formData);
  }
  const dataURItoBlob = (dataURI) => {
    var byteString;
    console.log("dataURI",dataURI);
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
    byteString = atob(dataURI.split(',')[1]);
    else
    byteString = unescape(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(',')[0].split(':')[1].split(';')[0];
    var ia = new Uint8Array(byteString.length);
    for (var i=0; i< byteString.length; i++){
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], {type:mimeString});
  }

  return (
    <>
    {submitted ? <LoadIcon /> : ''}
    <form onSubmit={handleSubmit} method="POST" encType="multipart/formdata" css={imageCss}>

      
      <ImageEditor setImage={(image)=>{setSelectedImage(image)}}  zoom={zoom} radius={radius} revertZoom={() => revertZoom()}/>
      <div css={sliderSet}>
        <h2>- </h2>
          <Slider sendValue={(val)=>setZoom(val)} min={".25"} max={"2.0"} steps={".01"} />
          <img src={magnifier} alt={"magnifying glass"} height={"40px"} width={"40px"} />
      <h2> +</h2>
      </div>
      
       
      <br/>
      <br/>
      <button type={"submit"}  css={[(theme) => ({
        color: "White",
        boxShadow: "4px 4px #333",
        backgroundColor: "#f66",
      }),
        projectPortalButton,
      ]}>Submit</button>
      <h4>Images are stored for 30 days so you can share your results</h4>
    </form>
    </>
  );
};

export default UploadAndDisplayImage;