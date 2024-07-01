'use client';
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Testimonials = [
      {
        quote: "Joining this gym has been a life-changing experience for me. The trainers are incredibly supportive and the facilities are top-notch.",
        name: "John Doe",
        title: "PowerLifting Client"
      },
      {
        quote: "The group classes are fantastic! I've tried Zumba, Yoga, and Pilates, and every class has been fun and challenging. Highly recommend!",
        name: "Jane Smith",
        title: "Group Class Regular"
      },
      {
        quote: "Thanks to the personal training sessions, I was able to achieve my fitness goals in a much shorter time than I expected. The trainers are amazing!",
        name: "Emily Brown",
        title: "Personal Training Client"
      },
      {
        quote: "The spa services are the perfect way to relax after a hard workout. The massages and saunas are just what I need to unwind.",
        name: "Michael Johnson",
        title: "Spa Enthusiast"
      },
      {
        quote: "I've never felt more at home in a gym. The community here is so welcoming and encouraging. It's the best place to work out and make friends.",
        name: "Maria Garcia",
        title: "Gym Member"
      },
      {
        quote: "The nutritional guidance I received here has been invaluable. I've learned how to eat healthily and balance my diet to support my fitness goals.",
        name: "David Lee",
        title: "Nutrition Client"
      }
    ];
  

export default function GymTestimonials(){
    return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden"> 
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear Our Harmony: Voices Of Success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
                <InfiniteMovingCards
                items={Testimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
        </div>
    )
}