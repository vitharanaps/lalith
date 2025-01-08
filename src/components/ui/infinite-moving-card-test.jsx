"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";

export const InfiniteMovingCardsTest = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  console.log("item", items);
  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <div className="flex items-center justify-between ">
                <span className=" text-sm leading-[1.6] text-gray-100  font-normal">
                  {item.name}
                </span>
                <img
                  src={item.profileImage}
                  alt="profile image"
                  width={100}
                  height={100}
                  className="w-10 h-10 rounded-full"
                />
              </div>

              <br />
              <span className=" relative z-20 text-sm leading-[1.6] text-gray-400 font-normal">
                ❝ {item.quote} ❞
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center justify-between">
              <div className="flex items-center">
                {Array.from({ length: 10 }).map((_, starIdx) => (
                  <svg
                    key={starIdx}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 star-hover ${
                      starIdx < item.rating
                        ? "text-yellow-500"
                        : "text-gray-500"
                    }`}
                    fill={starIdx < item.rating ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    />
                  </svg>
                ))}
              </div>
                <span className=" text-xs leading-[1.6] text-gray-400 font-normal">
                  {item?.createdAt && item.createdAt.toDate
                    ? format(item.createdAt.toDate(), "dd MMM yyyy")
                    : "N/A"}
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
