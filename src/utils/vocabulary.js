export const STORAGE_KEY = 'evt.words.v1'
export const normalize = value => value.trim().normalize('NFKC').toLocaleLowerCase('en-US')
export function shuffle(items) {
  const result = [...items]
  for (let i = result.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [result[i], result[j]] = [result[j], result[i]] }
  return result
}
// Bozuk kayıtları ve yinelenen kelimeleri güvenli biçimde ayıklar.
export function parseWords(raw) {
  if (!raw) return []
  const data = JSON.parse(raw)
  if (!Array.isArray(data)) throw new Error('Geçersiz kayıt biçimi')
  const ids = new Set(), names = new Set()
  return data.filter(w => {
    if (!w || typeof w.id !== 'string' || !w.id || typeof w.english !== 'string' || !w.english.trim() || typeof w.turkish !== 'string' || !w.turkish.trim() || typeof w.learned !== 'boolean' || typeof w.exampleSentence !== 'string' || !Number.isFinite(Date.parse(w.createdAt)) || !Number.isFinite(Date.parse(w.updatedAt)) || ids.has(w.id) || names.has(normalize(w.english))) return false
    ids.add(w.id); names.add(normalize(w.english)); return true
  })
}
export function makeWord(values) {
  const now = new Date().toISOString()
  return { ...values, english: values.english.trim(), turkish: values.turkish.trim(), exampleSentence: values.exampleSentence.trim(), id: crypto.randomUUID(), learned: false, createdAt: now, updatedAt: now }
}
export function makeQuiz(words) {
  const unique = [...new Map(words.map(w => [normalize(w.turkish), w])).values()]
  if (unique.length < 4) return []
  return shuffle(words).slice(0, 10).map(word => ({ word, options: shuffle([word.turkish, ...shuffle(unique.filter(w => normalize(w.turkish) !== normalize(word.turkish))).slice(0, 3).map(w => w.turkish)]) }))
}
export const demoWords = [
 ['serendipity','güzel bir tesadüf','Finding this book was pure serendipity.'],
 ['resilience','dayanıklılık','She showed great resilience during difficult times.'],
 ['embrace','kucaklamak','Learn to embrace new opportunities.'],
 ['wander','dolaşmak','We love to wander through the old streets.'],
 ['mindful','farkında olan','Be mindful of the people around you.'],
 ['thrive','gelişmek','Plants thrive in the sunlight.'],
 ['curiosity','merak','Curiosity is the beginning of learning.'],
 ['bloom','çiçek açmak','The flowers bloom in spring.'],
].map(([english,turkish,exampleSentence]) => ({english,turkish,exampleSentence}))
