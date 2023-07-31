"use client";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    


  return (
    <main className="flex min-h-screen">
      {children}
     </main>
  )
}