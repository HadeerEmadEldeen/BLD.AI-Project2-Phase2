import React from 'react'
import Header from './Header'
import SectionDesc from './SectionDesc'
import ShowCards from './ShowCards'
import "./Style.css"

function Home() {
  return (
   <>
   <Header></Header>
   <section className='box Allsection'>
   <SectionDesc></SectionDesc>
   <ShowCards></ShowCards>
   </section>
   </>
  )
}

export default Home