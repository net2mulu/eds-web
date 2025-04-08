"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AvatarCollageProps {
  className?: string;
  avatarItems: AvatarItem[];
  onHover: (isHovering: boolean) => void;
}

interface AvatarItem {
  src: string;
  alt: string;
  gridClasses: string;
  roundedFull?: boolean;
  contain?: boolean;
  clipped?: boolean;
  className?: string;
}

export default function AvatarCollage({
  className,
  avatarItems,
  onHover,
}: AvatarCollageProps) {
  const collageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const avatars =
              collageRef.current?.querySelectorAll(".avatar-item");
            avatars?.forEach((avatar, index) => {
              setTimeout(() => {
                avatar.classList.add("animate-in");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (collageRef.current) {
      observer.observe(collageRef.current);
    }

    return () => {
      if (collageRef.current) {
        observer.unobserve(collageRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={collageRef}
      className={cn(
        "relative w-full h-full bg-gray-50/30 overflow-hidden",
        className
      )}
    >
      <div className="grid grid-cols-8 grid-rows-6 gap-3 h-full w-full p-4">
        {avatarItems.map((avatar, index) => (
          <div
            key={index}
            className={cn(
              "avatar-item overflow-hidden opacity-0 translate-y-4 rounded-md hover:shadow-xl hover:z-50",
              avatar.gridClasses,
              "entrance-animation",
              avatarItems.length <= 3 && "full-height-image",
              avatar.className
            )}
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
          >
            <div
              className={cn(
                "relative w-full h-full",
                avatar.roundedFull && "rounded-full"
              )}
            >
              <Image
                src={avatar.src || "/placeholder.svg"}
                alt={avatar.alt}
                fill
                className={cn(
                  avatar.contain ? "object-contain" : "object-cover",
                  avatar.clipped && "clipped"
                )}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
