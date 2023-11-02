import React, { useState, useEffect } from 'react'

import DocumentListItem from '@Components/documents/documentListItem'

import debug from '@Utils/debug'

// TODO Feature: Switch offline mode.

// TODO Component: Switch offline mode open by custom error.

interface IItem {
  props: IItemProps[]
}

interface IItemProps {
  id: string,
  name: string,
  url: string,
  path?: string
}

export default function DocumentList({ props }: IItem | null) {
  debug.log(props)
  return (
    <div className='document-list flex flex-col'>
      <div className=''>{
        props.map((item) => (
          <DocumentListItem
            key={item.id}
            title={item.name}
            path={item.url}
          />
        ))
      }</div>
    </div>
  )
}