'use client';
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";

    const instructors = [
      {
        id: 1,
        name: "John Doe",
        designation: "Personal Trainer",
        image: "https://res.cloudinary.com/dhl4uk0d0/image/upload/v1719737279/rohit-reddy-FGP9ifRTQaI-unsplash_yfnob0.jpg"
      },
      {
        id: 2,
        name: "Jane Smith",
        designation: "Fitness Instructor",
        image: "https://res.cloudinary.com/dhl4uk0d0/image/upload/v1719737203/fortune-vieyra-eCKIeu1Lkok-unsplash_1_bwlbje.jpg"
      },
      {
        id: 3,
        name: "Emily Brown",
        designation: "Yoga Instructor",
        image: "https://res.cloudinary.com/dhl4uk0d0/image/upload/v1719737328/scott-webb-5IsdIqwwNP4-unsplash_inxvkp.jpg"
      },
      {
        id: 4,
        name: "Senoria Marigona",
        designation: "Zumba Instructor",
        image: "https://res.cloudinary.com/dhl4uk0d0/image/upload/v1719737251/sonnie-hiles-rX8gBeg2WM0-unsplash_r9rpji.jpg",
      },
    ];
  

export default function Instructors(){
    return (
        <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
            <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
                <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Fitness Instructors</h2>
                <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your Fitness journey.</p>
                <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
                </div>
            </WavyBackground>
        </div>
    )
}