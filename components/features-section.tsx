import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Focus, Bell, Moon } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Privacy-First Design",
    description: "Zero data collection, completely offline, no account required. Your focus sessions stay private.",
  },
  {
    icon: Focus,
    title: "Intuitive Timer Control",
    description: "Drag the circular handle to set 1-60 minute focus sessions. Simple, elegant, distraction-free.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Choose from vibration, flash, sound, or silent alerts that adapt to your environment.",
  },
  {
    icon: Moon,
    title: "iOS Focus Integration",
    description: "Seamlessly works with iOS Focus modes for completely distraction-free sessions.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Everything you need for <span className="text-primary">mindful productivity</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            ZenTimer for iOS combines simplicity with powerful features to help you focus.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
