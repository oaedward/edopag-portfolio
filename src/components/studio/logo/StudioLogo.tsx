"use client";

import Image from "next/image";

export default function StudioLogo() {
  return (
    <div className="flex items-center">
      <Image
        src="/assets/logo/studio_logo_white.svg"
        width={70}
        height={20}
        alt="logo"
        priority={true}
      />
    </div>
  );
}
