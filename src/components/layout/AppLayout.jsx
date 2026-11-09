import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
export default function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <div className="page-shell"><Sidebar open={menuOpen} onClose={()=>setMenuOpen(false)}/><div className="lg:pl-[260px]"><Topbar onMenu={()=>setMenuOpen(true)}/><main className="mx-auto max-w-[1500px] px-5 py-8 md:px-8 md:py-10"><Outlet/></main><footer className="px-5 pb-8 text-center text-[11px] text-[#b49da8] md:px-8">Pink Pink Doctor · A learning companion, not a substitute for clinical judgement.</footer></div></div>
}
