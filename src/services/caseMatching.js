import { conditions } from '../data/conditions'
import { symptomOptions } from '../data/symptoms'

export function matchConditions(selectedSymptoms = []) {
  const selected = new Set(selectedSymptoms)
  return conditions.map(condition => {
    const matched = condition.symptoms.filter(symptom => selected.has(symptom))
    return { ...condition, matchedSymptoms: matched, score: condition.symptoms.length ? matched.length / condition.symptoms.length : 0 }
  }).filter(condition => condition.score > 0).sort((a, b) => b.score - a.score)
}
export function resolveSymptoms(input = '') {
  const normalised = input.toLowerCase()
  const aliases = {
    dyspnoea: ['breathlessness', 'shortness of breath', 'difficulty breathing', 'dyspnea'],
    'leg-swelling': ['swollen legs', 'leg swelling', 'ankle swelling', 'oedema', 'edema'],
    'chest-pain': ['chest pain', 'chest discomfort'],
    palpitations: ['palpitations', 'racing heart'],
    fatigue: ['fatigue', 'tiredness', 'exhaustion'],
    fever: ['fever', 'high temperature'],
    cough: ['cough', 'coughing'],
    headache: ['headache', 'head pain'],
    weakness: ['weakness', 'weakness of limbs'],
    'abdominal-pain': ['abdominal pain', 'stomach pain', 'tummy pain'],
    vomiting: ['vomiting', 'throwing up'],
    diarrhoea: ['diarrhoea', 'diarrhea', 'loose stool'],
    'weight-loss': ['weight loss', 'losing weight'],
    jaundice: ['jaundice', 'yellow eyes', 'yellow skin'],
  }
  return symptomOptions.filter(item => aliases[item.id]?.some(alias => normalised.includes(alias))).map(item => item.id)
}