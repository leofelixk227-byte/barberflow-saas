"use client";

import { Sidebar } from "@/components/custom/sidebar";
import { 
  DashboardCards, 
  QuickStats, 
  TopServices, 
  TopBarbers 
} from "@/components/custom/dashboard-cards";
import { Bell, Search, User } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 px-8 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
              <p className="text-sm text-slate-600">Bem-vindo ao BarberFlow</p>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="pl-10 pr-4 py-2 bg-slate-100 border-0 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all w-64"
                />
              </div>

              {/* Notifications */}
              <button className="relative p-2 hover:bg-slate-100 rounded-lg transition-colors">
                <Bell className="w-6 h-6 text-slate-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* User Menu */}
              <button className="flex items-center gap-3 px-4 py-2 hover:bg-slate-100 rounded-lg transition-colors">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="text-left hidden md:block">
                  <p className="text-sm font-semibold text-slate-900">Admin</p>
                  <p className="text-xs text-slate-600">Dono</p>
                </div>
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8 space-y-8">
          {/* Main Metrics */}
          <DashboardCards />

          {/* Quick Stats */}
          <QuickStats />

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TopServices />
            <TopBarbers />
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Próximos Agendamentos</h2>
            <div className="space-y-4">
              {[
                { client: "Maria Silva", service: "Corte + Barba", barber: "João Silva", time: "14:00", status: "confirmed" },
                { client: "Pedro Costa", service: "Corte Simples", barber: "Pedro Santos", time: "14:30", status: "pending" },
                { client: "Ana Souza", service: "Sobrancelha", barber: "Carlos Lima", time: "15:00", status: "confirmed" },
                { client: "Lucas Oliveira", service: "Barba", barber: "João Silva", time: "15:30", status: "pending" },
              ].map((appointment, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                      {appointment.client.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{appointment.client}</h3>
                      <p className="text-sm text-slate-600">{appointment.service} • {appointment.barber}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-bold text-slate-900">{appointment.time}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      appointment.status === "confirmed" 
                        ? "bg-green-100 text-green-700" 
                        : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {appointment.status === "confirmed" ? "Confirmado" : "Pendente"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
