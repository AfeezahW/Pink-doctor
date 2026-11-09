import { createContext, useContext, useMemo } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { flashcardData } from '../data/flashcards'

const AppContext = createContext(null)
export function AppProvider({ children }) {
  const [cases, setCases] = useLocalStorage('ppd-cases', [])
  const [bookmarks, setBookmarks] = useLocalStorage('ppd-bookmarks', [])
  const [progress, setProgress] = useLocalStorage('ppd-progress', {})
  const [cardProgress, setCardProgress] = useLocalStorage('ppd-card-progress', {})
  const [name, setName] = useLocalStorage('ppd-name', 'Affy Wojuade')
  const value = useMemo(() => ({ cases, setCases, bookmarks, setBookmarks, progress, setProgress, cardProgress, setCardProgress, name, setName, flashcardData }), [cases, bookmarks, progress, cardProgress, name, flashcardData])
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
export function useApp() {
  const context = useContext(AppContext)
  if (!context) throw new Error('useApp must be used within AppProvider')
  return context
}
