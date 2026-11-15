# Doğrulama

## Teslim hazırlığı — 15 Kasım 2026

- `npm run lint`: başarılı, ESLint hatası yok.
- `npm run build`: başarılı, Vite production çıktısı `dist/` içinde üretildi.
- `npm test`: başarılı, `tests/vocabulary.test.js` kontrolleri geçti; başarısız test yok.
- Mevcut iki ekran görüntüsünün ve tarayıcı test scriptinin dosya olarak bulunduğu doğrulandı.
- Bu aşamada tarayıcı testi yeniden çalıştırılmadı. Aşağıdaki fonksiyonel sonuçlar önceki test raporundan korunmuştur.

## Önceki fonksiyonel doğrulama — 14 Kasım 2026

14 Kasım 2026 tarihinde aşağıdaki kontroller başarıyla çalıştırıldı:

- `npm run build`: production çıktısı üretildi.
- `npm run lint`: ESLint hatası yok.
- `npm test`: kayıt oluşturma, JSON doğrulama, kalıcılık için serileştirme, yinelenen kayıt ayıklama, quiz seçenekleri ve karıştırma kontrolleri geçti.
- Playwright / Chromium: kelime ekleme, tekrar engelleme, düzenleme, durum değişikliği, sayfa yenileme sonrası LocalStorage kalıcılığı, arama, filtre, alfabetik sıralama, silme onayı ve iptali geçti.
- Flashcards: çevirme, ileri / geri, karıştırma, öğrenildi olarak işaretleme geçti.
- Quiz: yetersiz kelime durumunda başlatmanın engellenmesi, dört seçenekli 8 sorunun yanıtlanması ve %100 sonuç ekranı geçti.
- Tema tercihinin sayfa yenileme sonrası korunması, onaylı sıfırlama ve bozuk LocalStorage ile açılış geçti.
- 360, 390, 768, 1024 ve 1440 piksel genişliklerde dört navigasyon bölümünde yatay taşma tespit edilmedi. Masaüstü ve mobil ekran görüntüleri üretildi ve incelendi.
- Tarayıcı akışı sırasında yakalanan JavaScript çalışma zamanı hatası yok.

Tarayıcı testi `tests/browser-check.mjs` içinde tutulur. Uygulama bağımlılıklarını hafif tutmak için Playwright kalıcı bağımlılık değildir. Tekrar çalıştırmak için isteğe bağlı olarak kurun:

```bash
npm install --no-save --package-lock=false playwright
npx playwright install chromium
npm run dev
# Ayrı terminalde, Vite farklı port seçtiyse TEST_URL değerini değiştirin:
TEST_URL=http://127.0.0.1:5173 node tests/browser-check.mjs
```

Test verileri izole bir tarayıcı oturumunda oluşturulur; kişisel tarayıcı kayıtları kullanılmaz. Bu script ekran görüntülerini demo kelimelerle yeniden üretir.

Safari, Firefox, fiziksel mobil cihaz, ekran okuyucu ve depolama kotasının gerçekten dolması senaryoları test edilmedi. Depolama yazma hatası kodda ele alınır; otomatik test bu durumu simüle etmez.
