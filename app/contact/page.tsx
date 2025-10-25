import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, Clock, MapPin } from "lucide-react"

const offices = [
  {
    city: "Surabaya",
    country: "Jawa Timur, Indonesia",
    type: "Kantor Pusat",
    address: "Pelidno Place Office tower, Jl. Perak Timur No. 478, Lantai 9, Perak Timur, Kec. Pabean Cantikan, Surabaya, Jawa Timur, 60165",
    phone: "-",
    email: "-",
    hours: "Senin - Jum'at: 09.00 s/d 17.00",
  },
  {
    city: "Banjarmasin",
    country: "Kalimantan Selatan, Indonesia",
    type: "Kantor Cabang",
    address: "Jl. Skip Lama No.25, Antasan Besar, Kec. Banjarmasin Tengah, Kota Banjarmasin, Kalimantan Selatan 70115",
    phone: "081372151020",
    email: "transmarindosuccess22@gmail.com",
    hours: "Senin - Jum'at: 09.00 s/d 17.00",
  },
  {
    city: "Kendari",
    country: "Sulawesi Tenggara, Indonesia",
    type: "Kantor Cabang",
    address: "Perumahan Green Anggoeya Resort Kendari, Anggoeya, Kec. Poasia, Kota Kendari, Sulawesi Tenggara",
    phone: "085230027777",
    email: "tmscabangkendari17@gmail.com",
    hours: "Senin - Jum'at: 09.00 s/d 17.00",
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
            Kami siap membantu Anda dengan kebutuhan logistik maritim Anda.
          </p>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section
  id="contact"
  className="flex justify-center items-center py-16 px-6 bg-gray-50"
>
  <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-3xl text-center border border-gray-100">
    <h2 className="text-2xl font-bold text-gray-800 mb-3">Get in Touch</h2>
    <p className="text-gray-600 mb-10">
      Kami siap dihubungi kapan pun Anda membutuhkan kami.
    </p>

    <div className="flex flex-col md:flex-row justify-center gap-10 text-left md:text-center">
      <div className="flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-500 mb-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h2l3.6 7.59-1.35 2.44A1 1 0 008 17h10a1 1 0 000-2H9.42a1 1 0 01-.9-.55l.03-.05L10 13h7a1 1 0 00.92-.61l3-7A1 1 0 0020 4H5a1 1 0 000 2z"
          />
        </svg>
        <h3 className="font-semibold text-gray-800 text-lg">24/7 Hotline</h3>
        <p className="text-gray-600">085333379115</p>
      </div>

     <div className="flex flex-col items-center">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-blue-500 mb-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
  <h3 className="font-semibold text-gray-800 text-lg">Email</h3>
  <p className="text-gray-600">transmarindosuccess22@gmail.com</p>
</div>

      <div className="flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-500 mb-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="font-semibold text-gray-800 text-lg">Business Hours</h3>
        <p className="text-gray-600">Senin - Jum'at: 09.00 s/d 17.00</p>
      </div>
    </div>
  </div>
</section>


      {/* Office Locations */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">Jangkauan Nasional, Layanan Lokal</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Kami hadir di kota-kota pelabuhan strategis untuk mendukung kebutuhan logistik Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <MapPin className="h-6 w-6 text-accent" />
                    <Badge variant="secondary" className="text-accent bg-accent/10">
                      {office.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{office.city}</CardTitle>
                  <CardDescription className="font-semibold">{office.country}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold">Address</p>
                    <p className="text-sm text-muted-foreground">{office.address}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Phone</p>
                    <p className="text-sm text-muted-foreground">{office.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Email</p>
                    <p className="text-sm text-muted-foreground">{office.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Hours</p>
                    <p className="text-sm text-muted-foreground">{office.hours}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
