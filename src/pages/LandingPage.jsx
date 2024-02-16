

import { Footer } from '../section/Footer'
import { Appbar } from '../components/Appbar'
import { GreedComponent } from '../components/GreedComponent'
import { TailoredIndus } from '../section/TailoredIndus'
import { Start } from '../section/Start'
import { DesignedForYou } from '../section/DesignedForYou'
import { Companies } from '../section/Companies'
import { Patented } from '../section/Patented'
import { AsphaltGravel } from '../section/AsphaltGravel'
import { Interested } from '../section/Interested'
import { GotAQuestion } from '../section/GotAQuestion'
import { WhatToExpect } from '../section/WhatToExpect'
import { StartFooter } from '../section/StartFooter'
import { Msg } from '../components/Msg'
import { useState } from 'react'
import { QuoteAppear } from './QuoteAppear'
import { MsgBox } from '../components/MsgBox'
import { Pause } from '../components/Pause'
import { ApMenu } from '../section/ApMenu'

export function LandingPage() {
  const [Quote , setQuote] = useState(false);
  const [isokk, setIsokk] = useState(false);
  const [fullPlay, setFullPlay] = useState(false);
  const [menu, setMenu] = useState(false);
  const [trans , setTrans] = useState(false);
  const bgChange = ()=>{
    if(window.scrollY >= 90){
      setTrans(true);
    }
    else{
      setTrans(false);
    }
  }
  window.addEventListener("scroll", bgChange);

  return (
    <div className='flex flex-col h-screen w-screen'>
      <div className='flex flex-col flex-grow z-10'>
        <Appbar trans={trans} setQuote={setQuote} menu={menu} setMenu={setMenu}/>
        <ApMenu menu={menu} setMenu={setMenu}/>
        <QuoteAppear Quote={Quote} setQuote={setQuote}/>
        <Start setFullPlay={setFullPlay} fullPlay={fullPlay}/>
        <Pause setFullPlay={setFullPlay} fullPlay={fullPlay}/>
        <Msg setIsokk={setIsokk} isokk={isokk}/>
        <MsgBox isokk={isokk} setIsokk={setIsokk}/>
        <StartFooter />
        <DesignedForYou />
        <Companies />
        <Patented />
        <WhatToExpect />
        <AsphaltGravel />
        <TailoredIndus />
        <Interested />
        <GotAQuestion />
      </div>
      <Footer  setQuote={setQuote}/>
    </div>
  )
}
