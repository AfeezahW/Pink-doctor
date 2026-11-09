import { Link } from 'react-router-dom'
export default function LearningProgress({ progress }) {
  const total = 12
  const completed = Object.values(progress).filter(Boolean).length
  const percent = Math.min(100, Math.round(completed / total * 100))
  return <section className="card p-5 md:p-6"><div className="flex items-center justify-between"><div><h2 className="font-editorial text-xl">Your learning</h2><p className="mt-1 text-xs text-[#9b8791]">Small steps add up</p></div><Link to="/profile" className="text-xs font-semibold text-[#b44c76]">View all</Link></div><div className="mt-6 flex items-end justify-between"><p className="text-3xl font-semibold text-[#604451]">{completed}<span className="text-base font-normal text-[#a58f99]"> / {total}</span></p><p className="text-xs text-[#a58f99]">topics completed</p></div><div className="mt-3 h-2 overflow-hidden rounded-full bg-[#f5e8ed]"><div className="h-full rounded-full bg-[#c85b83] transition-all" style={{width:`${percent}%`}}/></div><p className="mt-3 text-xs text-[#a58f99]">{percent}% of your starter learning list completed</p></section>
}
