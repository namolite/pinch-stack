import { useState, useEffect } from 'react'
import Link from 'next/link'

import BlockContent from '@Components/workbench/blockContent'
import BlockSplit from '@Components/workbench/blockSplit'

import BlockImage from "@Components/workbench/blocks/image"
import BlockText from "@Components/workbench/blocks/text"
import ReactiveCalendar from '@Components/calendar'

import notification from '@Utils/notifications'


const IndexInner = () => {
  useEffect(() => {
    const handleMessage = (_event, args) => alert(args)

    // add a listener to 'message' channel
    window.electronAPI.on('message', handleMessage)

    return () => {
      window.electronAPI.off('message', handleMessage)
    }
  }, [])

  const onMessageClick = () => {
    window.electronAPI.send('message', 'Here we go!')
  }

  const dummyData = [
    { 'type': BlockText, 'content': ['dadasdasd', 'sfsdfsdfsfs', 'sffsdfsdfsf'], 'style': { 'background': 1 } },
    { 'type': BlockImage, 'content': { 'width': 100, 'height': 100, 'src': '/images/test_1.jpg', 'alt': '嘤嘤嘤' }, 'style': { 'background': 1 } }
  ]


  return (
    <>
      <div className='px-1 justify-center'>
        <ReactiveCalendar />
      </div>
      
      <h1>Dashboard</h1><h2>Dashboard</h2><h3>Dashboard</h3><h4>Dashboard</h4><h5>Dashboard</h5><h6>Dashboard</h6>
      <br />
      <p>{'<p>test plain text</p>'}</p><span>{'<span>test plain text</span>'}</span>
      <p>word break: The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.</p>
      <br />
      <button onClick={onMessageClick}>👉button👈</button>
      <br />
      <Link href="/about">link</Link>
      <br />
      <button onClick={notification('Title', 'Text', 'Terminal output')}>notification</button>
      <div className='flex block-3'>
        <BlockContent props={dummyData} />
        <BlockSplit />
        <BlockContent />
        <BlockSplit />
        <BlockContent />
      </div>
    </>
  )
}

export default IndexInner