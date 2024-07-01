"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const gymContent = [
      {
        title: "Certified Personal Trainers",
        description: "Our team of certified personal trainers is dedicated to helping you reach your fitness goals with personalized workout plans and continuous support."
      },
      {
        title: "State-of-the-Art Equipment",
        description: "We offer the latest and most advanced fitness equipment to ensure you have everything you need for a comprehensive workout."
      },
      {
        title: "Diverse Group Classes",
        description: "Join our diverse group fitness classes including Zumba, Yoga, Pilates, and more. Enjoy the energy and motivation of a group setting while getting fit."
      },
      {
        title: "Nutritional Guidance",
        description: "Our expert nutritionists provide personalized dietary plans to complement your fitness routine and promote overall well-being."
      },
      {
        title: "Comprehensive Cardio Programs",
        description: "Engage in our cardio programs designed to improve heart health and endurance, with a variety of exercises to keep you motivated."
      },
      {
        title: "Strength Training Expertise",
        description: "Build muscle and increase strength with our state-of-the-art weightlifting equipment and expert guidance, suitable for all fitness levels."
      },
      {
        title: "Luxurious Spa Services",
        description: "Unwind after your workout with our luxurious spa services, including massages, saunas, and relaxation therapies."
      },
      {
        title: "Top Athlete Achievements",
        description: "Our top athletes have achieved national and international recognition in various sports, showcasing the effectiveness of our training programs and facilities."
      }
    ];
  

export default function WhyChooseUs(){
    return (
        <div className="flex flex-col w-full"> 
            <StickyScroll content={gymContent} />
        </div>
    )
}