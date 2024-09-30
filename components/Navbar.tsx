"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bus, Clock, AlertTriangle, Home } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/project/home", label: "Início", icon: Home },
    { href: "/project/horarios", label: "Horários", icon: Clock },
    { href: "/project/alertas", label: "Alertas", icon: AlertTriangle },
  ];

  return (
    <>
      <header className="bg-blue-900 text-white shadow-md sticky top-0 z-50 hidden md:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/project/home" className="flex items-center space-x-2">
              <Bus className="h-6 w-6" />
              <span className="text-xl font-bold">RJ Transportes</span>
            </Link>

            <nav className="flex space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "bg-blue-800 text-white"
                      : "text-blue-100 hover:bg-blue-800 hover:text-white"
                  }`}
                >
                  <item.icon className="mr-1 h-4 w-4" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <nav className="md:hidden fixed bottom-0 left-0 right-0  text-white z-50 bg-white">
        <Tabs defaultValue={pathname} className="w-ful h-16">
          <TabsList className="grid bg-white w-full grid-cols-3">
            {navItems.map((item) => (
              <TabsTrigger
                key={item.href}
                value={item.href}
                className="flex flex-col items-center py-2"
                onClick={() => (window.location.href = item.href)}
              >
                <item.icon className="h-5 w-5 mb-1" />
                <span className="text-xs">{item.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </nav>
    </>
  );
};

export default Navbar;
