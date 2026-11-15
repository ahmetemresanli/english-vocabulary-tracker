import { useState } from 'react'
import { ArrowRight, Trophy, Brain, RotateCw } from 'lucide-react'
import { makeQuiz, normalize } from '../utils/vocabulary'
export default function Quiz({ words }) {
  const [questions, setQuestions] = useState([]), [index, setIndex] = useState(0), [answers, setAnswers] = useState([])
  const enough = new Set(words.map(w => normalize(w.turkish))).size >= 4
  function start() {setQuestions(makeQuiz(words)); setIndex(0); setAnswers([])}
  if (!questions.length) return <div className="panel quiz-start"><div className="large-icon"><Brain size={34}/></div><span className="eyebrow">BİLGİNİ KEŞFET</span><h2>Kelimeler aklında mı?</h2><p>Kendi kelimelerinle hazırlanan, en fazla 10 soruluk kısa bir test.<br/>Her soruda bir kelime, dört seçenek ve yeni bir öğrenme fırsatı.</p>{!enough && <p className="notice">Teste başlamak için en az 4 farklı Türkçe karşılığı olan kelime eklemelisin.</p>}<button className="button primary" disabled={!enough} onClick={start}>Teste başla<ArrowRight size={17}/></button></div>
  if (index === questions.length) {
    const correct = answers.filter((a,i) => a === questions[i].word.turkish).length
    return <div className="panel quiz-start"><div className="large-icon"><Trophy size={36}/></div><h2>Bir adım daha ileri!</h2><p>Her tekrar, öğrendiklerini daha kalıcı hale getirir.</p><div className="results"><div><strong>{correct}</strong>Doğru</div><div><strong>{questions.length-correct}</strong>Yanlış</div><div><strong>%{Math.round(correct/questions.length*100)}</strong>Başarı</div></div><button className="button primary" onClick={start}><RotateCw size={16}/>Yeniden dene</button></div>
  }
  const q = questions[index], selected = answers[index]
  return <div className="practice"><div className="section-heading"><span className="eyebrow">KELİME TESTİ</span><span>Soru {index+1} / {questions.length}</span></div><progress value={index} max={questions.length}/><div className="panel question"><p>Bu kelimenin Türkçe karşılığı nedir?</p><h2 lang="en">{q.word.english}</h2><div className="options">{q.options.map((option,i) => <button key={option} disabled={selected !== undefined} className={`option ${selected !== undefined && option === q.word.turkish ? 'correct' : ''} ${selected === option && option !== q.word.turkish ? 'incorrect' : ''}`} onClick={() => setAnswers([...answers, option])}><span>{'ABCD'[i]}</span>{option}</button>)}</div>{selected !== undefined && <div role="status" className="answer-feedback"><p>{selected === q.word.turkish ? 'Doğru cevap! Harika gidiyorsun.' : `Doğru cevap: ${q.word.turkish}`}</p><button className="button primary" onClick={() => setIndex(index+1)}>{index+1 === questions.length ? 'Sonuçları gör' : 'Sonraki soru'}<ArrowRight size={16}/></button></div>}</div></div>
}
