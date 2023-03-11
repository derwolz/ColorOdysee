import React, {useRef, useState} from 'react';
import AvatarEditor from 'react-avatar-editor';
import Dropzone from 'react-dropzone';
import uploadImg from '../../assets/upload.webp'
import {css} from '@emotion/react';

const buttonCSS = css`
width: 4em;
height: 2em;
margin: 10px;
background-color: #a44;
border-radius: 3px;
`
const dzCSS = css`
display: flex;
width: 250;
height: 250;
flex-direction: column;
justify-content:center;
align-items: center;
overflow: hidden;
background-image: url( ${uploadImg} )};
background-repeat: none;
`
const ImageEditor = ({setImage, zoom, radius, revertZoom}) => {
    const [inImage, setInImage] = useState(null)
    const [isDragAccept, setDragAccept] = useState(false);
    const [isDragDeny, setDragDeny] = useState(false);
    
    const dz = useRef(null)    ;
    const editorRef = useRef(null);
    const handleDrop = (dropped) => {
        console.log(dropped[0]);
        console.log(dz);
        setInImage(dropped[0]);
        setImage(editorRef);
        setDragAccept(false);
        setDragDeny(false);
    }
    const handleRevertImage = () => {
        setInImage(null);
        revertZoom();
    }
    const validateChange = () => {
        return inImage != null;
    }
    const handleDrag = () => {
        console.log('dragged over');
        setDragAccept(true);
    }
    const handleLeave = () => {
        setDragAccept(false);
    }

return (
    <div css={dzCSS} style={
        isDragAccept ? {borderColor: "#888888", borderWidth: "4px", borderStyle: "dashed", backgroundColor: "#99cc99", borderRadius: "11px", backgroundImage: "none"} 
    : isDragDeny ? {borderColor: "#882222", borderWidth: "4px", borderStyle: "dashed", backgroundColor: "#66cc66", opacity: .1, borderRadius: "11px"} 
    : inImage != null ? {backgroundImage: "none"} 
    : {} } >

    <Dropzone
        ref={dz}
        onDrop={handleDrop}
        noKeyboard
        noClick={inImage != null}
        
        accept={{"image/*": []}}
        onDragEnter={handleDrag}
        onDragLeave={handleLeave}
        
        >
            
            {({getRootProps, getInputProps}) => (
                <div {...getRootProps()}>
                    <AvatarEditor 
                    ref={editorRef}
                    width={250} 
                    height={250} 
                    border={0} 
                    image={inImage} 
                    scale={zoom*4}
                    borderRadius={radius}
                    />
                    
                    <input {...getInputProps()} />
                    
                </div>
                
            )}
        </Dropzone>

        {validateChange() ? 
        <button css={buttonCSS} onClick={handleRevertImage} >Remove</button>
        
:<> </>}
        </div>

)

}
export default ImageEditor;