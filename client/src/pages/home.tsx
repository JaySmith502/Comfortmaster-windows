import { PhoneButton } from "@/components/ui/phone-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Star, Shield, PenTool, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

// Assets
import heroImage from "@assets/generated_images/bright_modern_living_room_with_large_windows.png";
import windowImage from "@assets/generated_images/close_up_of_a_high_quality_modern_white_vinyl_window.png";
import patioImage from "@assets/generated_images/beautiful_sunroom_patio_enclosure.png";
import sidingImage from "@assets/generated_images/modern_vinyl_siding_on_a_house_exterior.png";
import doorImage from "@assets/generated_images/elegant_front_entry_door.png";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            {/* Simple Logo Concept */}
            <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-white font-bold text-xl">
              CM
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-none tracking-tight text-primary">Comfort Master</span>
              <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase">Home Improvement</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("products")} className="text-sm font-medium hover:text-primary transition-colors">Products</button>
            <button onClick={() => scrollToSection("why-us")} className="text-sm font-medium hover:text-primary transition-colors">Why Us</button>
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-primary transition-colors">About</button>
            <PhoneButton phoneNumber="(502) 456-0627" variant="default">
              Call for Estimate
            </PhoneButton>
          </nav>

          {/* Mobile Call Button (Icon Only) */}
          <div className="md:hidden">
            <PhoneButton phoneNumber="(502) 456-0627" size="icon" />
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Modern living room with large windows"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </div>

          <div className="container relative mx-auto flex h-full flex-col justify-center px-4 md:px-6 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="mb-4 inline-flex items-center rounded-full bg-primary/90 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                <Star className="mr-2 h-4 w-4 fill-current" />
                We Manufacture, You SAVE!
              </div>
              <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
                Factory Direct <br />
                <span className="text-sky-400">Custom Windows</span>
              </h1>
              <p className="mb-8 text-lg text-gray-200 md:text-xl max-w-xl leading-relaxed">
                The only home improvement company in Kentucky that manufactures custom windows locally. Skip the middleman and get premium quality for less.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <PhoneButton phoneNumber="(502) 456-0627" size="lg" className="text-lg px-8 h-14">
                  (502) 456-0627
                </PhoneButton>
                <Button variant="outline" size="lg" className="text-lg px-8 h-14 bg-white/10 backdrop-blur-sm border-white/40 text-white hover:bg-white hover:text-primary transition-colors" onClick={() => scrollToSection("products")}>
                  View Our Products
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust Indicators Strip */}
        <div className="bg-slate-50 border-b">
          <div className="container mx-auto py-8 px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Lifetime Warranty</h3>
                  <p className="text-sm text-muted-foreground">One of the best in the industry</p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Star className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">A+ BBB Rating</h3>
                  <p className="text-sm text-muted-foreground">Accredited Business since 2025</p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Made in Louisville</h3>
                  <p className="text-sm text-muted-foreground">Local Manufacturing & Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <section id="products" className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl mb-4">Premium Home Improvement Solutions</h2>
              <p className="text-lg text-muted-foreground">
                We provide a complete range of custom exterior solutions designed to enhance your home's beauty and efficiency.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Product 1: Windows */}
              <Card className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={windowImage}
                    alt="Vinyl Windows"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-2xl font-bold text-white mb-2">Vinyl Windows</h3>
                    <p className="text-white/80 text-sm mb-4 line-clamp-2">Custom double hung, bay, bow, and casement windows.</p>
                    <span className="inline-flex items-center text-white font-medium text-sm group-hover:translate-x-2 transition-transform">
                      Learn more <span className="ml-2">→</span>
                    </span>
                  </div>
                </div>
              </Card>

              {/* Product 2: Patio Enclosures */}
              <Card className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={patioImage}
                    alt="Patio Enclosures"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-2xl font-bold text-white mb-2">Patio Enclosures</h3>
                    <p className="text-white/80 text-sm mb-4 line-clamp-2">Enjoy the outdoors year-round with our sunrooms and screen rooms.</p>
                    <span className="inline-flex items-center text-white font-medium text-sm group-hover:translate-x-2 transition-transform">
                      Learn more <span className="ml-2">→</span>
                    </span>
                  </div>
                </div>
              </Card>

              {/* Product 3: Doors */}
              <Card className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={doorImage}
                    alt="Exterior Doors"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-2xl font-bold text-white mb-2">Exterior Doors</h3>
                    <p className="text-white/80 text-sm mb-4 line-clamp-2">Secure and stylish entry doors to make a great first impression.</p>
                    <span className="inline-flex items-center text-white font-medium text-sm group-hover:translate-x-2 transition-transform">
                      Learn more <span className="ml-2">→</span>
                    </span>
                  </div>
                </div>
              </Card>

              {/* Product 4: Siding */}
              <Card className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={sidingImage}
                    alt="Vinyl Siding"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-2xl font-bold text-white mb-2">Vinyl Siding</h3>
                    <p className="text-white/80 text-sm mb-4 line-clamp-2">Durable vinyl siding and trim to protect and beautify your home.</p>
                    <span className="inline-flex items-center text-white font-medium text-sm group-hover:translate-x-2 transition-transform">
                      Learn more <span className="ml-2">→</span>
                    </span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Product List Details */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
              {[
                "Double Hung Windows", "Bay & Bow Windows", "Hopper Windows", "Awning Windows",
                "Casement Windows", "Exterior Doors", "Vinyl Decking & Railing", "Screen Rooms"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="why-us" className="py-20 bg-primary text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute right-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-white blur-3xl" />
            <div className="absolute left-[-10%] bottom-[-10%] h-[600px] w-[600px] rounded-full bg-white blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Comfort Master?</h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center text-white border border-white/20">
                      <PenTool className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Custom Manufacturing</h3>
                      <p className="text-blue-100 leading-relaxed">
                        We don't just sell windows; we make them. Our local manufacturing facility ensures strict quality control and cuts out the middleman markup.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center text-white border border-white/20">
                      <Shield className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Unbeatable Warranty</h3>
                      <p className="text-blue-100 leading-relaxed">
                        We stand behind our products with one of the best warranties in the industry. Your investment is protected for years to come.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center text-white border border-white/20">
                      <Star className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Experienced Professionals</h3>
                      <p className="text-blue-100 leading-relaxed">
                        Our courteous team of skilled professionals prides themselves on quality workmanship. We treat your home with the respect it deserves.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-6">Visit Our Showroom</h3>
                  <p className="mb-6 text-blue-100">
                    Customers are invited to visit our showroom and offices to see our quality firsthand and receive estimates on upcoming projects.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 mt-1 text-sky-300" />
                      <p>4410 Shepherdsville Road<br/>Louisville, KY 40218</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-sky-300" />
                      <p>(502) 456-0627</p>
                    </div>
                  </div>
                  
                  <Button className="w-full h-12 bg-white text-primary hover:bg-gray-100 font-bold text-lg" asChild>
                     <a href="https://maps.google.com/?q=4410+Shepherdsville+Road+Louisville+KY+40218" target="_blank" rel="noreferrer">
                       Get Directions
                     </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Ready to transform your home?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Contact us today for a free estimate. Let us assist you with your project.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <PhoneButton phoneNumber="(502) 456-0627" size="lg" className="h-16 px-10 text-xl shadow-xl shadow-primary/20">
                Call (502) 456-0627
              </PhoneButton>
              <PhoneButton phoneNumber="(800) 326-0077" variant="outline" size="lg" className="h-16 px-10 text-xl">
                Toll Free: (800) 326-0077
              </PhoneButton>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white font-bold">CM</div>
                <span className="text-lg font-bold text-white">Comfort Master</span>
              </div>
              <p className="max-w-sm">
                Serving Louisville, Kentucky and its surrounding areas with premium manufacturing and installation services.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                <li>Vinyl Windows</li>
                <li>Patio Enclosures</li>
                <li>Vinyl Siding</li>
                <li>Exterior Doors</li>
                <li>Gutter Guards</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>4410 Shepherdsville Road</li>
                <li>Louisville, KY 40218</li>
                <li>(502) 456-0627</li>
                <li>(800) 326-0077</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2025 Comfort Master Home Improvement. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed for the modern era.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
