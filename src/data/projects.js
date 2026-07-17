/**
 * Each project's `desc` and `category` are bilingual objects ({ en, id })
 * so the portfolio can switch language without losing content.
 * `title`, `tech`, `image`, `demo`, and `github` stay the same in both
 * languages since they're proper nouns / factual data.
 */
export const projects = [
  {
    title: "Clean Wash",
    cat: "Website",
    category: {
      en: "Laundry Management",
      id: "Manajemen Laundry",
    },
    desc: {
      en: "A complete management system for laundry businesses featuring point-of-sale, order tracking, and customer management.",
      id: "Sistem manajemen lengkap untuk bisnis laundry yang mencakup sistem penjualan, pelacakan pesanan, dan manajemen pelanggan.",
    },
    image:
      "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=1200",
    tech: ["React", "Tailwind CSS", "Node.js", "Express"],
    github: "#",
    demo: "https://clean-wash-pink.vercel.app/",
  },
  {
    title: "Restaurant Bara",
    cat: "Website",
    category: {
      en: "Restaurant Website",
      id: "Website Restoran",
    },
    desc: {
      en: "An elegant, high-performance website for a premium restaurant with digital menus and table reservation features.",
      id: "Sebuah situs web elegan dan berkinerja tinggi untuk restoran premium dengan menu digital dan fitur reservasi meja.",
    },
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "#",
    demo: "https://restaurant-bara.vercel.app/",
  },
  {
    title: "Optik Kayumanis",
    cat: "Website",
    category: {
      en: "E-Commerce",
      id: "E-Commerce",
    },
    desc: {
      en: "A modern storefront for an optical shop, complete with product catalog, search filtering, and seamless checkout experience.",
      id: "Tampilan toko optik modern, lengkap dengan katalog produk, filter pencarian, dan pengalaman pembayaran yang mudah.",
    },
    image:
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80&w=1200",
    tech: ["React", "Redux", "Tailwind CSS", "PostgreSQL"],
    github: "#",
    demo: "https://optik-kayumanis-frontend.vercel.app/",
  },
  {
    title: "Klinik Sehat",
    cat: "Website",
    category: {
      en: "Healthcare SaaS",
      id: "SaaS Kesehatan",
    },
    desc: {
      en: "A comprehensive clinic management platform for booking appointments, managing patient records, and doctor schedules.",
      id: "Platform manajemen klinik komprehensif untuk memesan janji temu, mengelola rekam medis pasien, dan jadwal dokter.",
    },
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
    tech: ["React", "Node.js", "Prisma", "PostgreSQL"],
    github: "#",
    demo: "https://klinik-sehat-puce.vercel.app/",
  },
  {
    title: "Restaurant Dapoer Toeti",
    cat: "Website",
    category: {
      en: "Restaurant Website",
      id: "Website Restoran",
    },
    desc: {
      en: "A profile and menu website for Dapoer Toeti, showcasing its signature dishes, restaurant atmosphere, and the culinary services offered.",
      id: "Website profil dan menu untuk Dapoer Toeti, menyajikan informasi mengenai hidangan khas, suasana restoran, dan layanan kuliner yang ditawarkan.",
    },
    image:
      "https://res.cloudinary.com/dpywh4kpe/image/upload/v1784271538/download_5_tot2eu.png",
    tech: ["React", "Node.js", "Prisma", "PostgreSQL"],
    github: "#",
    demo: "https://restaurant-dapoer-toeti.vercel.app/",
  },
  {
    title: "Larata Dental",
    cat: "Website",
    category: {
      en: "Dental Clinic",
      id: "Klinik Gigi",
    },
    desc: {
      en: "The official website for Larata Dental, a dental clinic offering a range of professional oral health and dental care services for patients.",
      id: "Website resmi Larata Dental, klinik gigi yang menawarkan berbagai layanan kesehatan dan perawatan gigi profesional bagi pasien.",
    },
    image:
      "https://res.cloudinary.com/dpywh4kpe/image/upload/v1784271537/download_1_r8tyk5.png",
    tech: ["React", "Node.js", "Prisma", "PostgreSQL"],
    github: "#",
    demo: "https://larata-dental.vercel.app/",
  },
  {
    title: "Senyum Dental",
    cat: "Website",
    category: {
      en: "Dental Clinic",
      id: "Klinik Gigi",
    },
    desc: {
      en: "An information platform for Senyum Dental clinic, focused on dental care services, smile aesthetics, along with staff profiles and clinic facilities.",
      id: "Platform informasi klinik Senyum Dental, berfokus pada layanan perawatan kesehatan gigi, estetika senyum, serta profil tenaga medis dan fasilitas klinik.",
    },
    image:
      "https://res.cloudinary.com/dpywh4kpe/image/upload/v1784271536/download_rrnkty.png",
    tech: ["React", "Node.js", "Prisma", "PostgreSQL"],
    github: "#",
    demo: "https://senyum-dental.vercel.app/",
  },
  {
    title: "Road Run Rental",
    cat: "Website",
    category: {
      en: "Vehicle Rental",
      id: "Sewa Kendaraan",
    },
    desc: {
      en: "The Road Run Rental vehicle rental service website, where users can browse available vehicle options along with pricing and rental terms.",
      id: "Situs layanan sewa kendaraan Road Run Rental, tempat pengguna dapat melihat daftar pilihan kendaraan yang tersedia serta informasi mengenai harga dan syarat penyewaan.",
    },
    image:
      "https://res.cloudinary.com/dpywh4kpe/image/upload/v1784271537/download_2_itkntk.png",
    tech: ["React", "Node.js", "Prisma", "PostgreSQL"],
    github: "#",
    demo: "https://road-run-rental.vercel.app/",
  },
  {
    title: "Iki Shop",
    cat: "Website",
    category: {
      en: "E-Commerce",
      id: "E-Commerce",
    },
    desc: {
      en: "Iki Shop, an online store (e-commerce) offering a wide range of retail products and everyday consumer goods with an easy ordering system.",
      id: "Toko online (e-commerce) Iki Shop yang menyediakan berbagai macam produk retail atau barang kebutuhan konsumen dengan sistem pemesanan yang mudah.",
    },
    image:
      "https://res.cloudinary.com/dpywh4kpe/image/upload/v1784271535/download_3_tbloj8.png",
    tech: ["React", "Node.js", "Prisma", "PostgreSQL"],
    github: "#",
    demo: "https://iki-shop.vercel.app/",
  },
];
