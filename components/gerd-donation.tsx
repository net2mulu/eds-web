"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const GERDDonation = () => {
  const [donationAmount, setDonationAmount] = useState("25");
  const [customAmount, setCustomAmount] = useState("");
  const [donationFrequency, setDonationFrequency] = useState("monthly");
  const [isCustom, setIsCustom] = useState(false);

  const handleAmountChange = (value: string) => {
    setDonationAmount(value);
    setIsCustom(false);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setIsCustom(true);
  };

  const handleCheckout = () => {
    const amount = isCustom ? customAmount : donationAmount;
    console.log(`Processing ${donationFrequency} donation of $${amount}`);
    // Add checkout logic here
  };

  return (
    <section className="w-full overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left side - Image */}
        <div className="relative h-[400px] lg:h-auto">
          <Image
            src="/Home/sectionSeven/dam.webp"
            alt="Grand Ethiopian Renaissance Dam"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right side - Donation form */}
        <div className="bg-[#1a3a8f] text-white p-8 lg:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto">
            <div className="inline-flex items-center border border-[#d1b06c]/30 rounded-full px-4 py-1 mb-4">
              <span className="text-[#d1b06c] font-medium">DONATE</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Contribute for the GERD
              <br />
              <span className="text-[#d1b06c]">- Ethiopia's Renaissance</span>
            </h2>

            <p className="mb-8 text-white/90">
              Join us in empowering change and building a brighter future for
              our nation
            </p>

            <div className="space-y-6">
              <p className="text-sm text-white/80">
                Your donation helps fund the Grand Ethiopian Renaissance Dam
                (GERD), empowering Ethiopia's future with sustainable energy and
                growth.
              </p>

              <div className="flex gap-4 mt-6">
                <Link
                  href="https://fastpayet.com/donation/view/JeyK6PndcBl1V6XwafVr"
                  target="_blank"
                >
                  <Button className="flex-1 bg-[#d1b06c] hover:bg-[#c19a49] text-[#0d2461] font-medium">
                    Go to donation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GERDDonation;
