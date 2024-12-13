import {Routes, Route} from "react-router-dom"
import Login from "./pages/Login/Login"
import Chat from "./pages/Chat/Chat"
import ProfileUpdate from "./pages/ProfileUpdate/ProfileUpdate"

export default function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/profile" element={<ProfileUpdate/>}/>
      </Routes>
    </div>
  )
}