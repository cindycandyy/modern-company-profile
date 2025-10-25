import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Award, Users, Globe } from "lucide-react"

const features = [
  "Berpengalaman Sejak 2013 dalam Layanan Maritim",
  "Armada Kapal Handal & Grab Bucket Modern",
  "Jaringan Luas di Pelabuhan Indonesia",
  "Layanan Shipping Agency Profesional",
  "Siap 24/7 dengan Harga Kompetitif",
  "Komitmen pada Keselamatan & Kepuasan Pelanggan",
]

const achievements = [
  { icon: Award, label: "Experience", value: "10+ Years in Maritime Industry" },
  { icon: Users, label: "Customer Support", value: "24/7 Service Availability" },
  { icon: Globe, label: "National Reach", value: "Serving 10+ Ports in Indonesia" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="bg-accent/10 text-accent">
                Maritime Leader
              </Badge>
              <Badge variant="secondary" className="bg-accent/10 text-accent">
                Est. 2013
              </Badge>
            </div>

            <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Solusi Maritim & Logistik Terpercaya di Indonesia
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              PT. Trans Marindo Succes hadir sebagai mitra strategis Anda dalam layanan pelayaran, shipping agency, dan persewaan alat berat (grab bucket). Dengan armada yang handal, peralatan modern, dan tim berpengalaman, kami memastikan setiap kebutuhan logistik maritim terpenuhi secara cepat, tepat, dan profesional
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Kami berkomitmen untuk mengutamakan efisiensi, keselamatan, dan kepuasan pelanggan dalam setiap layanan. Didukung jaringan luas di berbagai pelabuhan Indonesia, kami menjadi solusi terpercaya untuk kelancaran operasional laut dan darat Anda
            </p>

            <Separator className="my-6" />

            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center p-4">
                  <CardContent className="p-0">
                    <achievement.icon className="h-6 w-6 text-accent mx-auto mb-2" />
                    <div className="text-sm font-medium text-muted-foreground">{achievement.label}</div>
                    <div className="text-lg font-bold text-foreground">{achievement.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Bangun Kerjasama dengan Kami
            </Button>
          </div>

          <div className="relative">
            <img
              src="/ship2.jpg"
              alt="Modern shipping port"
              className="rounded-lg shadow-2xl"
            />
            <Card className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground shadow-lg">
              <CardContent className="p-6">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm">Years of Excellence</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
