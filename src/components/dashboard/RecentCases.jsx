import { ArrowUpRight, Clock3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatDate } from '../../utils/formatters'
import EmptyState from '../common/EmptyState'
export default function RecentCases({ cases }) {
  return <section className="card p-5 md:p-6"><div className="mb-5 flex items-center justify-between"><div><h2 className="font-editorial text-xl">Recent cases</h2><p className="mt-1 text-xs text-[#9b8791]">Pick up where you left off</p></div><Link to="/new-case" className="text-xs font-semibold text-[#b44c76]">New case <ArrowUpRight className="inline" size={14}/></Link></div>{cases.length === 0 ? <div className="py-4"><EmptyState title="Your case history starts here" description="Analyse your first clinical presentation to see it appear here."/></div> : <div className="divide-y divide-[#f3e8ed]">{cases.slice(0,4).map(item=><Link to={`/case/${item.id}`} key={item.id} className="flex items-center justify-between gap-3 py-4 first:pt-0 last:pb-0"><div className="min-w-0"><p className="truncate text-sm font-semibold text-[#57434d]">{item.complaint}</p><p className="mt-1 text-xs text-[#a38e98]">{item.symptoms?.length || 0} symptoms · {formatDate(item.createdAt)}</p></div><ArrowUpRight size={16} className="shrink-0 text-[#bd7895]"/></Link>)}</div>}</section>
}
