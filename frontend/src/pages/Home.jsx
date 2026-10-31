import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import AiPreview from '../components/AiPreview'
import Faq from '../components/Faq'
import CallToAction from '../components/CallToAction'

function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <HowItWorks />
      <AiPreview />
      <Faq />
      <CallToAction />
    </div>
  )
}

export default Home