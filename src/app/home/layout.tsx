"use client";
import { useState } from "react";
import React from "react";
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    
  const [sidebarOpened, setSidebarOpened] =  useState(false);

  const openSaidebar = () => setSidebarOpened(true)
  const clouseSaidebar = () => setSidebarOpened(false)

  return (
    <main className="flex min-h-screen">
      <Sidebar open={sidebarOpened} onClose={clouseSaidebar}>
      </Sidebar>
      <Header openSaidebarClick={openSaidebar} />
      {children}
     </main>
  )
}
