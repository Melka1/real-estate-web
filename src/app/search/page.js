import React from 'react'
import './search.css'
import SearchNavRar from '../containers/search/navbar/navbar'
import Header from '../containers/search/header/header'
import {Filter} from '../containers/search/filter/filter'
import {List} from '../containers/search/list/list'

function page() {
  return (
    <div className='search'>
      <SearchNavRar/>

      <div className='search--display'>
       <Header/>

       <div className='filter-and-list'>
        <Filter/>
        <List/>
       </div>
      </div>
    </div>
  )
}

export default page