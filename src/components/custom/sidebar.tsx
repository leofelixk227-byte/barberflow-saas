"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Scissors, 
  Users, 
  UserCircle, 
  Calendar, 
  DollarSign, 
  MessageSquare, 
  Settings,
  BarChart3,
  CreditCard
} from "lucide-react";
import { useEffect, useState } from "react";

interface SidebarProps {
  className?: string;
}

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Calendar, label: "Agenda", href: "/agenda" },
  { icon: Scissors, label: "Serviços", href: "/servicos" },
  { icon: UserCircle, label: "Barbeiros", href: "/barbeiros" },
  { icon: Users, label: "Clientes", href: "/clientes" },
  { icon: DollarSign, label: "Financeiro", href: "/financeiro" },
  { icon: BarChart3, label: "Relatórios", href: "/relatorios" },
  { icon: MessageSquare, label: "Bot WhatsApp", href: "/bot" },
  { icon: CreditCard, label: "Planos", href: "/planos" },
  { icon: Settings, label: "Configurações", href: "/configuracoes" },
];

export function Sidebar({ className = "" }: SidebarProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <aside className={`bg-gradient-to-b from-slate-900 to-slate-800 text-white w-64 min-h-screen ${className}`}>
        <div className="flex flex-col h-full">
          <div className="p-6">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-2 rounded-lg">
                <Scissors className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  BarberFlow
                </h1>
                <p className="text-xs text-slate-400">Gestão Inteligente</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside className={`bg-gradient-to-b from-slate-900 to-slate-800 text-white w-64 min-h-screen ${className}`}>
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-6">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
              <Scissors className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                BarberFlow
              </h1>
              <p className="text-xs text-slate-400">Gestão Inteligente</p>
            </div>
          </Link>
        </div>

        {/* Menu */}
        <nav className="px-3 flex-1 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50"
                    : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-slate-700">
          <div className="bg-slate-700/50 rounded-lg p-4">
            <p className="text-xs text-slate-400 mb-1">Plano Atual</p>
            <p className="text-sm font-semibold text-cyan-400">Premium</p>
            <button className="mt-2 text-xs text-slate-300 hover:text-white transition-colors">
              Gerenciar plano →
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
