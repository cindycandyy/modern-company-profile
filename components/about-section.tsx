import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Award, Users, Globe } from "lucide-react"

const features = [
  "ISO 9001:2015 Certified Operations",
  "24/7 Customer Support Worldwide",
  "Advanced Cargo Tracking Systems",
  "Comprehensive Insurance Coverage",
  "Experienced Maritime Professionals",
  "Sustainable Shipping Practices",
]

const achievements = [
  { icon: Award, label: "ISO Certified", value: "9001:2015" },
  { icon: Users, label: "Expert Team", value: "500+" },
  { icon: Globe, label: "Global Reach", value: "50+ Countries" },
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
                Est. 1998
              </Badge>
            </div>

            <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Leading Maritime Excellence Since 1998
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              OceanLink Maritime has been at the forefront of international shipping and logistics, connecting
              businesses across continents with reliable, efficient, and sustainable maritime solutions.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our commitment to excellence, combined with cutting-edge technology and deep industry expertise, makes us
              the preferred partner for companies seeking dependable global shipping services.
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
              Learn More About Us
            </Button>
          </div>

          <div className="relative">
            <img
              src="/modern-shipping-port-with-containers-and-cranes.jpg"
              alt="Modern shipping port"
              className="rounded-lg shadow-2xl"
            />
            <Card className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground shadow-lg">
              <CardContent className="p-6">
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm">Years of Excellence</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
