import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/WhyChooseUs";
import GymTestimonials from "./components/TestimonialCards";
import Upcoming from "./components/ui/Upcoming";
import Instructors from "./components/Instructors";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] h-full w-full">

    <HeroSection />
    <FeaturedCourses />
    <WhyChooseUs />
    <GymTestimonials />
    <Upcoming />
    <Instructors />
    <Footer />
    </main>
  );
}
