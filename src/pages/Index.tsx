import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ImmersiveExperience from "@/components/ImmersiveExperience";
import VirtualTours from "@/components/VirtualTours";
import InteractiveMap from "@/components/InteractiveMap";
import Features from "@/components/Features";
import ItineraryPlanner from "@/components/ItineraryPlanner";
import TourismIntegration from "@/components/TourismIntegration";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ImmersiveExperience />
      <VirtualTours />
      <InteractiveMap />
      <ItineraryPlanner />
      <Features />
      <TourismIntegration />
      <Footer />
    </div>
  );
};

export default Index;
