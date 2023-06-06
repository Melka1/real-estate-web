import React from 'react'
import Imperative from '../../assets/aiImagePicker'
import { NavBar } from '@/app/components'
import InputSelect from '@/app/assets/inputSelect'
import {AiOutlineLeft, AiOutlineCheck, AiOutlineRight, AiOutlineCloudUpload} from 'react-icons/ai'
import {BsChevronRight} from 'react-icons/bs'
import './add.css'

function page() {
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
          <div className='content' style={{padding:'0 5rem'}}>
            <div className='partition description--pane'>
              <h2>Add Property</h2>
              <div className='form'>
                <div className="unit--information">
                  <p className='unit--information--title section--title'>Unit Information</p>
                  <div className='unit--information--content'>
                    <label htmlFor="unit--name">Unit name</label>
                    <input type="text" id='unit--name' placeholder='Enter the name of the property'/>
                    <label htmlFor="unit--images">Unit image</label>
                    <Imperative />
                  </div>
                </div>
                <hr/>
                <div classname='unit--location'>
                  <p className='unit--location--title section--title'>Unit Location</p>
                  <div className='unit--location--content'>
                    <label htmlFor="location--name">Unit name</label>
                    <input type="text" id='location--name' placeholder='Enter the location of the property'/>
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
                        <input type="text" id='unit--state'/>
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
                      <InputSelect/>
                    </div>
                    <div className='late--charge'>
                      <label htmlFor="late--charge">Late Charge <span>(Optional)</span></label>
                      <InputSelect/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='partition preview--pane'>
              <h2>Quick Preview</h2>
            </div>


          </div>
        </div>
    </div>
  )
}

export default page
