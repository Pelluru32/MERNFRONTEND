import React from 'react'
import { useGetNotesQuery } from './notesApiSlice'
import Note from './Note'
import useAuth from '../../hooks/useAuth'

const NotesList = () => {
  const { username, isAdmin, isManager } = useAuth()

  const { data: notes, isError, isLoading, isSuccess, error } = useGetNotesQuery('notesList', {
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true
  })

  let content

  if (isLoading) content = <p className='mt-5'>Loading........</p>

  if (isError) content = <p className='mt-5'>{error?.data?.message}</p>

  if (isSuccess) {
    const { ids, entities } = notes
    
    let filteredIds
    if (isAdmin || isManager) {
      filteredIds = [...ids]
    } else {
      filteredIds = ids.filter(noteId => entities[noteId].username === username)

    }

    const tableContent = filteredIds?.length ?
      filteredIds.map(noteId => <Note key={noteId} noteId={noteId} />) : null
    content = (
      <table className="table table-success table-striped mt-4 co1-12">
        <thead>
          <tr>
            <th scope="col">Status</th>
            <th scope="col">Created</th>
            <th scope="col">Updated</th>
            <th scope="col">Title</th>
            <th scope="col">Assigned Mechanic</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>{tableContent}</tbody>
      </table>
    )
  }

  return (
    <div>
      {content}
    </div>
  )
}

export default NotesList
