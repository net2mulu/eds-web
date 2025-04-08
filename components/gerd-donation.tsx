"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aA6T6AviDRAYdk0xtcTAd6XGOyk29b.png"
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
              <div>
                <h3 className="text-lg font-medium mb-3">
                  Choose a donation amount
                </h3>
                <RadioGroup
                  defaultValue="25"
                  className="flex gap-4 mb-3"
                  onValueChange={handleAmountChange}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="25"
                      id="amount-25"
                      className="border-white"
                    />
                    <Label
                      htmlFor="amount-25"
                      className="text-white font-medium"
                    >
                      $25
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="50"
                      id="amount-50"
                      className="border-white"
                    />
                    <Label
                      htmlFor="amount-50"
                      className="text-white font-medium"
                    >
                      $50
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="100"
                      id="amount-100"
                      className="border-white"
                    />
                    <Label
                      htmlFor="amount-100"
                      className="text-white font-medium"
                    >
                      $100
                    </Label>
                  </div>
                </RadioGroup>

                <div className="mt-2">
                  <Label
                    htmlFor="custom-amount"
                    className="text-sm text-white/80 cursor-pointer hover:text-white"
                  >
                    Enter a custom donation amount
                  </Label>
                  <Input
                    id="custom-amount"
                    type="number"
                    placeholder="Custom amount"
                    className="mt-1 bg-transparent border-white/30 text-white placeholder:text-white/50"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">
                  Choose a donation frequency
                </h3>
                <RadioGroup
                  defaultValue="monthly"
                  className="grid grid-cols-2 gap-4"
                  onValueChange={setDonationFrequency}
                >
                  <div
                    className={`border rounded-md p-3 cursor-pointer ${
                      donationFrequency === "monthly"
                        ? "bg-[#0d2461] border-[#d1b06c]"
                        : "border-white/30"
                    }`}
                  >
                    <RadioGroupItem
                      value="monthly"
                      id="frequency-monthly"
                      className="sr-only"
                    />
                    <Label
                      htmlFor="frequency-monthly"
                      className="flex items-center justify-center cursor-pointer"
                    >
                      <div
                        className={`w-4 h-4 rounded-full mr-2 border ${
                          donationFrequency === "monthly"
                            ? "bg-[#d1b06c] border-[#d1b06c]"
                            : "border-white"
                        }`}
                      >
                        {donationFrequency === "monthly" && (
                          <div className="w-2 h-2 rounded-full bg-white mx-auto mt-[3px]"></div>
                        )}
                      </div>
                      Monthly
                    </Label>
                  </div>
                  <div
                    className={`border rounded-md p-3 cursor-pointer ${
                      donationFrequency === "one-time"
                        ? "bg-[#0d2461] border-[#d1b06c]"
                        : "border-white/30"
                    }`}
                  >
                    <RadioGroupItem
                      value="one-time"
                      id="frequency-one-time"
                      className="sr-only"
                    />
                    <Label
                      htmlFor="frequency-one-time"
                      className="flex items-center justify-center cursor-pointer"
                    >
                      <div
                        className={`w-4 h-4 rounded-full mr-2 border ${
                          donationFrequency === "one-time"
                            ? "bg-[#d1b06c] border-[#d1b06c]"
                            : "border-white"
                        }`}
                      >
                        {donationFrequency === "one-time" && (
                          <div className="w-2 h-2 rounded-full bg-white mx-auto mt-[3px]"></div>
                        )}
                      </div>
                      One time
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <p className="text-sm text-white/80">
                Your donation helps fund the Grand Ethiopian Renaissance Dam
                (GERD), empowering Ethiopia's future with sustainable energy and
                growth.
              </p>

              <div className="flex gap-4 mt-6">
                <Button
                  variant="outline"
                  className="flex-1 border-white text-white hover:bg-white/10"
                >
                  Cancel
                </Button>
                <Button
                  className="flex-1 bg-[#d1b06c] hover:bg-[#c19a49] text-[#0d2461] font-medium"
                  onClick={handleCheckout}
                >
                  Go to checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GERDDonation;
