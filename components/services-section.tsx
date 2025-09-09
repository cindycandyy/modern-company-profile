import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Package, FileText, Users, Clock, MapPin } from "lucide-react"

const services = [
  {
    icon: Truck,
    title: "Pengiriman Antar Pulau",
    description: "Jasa pengiriman barang antar pulau dengan jaringan rute yang luas dan fleksibel",
  },
  {
    icon: Package,
    title: "Pelayaran Antar Pulau",
    description: "Layanan pelayaran laut antar pulau di seluruh Indonesia dengan armada terpercaya",
  },
  {
    icon: FileText,
    title: "Pengangkutan Muatan Curah",
    description: "Transportasi kargo curah secara efisien dengan penanganan profesional",
  },
  {
    icon: Users,
    title: "Sewa Alat Berat",
    description: "Penyediaan alat berat, khususnya Grab Bucket, untuk mendukung kebutuhan proyek Anda",
  },
  {
    icon: Clock,
    title: "Logistik Konstruksi",
    description: "Pengiriman material bangunan dan peralatan konstruksi tepat waktu dan aman",
  },
  {
    icon: MapPin,
    title: "Layanan Keagenan Kapal",
    description: "Melayani keagenan kapal di wilayah Kendari & Molawe, Sulawesi Tenggara",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">Layanan Kami</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Solusi pengiriman dan logistik antar pulau yang cepat, aman, dan terpercaya di seluruh Indonesia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <service.icon className="h-12 w-12 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
