import { useNavigate } from 'react-router-dom'
import SectionHeading from '../components/common/SectionHeading'
import CaseInput from '../components/case-analysis/CaseInput'
import { useApp } from '../context/AppContext'
import { analyseCase } from '../services/caseAnalysis'
export default function NewCase() {
  const navigate = useNavigate()
  const { setCases } = useApp()
  const handleSubmit = form => {
    const analysis = analyseCase(form)
    const item = { ...form, id: crypto.randomUUID(), createdAt: new Date().toISOString(), analysis }
    setCases(current => [item, ...current].slice(0,30))
    navigate(`/case/${item.id}`)
  }
  return <div className="mx-auto max-w-4xl"><SectionHeading eyebrow="CLINICAL WORKSPACE" title="Start with a patient." description="Describe the presentation, select the symptoms and explore a structured learning guide."/><CaseInput onSubmit={handleSubmit}/></div>
}
