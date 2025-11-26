"use client";

import { 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  Users,
  Clock,
  XCircle,
  ArrowUp,
  ArrowDown
} from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ElementType;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color: "blue" | "green" | "purple" | "orange" | "red";
}

const colorClasses = {
  blue: "from-blue-500 to-cyan-500",
  green: "from-emerald-500 to-teal-500",
  purple: "from-purple-500 to-pink-500",
  orange: "from-orange-500 to-amber-500",
  red: "from-red-500 to-rose-500",
};

function MetricCard({ title, value, subtitle, icon: Icon, trend, color }: MetricCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
      <div className="flex items-start justify-between mb-4">
        <div className={`bg-gradient-to-r ${colorClasses[color]} p-3 rounded-xl shadow-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-sm font-semibold ${
            trend.isPositive ? "text-green-600" : "text-red-600"
          }`}>
            {trend.isPositive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
            {trend.value}%
          </div>
        )}
      </div>
      <h3 className="text-slate-600 text-sm font-medium mb-1">{title}</h3>
      <p className="text-3xl font-bold text-slate-900 mb-1">{value}</p>
      {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
    </div>
  );
}

export function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard
        title="Agendamentos Hoje"
        value={12}
        subtitle="3 confirmados"
        icon={Calendar}
        color="blue"
        trend={{ value: 15, isPositive: true }}
      />
      <MetricCard
        title="Faturamento Hoje"
        value="R$ 1.240"
        subtitle="Meta: R$ 2.000"
        icon={DollarSign}
        color="green"
        trend={{ value: 8, isPositive: true }}
      />
      <MetricCard
        title="Ticket Médio"
        value="R$ 103"
        subtitle="Últimos 30 dias"
        icon={TrendingUp}
        color="purple"
        trend={{ value: 12, isPositive: true }}
      />
      <MetricCard
        title="Clientes Ativos"
        value={248}
        subtitle="Este mês"
        icon={Users}
        color="orange"
        trend={{ value: 5, isPositive: true }}
      />
    </div>
  );
}

export function QuickStats() {
  const stats = [
    { label: "Agendamentos Semana", value: 67, icon: Calendar, color: "text-blue-600" },
    { label: "Agendamentos Mês", value: 284, icon: Calendar, color: "text-purple-600" },
    { label: "Horário Mais Lucrativo", value: "14h-16h", icon: Clock, color: "text-green-600" },
    { label: "Cancelamentos", value: 8, icon: XCircle, color: "text-red-600" },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Estatísticas Rápidas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
              <Icon className={`w-5 h-5 ${stat.color}`} />
              <div>
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-xs text-slate-600">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function TopServices() {
  const services = [
    { name: "Corte + Barba", count: 45, revenue: 4500, color: "bg-blue-500" },
    { name: "Corte Simples", count: 38, revenue: 1900, color: "bg-purple-500" },
    { name: "Barba", count: 22, revenue: 1100, color: "bg-green-500" },
    { name: "Sobrancelha", count: 15, revenue: 450, color: "bg-orange-500" },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Serviços Mais Vendidos</h2>
      <div className="space-y-4">
        {services.map((service) => (
          <div key={service.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-medium text-slate-900">{service.name}</span>
              <span className="text-sm text-slate-600">{service.count} vendas</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-slate-100 rounded-full h-2 overflow-hidden">
                <div 
                  className={`${service.color} h-full rounded-full transition-all duration-500`}
                  style={{ width: `${(service.count / 45) * 100}%` }}
                />
              </div>
              <span className="text-sm font-semibold text-green-600">
                R$ {service.revenue.toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TopBarbers() {
  const barbers = [
    { name: "João Silva", appointments: 52, revenue: 5200, photo: "👨‍🦱" },
    { name: "Pedro Santos", appointments: 48, revenue: 4800, photo: "👨" },
    { name: "Carlos Lima", appointments: 41, revenue: 4100, photo: "👨‍🦰" },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Barbeiros Destaque</h2>
      <div className="space-y-4">
        {barbers.map((barber, index) => (
          <div key={barber.name} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-2xl">
              {barber.photo}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-slate-900">{barber.name}</h3>
                {index === 0 && (
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    🏆 TOP 1
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-600">{barber.appointments} atendimentos</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-green-600">R$ {barber.revenue.toLocaleString()}</p>
              <p className="text-xs text-slate-500">faturado</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
