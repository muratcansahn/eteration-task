# Kullanılan Kütüphaneler / Teknolojiler
Ant Design,Bootstrap,Redux Toolkit,Toastify,Sass,UUID,Jest

## Özellikler
Ürün sepete eklendiğinde toast ile bildirim gösteriliyor.
Eğer bulunmayan bir pageye gidilirse Not Found componenti çıkıyor.
Paginationdaki item sayısını statik 12 yapmadım 12 ve katları şeklinde özelleştirilebiliyor.
Checkout butonuna basınca tüm sepet boşalıyor.
Responsive uyumlu.
Ürün sepete eklenince aynı zamanda local storage a ekleniyor.
Ve ilk yüklemede sepet eğer localstorage da item yoksa boş değer alıyor,
varsa geçmiş değerden devam ediyor.
Ürün arama kısmında autocomplete özelliği mevcut

### Notlarım
Elimdeki arama yapmak için uygun api olmadığında arama kısmında debounce/trottle yapısı kullanma gereği duymadım.
Spinner gösterme amaçlı api isteklerine 1 saniyelik timeout ekledim.(Simule etme amaçlı)
Product detail kısmındaki kartın description kısmını tasarıma benzemesi için kestim,tüm descriptionu almak kartın yapısını bozacaktı.
Daha önceden jest ile unit test yazmadığım için testleri eksik olarak yazdığımın farkındayım,bu konunun üzerine eğileceğim.




