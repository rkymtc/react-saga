# React Redux-Saga Örneği

Bu proje, Redux-Saga'nın temel kavramlarını ve kullanımını gösteren basit bir örnektir. Kullanıcı verilerini ve gönderilerini yönetmek için Redux-Saga middleware'ini kullanan modern bir React uygulamasıdır.

## Redux-Saga Nedir?

Redux-Saga, React uygulamalarında yan etkileri (side effects) yönetmek için kullanılan bir middleware kütüphanesidir. API çağrıları, asenkron işlemler, tarayıcı cache işlemleri gibi karmaşık işlemleri yönetmeyi kolaylaştırır.

## Proje Özellikleri

- Modern React ve Redux kullanımı
- Redux-Saga ile asenkron işlem yönetimi
- Kullanıcı verilerini ve gönderilerini görüntüleme
- Responsive tasarım
- Modern UI/UX pratikleri

## Proje Yapısı

```
src/
  store/
    actions/    # Redux action'ları
    reducers/   # Redux reducer'ları
    sagas/      # Saga tanımlamaları
  components/   # React bileşenleri
  App.jsx       # Ana uygulama bileşeni
```

## Kurulum

1. Projeyi klonlayın:
```bash
git clone [proje-url]
cd react-saga
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Uygulamayı başlatın:
```bash
npm run dev
```

## Önemli Kavramlar

### Redux-Saga'nın Temel Yapıtaşları

1. **Worker Saga**
   - Asıl işi yapan saga fonksiyonudur
   - API çağrıları gibi asenkron işlemleri gerçekleştirir
   - try/catch blokları ile hata yönetimi sağlar

2. **Watcher Saga**
   - Belirli action'ları dinler
   - İlgili worker saga'yı tetikler
   - takeLatest, takeEvery gibi efektler kullanır

3. **Effects**
   - put: Redux action'larını dispatch etmek için
   - call: Asenkron fonksiyonları çağırmak için
   - select: Redux store'dan veri okumak için
   - takeLatest: En son action'ı işlemek için

### Örnek İş Akışı

1. Kullanıcı listesi yükleme:
   - Component mount olduğunda FETCH_USERS action'ı dispatch edilir
   - Watcher saga bu action'ı yakalar
   - Worker saga API çağrısını gerçekleştirir
   - Başarılı/başarısız duruma göre yeni action dispatch edilir
   - Reducer state'i günceller

## Katkıda Bulunma

1. Fork'layın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakınız.
