import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Shield, Target, Heart, CheckCircle, Calendar } from "lucide-react"

const milestones = [
  { year: "1998", title: "Company Founded", description: "Started as a small maritime consulting firm in Jakarta" },
  { year: "2003", title: "First International Route", description: "Expanded operations to Singapore and Malaysia" },
  { year: "2008", title: "Fleet Expansion", description: "Acquired our first container vessels" },
  { year: "2015", title: "Digital Transformation", description: "Implemented advanced tracking and logistics systems" },
  {
    year: "2020",
    title: "Sustainability Initiative",
    description: "Launched green shipping and carbon-neutral programs",
  },
  {
    year: "2024",
    title: "Global Recognition",
    description: "Awarded Best Maritime Service Provider in Southeast Asia",
  },
]

const team = [
  {
    name: "H. Hadi Julianto",
    position: "Direktur",
    experience: "30+ years in maritime industry",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Recita Meila Handini",
    position: "Komisaris",
    experience: "25+ years in logistics management",
    image: "/IMG_0808.png",
  },
  {
    name: "Wiwid Supriawan",
    position: "Kepala Cabang",
    experience: "20+ years in naval architecture",
    image: "/placeholder.svg?height=300&width=300",
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
    title: "Fokus pada Pelanggan",
    description: "Kebutuhan klien adalah prioritas utama",
  },
  {
    icon: Users,
    title: "Reliabilitas",
    description: "Dapat diandalkan untuk layanan tepat waktu",
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
              Leading the maritime industry with 25+ years of excellence, innovation, and unwavering commitment to
              connecting global trade
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
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
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
              Key milestones that shaped OceanLink Maritime into the industry leader we are today
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

          {/* Mission Statement */}
          <div className="bg-primary text-white rounded-2xl p-8 md:p-12 text-center">
            <h3 className="font-serif font-bold text-2xl md:text-3xl mb-6">Visi Kami</h3>
            <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-pretty">
              Menjadi perusahaan maritim dan logistik terdepan di Indonesia dengan standar layanan internasional
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              Certifications & Compliance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Maintaining the highest industry standards through rigorous certification and compliance programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-card rounded-lg border">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-accent-foreground mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-accent-foreground/90 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who trust OceanLink Maritime for their global shipping needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-accent hover:bg-white/90">
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-accent bg-transparent"
            >
              Request Quote
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
