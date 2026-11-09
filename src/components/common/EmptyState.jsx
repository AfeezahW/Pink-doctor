import { BookOpen } from 'lucide-react'
export default function EmptyState({ title = 'Nothing here yet', description = 'Your saved items will appear here.' }) {
  return <div className="card flex flex-col items-center px-6 py-12 text-center"><div className="mb-4 rounded-2xl bg-[#fff0f5] p-4 text-[#bd527b]"><BookOpen size={25}/></div><h3 className="font-editorial text-xl">{title}</h3><p className="mt-2 max-w-sm text-sm text-[#927d87]">{description}</p></div>
}
