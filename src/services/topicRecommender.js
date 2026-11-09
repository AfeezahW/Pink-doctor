import { topicLibrary } from '../data/topics'
export function recommendTopics(symptoms = []) {
  return topicLibrary.filter(topic => topic.keywords.some(keyword => symptoms.includes(keyword)))
    .sort((a, b) => (a.priority === 'High' ? 0 : 1) - (b.priority === 'High' ? 0 : 1))
}
