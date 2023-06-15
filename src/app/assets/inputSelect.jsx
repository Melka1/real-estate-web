'use client'

import { height } from '@mui/system'
import React, {useState} from 'react'

function InputSelect({setPrimarySelect, primarySelect, secondarySelect, setSecondarySelect}) {
  const [type, setType] = useState('per Month')
  // const [value, setValue] = useState(0)


  return (
    <div style={styles.container}>
      <p>$</p>
      <input value={primarySelect} type="text" onChange={(e)=>setPrimarySelect(e.target.value)} style={styles.input}/>
      <div className='partition' style={styles.partition}/>
      <select value={secondarySelect} onChange={(e)=>setSecondarySelect(e.target.value)} style={styles.select}>
        <option style={styles.option} value='day'>per Day</option>
        <option style={styles.option} value="week">per Week</option>
        <option style={styles.option} value="mon">per Month</option>
        <option style={styles.option} value="yr">per Year</option>
      </select>
    </div>
  )
}

export default InputSelect

const styles = {
  container:{
    display: 'flex',
    gap: '0.5rem',
    border: '1px solid gray',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    alignItems: 'center',
    padding:'0 0.5rem'
  },
  input: {
    border: 'none',
    background: 'transparent',
    outline: 'none'
  },
  select: {
    border: 'none',
    background: 'transparent',
    outline:'none'
  }, 
  option: {
    background: '#2d2e2e'
  },
  partition:{
    width: '1px',
    borderRight: '1px solid #8d7c7c',
    height: '1rem'
  }
}
