import {
  Code2, Smartphone, Database, Server, Terminal,
  Layout, TestTube, Figma, GitBranch, Briefcase,
  GraduationCap, Globe, Github, Linkedin, CheckCircle
} from 'lucide-react';

export const HERO_DATA = {
  greeting: "",
  role: "Mobile Developer & Web Developer",
  description: "Kendi projelerini geliştiren, problem çözmeye odaklı bir yazılımcı",
  socials: [
    { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/oğuzhan-türkmen-303090236/", label: "LinkedIn" },
    { icon: <Github size={20} />, link: "https://github.com/oguzhantrkmn", label: "GitHub" }
  ]
};

export const ABOUT_DATA = {
  title: "🚀 Hakkımda",
  paragraphs: [
    "Yazılım serüvenime, hayal ettiğim fikirleri çalışan gerçek ürünlere dönüştürme tutkusuyla başladım. Karşılaştığım problemleri çözerken sadece bir kod yazarı değil, uçtan uca mimari tasarlayan bir problem çözücü olmayı ilke edindim.",
    "Özellikle mobil geliştirme dünyasında (Android) edindiğim tecrübelerle, kullanıcıların hayatına dokunan, performansı yüksek ve akıcı uygulamalar geliştiriyorum. Bunun yanında web ekosisteminde (React & Node.js) hem modern arayüzler inşa ediyor hem de veritabanı - sunucu mimarilerini yönetiyorum.",
    "Şu anda kendimi sistem mimarisi (System Design) ve üretim kalitesinde (production-ready) büyük ölçekli uygulamalar tasarlama konularında geliştiriyorum. 'Öğren, Uygula ve Yayınla' felsefesiyle her gün bir adım daha ileri gitmeyi hedefliyorum."
  ],
  points: [
    { label: "Ana odak", value: "Mobil uygulama geliştirme (Android)" },
    { label: "Ek alan", value: "Web geliştirme" },
    { label: "İlgi alanları", value: "Backend sistemler, veri işleme, uygulama mimarileri" },
    { label: "Yaklaşım", value: "Öğren → Uygula → Yayınla" }
  ],
  quote: "Yazılımı sadece öğrenmek değil, gerçek projeler geliştirerek derinleşmek benim için en önemli prensip."
};

export const TECH_STACK = [
  {
    category: "💻 Diller",
    skills: ["JavaScript", "Python", "C#", "TypeScript", "SQL", "Kotlin (Android)"],
    icon: <Code2 size={24} />
  },
  {
    category: "⚙️ Framework / Teknolojiler",
    skills: ["React.js", "Node.js (Express.js)", "Android Dev (Java/Kotlin)", "RESTful API", "Basic .NET/C# Backend"],
    icon: <Terminal size={24} />
  },
  {
    category: "🗄️ Veritabanı",
    skills: ["PostgreSQL", "MySQL", "MongoDB (Temel)"],
    icon: <Database size={24} />
  },
  {
    category: "☁️ Araçlar & Diğer",
    skills: ["Git & GitHub", "REST API Entegrasyonu", "Docker (Temel)", "Firebase", "Postman / Insomnia", "Linux (Temel)"],
    icon: <Server size={24} />
  }
];

export const EXPERIENCE = [
  {
    id: 1,
    role: "🌐 Web Geliştirici",
    company: "Kendi İşim",
    date: "Eyl 2021 – Devam ediyor",
    description: [
      "Full-stack web geliştirme",
      "React.js ile frontend geliştirme",
      "Backend ve veritabanı yönetimi"
    ]
  },
  {
    id: 2,
    role: "📱 Mobile Developer",
    company: "Kendi İşim",
    date: "Eyl 2022 – Devam ediyor",
    description: [
      "Mobil uygulamalar geliştirme",
      "Android odaklı projeler",
      "Uygulama mimarisi ve performans optimizasyonu"
    ]
  },
  {
    id: 3,
    role: "📱 Mobile Developer Intern",
    company: "Remora Teknoloji",
    date: "Tem 2024 – Ağu 2024",
    description: [
      "Gerçek dünya projelerinde geliştirme deneyimi"
    ],
    tech: ["Mobil Dev", "Python"]
  },
  {
    id: 4,
    role: "🏢 BT Stajyeri",
    company: "YKK Türkiye | Tekirdağ",
    date: "Tem 2025 – Eyl 2025",
    description: [
      "Kurumsal sistemlerde geliştirme deneyimi",
      "Veri ve frontend entegrasyonu"
    ],
    tech: ["PostgreSQL", "React.js"]
  }
];

export const LIVE_PROJECTS = [
  {
    name: "CV Creater",
    url: "https://cv-creater.online",
    desc: "Kullanıcıların modern ve şık özgeçmişler oluşturabildiği, aktif olarak kullanılan canlı web projesi."
  }
];

export const PROJECTS = [
  {
    category: "🛒 E-Commerce & Web Projeleri",
    desc: "Web tabanlı uygulamalar ve e-ticaret sistemleri üzerine çalışmalar",
    items: ["e-shop", "shop_backup", "tarim_web"],
    icon: <Globe size={28} />
  },
  {
    category: "📱 Mobil & Uygulama Projeleri",
    desc: "Günlük hayata yönelik mobil uygulamalar ve utility tool'lar",
    items: ["qr_scan / qr_scanner", "randevum", "KentRapor"],
    icon: <Smartphone size={28} />
  },
  {
    category: "🤖 Python & Algoritma Projeleri",
    desc: "Simülasyon, makine öğrenmesi ve oyun geliştirme deneyimleri",
    items: ["Hayvanat-Bahcesi-Simulasyonu-Python", "AracSiniflandirmaMakineOgrenmesi", "flappy_bird_clone"],
    icon: <Terminal size={28} />
  },
  {
    category: "🧰 Diğer Projeler",
    desc: "Araç geliştirme ve farklı konsept projeler",
    items: ["cv-creater", "KurbaNazarim"],
    icon: <TestTube size={28} />
  }
];

export const GOALS_LEARNING = {
  goals: [
    "Daha büyük ölçekli sistemler geliştirmek",
    "Backend ve sistem tasarımı alanında derinleşmek",
    "Üretim kalitesinde (production-ready) projeler geliştirmek",
    "Açık kaynak projelere katkı sağlamak"
  ],
  learning: [
    "Sistem tasarımı (System Design)",
    "Daha iyi backend mimarileri",
    "Performans optimizasyonu"
  ]
};

export const BLOG_CONTENT = {
  title: "✍️ Bu Blogda Neler Var?",
  topics: [
    "🧠 Teknik yazılar",
    "⚙️ Proje geliştirme süreçleri (build in public)",
    "📚 Öğrenme notları",
    "🚀 Deneyimler ve çıkarımlar"
  ],
  mission: "Öğrenirken üretmek ve ürettiklerimi paylaşarak kalıcı hale getirmek."
};
