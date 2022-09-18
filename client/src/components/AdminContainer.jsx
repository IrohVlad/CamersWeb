import React,{useEffect, useState} from 'react'
import AdminContent from './AdminContent.jsx'

export default function AdminContainer({refresh, AllFetch, AllSetters, AllInfo}) {
  useEffect(()=>{
    console.log(AllInfo);
  },[])
  return (
    <section className='admin'>
        {Object.values(AllInfo).map((value, index) => <AdminContent refresh={refresh} item={value} fetch={AllFetch[index]} func={AllSetters[index]} />)}
    </section>
  )
}
