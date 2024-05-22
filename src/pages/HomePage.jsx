// import AboutSection from '../container/AboutSection'
import HeroSection from '../container/HeroSection'
import FeatureSection from '../container/FeatureSection'
import PageLayout from '../container/PageLayout'
import PricingSection from '../container/PricingSection'
import ContactSection from '../container/ContactSection'
// import WorkSection from '../container/WorkSection'
// import ClientsSection from '../container/ClientsSection'
const HomePage = () => {
  return (
    <PageLayout>
      <div className="w-full">
        <HeroSection />
        {/* <AboutSection /> */}
        {/* <ClientsSection /> */}
        <FeatureSection />
        {/* <WorkSection /> */}
        <PricingSection />
        <ContactSection />
      </div>
    </PageLayout>
  );
}

export default HomePage