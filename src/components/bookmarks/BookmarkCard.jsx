import { Bookmark, Trash2 } from 'lucide-react'
export default function BookmarkCard({ item, onRemove }) {
  return <div className="card flex items-start justify-between gap-3 p-4"><div className="flex min-w-0 gap-3"><div className="rounded-xl bg-[#fff0f5] p-2.5 text-[#b94f78]"><Bookmark size={17}/></div><div className="min-w-0"><p className="truncate text-sm font-semibold text-[#59434e]">{item.title}</p><p className="mt-1 text-xs capitalize text-[#a58f99]">{item.type || 'Saved item'}</p></div></div><button onClick={onRemove} aria-label="Remove bookmark" className="rounded-lg p-2 text-[#b49da8] hover:bg-[#fff0f5] hover:text-[#a9436b]"><Trash2 size={16}/></button></div>
}
