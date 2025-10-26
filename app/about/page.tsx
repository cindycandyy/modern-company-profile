"use client"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Shield, Target, Heart, Calendar } from "lucide-react"
import { useRouter } from "next/navigation"

const milestones = [
  { year: "2011", title: "Perushaan Berdiri", description: "Didirikan oleh empat sahabat dengan modal awal Rp200 juta sebagai perusahaan jasa shipping & general cargo" },
  { year: "2013", title: "Restrukturisasi Saham", description: "Perusahaan dibuka kembali dengan kepemilikan baru (Sutarto & Hadi Julianto), meski belum aktif beroperasi hingga 2020" },
  { year: "2020", title: "Kebangkitan", description: "Meningkatkan modal menjadi 500.000 lembar saham sebagai fondasi kebangkitan perusahaan" },
  { year: "2021", title: "Titik Balik", description: "Melakukan kontrak pertama dengan PT Obsidian Stainless Steel dan membeli 4 unit grab bucket" },
  {
    year: "2022",
    title: "Ekspansi Usaha",
    description: "Menambah armada kapal LCT senilai Rp5 miliar dan memperluas usaha ke Shipping Agency dengan resmi memperoleh SIUPAL",
  },
  {
    year: "2024–2025",
    title: "Pertumbuhan Pesat",
    description: "Mendapat kontrak time charter dengan PT Wijaya Karya, akuisisi kepemilikan saham baru (Hadi Julianto & Recita Meila Handini), serta menjalin kerjasama strategis dengan perusahaan besar di bidang pelayaran dan shipping agency",
  },
]

const team = [
  {
    name: "H. Hadi Julianto",
    position: "Direktur",
    experience: "Lebih dari 10 tahun berpengalaman di industri maritim",
    image: "/hadi.jpg",
  },
  {
    name: "Recita Meila Handini",
    position: "Komisaris",
    experience: "Mahasiswa Manajemen Bisnis dengan pengalaman di bidang logistik",
    image: "/IMG_0808.png",
  },
  {
    name: "Wiwid Supriawan",
    position: "Kepala Cabang Kendari",
    experience: "Berpengalaman lebih dari 10 tahun di bidang operasional pelayaran dan keagenan kapal",
    image: "/wiwit.jpg",
  },
  {
    name: "Harianto",
    position: "Kepala Cabang Banjarmasin",
    experience: "Lebih dari 10 tahun berpengalaman di industri maritim",
    image: "/harianto.png",
  },
  {
    name: "Novita Sari",
    position: "Kepala Cabang Surabaya",
    experience: "Lebih dari 10 tahun berpengalaman di industri maritim",
    image: "/novita.png",
  },


]

const values = [
  {
    icon: Shield,
    title: "Integritas",
    description: "Menjunjung tinggi kejujuran dan transparansi",
  },
  {
    icon: Target,
    title: "Reliabilitas",
    description: "Dapat diandalkan untuk layanan tepat waktu",
  },
  {
    icon: Heart,
    title: "profesionalisme",
    description: "Menjalankan bisnis dengan standar profesional tinggi",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Mengutamakan kepuasan pelanggan dalam setiap layanan",
  },
]

const certifications = [
  "ISO 9001:2015 Quality Management",
  "ISO 14001:2015 Environmental Management",
  "OHSAS 18001 Occupational Health & Safety",
  "IMO SOLAS Compliance",
  "ISPS Code Security Certification",
  "MLC 2006 Maritime Labour Convention",
]

export default function AboutPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Tentang Kami
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto text-pretty">
              Berpengalaman di industri maritim dengan fokus pada inovasi dan layanan terpercaya untuk mendukung konektivitas perdagangan
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                PT. Trans Marindo Succes adalah perusahaan swasta nasional yang bergerak di bidang layanan pelayaran, keagenan kapal (shipping agency), dan persewaan alat berat khususnya Grab Bucket.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Didirikan pada tahun 2013, kami hadir untuk memberikan solusi logistik maritim yang cepat, aman, dan profesional. Dengan dukungan armada kapal yang handal, tim berpengalaman, serta peralatan bongkar muat modern, kami memastikan setiap operasional pelabuhan berjalan lancar.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Kami percaya bahwa kelancaran transportasi laut adalah kunci pertumbuhan ekonomi. Karena itu, komitmen kami adalah menghadirkan efisiensi, keselamatan, dan pelayanan terbaik untuk seluruh klien kami di Indonesia.
              </p>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer"
                onClick={() => {
                  window.open(`https://wa.me/085333379115`, "_blank", "noopener,noreferrer");
                }}
              >
                Siap berkembang bersama kami?
              </Button>
            </div>
            <div className="relative">
              <img
                src="grab.jpg"
                alt="grab bucket"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tonggak penting yang membentuk PT Trans Marindo Succes hingga menjadi perusahaan seperti sekarang
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-accent bg-accent/10">
                      {milestone.year}
                    </Badge>
                    <Calendar className="h-5 w-5 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{milestone.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{milestone.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">Struktur Kepemimpinan</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dipimpin oleh para profesional berpengalaman di industri maritim, PT. Trans Marindo Succes siap membawa perusahaan menuju pertumbuhan baru dan memberikan layanan terbaik untuk Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="relative mx-auto mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-accent font-semibold">{member.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Values & Mission */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">Nilai Perusahaan</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Nilai kami adalah fondasi pelayanan terbaik untuk Anda
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <value.icon className="h-12 w-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{value.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          {/* Vision Statement */}
          <div className="bg-primary text-white rounded-2xl p-8 md:p-12 text-center mb-8">
            <h3 className="font-serif font-bold text-2xl md:text-3xl mb-6">Visi Kami</h3>
            <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-pretty">
              Menjadi perusahaan pelayaran terdepan dalam inovasi dan efisiensi, serta terintegritas dalam layanan maritim dan logistik di Perairan Indonesia yang memberikan solusi terbaik dengan standar internasional, serta menghubungkan dunia dengan solusi angkutan logistik maritim yang andal dan berkelanjutan.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-secondary text-white rounded-2xl p-8 md:p-12 text-center">
            <h3 className="font-serif font-bold text-2xl md:text-3xl mb-6">Misi Kami</h3>
            <ul className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-left list-decimal list-inside space-y-3">
              <li>
                Memberikan pelayanan pelayaran dan shipping agency yang cepat, tepat, aman, dan terpercaya.
              </li>
              <li>
                Memberikan solusi persewaan alat berat yang efisien dan cost-effective.
              </li>
              <li>
                Membangun kemitraan strategis dengan pelanggan dan mitra perusahaan berdasarkan kepercayaan dan transparansi.
              </li>
              <li>
                Menciptakan lingkungan kerja yang aman dan memberdayakan bagi seluruh karyawan.
              </li>
              <li>
                Mengutamakan keselamatan, kualitas, dan kepuasan pelanggan.
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-accent-foreground mb-6">
            Siap Bermitra dengan Kami?
          </h2>
          <p className="text-xl text-accent-foreground/90 mb-8 max-w-3xl mx-auto">
            Bergabunglah bersama ratusan klien yang sudah mempercayai PT. Trans Marindo Succes untuk kebutuhan pengiriman global mereka
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* TODO: Direct */}
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-accent hover:bg-white/90 cursor-pointer"
              onClick={() => router.push('/services')}
            >
              Dapatkan Penawaran
            </Button>

            {/* TODO: Direct */}
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-accent bg-transparent cursor-pointer"
              onClick={() => {
                window.open(`https://wa.me/085333379115`, "_blank", "noopener,noreferrer");
              }}
            >
              Hubungi Kami
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
