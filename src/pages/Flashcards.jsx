import { useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, Layers } from 'lucide-react'
import SectionHeading from '../components/common/SectionHeading'
import Flashcard from '../components/flashcards/Flashcard'
import { useApp } from '../context/AppContext'
import { getCardStats } from '../services/flashcardService'
export default function Flashcards() {
  const { flashcardData, cardProgress, setCardProgress } = useApp()
  const [index,setIndex] = useState(0)
  const stats = getCardStats(flashcardData,cardProgress)
  const card = flashcardData[index]
  const next = () => setIndex(value=>(value+1)%flashcardData.length)
  const previous = () => setIndex(value=>(value-1+flashcardData.length)%flashcardData.length)
  const progress = useMemo(()=>Math.round((index+1)/flashcardData.length*100),[index,flashcardData.length])
  return <div className="mx-auto max-w-4xl"><SectionHeading eyebrow="ACTIVE RECALL" title="A little revision, often." description="Review foundational clinical concepts one card at a time."/><div className="mb-7 grid grid-cols-3 gap-3"><div className="card p-4"><p className="text-xs text-[#9b8791]">Total cards</p><p className="mt-1 text-2xl font-semibold">{stats.total}</p></div><div className="card p-4"><p className="text-xs text-[#9b8791]">Known</p><p className="mt-1 text-2xl font-semibold text-[#48805d]">{stats.known}</p></div><div className="card p-4"><p className="text-xs text-[#9b8791]">Still learning</p><p className="mt-1 text-2xl font-semibold text-[#b44c76]">{stats.learning}</p></div></div><div className="mb-4 flex items-center justify-between"><div><p className="text-sm font-semibold text-[#604451]">{card.topic}</p><p className="mt-1 text-xs text-[#a58f99]">Card {index+1} of {flashcardData.length}</p></div><div className="h-2 w-32 overflow-hidden rounded-full bg-[#f5e8ed]"><div className="h-full bg-[#c85b83]" style={{width:`${progress}%`}}/></div></div><Flashcard key={card.id} card={card} rating={cardProgress[card.id]} onRate={rating=>setCardProgress(current=>({...current,[card.id]:rating}))}/><div className="mx-auto mt-6 flex max-w-2xl justify-between"><button onClick={previous} className="btn-secondary inline-flex items-center gap-2"><ArrowLeft size={15}/> Previous</button><button onClick={next} className="btn-primary inline-flex items-center gap-2">Next card <ArrowRight size={15}/></button></div><div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#a58f99]"><Layers size={14}/> Your review progress is saved in this browser.</div></div>
}