import React from 'react'
import Header from './page1/Header'
import SectionDesc from './page1/SectionDesc'
import ShowCards from './page1/ShowCards'
import "./Style.css"
import BoxOfCards from './page1/BoxOfCards'
import Category from './page1/Category'
function Home() {

  return (
   <>
   <Header></Header>
   <BoxOfCards></BoxOfCards>
   <section className='box Allsection'>
     <SectionDesc></SectionDesc>
     <ShowCards></ShowCards>
   </section>
   <Category></Category>
   
   </>
  )
}

export default Home