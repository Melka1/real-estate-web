'use client'

import React from 'react';
import { useImperativeFilePicker } from 'use-file-picker';
import {AiOutlineClose, AiOutlinePlus} from 'react-icons/ai'

const Imperative = () => {
  const [
    openFileSelector,
    { filesContent, loading, errors, plainFiles, clear, removeFileByIndex, removeFileByReference },
  ] = useImperativeFilePicker({
    multiple: true,
    accept:'image/*',
    readAs: 'DataURL',
    onFilesSelected: ({ plainFiles, filesContent, errors }) => {
      console.log('onFilesSelected', plainFiles, filesContent, errors);
    },
    onFilesRejected: ({ errors }) => {
      console.log('onFilesRejected', errors);
    },
    onFilesSuccessfulySelected: ({ plainFiles, filesContent }) => {
      console.log('onFilesSuccessfulySelected', plainFiles, filesContent);
    },
  });


  if (loading) {
    return <div style={{height:'100px'}}>Loading...</div>;
  }

  return (
    <div id='unit--images' style={{display:'flex', gap:'1rem', height:'100px', padding:'10px', paddingLeft:'0'}}>
      
      {console.log(filesContent, plainFiles)}
      {filesContent.map((file, i) => (
        <div key={i} style={{height:'100%', width:'auto', borderRadius:'15px', overflow:'hidden'}}>
          <div style={{ display: 'flex', alignItems: 'center', position:'relative', height:'100%', width:'auto' }} key={file.name}>
            <img src={file.content} alt={file.name} style={{objectFit:'cover', height:'100%', aspectRatio:'1/1'}}/>
            <button 
              style={{position:'absolute', top:'5px', right:'5px', borderRadius:'50%', border:'none', cursor:'pointer', width:'20px', height:'20px', display:'flex', alignItems:'center', justifyContent:'center'}}
              onClick={() => removeFileByIndex(i)}
            >
              <AiOutlineClose color={'white'} fontSize={14} />
            </button>
          </div>
        </div>
      ))}
      <button style={{width:'100px'}} onClick={async () => openFileSelector()}>
        <AiOutlinePlus color='white'/>
      </button>
      {/* <button onClick={() => clear()}>Clear</button> */}
    </div>
  );
};

export default Imperative