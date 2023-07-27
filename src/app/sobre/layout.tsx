"use client";
import { useState } from "react";
import React from "react";
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
// import { Inter } from 'next/font/google'
import { Space_Grotesk } from 'next/font/google'

const space = Space_Grotesk({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'] })


export const metadata = {
  title: 'João 4ugusto',
  description: 'Meu portfólio pessoal',
}

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
