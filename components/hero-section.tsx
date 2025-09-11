import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-primary/5 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Focus. Timer. <span className="text-primary">Zen.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground text-pretty">
                Where productivity meets mindfulness.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-foreground font-medium">Pure focus, zero distractions, complete privacy.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="inline-block">
                <Image
                  src="/images/app-store-button.png"
                  alt="Download on the App Store"
                  width={180}
                  height={60}
                  className="hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto max-w-sm">
              <Image
                src="/images/zentimer-app.png"
                alt="ZenTimer app interface showing circular timer with orange gradient background"
                width={300}
                height={600}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
