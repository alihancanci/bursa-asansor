export interface District {
  slug: string;
  name: string;
}

export interface Service {
  slug: string;
  name: string;
  shortDesc: string;
  template: string;
  faqs: { q: string; a: string }[];
  category: "asansor" | "nakliyat";
}

export const PHONE_NUMBER = "0 (224) 444 00 00";
export const WHATSAPP_LINK = "https://wa.me/902244440000";

export const DISTRICTS: District[] = [
  { slug: "bursa-merkez", name: "Bursa (Merkez)" },
  { slug: "osmangazi", name: "Osmangazi" },
  { slug: "nilufer", name: "Nilüfer" },
  { slug: "yildirim", name: "Yıldırım" },
  { slug: "inegol", name: "İnegöl" },
  { slug: "gemlik", name: "Gemlik" },
  { slug: "gursu", name: "Gürsu" },
  { slug: "mudanya", name: "Mudanya" },
  { slug: "orhangazi", name: "Orhangazi" },
  { slug: "karacabey", name: "Karacabey" },
  { slug: "iznik", name: "İznik" },
  { slug: "mustafakemalpasa", name: "Mustafakemalpaşa" },
  { slug: "yenisehir", name: "Yenişehir" },
  { slug: "kestel", name: "Kestel" },
  { slug: "orhaneli", name: "Orhaneli" },
  { slug: "keles", name: "Keles" },
  { slug: "harmancik", name: "Harmancık" },
  { slug: "buyukorhan", name: "Büyükorhan" }
];

export const SERVICES: Service[] = [
  /* ───────── KİRALIK ASANSÖR HİZMETLERİ ───────── */
  {
    slug: "kiralik-mobil-asansor",
    name: "Kiralık Mobil Asansör",
    shortDesc: "Yüksek katlara malzeme ve eşya çıkarmanın en güvenli, en hızlı yolu.",
    category: "asansor",
    template: `
      <p>{district} bölgesinde taşınma, tadilat veya ağır malzeme sevkiyatı işlerinizde <strong>kiralık mobil asansör</strong> hizmetimizle yanınızdayız. Geleneksel taşıma yöntemlerinin yetersiz kaldığı, bina içi asansörlerin kullanılamadığı veya merdivenlerin çok dar olduğu durumlarda mobil asansörlerimiz hayat kurtarır.</p>
      
      <p>Sistemimiz <strong>15. kata kadar</strong> güvenle ulaşabilmekte ve ağır yüklerinizi saniyeler içinde hedeflenen kata taşıyabilmektedir. Üstelik tüm süreç boyunca <strong>operatör her zaman asansörün başındadır</strong>; yani makine kullanımını tamamen uzman personelimiz yönetir ve iş güvenliğini en üst düzeyde tutar. {district} ve çevresi için <strong>7/24 hizmet veriyoruz</strong>; mesai saatleri dışındaki acil işlerinizde de bizimle iletişime geçebilirsiniz.</p>

      <p>Firmamız, bakımlı makine parkuru ve tecrübeli operatörleriyle zaman kaybını önler. Tam anlaştığımız saatte adresinizde oluruz ve özenli çalışırız. İhtiyaç duymanız halinde, sadece makine kiralama ile kalmayıp <strong>gerekli durumlarda taşıma personeli (hamal) ve nakliye kamyonu desteği de verilir</strong>. {district} bölgesindeki en uygun fiyatlı ve profesyonel mobil asansör çözümleri için hemen bizi arayabilirsiniz.</p>
    `,
    faqs: [
      { q: "Mobil asansör kaçıncı kata kadar ulaşıyor?", a: "Sistemlerimiz maksimum 15. kata kadar güvenle ulaşabilmektedir." },
      { q: "Asansörü biz mi kullanıyoruz?", a: "Hayır, operatör her zaman asansörün başındadır. Tüm kurulum ve kullanım işlemlerini uzman personelimiz gerçekleştirir." },
      { q: "Hangi saatlerde hizmet veriyorsunuz?", a: "İhtiyaçlarınıza kesintisiz çözüm sunabilmek için 7/24 hizmet veriyoruz." },
      { q: "Sadece asansör mü kiralıyorsunuz, eşya taşıma personeli de var mı?", a: "Temel olarak asansör kiralama hizmeti sunuyoruz, ancak gerekli durumlarda taşıma personeli (hamal) ve nakliye kamyonu desteği de verilmektedir." }
    ]
  },
  {
    slug: "evden-eve-asansorlu-nakliyat",
    name: "Evden Eve Asansörlü Nakliyat",
    shortDesc: "Bina içi merdivenleri dert etmeden, doğrudan balkon veya pencereden eşya transferi.",
    category: "asansor",
    template: `
      <p>{district} sakinleri için taşınmak artık stresli bir süreç olmak zorunda değil. <strong>Evden eve asansörlü nakliyat</strong> hizmetimiz sayesinde eşyalarınız bina içindeki dar merdivenlere çarpıp zarar görme riski yaşamadan, doğrudan dairenizin balkonundan veya uygun bir penceresinden transfer edilir.</p>
      
      <p>Hizmet ağımız kapsamında <strong>15. kata kadar</strong> olan tüm dairelere asansör kurabiliyoruz. Gelişmiş teknolojiye sahip makinelerimiz ve uzman ekibimizle, taşıma süresini yarı yarıya indiriyoruz. İş güvenliği kurallarından asla taviz vermeden çalışan firmamızda, <strong>operatör her zaman asansörün başındadır</strong>. {district} civarında yeni evinize taşınırken zaman ve enerji tasarrufu sağlamak istiyorsanız doğru adrestesiniz.</p>

      <p>Amacımız sıfır hasar ve maksimum müşteri memnuniyetidir. Tam saatinde adresinizde hazır bulunan ekibimiz, oldukça özenli bir çalışma sergiler. Ayrıca, araç ve taşıma elemanı bulunmayan müşterilerimiz için <strong>gerekli durumlarda taşıma personeli (hamal) ve nakliye kamyonu desteği de verilir</strong>. Haftanın her günü, günün her saati <strong>7/24 hizmet veriyoruz</strong>.</p>
    `,
    faqs: [
      { q: "Asansörlü nakliyatın avantajı nedir?", a: "Eşyalarınız bina merdivenlerinde çizilme veya kırılma riski yaşamaz, ayrıca taşıma işlemi klasik yönteme göre çok daha hızlı tamamlanır." },
      { q: "Asansör her binaya kurulabilir mi?", a: "Binanızın önünde asansör aracımızın yanaşabileceği uygun bir alan olması ve ağaç, elektrik teli gibi engellerin bulunmaması gereklidir." },
      { q: "En fazla kaçıncı kata taşıma yapıyorsunuz?", a: "Araçlarımız en fazla 15. kata kadar hizmet verebilmektedir." },
      { q: "Taşınma günü saat kaçta geliyorsunuz?", a: "Randevulaştığımız saatte tam vaktinde adresinizde oluruz. 7/24 esnek çalışma saatlerimiz mevcuttur." }
    ]
  },
  {
    slug: "saatlik-asansor-kiralama",
    name: "Saatlik Asansör Kiralama",
    shortDesc: "Kısa süreli işleriniz için esnek ve ekonomik saatlik kiralama çözümleri.",
    category: "asansor",
    template: `
      <p>Bazen tüm gün sürecek bir nakliye işlemi yerine, sadece birkaç parça ağır eşyanın veya malzemenin yukarı çıkarılması gerekebilir. İşte bu noktada {district} bölgesine özel sunduğumuz <strong>saatlik asansör kiralama</strong> hizmetimiz devreye giriyor. Beyaz eşya, mobilya, inşaat malzemesi veya çatı gereçleri gibi spesifik yükleriniz için sadece kullandığınız süre kadar ödeme yaparsınız.</p>
      
      <p>Sistemlerimiz <strong>15. kata kadar çıkar</strong> ve kurulumu dakikalar içinde tamamlanır. Saatlik kiralamalarda dahi kalite standartlarımızdan ödün vermiyoruz; <strong>operatör her zaman asansörün başındadır</strong> ve makinenin güvenli çalışmasından sorumludur. {district} ve mahallelerinde acil gelişen ihtiyaçlarınız için firmamıza güvenebilirsiniz çünkü <strong>7/24 hizmet veriyoruz</strong>.</p>

      <p>Makinelerimiz her zaman bakımlıdır ve iş güvenliğine üst düzeyde dikkat ederiz. Kısa süreli kiralama taleplerinizde randevu sistemimizle tam saatinde orada oluruz. Eğer eşyanın yukarıda karşılanması veya araca yüklenmesi için insan gücüne ihtiyacınız olursa, <strong>gerekli durumlarda taşıma personeli (hamal) ve nakliye kamyonu desteği de verilir</strong>.</p>
    `,
    faqs: [
      { q: "Minimum kiralama süresi nedir?", a: "İşinizin durumuna göre esnek saatlik periyotlarda kiralama yapabilirsiniz. Sadece 1-2 saatlik işleriniz için de hizmet alabilirsiniz." },
      { q: "Asansörü kendim kullanabilir miyim?", a: "Hayır, güvenlik kuralları gereği operatör her zaman asansörün başındadır ve sistemi sadece yetkili personelimiz kullanır." },
      { q: "Gece saatlerinde saatlik asansör kiralayabilir miyim?", a: "Evet, işinizin gereksinimlerine göre 7/24 hizmet veriyoruz." },
      { q: "Yükü kim taşıyacak?", a: "Sadece asansör kiralayabileceğiniz gibi, gerekli durumlarda taşıma personeli (hamal) desteği de talep edebilirsiniz." }
    ]
  },
  {
    slug: "insaat-cephe-asansoru",
    name: "İnşaat Cephe Asansörü",
    shortDesc: "Şantiyelerde tuğla, çimento, fayans ve diğer yapı malzemelerinin hızlı transferi.",
    category: "asansor",
    template: `
      <p>{district} bölgesindeki inşaat ve şantiye alanlarında iş akışını hızlandırmanın en etkili yolu <strong>inşaat cephe asansörü</strong> kullanmaktır. Kum, çimento, tuğla, fayans, alçıpan, kapı ve pencere gibi ağır inşaat malzemelerinin insan gücüyle katlara çıkarılması hem çok maliyetli hem de zaman kaybettiren bir süreçtir. Mobil cephe asansörlerimiz bu zorluğu ortadan kaldırır.</p>
      
      <p>Özellikle dış cephe yalıtımı, çatı aktarma veya kat içi tadilat işlemlerinde <strong>15. kata kadar çıkar</strong> özelliğe sahip asansörlerimizle malzemelerinizi saniyeler içinde ustaların önüne ulaştırıyoruz. Şantiye güvenliği bizim için her şeyden önemlidir; bu yüzden <strong>operatör her zaman asansörün başındadır</strong> ve makinenin dengeli yüklenmesini koordine eder. {district} çevresindeki tüm müteahhitler ve dekorasyon firmaları için <strong>7/24 hizmet veriyoruz</strong>.</p>

      <p>Ekibimiz tam saatinde gelir ve özenli çalışırız. Makinelerimiz periyodik olarak bakımdan geçer, iş kazası riskini minimuma indiririz. Malzemelerin asansöre yüklenmesi veya katlarda içeri alınması konusunda eksik personeliniz varsa, <strong>gerekli durumlarda taşıma personeli (hamal) ve nakliye kamyonu desteği de verilir</strong>.</p>
    `,
    faqs: [
      { q: "İnşaat malzemesi taşınırken asansör zarar görür mü?", a: "Makinelerimiz ağır yükler ve inşaat malzemeleri için uygun sepet donanımına sahiptir. Doğru yüklendiği sürece sorun yaşanmaz." },
      { q: "Kaçıncı kata kadar malzeme verebilirsiniz?", a: "Sistemimizle 15. kata kadar her türlü yapı malzemesini ulaştırabiliyoruz." },
      { q: "Operatör ücreti dahil mi?", a: "Evet, güvenlik kuralları gereği operatör her zaman asansörün başındadır ve hizmet bedeline dahildir." },
      { q: "Pazar günleri inşaatlara hizmet veriyor musunuz?", a: "Evet, projelerinizin aksamaması adına 7/24 hizmet veriyoruz." }
    ]
  },
  {
    slug: "yuksek-kat-esya-tasima-asansoru",
    name: "Yüksek Kat Eşya Taşıma Asansörü",
    shortDesc: "Gökdelen, plaza ve yüksek binalara devasa eşyaların çıkarılması.",
    category: "asansor",
    template: `
      <p>{district} bölgesinde yeni yapılan yüksek katlı rezidans ve apartmanlara eşya taşımak çoğu zaman zorlu bir operasyondur. Yeni alınan büyük bir koltuk takımı, çift kapılı buzdolabı, piyano veya yekpare bir yemek masası bina asansörlerine sığmayabilir. <strong>Yüksek kat eşya taşıma asansörü</strong> hizmetimiz, bu tür imkansız gibi görünen durumlarda kesin çözüm sunar.</p>
      
      <p>Uzun erişimli teleskopik sistemimiz <strong>15. kata kadar çıkar</strong> ve balkondan veya geniş pencerelerden eşyalarınızı sıfır çizikle içeri teslim eder. Profesyonellikten taviz vermeyen anlayışımızla <strong>operatör her zaman asansörün başındadır</strong>. Uzaktan kumandalı hassas milimetrik hareketlerle en değerli eşyalarınız bile güvenle taşınır. {district} genelinde günün hangi saati olursa olsun bize ulaşabilirsiniz; <strong>7/24 hizmet veriyoruz</strong>.</p>

      <p>Bizimle çalıştığınızda sürprizlerle karşılaşmazsınız. Tam saatinde adresinize ulaşırız. Makine parkurumuz her zaman temiz ve bakımlıdır. Yüksek kata çıkarılacak eşyanızın mağazadan alınıp getirilmesi ve yukarıda içeri alınması gerekiyorsa, <strong>gerekli durumlarda taşıma personeli (hamal) ve nakliye kamyonu desteği de verilir</strong>.</p>
    `,
    faqs: [
      { q: "Çok ağır ve büyük mobilyaları taşıyabilir misiniz?", a: "Asansörlerimizin sepet taşıma kapasitesi standart ev eşyalarının tamamını güvenle çıkarabilecek donanımdadır." },
      { q: "Dışarıdan cam sökülmesi gerekiyor mu?", a: "Balkon kapısı veya eşyanın sığabileceği genişlikte açılan pencereler varsa gerekmez. Ancak çok büyük parçalar için bazen pimapen/cam sökümü gerekebilir." },
      { q: "En üst limitiniz neresidir?", a: "Makinelerimiz maksimum 15. kata kadar güvenli erişim sağlar." },
      { q: "Randevulara sadık mısınız?", a: "Kesinlikle. İş planlamamızı hassas yapar ve tam anlaştığımız saatte adresinizde oluruz." }
    ]
  },
  {
    slug: "asansorlu-nakliye-araci",
    name: "Asansörlü Nakliye Aracı",
    shortDesc: "Hem yük taşıma hem de yukarı çıkarma işlevini bir arada sunan entegre araçlar.",
    category: "asansor",
    template: `
      <p>Taşınma veya ağır yük lojistiği süreçlerinde farklı firmalardan hem araç hem de asansör aramak yorucu olabilir. {district} bölgesine sunduğumuz <strong>asansörlü nakliye aracı</strong> hizmeti ile entegre bir çözüm sunuyoruz. Bu sayede hem eşyanız kapınıza kadar güvenle getirilir hem de anında kurulan sistemle evinize çıkarılır.</p>
      
      <p>Tam donanımlı araçlarımızla eşyalarınız <strong>15. kata kadar çıkar</strong>. Dışarıdan kurulan sistem sayesinde apartman içi karmaşa yaşanmaz, komşularınız rahatsız olmaz. Güvenliği asla şansa bırakmıyoruz; operasyon boyunca <strong>operatör her zaman asansörün başındadır</strong>. Hızlı, pratik ve çözüm odaklı yaklaşımımızla {district} ilçesinde <strong>7/24 hizmet veriyoruz</strong>.</p>

      <p>Özenli çalışmayı kurum kültürü haline getirmiş ekibimizle eşyalarınızı kendi eşyamız gibi benimsiyoruz. Kapalı kasa nakliye aracımızla taşıma sağlandıktan sonra mobil sistemimiz devreye girer. Fiziksel güce ihtiyaç duyulan noktalarda ise <strong>gerekli durumlarda taşıma personeli (hamal) desteği de verilir</strong>. Bakımlı araçlarımızla sorunsuz bir deneyim için bizi tercih edin.</p>
    `,
    faqs: [
      { q: "Nakliye aracı ve asansör aynı araçta mı bulunuyor?", a: "İşin büyüklüğüne göre kapalı kasa nakliye aracımız ve ona eşlik eden mobil asansör aracımızla koordineli hizmet veriyoruz." },
      { q: "Eşyaların araca yüklenmesini siz mi yapıyorsunuz?", a: "Talep etmeniz halinde, gerekli durumlarda taşıma personeli (hamal) desteği de sağlıyoruz." },
      { q: "Kaçıncı kata kadar hizmetiniz var?", a: "Sistemlerimiz 15. kata kadar çıkabilmektedir." },
      { q: "İş sonrası veya hafta sonu hizmetiniz var mı?", a: "Evet, sizlerin programına uyum sağlamak için 7/24 hizmet veriyoruz." }
    ]
  },
  {
    slug: "dis-cephe-esya-asansoru",
    name: "Dış Cephe Eşya Asansörü",
    shortDesc: "Dar merdivenlere ve küçük apartman asansörlerine alternatif dışarıdan taşıma.",
    category: "asansor",
    template: `
      <p>{district} bölgesinde özellikle eski yapılaşmanın olduğu veya bina merdivenlerinin eşya dönüşlerine izin vermediği noktalarda <strong>dış cephe eşya asansörü</strong> kullanmak zorunluluk haline gelir. Eşyalarınızın sıkışarak deforme olmasını engellemek, duvarların ve bina ortak alanlarının çizilmesini önlemek için balkon veya pencerelerden taşıma yapıyoruz.</p>
      
      <p>Pratik kurulum imkanı sunan sistemlerimiz <strong>15. kata kadar çıkar</strong>. Uzman ekibimiz sokağın veya bahçenin uygunluğuna göre asansörü en iyi açıdan yanaştırır. Tüm güvenlik önlemleri alınarak başlatılan işlemde <strong>operatör her zaman asansörün başındadır</strong>. İster bir ev dolusu eşya olsun, ister tek parça bir piyano; {district} genelinde her ihtiyaca <strong>7/24 hizmet veriyoruz</strong>.</p>

      <p>Zamanınıza saygı duyuyor, anlaştığımız saatte işe başlıyoruz. Makine parkurumuz her daim yenilenmiş ve bakımlıdır. Dış cepheden alınan eşyanın içeride odalara dağıtılması için elemana ihtiyacınız varsa, <strong>gerekli durumlarda taşıma personeli (hamal) ve nakliye kamyonu desteği de verilir</strong>.</p>
    `,
    faqs: [
      { q: "Dış cephe asansörü her sokağa girer mi?", a: "Asansörlü araçlarımızın yanaşabilmesi için bina önünde belirli bir boşluk, uygun açı ve park alanı gerekmektedir. Uzmanlarımız keşif yaparak uygunluğu belirler." },
      { q: "Asansör makinesini biz kontrol edebilir miyiz?", a: "Kesinlikle hayır. Güvenlik ve mevzuat gereği operatör her zaman asansörün başındadır." },
      { q: "Kaç kat yüksekliğe ulaşabiliyorsunuz?", a: "Dış cephe sistemlerimiz maksimum 15. kata kadar güvenle ulaşıyor." },
      { q: "Sadece tek bir koltuk için asansör kurulur mu?", a: "Evet, saatlik asansör kiralama seçeneğimizle tek parça eşyalarınız için de yardımcı oluyoruz." }
    ]
  },
  {
    slug: "asansorlu-ev-tasima",
    name: "Asansörlü Ev Taşıma",
    shortDesc: "Komple ev eşyalarının dış mekan asansörü ile hasarsız ve süratli transferi.",
    category: "asansor",
    template: `
      <p>Hayatınızda yeni bir sayfa açarken taşınma yorgunluğunu üzerinizden alıyoruz. {district} lokasyonunda sunduğumuz <strong>asansörlü ev taşıma</strong> hizmeti, tüm ev eşyalarınızın klasik yöntemlere göre çok daha hızlı ve güvenli bir biçimde nakledilmesini sağlar. Bina içindeki apartman asansörünü meşgul etmeden, komşularınızı rahatsız etmeden sürecinizi tamamlıyoruz.</p>
      
      <p>Yeni veya eski eviniz yüksek katta ise endişelenmeyin; mobil sistemlerimiz <strong>15. kata kadar çıkar</strong>. İşlemin hiçbir aşamasında asansör başıboş bırakılmaz, <strong>operatör her zaman asansörün başındadır</strong> ve sepetin kusursuz dengede gidip gelmesini sağlar. Gündüz veya gece fark etmeksizin, planınıza uyum sağlayarak {district} bölgesinde <strong>7/24 hizmet veriyoruz</strong>.</p>

      <p>Deneyimli ekibimizle tam anlaşılan saatte kapınızdayız. İş güvenliği kurallarından ödün vermiyor, bakımlı makinelerimizle sorunsuz hizmet üretiyoruz. Komple ev taşımalarında araca ve ekibe ihtiyacınız olması kuvvetle muhtemeldir; bu nedenle <strong>gerekli durumlarda taşıma personeli (hamal) ve nakliye kamyonu desteği de verilir</strong>.</p>
    `,
    faqs: [
      { q: "Asansörlü ev taşıma işlemi ne kadar sürer?", a: "Eşya yoğunluğuna göre değişmekle birlikte, bina içi taşımaya kıyasla süreyi yaklaşık yarı yarıya kısaltmaktadır." },
      { q: "Kaçıncı kata kadar eşya çıkarıyorsunuz?", a: "Gelişmiş filomuzla 15. kata kadar asansör kurabiliyoruz." },
      { q: "Hamal ve taşıma aracı ayarlıyor musunuz?", a: "Evet, asansörün yanı sıra gerekli durumlarda taşıma personeli (hamal) ve nakliye kamyonu desteği de verilir." },
      { q: "Acil taşınmam gerekiyor, hemen gelebilir misiniz?", a: "Müsaitlik durumumuza göre en kısa sürede yardımcı olmak için 7/24 hizmet veriyoruz." }
    ]
  },

  /* ───────── NAKLİYAT VE TAŞIMA HİZMETLERİ ───────── */
  {
    slug: "evden-eve-nakliyat",
    name: "Evden Eve Nakliyat",
    shortDesc: "Kapalı kasa araç, uzman ekip ve asansörle anahtar teslim ev taşıma.",
    category: "nakliyat",
    template: `
      <p>{district} bölgesinde evden eve taşınmak artık tek bir telefonla halloluyor. <strong>Evden eve nakliyat</strong> hizmetimizde sadece asansör değil; <strong>kapalı kasa nakliye kamyonumuz, uzman taşıma personelimiz ve 15. kata çıkan mobil asansörümüzle anahtar teslim taşıma yapıyoruz.</strong> Eşyalarınızı toplamaktan yeni adresinizde yerleştirmeye kadar tüm süreci biz yönetiyoruz.</p>

      <p>Taşınma sürecinde en çok zarar gören eşyalar dar merdivenlerden geçerken ya da binanın içindeki asansöre sıkıştırılmaya çalışılırken zarar görür. Bizim yöntemimizde büyük ve ağır eşyalar doğrudan <strong>balkon veya pencereden, dış cephe asansörümüzle</strong> yükseltilir; böylece duvarlar, çerçeveler ve eşyaların kendisi korunmuş olur. Tüm yükleme ve indirme işlemlerinde <strong>operatör her zaman asansörün başındadır.</strong></p>

      <p>{district} ve çevresinde <strong>7/24 hizmet veriyoruz.</strong> Anlaştığımız saatte kapınızdayız; randevuya geç kalmak gibi bir alışkanlığımız yoktur. Sözünün eri, uygun fiyatlı ve dürüst bir esnaf ekibi olarak çalışıyoruz. Fiyatımız telefonda konuşurken netleşir, sürpriz ek ücret talep etmeyiz. Eşya sayısına ve taşıma mesafesine göre size özel bir plan hazırlıyoruz.</p>

      <p>Kapalı kasa aracımız hem eşyaları hava koşullarından korur hem de güvenli bir yükleme imkanı sunar. Taşıma personelimiz deneyimli ve özenli çalışır; kırılgan ve değerli eşyalara özellikle dikkat eder. Ev taşıma sürecinizi mümkün olan en az stresle tamamlamak için buradayız. {district} bölgesinde güvenilir nakliyat için bizi arayın.</p>
    `,
    faqs: [
      { q: "Fiyat önceden belli oluyor mu?", a: "Evet, taşıma öncesinde eşya sayısı ve mesafeye göre net fiyat veriyoruz. Sürpriz ek ücret talep etmiyoruz." },
      { q: "Kırılacak eşyalarımı nasıl taşıyorsunuz?", a: "Kırılgan eşyalarınıza özel dikkat gösteriyor, özenli ve yavaş çalışıyoruz. Eşyaların düzgün yüklenmesi için deneyimli personelimiz görev yapar." },
      { q: "Asansör her binaya kurulabilir mi?", a: "Bina önünde araçlarımızın yanaşabileceği uygun alan olması gerekir. Ön keşifle uygunluğu belirleyebiliriz." },
      { q: "Hafta sonu ve gece taşınma yapıyor musunuz?", a: "Evet, 7/24 hizmet veriyoruz. Cumartesi ve Pazar dahil her gün, her saatte hizmetinizdeyiz." }
    ]
  },
  {
    slug: "sehir-ici-nakliye",
    name: "Şehir İçi Nakliye",
    shortDesc: "Bursa içinde hızlı, güvenilir ve uygun fiyatlı şehir içi nakliye hizmeti.",
    category: "nakliyat",
    template: `
      <p>{district} ve Bursa genelinde şehir içi taşıma ihtiyaçlarınız için profesyonel <strong>şehir içi nakliye</strong> hizmetimiz tam kapsamlıdır. Küçük ofis taşımalarından komple ev nakliyatına, parça eşya transferinden inşaat malzemesi lojistiğine kadar her ölçekteki işi titizlikle gerçekleştiriyoruz. <strong>Sadece asansör değil; kapalı kasa nakliye kamyonumuz, uzman taşıma personelimiz ve 15. kata çıkan mobil asansörümüzle anahtar teslim nakliye yapıyoruz.</strong></p>

      <p>{district} içindeki kısa mesafeli taşımalarda bile araç kalitesinden ve ekip profesyonelliğinden ödün vermiyoruz. Kapalı kasalı araçlarımız eşyaları dış etkenlere karşı korurken deneyimli ekibimiz yükleme ve indirme işlemlerini özenle yürütür. Yüksek katlı binalarda ise devreye giren mobil asansörümüz ile birlikte <strong>operatör her zaman asansörün başındadır;</strong> hiçbir adım başıboş bırakılmaz.</p>

      <p><strong>7/24 hizmet veriyoruz;</strong> mesai saati sınırı tanımadan, randevunuzu tam anlaştığımız saatte karşılıyoruz. Uygun fiyatlı ve dürüst çalışan bir esnaf ekibi olarak telefonda belirlenen fiyat, taşıma bittiğinde değişmez. {district} bölgesinden Bursa'nın her noktasına güvenle hizmet ulaştırıyoruz.</p>

      <p>Özellikle son dakika taşınma kararları veya acil ofis taşımaları gibi zaman baskılı işlerde bize güvenebilirsiniz. Aracımız ve ekibimiz hazır olduğunda en kısa sürede adresinize ulaşıyoruz. Hem bireysel müşterilerimize hem de kurumsal iş ortaklarımıza Bursa genelinde kaliteli şehir içi nakliye çözümleri sunuyoruz.</p>
    `,
    faqs: [
      { q: "Şehir içi nakliyede minimum mesafe var mı?", a: "Hayır, ilçe içi kısa mesafeli taşımalar da dahil olmak üzere her tür şehir içi nakliyeye hizmet veriyoruz." },
      { q: "Kaç kişilik ekip geliyor?", a: "Eşya miktarı ve taşıma zorluğuna göre değişmekle birlikte standart taşımalarda deneyimli personelimiz görev yapar." },
      { q: "Yüksek katlı binalar için asansör getiriyor musunuz?", a: "Evet, gerekli durumlarda 15. kata kadar çıkabilen mobil asansörümüzü de devreye alıyoruz." },
      { q: "Hafta sonu da hizmet veriyor musunuz?", a: "Evet, 7/24 hizmet veriyoruz. Hafta sonu ve resmi tatillerde de çalışıyoruz." }
    ]
  },
  {
    slug: "ofis-tasimaciligi",
    name: "Ofis ve Büro Taşımacılığı",
    shortDesc: "İş yerinizi en kısa sürede, çalışma düzeninizi bozmadan yeni adresine taşıyoruz.",
    category: "nakliyat",
    template: `
      <p>Bir ofis veya büroyu taşımak, ev taşımaktan çok farklı bir organizasyon gerektirir. Masalar, sandalyeler, dosya dolapları, bilgisayar ekipmanları, toplantı odası takımları ve onlarca kutu dosya; bunların hepsinin doğru sırayla, hasarsız ve minimum kayıp zamanla yeni adrese taşınması gerekir. {district} bölgesinde sunduğumuz <strong>ofis ve büro taşımacılığı</strong> hizmetinde <strong>sadece asansör değil; kapalı kasa nakliye kamyonumuz, uzman taşıma personelimiz ve 15. kata çıkan mobil asansörümüzle anahtar teslim ofis taşıma yapıyoruz.</strong></p>

      <p>Yeni ofisiniz yüksek katlı bir iş merkezinde veya plaza binasında ise mobil dış cephe asansörümüz devreye girer. Bina içi asansörü meşgul etmeden, diğer kiracıları rahatsız etmeden taşıma işlemini gerçekleştiriyoruz. <strong>Operatör her zaman asansörün başındadır;</strong> güvenlik ve hız aynı anda sağlanır. Bilgisayar ve elektronik ekipmanlar dahil tüm ofis malzemeleri özenle paketlenip taşınır.</p>

      <p><strong>7/24 hizmet veriyoruz;</strong> hafta sonu veya mesai saatleri dışında taşıma planlayanlar için bu büyük bir avantajdır. Çalışanlarınızın iş akışını en az düzeyde etkilemek adına akşam veya gece saatlerinde taşıma yapmayı da planlayabiliriz. {district} genelinde anlaştığımız saatte tam zamanında adresinizde olur, dürüst ve uygun fiyatlı hizmet sunarız.</p>

      <p>Ofis taşımacılığında hız kadar güven de önemlidir. Ekibimiz değerli ekipmanlarınıza ve belgelerinize gereken özeni gösterir. Taşıma sonrasında eşyalarınızın yeni ofiste doğru konumlara yerleştirilmesi konusunda da destek sağlıyoruz. Küçük ofislerden büyük kurumsal taşımalara kadar her ölçekte planlı ve titiz çalışıyoruz.</p>
    `,
    faqs: [
      { q: "Ofis taşıması ne kadar sürer?", a: "Ofis büyüklüğüne ve eşya miktarına göre değişir. Küçük bir büroyu birkaç saatte, orta büyüklükte bir ofisi ise yarım günde tamamlayabiliriz." },
      { q: "Bilgisayar ve ekipmanları siz paketliyor musunuz?", a: "Talep etmeniz halinde taşıma personelimiz ekipmanların güvenli bir şekilde hazırlanmasına yardımcı olur." },
      { q: "Hafta sonu veya gece taşıma yapıyor musunuz?", a: "Evet, çalışma düzeninizi bozmamak için hafta sonu ve gece saatlerinde de hizmet veriyoruz." },
      { q: "Taşıma sırasında iş yerim açık kalabilir mi?", a: "İşinizin aksamaması için taşıma planını sizin programınıza göre esnekçe düzenliyoruz." }
    ]
  },
  {
    slug: "parca-esya-tasima",
    name: "Parça Eşya Taşıma",
    shortDesc: "Tek parça veya az sayıda eşyanın hızlı ve ekonomik taşınması.",
    category: "nakliyat",
    template: `
      <p>Her taşıma işlemi komple bir ev veya ofis gerektirmez. Bazen yalnızca bir koltuk takımı, çamaşır makinesi, buzdolabı ya da birkaç parça mobilyanın başka bir adrese götürülmesi yeterlidir. {district} bölgesinde sunduğumuz <strong>parça eşya taşıma</strong> hizmetinde <strong>kapalı kasa nakliye kamyonumuz, uzman taşıma personelimiz ve gerektiğinde 15. kata çıkan mobil asansörümüzle</strong> sadece ihtiyacınız olan kadar hizmet alırsınız. Büyük nakliye paketleri için ödeme yapmak zorunda kalmadan işinizi çözüyoruz.</p>

      <p>Tek parça büyük mobilya veya beyaz eşya taşımalarında en çok karşılaşılan sorun, eşyanın bulunduğu kata indirilmesi veya yeni adresin bulunduğu kata çıkarılmasıdır. Bina içi asansöre sığmayan ya da merdivenden dönemeyen eşyalar için dış cephe mobil asansörümüz devreye girer; <strong>operatör her zaman asansörün başındadır</strong> ve işlem güvenle tamamlanır.</p>

      <p>{district} ve çevresinde <strong>7/24 hizmet veriyoruz.</strong> Randevunuzu sabah da akşam da planlayabilirsiniz; anlaştığımız saatte tam zamanında kapınızda oluruz. Uygun fiyatlı ve dürüst çalışan esnaf anlayışımızla telefonda belirlenen ücret kesindir, sürpriz ek kalem çıkarmayız. İster mağazadan satın aldığınız yeni bir eşyanın eve taşınması olsun, ister eski adresinizdeki birkaç parçanın getirilmesi; her işi titizlikle yapıyoruz.</p>

      <p>Parça eşya taşımacılığında dikkat ettiğimiz en önemli nokta, eşyaların boyutuna ve hassasiyetine göre doğru araç ve ekip göndermektir. Personelimiz eşyaları kaldırırken, taşırken ve yerleştirirken özenli davranır. Köşe koruyucu ve gerekli malzemeleri kullanarak eşyanızın ve bina ortak alanlarının zarar görmesini engelliyoruz.</p>
    `,
    faqs: [
      { q: "Tek parça beyaz eşya taşıyabilir misiniz?", a: "Evet, tek parça eşya taşıması da hizmetlerimiz arasındadır. Ekip ve araç kapasitesini eşyanıza göre düzenliyoruz." },
      { q: "Eşya yüksek katta ise asansör geliyor mu?", a: "Evet, gerekli durumlarda 15. kata kadar çıkabilen mobil asansörümüzü devreye alıyoruz." },
      { q: "Fiyatlandırma nasıl yapılıyor?", a: "Eşya sayısı, boyutu ve taşıma mesafesine göre net fiyat veriyoruz. Telefonda anlaşılan fiyat değişmez." },
      { q: "Aynı gün taşıma yapabiliyor musunuz?", a: "Müsaitlik durumumuza göre aynı gün hizmet verebiliyoruz. 7/24 ulaşılabilir olduğumuz için acil talepler de karşılanmaktadır." }
    ]
  },
  {
    slug: "asansorlu-komple-ev-tasima",
    name: "Asansörlü Komple Ev Taşıma",
    shortDesc: "Tüm ev eşyalarınızı asansör, kapalı kasa araç ve uzman ekiple kapıdan kapıya taşıyoruz.",
    category: "nakliyat",
    template: `
      <p>{district} bölgesinde komple ev taşımasını tek bir firmadan, tek bir fiyatla çözüyoruz. <strong>Asansörlü komple ev taşıma</strong> hizmetimizde <strong>sadece asansör değil; kapalı kasa nakliye kamyonumuz, uzman taşıma personelimiz ve 15. kata çıkan mobil asansörümüzle anahtar teslim taşıma yapıyoruz.</strong> Eski evinizden yenisine her şeyi eksiksiz ve özenle taşıyoruz.</p>

      <p>Komple ev taşımalarında en kritik adım eşyaların binadan çıkarılması ve yeni binaya sokulmasıdır. Dar merdivenler, küçük apartman asansörleri ve büyük eşyalar çoğu zaman uyum sağlamaz. Dış cephe mobil asansörümüz bu sorunu kökten çözer: balkon veya pencereden, bina içini meşgul etmeden eşyalar güvenle indirilir ve çıkarılır. <strong>Operatör her zaman asansörün başındadır;</strong> hiçbir eşya gözetimsiz taşınmaz.</p>

      <p><strong>7/24 hizmet veriyoruz.</strong> Taşınma gününüzü sabah erken de planlayabilir, gece geç de; programımızı sizin takviminize göre ayarlıyoruz. Anlaştığımız saatte tam vaktinde kapınızdayız; bu söz vermek değil, çalışma biçimimizdir. Uygun fiyatlı, sözünün eri ve dürüst bir esnaf ekibi olarak {district} bölgesinde hizmet veriyoruz.</p>

      <p>Kapalı kasa nakliye aracımız eşyalarınızı hava koşullarından ve olası çarpmalardan korur. Personelimiz büyük mobilyaları taşırken ve yerleştirirken deneyimli ve özenlidir. Kırılgan eşyalara özellikle dikkat ederiz. Taşıma işlemi tamamlandıktan sonra eşyalarınızın yeni evinizdeki odalarına yerleştirilmesi konusunda da yardımcı oluyoruz. {district} ve Bursa genelinde komple ev taşıması için güvenle bizi tercih edebilirsiniz.</p>
    `,
    faqs: [
      { q: "Komple ev taşıması fiyatı neye göre belirleniyor?", a: "Oda sayısı, eşya hacmi, taşıma mesafesi ve kat bilgisine göre net fiyat veriyoruz. Telefonda konuşurken kesin rakamı öğrenebilirsiniz." },
      { q: "Eşyalar için ambalaj malzemesi kullanıyor musunuz?", a: "Kırılgan eşyalar için köşe koruyucu ve gerekli malzemeleri kullanıyoruz. Özel ambalaj ihtiyacı için önceden bilgi alabilirsiniz." },
      { q: "Yeni evde de eşyaları yerleştiriyor musunuz?", a: "Evet, eşyalarınızın yeni evdeki odalarına yerleştirilmesinde de destek sağlıyoruz." },
      { q: "Taşınma günü iptal veya değişiklik yapabilir miyim?", a: "Randevu değişikliklerini önceden bildirmeniz yeterli. Esnek planlama anlayışımızla size uyum sağlarız." }
    ]
  }
];

export const ELEVATOR_SERVICES = SERVICES.filter(s => s.category === "asansor");
export const MOVING_SERVICES = SERVICES.filter(s => s.category === "nakliyat");
