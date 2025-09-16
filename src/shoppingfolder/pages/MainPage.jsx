import React,{useState} from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Collections from './components/Collections'
import Footer from './components/Footer'
import  {Gents} from '../data'
import { Ladies } from '../data'
import Womancollection from './components/Womancollection'
const Mainpage = () => {
  const [gentsFashion,setGentsFashion]=useState(Gents)
  const [ladiesFashion,setLadiesFashion]=useState(Ladies)
  return (
    <div>
      <Header />
      <Banner />
      <Collections gentsFashion={gentsFashion} />
      <Womancollection ladiesFashion={ladiesFashion}/>
      <Footer />
    </div>
  )
}

export default Mainpage
