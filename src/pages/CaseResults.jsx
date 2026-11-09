import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useApp } from '../context/AppContext'
import AnalysisResults from '../components/case-analysis/AnalysisResults'
import EmptyState from '../components/common/EmptyState'
export default function CaseResults() {
  const { id } = useParams()
  const { cases } = useApp()
  const item = cases.find(entry=>entry.id===id)
  if (!item) return <div className="mx-auto max-w-3xl"><EmptyState title="Case not found" description="This case may have been cleared from this browser."/><Link to="/new-case" className="mt-4 inline-block text-sm font-semibold text-[#b44c76]">Start a new case</Link></div>
  return <div className="mx-auto max-w-4xl"><Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm text-[#9b7f8c] hover:text-[#a9436b]"><ArrowLeft size={15}/> Back to dashboard</Link><AnalysisResults item={item} analysis={item.analysis}/></div>
}
