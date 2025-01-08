import Contact from "@/components/Contact";
import Hero2 from "@/components/Hero2";
import HeroText from "@/components/HeroText";
import HighlightedAchievements from "@/components/HighlightedAchievements";
import { ImageHero } from "@/components/ImageHero";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import ProfileSection from "@/components/ProfileSection";
import { TypewriterEffectDemo } from "@/components/TypeWriterEffect";
import UserReviewForm from "@/components/UserReviewForm"; // Import the new component
//import SuccessStories from '@/components/SuccessStories';
import { VideoBackgroundHero } from "@/components/VideoBackgroundHero";
import { AboutLalith } from "@/components/ui/AboutLalith";

const testimonials = [
  {
    id: 1,
    quote: "Test 1",
    name: "fdsfd",
    designation: "test desination",
    src: "https://images.unsplash.com/photo-1669475616380-ecb159b790d4?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    quote: "Test 1",
    name: "test ",
    designation: "test desination",
    src: "https://images.unsplash.com/photo-1669475616380-ecb159b790d4?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    quote: "Test 1",
    name: "test fs",
    designation: "test desination",
    src: "https://images.unsplash.com/photo-1669475616380-ecb159b790d4?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const HomePage = () => {
  return (
    <div>
      {/* <HeroSection /> */}
      {/* <Hero2 /> */}
      <HeroText />
      {/* <ImageHero/> */}
      {/* <TypewriterEffectDemo /> */}
      {/* <AboutLalith testimonials={testimonials} /> */}
      <ProfileSection />
      {/* <HighlightedAchievements /> */}
      {/* <SuccessStories /> */}
      <InfiniteMovingCardsDemo />
      <Contact />
      {/* <UserReviewForm /> */}
    </div>
  );
};

export default HomePage;
