import { Bookmark, BookOpen, ClipboardList } from 'lucide-react'
import WelcomeCard from '../components/dashboard/WelcomeCard'
import RecentCases from '../components/dashboard/RecentCases'
import LearningProgress from '../components/dashboard/LearningProgress'
import StatCard from '../components/common/StatCard'
import { useApp } from '../context/AppContext'
export default function Dashboard() {
  const { cases, bookmarks, progress, name } = useApp()
  return <div className="space-y-7"><WelcomeCard name={name}/><div className="grid gap-4 sm:grid-cols-3"><StatCard icon={ClipboardList} label="Cases explored" value={cases.length} note="Your clinical practice history"/><StatCard icon={Bookmark} label="Saved items" value={bookmarks.length} note="Cases and topics to revisit"/><StatCard icon={BookOpen} label="Topics studied" value={Object.values(progress).filter(Boolean).length} note="Keep building your knowledge"/></div><div className="grid gap-5 xl:grid-cols-[1.35fr_1fr]"><RecentCases cases={cases}/><LearningProgress progress={progress}/></div><div className="rounded-2xl border border-[#f0e2e8] bg-white p-5"><p className="font-editorial text-lg text-[#634657]">A note on clinical learning</p><p className="mt-2 text-sm leading-6 text-[#927d87]">Start with what you know, identify what you do not know, and ask why each finding matters. Pink Pink Doctor is designed to support that process—not replace your clinical teachers or judgement.</p></div></div>
}
