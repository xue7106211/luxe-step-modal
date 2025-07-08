"use client";

import Image from "next/image";
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/input-otp";
import { useState } from "react";

export default function Home() {
  const [otp, setOtp] = useState("");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-4 items-center w-full max-w-xs mt-8">
        <h2 className="text-lg font-semibold">One-time Password</h2>
        <InputOTP value={otp} onChange={setOtp} maxLength={6} containerClassName="justify-center">
          <InputOTPGroup>
            {Array.from({ length: 6 }).map((_, i) => (
              <InputOTPSlot key={i} index={i} />
            ))}
          </InputOTPGroup>
          <InputOTPSeparator />
        </InputOTP>
        <div className="text-sm text-gray-500">当前输入：{otp}</div>
      </div>
    </div>
  );
}
