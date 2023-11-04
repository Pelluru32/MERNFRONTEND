import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import MainLayout from "./Pages/MainLayout"
import PublicAccess from "./Pages/PublicAccess"
import Login from "./Pages/Login"
import DashBody from "./components/DashBoard"
import NotesList from "./features/Notes/NotesList"
import UsersList from "./features/Users/UsersList"
import EditNotes from "./features/Notes/EditNote"
import NewNote from "./features/Notes/NewNote"
import EditUser from "./features/Users/EditUser"
import NewUserForm from "./features/Users/NewUserForm"
import PreFetch from "./features/Auth/PreFetch"
import DashLayout from "./Pages/DashLayout"
import PersistLogin from "./features/Auth/persistLogin"
import RequireAuth from "./features/Auth/RequireAuth"
import { Roles } from "./config/Roles"

/* const Rout = createBrowserRouter([
  {
    path: "/", element: <MainLayout />, children: [
      { index: true, element: <PublicAccess /> },
      { path: "login", element: <Login /> },]
  },
  {
    path: "dash", element: <PreFetch />, children: [
      { index: true, element: <DashBody /> },
      { path: "notes", element: <NotesList /> },
      { path: "notes/:id", element: <EditNotes /> },
      { path: "notes/new", element: <NewNote /> },
      { path: "users", element: <UsersList /> },
      { path: "users/:id", element: <EditUser /> },
      { path: "users/new", element: <NewUserForm /> },

    ]
  },

]) */

const Rout = createBrowserRouter(
  createRoutesFromElements(<Route>

    <Route path="/" element={<MainLayout />}>
      <Route index element={<PublicAccess />} />
      <Route path="login" element={<Login />} />
    </Route>

    <Route element={<PersistLogin />}>
      <Route element={<RequireAuth allowedRoles={[...Object.values(Roles)]} />}>
        <Route element={<PreFetch />}>
          <Route path="dash" element={<DashLayout />}>

            <Route index element={<DashBody />} />

            <Route element={<RequireAuth allowedRoles={[Roles.Admin,Roles.Chief_Mechanic]} />}>
              <Route path="users">
                <Route index element={<UsersList />} />
                <Route path=":id" element={<EditUser />} />
                <Route path="new" element={<NewUserForm />} />
              </Route>
            </Route>

            <Route path="notes">
              <Route index element={<NotesList />} />
              <Route path=":id" element={<EditNotes />} />
              <Route path="new" element={<NewNote />} />
            </Route>
          </Route>
        </Route>
      </Route>
    </Route>
  </Route>

  )
);


const App = () => {
  return (<RouterProvider router={Rout} />
  )
}

export default App
