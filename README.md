# Lexi · English Vocabulary Tracker

İngilizce kelimeleri Türkçe karşılıklarıyla kaydetmek, tekrar etmek ve öğrenme durumunu takip etmek için geliştirilmiş React uygulaması. Yapay Zeka Destekli Web Geliştirme eğitiminin final çalışmasıdır.

Dağınık kelime notlarını tek bir kişisel çalışma alanında birleştirir; tekrar kartları ve kısa testlerle düzenli öğrenmeyi destekler. Üyelik, backend, ücretli API veya API anahtarı gerektirmez.

## Özellikler

- Kelime, Türkçe karşılık ve isteğe bağlı İngilizce örnek cümle ekleme, düzenleme ve onayla silme.
- Boş ve yinelenen kelime kontrolü; öğrenildi / öğreniliyor durumları.
- İngilizce ve Türkçe arama, durum filtresi, alfabetik ve eklenme tarihine göre sıralama.
- Canlı istatistikler, öğrenme oranı, ilerleme grafiği ve son eklenenler.
- Çevrilebilir flashcards, ileri / geri gezinme, karıştırma ve öğrenme durumu değiştirme.
- En fazla 10 soruluk quiz, dört farklı seçenek, anlık yanıt kontrolü ve sonuç özeti.
- LocalStorage kalıcılığı, bozuk kayıt kontrolü ve yazma hatası bildirimi.
- Açık / koyu tema, responsive tasarım, klavye erişimi ve odak yönetimli modal formlar.
- Kullanıcının seçimiyle eklenen, açıkça demo olarak belirtilen 8 örnek kelime.

## Teknolojiler

React 19, Vite 8, JavaScript / JSX, modern CSS, Lucide React, LocalStorage ve ESLint. Testlerde Node.js test runner kullanılır.

## Kurulum

Node.js 22.12+ (veya Vite 8 ile uyumlu daha yeni bir sürüm) ve npm gerekir.

```bash
# GitHub deposunu klonladıktan sonra proje klasöründe:
npm ci
npm run dev
```

Terminalde gösterilen yerel adresi açın. Diğer komutlar:

```bash
npm run build    # dist/ production çıktısı
npm run preview  # production çıktısını yerelde görüntüle
npm run lint    # statik kod kontrolü
npm test        # veri ve quiz mantığı testleri
```

## Proje yapısı

```text
src/
  components/   # Modal, WordForm, WordList
  hooks/        # LocalStorage kayıt yönetimi
  pages/        # Flashcards ve Quiz
  styles/       # Tema, temel ve responsive stiller
  utils/        # Doğrulama, quiz ve demo verileri
  App.jsx       # Navigasyon, dashboard ve uygulama işlemleri
  main.jsx      # React başlangıcı
public/         # Uygulama simgesi
tests/          # Veri doğrulama ve quiz testleri
docs/screenshots/ # Uygulama ekran görüntüleri
```

## Kullanım

1. **Kelime ekle** ile İngilizce kelime ve Türkçe karşılığını girin. Dilerseniz örnek cümle ekleyin.
2. **Kelimelerim** bölümünde arayın, filtreleyin, sıralayın veya kalem simgesiyle düzenleyin. Durum etiketine basarak kelimeyi öğrenildi olarak işaretleyin.
3. **Flashcards** bölümünde karta basarak çevirin, oklarla gezinin veya karıştırın.
4. **Quiz** için en az dört farklı Türkçe karşılığa sahip kelime ekleyin. Bir seçenek seçin ve sonraki soruya geçin.
5. Üstteki ay simgesiyle temayı değiştirin. **Kelimelerim → Tüm verileri sıfırla** işlemi onayınızla bütün kelimeleri kaldırır.

Veriler `evt.words.v1`, tema tercihi `evt.theme` anahtarında saklanır. Her kelime `id`, `english`, `turkish`, `exampleSentence`, `learned`, `createdAt`, `updatedAt` alanlarını taşır. Geçersiz JSON uygulamayı çökertmez; okunamayan veriler açılışta otomatik olarak üzerine yazılmaz. Yeni bir kayıt işlemi geçerli listeyi kaydeder. Depolama yazılamazsa mevcut liste korunur ve hata gösterilir.

## Ekran görüntüleri

Ekran görüntülerinde örnek/demo kelimeler kullanılır.

![Dashboard — masaüstü](docs/screenshots/dashboard-desktop.png)

![Dashboard — mobil](docs/screenshots/dashboard-mobile.png)

## Yapay zeka kullanım açıklaması

Bu proje, Yapay Zeka Destekli Web Geliştirme eğitiminin final çalışması kapsamında **OpenAI Codex** yardımıyla geliştirilmiştir. Codex; uygulamanın planlanması, React bileşenlerinin ve CSS tasarımının oluşturulması, veri doğrulama ve LocalStorage mantığının geliştirilmesi, testlerin yazılması, hata ayıklama ve dokümantasyon aşamalarında kullanılmıştır. Yapay zeka destekli geliştirme, proje gereksinimleri doğrultusunda dosyalar üzerinde doğrudan uygulanmış; build, lint ve otomatik kontrollerle doğrulanmıştır.

Codex'in kullanıldığı başlıca süreçler:

- **Planlama:** Gereksinimlerin özelliklere, sayfalara ve geliştirme adımlarına ayrılması.
- **React bileşenleri:** Kelime formu, liste, modal, dashboard, flashcards ve quiz akışlarının bileşenler halinde geliştirilmesi.
- **Stil düzenlemeleri:** CSS stilleri, açık/koyu tema ve farklı ekran genişliklerine uygun responsive düzenlerin hazırlanması ve iyileştirilmesi.
- **Hata ayıklama:** Veri doğrulama, LocalStorage ve kullanıcı etkileşimlerindeki sorunların incelenmesi; düzeltmelerin lint, build ve testlerle kontrol edilmesi.

Codex geliştirme sürecinde kullanılmıştır; çalışan uygulamada OpenAI API çağrısı veya yapay zeka servisi bulunmaz.

## GitHub ve Vercel teslim hazırlığı

GitHub deposu ve canlı uygulama adresi henüz eklenmedi. Yayımladıktan sonra aşağıdaki alanları gerçek bağlantılarla güncelleyin:

- **Public GitHub repository:** Teslim sırasında eklenecek.
- **Canlı uygulama (Vercel):** Teslim sırasında eklenecek.

1. GitHub üzerinde **Public** görünürlükte bir repository oluşturun. Yerel proje henüz Git deposu değilse `git init` çalıştırın; commit öncesinde `git status --short` ile dosyaları inceleyin. Kaynak kodu, `package-lock.json`, README, testler ve `docs/` içeriğini dahil edin.
2. `node_modules/`, `dist/`, `.env`, `.env.*` ve `.vercel/` dosyalarını paylaşmayın. Bu yollar `.gitignore` içinde hariç tutulur; yalnızca gizli değer içermeyen `.env.example` dosyalarına izin verilir. Uygulama ortam değişkeni veya API anahtarı gerektirmez. Daha önce takip edilmiş hassas dosyalar varsa `.gitignore` bunları geçmişten kaldırmaz; public paylaşım öncesi takip listesini ve geçmişi kontrol edin.
3. Commit oluşturup GitHub deposuna push edin. `package.json` içindeki `private: true`, yanlışlıkla npm yayını yapılmasını engeller; GitHub deposunun public olmasıyla çelişmez.
4. Vercel üzerinde GitHub deposunu içe aktarın. Root Directory proje kökü, Framework Preset **Vite**, Install Command `npm ci`, Build Command `npm run build`, Output Directory `dist` olmalıdır. Node.js için **22.x** (en az 22.12) veya uyumlu daha yeni bir sürüm kullanın; ortam değişkeni eklemek gerekmez.
5. Deploy sonrasında canlı adreste kelime ekleme, sayfa yenilemede kalıcılık, flashcards, quiz ve mobil görünümü kontrol edin. Yerel veriler farklı origin kullanan Vercel adresine taşınmaz.
6. Yukarıdaki bağlantıları güncelleyin ve eğitim platformuna repository ile canlı uygulama bağlantılarını teslim edin.

Bu hazırlık sırasında GitHub repository oluşturulmadı, push veya Vercel deploy işlemi yapılmadı. Bu çalışma alanında kullanılabilir Git metaverisi bulunmadığından takip edilen dosyalar ve commit geçmişi doğrulanamadı.

### Yayın yapılandırması

Uygulama Vercel ve Netlify üzerinde statik site olarak yayımlanabilir:

- Build komutu: `npm run build`
- Çıktı klasörü: `dist`
- Vercel framework: Vite
- Netlify yapılandırması: depodaki `netlify.toml`

Navigasyon uygulama içi state kullandığından sunucu tarafında route rewrite gerektirmez. GitHub deposu oluşturma, push ve canlı deploy yapılmamıştır.

## Sınırlılıklar

- Veriler yalnızca kullanılan tarayıcı ve origin üzerinde kalır; cihazlar arasında senkronize edilmez. Tarayıcı verilerini temizlemek kayıtları siler.
- LocalStorage erişimi veya kotası tarayıcı tarafından kısıtlanabilir. Çok sekmeli eşzamanlı düzenleme desteklenmez.
- Çeviri doğruluğu kullanıcıya aittir; otomatik sözlük veya telaffuz servisi yoktur.
- Quiz sonuçları oturumluk gösterilir; geçmiş sonuçlar saklanmaz. Öğrenme yüzdesi kullanıcının işaretlediği durumlardan hesaplanır.

## Gelecek geliştirmeler

JSON içe/dışa aktarma, aralıklı tekrar, kelime kategorileri, quiz geçmişi ve çevrimdışı PWA desteği.

## Testler ve çalıştırılan kontroller

15 Kasım 2026 teslim hazırlığında aşağıdaki komutlar yeniden çalıştırıldı:

| Komut | Kapsam | Sonuç |
| --- | --- | --- |
| `npm run lint` | ESLint ile statik kod kontrolü | Başarılı, hata yok |
| `npm run build` | Vite production derlemesi | Başarılı, `dist/` üretildi |
| `npm test` | `tests/vocabulary.test.js`: kayıt kimlikleri ve zaman damgaları, bozuk/geçersiz JSON, yinelenen kayıtlar, düzenleme/durum/silme serileştirmesi, normalleştirme, quiz seçenekleri ve karıştırma | Başarılı, başarısız test yok |

`tests/browser-check.mjs` mevcut Playwright/Chromium fonksiyonel testidir. Kelime işlemleri, LocalStorage, flashcards, quiz, tema ve responsive görünümü kontrol eder. Önceki çalıştırmanın sonuçları 14 Kasım 2026 tarihli test raporunda kayıtlıdır; bu teslim hazırlığında tarayıcı testi yeniden çalıştırılmadı. Ekran görüntüleri mevcut rapora ait demo görselleridir.

Çalıştırılan kontroller, kapsam ve test edilmeyen senaryolar için [test raporuna](docs/TESTING.md) bakın. Tekrar çalıştırılabilir tarayıcı testi `tests/browser-check.mjs` içindedir; isteğe bağlı Playwright kurulumu test raporunda açıklanır.
