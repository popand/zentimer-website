import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Graduate Student",
    content:
      "ZenTimer has transformed my study sessions. The privacy-first approach gives me peace of mind, and the interface is so calming.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Software Developer",
    content:
      "Finally, a timer app that doesn't track me! The drag-to-set feature is intuitive, and it works perfectly with my focus modes.",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    role: "Creative Director",
    content:
      "The zen-like design helps me get into the right mindset for creative work. No distractions, just pure focus.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Loved by <span className="text-primary">mindful professionals</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Join thousands who have transformed their productivity with ZenTimer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.content}"</blockquote>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
