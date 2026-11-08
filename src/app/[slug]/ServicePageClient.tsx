"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { DISTRICTS, PHONE_NUMBER, SERVICES, WHATSAPP_LINK, USPS } from "@/data";
import { CTASection } from "@/components/CTASection";
import { FeaturesBar } from "@/components/FeaturesBar";
import { Testimonials } from "@/components/Testimonials";
import { ChevronRight, ArrowRight, CheckCircle2, Phone, MessageCircle, AlertTriangle, MapPin, Truck, UserCheck, Zap, Building2, ShieldCheck, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import {  } from "@/lib/seo";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/analytics";

export default function ServicePageClient() {
  const { t } = useTranslation();
  const params = useParams<{ slug: string }>();
  const fullSlug = params.slug || "";

  const service = [...SERVICES].sort((a, b) => b.slug.length - a.slug.length).find(s => fullSlug.endsWith(`-${s.slug}`));

  if (!service) {
    return <PageNotFound404 slug={fullSlug} />;
  }

  const districtSlugLength = fullSlug.length - service.slug.length - 1;
  const districtSlug = fullSlug.substring(0, districtSlugLength);

  const district = DISTRICTS.find(d => d.slug === districtSlug);

  if (!district) {
    return <PageNotFound404 slug={fullSlug} />;
  }

  const serviceName = t(`services.${service.slug}.name`, service.name);
  const serviceShortDesc = t(`services.${service.slug}.shortDesc`, service.shortDesc);
  const serviceTemplate = t(`services.${service.slug}.template`, service.template);
  const priorityDistricts = ["nilufer", "yildirim", "mudanya", "osmangazi", "gursu", "gemlik"];
  const districtServiceSlugs = ["kiralik-asansor", "kiralik-asansor-fiyatlari", "evden-eve-nakliyat", "evden-eve-asansorlu-nakliyat", "saatlik-asansor-kiralama"];
  const hasDistrictSearchContent = priorityDistricts.includes(district.slug) && districtServiceSlugs.includes(service.slug);

  const topNeighborhoods = district.neighborhoods.slice(0, 3);
  const neighborhoodStr = topNeighborhoods.join(", ");
  const localNeighborhoods = district.neighborhoods.slice(0, 5).join(", ");

  const hash = fullSlug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const selectedNeighborhoods = district.neighborhoods
    .slice()
    .sort((a, b) => (hash % a.length) - (hash % b.length))
    .slice(0, 5);

  let htmlContent = serviceTemplate
    .replace(/{district}/g, district.name)
    .replace(/{neighborhoods}/g, selectedNeighborhoods.join(", "));

  if (district.slug === "mudanya" && service.slug === "evden-eve-nakliyat") {
    htmlContent = `<p><strong>Mudanya evden eve nakliyat</strong> ve <strong>Mudanya asansörlü ev taşıma</strong> operasyonlarımızda; Güzelyalı (Yalı, Eğitim, Siteler, Burgaz), Bademli, Çağrışan, Halitpaşa, Ömerbey, Yeni Mahalle ve Trilye hattındaki apartman, yazlık ve villalar için sigortalı, marangozlu ve dış cephe asansörlü anahtar teslim taşımacılık sunuyoruz. Mudanya sahil şeridinin rüzgar (poyraz) dinamiklerini, eğimli sokaklarını ve site yönetim kurallarını bilen yerel saha ekibimizle eşyalarınızı bina merdivenlerine hiç sokmadan doğrudan balkondan kapalı çelik kasalı araçlarımıza aktarıyoruz.</p>
      <h2>Mudanya Evden Eve Nakliyat Süreci Nasıl İşler?</h2>
      <ul>
        <li><strong>Ücretsiz Ekspertiz ve Cephe Analizi:</strong> Alınacak ve bırakılacak mahalle/adres, kat sayısı, bina cephesi, bahçe/istinat duvarı mesafesi ve eşya hacmi (1+1 yazlıktan 4+1 Bademli villasına kadar) önceden incelenir.</li>
        <li><strong>Birinci Sınıf Ambalajlama &amp; Marangozlu Demontaj:</strong> Koltuk takımları, beyaz eşyalar, cam vitrinler ve yatak odası mobilyaları balonlu patpat naylon, kraft kağıt ve streç filmle paketlenir; gardırop ve yemek masaları uzman marangozumuz tarafından sökülüp yeni evinizde kurulur.</li>
        <li><strong>15. Kata Kadar Dış Cephe Asansörlü Yükleme:</strong> Dar apartman merdivenlerinde eşya çizilmesini ve site yönetimlerinin bina asansörü yasaklarını aşmak için 45-50 metre (15. kat) erişimli mobil asansörümüz balkona veya uygun pencereye kurulur.</li>
        <li><strong>Mudanya İçi, Bursa Merkez ve Şehirler Arası Transfer:</strong> Mudanya – Nilüfer – Osmangazi arası şehir içi taşınmaların yanı sıra İstanbul – Mudanya / Güzelyalı yazlık ve kalıcı konut taşımalarında da sabit fiyat teklifiyle hizmet veriyoruz.</li>
      </ul>
      <h2>Mudanya Ev Taşıma ve Villa Nakliyat Planlama Tablosu</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-navy-light">
        <table class="w-full text-left text-xs sm:text-sm my-0">
          <thead class="bg-slate-100 dark:bg-navy text-slate-800 dark:text-slate-200 font-bold">
            <tr>
              <th class="p-3 border-b border-slate-200 dark:border-white/10">Konut Tipi (Mudanya)</th>
              <th class="p-3 border-b border-slate-200 dark:border-white/10">Ekip &amp; Marangoz</th>
              <th class="p-3 border-b border-slate-200 dark:border-white/10">Asansör &amp; Araç</th>
              <th class="p-3 border-b border-slate-200 dark:border-white/10">Ortalama Süre</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-white/10">
            <tr>
              <td class="p-3 font-semibold">1+1 / 2+1 Yazlık &amp; Daire (Güzelyalı / Burgaz)</td>
              <td class="p-3">3-4 Kişilik Ekip + Marangoz</td>
              <td class="p-3">Mobil Asansör + Orta Boy Kapalı Kasa</td>
              <td class="p-3">3 – 4 Saat</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">3+1 Apartman / Site Dairesi (Halitpaşa / Ömerbey)</td>
              <td class="p-3">4-5 Kişilik Ekip + Marangoz</td>
              <td class="p-3">15. Kat Mobil Asansör + Büyük Kamyon</td>
              <td class="p-3">4 – 6 Saat</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">4+1 &amp; Müstakil Villa (Bademli / Çağrışan)</td>
              <td class="p-3">5-6 Kişilik VIP Ekip + Çift Marangoz</td>
              <td class="p-3">Yatay Erişimli Asansör + XL Çelik Kasa</td>
              <td class="p-3">6 – 8 Saat</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Yalnızca dış cephe asansörü kiralamak istiyorsanız <a href="/mudanya-kiralik-asansor" class="text-primary font-semibold hover:underline">Mudanya kiralık asansör</a> ve <a href="/mudanya-saatlik-asansor-kiralama" class="text-primary font-semibold hover:underline">Mudanya saatlik asansör kiralama</a> sayfalarımızı inceleyebilir, güncel ücretlendirme kriterleri için <a href="/mudanya-kiralik-asansor-fiyatlari" class="text-primary font-semibold hover:underline">Mudanya kiralık asansör fiyatları</a> rehberimize göz atabilirsiniz.</p>`;
  } else if (district.slug === "mudanya" && service.slug === "kiralik-asansor") {
    htmlContent = `<p><strong>Mudanya kiralık asansör</strong> ve <strong>Mudanya asansör kiralama</strong> hizmetimizde, Güzelyalı'dan Bademli'ye, Halitpaşa'dan Ömerbey ve Burgaz'a kadar tüm mahallelerde <strong>15. kata (yaklaşık 45-50 metreye) kadar</strong> sertifikalı operatör dahil mobil dış cephe asansörü kiralıyoruz. Ev eşyası, beyaz eşya, koltuk takımı, cam balkon, inşaat/tadilat malzemesi ve güneş paneli çıkarımı için saatlik veya günlük kiralama yapabilirsiniz.</p>
      <h2>Mudanya'da Neden Dış Cephe Mobil Asansör Kiralanmalı?</h2>
      <ul>
        <li><strong>Güzelyalı ve Sahil Sitelerinde Bina Asansörü Koruması:</strong> Güzelyalı Yalı, Eğitim, Siteler ve Burgaz mahallelerindeki çok katlı sitelerde bina içi yolcu asansörüyle yük taşımak yönetim kuralları gereği yasaktır. Mobil asansörümüz ortak alanlara hiç girmeden doğrudan balkondan yükleme sağlar.</li>
        <li><strong>Bademli &amp; Çağrışan Villalarında Yatay Bahçe Aşımı:</strong> Yol ile bina cephesi arasında bahçe, peyzaj alanı veya istinat duvarı bulunan Bademli villalarında, teleskopik bomlu araçlarımız yatay mesafeyi havadan aşarak teras ve üst kat balkonlarına güvenle ulaşır.</li>
        <li><strong>Poyraz Rüzgar Sensörü ve Eğimli Sokak Terazisi:</strong> Mudanya sahil hattının sert poyrazına ve Halitpaşa/Ömerbey'in eğimli sokaklarına karşı 4 noktalı hidrolik denge ayaklarımız (outrigger) elektronik teraziyle sabitlenir, rüzgar hızı anlık ölçülür.</li>
      </ul>
      <h2>Mudanya Kiralık Asansör Fiyatı Nasıl Belirlenir?</h2>
      <p>Kiralama ücreti; adresin bulunduğu mahalleye, kurulacak kata, çalışma süresine (saatlik veya günlük) ve taşınacak yükün niteliğine göre hesaplanır. Operatör hizmeti kiralama ücretine dahildir. Anahtar teslim komple taşınma talepleriniz için <a href="/mudanya-evden-eve-nakliyat" class="text-primary font-semibold hover:underline">Mudanya evden eve nakliyat</a> sayfamızdan, kısa süreli işlemler için <a href="/mudanya-saatlik-asansor-kiralama" class="text-primary font-semibold hover:underline">Mudanya saatlik asansör kiralama</a> sayfamızdan bilgi alabilirsiniz.</p>`;
  } else if (district.slug === "mudanya" && service.slug === "saatlik-asansor-kiralama") {
    htmlContent = `<p><strong>Mudanya saatlik asansör kiralama</strong> hizmetimiz; Güzelyalı, Burgaz, Halitpaşa, Ömerbey, Yeni Mahalle ve Bademli'de kısa süreli dış cephe yükleme veya indirme ihtiyacı olan bireysel müşteriler, şehir dışından gelen nakliyeciler ve esnaflar için en ekonomik çözümdür. <strong>Operatör ücrete dahildir</strong> ve aracımız 20-30 dakika içinde kurularak 15. kata kadar çalışmaya başlar.</p>
      <h2>Mudanya'da Saatlik Asansör Kiralama Kimler İçin Uygundur?</h2>
      <ul>
        <li><strong>Şehir Dışından Mudanya'ya Gelen Nakliye Firmaları:</strong> İstanbul, Ankara, İzmir veya diğer illerden Mudanya ve Güzelyalı'ya ev eşyası getiren meslektaşlarımıza, yerel operatörlü saatlik mobil asansör desteği sağlıyoruz.</li>
        <li><strong>Kendi İmkanıyla Ev Taşıyanlar:</strong> Aracını ve taşıma ekibini kendi ayarlayan müşterilerimiz, dar apartman merdivenlerinde eşya yıpranmasını önlemek için saatlik asansör kiralayabilir.</li>
        <li><strong>Mobilya, Beyaz Eşya, Cam Balkon ve Tadilat Ustaları:</strong> Merdivenden dönmeyen L koltuk, buzdolabı, çelik kapı, cam balkon panelleri, parke, seramik ve alçıpan sevkiyatlarında tek parça veya saatlik kurulum yapılır.</li>
      </ul>
      <p>Güncel ücretlendirme detayları için <a href="/mudanya-kiralik-asansor-fiyatlari" class="text-primary font-semibold hover:underline">Mudanya kiralık asansör fiyatları</a> sayfamızı, komple ev taşıma hizmeti için <a href="/mudanya-evden-eve-nakliyat" class="text-primary font-semibold hover:underline">Mudanya evden eve nakliyat</a> sayfamızı ziyaret edebilirsiniz.</p>`;
  } else if (district.slug === "mudanya" && service.slug === "kiralik-asansor-fiyatlari") {
    htmlContent = `<p><strong>Mudanya kiralık asansör fiyatları</strong>; kurulum yapılacak mahalle (Güzelyalı, Bademli, Halitpaşa, Ömerbey, Burgaz, Trilye vb.), kaçıncı kata çıkılacağı (2. kattan 15. kata kadar), kullanım süresi (saatlik, yarım gün veya tam gün) ve taşınacak malzemenin ağırlığına göre belirlenir. Şeffaf fiyat politikamız gereği <strong>sertifikalı operatör ve kurulum ücrete dahildir</strong>; iş bitiminde sürpriz ek ücret talep edilmez.</p>
      <h2>2026 Mudanya Asansör Kiralama Fiyatını Etkileyen 4 Kriter</h2>
      <ul>
        <li><strong>Kat Yüksekliği (2. Kat – 15. Kat):</strong> 2 ile 7. kat arasındaki standart kurulumlar ile 10–15. kat (45-50 metre) yüksek erişimli teleskopik araç kurulumları farklı makine parkuru gerektirir.</li>
        <li><strong>Çalışma Süresi (Tek Parça / Saatlik / Günlük):</strong> Tek bir koltuk takımı veya beyaz eşya çıkarma işlemi ile tam gün süren inşaat/mobilya sevkiyatı arasında süre bazlı avantajlı tarife uygulanır.</li>
        <li><strong>Cephe ve Yanaşma Mesafesi:</strong> Aracın binaya doğrudan yanaşabildiği sokaklar ile Bademli/Güzelyalı gibi bahçe mesafesi aşılması gereken cepheler WhatsApp üzerinden gönderilen fotoğrafla 5 dakikada ücretsiz değerlendirilir.</li>
        <li><strong>Hizmet Kapsamı (Sadece Asansör vs. Komple Nakliyat):</strong> Yalnızca operatörlü asansör kiralama ile <a href="/mudanya-evden-eve-nakliyat" class="text-primary font-semibold hover:underline">Mudanya evden eve nakliyat</a> (kamyon + taşıma ekibi + ambalaj + marangoz) ayrı olarak fiyatlandırılır.</li>
      </ul>`;
  } else if (district.slug === "gemlik" && (service.slug === "kiralik-asansor" || service.slug === "saatlik-asansor-kiralama" || service.slug === "kiralik-asansor-fiyatlari")) {
    htmlContent = `<p><strong>Gemlik kiralık asansör</strong>, <strong>Gemlik saatlik asansör kiralama</strong> ve <strong>Gemlik kiralık asansör fiyatları</strong> taleplerinizde; Hisar, Eşref Dinçer, Balıkpazarı, Cumhuriyet, Demirsubaşı, Osmaniye, <strong>Kumla (Küçükkumla)</strong>, <strong>Kurşunlu</strong> ve <strong>Umurbey</strong> mahallelerinde <strong>15. kata (45-50 metreye) kadar</strong> sertifikalı operatör dahil mobil dış cephe asansörü kiralıyoruz. Bursa merkez konuşlu filomuzla Gemlik ve sahil hattına hızla ulaşıyor; ev eşyası, beyaz eşya, mobilya, cam balkon ve inşaat malzemelerini dar merdivenlere sokmadan balkondan taşıyoruz.</p>
      <h2>Gemlik, Kumla ve Kurşunlu'da Neden Mobil Asansör Kiralanmalı?</h2>
      <ul>
        <li><strong>Hisar ve Umurbey Yamaç Sitelerinde Yüksek Kat Erişimi:</strong> Gemlik'in deprem yönetmeliğine uygun yeni yapılan Hisar, Cihatlı ve Umurbey toplu konut/site projelerinde bina içi yolcu asansörünü kullanmadan 15. kata kadar güvenli dış cephe kurulumu sağlıyoruz.</li>
        <li><strong>Kumla &amp; Kurşunlu Yazlık Dairelerde Hızlı Taşıma:</strong> Yazlık sezon geçişlerinde dar apartman merdivenlerinde eşya çizilmesini önlemek için 25 dakikada kurulan teleskopik asansörümüzle 2-3 saatte yükleme/indirme yapıyoruz.</li>
        <li><strong>Eğimli Sokak Terazisi ve Körfez Rüzgar Sensörü:</strong> Gemlik'in yokuşlu sokaklarına ve körfez rüzgarına karşı 4 noktalı hidrolik denge ayaklarımız (outrigger) elektronik teraziyle sabitlenir; operatörümüz rüzgar hızını anlık kontrol eder.</li>
      </ul>
      <p>Komple anahtar teslim taşınma için <a href="/gemlik-evden-eve-nakliyat" class="text-primary font-semibold hover:underline">Gemlik evden eve nakliyat</a> sayfamızı, saatlik kurulumlar için <a href="/gemlik-saatlik-asansor-kiralama" class="text-primary font-semibold hover:underline">Gemlik saatlik asansör kiralama</a> ve <a href="/gemlik-kiralik-asansor-fiyatlari" class="text-primary font-semibold hover:underline">Gemlik kiralık asansör fiyatları</a> sayfalarımızı inceleyebilirsiniz.</p>`;
  } else if (district.slug === "gemlik" && service.slug === "evden-eve-nakliyat") {
    htmlContent = `<p><strong>Gemlik evden eve nakliyat</strong> ve <strong>Gemlik asansörlü ev taşıma</strong> operasyonlarımızda; Hisar, Eşref Dinçer, Cumhuriyet, Balıkpazarı, Umurbey, <strong>Kumla</strong> ve <strong>Kurşunlu</strong> mahallelerindeki apartman, site ve yazlık konutlar için sigortalı, uzman marangozlu ve 15. kata kadar dış cephe asansörlü komple nakliyat sunuyoruz.</p>
      <h2>Gemlik Ev Taşıma Sürecimizde Neler Dahil?</h2>
      <ul>
        <li><strong>Bursa Merkez – Gemlik – Kumla Koordineli Filo:</strong> Gemlik içi taşınmaların yanı sıra Gemlik – Nilüfer – Osmangazi – Yıldırım – Mudanya arası taşınmalarda kendi kapalı çelik kasa araçlarımız ve mobil asansörümüzle tek elden hizmet veriyoruz.</li>
        <li><strong>Marangozlu Demontaj/Montaj &amp; Patpat Ambalaj:</strong> Gardırop, yatak odası, yemek masası ve beyaz eşyalarınız uzman marangozumuz tarafından sökülür, çift katmanlı balonlu naylonla paketlenir ve yeni evinizde kurulur.</li>
        <li><strong>15. Kata Kadar Dış Cephe Asansörlü Yükleme:</strong> Eşyalarınız bina merdivenlerine veya dar site koridorlarına hiç girmeden doğrudan balkondan kapalı kasa kamyonumuza indirilir ve yeni adresinizde balkondan dairenize çıkarılır.</li>
      </ul>
      <p>Sadece operatörlü dış cephe asansörü kiralamak istiyorsanız <a href="/gemlik-kiralik-asansor" class="text-primary font-semibold hover:underline">Gemlik kiralık asansör</a> ve <a href="/gemlik-kiralik-asansor-fiyatlari" class="text-primary font-semibold hover:underline">Gemlik kiralık asansör fiyatları</a> sayfalarımıza göz atabilirsiniz.</p>`;
  } else if (hasDistrictSearchContent && service.slug === "evden-eve-nakliyat") {
    htmlContent = `<p>${district.name} evden eve nakliyat talebinizde taşınacak eşya miktarı, iki adres arasındaki mesafe, katlar ve bina erişimi değerlendirilir. Evden eve taşıma için süre bazlı asansör kiralaması yerine, taşınmanın kapsamına göre ayrıca fiyat teklifi hazırlanır. Ücretsiz ekspertiz ve keşif ile ihtiyaç duyulan nakliye aracı, taşıma personeli ve asansör planlanır.</p>
      <h2>${district.name} ev taşıma teklifi için gerekli bilgiler</h2>
      <ul><li>Alınacak ve bırakılacak mahalle veya adresler</li><li>Kat ve bina içi asansör bilgisi</li><li>Oda sayısı ya da eşya listesi; büyük parçaların fotoğrafı</li><li>Taşınma tarihi ve paketleme/montaj ihtiyacı</li><li>Asansör gerekiyorsa bina cephesi ve aracın duracağı alanın fotoğrafı</li></ul>
      <p>${district.name}’in ${localNeighborhoods} ve diğer mahallelerinde hizmet veriyoruz. Ücretsiz ekspertiz/keşif sırasında adres, kat ve taşınma kapsamı incelenir; fiyat mesafe, süre ve kat bilgilerine göre belirlenir. Asansör kurulumu gerekiyorsa cephe ve zemin uygunluğu önceden teyit edilir.</p>`;
  } else if (hasDistrictSearchContent && service.slug === "evden-eve-asansorlu-nakliyat") {
    htmlContent = `<p>${district.name} asansörlü nakliyat hizmetinde büyük eşyalar, bina koşulları elveriyorsa dış cephe mobil asansörüyle balkon veya uygun pencereden taşınabilir. Operatör kiralamaya dahildir. İhtiyacınıza göre taşıma personeli ve nakliye aracı da sağlanabilir. Komple evden eve taşıma için süre bazlı kiralama yerine taşınma kapsamına göre ayrıca teklif hazırlanır.</p>
      <h2>Asansörlü nakliyat kurulumu nasıl değerlendirilir?</h2>
      <p>Aracın bina önünde durabileceği alan, cepheye erişim, balkon veya pencere açıklığı, çevredeki ağaç ve kablolar ile taşınacak yükün ölçüleri kontrol edilir. ${district.name}’in tüm mahallelerinde ücretsiz ekspertiz/keşif yapıyoruz. Teklif; mesafe, çalışma süresi ve kata göre belirlenir. Adresiniz, kat ve yük bilgisiyle birlikte mümkünse sokak/cephe fotoğrafını paylaşın.</p>`;
  } else if (hasDistrictSearchContent && service.slug === "saatlik-asansor-kiralama") {
    htmlContent = `<p>${district.name}’de mobil asansör saatlik veya günlük kiralanabilir. Operatör kiralama hizmetine dahildir. İhtiyaca göre yükleme/taşıma personeli ve nakliye aracı da sağlayabiliyoruz. Evden eve taşıma taleplerinde ise süre bazlı kiralama yerine taşınmanın kapsamına göre ayrıca fiyat verilir.</p>
      <h2>${district.name} asansör kiralama fiyatı nasıl belirlenir?</h2>
      <p>Ücret; hizmet verilecek mesafeye, tahmini çalışma süresine ve kata göre değişir. Bu nedenle sabit fiyat listesi yayımlamıyoruz. Ücretsiz ekspertiz ve keşif ile adresi, cepheyi ve ihtiyacınız olan hizmet kapsamını değerlendirip size özel teklif hazırlıyoruz.</p>
      <p>${localNeighborhoods} ve ${district.name}’in diğer mahallelerinde teklif ve ücretsiz keşif için adres, kat ve taşınacak eşya bilgilerini iletin.</p>`;
  } else if (hasDistrictSearchContent && service.slug === "kiralik-asansor-fiyatlari") {
    htmlContent = `<p>${district.name} kiralık asansör fiyatı sabit değildir; hizmet verilecek mesafeye, çalışma süresine ve kata göre değişir. Bu nedenle web sitemizde sabit fiyat yayımlamıyoruz. Ücretsiz ekspertiz ve keşif sırasında işin koşullarını değerlendirip size özel fiyat teklifi sunuyoruz.</p>
      <h2>${district.name} asansör kiralama teklifine neler dahil?</h2>
      <ul><li>Saatlik veya günlük asansör kiralama seçenekleri</li><li>Operatör hizmeti kiralama ücretine dahildir</li><li>İhtiyaca göre yükleme/taşıma personeli ve nakliye aracı</li><li>Ücretsiz ekspertiz ve keşif</li></ul>
      <p>Evden eve taşınma hizmetinde süre bazlı kiralama yerine taşınmanın kapsamına göre ayrıca fiyat verilir. ${localNeighborhoods} ve ${district.name}’in diğer mahallelerinde teklif için adres, kat, eşya ve taşınma bilgilerinizi paylaşabilirsiniz.</p>`;
  } else if (hasDistrictSearchContent && service.slug === "kiralik-asansor") {
    htmlContent = `<p>${district.name} kiralık asansör hizmetimizde operatör kiralama ücretine dahildir. Asansör saatlik veya günlük kiralanabilir. Evden eve taşınma taleplerinde süre bazlı asansör kiralaması yerine, taşınmanın kapsamına göre ayrıca fiyat teklifi hazırlanır.</p>
      <p>${localNeighborhoods} ve ${district.name}’in diğer mahallelerinde hizmet veriyoruz. Ücretsiz ekspertiz ve keşif ile bina cephesini, kurulum alanını ve taşıma ihtiyacınızı değerlendiriyoruz. İhtiyaca göre yükleme/taşıma personeli ve nakliye aracı da sağlanabilir.</p>
      <h2>${district.name} kiralık asansör fiyatı nasıl belirlenir?</h2>
      <p>Ücret; mesafeye, çalışma süresine ve kata göre değiştiğinden sitede sabit fiyat veremiyoruz. Size uygun teklifi hazırlayabilmemiz için mahalle veya adres, kat, taşınacak eşya ve planlanan tarih bilgilerini iletin. Keşif ve ekspertiz ücretsizdir.</p>`;
  }

  if (hasDistrictSearchContent && ["kiralik-asansor-fiyatlari", "saatlik-asansor-kiralama"].includes(service.slug)) {
    const localSetupNotes: Record<string, string> = {
      yildirim: "Yıldırım'da eğimli ya da dar sokaklı bir adreste, asansör aracının güvenle durabileceği alan ve bina cephesine erişim ayrıca değerlendirilir. Teklif isterken açık adresi, katı ve sokak/cephe fotoğrafını paylaşın.",
      nilufer: "Nilüfer'de site veya apartman içindeki taşımalarda yönetimin izin ve çalışma saati koşullarını önceden öğrenin. Adres, kat, cephe fotoğrafı ve planlanan tarih; kurulum uygunluğu ile fiyatın değerlendirilmesini kolaylaştırır.",
      osmangazi: "Osmangazi'de yoğun cadde veya dar sokak üzerindeki adreslerde aracın duracağı alanı önceden değerlendirmek gerekir. Mahalle/adres, kat ve bina cephesinin fotoğrafını ileterek kurulum alanı ile fiyat hakkında bilgi isteyin.",
      mudanya: "Mudanya'da mahalleye göre sokak ve bina cephesi koşulları değişebilir. Güzelyalı, Burgaz, Bademli veya başka bir adresteki talebiniz için konumu, katı ve aracın yaklaşacağı alanın fotoğrafını paylaşın.",
      inegol: "İnegöl'de Alanyurt, Ertuğrulgazi, Kemalpaşa veya Mobilya OSB bölgesindeki taleplerinizde; taşınacak mobilya/eşya miktarını, katı ve bina cephesinin fotoğrafını WhatsApp üzerinden paylaşarak 5 dakikada net fiyat alabilirsiniz.",
      gemlik: "Gemlik'te Kumla, Umurbey, Hisar veya sahil mahallelerindeki eğimli sokaklar ve yazlık siteler için bina cephesi fotoğrafını, kat bilgisini ve çalışma süresini paylaşarak hızlı fiyat teklifi isteyin.",
      yenisehir: "Yenişehir merkez mahalleleri ve yeni konut sitelerindeki asansör veya ev taşıma talepleriniz için mahalle, kat ve taşınacak yük bilgisini ileterek net fiyat alabilirsiniz.",
      orhangazi: "Orhangazi Arapzade, Hürriyet, Muradiye ve Camikebir mahallelerindeki apartman ve iş yerleri için kat yüksekliği ve cephe fotoğrafını paylaşarak kurulum uygunluğunu hemen öğrenin."
    };
    const localSetupNote = localSetupNotes[district.slug];

    if (localSetupNote) {
      htmlContent += `<h2>${district.name} adresinde kurulum için hangi bilgiler gerekir?</h2><p>${localSetupNote}</p>`;
    }
  }

  if (district.slug === "yildirim" && service.slug === "evden-eve-nakliyat") {
    htmlContent += `<h2>Yıldırım'da ev taşıma ve asansör planı</h2><p>${district.localNote ?? ""} Yıldırım'da asansör gerekip gerekmediği bina cephesi ve aracın güvenle durabileceği alan incelendikten sonra netleştirilir. Yalnızca asansör kiralama arıyorsanız <a href="/yildirim-kiralik-asansor-fiyatlari" class="text-primary font-semibold hover:underline">Yıldırım kiralık asansör fiyatları ve teklif bilgilerine</a> bakabilirsiniz. Ev taşıma teklifi için alınacak ve bırakılacak adresleri, katları, eşya kapsamını ve tarihi paylaşın.</p>`;
  } else if (district.slug === "osmangazi" && service.slug === "kiralik-asansor-fiyatlari") {
    htmlContent += `<p>Osmangazi'de saatlik veya günlük kullanım için <a href="/osmangazi-saatlik-asansor-kiralama" class="text-primary font-semibold hover:underline">Osmangazi saatlik asansör kiralama</a> seçeneklerine de bakabilirsiniz. Kurulum uygunluğu adres, cephe ve aracın durabileceği alana göre teyit edilir.</p>`;
  }

  // 5 Ana İlçe + Bursa Merkez için Semt Bazlı Odak & İlçe İçi Çapraz Güçlendirme (Silo) Bloğu
  if (priorityDistricts.includes(district.slug) || district.slug === "bursa-merkez") {
    const hoodHighlights: Record<string, string> = {
      mudanya: "Güzelyalı, Burgaz, Bademli, Halitpaşa, Ömerbey ve Çağrışan mahallelerinde site içi ve sahil şeridi binalara uygun 15. kata kadar dış cephe asansör kurulumu yapıyoruz.",
      nilufer: "Özlüce, Balat, Görükle, İhsaniye, Ataevler, Beşevler, Ertuğrul ve Altınşehir'deki yüksek katlı modern sitelerde bina asansörünü meşgul etmeden dış cepheden hızlı taşıma sağlıyoruz.",
      osmangazi: "Hamitler, Yunuseli, Emek, Geçit, Dikkaldırım, Çekirge ve Demirtaş bölgelerinde dar sokaklara ve yoğun caddelere uyumlu mobil asansör filomuzla hizmet veriyoruz.",
      yildirim: "Millet, Erikli, Ertuğrulgazi, Mesken, Teleferik ve Esenevler mahallelerinde eğimli sokak koşullarına uygun denge ayaklarıyla güvenli asansör kurulumu gerçekleştiriyoruz.",
      gursu: "Kurtuluş, Yenidoğan, Zafer ve İstiklal mahallelerindeki apartman ve sitelerde ev eşyası, mobilya ve yapı malzemesi taşımacılığı için saatlik veya günlük asansör kiralama sunuyoruz.",
      inegol: "Ertuğrulgazi, Kemalpaşa, Alanyurt, Yeniceköy, Mahmudiye, Orhaniye, Mesudiye ve Akhisar mahalleleri ile İnegöl Mobilya OSB'de 15. kata kadar operatörlü mobil asansör ve evden eve nakliyat hizmeti veriyoruz.",
      gemlik: "Kumla, Umurbey, Kurşunlu, Hisar, Eşref Dinçer, Balıkpazarı ve Cumhuriyet mahallelerinde sahil ve yamaç sitelerine uygun 15. kata kadar dış cephe asansör kiralama ve nakliyat sağlıyoruz.",
      yenisehir: "Yenigün, Çayır, Kurtuluş, Yüzüncüyıl, Ulucami ve Hidirbali mahallelerindeki apartman ve sitelerde asansörlü evden eve nakliyat ve saatlik mobil asansör kurulumu yapıyoruz.",
      orhangazi: "Arapzade, Hürriyet, Muradiye, Camikebir ve Tekke mahallelerinde 15. kata kadar dış cephe eşya taşıma asansörü kiralama ve sigortalı evden eve nakliyat sunuyoruz.",
      "bursa-merkez": "Heykel, Setbaşı, Altıparmak, Çekirge, Kükürtlü ve Muradiye başta olmak üzere Bursa merkezdeki tüm mahallelere 7/24 operatörlü mobil asansör yönlendiriyoruz."
    };

    const hoodText = hoodHighlights[district.slug] || "";

    const districtBlogMap: Record<string, { slug: string; title: string }> = {
      nilufer: { slug: "nilufer-kiralik-asansor-yuksek-kat-nakliyat", title: "Nilüfer Yüksek Katlı Sitelerde Asansör Kurulum Rehberi" },
      osmangazi: { slug: "osmangazi-kiralik-asansor-dar-sokak-tasima", title: "Osmangazi Dar Sokak ve Yoğun Caddelerde Asansörlü Taşıma Rehberi" },
      yildirim: { slug: "yildirim-kiralik-asansor-egimli-arazi-nakliyat", title: "Yıldırım Eğimli Sokaklarda Güvenli Asansör Kurulum Rehberi" },
      mudanya: { slug: "mudanya-kiralik-asansor-guzelyali-nakliyat", title: "Mudanya & Güzelyalı Sahil Hattı Asansörlü Taşımacılık Rehberi" },
      gursu: { slug: "gursu-kiralik-asansor-evden-eve-nakliyat-rehberi", title: "Gürsu Kiralık Asansör ve Evden Eve Nakliyat Rehberi" },
    };
    const blogGuide = districtBlogMap[district.slug];
    const blogLinkHtml = blogGuide
      ? `<li class="sm:col-span-2 pt-1 border-t border-slate-200/60 dark:border-white/10">📖 <a href="/blog/${blogGuide.slug}" class="text-primary font-semibold hover:underline">${blogGuide.title}</a></li>`
      : "";

    const districtEngineeringSpecs: Record<string, string> = {
      mudanya: "Mudanya'nın Güzelyalı, Burgaz ve Bademli bölgelerindeki eğimli sahil sokaklarında ve rüzgar alan cephelerde, aracımızın 4 noktalı hidrolik denge ayakları eğim açısına göre teraziye alınır ve rüzgar sensörü kontrolüyle güvenli taşıma yapılır.",
      nilufer: "Nilüfer'in Özlüce, Balat, Ataevler ve Görükle mahallelerindeki 10-15 katlı modern sitelerde, site otopark giriş yüksekliği ve peyzaj alanı mesafesi dikkate alınarak 45-50 metre teleskopik raylı asansörlerimizle bina asansörünü hiç meşgul etmeden doğrudan balkondan yükleme yapılır.",
      osmangazi: "Osmangazi'nin Hamitler, Yunuseli, Emek ve Dikkaldırım gibi yoğun cadde ve bitişik nizam apartmanlarının bulunduğu sokaklarda, trafiği aksatmayan kompakt şasili mobil asansör araçlarımızla 25-30 dakikada kurulum tamamlanır.",
      yildirim: "Yıldırım'ın Millet, Erikli, Teleferik ve Esenevler mahallelerindeki dar veya yokuşlu sokak yapısına uygun manevra kabiliyeti yüksek araçlarımızla, dar merdiven boşluklarında eşya çizilme riskini tamamen ortadan kaldırıyoruz.",
      gursu: "Gürsu'nun Kurtuluş, Yenidoğan ve Zafer mahallelerindeki yeni konut projelerinde ve çok katlı apartmanlarda hem evden eve nakliyat hem de mobilya, beyaz eşya ve inşaat malzemesi çıkarımı için hızlı saatlik/günlük kurulum sağlıyoruz.",
      inegol: "İnegöl'ün mobilya sevkiyat trafiğine ve Alanyurt/Ertuğrulgazi'deki yüksek katlı site mimarisine uygun geniş sepetli (400 kg kapasiteli) teleskopik asansörlerimizle; büyük koltuk takımları, masif mobilyalar ve ev eşyaları çizilmeden balkondan taşınır.",
      gemlik: "Gemlik merkez, Hisar ve Kumla sahil hattındaki rüzgarlı ve eğimli sokaklarda 4 noktalı hidrolik denge ayaklarımızla tam terazi kurulumu yapıyor; yazlık ve kışlık daire taşımalarını 2-3 saatte tamamlıyoruz.",
      yenisehir: "Yenişehir'deki çok katlı apartmanlarda, TOKİ konutlarında ve dar merdivenli binalarda dış cephe mobil asansörümüzle eşyaları bina içine sokmadan doğrudan balkondan kapalı kasa araçlarımıza aktarıyoruz.",
      orhangazi: "Orhangazi merkez mahallelerinde ve Göl Yolu çevresindeki konut ile iş yerlerinde; ev eşyası, beyaz eşya, cam balkon ve inşaat malzemesi çıkarımı için 25 dakikada güvenli dış cephe kurulumu gerçekleştiriyoruz.",
      "bursa-merkez": "Bursa merkezdeki tarihi ve yoğun yapılaşmalı mahallelerde sokak genişliğine uygun araç seçimiyle 15. kata kadar hasarsız dış cephe erişimi sunuyoruz."
    };
    const engSpecText = districtEngineeringSpecs[district.slug] || "";

    htmlContent += `
      <h2>${district.name} Mahallelerinde Kiralık Asansör ve Evden Eve Nakliyat</h2>
      <p>${hoodText}</p>
      <p>${engSpecText}</p>
      <div class="my-6 overflow-x-auto rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-navy-light">
        <table class="w-full text-left text-xs sm:text-sm my-0">
          <thead class="bg-slate-100 dark:bg-navy text-slate-800 dark:text-slate-200 font-bold">
            <tr>
              <th class="p-3 border-b border-slate-200 dark:border-white/10">${district.name} Kat Aralığı</th>
              <th class="p-3 border-b border-slate-200 dark:border-white/10">Ortalama Kurulum</th>
              <th class="p-3 border-b border-slate-200 dark:border-white/10">Kiralama Seçeneği</th>
              <th class="p-3 border-b border-slate-200 dark:border-white/10">Hizmet Kapsamı</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-white/10">
            <tr>
              <td class="p-3 font-semibold">2. – 6. Kat</td>
              <td class="p-3">20 – 30 Dk</td>
              <td class="p-3">Saatlik / Günlük</td>
              <td class="p-3">Operatör + Kurulum Dahil</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">7. – 11. Kat</td>
              <td class="p-3">30 – 40 Dk</td>
              <td class="p-3">Saatlik / Günlük</td>
              <td class="p-3">Operatör + Kurulum Dahil</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">12. – 15. Kat (45-50m)</td>
              <td class="p-3">40 – 45 Dk</td>
              <td class="p-3">Saatlik / Komple Taşıma</td>
              <td class="p-3">Uzman Operatör + Ücretsiz Keşif</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="my-6 p-5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
        <h3 class="text-base font-bold mb-3">${district.name} Hızlı Hizmet & Fiyat Bağlantıları</h3>
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm list-none pl-0">
          <li>👉 <a href="${district.slug === "bursa-merkez" ? "/" : `/${district.slug}-kiralik-asansor`}" class="text-primary font-semibold hover:underline">${district.name} Kiralık Asansör</a></li>
          <li>👉 <a href="/${district.slug}-saatlik-asansor-kiralama" class="text-primary font-semibold hover:underline">${district.name} Saatlik Asansör Kiralama</a></li>
          <li>👉 <a href="/${district.slug}-kiralik-asansor-fiyatlari" class="text-primary font-semibold hover:underline">${district.name} Kiralık Asansör Fiyatları</a></li>
          <li>👉 <a href="${district.slug === "bursa-merkez" ? "/bursa-evden-eve-nakliyat" : `/${district.slug}-evden-eve-nakliyat`}" class="text-primary font-semibold hover:underline">${district.name} Evden Eve Nakliyat</a></li>
          ${blogLinkHtml}
        </ul>
      </div>
    `;
  }

  const targetedFaqs = district.slug === "mudanya" && service.slug === "evden-eve-nakliyat" ? [
    { q: "Mudanya evden eve nakliyat fiyatları 2026 yılında nasıl hesaplanır?", a: "Taşınacak dairenin veya villanın oda sayısı (1+1, 2+1, 3+1, 4+1), alınacak ve bırakılacak mahalleler (Güzelyalı, Bademli, Halitpaşa, Ömerbey vb.), kat durumu, dış cephe asansörü kurulumu ve marangoz/ambalaj kapsamına göre ücretsiz ekspertiz sonrası net ve sabit fiyat verilir." },
    { q: "Güzelyalı ve Bademli'deki sitelerde dış cephe asansörüyle ev taşıyor musunuz?", a: "Evet. Güzelyalı sahil sitelerinde bina asansörünü kullanmadan 15. kata kadar dış cepheden yükleme yapıyoruz. Bademli ve Çağrışan'daki bahçeli villalarda ise yatay erişimli teleskopik asansörümüzle bahçe duvarı mesafesini aşarak balkon ve teraslara doğrudan ulaşıyoruz." },
    { q: "Mudanya'dan Bursa merkeze (Nilüfer, Osmangazi) veya şehir dışına nakliyat var mı?", a: "Evet. Mudanya içi taşınmaların yanı sıra Mudanya – Nilüfer – Osmangazi – Yıldırım arası ve İstanbul başta olmak üzere şehirler arası sigortalı, marangozlu evden eve nakliyat hizmeti sunuyoruz." },
    { q: "Eşyaların paketlenmesi ve mobilya söküm-kurulumu hizmete dahil mi?", a: "Anahtar teslim Mudanya evden eve nakliyat paketimizde tüm mobilyaların marangozumuz tarafından sökülüp yeni adreste kurulması, beyaz eşya ve koltukların balonlu patpat naylonla ambalajlanması fiyata dahildir." },
  ] : district.slug === "mudanya" && (service.slug === "kiralik-asansor" || service.slug === "saatlik-asansor-kiralama" || service.slug === "kiralik-asansor-fiyatlari") ? [
    { q: "Mudanya'da kiralık asansör kaçıncı kata kadar çıkıyor?", a: "Mudanya ve Güzelyalı'da hizmet veren teleskopik mobil asansör filomuz 2. kattan 15. kata (yaklaşık 45-50 metre yüksekliğe) ve 400 kg sepet kapasitesine kadar güvenli kurulum sağlamaktadır." },
    { q: "Mudanya saatlik asansör kiralama ücretine operatör dahil mi?", a: "Evet. Saatlik veya günlük tüm mobil asansör kiralamalarımızda makineyi kullanan sertifikalı uzman operatörümüz fiyata dahildir; kurulum 20-30 dakikada tamamlanır." },
    { q: "Güzelyalı ve Mudanya sahilinde rüzgarlı (poyraz) havalarda asansör kurulur mu?", a: "Araçlarımızda rüzgar hızı sensörü (anemometre) ve 4 noktalı hidrolik denge ayakları bulunur. Güvenli rüzgar limitleri dahilinde çelik ray sistemi balkona sabitlenerek sarsıntısız taşıma yapılır." },
    { q: "Sadece tek parça koltuk, beyaz eşya, cam balkon veya inşaat malzemesi için asansör çağırabilir miyim?", a: "Kesinlikle evet. Komple ev taşıma dışında merdivenden sığmayan büyük mobilyalar, beyaz eşyalar, cam balkon panelleri, parke, seramik ve çatı/tadilat malzemeleri için saatlik kiralama yapabilirsiniz." },
  ] : district.slug === "yildirim" && service.slug === "evden-eve-nakliyat" ? [
    { q: "Yıldırım evden eve nakliyat fiyatı nasıl belirlenir?", a: "Eşya miktarı, iki adres arasındaki mesafe, katlar, erişim koşulları ve istenen taşıma hizmetleri değerlendirilir. Bu bilgileri paylaşarak adrese özel teklif isteyin." },
    { q: "Yıldırım'da ev taşıma teklifi için hangi bilgileri göndermeliyim?", a: "Alınacak ve bırakılacak adresleri, katları, taşınma tarihini ve eşya listesini veya fotoğraflarını paylaşın. Asansör gerekiyorsa bina cephesi ve aracın duracağı alanın fotoğrafı uygunluk değerlendirmesine yardımcı olur." },
    { q: "Evden eve nakliyat ile asansör kiralama aynı hizmet mi?", a: "Hayır. Asansör kiralama dış cepheden eşya taşıma ekipmanını ve operatörü kapsar. Komple ev taşıma için araç, taşıma personeli ve diğer ihtiyaçlar ayrıca planlanıp fiyatlandırılır." },
  ] : district.slug === "nilufer" && hasDistrictSearchContent ? service.slug === "kiralik-asansor-fiyatlari" ? [
    { q: "Nilüfer kiralık asansör fiyatı neden sitede yazmıyor?", a: "Ücret mesafeye, çalışma süresine ve kata göre değişir. Ücretsiz ekspertiz/keşif sonrası işinize özel teklif veriyoruz." },
    { q: "Operatör ve taşıma ekibi fiyata dahil mi?", a: "Operatör asansör kiralamasına dahildir. İhtiyaca göre yükleme/taşıma personeli ve nakliye aracı da sağlayabiliriz." },
    { q: "Saatlik ve günlük kiralama var mı?", a: "Evet. Mobil asansör saatlik veya günlük kiralanabilir. Evden eve taşıma için taşınmanın kapsamına göre ayrıca fiyat veriyoruz." },
  ] : service.slug === "evden-eve-nakliyat" ? [
    { q: "Nilüfer evden eve nakliyat fiyatı neye göre belirlenir?", a: "Mesafe, taşınmanın tahmini süresi, katlar ve taşınma kapsamı değerlendirilir. Fiyat öncesi ücretsiz ekspertiz/keşif yapıyoruz." },
    { q: "Ekspertiz ve keşif ücretli mi?", a: "Hayır. Nilüfer’de fiyat teklifi hazırlamak için ekspertiz ve keşif ücretsizdir." },
    { q: "Taşıma personeli ve nakliye aracı sağlıyor musunuz?", a: "Evet. Taşınma ihtiyacınıza göre yükleme/taşıma personeli ve nakliye aracı sağlayabiliyoruz." },
  ] : [
    { q: "Nilüfer’de asansör saatlik ve günlük kiralanıyor mu?", a: "Evet. Saatlik ve günlük kiralama seçeneklerimiz var; operatör kiralamaya dahildir." },
    { q: "Nilüfer kiralık asansör fiyatı nasıl belirlenir?", a: "Ücret mesafe, çalışma süresi ve kata göre değişir. Ücretsiz ekspertiz/keşif sonrası size özel teklif sunuyoruz." },
    { q: "Taşıma personeli ve araç da sağlayabilir misiniz?", a: "İhtiyaca göre yükleme/taşıma personeli ve nakliye aracı da sağlayabiliyoruz. Evden eve taşıma için ayrıca, taşınmanın kapsamına göre fiyat veriyoruz." },
  ] : !hasDistrictSearchContent ? service.faqs : service.slug === "kiralik-asansor-fiyatlari" ? [
    { q: `${district.name} kiralık asansör fiyatı neye göre hesaplanır?`, a: "Konum, kat, cephe ve kurulum koşulları, yükün türü ve miktarı ile kullanım süresi değerlendirilir." },
    { q: "Fiyat teklifi için hangi bilgileri paylaşmalıyım?", a: "Mahalle veya adres, kat, yük bilgisi, tahmini süre ve talep edilen tarihi iletin. Cephe fotoğrafı ön değerlendirmeyi kolaylaştırır." },
    { q: "Saatlik asansör kiralama seçeneği var mı?", a: "İşin kapsamını ve tahmini süreyi iletip saatlik veya farklı kullanım seçeneklerinin uygunluğunu sorun." },
  ] : service.slug === "evden-eve-nakliyat" ? [
    { q: `${district.name} evden eve nakliyat fiyatı neye göre belirlenir?`, a: "Eşya miktarı, iki adresin mesafesi, katlar, erişim koşulları, paketleme ve montaj ihtiyaçları birlikte değerlendirilir." },
    { q: "Teklif almak için hangi bilgileri paylaşmalıyım?", a: "Alınacak ve bırakılacak adresleri, katları, eşya listesini veya fotoğraflarını ve taşınma tarihini paylaşın." },
    { q: "Ev taşımada dış cephe asansörü kullanılabilir mi?", a: "Cephe erişimi, aracın duracağı alan ve çevredeki engeller uygunsa değerlendirilebilir. Uygunluk adres bazında teyit edilir." },
  ] : service.slug === "evden-eve-asansorlu-nakliyat" ? [
    { q: "Asansörlü nakliyat her binada yapılabilir mi?", a: "Hayır. Binanın cephesi, aracın kurulum alanı, balkon veya pencere erişimi ve çevredeki engeller önceden değerlendirilir." },
    { q: "Fiyat teklifi için ne göndermeliyim?", a: "Mahalle veya adres, kat, taşınacak yükün türü ve miktarı, tarih ve cephe/sokak fotoğrafı paylaşın." },
    { q: "Asansörlü nakliyat komple ev taşıma mıdır?", a: "Her zaman değil. Mobil asansör kullanımı ayrı bir hizmet olabilir; araç ve taşıma personeli ihtiyacınızı teklif talebinde belirtin." },
  ] : service.slug === "saatlik-asansor-kiralama" ? [
    { q: "Saatlik kiralama süresi ve ücreti nasıl belirlenir?", a: "Tahmini çalışma süresi ve işin kapsamı paylaşılınca fiyat ve minimum süre bilgisi verilir." },
    { q: "Saatlik asansör her adreste kurulabilir mi?", a: "Hayır. Aracın duracağı alan, cephe erişimi ve çevredeki engeller kontrol edilir." },
    { q: "Teklif için hangi bilgileri paylaşmalıyım?", a: "Konum, kat, yük türü ve miktarı, tahmini süre, tarih ve varsa cephe fotoğrafını iletin." },
  ] : [
    { q: "Mobil asansör her binaya kurulabilir mi?", a: "Hayır. Binanın cephesine erişim, aracın durabileceği alan ve çevredeki engeller kontrol edilmelidir." },
    { q: "Kiralık asansör fiyatı için hangi bilgiler gerekli?", a: "Adres veya mahalle, kat, yükün türü ve miktarı, tahmini kullanım süresi ve planlanan tarih fiyat değerlendirmesine yardımcı olur." },
    { q: "Teklif almak için cephe fotoğrafı gönderebilir miyim?", a: "Evet. Sokak ve bina cephesinin güncel fotoğrafı kurulum uygunluğunu önceden değerlendirmeye yardımcı olur." },
  ];

  // İlçe içi çapraz otorite akışı (Ana buton kendi sitemizdeki tamamlayıcı hizmet sayfasına gider)
  const isNakliyat = service.slug.includes("nakliyat") || service.slug.includes("tasima") || service.slug.includes("ev-tasima");
  const internalCrossHref = isNakliyat
    ? (district.slug === "bursa-merkez" ? "/" : `/${district.slug}-kiralik-asansor`)
    : (district.slug === "bursa-merkez" ? "/bursa-evden-eve-nakliyat" : `/${district.slug}-evden-eve-nakliyat`);

  const internalCrossLabel = isNakliyat
    ? `${district.name} Kiralık Asansör & Saatlik Kiralama`
    : `${district.name} Evden Eve Nakliyat & Ev Taşıma`;

  const vipBadge = isNakliyat
    ? `${district.name} 15. Kata Kadar Mobil Asansör Parkuru`
    : `${district.name} Anahtar Teslim Ev Taşıma Çözümü`;

  const vipTitle = isNakliyat
    ? `${district.name} Kiralık Asansör & Saatlik Dış Cephe Kurulumu`
    : `${district.name} Evden Eve Nakliyat & Sigortalı Komple Taşıma`;

  const vipDescription = isNakliyat
    ? `${district.name} bölgesinde komple nakliyat dışında yalnızca saatlik veya günlük operatörlü dış cephe asansörü kiralamak istiyorsanız, 15. kata (45-50m) ulaşan kendi araç filomuzla 25 dakikada yanınızdayız.`
    : `${district.name} bölgesinde sadece mobil asansör değil; kapalı çelik kasa kamyon, birinci sınıf balonlu ambalajlama ve marangozlu demontaj/montaj dahil anahtar teslim ev taşıma hizmetimizle yanınızdayız.`;

  return (
    <>
      {/* Breadcrumb strip — Silo PageRank Aktarımı: Tali sayfadan doğrudan ana ilçe otorite sayfasına akış */}
      <nav aria-label="Konum" className="bg-gray-100 dark:bg-navy border-b border-gray-300 dark:border-white/10 px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 text-sm text-gray-600 dark:text-slate-400">
          <Link href="/" className="hover:text-primary underline underline-offset-2 transition-colors">{t('nav.home', 'Ana Sayfa')}</Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          {service.slug === 'kiralik-asansor' ? (
            <span className="text-gray-900 dark:text-white font-semibold">{district.name} Kiralık Asansör</span>
          ) : (
            <Link 
              href={`/${district.slug}-kiralik-asansor`} 
              className="hover:text-primary underline underline-offset-2 font-medium transition-colors"
              title={`${district.name} Kiralık Asansör Ana Sayfası`}
            >
              {district.name} Kiralık Asansör
            </Link>
          )}
          {service.slug !== 'kiralik-asansor' && (
            <>
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
              <span className="text-gray-900 dark:text-white font-semibold" aria-current="page">{serviceName}</span>
            </>
          )}
        </div>
      </nav>

      {/* Page Hero */}
      <div className="bg-[#071320] py-12 md:py-16 border-b-4 border-primary/40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/service-abstract.webp"
            alt={`${district.name} ${serviceName} - Bursa Kiralık Asansör`}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white leading-tight mb-4">
            {district.name} <span className="text-primary">{service.slug === 'kiralik-asansor' ? 'Kiralık Asansör' : serviceName}</span>
            <span className="block text-2xl sm:text-3xl font-semibold text-slate-300 mt-2 leading-snug">{neighborhoodStr} ve çevresi</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-slate-200 leading-relaxed max-w-2xl mb-8">
            {service.slug === 'kiralik-asansor' 
              ? `${district.name} için mobil dış cephe asansörü kiralama. Kurulum uygunluğu; adres, bina cephesi, kat ve taşınacak yüke göre değerlendirilir.`
              : serviceShortDesc}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 max-w-lg">
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} 
              onClick={() => trackPhoneClick(`${district.name} Hero`)}
              className="flex-1 bg-primary hover:bg-orange-600 focus:ring-4 focus:ring-primary/50 focus:outline-none text-white font-extrabold text-lg px-6 py-4 rounded-2xl flex items-center justify-center gap-3 transition-colors shadow-xl"
            >
              <Phone className="w-6 h-6" /> {t('common.call_now', 'Hemen Ara')}
            </a>
            <a 
              href={`https://wa.me/905056080700?text=${encodeURIComponent(`Merhaba, ${district.name} bölgesinde kiralık asansör / nakliyat hizmeti hakkında fiyat ve uygunluk bilgisi almak istiyorum.`)}`} 
              onClick={() => trackWhatsAppClick(`${district.name} Hero`)}
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 bg-green-600 hover:bg-green-500 focus:ring-4 focus:ring-green-500/50 focus:outline-none text-white font-extrabold text-lg px-6 py-4 rounded-2xl flex items-center justify-center gap-3 transition-colors shadow-xl"
            >
              <MessageCircle className="w-6 h-6" /> {t('common.whatsapp_message', 'WhatsApp')}
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* AI & Quick Contact Visibility Row */}
      <div className="bg-gray-50 dark:bg-navy-dark border-b border-gray-200 dark:border-white/5 py-4 px-4 sm:px-6 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 text-center md:text-left">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-bold text-gray-600 dark:text-slate-400 uppercase tracking-wider">{district.name} Hizmet Hattı</span>
          </div>
          <p className="text-xl sm:text-2xl font-display font-black text-secondary dark:text-white flex items-center gap-3">
            <Phone className="w-6 h-6 text-primary" />
            <a href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} className="hover:text-primary transition-colors">
              0505 608 07 00
            </a>
          </p>
          <div className="hidden md:block h-6 w-px bg-gray-300 dark:bg-white/10" />
          <p className="text-base font-semibold text-primary">
            {hasDistrictSearchContent ? "Uygunluk ve fiyat bilgisi için arayın" : "Hemen Ara, 5 Dakikada Fiyat Al!"}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main Content Column */}
          <div className="lg:col-span-2">
            <h2 className="sr-only">Hizmet Özellikleri</h2>
            <FeaturesBar />

            {/* Prose content */}
            <div className="prose prose-lg max-w-none mb-12 text-[#334155] dark:text-slate-300 prose-headings:text-[#0f172a] dark:prose-headings:text-white prose-strong:text-[#0f172a] dark:prose-strong:text-white prose-a:text-primary hover:prose-a:text-orange-600">
              <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>

            {hasDistrictSearchContent && (
              <nav aria-label={`${district.name} hizmet bağlantıları`} className="mb-12 rounded-2xl border border-gray-200 dark:border-white/10 p-5">
                <h2 className="text-lg font-bold mb-3">{district.name} için hizmet seçenekleri</h2>
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  {service.slug !== "evden-eve-nakliyat" && <li><Link className="text-primary underline underline-offset-4" href={`/${district.slug}-evden-eve-nakliyat`}>{district.name} evden eve nakliyat</Link></li>}
                  {!["mudanya", "inegol", "gemlik"].includes(district.slug) && service.slug !== "evden-eve-asansorlu-nakliyat" && <li><Link className="text-primary underline underline-offset-4" href={`/${district.slug}-evden-eve-asansorlu-nakliyat`}>{district.name} asansörlü nakliyat</Link></li>}
                  {service.slug !== "saatlik-asansor-kiralama" && <li><Link className="text-primary underline underline-offset-4" href={`/${district.slug}-saatlik-asansor-kiralama`}>{district.name} saatlik asansör kiralama</Link></li>}
                  {service.slug !== "kiralik-asansor" && <li><Link className="text-primary underline underline-offset-4" href={`/${district.slug}-kiralik-asansor`}>{district.name} kiralık asansör</Link></li>}
                  {service.slug !== "kiralik-asansor-fiyatlari" && <li><Link className="text-primary underline underline-offset-4" href={`/${district.slug}-kiralik-asansor-fiyatlari`}>{district.name} kiralık asansör fiyatları</Link></li>}
                </ul>
              </nav>
            )}

            {/* Dynamic Local Content */}
            {service.slug === "kiralik-asansor" && district.localNote && (
              <div className="bg-[#eff6ff] dark:bg-[#1e3a5f]/40 border border-[#bfdbfe] dark:border-[#1e3a5f] rounded-2xl p-6 mb-12 flex flex-col sm:flex-row gap-5 items-start">
                <div className="h-12 w-12 shrink-0 bg-[#dbeafe] dark:bg-[#1e3a5f] rounded-full flex items-center justify-center text-[#2563eb] dark:text-[#60a5fa]">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1e293b] dark:text-white mb-2">{district.name} Bölgesine Özel Not</h3>
                  <p className="text-[#334155] dark:text-slate-200 leading-relaxed font-medium">{t(`districts.${district.slug}.localNote`, district.localNote)}</p>
                </div>
              </div>
            )}

            {/* District Specific Context (SEO) */}
            {service.slug === "kiralik-asansor" && district.seoParagraph && (
              <div className="mb-12 p-6 md:p-8 bg-[#fff7ed] dark:bg-[#1e293b] border-l-4 border-primary rounded-r-2xl shadow-sm">
                <h3 className="text-xl md:text-2xl font-display font-bold text-[#0f172a] dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-primary">{district.name}</span> <span className="text-[#0f172a] dark:text-white">{t('service_page.special_solutions', 'Bölgesine Özel Çözümler')}</span>
                </h3>
                <p className="text-[#334155] dark:text-slate-300 leading-relaxed text-lg">{district.seoParagraph}</p>
              </div>
            )}

            {/* İlçe İçi Çapraz Hizmet & Kardeş Marka Kartı */}
            <section className="mb-14 p-6 md:p-8 bg-gradient-to-br from-slate-900 via-slate-900 to-[#071320] text-white border-2 border-primary/30 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <ShieldCheck className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider border border-primary/30">
                    <ShieldCheck className="w-4 h-4" />
                    {vipBadge}
                  </div>
                  <span className="text-xs font-semibold text-slate-300">
                    Ortak Çağrı Hattı: <a href="tel:05056080700" className="text-white hover:text-primary font-bold">0505 608 07 00</a>
                  </span>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
                  {vipTitle}
                </h3>
                
                <p className="text-slate-200 leading-relaxed mb-6 text-sm sm:text-base">
                  {vipDescription}{' '}
                  {district.name} bölgesinde anahtar teslim VIP taşınma ayrıcalığı için uzman ekibimizle profesyonel nakliyat hizmetlerimizi tercih edebilirsiniz.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
                  <Link
                    href={internalCrossHref}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-orange-600 text-white font-extrabold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-primary/20 text-sm"
                  >
                    <span>{internalCrossLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://www.bursavipevdeneve.com"
                    target="_blank"
                    rel="noopener"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3.5 rounded-xl transition-all border border-white/10 text-sm"
                  >
                    <span>Bursa VIP Nakliyat Resmi Sitesi</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>

            {/* Neighborhoods Context Box (SEO Otoritesi) */}
            <section className="mb-14 p-6 md:p-8 bg-[#f8fafc] dark:bg-[#0f172a] border-2 border-dashed border-[#cbd5e1] dark:border-[#334155] rounded-2xl shadow-sm">
              <h2 className="text-xl md:text-2xl font-display font-bold text-[#0f172a] dark:text-white mb-3 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                {district.name} Asansör Kiralama ve Nakliyat Mahallelerimiz
              </h2>
              <p className="text-[#334155] dark:text-slate-300 leading-relaxed mb-5">
                {hasDistrictSearchContent
                  ? `${district.name} için hizmet talebi bu mahallelerden alınabilir. Asansörün adrese kurulup kurulamayacağı; cepheye erişim, aracın durabileceği alan, kat ve yük bilgisine göre teyit edilir.`
                  : `${district.name} ve çevresindeki adresler için kiralama talebi oluşturabilirsiniz. Kurulum uygunluğu adres ve bina koşulları incelendikten sonra netleştirilir.`}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                {district.neighborhoods.map((n) => (
                  <div key={n} className="flex items-center gap-2 p-2.5 bg-white dark:bg-navy border border-gray-200 dark:border-white/10 rounded-xl text-xs sm:text-sm font-semibold text-gray-800 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="truncate">{district.name} {n}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#334155] dark:text-slate-300 leading-relaxed mt-5 italic text-sm border-t border-gray-200 dark:border-white/10 pt-4">
                Teklif için mahalle veya konum, kat sayısı, taşınacak eşyanın türü ve planlanan tarih bilgilerini paylaşın. Cephe ya da sokak fotoğrafı ön değerlendirmeye yardımcı olur.
              </p>
            </section>

            {/* Local Perspective */}
            <section className="mb-14 p-6 md:p-10 bg-secondary dark:bg-navy-light rounded-[2rem] text-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 p-8 opacity-10"><CheckCircle2 className="w-32 h-32" /></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold mb-6">
                  {t('service_page.why_us', 'Neden', { district: district.name })} {district.name}&apos;de {t('service_page.why_us_suffix', 'Bizimle Çalışmalısınız?')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {USPS.map((usp, idx) => {
                    const Icon = { Truck, UserCheck, Zap, Building2 }[usp.icon] || MapPin;
                    return (
                      <div key={idx} className="flex gap-4 items-start bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="p-2 bg-primary/20 rounded-lg text-primary">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">{usp.title}</h4>
                          <p className="text-sm text-gray-200 dark:text-slate-300 leading-relaxed">{usp.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Service Rules */}
            <section className="mb-14">
              <h2 className="text-2xl font-display font-bold text-[#0f172a] dark:text-white mb-5 pb-3 border-b-2 border-gray-200 dark:border-white/10">{t('service_page.service_rules', 'Hizmet Kurallarımız')}</h2>
              <ul className="space-y-4">
                  {(hasDistrictSearchContent ? [
                    { title: "Adres ve kurulum uygunluğu", desc: "Bina cephesi, aracın duracağı alan ve çevredeki engeller önceden değerlendirilir." },
                    { title: "Kat ve yük bilgisi", desc: "Kat, eşyanın türü ve yaklaşık ölçüleri uygun ekipman ve teklif değerlendirmesine yardımcı olur." },
                    { title: "Randevu planı", desc: "Talep edilen tarih ve tahmini çalışma süresini paylaşarak müsaitlik bilgisi alın." },
                  ] : [
                    { title: t('features.f1_title', "Asansör uygunluğu"), desc: t('features.f1_desc', "Kurulum imkânı adres, cephe ve çalışma alanı incelendikten sonra teyit edilir.") },
                    { title: "Operatörlü kullanım", desc: "Kiralama ve operatör kapsamını teklif sırasında netleştirin." },
                    { title: "Kurulum alanı", desc: "Sokak erişimi, araç konumu ve çevredeki engeller kurulum kararını etkiler." },
                  ]).map(r => (
                    <li key={r.title} className="flex items-start gap-4 p-5 bg-[#f8fafc] dark:bg-[#1e293b] border-2 border-[#cbd5e1] dark:border-[#334155] rounded-2xl">
                      <CheckCircle2 className="w-7 h-7 text-primary shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-[#0f172a] dark:text-white text-base mb-1">{r.title}</div>
                        <div className="text-[#334155] dark:text-slate-300">{r.desc}</div>
                      </div>
                    </li>
                  ))}
              </ul>
            </section>

            {/* FAQs */}
            <section className="mb-14">
              <h2 className="text-2xl font-display font-bold text-[#0f172a] dark:text-white mb-5 pb-3 border-b-2 border-[#e2e8f0] dark:border-white/10">{t('common.faq', 'Sıkça Sorulan Sorular')}</h2>
              <div className="space-y-4">
                {targetedFaqs.map((faq, idx) => {
                  const q = hasDistrictSearchContent ? faq.q : t(`services.${service.slug}.faqs.${idx}.q`, faq.q);
                  const a = hasDistrictSearchContent ? faq.a : t(`services.${service.slug}.faqs.${idx}.a`, faq.a);
                  return (
                    <div key={idx} className="bg-[#f8fafc] dark:bg-[#1e293b] border-2 border-[#cbd5e1] dark:border-[#334155] rounded-2xl p-6">
                      <h3 className="text-base font-bold text-[#0f172a] dark:text-white mb-2">{q}</h3>
                      <p className="text-[#334155] dark:text-slate-300 leading-relaxed">{a}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            
            {/* Testimonials (Review Schema Sinyalini Doğrulamak İçin) */}
            <section className="mb-14">
              <Testimonials />
            </section>

            {/* Bottom CTA */}
            <div className="bg-gradient-to-br from-navy to-secondary rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl mb-12">
              <div className="relative z-10">
                <h2 className="text-3xl font-display font-bold text-white mb-4">{t('cta.title', 'Hemen Fiyat Alın')}</h2>
                <p className="text-slate-200 mb-8 max-w-xl mx-auto">{district.name} {t('cta.district_desc', 'bölgesindeki asansör talepleriniz için 5 dakika içinde net fiyat ve araç durum bilgisi alın.')}</p>
                <CTASection className="justify-center max-w-2xl mx-auto" locationName={`${district.name} Bottom`} />
              </div>
            </div>

            {/* Ninja SEO: Geo-Targeted Neighbor Graph */}
            <section className="mt-8 pt-8 border-t border-gray-200 dark:border-white/10">
              <h3 className="text-xl font-display font-bold text-[#0f172a] dark:text-white mb-6 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                {district.name} {t('service_page.nearby_locations', 'Yakınındaki Diğer Hizmet Noktalarımız')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {DISTRICTS
                  .filter(d => d.slug !== district.slug && ["mudanya", "nilufer", "osmangazi", "yildirim", "gursu", "gemlik"].includes(d.slug))
                  .map(d => ({
                    ...d,
                    distance: Math.sqrt(Math.pow(d.latitude - district.latitude, 2) + Math.pow(d.longitude - district.longitude, 2))
                  }))
                  .sort((a, b) => a.distance - b.distance)
                  .slice(0, 4)
                  .map(neighbor => (
                    <Link 
                      key={neighbor.slug} 
                      href={`/${neighbor.slug}-${service.slug}`}
                      className="group p-4 bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/10 rounded-2xl hover:border-primary dark:hover:border-primary transition-all shadow-sm flex items-center justify-between"
                    >
                      <div>
                        <div className="font-bold text-[#0f172a] dark:text-white group-hover:text-primary transition-colors">{neighbor.name}</div>
                        <div className="text-sm text-gray-500 dark:text-slate-400">{serviceName}</div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))
                }
              </div>
            </section>

            {/* Ninja SEO: Map Entity Stacking (Google Iframe Hack) */}
            <section className="mt-8 pt-8 border-t border-gray-200 dark:border-white/10">
              <h3 className="text-xl font-display font-bold text-[#0f172a] dark:text-white mb-6 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                {district.name} {serviceName} Haritası
              </h3>
              <div className="w-full h-[400px] rounded-2xl overflow-hidden border-4 border-[#e2e8f0] dark:border-[#334155] shadow-lg">
                <iframe
                  title={`${district.name} ${serviceName} Haritası`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(district.name + " " + serviceName)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                ></iframe>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="sticky top-24 bg-[#071320] rounded-2xl p-6 border-2 border-primary/30 shadow-2xl">
              <h3 className="font-display font-bold text-lg text-white mb-1">{t('common.quick_contact', 'Hızlı İletişim')}</h3>
              <p className="text-slate-300 text-sm mb-5">{district.name} {t('common.quick_contact_desc', 'bölgesinde uygun fiyata profesyonel hizmet.')}</p>
              <div className="space-y-3">
                <a 
                  href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} 
                  onClick={() => trackPhoneClick(`${district.name} Sidebar`)}
                  className="w-full bg-primary hover:bg-orange-600 focus:ring-4 focus:ring-primary/40 focus:outline-none text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors text-base"
                >
                  <Phone className="w-5 h-5" /> {PHONE_NUMBER}
                </a>
                <a 
                  href={WHATSAPP_LINK} 
                  onClick={() => trackWhatsAppClick(`${district.name} Sidebar`)}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full bg-green-600 hover:bg-green-500 focus:ring-4 focus:ring-green-500/40 focus:outline-none text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors text-base"
                >
                  <MessageCircle className="w-5 h-5" /> {t('common.whatsapp_message_short', "WhatsApp'tan Yaz")}
                </a>
              </div>
              <div className="mt-5 text-center text-xs text-slate-500 border-t border-white/10 pt-4">{t('common.fast_pricing_info', '5 dakika içinde net fiyat ve araç durum bilgisi')}</div>
            </div>

            <div className="bg-white dark:bg-navy-light rounded-2xl p-5 border-2 border-gray-200 dark:border-white/10">
              <h3 className="font-display font-bold text-base text-gray-900 dark:text-white mb-4 pb-3 border-b-2 border-gray-200 dark:border-white/10">{district.name} {t('service_page.other_services', 'Diğer Hizmetler')}</h3>
              <ul className="space-y-2">
                {SERVICES.filter(s => s.slug !== service.slug && (
                  ["kiralik-asansor", "saatlik-asansor-kiralama", "kiralik-asansor-fiyatlari", "evden-eve-nakliyat", "dis-cephe-esya-asansoru", "mobilya-tasima-asansoru"].includes(s.slug) ||
                  (district.slug === "bursa-merkez" && ["insaat-malzemesi-tasima-asansoru", "moloz-indirme-asansoru", "cam-ve-pencere-tasima-asansoru", "beyaz-esya-tasima-asansoru", "ofis-tasimaciligi", "parca-esya-tasima"].includes(s.slug))
                )).map(s => (
                  <li key={s.slug}>
                    <Link href={`/${district.slug}-${s.slug}`} className="flex items-center justify-between group py-1.5 text-gray-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium">
                      <span className="truncate pr-4">{t(`services.${s.slug}.name`, s.name)}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-navy-light rounded-2xl p-5 border-2 border-gray-200 dark:border-white/10">
              <h3 className="font-display font-bold text-base text-gray-900 dark:text-white mb-4 pb-3 border-b-2 border-gray-200 dark:border-white/10">{t('service_page.nearby_districts', 'Öncelikli Hizmet İlçelerimiz')}</h3>
              <div className="flex flex-wrap gap-2">
                {DISTRICTS.filter(d => d.slug !== district.slug && ["mudanya", "nilufer", "osmangazi", "yildirim", "gursu", "gemlik"].includes(d.slug)).map(d => (
                  <Link key={d.slug} href={`/${d.slug}-${service.slug}`} className="inline-block px-3 py-1.5 bg-gray-50 dark:bg-navy border-2 border-gray-200 dark:border-white/10 hover:bg-primary hover:border-primary text-xs font-semibold rounded-lg text-gray-700 dark:text-slate-300 hover:text-white transition-colors">{d.name}</Link>
                ))}
                <Link href="/" className="inline-block px-3 py-1.5 bg-primary/10 border-2 border-primary/30 text-xs font-semibold rounded-lg text-primary hover:bg-primary hover:text-white transition-colors">{t('common.view_all', 'Ana Sayfa')}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function PageNotFound404({}: { slug: string }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-24 text-center">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
        <AlertTriangle className="w-10 h-10 text-primary" />
      </div>
      <h1 className="text-5xl font-display font-black text-secondary dark:text-white mb-4">404</h1>
      <p className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2">Sayfa Bulunamadı</p>
      <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md">Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
      <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-orange-600 transition-colors">Ana Sayfaya Dön</Link>
    </div>
  );
}
