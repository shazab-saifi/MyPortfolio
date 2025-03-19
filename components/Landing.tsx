import { BackgroundBeams } from "./Background-beam"
import HeroSection from "./HeroSection"
import Navbar from "./Navbar"

const Landing = () => {
  return (
    <div className="sm:px-20 px-4">
      <BackgroundBeams />
      <div className="z-50">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  )
}

export default Landing