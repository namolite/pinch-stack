import React, { useState, useEffect } from 'react'

import DocumentListItem from '@Components/documents/documentListItem'

// TODO Feature: Switch offline mode.

// TODO Component: Switch offline mode open by custom error.

interface IItem {
  
}

interface IItemProps {
  id: string,
  name: string,
  url: string,
  path?: string,
}

export default function DocumentList({ props }: any) {
  const [documentList, setDocumentList] = useState<any | null>(null)
  
  useEffect(() => {
    async function fetchDocumentList() {
      const list = await getDocumentList()
      setDocumentList(list)
    }
    fetchDocumentList()
  })

  const getDocumentList = () => {
    const listProps = require('@Data/document_list')
    return listProps
  }

  return (
    <div className=''>
      <div className=''>{
        documentList.map((listItem) => (
          <DocumentListItem itemProps={listItem} network={false} />
        ))
      }</div>
    </div>
  )
}