"use client";

import { motion } from "framer-motion";

interface WorldMapSVGProps {
  className?: string;
  pointsData: Array<{ x: number; y: number; delay: number }>;
  isVisible: boolean;
}

export default function WorldMapSVG({
  className,
  pointsData,
  isVisible,
}: WorldMapSVGProps) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <svg
        viewBox="0 0 1000 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Simplified world map paths */}
        <g stroke="white" strokeWidth="1" fill="none" opacity="0.4">
          {/* North America */}
          <path d="M170,80 C160,90 150,100 140,110 C130,120 120,130 110,140 C100,150 90,160 80,170 C70,180 60,190 50,200 C60,210 70,220 80,230 C90,240 100,250 110,260 C120,270 130,280 140,290 C150,280 160,270 170,260 C180,250 190,240 200,230 C210,220 220,210 230,200 C240,190 250,180 260,170 C250,160 240,150 230,140 C220,130 210,120 200,110 C190,100 180,90 170,80 Z" />

          {/* South America */}
          <path d="M250,290 C240,300 230,310 220,320 C210,330 200,340 190,350 C200,360 210,370 220,380 C230,390 240,400 250,410 C260,400 270,390 280,380 C290,370 300,360 310,350 C300,340 290,330 280,320 C270,310 260,300 250,290 Z" />

          {/* Europe */}
          <path d="M420,80 C410,90 400,100 390,110 C380,120 370,130 360,140 C370,150 380,160 390,170 C400,180 410,190 420,200 C430,190 440,180 450,170 C460,160 470,150 480,140 C470,130 460,120 450,110 C440,100 430,90 420,80 Z" />

          {/* Africa */}
          <path d="M420,200 C410,210 400,220 390,230 C380,240 370,250 360,260 C370,270 380,280 390,290 C400,300 410,310 420,320 C430,330 440,340 450,350 C460,340 470,330 480,320 C490,310 500,300 510,290 C520,280 530,270 540,260 C530,250 520,240 510,230 C500,220 490,210 480,200 C470,210 460,220 450,230 C440,220 430,210 420,200 Z" />

          {/* Asia */}
          <path d="M480,140 C490,130 500,120 510,110 C520,100 530,90 540,80 C550,90 560,100 570,110 C580,120 590,130 600,140 C610,150 620,160 630,170 C640,180 650,190 660,200 C670,210 680,220 690,230 C700,220 710,210 720,200 C730,190 740,180 750,170 C760,160 770,150 780,140 C770,130 760,120 750,110 C740,100 730,90 720,80 C710,90 700,100 690,110 C680,100 670,90 660,80 C650,90 640,100 630,110 C620,100 610,90 600,80 C590,90 580,100 570,110 C560,100 550,90 540,80 C530,90 520,100 510,110 C500,120 490,130 480,140 Z" />

          {/* Australia */}
          <path d="M750,320 C740,330 730,340 720,350 C730,360 740,370 750,380 C760,370 770,360 780,350 C790,340 800,330 810,320 C800,310 790,300 780,290 C770,300 760,310 750,320 Z" />
        </g>

        {/* Animated points */}
        {isVisible &&
          pointsData.map((point, index) => (
            <g key={index}>
              <motion.circle
                cx={point.x}
                cy={point.y}
                r={5}
                fill="white"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1.5, 1],
                  opacity: [0, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  delay: point.delay,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  repeatDelay: Math.random() * 2,
                }}
              />
              <motion.circle
                cx={point.x}
                cy={point.y}
                r={5}
                fill="white"
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{
                  scale: [1, 3],
                  opacity: [0.8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: Math.random(),
                }}
              />
            </g>
          ))}

        {/* Ethiopia highlight */}
        <motion.circle
          cx={450}
          cy={350}
          r={8}
          fill="#d1b06c"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.2, 1],
            opacity: [0, 1, 0.9],
          }}
          transition={{
            duration: 1.5,
            delay: 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            repeatDelay: 1,
          }}
        />
      </svg>
    </div>
  );
}
