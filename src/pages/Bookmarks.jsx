import SectionHeading from '../components/common/SectionHeading'
import EmptyState from '../components/common/EmptyState'
import BookmarkCard from '../components/bookmarks/BookmarkCard'
import { useApp } from '../context/AppContext'
export default function Bookmarks() {
  const { bookmarks, setBookmarks } = useApp()
  return <div><SectionHeading eyebrow="YOUR LIBRARY" title="Saved for later." description="Keep useful clinical cases and learning material close at hand."/>{bookmarks.length ? <div className="grid gap-3 md:grid-cols-2">{bookmarks.map(item=><BookmarkCard key={item.id} item={item} onRemove={()=>setBookmarks(current=>current.filter(x=>x.id!==item.id))}/>)}</div> : <EmptyState title="Your bookmarks are waiting" description="Save a case from its results page to keep it here for revision."/>}</div>
}
