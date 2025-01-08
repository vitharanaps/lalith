"use client";
import React from "react";
import { ImageHero } from "./ImageHero";
import { glowEffect } from "@/helper/styles";
import Image from "next/image";
import { TextGenerateEffect } from "./ui/text-generate-effects";
import { Typewriter } from "react-simple-typewriter";
import { Spotlight } from "./ui/Spotlight";
import Hero2 from "./Hero2";
import Header from "./Header";
const HeroText = () => {
  const myCursorData = [
    { text: "M Dancer" },
    { text: "M2 Dancer" },
    { text: "M 3Dancer" },
    { text: "M 3Dancer" },
  ];

  return (
    <div className="flex flex-col mb-14" >
    <Header />
    <div className="w-[100vw] h-[calc(100vh-120px)] " >
      <ImageHero>
        <div className="h-[100vh]  lg:max-w-[1280px] flex items-center justify-center mx-auto">
          <div className="flex w-full h-full justify-between items-center">
            <div className="w-1/2 h-full flex items-center justify-center">
              <Spotlight
                className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                fill="white"
              />
              <Spotlight
                className="h-[80vh] w-[50vw] top-10 left-full"
                fill="purple"
              />
              <Spotlight
                className="left-80 top-28 h-[80vh] w-[50vw]"
                fill="blue"
              />
              <div className="w-[80%] h-[70%]">
                <div className="flex-1 flex flex-col space-y-4  mt-5 items-center justify-center w-full sm:items-start sm:pl-3 sm:flex-col sm:mt-0 relative">
                  <h1 className="text-2xl">
                    {/* Hello! I &apos; m {info?.username} 👋{" "} */}
                    Hello! I &apos;m Lalith Parakum 👋
                  </h1>
                  <TextGenerateEffect
                    // words={
                    //   (info && info?.textGenerator) ||
                    //   "Full Stack Web and Mobile Engineer"
                    // }
                    words="professional international dancer test "
                    className="text-center sm:text-start  text-[30px] md:text-4xl lg:text-5xl"
                    duration={0.7}
                  />

                  <span
                    style={{ fontWeight: "semibold" }}
                    className="text-3xl font-thin text-center text-gray-300 sm:text-start"
                  >
                    <Typewriter
                      words={
                        myCursorData
                          ? myCursorData?.map((item) => item?.text)
                          : ["Web Developer"]
                      }
                      loop={150}
                      cursor
                      cursorStyle="|"
                      typeSpeed={20}
                      deleteSpeed={30}
                      delaySpeed={1000}
                      //     onLoopDone={handleDone}
                      //   onType={handleType}
                    />
                  </span>
                  {/* <Link href={info ? info?.cvLink : "/#"}> */}
                  {/* <MagicButton
                          title="Download My CV"
                          icon={<FaDownload />}
                          position="right"
                          otherClasses=""
                          containerStyles="my-6 "
                        /> */}
                  {/* </Link> */}
                </div>
              </div>
            </div>
            {/* Logo */}
            <div className=" flex-1 flex items-center justify-center w-[80%] h-[80%] relative rounded-full overflow-hidden">
              <Image
                src="/img/noAvatar.jpg"
                alt="Logo"
                width={50}
                height={50}
                className="cursor-pointer w-full h-full  object-cover "
                onClick={() => router.push("/")}
                style={glowEffect}
              />
              {/* <Hero2 /> */}
              {/* Black Transparent Overlay */}
              <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,0,0,0) 70%, rgba(0,0,0,0.9) 100%)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </ImageHero>
    </div>
    // </div>
  );
};

export default HeroText;
