'use client'

import React, {useEffect} from 'react';
import { useImperativeFilePicker } from 'use-file-picker';
import {AiOutlineClose, AiOutlinePlus} from 'react-icons/ai'
import {BsImage} from 'react-icons/bs'

const Imperative = ({style, setImages, images}) => {
  const [
    openFileSelector,
    { filesContent, loading, errors, plainFiles, removeFileByIndex },
  ] = useImperativeFilePicker({
    multiple: true,
    accept:'image/*',
    readAs: 'DataURL',
  });

  useEffect(() => {
    console.log(images, filesContent)
    if(filesContent.length>0) {setImages(filesContent)}
  }, [filesContent])

  if (loading) {
    return <div style={{height:'100px'}}>Loading...</div>;
  }

  return (
    <div id='unit--images' style={{display:'flex', gap:'1rem', height:'100px', padding:'10px', paddingLeft:'0'}}>
      {filesContent.map((file, i) => (
        <div key={i} style={{height:'100%', width:'auto', borderRadius:'15px', overflow:'hidden'}}>
          <div style={{ display: 'flex', alignItems: 'center', position:'relative', height:'100%', width:'auto' }} key={file.name}>
            <img src={file.content} alt={file.name} style={{objectFit:'cover', height:'80px', aspectRatio:'1/1'}}/>
            <button 
              style={{position:'absolute', top:'5px', right:'5px', borderRadius:'50%', border:'none', cursor:'pointer', width:'20px', height:'20px', display:'flex', alignItems:'center', justifyContent:'center'}}
              onClick={() => removeFileByIndex(i)}
            >
              <AiOutlineClose color={'white'} fontSize={14} />
            </button>
          </div>
        </div>
      ))}
      <button style={{width:'100px', height:'100%', ...style}} onClick={async () => openFileSelector()}>
        <BsImage style={{}} color='white' fontSize='1rem'/>
        <p style={{fontSize:'0.6rem'}}>Upload or drag photo here</p>
      </button>
    </div>
  );
};

export default Imperative