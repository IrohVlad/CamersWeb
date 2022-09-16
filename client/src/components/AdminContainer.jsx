import React,{useEffect, useState} from 'react'
import AdminContent from './AdminContent.jsx'

export default function AdminContainer({AllSetters, AllInfo}) {
  return (
    <section className='admin'>
        {AllInfo.map((item, index) => <AdminContent item={item} func={AllSetters[index]} />)}
    </section>
  )
}
