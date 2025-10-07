import Header from "@/src/components/Header"
import Hero from "@/src/components/Hero"
import ProductSection from "@/src/components/ProductSection"
import RSESection from "@/src/components/RSESection"
import ContactSection from "@/src/components/ContactSection"
import Footer from "@/src/components/Footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductSection />
      <RSESection />
      <ContactSection />
      <Footer />
    </div>
  )
}
