import { test } from 'node:test'
import assert from 'node:assert/strict'
import { makeWord, parseWords, normalize, makeQuiz, shuffle, demoWords } from '../src/utils/vocabulary.js'
test('kelime kayıtları benzersiz kimlik ve zaman damgaları içerir', () => {
 const a = makeWord({...demoWords[0],english:'  Hello  '})
 assert.equal(a.english,'Hello'); assert.equal(a.learned,false); assert.notEqual(a.id,makeWord(demoWords[0]).id)
 assert.equal(parseWords(JSON.stringify([a]))[0].createdAt,a.createdAt)
})
test('bozuk ve geçersiz veriler kontrol edilir', () => {
 assert.deepEqual(parseWords(null),[]); assert.throws(() => parseWords('{bad'))
 assert.throws(() => parseWords('{}')); assert.deepEqual(parseWords('[null,{},42]'),[])
 const word = makeWord(demoWords[0]); assert.equal(parseWords(JSON.stringify([word,word,{...word,id:'other',english:' SERENDIPITY '}])).length,1)
})
test('düzenleme, durum değişikliği ve silme JSON döngüsünde korunur', () => {
 const word = {...makeWord(demoWords[0]),learned:true,turkish:'tesadüf',updatedAt:new Date().toISOString()}
 const restored = parseWords(JSON.stringify([word])); assert.equal(restored[0].learned,true); assert.equal(restored[0].turkish,'tesadüf')
 assert.deepEqual(parseWords(JSON.stringify(restored.filter(w => w.id !== word.id))),[])
})
test('normalleştirme boşlukları, harf farkını ve Unicode eşdeğerlerini giderir', () => {
 assert.equal(normalize(' HELLO '),'hello'); assert.equal(normalize('ＣＡＴ'),'cat')
})
test('quiz dört farklı seçenek ve doğru yanıt içerir', () => {
 const words = demoWords.map(makeWord)
 for(let round=0;round<30;round++) for(const q of makeQuiz(words)) {
 assert.equal(q.options.length,4); assert.equal(new Set(q.options.map(normalize)).size,4); assert.ok(q.options.includes(q.word.turkish))
 }
 assert.deepEqual(makeQuiz(words.slice(0,3)),[])
 assert.deepEqual(makeQuiz(words.map(w => ({...w,turkish:'aynı'}))),[])
 const many = Array.from({length:20},(_,i) => makeWord({english:`word${i}`,turkish:`anlam${i}`,exampleSentence:''})); assert.equal(makeQuiz(many).length,10)
})
test('karıştırma kaynak listeyi değiştirmez', () => {
 const original = [1,2,3,4]; assert.deepEqual(shuffle(original).sort(),original); assert.deepEqual(original,[1,2,3,4])
})
