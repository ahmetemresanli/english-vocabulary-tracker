import { useState } from 'react'
import { STORAGE_KEY, parseWords } from '../utils/vocabulary'
export function useVocabulary() {
  const [initial] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY), words = parseWords(raw)
      return { words, warning: raw && JSON.parse(raw).length !== words.length ? 'Geçersiz veya yinelenen kayıtlar atlandı.' : '' }
    } catch { return { words: [], warning: 'Kayıtlar okunamadı. Tarayıcı verileri bozuk veya depolama erişimi kapalı olabilir.' } }
  })
  const [words, setWords] = useState(initial.words)
  // Yazma başarısızsa mevcut liste korunur.
  function save(next) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); setWords(next); return true }
    catch { return false }
  }
  return { words, save, warning: initial.warning }
}
