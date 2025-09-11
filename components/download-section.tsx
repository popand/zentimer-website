import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Download, Shield } from "lucide-react"

export function DownloadSection() {
  return (
    <section id="download" className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-border shadow-xl">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-bold text-balance">
                    Ready to transform your <span className="text-primary">focus?</span>
                  </h2>
                  <p className="text-xl text-muted-foreground text-pretty">
                    Download ZenTimer today and experience mindful productivity with complete privacy.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Download className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm font-medium">Free Download</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-accent" />
                    </div>
                    <span className="text-sm font-medium">Privacy Protected</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm font-medium">Works Offline</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Smartphone className="w-5 h-5 mr-2" />
                    Download for iOS
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent/10 bg-transparent"
                  >
                    <Smartphone className="w-5 h-5 mr-2" />
                    Download for Android
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground">
                  No account required • Completely free • Zero data collection
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
