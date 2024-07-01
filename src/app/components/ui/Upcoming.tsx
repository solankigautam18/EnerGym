'use client';
import Link from "next/link";
import { HoverEffect } from "./card-hover-effect";
export default function Upcoming(){
const UpcomingCourses =  [
        {
            title: "Advanced HIIT Training",
            description: "Push your limits with our High-Intensity Interval Training course designed for advanced fitness enthusiasts. Burn more calories in less time with this intense workout.",
            slug: "advanced-hiit-training",
            isFeatured: true
          },
          {
            title: "Mindfulness and Yoga",
            description: "Enhance your mental well-being and flexibility with our Mindfulness and Yoga course. Learn various yoga postures and mindfulness techniques to reduce stress and improve overall health.",
            slug: "mindfulness-and-yoga",
            isFeatured: true
          },
          {
            title: "Functional Fitness",
            description: "Improve your daily movement patterns and strength with our Functional Fitness course. Focus on exercises that enhance your performance in everyday activities.",
            slug: "functional-fitness",
            isFeatured: false
          },
          {
            title: "Aquatic Fitness",
            description: "Join our Aquatic Fitness course for a low-impact, high-resistance workout in the pool. Perfect for all fitness levels, especially those with joint concerns.",
            slug: "aquatic-fitness",
            isFeatured: true
          },
          {
            title: "Cycling and Spin Classes",
            description: "Boost your cardiovascular health with our high-energy Cycling and Spin Classes. Enjoy a fun, fast-paced workout that will leave you feeling invigorated.",
            slug: "cycling-and-spin-classes",
            isFeatured: false
          },
          {
            title: "CrossFit Fundamentals",
            description: "Learn the basics of CrossFit with our Fundamentals course. Focus on high-intensity functional movements to build strength and endurance.",
            slug: "crossfit-fundamentals",
            isFeatured: true
          },
          {
            title: "Boxing and Kickboxing",
            description: "Get fit and learn self-defense with our Boxing and Kickboxing course. Perfect for those looking to increase strength, agility, and confidence.",
            slug: "boxing-and-kickboxing",
            isFeatured: false
          },
          {
            title: "Pilates for Core Strength",
            description: "Strengthen your core and improve your posture with our Pilates course. Ideal for those looking to enhance their stability and flexibility.",
            slug: "pilates-for-core-strength",
            isFeatured: true
          },
          {
            title: "Youth Fitness Program",
            description: "Encourage healthy habits in young ones with our Youth Fitness Program. Fun and engaging activities designed to keep kids active and fit.",
            slug: "youth-fitness-program",
            isFeatured: false
          }
        ];
      
    return(
        <div className="p-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Upcoming Courses</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white">Enhanced Fitness Journey with EnerGym.</p>
                </div>
                <div className="mt-10">
                <HoverEffect items={UpcomingCourses.map(course => ({
                    title: course.title,
                    description: course.description,
                    link: '/' //course.slug
                })) } />
                </div>
                <div className="mt-10 text-center">
                    <Link href={"/"} className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>View All
                    </Link>
                </div>
            </div>
        </div>
    )
}