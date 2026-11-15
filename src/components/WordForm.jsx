import { useState } from 'react'
import Modal from './Modal'
export default function WordForm({ word, submit, close }) {
  const [values, setValues] = useState(word || { english: '', turkish: '', exampleSentence: '' })
  const [error, setError] = useState('')
  return <Modal title={word ? 'Kelimeyi düzenle' : 'Yeni bir kelime ekle'} close={close}><p className="muted">Küçük bir kelime, yeni bir dünya.</p><form onSubmit={e => { e.preventDefault(); setError(submit(values) || '') }}>
    <label>İngilizce kelime *<input autoFocus required maxLength={100} value={values.english} onChange={e => setValues({...values, english:e.target.value})} placeholder="Örn. discover"/></label>
    <label>Türkçe karşılığı *<input required maxLength={200} value={values.turkish} onChange={e => setValues({...values, turkish:e.target.value})} placeholder="Örn. keşfetmek"/></label>
    <label>Örnek İngilizce cümle <small>İsteğe bağlı</small><textarea maxLength={600} rows={3} value={values.exampleSentence} onChange={e => setValues({...values, exampleSentence:e.target.value})} placeholder="Every day is a chance to discover something new."/></label>
    {error && <p role="alert" className="error">{error}</p>}<div className="modal-actions"><button type="button" className="button secondary" onClick={close}>Vazgeç</button><button className="button primary" type="submit">{word ? 'Değişiklikleri kaydet' : 'Kelimeyi ekle'}</button></div>
  </form></Modal>
}
