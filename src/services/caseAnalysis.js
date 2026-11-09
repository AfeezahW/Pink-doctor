import { matchConditions, resolveSymptoms } from './caseMatching'
import { getQuestions } from './questionGenerator'
import { recommendTopics } from './topicRecommender'

export function analyseCase(form) {
  const typedSymptoms = resolveSymptoms(`${form.complaint} ${form.notes || ''}`)
  const symptoms = [...new Set([...(form.symptoms || []), ...typedSymptoms])]
  return {
    symptoms,
    conditions: matchConditions(symptoms),
    questions: getQuestions(symptoms),
    topics: recommendTopics(symptoms),
    supported: symptoms.length > 0,
  }
}
