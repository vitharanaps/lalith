"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LampContainer } from "./ui/lamp.jsx"; // Adjust this path if needed
import { glowEffect } from "@/helper/styles.js";

const Footer = () => {
  const router = useRouter();

  return (
    // Add some vertical spacing as needed
    //  <LampContainer className="!h-auto !min-h-0 pt-16 pb-8">
    //   {/* Main Footer Container */}
    <div className="bg-black w-[100vw] flex flex-col items-center justify-center">
      <div className="max-w-[1280px] w-[100vw] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:py-10 gap-8 bg-black"   >
        
        {/* 1) Company */}
        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className="text-lg font-bold">Company</h3>
          <ul className="items-center justify-center text-sm text-gray-300 space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* 2) Support */}
        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className="text-lg font-bold">Support</h3>
          <ul className=" items-center justify-center text-sm text-gray-300 space-y-2">
            <li>Help Center</li>
            <li>FAQs</li>
            <li>Terms of Service</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        {/* 3) Community */}
        <div className="flex flex-col items-center justify-center gap-4 ">
          <h3 className="text-lg font-bold">Community</h3>
          <ul className=" items-center justify-center text-sm text-gray-300 space-y-2">
            <li>Forum</li>
            <li>Blog</li>
            <li>Events</li>
            <li>Partnerships</li>
          </ul>
        </div>
  {/* 3) Community */}
  <div className="flex flex-col items-center justify-center gap-4">
          <h3 className="text-lg font-bold">Social Media</h3>
          <ul className=" items-center justify-center text-sm text-gray-300 space-y-2">
            <li>Facebook</li>
            <li>Instargram</li>
            <li>Youtube</li>
            <li>Partnerships</li>
          </ul>
        </div>

        {/* 4) Logo (Right side) */}
       
      </div>
      <div>All Right Reserved @ 2025</div>
    </div>
   
  );
};

export default Footer;
