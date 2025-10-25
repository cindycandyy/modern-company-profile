import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Truck, Package, FileText, MapPin, Ship, ShipWheel, Container, Shield, BarChart3, Headphones } from "lucide-react"
  
const mainServices = [
  {
    icon: Ship,
    title: "Shipping Agency",
    description: "Layanan keagenan kapal yang mengurus semua kebutuhan kapal Anda di pelabuhan",
    features: ["Clearance in/out kapal", "Koordinasi dengan otoritas pelabuhan", "Bunker & fresh water supply"],
    routes: "Hemat waktu, semua urusan kapal kami yang handle!",
  },
  {
    icon: ShipWheel,
    title: "Shipping Services",
    description: "Kami melayani pengangkutan kargo curah antar pulau dengan kapal tugboat dan tongkang, seperti batu bara, nikel, pasir, dan bahan baku industri.",
    features: ["Rute Fleksibel", "Kargo Curah (Bulk Cargo)", "Operasi Skala Besar"],
    routes: "Jangkau tujuan Anda sampai titik akhir!",
  },
  {
    icon: Container,
    title: "Persewaan Alat Berat (Grab Bucket)",
    description: "Mendukung aktivitas bongkar muat material curah dengan peralatan modern",
    features: ["Grab bucket berkualitas", "Perawatan rutin & siap pakai", "Cocok untuk proyek jangka pendek & panjang"],
    routes: "Proyek lancar, biaya efisien, hasil maksimal!",
  },
]

const additionalServices = [
  {
    icon: FileText,
    title: "Jasa Pelayaran",
    description: "Pengangkutan kargo curah antar pulau dengan armada tugboat & tongkang",
  },
  {
    icon: Package,
    title: "Shipping Agency",
    description: "Pengurusan dokumen kapal, clearance, dan koordinasi pelabuhan",
  },
  {
    icon: BarChart3,
    title: "Persewaan Alat Berat (Grab Bucket)",
    description: "Alat bongkar muat curah yang modern & siap pakai",
  },
  {
    icon: Shield,
    title: "Cargo Insurance",
    description: "Comprehensive coverage for all types of shipments",
  },
  {
    icon: MapPin,
    title: "Track & Trace",
    description: "Real-time visibility throughout the shipping process",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Round-the-clock assistance from maritime experts",
  },
]

const industries = [
  { name: "Automotive", description: "Vehicle and parts transportation" },
  { name: "Electronics", description: "High-value technology shipments" },
  { name: "Textiles", description: "Fashion and garment logistics" },
  { name: "Chemicals", description: "Hazardous and specialty chemicals" },
  { name: "Food & Beverage", description: "Temperature-controlled cargo" },
  { name: "Energy", description: "Oil, gas, and renewable energy equipment" },
  { name: "Construction", description: "Heavy machinery and materials" },
  { name: "Pharmaceuticals", description: "Medical and healthcare products" },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">Layanan Kami</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto text-pretty">
              Solusi logistik maritim terpadu yang siap menghubungkan bisnis Anda ke seluruh penjuru Indonesia
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              Solusi Transportasi Global
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multi–modal, efisien, dan terpercaya untuk setiap pengiriman Anda
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <service.icon className="h-12 w-12 text-accent group-hover:scale-110 transition-transform duration-300" />
                    <Badge variant="secondary" className="text-accent bg-accent/10">
                      {service.routes}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 bg-accent hover:bg-accent/90 text-accent-foreground">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-accent-foreground mb-6">
            Butuh Solusi Khusus?
          </h2>
          <p className="text-xl text-accent-foreground/90 mb-8 max-w-3xl mx-auto">
            Tim ahli kami siap merancang solusi logistik yang sesuai dengan kebutuhan bisnis Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-accent hover:bg-white/90">
              Ajukan Konsultasi
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-accent bg-transparent"
            >
              Dapatkan Penawaran
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
