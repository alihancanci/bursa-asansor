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
  {
    slug: "kiralik-mobil-asansor",
    name: "Kiralık Mobil Asansör",
    shortDesc: "Yüksek katlara malzeme ve eşya çıkarmanın en güvenli, en hızlı yolu.",
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
  }
];
