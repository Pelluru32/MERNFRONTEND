import React, { useEffect } from 'react'
import { store } from '../../app/store'
import { notesApiSlice } from '../Notes/notesApiSlice'
import { usersApiSlice } from '../Users/usersApilice'
import { Outlet } from 'react-router-dom'
import DashBoardHeader from '../../components/DashBoardHeader'
import Footer from '../../components/Footer'

const PreFetch = () => {
    /* useEffect(()=>{
        store.dispatch(usersApiSlice.util.prefetch("getUsers","usersList",{force:true}))
        store.dispatch(notesApiSlice.util.prefetch("getNotes","notesList",{force:true}))
    },[]) */

    useEffect(()=>{
        console.log("prefetching subscribimg");
        const users=store.dispatch(usersApiSlice.endpoints.getUsers.initiate())
        const notes=store.dispatch(notesApiSlice.endpoints.getNotes.initiate())

        return ()=>{
            console.log("unsubscribe");
            users.unsubscribe()
            notes.unsubscribe()
        }
    },[])
    
  return <>
  <DashBoardHeader/>
  <Outlet/>
  <Footer/>
  </>
}

export default PreFetch
