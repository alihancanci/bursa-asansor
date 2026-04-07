export interface District {
  slug: string;
  name: string;
  seoParagraph?: string;
  neighborhoods: string[];
  localNote?: string;
}

export interface Service {
  slug: string;
  name: string;
  shortDesc: string;
  template: string;
  faqs: { q: string; a: string }[];
  category: "asansor" | "nakliyat";
}

export const PHONE_NUMBER = "05053297533";
export const WHATSAPP_LINK = "https://wa.me/905053297533?text=Merhaba,%20mobil%20asansör%20kiralama%20hizmetiniz%20hakkında%20bilgi%20alabilir%20miyim?";

export const DISTRICTS: District[] = [
  { 
    slug: "bursa-merkez", 
    name: "Bursa (Merkez)",
    neighborhoods: ["Heykel", "Setbaşı", "Altıparmak", "Çekirge", "Kükürtlü", "Muradiye", "Demirtaş"],
    seoParagraph: "Bursa'nın kalbi Heykel ve Setbaşı gibi tarihi dokusu yüksek bölgelerde, dar sokaklar ve yoğun trafik eşya taşımayı bir kabusa dönüştürebilir. Bursa Merkez kiralık asansör hizmetimiz, bu zorlu lokasyonlarda binanın iç merdivenlerini kullanmadan, mobilyalarınızı doğrudan balkondan güvenle indirip çıkarmanızı sağlar. Şehrin her noktasında 7/24 aktif operatörlü araçlarımızla yanınızdayız.",
    localNote: "Trafiğe kapalı çarşı caddeleri ve dar sokaklarda, belediye izinli ve yaya güvenliği odaklı özel kurulum yapıyoruz."
  },
  { 
    slug: "osmangazi", 
    name: "Osmangazi",
    neighborhoods: ["Hüdavendigar", "Dikkaldırım", "Altıparmak", "Hamitler", "Yunuseli", "Emek", "Geçit"],
    seoParagraph: "Bursa'nın en büyük ilçesi Osmangazi'de, özellikle Altıparmak, Çekirge ve Hamitler gibi farklı yapılaşmaların olduğu bölgelerde asansörlü nakliyat hayat kurtarır. Tarihi binaların dar merdivenleri veya yeni yapılan sitelerin yüksek katları fark etmeksizin, Osmangazi kiralık mobil asansör çözümlerimizle eşyalarınızı sıfır riskle taşıyoruz. Komşularınızı rahatsız etmeden, hızlı ve profesyonel hizmet için bize güvenin.",
    localNote: "Tarihi dokunun yoğun olduğu dar sokaklarda küçük şaseli araçlarımızla binalara zarar vermeden hizmet veriyoruz."
  },
  { 
    slug: "nilufer", 
    name: "Nilüfer",
    neighborhoods: ["Özlüce", "Görükle", "İhsaniye", "Beşevler", "Ataevler", "Fethiye", "Balat"],
    seoParagraph: "Modern mimarinin ve lüks rezidansların merkezi Nilüfer'de, Özlüce, Balat ve İhsaniye gibi bölgelerde taşınmak zarafet gerektirir. Nilüfer evden eve asansörlü nakliyat hizmetimiz, yüksek katlı binaların asansörlerine sığmayan büyük eşyalarınızı dış cepheden, bina yapısına zarar vermeden dairenize ulaştırır. Nilüfer'in prestijli sitelerinde yönetmeliklere uygun, sessiz ve güvenli çalışma prensibiyle hareket ediyoruz.",
    localNote: "Yüksek katlı lüks rezidans ve yeni sitelerde, site yönetimi kurallarına tam uyumlu ve çevreye duyarlı taşıma sağlıyoruz."
  },
  { 
    slug: "yildirim", 
    name: "Yıldırım",
    neighborhoods: ["Millet", "Yavuzselim", "Ertuğrulgazi", "Mesken", "Teleferik", "Siteler", "Bağlaraltı"],
    seoParagraph: "Yıldırım ilçesinin engebeli coğrafyası ve Teleferik çevresindeki dik yamaçlar, standart nakliye kamyonlarının işini zorlaştırır. Yıldırım mobil asansör kiralama servisimiz, Millet ve Mesken gibi kentsel dönüşüm alanlarında yüksek erişimli merdivenleriyle eşyalarınızı dakikalar içinde güvenle transfer eder. Yıldırım'ın en zorlu sokaklarında bile milimetrik hesaplamalarla hizmet veriyoruz.",
    localNote: "Eğimli ve dar sokaklı Teferrüç/Teleferik mahallelerinde özel denge ayaklarına sahip asansörlerimizle sarsıntısız kurulum garanti ediyoruz."
  },
  { 
    slug: "inegol", 
    name: "İnegöl",
    neighborhoods: ["Alanyurt", "Mesudiye", "Kemalpaşa", "Mahmudiye", "Hamidiye", "Yenice", "Akhisar"],
    seoParagraph: "Türkiye'nin mobilya başkenti İnegöl'de, üretilen değerli mobilyaların çiziksiz bir şekilde katlara çıkarılması büyük önem taşır. İnegöl kiralık asansör hizmetimiz, hem bireysel ev taşımalarında hem de mobilya mağazalarının yüksek kat sevkiyatlarında en büyük yardımcınızdır. Alanyurt ve Mesudiye gibi bölgelerde hızlı kurulum ve profesyonel operatör desteğiyle eşyalarınızı sigortalı ve garantili taşıyoruz.",
    localNote: "Mobilya üretim merkezlerine özel, sıfır çizik garantili geniş sepetli asansörlerimizle mağaza ve depo sevkiyatları yapıyoruz."
  },
  { 
    slug: "gemlik", 
    name: "Gemlik",
    neighborhoods: ["Manastır", "Eşrefzade", "Kumla", "Kurşunlu", "Umurbey", "Hisar", "Cumhuriyet"],
    seoParagraph: "Gemlik Körfezi'nin rüzgarlı sahil şeridi ve Manastır gibi yüksek rakımlı yerleşimlerinde asansör kurmak uzmanlık ister. Gemlik kiralık asansörlü nakliyat araçlarımız, rüzgar dengeleyici sistemleri ve hidrolik ayaklarıyla en zorlu hava koşullarında bile güvenli çalışma sağlar. Deniz manzaralı evinize taşınırken eşyalarınızın rüzgardan veya dar alanlardan etkilenmemesi için profesyonel çözümler sunuyoruz.",
    localNote: "Körfez sahil şeridi ve rüzgarlı yamaçlarda, rüzgar sensörlü ve ekstra güvenlikli donanımlarımızla taşıma gerçekleştiriyoruz."
  },
  { 
    slug: "gursu", 
    name: "Gürsu",
    neighborhoods: ["Kurtuluş", "Yenidoğan", "İstiklal", "Zafer", "Adaköy", "Hasanköy"],
    seoParagraph: "Gürsu ilçesinin hem tarım hem de hızla gelişen yeni konut projeleriyle harmanlanmış yapısında, fabrikalara veya yeni yapılan sitelere seri şekilde malzeme sevkiyatı yapmak önemlidir. Gürsu'da özellikle sanayi kurulumları veya ev taşımalarında saatlik esnek asansör kiralama modelimiz sıkça tercih edilmektedir.",
    localNote: "Sanayi ve depolama alanları çevresinde, fabrika çatılarına ağırlık kapasitesi yüksek asansörlerle malzeme ulaştırıyoruz."
  },
  { 
    slug: "mudanya", 
    name: "Mudanya",
    neighborhoods: ["Güzelyalı", "Burgaz", "Halitpaşa", "Ömerbey", "Bademli", "Trilye", "Aydınpınar"],
    seoParagraph: "Mudanya'nın Güzelyalı ve Burgaz gibi mahallelerinde, deniz manzaralı ancak yamaçlara kurulu siteler taşınma krizlerine yol açabilir. Eğimli arazilere hidrolik ayaklarıyla mükemmel tutunan mobil asansörlerimiz, Mudanya'nın rüzgarlı günlerinde bile eşyalarınızı güvenli bir şekilde evinize ulaştırır.",
    localNote: "Dar sahil yolları ve yamaçlı yüksek sitelerde hidrolik sistemlerimizle en zorlu açılarda bile güvenli taşıma sağlıyoruz."
  },
  { 
    slug: "orhangazi", 
    name: "Orhangazi",
    neighborhoods: ["Arapzade", "Muradiye", "Fatih", "Hürriyet", "Gedelek", "Yenisölöz"],
    seoParagraph: "Orhangazi ilçesinde ana arterler üzerindeki binalara veya İznik gölü sapağındaki yeni yapılanmalara hızlı malzeme ulaştırmak kritik önemdedir. Gerek sanayi firmaları gerekse bireysel evden eve nakliyat taleplerinde Orhangazi'ye hızlı yönlendirdiğimiz araç filomuzla nakliye süreçlerini hızlandırıyoruz.",
    localNote: "İznik gölü çevresi ve ana otoyol arterlerinde, trafiği aksatmayan hızlı kurulumlu araçlarımızla pratik çözümler sunuyoruz."
  },
  { 
    slug: "karacabey", 
    name: "Karacabey",
    neighborhoods: ["Emirsultan", "Rungushpaşa", "Tabaklar", "Yenice", "Esentepe", "Bayramdere"],
    seoParagraph: "Karacabey'in yatay mimariden yavaş yavaş çok katlı binalara geçtiği bu dönemde, özellikle yeni yapılan 5-6 katlı binalarda asansör boşluklarının darlığı veya henüz bina asansörünün devreye girmemesi kaynaklı sorunları, dışarıdan kurduğumuz evden eve nakliyat asansörleriyle pratik bir şekilde çözüyoruz.",
    localNote: "Yeni gelişen konut bölgelerinde, henüz bina asansörü aktif olmayan yapıların tüm katlarına dış cepheden ulaşıyoruz."
  },
  { 
    slug: "iznik", 
    name: "İznik",
    neighborhoods: ["Selçuk Mah.", "Eşrefzade Mah.", "Mahmut Çelebi Mah.", "Sur Dışı", "Boyalıca", "Elbeyli"],
    seoParagraph: "İznik'in eşsiz tarihi dokusu ve sur içi mahallelerindeki nostaljik sokak yapılanmaları, büyük nakliye kamyonlarının girmesini engeller. Bu gibi durumlarda eşyalarınızı daha küçük araçlarla sokağa getiriyor ve sokak yapısını ihlal etmeden, hızlı kurulan kiralık asansörlerimizle tarihi evlere özenle taşıyoruz.",
    localNote: "Tarihi sur içi ve arkeolojik sit alanlarında, kültürel dokuya zarar vermeyecek hafif tonajlı araçlarımızla özenli hizmet veriyoruz."
  },
  { 
    slug: "mustafakemalpasa", 
    name: "Mustafakemalpaşa",
    neighborhoods: ["Tatvap", "Yalıntaş", "Hamzabey", "Barış", "Fevzipaşa", "Lalaşahin"],
    seoParagraph: "Mustafakemalpaşa ilçesinde gelişen sanayi ve artan nüfusla birlikte, yeni konutlara geçiş hızlanmıştır. Özellikle ilçe merkezindeki işlek caddelerde eşya indirip bindirmek trafiği kilitleyebileceği için, mobil asansör kullanarak işlemi ortalama taşıma süresinin yarısında, kimseyi rahatsız etmeden tamamlıyoruz.",
    localNote: "İşlek ilçe merkezi caddelerinde, çevreye rahatsızlık vermeyen sessiz motorlu asansörlerimizle mesai saatlerinde bile hızlı sevkiyat yapıyoruz."
  },
  { 
    slug: "yenisehir", 
    name: "Yenişehir",
    neighborhoods: ["Yenigün", "Kurtuluş", "Çayır", "Tabakhane", "Ulucami", "Yolören"],
    seoParagraph: "Yenişehir ovasının ve havalimanı bölgesinin getirdiği ticari hareketlilik, hem ofis taşımacılığını hem de ev nakliyesini canlandırmıştır. İşletmelerin kıymetli ofis mobilyalarını veya ev eşyalarınızı, Yenişehir'de her sokağa uyum sağlayan teleskopik asansörlerimizle güvenle ve profesyonel kalitede katlara çıkarıyoruz.",
    localNote: "Ova köyleri ve tarım-sanayi geçiş bölgelerinde, geniş balkonlu yapılara uygun özel teleskopik açılı asansör kurulumu gerçekleştiriyoruz."
  },
  { 
    slug: "kestel", 
    name: "Kestel",
    neighborhoods: ["Vani Mehmet", "Yeni Mahalle", "Kale", "Esentepe", "Barakfakih", "Saitabat"],
    seoParagraph: "Kestel sanayi bölgesindeki yoğunluk ve Bursa'nın doğu yakasındaki yeni yüksek yapılaşma, nakliye asansörlerine olan talebi artırmıştır. Özellikle organize sanayi bölgesindeki fabrikaların çatı katlarına makine parçası veya ofislere eşya aktarımı, Kestel'de saatlik mobil vincimiz veya asansörlerimizle hızlıca halledilmektedir.",
    localNote: "Sanayi bölgesi (OSB) ve fabrika sahalarında, sanayi tipi makine parçaları gibi ağır yükleri yüksek katlara güvenle çıkarıyoruz."
  },
  { 
    slug: "orhaneli", 
    name: "Orhaneli",
    neighborhoods: ["İsmetpaşa", "Fevzipaşa", "Karasi", "Göre", "Sırıl", "Başköy"],
    seoParagraph: "Orhaneli'nin dağlık coğrafyası ve eğimli yerleşim alanlarında eşya taşımanın fiziksel yorgunluğu ve riski çok yüksektir. Geleneksel hamaliye masrafları yerine, Orhaneli şartlarında bile kurulumu mümkün olan asansör sistemlerimizle eşyalarınızı sarsmadan evinize ulaştırarak maliyet ve zaman avantajı sağlıyoruz.",
    localNote: "Dağlık ve eğimli arazi şartlarında, dört çeker araçlarımızın üzerine kurulu özel ayaklı sistemlerle sarsıntısız taşıma yapıyoruz."
  },
  { 
    slug: "keles", 
    name: "Keles",
    neighborhoods: ["Cuma Mah.", "Sofular", "Kocakovacık", "Gököz", "Dağdibi"],
    seoParagraph: "Keles ilçesindeki kırsal yapıdan modern çok katlı binalara geçiş sürecinde firmamız eşya taşıma standartlarını yükseltmektedir. Eşyalarınızın araçtan indirilip, zarar görmeyeceği şekilde sabitlendiği sepet asansörlerimizle Keles'teki yeni yuvanıza %100 güvenle yerleşmenize yardımcı oluyoruz.",
    localNote: "Kırsal kesimden modern yapılara geçişte, standart dışı engebeli yollara bile uyum sağlayan kompakt asansör taşıtlarıyla geliyoruz."
  },
  { 
    slug: "harmancik", 
    name: "Harmancık",
    neighborhoods: ["Merkez Mah.", "Ece Mah.", "Çakmak", "Gökçedağ", "Ilıcaksu"],
    seoParagraph: "Harmancık'ın sakin dokusunda, dışarıdan gelen memur veya öğretmen tayinleri sebebiyle oluşan ev değiştirme süreçlerinde bölgeye özel nakliye asansörü hizmetimiz devredetir. Yol yorgunluğuyla gelen eşyalarınızın son aşamada merdivenlerde hasar görememesi için Harmancık'a özel hızlı çözümler üretiyoruz.",
    localNote: "Bölgeye atanan memur ve kamu görevlilerimizin eşyalarını, uzun yolculuk sonrası bina içi merdiven riski olmadan direk evlerine alıyoruz."
  },
  { 
    slug: "buyukorhan", 
    name: "Büyükorhan",
    neighborhoods: ["Orhan Mah.", "Cumhuriyet Mah.", "Kınık", "Piribeyler", "Gedikler"],
    seoParagraph: "Büyükorhan bölgesinde gerek inşaat malzemesi gerekse ev eşyası taşımak için harcanan uzun beden gücü sürelerini mobil asansörlerimizle sıfırlıyoruz. Yüksek katlara malzeme sevkiyatını dakikalara sığdırarak, Büyükorhan sakinlerine stresten uzak, teknolojik ve modern bir taşıma deneyimi sunuyoruz.",
    localNote: "İnşaat malzemesi ve ev eşyalarını yüksek katlara taşıyarak, dağ yöresi halkı için fiziksel yorgunluğu ve nakliye süresini sıfırlıyoruz."
  }
];

export const SERVICES: Service[] = [
  /* ───────── KİRALIK ASANSÖR HİZMETLERİ ───────── */
  {
    slug: "kiralik-mobil-asansor",
    name: "Kiralık Mobil Asansör",
    shortDesc: "Yüksek katlara malzeme ve eşya çıkarmanın en güvenli, en hızlı yolu.",
    category: "asansor",
    template: `
      <p>{district} bölgesinde taşınma, tadilat veya ağır malzeme sevkiyatı işlerinizde <strong>kiralık mobil asansör</strong> hizmetimizle yanınızdayız. Geleneksel taşıma yöntemlerinin yetersiz kaldığı, bina içi asansörlerin kullanılamadığı veya merdivenlerin çok dar olduğu durumlarda profesyonel mobil asansörlerimiz hayat kurtarır.</p>
      
      <p>Sistemimiz <strong>15. kata kadar</strong> güvenle ulaşabilmekte ve ağır yüklerinizi saniyeler içinde hedeflenen kata ulaştırabilmektedir. {district} mahalleri olan {neighborhoods} ve çevresinde, tüm süreç boyunca <strong>uzman operatörümüz asansörün başındadır</strong>; yani makine kullanımını tamamen biz yönetir ve iş güvenliğini en üst düzeyde tutarız. <strong>7/24 hizmet veriyoruz</strong>; acil taşınma ihtiyaçlarınızda bir telefon kadar uzağınızdayız.</p>

      <p>Bakımlı makine parkuru ve tecrübeli ekibimizle {district} lokasyonunda zaman kaybını önler, tam anlaştığımız saatte adresinizde oluruz. İhtiyaç duymanız halinde, sadece makine kiralama ile kalmayıp <strong>hamal (taşıma personeli) ve nakliye kamyonu desteği de sağlıyoruz</strong>. Profesyonel ve uygun fiyatlı çözümler için hemen iletişime geçebilirsiniz.</p>
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
  },

  /* ───────── SPESİFİK MALZEME & ÖZEL TAŞIMA ───────── */
  {
    slug: "mobilya-tasima-asansoru",
    name: "Mobilya Taşıma Asansörü",
    shortDesc: "Koltuk takımı, kanepe, dolap ve büyük mobilyaların güvenli kat transferi.",
    category: "asansor",
    template: `
      <p>Büyük ve ağır mobilyaların dar apartman merdivenlerinden çıkarılmaya ya da indirilmeye çalışılması çoğunlukla hem eşyaya hem de binanın ortak alanlarına zarar verir. {district} bölgesinde sunduğumuz <strong>mobilya taşıma asansörü</strong> hizmetinde koltuk takımları, üç kapılı gardıroplar, çift kişilik yatak kafesleri, raf sistemleri ve benzeri büyük parçalar doğrudan <strong>balkon veya pencereden, dış cephe asansörümüzle</strong> güvenle taşınır.</p>

      <p>Sistemimiz <strong>15. kata kadar çıkar</strong>; yani kaçıncı katta olduğunuz fark etmeksizin mobilyanızı evinize ya da evinizden çıkarabiliyoruz. Uzaktan kumandalı hassas kontrol sistemi sayesinde kanepe veya dolap gibi geniş parçalar milimetrik hassasiyetle manüpüle edilir. İşlem boyunca <strong>operatör her zaman asansörün başındadır</strong>, yükleme ve indirme süreci tamamen profesyonel gözetim altında gerçekleşir.</p>

      <p>{district} genelinde <strong>7/24 hizmet veriyoruz</strong>. Mobilya alışverişi sonrasında mağazadan teslim alan müşterilerimiz için de randevu sistemiyle tam zamanında adreslerinde oluruz. Anlaştığımız fiyat kesindir, iş bitince ek kalem çıkarmayız. Sözünün eri, dürüst ve uygun fiyatlı bir esnaf ekibi olarak çalışıyoruz.</p>

      <p>Cam vitrin, ayna veya çok parçalı sistem mobilyalar gibi hassas eşyalar için özellikle özenli çalışır; bina girişindeki kapı söveleri ve korkulukların zarar görmemesine dikkat ederiz. Mobilyanın belirli bir odaya yerleştirilmesinde yardımcı olmamızı istiyorsanız, <strong>gerekli durumlarda taşıma personeli (hamal) desteği de verilir</strong>.</p>
    `,
    faqs: [
      { q: "Çok büyük bir kanepe için cam sökmek gerekiyor mu?", a: "Balkon kapısı veya eşyanın boyutuna uygun bir pencere varsa genellikle cam sökmek gerekmez. Duruma göre uzmanlarımız en uygun çözümü belirler." },
      { q: "Mobilyayı mağazadan eve kadar getirebiliyor musunuz?", a: "Gerekli durumlarda kapalı kasa nakliye aracı ve taşıma personeli desteği de verilmektedir." },
      { q: "Asansör kurulum süresi ne kadar?", a: "Standart bir bina önü koşullarında kurulum dakikalar içinde tamamlanır." },
      { q: "Gece saatlerinde mobilya taşıma hizmetiniz var mı?", a: "Evet, 7/24 hizmet veriyoruz; gece saatleri dahil randevu alabilirsiniz." }
    ]
  },
  {
    slug: "beyaz-esya-tasima-asansoru",
    name: "Beyaz Eşya Taşıma Asansörü",
    shortDesc: "Buzdolabı, çamaşır makinesi ve ankastre ürünlerin katlara güvenli transferi.",
    category: "asansor",
    template: `
      <p>Buzdolabı, çamaşır makinesi, bulaşık makinesi, kurutma makinesi ya da ankastre ürünler gibi ağır ve hacimli beyaz eşyaların katlara taşınması insan gücüyle hem tehlikeli hem de çok zahmetlidir. {district} bölgesindeki <strong>beyaz eşya taşıma asansörü</strong> hizmetimiz bu sorunu hızla çözer. Eşyanız, bina içi merdivenle zorlanmadan doğrudan dış cephe asansörümüzle istediğiniz kata çıkarılır ya da indirilir.</p>

      <p>Sistemlerimiz <strong>15. kata kadar çalışır</strong>. Beyaz eşyalar hassas elektronik ve mekanik parçalar içerdiğinden taşıma sırasında darbeye karşı korunmaları kritiktir; dış cephe asansörümüz bu eşyaları düz ve dengeli bir şekilde taşıyarak darbe riskini minimuma indirir. Tüm süreç boyunca <strong>operatör her zaman asansörün başındadır</strong>; eşyanın güvenli ve dengeli bir biçimde yüklenmesini ve indirilmesini sağlar.</p>

      <p><strong>7/24 hizmet veriyoruz</strong>; yeni ev teslimi sonrası aynı gün hizmet alma gibi acil ihtiyaçlarınızda da yanınızdayız. {district} genelinde tam anlaştığımız saatte adresinizde olur, dürüst ve uygun fiyatlı çalışırız. Telefonda verilen fiyat taşıma bitiminde değişmez.</p>

      <p>Mağazadan satın aldığınız beyaz eşyanın eve teslimi ve kata çıkarılmasını tek seferde çözmek istiyorsanız, <strong>gerekli durumlarda kapalı kasa nakliye aracı ve taşıma personeli (hamal) desteği de verilir</strong>. Eski beyaz eşyanızın indirilmesi ve yenisinin yerine kurulması için de aynı ekiple çalışma imkânı mevcuttur.</p>
    `,
    faqs: [
      { q: "Buzdolabını 8. kattan indirmek için asansör gerekli mi?", a: "Bina merdiveninden indirilmesi güç veya riskli olan her beyaz eşya için dış cephe asansörümüzü kullanmanızı öneririz." },
      { q: "Beyaz eşyayı mağazadan alıp eve kadar getiriyor musunuz?", a: "Gerekli durumlarda kapalı kasa nakliye aracı ve taşıma personeli desteği de sağlanmaktadır." },
      { q: "Kaçıncı kata kadar hizmet veriyorsunuz?", a: "Sistemlerimiz maksimum 15. kata kadar güvenle ulaşabilmektedir." },
      { q: "Aynı gün hizmet alabilir miyim?", a: "Müsaitlik durumuna göre aynı gün hizmet verebiliyoruz. 7/24 ulaşılabilir olduğumuz için bizi arayabilirsiniz." }
    ]
  },
  {
    slug: "piyano-tasima-asansoru",
    name: "Piyano Taşıma Asansörü",
    shortDesc: "Kuyruklu ve duvar piyanosu taşımada uzman asansör çözümü.",
    category: "asansor",
    template: `
      <p>Piyano, taşınması en zorlu eşyalar arasında yer alır; hem çok ağırdır hem de hassas mekanik yapısı nedeniyle darbeye karşı son derece kırılgandır. {district} bölgesinde piyano taşıma konusundaki en doğru çözüm, dış cephe <strong>piyano taşıma asansörü</strong> kullanmaktır. Kuyruklu piyano, konsol piyano veya duvar piyanosu fark etmeksizin eşyanızı bina merdiveninde çıkmaya ya da inmeye zorlamadan güvenle taşıyoruz.</p>

      <p>Asansörümüz <strong>15. kata kadar çıkar</strong>. Piyano balkon veya uygun bir pencereden alınarak, özel yükleme düzeneğiyle asansör sepetine yerleştirilir ve hedefe ulaştırılır. Tüm bu işlem boyunca <strong>operatör her zaman asansörün başındadır</strong>; hassas yük yönetimi ve denge kontrolü konusunda deneyimli personelimiz görevini kusursuz yerine getirir. {district} genelinde <strong>7/24 hizmet veriyoruz</strong>; gündüz veya gece randevuya uygun olabiliriz.</p>

      <p>Piyano taşımada en sık yapılan hata, deneyimsiz ellerin ağır yükü merdivenlerden kaldırmaya çalışmasıdır. Bu hem piyanoyu hem de binanın merdiven korkuluklarını ve sıva yüzeylerini tahrip edebilir. Dış cephe asansörümüz bu riski tamamen ortadan kaldırır. Tam zamanında adresinizde olur, dürüst ve uygun fiyatlı hizmet sunarız.</p>

      <p>Piyano taşımasında ilave insan gücü gerekli olduğu durumlarda, <strong>gerekli durumlarda taşıma personeli (hamal) desteği de verilir</strong>. Piyano konser salonu, müzik okulu veya okuldan ev gibi farklı noktalara da taşınabilir; taleplerinizi bize aktarmanız yeterlidir.</p>
    `,
    faqs: [
      { q: "Kuyruklu piyano asansörle taşınabilir mi?", a: "Evet, kuyruklu piyano dahil her tip piyano için dış cephe asansörümüzü kullanarak güvenli taşıma yapabiliyoruz." },
      { q: "Piyano taşıma fiyatı nasıl hesaplanıyor?", a: "Piyano tipi, bulunduğu kat ve taşıma mesafesine göre fiyat belirleniyor. Telefonda net rakamı öğrenebilirsiniz." },
      { q: "Piyano taşınırken akort bozulur mu?", a: "Taşıma sonrası akort kontrolü yaptırılması önerilir; bu konuda müzik teknisyenine yönlendirebiliriz." },
      { q: "Gece piyano taşıyabilir misiniz?", a: "Evet, 7/24 hizmet veriyoruz. Bina sakinlerini daha az rahatsız eden gece saatlerini tercih eden müşterilerimiz de oluyor." }
    ]
  },
  {
    slug: "moloz-indirme-asansoru",
    name: "Moloz İndirme Asansörü",
    shortDesc: "Tadilat ve yıkım molozlarının üst katlardan hızlı ve temiz indirilmesi.",
    category: "asansor",
    template: `
      <p>Daire veya işyeri tadilatlarında kırılan duvarların, sökülen fayans ve seramiklerin, eski alçı ve beton parçalarının bina dışına çıkarılması hem yorucu hem de komşular için rahatsız edici bir süreçtir. {district} bölgesinde sunduğumuz <strong>moloz indirme asansörü</strong> hizmeti, bu süreci hızlı ve düzenli hale getirir. Moloz torbalar halinde hazırlandıktan sonra dış cephe asansörümüzle binanın önüne ya da konteynere saniyeler içinde indirilir.</p>

      <p>Sistemimiz <strong>15. kata kadar çalışır</strong>; tadilat hangi katta olursa olsun molozları aşağıya indirmek için asansörümüzü kullanabilirsiniz. Bu yöntem bina merdiveninin kirlenmesini, ortak alanların toz ve kıymıkla dolmasını önler. Süreç boyunca <strong>operatör her zaman asansörün başındadır</strong>; yükün dengeli ve güvenli biçimde taşınmasını koordine eder. {district} ve çevresinde <strong>7/24 hizmet veriyoruz</strong>.</p>

      <p>Tadilat firmalarının sıkça tercih ettiği bu hizmet, hem iş güvenliğini artırır hem de usta saatlerini verimli kullanmanızı sağlar. Kısa süreli kiralamalarda bile kalite standartlarımızdan ödün vermiyoruz. Ekibimiz tam zamanında gelir ve bakımlı makinesini işin süresi boyunca hazır tutar.</p>

      <p>Birden fazla gün süren tadilat projelerinde günlük ya da günlük artışlı kiralama seçenekleri mevcuttur. Molozların konteynere yüklenmesine yardıma ihtiyacınız varsa, <strong>gerekli durumlarda taşıma personeli (hamal) desteği de verilir</strong>. {district} bölgesindeki inşaat ve tadilat firmalarına rekabetçi koşullarla hizmet veriyoruz.</p>
    `,
    faqs: [
      { q: "Molozları torbalamak zorunda mıyım?", a: "Molozların asansör sepetine uygun torba veya kova gibi kaplara konulması gerekmektedir. Bu konuda personelimiz yönlendirme yapabilir." },
      { q: "Asansör tadilat süresince bizde kalabilir mi?", a: "Evet, günlük kiralama seçeneklerimizle çalışma süreniz boyunca asansörü kiralamak mümkündür." },
      { q: "Kaçıncı kattaki tadilatlar için uygundur?", a: "Zemin kat hariç, 1. kattan 15. kata kadar olan her kattaki tadilatlar için hizmet veriyoruz." },
      { q: "Moloz dışında başka malzeme de indirebilir misiniz?", a: "Evet, eski mobilya, bozuk beyaz eşya veya diğer yıkım malzemeleri de indirilebilir." }
    ]
  },
  {
    slug: "insaat-malzemesi-tasima-asansoru",
    name: "İnşaat Malzemesi Taşıma Asansörü",
    shortDesc: "Kum, çimento, fayans, alçıpan ve yapı malzemelerinin katlara hızlı transferi.",
    category: "asansor",
    template: `
      <p>{district} bölgesindeki tadilat ve inşaat projelerinde malzeme lojistiği çoğunlukla en fazla zaman kaybettiren aşamadır. Kum torbası, çimento, fayans, alçıpan, boru veya pencere kasası gibi ağır ve hacimli inşaat malzemelerinin ustalar tarafından katlara taşınması hem yorucu hem de verimsizdir. <strong>İnşaat malzemesi taşıma asansörü</strong> hizmetimizle bu sorunu kökten çözüyoruz.</p>

      <p>Asansörümüz <strong>15. kata kadar çıkar</strong>. Dış cephe sistemi sayesinde malzemeler doğrudan cadde veya bahçeden yüklenip hedef kata birkaç dakika içinde ulaştırılır. Bina içi merdivende trafik oluşmaz, komşular rahatsız edilmez, iş güvenliği riski azalır. Tüm süreçte <strong>operatör her zaman asansörün başındadır</strong>; ağır yüklerin dengeli ve güvenli biçimde taşınmasını sağlar. {district} ve çevresinde <strong>7/24 hizmet veriyoruz</strong>.</p>

      <p>Müteahhitler ve tadilat firmaları için proje süresince günlük veya çok günlü kiralama seçenekleri mevcuttur. Makinelerimiz periyodik bakımdan geçer; arıza riski minimuma indirilmiştir. Ekibimiz tam zamanında işbaşı yapar, dürüst ve uygun fiyatlı çalışır.</p>

      <p>Malzemelerin asansörden indirilmesinde veya katlardaki odalara dağıtılmasında iş gücüne ihtiyaç duyulursa, <strong>gerekli durumlarda taşıma personeli (hamal) ve nakliye kamyonu desteği de verilir</strong>. Büyük şantiyelerde koordineli çalışma için önceden iletişime geçmenizi tavsiye ederiz.</p>
    `,
    faqs: [
      { q: "Fayans ve seramik gibi kırılgan malzemeleri taşıyabiliyor musunuz?", a: "Evet, uygun ambalajlama ve yükleme teknikleriyle kırılgan inşaat malzemeleri de güvenle taşınabilmektedir." },
      { q: "Günlük kiralama mümkün mü?", a: "Evet, proje sürenize göre günlük veya çok günlü kiralama seçeneklerimiz mevcuttur." },
      { q: "Makine ne zaman kurulur?", a: "Randevu saatinde tam vaktinde adresinizde olur, kurulumu hızlıca tamamlarız." },
      { q: "Bina önünde ne kadar alan gerekiyor?", a: "Araç ve asansörün konumlanabilmesi için bina önünde yeterli boşluk olması gereklidir. Keşif yaparak uygunluğu belirleyebiliriz." }
    ]
  },
  {
    slug: "cam-ve-pencere-tasima-asansoru",
    name: "Cam ve Pencere Taşıma Asansörü",
    shortDesc: "Büyük cam panel, pencere ve doğrama sistemlerinin katlara hasarsız taşınması.",
    category: "asansor",
    template: `
      <p>Büyük cam paneller, pvc pencere doğramaları, balkon camları veya duvar boyutunda ayna gibi eşyalar hem çok kırılgandır hem de insan gücüyle katlara çıkarılması son derece risklidir. {district} bölgesinde sunduğumuz <strong>cam ve pencere taşıma asansörü</strong> hizmeti bu riski tamamen ortadan kaldırır. Cam parçalar özel sabitleme aparatlarıyla asansör sepetine yerleştirilerek, darbesiz ve düz bir taşıma yolculuğuyla hedef kata ulaştırılır.</p>

      <p>Sistemimiz <strong>15. kata kadar çıkar</strong>. Pencere değişim projeleri, ofis bölme cam sistemleri, cephe giydirme uygulamaları veya büyük ayna montajı gibi işlerde asansörümüz en pratik çözümdür. Hassas yük söz konusu olduğunda dikkat ve özen iki katına çıkar; <strong>operatör her zaman asansörün başındadır</strong> ve taşıma boyunca gözetim kesintisiz sürer. {district} genelinde <strong>7/24 hizmet veriyoruz</strong>.</p>

      <p>Cam taşımacılığında önemli olan hızdan önce kontrol ve denge. Uzaktan kumandalı sistemimizle sepet frenlenmeden, sarsılmadan hareket eder. Anlaştığımız saatte işbaşı yapar, dürüst ve uygun fiyatlı çalışırız. Telefonda belirlenen fiyat iş bitiminde değişmez.</p>

      <p>Cam veya pencere doğramalarının kurulumunda ya da söküm aşamasında gerekirse, <strong>gerekli durumlarda taşıma personeli (hamal) desteği de verilir</strong>. İnşaat firmaları, cam atölyeleri ve dekorasyon şirketleri gibi kurumsal müşterilerimize de proje bazlı kiralama imkânı sunuyoruz.</p>
    `,
    faqs: [
      { q: "Cam kırılmadan güvenle taşınabiliyor mu?", a: "Özel sabitleme ve yükleme teknikleriyle camlar son derece güvenli taşınmaktadır. Operatörümüz bu konuda deneyimlidir." },
      { q: "Büyük ofis cam bölmelerini de taşıyabiliyor musunuz?", a: "Evet, ofis bölme sistemleri, cephe camları ve büyük aynalar dahil her türlü cam ürün için hizmet veriyoruz." },
      { q: "Kaçıncı kata kadar ulaşabiliyorsunuz?", a: "15. kata kadar güvenli erişim sağlayan sistemlerimizle hizmet veriyoruz." },
      { q: "Acil cam değişimi için aynı gün hizmet alabilir miyim?", a: "Müsaitlik durumuna göre aynı gün hizmet verebiliyoruz. 7/24 ulaşılabilir olduğumuz için bizi arayın." }
    ]
  },
  {
    slug: "kiralik-asansor-fiyatlari",
    name: "Kiralık Asansör Fiyatları",
    shortDesc: "Bursa'da mobil asansör kiralama ücretleri, fiyat etkileyen faktörler ve teklif alma.",
    category: "asansor",
    template: `
      <p>{district} bölgesinde <strong>kiralık asansör fiyatları</strong>, birkaç temel faktöre göre belirlenir. Bunların başında taşınacak eşyanın türü ve ağırlığı, çalışma yapılacak binanın kat adedi ve fiziksel koşulları, ihtiyaç duyulan çalışma süresi ile ekstra hizmet talepleri gelir. Her iş birbirinden farklı olduğu için fiyatlandırmayı standart bir tabloya sıkıştırmak yerine, size özel ve net bir rakam sunmayı tercih ediyoruz.</p>

      <p>Fiyatı etkileyen başlıca unsurlar şunlardır: <strong>kat yüksekliği</strong> (sistemimiz 15. kata kadar çalışır), <strong>çalışma süresi</strong> (saatlik veya günlük kiralama seçenekleri mevcuttur), <strong>eşyanın türü</strong> (mobilya, beyaz eşya, inşaat malzemesi, piyano gibi) ve <strong>bina önü koşulları</strong> (park imkânı ve yanaşma mesafesi). Tüm bu bilgileri telefonda paylaştığınızda birkaç dakika içinde net bir fiyat alırsınız.</p>

      <p>Tüm kiralamalarda <strong>operatör her zaman asansörün başındadır</strong>; operatör ücreti fiyata dahildir. Sürpriz ek kalemler çıkarmayız; anlaştığımız rakam iş bittiğinde değişmez. {district} ve çevresinde <strong>7/24 hizmet veriyoruz</strong>; mesai dışı, hafta sonu ve tatil günlerinde de hizmet talep edebilirsiniz.</p>

      <p>Uygun fiyatlı, sözünün eri ve dürüst bir esnaf ekibi olarak {district} bölgesinde çalışıyoruz. Rakipleri değil, kendi kalite standartlarımızı konuşuruz. İster kısa süreli taşıma için saatlik kira olsun, ister uzun vadeli şantiye kullanımı için günlük kira; her bütçeye ve işin büyüklüğüne göre çözüm üretiyoruz. Ücretsiz fiyat teklifi için hemen arayın.</p>
    `,
    faqs: [
      { q: "Asansör saatlik mi, günlük mi kiralanıyor?", a: "Her ikisi de mümkündür. Kısa işler için saatlik, uzun projeler için günlük kiralama seçeneğimiz vardır." },
      { q: "Fiyata operatör dahil mi?", a: "Evet, güvenlik gereği operatör her zaman asansörün başındadır ve ücreti hizmet bedeline dahildir." },
      { q: "Fiyat teklifi nasıl alınıyor?", a: "Telefonda kat bilgisi, eşya türü ve süre gibi bilgileri paylaşmanız yeterli; birkaç dakika içinde net fiyat veriyoruz." },
      { q: "Gece ve hafta sonu fiyatı daha mı yüksek?", a: "Ücretlendirmemiz hakkında net bilgi almak için bizi arayın; 7/24 hizmet verdiğimiz için esnek fiyatlama seçeneklerimiz mevcuttur." }
    ]
  },
  {
    slug: "fabrika-ve-depo-tasimaciligi",
    name: "Fabrika ve Depo Taşımacılığı",
    shortDesc: "Endüstriyel makine, ekipman ve depo içeriğinin profesyonel taşınması.",
    category: "nakliyat",
    template: `
      <p>Fabrika taşıması veya depo nakli, ev veya ofis taşımalarından çok daha kapsamlı bir organizasyon gerektirir. Üretim makineleri, paletli mallar, raf sistemleri ve ağır endüstriyel ekipmanların doğru sırayla, güvenle ve üretim kesintisini minimuma indirerek yeni adrese taşınması kritik önem taşır. {district} bölgesinde sunduğumuz <strong>fabrika ve depo taşımacılığı</strong> hizmetinde <strong>kapalı kasa nakliye kamyonumuz, uzman taşıma personelimiz ve 15. kata çıkan mobil asansörümüzle</strong> anahtar teslim hizmet veriyoruz.</p>

      <p>Endüstriyel taşımalarda yükleme-indirme operasyonunun doğru planlanması, araç seçiminin işe uygun yapılması ve personelin deneyimi belirleyicidir. Ekibimiz ağır yük taşımada deneyimlidir; <strong>operatör her zaman asansörün başındadır</strong> ve yüksek kat çalışmalarında güvenliği en üst düzeyde tutar. <strong>7/24 hizmet veriyoruz</strong>; üretim programınıza göre taşımayı hafta sonuna veya geceye planlayabiliriz.</p>

      <p>{district} genelinde anlaştığımız saatte tam zamanında adresinizde oluruz. Sözünün eri, uygun fiyatlı ve dürüst çalışma biçimimizle kurumsal müşterilerimize güven veriyoruz. Taşıma öncesinde telefonda projenizin ayrıntılarını paylaşmanız, doğru ekip ve araç planlaması için büyük önem taşır.</p>

      <p>Depo içeriğindeki paletli malların, büyük raf sistemlerinin veya üretim makinelerinin söküm, taşıma ve yeniden kurulum aşamalarında yeterli iş gücüne ihtiyaç duyulursa, <strong>gerekli durumlarda ek taşıma personeli (hamal) ve nakliye kamyonu desteği de verilir</strong>. Küçük atölye taşımalarından büyük fabrika nakliyelerine kadar her ölçekte çözüm üretiyoruz.</p>
    `,
    faqs: [
      { q: "Üretim makinelerini söküp kurabilir misiniz?", a: "Taşıma ve yükleme konusunda hizmet veriyoruz; teknik söküm ve kurulum için alanında uzman bir firma ile koordineli çalışılmasını öneririz." },
      { q: "Büyük depo taşımalarında ne kadar personel geliyor?", a: "Taşımanın büyüklüğüne göre ekip sayısı planlanır. Önceden projenizi paylaşmanız doğru planlama yapmamızı sağlar." },
      { q: "Gece veya hafta sonu fabrika taşıması yapılabiliyor mu?", a: "Evet, üretim akışını bozmamak için hafta sonu ve gece saatlerinde de hizmet veriyoruz." },
      { q: "Endüstriyel ekipmanlar için özel araç kullanılıyor mu?", a: "Taşınacak ekipmanın özelliklerine göre en uygun araç seçimi yapılır. Detaylar için önceden iletişime geçiniz." }
    ]
  },
  {
    slug: "ceyiz-tasima",
    name: "Çeyiz Taşıma ve Nakliye",
    shortDesc: "Düğün öncesi çeyiz sandığı, koltuk ve ev eşyalarının özenli nakliyesi.",
    category: "nakliyat",
    template: `
      <p>Düğün hazırlıklarının en yoğun olduğu dönemde çeyizlerin yeni eve taşınması ayrı bir stres kaynağı olmamalı. {district} bölgesinde sunduğumuz <strong>çeyiz taşıma ve nakliye</strong> hizmetinde <strong>kapalı kasa nakliye kamyonumuz, uzman taşıma personelimiz ve 15. kata çıkan mobil asansörümüzle</strong> çeyizlerinizi yeni yuvanıza özenle ve hasarsız ulaştırıyoruz.</p>

      <p>Çeyiz sandıkları, koltuk takımları, yatak odası takımı, beyaz eşyalar, halılar ve değerli hediyeler titizlikle taşınmayı hak eder. Bina merdivenlerinden çıkarılamayan büyük mobilyalar ve beyaz eşyalar için dış cephe asansörümüz devreye girer; <strong>operatör her zaman asansörün başındadır</strong> ve her parça güvenle yerine ulaşır. Yeni evin yüksek katta olması durumunda bu hizmet büyük kolaylık sağlar.</p>

      <p>{district} genelinde <strong>7/24 hizmet veriyoruz</strong>; düğün günü öncesi veya sonrası, sabah erken veya gece geç — planınıza göre randevu ayarlıyoruz. Anlaştığımız saatte tam vaktinde gelir, dürüst ve uygun fiyatlı hizmet sunarız. Telefonda belirlenen fiyat değişmez; düğün gibi özel günlerde sürpriz ek ücret istemeyiz.</p>

      <p>Değerli çeyiz eşyalarınızın zarar görmemesi için ekibimiz özellikle özenli çalışır; bina merdivenlerinde çerçeveleri, duvarları ve eşyaları koruyacak şekilde hareket eder. <strong>Gerekli durumlarda ek taşıma personeli (hamal) desteği de verilir</strong>. Yeni yuvanızı güzel bir başlangıçla açmak için güvenle bizi tercih edebilirsiniz.</p>
    `,
    faqs: [
      { q: "Çeyiz eşyalarına özel dikkat gösteriyor musunuz?", a: "Evet, değerli ve yeni eşyalara ekstra özen göstererek, bina alanlarının ve eşyaların zarar görmemesine dikkat ediyoruz." },
      { q: "Büyük mobilyaları yüksek kata nasıl çıkarıyorsunuz?", a: "15. kata kadar çıkabilen dış cephe asansörümüzle büyük eşyaları balkon veya pencereden güvenle çıkarıyoruz." },
      { q: "Düğünden birkaç gün önce randevu alabilir miyim?", a: "Evet, tarih ve saati önceden ayarlayabiliriz. 7/24 hizmet verdiğimiz için esnek randevu imkânımız var." },
      { q: "Fiyat nasıl belirleniyor?", a: "Eşya miktarı, kat bilgisi ve mesafeye göre net fiyat veriyoruz. Telefonda konuşurken kesin rakamı öğrenebilirsiniz." }
    ]
  },
  {
    slug: "villa-tasimaciligi",
    name: "Villa Taşımacılığı",
    shortDesc: "Büyük villa ve müstakil ev taşımalarında kapalı kasa araç ve asansör ile profesyonel hizmet.",
    category: "nakliyat",
    template: `
      <p>Villa taşımacılığı, komple eşyaların çokluğu ve büyüklüğü nedeniyle dikkatli bir plan ve güçlü bir ekip gerektiren özel bir hizmet kategorisidir. {district} bölgesinde sunduğumuz <strong>villa taşımacılığı</strong> hizmetinde <strong>kapalı kasa nakliye kamyonumuz, uzman taşıma personelimiz ve 15. kata çıkan mobil asansörümüzle anahtar teslim ev taşıma yapıyoruz.</strong> Büyük hacimli mobilyalar, antika parçalar, büyük boy halılar ve çok sayıda kutu — hepsini titizlikle organize ediyor ve güvenle taşıyoruz.</p>

      <p>Villalar genellikle iki veya üç katlı yapılardır; bazı büyük mobilyalar iç merdivenlerden geçemeyebilir. Bu gibi durumlarda dış cephe asansörümüz devreye girer ve penceleden ya da terasa açılan kapıdan güvenle eşya transferi yapılır. <strong>Operatör her zaman asansörün başındadır</strong>; ağır ve değerli parçalar özel gözetim altında taşınır. {district} genelinde <strong>7/24 hizmet veriyoruz</strong>.</p>

      <p>Villa taşımacılığında zamanlama ve organizasyon kritiktir. Ekibimiz önceden yapılan plan çerçevesinde anlaştığımız saatte adresinizdedir; iş güvenliği kurallarından ödün vermeden çalışır. Dürüst ve uygun fiyatlı çalışma anlayışımızla telefonda verilen fiyat iş bitiminde değişmez. Sözümüzün arkasındayız.</p>

      <p>Villa taşımalarının büyük bir kısmında birden fazla araç ve daha büyük ekip gerekebilir. <strong>Gerekli durumlarda ek nakliye kamyonu ve taşıma personeli (hamal) desteği de verilir</strong>. {district} ve çevre ilçelerden Bursa geneline villa taşımacılığı konusunda fiyat teklifi almak için bizi arayabilirsiniz.</p>
    `,
    faqs: [
      { q: "Villa taşımacılığında kaç araç gerekiyor?", a: "Eşya hacmine göre bir veya birden fazla kapalı kasa araç kullanılabilir. Taşıma öncesinde detayları konuşarak doğru planlama yapıyoruz." },
      { q: "Antika ve değerli eşyaları da taşıyor musunuz?", a: "Evet, değerli parçalara özellikle özenli davranılır. Taşıma öncesinde bilgi vermeniz ekibimizin daha dikkatli hazırlanmasını sağlar." },
      { q: "Villa taşıması ne kadar sürer?", a: "Villa büyüklüğüne, eşya miktarına ve mesafeye göre değişir. Önceden taşıma planı yaparak süreyi optimize ediyoruz." },
      { q: "Taşınma günü erken saatte başlayabiliyor musunuz?", a: "Evet, 7/24 hizmet veriyoruz; sabah çok erken saatlerde de işbaşı yapabiliriz." }
    ]
  }
];

export const ELEVATOR_SERVICES = SERVICES.filter(s => s.category === "asansor");
export const MOVING_SERVICES = SERVICES.filter(s => s.category === "nakliyat");
