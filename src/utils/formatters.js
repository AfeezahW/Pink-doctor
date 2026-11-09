export function formatDate(value) {
    if (!value) return 'Recently'
    return new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(value))
  }
  export function getInitials(name = 'Medical student') {
    return name.split(' ').filter(Boolean).slice(0, 2).map(part => part[0].toUpperCase()).join('')
  }
  