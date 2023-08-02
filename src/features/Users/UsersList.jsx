import React from 'react'
import { useGetUsersQuery } from './usersApilice'
import User from './User'

const UsersList = () => {

  const { data: users, isError, isLoading, isSuccess, error } = useGetUsersQuery("usersList",{
    pollingInterval:60000,
    refetchOnFocus:true,
    refetchOnMountOrArgChange:true
  })

  let content

  if (isLoading) content = <p>Loading........</p>

  if (isError) content = <p>{error?.data?.message}</p>

  if (isSuccess) {
    const { ids } = users
    const tableContent = ids?.length ?
      ids.map(userId => <User key={userId} userId={userId} />)
      : null
     content = (
      <table className="table table-success table-striped mt-4">
        <thead>
          <tr>
            <th scope="col">Mechanic</th>
            <th scope="col">Roles</th>
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

export default UsersList
