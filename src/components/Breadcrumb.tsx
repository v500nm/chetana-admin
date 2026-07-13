"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function Breadcrumb() {
  const pathname = usePathname();
  const pathNames = pathname.split("/").filter((path) => path);

  const formatSegment = (segment: string) => {
    // Replace hyphens with spaces and capitalize words
    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <nav className="flex items-center text-on-surface-variant text-sm font-label-md">
      <Link href="/" className="hover:text-primary transition-colors flex items-center">
        <span className="material-symbols-outlined text-[18px]">home</span>
      </Link>
      
      {pathNames.length > 0 && (
        <span className="material-symbols-outlined text-[16px] mx-1 opacity-50">chevron_right</span>
      )}

      {pathNames.map((link, index) => {
        const href = `/${pathNames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathNames.length - 1;
        const formattedLink = formatSegment(link);

        return (
          <React.Fragment key={index}>
            {isLast ? (
              <span className="text-primary font-semibold">{formattedLink}</span>
            ) : (
              <Link href={href} className="hover:text-primary transition-colors">
                {formattedLink}
              </Link>
            )}
            {!isLast && (
              <span className="material-symbols-outlined text-[16px] mx-1 opacity-50">chevron_right</span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
