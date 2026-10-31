// Angaben pro Gemeinde. Neue Gemeinde = neuer Eintrag nach dem gleichen Muster.
// Texte: entweder ein einfacher Text (gilt für alle Sprachen, z.B. Eigennamen)
// oder { de: "...", en: "...", ... }. Fehlt eine Sprache, wird Deutsch angezeigt.
// Alle Angaben vor dem Veröffentlichen prüfen (Stand: Oktober 2026).
const GEMEINDEN = {
  winterthur: {
    name: "Winterthur",
    kanton: "Zürich",
    plz: ["8400", "8401", "8402", "8403", "8404", "8405", "8406", "8408", "8409", "8410", "8411"],
    mitmachen: [
      {
        icon: "🎟️",
        titel: "KulturLegi Kanton Zürich",
        text: {
          de: "30–70 % Rabatt auf Sport, Kurse und Kultur. Kostet CHF 30, beantragen beim Sozialdienst oder bei Caritas Zürich.",
          en: "30–70% off sport, courses and culture. Costs CHF 30; apply at social services or at Caritas Zürich.",
          pt: "30–70 % de desconto em desporto, cursos e cultura. Custa CHF 30; pedir nos serviços sociais ou na Caritas Zürich.",
          sq: "30–70 % zbritje për sport, kurse dhe kulturë. Kushton CHF 30; aplikoni te shërbimi social ose te Caritas Zürich.",
          tr: "Spor, kurs ve kültürde %30–70 indirim. Ücreti CHF 30; sosyal hizmetlere veya Caritas Zürich'e başvurun.",
          ar: "خصم 30–70 % على الرياضة والدورات والثقافة. السعر 30 فرنكًا، ويُطلب من الخدمات الاجتماعية أو من Caritas Zürich.",
          ti: "ካብ 30–70 % ቅናሽ ኣብ ስፖርት፡ ኮርሳትን ባህልን። ዋጋኡ CHF 30፤ ኣብ ማሕበራዊ ኣገልግሎት ወይ ኣብ Caritas Zürich ሕተቱ።"
        },
        link: "https://www.kulturlegi.ch/zuerich/ueber-uns/kulturlegi-kanton-zuerich"
      },
      {
        icon: "🛹",
        titel: {
          de: "Jugendhaus & Quartiertreffs",
          en: "Youth house & neighbourhood centres",
          pt: "Casa da juventude e centros de bairro",
          sq: "Shtëpia e të rinjve dhe qendrat e lagjeve",
          tr: "Gençlik evi ve mahalle merkezleri",
          ar: "بيت الشباب ومراكز الأحياء",
          ti: "ገዛ መንእሰያትን ማእከላት ከባቢን"
        },
        text: {
          de: "Offene Jugendarbeit: Jugendhaus Winterthur, Treffs in Seen, Töss, Wülflingen und Gleis 1B in Oberwinterthur – gratis.",
          en: "Open youth work: Jugendhaus Winterthur, centres in Seen, Töss, Wülflingen and Gleis 1B in Oberwinterthur – free.",
          pt: "Trabalho juvenil aberto: Jugendhaus Winterthur, centros em Seen, Töss, Wülflingen e Gleis 1B em Oberwinterthur – gratuito.",
          sq: "Punë e hapur rinore: Jugendhaus Winterthur, qendra në Seen, Töss, Wülflingen dhe Gleis 1B në Oberwinterthur – falas.",
          tr: "Açık gençlik çalışması: Jugendhaus Winterthur, Seen, Töss, Wülflingen ve Oberwinterthur'daki Gleis 1B merkezleri – ücretsiz.",
          ar: "عمل شبابي مفتوح: Jugendhaus Winterthur ومراكز في Seen وTöss وWülflingen وGleis 1B في Oberwinterthur – مجانًا.",
          ti: "ክፉት ስራሕ መንእሰያት፦ Jugendhaus Winterthur፡ ማእከላት ኣብ Seen፡ Töss፡ Wülflingen ከምኡ'ውን Gleis 1B ኣብ Oberwinterthur – ብነጻ።"
        }
      },
      {
        icon: "☀️",
        titel: {
          de: "Ferienbetreuung der Stadt",
          en: "City holiday childcare",
          pt: "Acolhimento de férias da cidade",
          sq: "Kujdesi gjatë pushimeve nga qyteti",
          tr: "Belediyenin tatil bakımı",
          ar: "رعاية الأطفال في العطلات من المدينة",
          ti: "ክንክን ዕረፍቲ ናይ ከተማ"
        },
        text: {
          de: "Betreuung und Programm in den Schulferien. Tel. 052 267 41 56.",
          en: "Care and activities during school holidays. Tel. 052 267 41 56.",
          pt: "Acolhimento e atividades nas férias escolares. Tel. 052 267 41 56.",
          sq: "Kujdes dhe program gjatë pushimeve shkollore. Tel. 052 267 41 56.",
          tr: "Okul tatillerinde bakım ve etkinlikler. Tel. 052 267 41 56.",
          ar: "رعاية وبرنامج أنشطة خلال العطل المدرسية. هاتف 052 267 41 56.",
          ti: "ክንክንን መደብ ንጥፈታትን ኣብ ዕረፍቲ ቤት ትምህርቲ። ተሌ. 052 267 41 56።"
        },
        link: "https://stadt.winterthur.ch/themen/schule-familie/kinderbetreuung-unterstuetzung/ferienbetreuung",
        tel: "0522674156"
      },
      {
        icon: "🦋",
        titel: { de: "Museen", en: "Museums", pt: "Museus", sq: "Muzetë", tr: "Müzeler", ar: "المتاحف", ti: "ቤተ-መዘክራት" },
        text: {
          de: "Im Naturmuseum Winterthur haben Kinder bis 16 Jahre freien Eintritt.",
          en: "Children up to 16 get free entry to the Naturmuseum Winterthur.",
          pt: "No Naturmuseum Winterthur, crianças até aos 16 anos entram gratuitamente.",
          sq: "Në Naturmuseum Winterthur fëmijët deri në 16 vjeç hyjnë falas.",
          tr: "Naturmuseum Winterthur'a 16 yaşına kadar çocukların girişi ücretsizdir.",
          ar: "الدخول مجاني للأطفال حتى سن 16 في Naturmuseum Winterthur.",
          ti: "ኣብ Naturmuseum Winterthur ቆልዑ ክሳብ 16 ዓመት ብነጻ ይኣትዉ።"
        }
      },
      {
        icon: "🎵",
        titel: {
          de: "Musikschule & Konservatorium",
          en: "Music school & conservatory",
          pt: "Escola de música e conservatório",
          sq: "Shkolla e muzikës dhe konservatori",
          tr: "Müzik okulu ve konservatuvar",
          ar: "مدرسة الموسيقى والمعهد الموسيقي",
          ti: "ቤት ትምህርቲ ሙዚቃን ኮንሰርቫቶሪን"
        },
        text: {
          de: "Fragen Sie im Sekretariat nach einer Ermässigung des Schulgelds.",
          en: "Ask the office about a reduction in fees.",
          pt: "Pergunte na secretaria por uma redução da propina.",
          sq: "Pyesni në sekretari për një zbritje të tarifës.",
          tr: "Sekreterlikten ücret indirimi isteyin.",
          ar: "اسألوا في السكرتارية عن تخفيض الرسوم.",
          ti: "ኣብ ቤት ጽሕፈት ቅናሽ ክፍሊት ሕተቱ።"
        }
      },
      {
        icon: "📄",
        titel: "Kinderthur",
        text: {
          de: "Übersicht aller Freizeitangebote für Kinder und Familien in Winterthur – drinnen, draussen und Kurse.",
          en: "Overview of all leisure activities for children and families in Winterthur – indoors, outdoors and courses.",
          pt: "Visão geral de todas as atividades de tempos livres para crianças e famílias em Winterthur – dentro, fora e cursos.",
          sq: "Përmbledhje e të gjitha aktiviteteve të kohës së lirë për fëmijë dhe familje në Winterthur – brenda, jashtë dhe kurse.",
          tr: "Winterthur'da çocuklar ve aileler için tüm boş zaman etkinliklerine genel bakış – kapalı alan, açık hava ve kurslar.",
          ar: "نظرة عامة على جميع أنشطة أوقات الفراغ للأطفال والعائلات في Winterthur – في الداخل والخارج ودورات.",
          ti: "ሓፈሻዊ ርእይቶ ናይ ኩሎም ንጥፈታት ናጻ ግዜ ንቆልዑን ስድራቤታትን ኣብ Winterthur – ኣብ ውሽጢ፡ ኣብ ደገን ኮርሳትን።"
        },
        link: "https://www.kinderthur.ch"
      }
    ],
    anlaufstellen: [
      {
        titel: "Soziale Dienste Winterthur",
        text: {
          de: "Erste Anlaufstelle bei Geldsorgen, Sozialhilfe und KulturLegi.",
          en: "First point of contact for money worries, social assistance and the KulturLegi.",
          pt: "Primeiro contacto em caso de problemas de dinheiro, assistência social e KulturLegi.",
          sq: "Pika e parë e kontaktit për shqetësime financiare, ndihmë sociale dhe KulturLegi.",
          tr: "Para sıkıntısı, sosyal yardım ve KulturLegi için ilk başvuru yeri.",
          ar: "الجهة الأولى للتواصل عند الضائقة المالية والمساعدة الاجتماعية وبطاقة KulturLegi.",
          ti: "ቀዳማይ መራኸቢ ቦታ ንጸገም ገንዘብ፡ ማሕበራዊ ሓገዝን KulturLegiን።"
        },
        link: "https://stadt.winterthur.ch/organisation/verwaltung-departemente/soziales/soziale-dienste"
      },
      {
        titel: "kjz Winterthur",
        text: {
          de: "Mütter- und Väterberatung, Erziehungs- und Familienberatung. St. Gallerstrasse 42, Tel. 052 266 90 90.",
          en: "Counselling for mothers and fathers, parenting and family advice. St. Gallerstrasse 42, tel. 052 266 90 90.",
          pt: "Aconselhamento para mães e pais, educação e família. St. Gallerstrasse 42, tel. 052 266 90 90.",
          sq: "Këshillim për nëna dhe baballarë, për edukimin dhe familjen. St. Gallerstrasse 42, tel. 052 266 90 90.",
          tr: "Anne-baba danışmanlığı, çocuk yetiştirme ve aile danışmanlığı. St. Gallerstrasse 42, tel. 052 266 90 90.",
          ar: "استشارات للأمهات والآباء وفي التربية وشؤون العائلة. St. Gallerstrasse 42، هاتف 052 266 90 90.",
          ti: "ምኽሪ ንኣዴታትን ኣቦታትን፡ ኣተዓባብያን ስድራቤትን። St. Gallerstrasse 42፡ ተሌ. 052 266 90 90።"
        },
        link: "https://www.zh.ch/kjz-winterthur",
        tel: "0522669090"
      },
      {
        titel: {
          de: "Prämienverbilligung Kanton Zürich",
          en: "Health insurance subsidy, Canton of Zürich",
          pt: "Redução do prémio do seguro de saúde, Cantão de Zurique",
          sq: "Ulja e primit të sigurimit shëndetësor, Kantoni i Cyrihut",
          tr: "Zürih Kantonu sağlık sigortası prim indirimi",
          ar: "تخفيض أقساط التأمين الصحي في كانتون زيورخ",
          ti: "ምንካይ ክፍሊት መድሕን ጥዕና፡ ካንቶን ዙሪክ"
        },
        text: {
          de: "Zuschuss an die Krankenkasse – wird über die SVA Zürich abgewickelt.",
          en: "A contribution towards health insurance – handled by SVA Zürich.",
          pt: "Apoio para o seguro de saúde – tratado pela SVA Zürich.",
          sq: "Kontribut për sigurimin shëndetësor – trajtohet nga SVA Zürich.",
          tr: "Sağlık sigortasına katkı – SVA Zürich tarafından yürütülür.",
          ar: "مساهمة في تكاليف التأمين الصحي – تتولاها SVA Zürich.",
          ti: "ደገፍ ንመድሕን ጥዕና – ብSVA Zürich ይካየድ።"
        },
        link: "https://svazurich.ch/unsere-produkte/weitere-produkte/krankenversicherung--kvg-/praemienverbilligung/sinn-und-zweck.html"
      },
      {
        titel: "Caritas Secondhand Winterthur",
        text: {
          de: "Kleider und Zubehör – mit KulturLegi 30 % günstiger.",
          en: "Clothes and accessories – 30% cheaper with the KulturLegi.",
          pt: "Roupa e acessórios – 30 % mais barato com a KulturLegi.",
          sq: "Rroba dhe aksesorë – 30 % më lirë me KulturLegi.",
          tr: "Giysi ve aksesuarlar – KulturLegi ile %30 daha ucuz.",
          ar: "ملابس وإكسسوارات – أرخص بنسبة 30 % مع بطاقة KulturLegi.",
          ti: "ክዳውንትን ተወሰኽቲ ኣቑሑትን – ብKulturLegi 30 % ዝሓሰረ።"
        }
      }
    ]
  }
};
