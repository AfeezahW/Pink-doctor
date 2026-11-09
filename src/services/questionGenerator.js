import { questionBank } from '../data/questions'
export function getQuestions(symptoms = []) {
  const questions = symptoms.flatMap(symptom => questionBank[symptom] || [])
  const unique = new Map()
  questions.forEach(item => unique.set(item.question, item))
  return [...unique.values()]
}