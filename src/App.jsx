import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import Dashboard from './pages/Dashboard'
import NewCase from './pages/NewCase'
import CaseResults from './pages/CaseResults'
import Flashcards from './pages/Flashcards'
import Bookmarks from './pages/Bookmarks'
import Profile from './pages/Profile'
export default function App() {
  return <Routes><Route element={<AppLayout/>}><Route index element={<Dashboard/>}/><Route path="new-case" element={<NewCase/>}/><Route path="case/:id" element={<CaseResults/>}/><Route path="flashcards" element={<Flashcards/>}/><Route path="bookmarks" element={<Bookmarks/>}/><Route path="profile" element={<Profile/>}/><Route path="*" element={<Navigate to="/" replace/>}/></Route></Routes>
}