"use client";
import { usePathname } from "next/navigation";

export default function LayoutComp({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div
      className={
        pathname.startsWith("/studio") ? "mx-auto" : "max-w-7xl mx-auto"
      }
    >
      {children}
    </div>
  );
}
