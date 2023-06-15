'use client'

import React, {useState, useRef} from 'react'
import Imperative from '../../assets/aiImagePicker'
import Carousel from '../../assets/carousel'
import { NavBar } from '@/app/components'
import InputSelect from '@/app/assets/inputSelect'
import {AiOutlineLeft, AiOutlineCheck, AiOutlineMinus, AiOutlineArrowsAlt, AiOutlineCloudUpload, AiOutlinePlus, AiOutlineArrowLeft, AiOutlineHeart, AiOutlineEllipsis} from 'react-icons/ai'
import {BsChevronRight} from 'react-icons/bs'
import './add.css'
import Checkbox from '@/app/assets/checkbox'
import { BiBath } from 'react-icons/bi'
import { MdBed } from 'react-icons/md'
import { IoInformationCircleOutline ,IoLocationSharp} from 'react-icons/io5'

function page() {
  const [duration, setDuration] = useState(0)
  const [downPayment, setDownPayment] = useState(0)
  const [rules, setRules] = useState([
    "Do not dmage the facilities",
    "Must pay bill on time",
    "It is forbidden to carry narcotic and alcohol"
  ])
  const [additionalFacilities, setAdditionalFacilities] = useState([
    "Squat toilet and wipes",
    "Laundry every week, max 10Kg",
    "A security guard is provided"
  ])
  const [addStatus, setAddStatus] = useState([true, true])

  const [images, setImages] = useState([])
  const [name, setName] = useState("")
  const [cost, setCost] = useState(null)
  const [stateName, setStateName] = useState('')
  const [city, setCity] = useState('')

  const [primarySelect, setPrimarySelect] = useState(0)
  const [secondarySelect, setSecondarySelect] = useState('mon')

  const input1 = useRef("")
  const input2 = useRef("")

  console.log(images)

  function handleAddButton(id){
    let addContent = [...addStatus]
    console.log(addContent)
    addContent[id] = !addContent[id]
    console.log(addContent)
    setAddStatus(addContent)
  }

  function handleAdd(id){
    let content = id==0?input1.current.value:input2.current.value
    console.log(content)
    id==0?
      setRules(prev=>[...prev, content])
      :setAdditionalFacilities(prev=>[...prev, content])
    handleAddButton(id)

  }

  return (
    <div style={{minHeight:'100vh'}}>
        <NavBar/>
        <div style={{paddingTop:'4rem'}}>
          <div className='navigation'  style={{display:'flex', width:'100%', justifyContent:'space-between', padding:'1rem 5rem', background:'rgba(0,0,0,0.5)'}}>
            <div style={{display:'flex', alignItems:'center', gap:'1rem', fontFamily:'Inter'}}>
              <button 
                className='back--button'
                style={{width:'1.5rem', height:'1.5rem', borderRadius:'50%',border:'1px solid lightgray',background:'transparent',display:'flex',justifyContent:'center',alignItems:'center'}}
              >
                <AiOutlineLeft color={'white'} fontSize={'0.8rem'} />
              </button>
              <p className='navigation--title'>Add Property</p>
            </div>

            <div className='progress' style={{display:'flex'}}>
              <div>
                <div className='navigation--number' style={{background:'blue'}}>
                  <AiOutlineCheck style={{color:'white'}}/>
                </div>
                <p>Owner Data</p>
                <BsChevronRight className='arrow' style={{color:'lightgray'}}/>
              </div>
              <div>
                <div className='navigation--number' style={{background:'blue'}}>
                  <p style={{color:'white'}}>2</p>
                </div>
                <p>About Properties</p>
                <BsChevronRight className='arrow' style={{color:'lightgray'}}/>
              </div>
              <div>
                <div className='navigation--number'>
                  <p>3</p>
                </div>
                <p>Review</p>
                <BsChevronRight className='arrow' style={{color:'lightgray'}}/>
              </div>
            </div>

            <div className='draft--control'>
              <button>
                <AiOutlineCloudUpload />
                <p>Import</p>
              </button>
              <button>
                <p>Save Draft</p>
              </button>
            </div>
          </div>
          <div className='content' style={{padding:'0 5rem', paddingBottom:'2rem'}}>
            <div className='partition description--pane'>
              <h2>Add Property</h2>
              <div className='form'>
                <div className="unit--information">
                  <p className='unit--information--title section--title'>Unit Information</p>
                  <div className='unit--information--content'>
                    <label htmlFor="unit--name">Unit name</label>
                    <input onChange={(e)=>setName(e.target.value)} type="text" id='unit--name' placeholder='Enter the name of the property'/>
                    <label htmlFor="unit--images">Unit image</label>
                    <Imperative setImages={setImages} images={images}/>
                  </div>
                </div>
                <hr/>
                <div className='unit--location'>
                  <p className='unit--location--title section--title'>Unit Location</p>
                  <div className='unit--location--content'>
                    <label htmlFor="location--name">Unit location name</label>
                    <input onChange={(e)=>setCity(e.target.value)} type="text" id='location--name' placeholder='Enter the location of the property'/>
                    <div className='location--detail'>
                      <div className='unit--number'>
                        <label htmlFor="unit--number">Unit number</label>
                        <input type="text" id='unit--number'/>
                      </div>
                      <div className='unit--zipcode'>
                        <label htmlFor="unit--zipcode">Zip code</label>
                        <input type="text" id='unit--zipcode'/>
                      </div>
                      <div className='unit--state'>
                        <label htmlFor="unit--state">State</label>
                        <input onChange={(e)=>setStateName(e.target.value)} type="text" id='unit--state'/>
                      </div>
                    </div>

                  </div>
                </div>
                <hr/>
                <div className='price--and--duration'>
                  <p className='price--and--duration--title section--title'>Price & Duration</p>
                  <div className='price--and--duration--content'>
                    <div className='rental--cost'>
                      <label htmlFor="rental--cost">Rental Costs</label>
                      <InputSelect setPrimarySelect={setPrimarySelect} primarySelect={primarySelect} setSecondarySelect={setSecondarySelect} secondarySelect={secondarySelect}/>
                    </div>
                    <div className='late--charge'>
                      <label htmlFor="late--charge">Late Charge <span>(Optional)</span></label>
                      <InputSelect/>
                    </div>
                    <div className='rental--time'>
                      <label htmlFor="rental--time">Minimum rental time</label>
                      <div className='rental--time--container'>
                        <p>Minimun duration <span>(in months)</span></p>
                        <div className='control--container'>
                          <button onClick={()=>setDuration(prev=>prev-1)}><AiOutlineMinus/></button>
                          <p>{duration}</p>
                          <button onClick={()=>setDuration(prev=>prev+1)}><AiOutlinePlus/></button>
                        </div>
                      </div>
                    </div>
                    <div className='minimum--down--payment'>
                      <label htmlFor="minimum--down--payment">Minimum down payment <span>(Optional)</span></label>
                      <div id='minimum--down--payment' className='minimum--down--payment--input'>
                        <input onChange={(e)=>setDownPayment(e.target.value)} value={downPayment} type="text"/>
                        <p>Percent %</p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr/>
                <div className="additional--information">
                  <p className='additional--information--title section--title'>Additional Information</p>
                  <div className='additional--information--content'>
                    <div className='additional--information--content--rules'>
                      <label htmlFor="rules">Rules</label>
                      {
                        rules.map((rule, index)=>(
                          <Checkbox key={index} title={rule}/>
                        ))
                      }
                      {addStatus[0]?<button onClick={()=>handleAddButton(0)}  className='add--rule--and--facility'>
                        <AiOutlinePlus/>
                        <p>Add additional rules</p>
                      </button>:
                      <div className='input--container'>
                        <input ref={input1} type='text' placeholder='Enter additional rule'/>
                        <div className='input--controls'>
                          <button onClick={()=>handleAdd(0)}>
                            <p>Add</p>
                          </button>
                          <button onClick={()=>handleAddButton(0)}>
                            <p>Cancel</p>
                          </button>
                        </div>
                      </div>}
                      <div style={{marginTop:'1rem', borderRadius:'0.5rem', border:'1px dashed white', display:'flex', width:'100%', justifyContent:'center'}}>
                        <Imperative style={{background:'transparent', border:'none', outline:'none'}}/>
                      </div>
                      
                    </div>
                    <div className='additional--information--content--facilities'>
                      <label htmlFor="additional--facilities">Additional facilities</label>
                      {
                        additionalFacilities.map((facility, index) =>(
                          <Checkbox key={index} title={facility}/>
                        ))
                      }
                     {addStatus[1]?<button onClick={()=>handleAddButton(1)} className='add--rule--and--facility'>
                        <AiOutlinePlus/>
                        <p>Add additional facilities</p>
                      </button>:
                      <div className='input--container'>
                        <input ref={input2} type='text' placeholder='Enter additional facility'/>
                        <div className='input--controls'>
                          <button onClick={()=>handleAdd(1)}>
                            <p>Add</p>
                          </button>
                          <button onClick={()=>handleAddButton(1)}>
                            <p>Cancel</p>
                          </button>
                        </div>
                      </div>}
                      <div style={{marginTop:'1rem', borderRadius:'0.5rem', border:'1px dashed white', display:'flex', width:'100%', justifyContent:'center'}}>
                        <Imperative style={{background:'transparent', border:'none', outline:'none'}}/>
                      </div>

                    </div>
                  </div>
                </div>
                <hr/>
                <div className='add--navigation'>
                  <button className='back'>
                    <AiOutlineArrowLeft fontSize={'1rem'}/>
                    <p>Back</p>
                  </button>
                  <button className='continue'>
                    <p>Continue</p>
                  </button>
                </div>
              </div>
            </div>
            <div className='partition preview--pane'>
              <h2>Quick Preview</h2>
              <div className='preview--container'>
                <div className='carousel--container'>
                  {images?.length>0?<Carousel images={images}/>:(
                    <div style={{width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
                      <p>Your image goes here</p>
                    </div>
                  )}
                </div>
                <div className='preview--content--container'>
                  <div className='price--and--like'>
                    <p>${primarySelect?primarySelect:'550'}/<span style={{fontSize:'1rem'}}>{secondarySelect?secondarySelect:'mon'}</span></p>
                    <div className='like--button'>
                      <AiOutlineHeart fontSize='1rem' color='red'/>
                    </div>
                  </div>
                  <p className="name">{name?name:'Grand Citra Mansion'}</p>
                  <div className="location--content">
                    <IoLocationSharp color='white'/>
                    <p className="location--name">{city?city:'Surabaya'}, {stateName?stateName:'Indonesia'}</p>
                  </div>
                  <hr/>
                  <div className="property--description--detail">
                    <div className="area" >
                      <AiOutlineArrowsAlt color='white' fontSize={16}/>
                      <p>64 <span>m</span></p>
                    </div>
                    <div className="bedroom--counts">
                      <MdBed color='white' fontSize={16}/>
                      <p>2</p>
                    </div>
                    <div className="bathroom--counts">
                      <BiBath color='white' fontSize={16}/>
                      <p>2</p>
                    </div>
                    <div className="details">
                      <AiOutlineEllipsis fontSize={16}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className='preview--notification'>
                <IoInformationCircleOutline fontSize={16}/>
                <p>This is the preview when your propery is published</p>
              </div>
            </div>


          </div>
        </div>
    </div>
  )
}

export default page
