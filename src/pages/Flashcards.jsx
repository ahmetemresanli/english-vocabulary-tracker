import { useState } from 'react'
import { ArrowLeft, ArrowRight, RotateCw, Shuffle, Check, Layers } from 'lucide-react'
import { shuffle } from '../utils/vocabulary'
export default function Flashcards({ words, toggle }) {
  const [order, setOrder] = useState(() => words.map(w => w.id))
  const [index, setIndex] = useState(0), [flipped, setFlipped] = useState(false)
  const cards = order.map(id => words.find(w => w.id === id)).filter(Boolean)
  const word = cards[index]
  if (!word) return <div className="panel empty"><Layers size={40}/><h2>İlk tekrarın burada başlıyor</h2><p>Tekrar kartlarını oluşturmak için önce kelime ekle.</p></div>
  function move(step) { setIndex((index + step + cards.length) % cards.length); setFlipped(false) }
  return <div className="practice"><div className="section-heading"><span className="eyebrow">HATIRLA. TEKRARLA. ÖĞREN.</span><button className="button secondary" onClick={() => {setOrder(shuffle(order)); setIndex(0); setFlipped(false)}}><Shuffle size={16}/>Karıştır</button></div><button className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)} aria-label="Kartı çevir"><span className="eyebrow">{flipped ? 'TÜRKÇE KARŞILIĞI' : 'İNGİLİZCE KELİME'}</span><strong lang={flipped ? 'tr' : 'en'}>{flipped ? word.turkish : word.english}</strong>{flipped && word.exampleSentence && <p lang="en">{word.exampleSentence}</p>}<span className="flip-hint"><RotateCw size={16}/>Çevirmek için karta dokun</span></button><div className="card-navigation"><button className="button secondary" onClick={() => move(-1)} aria-label="Önceki kart"><ArrowLeft size={18}/></button><span>{index + 1} / {cards.length}</span><button className="button secondary" onClick={() => move(1)} aria-label="Sonraki kart"><ArrowRight size={18}/></button></div><button className={`button ${word.learned ? 'secondary' : 'primary'}`} onClick={() => toggle(word.id)}><Check size={18}/>{word.learned ? 'Öğreniliyor olarak işaretle' : 'Bu kelimeyi öğrendim'}</button></div>
}
