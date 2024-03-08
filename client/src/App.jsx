import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./Pages/Home"
import About from "./Pages/About"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/Signup"
import Profile from "./Pages/Profile"
import PriavteRoute from './components/privateRoute'
import CreateListing from "./Pages/CreateListing"
import UpdateListing from "./Pages/updateListing"
import Listing from "./Pages/listing"
import Search from "./Pages/Search"
export default function App() {
  return (
   <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/search" element={<Search />}/>
      <Route path="/listing/:listingId" element={<Listing/>}/>
      <Route element={<PriavteRoute/>}>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/create-listing" element={<CreateListing/>}/>
      <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          />
      </Route>
    </Routes>
   </BrowserRouter>
  )
}
