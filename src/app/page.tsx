"use client"
import {useState} from 'react'
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Home from '@/components/Home';

export default function Page() {
  const [sidebarOpened, setSidebarOpened] =  useState(false);

  const openSaidebar = () => setSidebarOpened(true)
  const clouseSaidebar = () => setSidebarOpened(false)

  return (
     <main className="flex min-h-screen">
      <Sidebar open={sidebarOpened} onClose={clouseSaidebar}>

      </Sidebar>
      <Header openSaidebarClick={openSaidebar} />

      <Home />
     </main>
  );
}
