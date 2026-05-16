"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

function WeddingCount() {
  const weddingDate = new Date(2026, 0, 28, 9, 30, 0);

  const [mounted, setMounted] = useState(false);

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    after: false,
  });

  // ✅ Run ONLY on client
  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      const now = new Date();
      let diff = weddingDate.getTime() - now.getTime();
      let after = false;

      if (diff < 0) {
        diff = Math.abs(diff);
        after = true;
      }

      const totalSeconds = Math.floor(diff / 1000);

      setTime({
        days: Math.floor(totalSeconds / (60 * 60 * 24)),
        hours: Math.floor((totalSeconds / (60 * 60)) % 24),
        minutes: Math.floor((totalSeconds / 60) % 60),
        seconds: totalSeconds % 60,
        after,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // ✅ Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <main className="mt-12">
      {/* TITLE */}
      <div className="flex items-center justify-center my-6  text-center px-4">
        <Image
          src="/design1.png"
          alt="left"
          width={180}
          height={90}
          className="hidden md:block"
        />

        <div className="mx-4">
          <h1 className="font-1 text-[8vw] md:text-[4vw] lg:text-[3vw]">
                        Prasanna ❤️ Subha

          </h1>
          <p className="font-2 text-[3.5vw] md:text-[1.8vw] lg:text-[1.3vw]">
            {time.after
              ? "Happily married since 28 Jan 2026 ❤️"
              : "We are getting married on 28 Jan 2026, 9:30 AM"}
          </p>
        </div>

        <Image
          src="/design2.png"
          alt="right"
          width={180}
          height={90}
          className="hidden md:block"
        />
      </div>

      {/* COUNTDOWN GRID */}
      <div className="flex justify-center px-4">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 md:gap-8 lg:gap-12 text-center">
          <CountdownBox value={time.days} label="Days" />
          <CountdownBox value={time.hours} label="Hours" />
          <CountdownBox value={time.minutes} label="Minutes" />
          <CountdownBox value={time.seconds} label="Seconds" />
        </div>
      </div>
    </main>
  );
}

export default WeddingCount;

function CountdownBox({ value, label }) {
  return (
    <div className="relative flex justify-center items-center">
      <Image
        src="/sqaure.png"
        alt={label}
        width={200}
        height={200}
        className="
          w-32.5 h-32.5
          sm:w-37.5 sm:h-37.5
          md:w-42.5 md:h-42.5
          lg:w-50 lg:h-50
        "
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-2 text-[6vw] sm:text-[5vw] md:text-[3vw] lg:text-[2.2vw]">
          {value}
        </span>
        <span className="font-2 mt-1 text-[3vw] sm:text-[2.5vw] md:text-[1.3vw] lg:text-[1vw]">
          {label}
        </span>
      </div>
    </div>
  );
}
