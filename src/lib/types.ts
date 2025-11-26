// BarberFlow - Tipos e Interfaces Base

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'owner' | 'barber' | 'client';
  barbershopId: string;
  createdAt: Date;
}

export interface Barbershop {
  id: string;
  name: string;
  ownerId: string;
  plan: 'basic' | 'pro' | 'premium';
  createdAt: Date;
}

export interface Barber {
  id: string;
  name: string;
  photo?: string;
  specialties: string[];
  workSchedule: WorkSchedule;
  commissionType: 'fixed' | 'variable';
  commissionRate: number;
  barbershopId: string;
  isActive: boolean;
}

export interface WorkSchedule {
  monday?: TimeSlot;
  tuesday?: TimeSlot;
  wednesday?: TimeSlot;
  thursday?: TimeSlot;
  friday?: TimeSlot;
  saturday?: TimeSlot;
  sunday?: TimeSlot;
}

export interface TimeSlot {
  start: string; // "09:00"
  end: string;   // "18:00"
}

export interface Service {
  id: string;
  name: string;
  price: number;
  duration: number; // em minutos
  commission: number; // percentual
  availableBarbers: string[]; // IDs dos barbeiros
  barbershopId: string;
  isActive: boolean;
}

export interface Client {
  id: string;
  name: string;
  phone: string;
  whatsapp: string;
  totalSpent: number;
  lastVisit?: Date;
  barbershopId: string;
  createdAt: Date;
}

export interface Appointment {
  id: string;
  clientId: string;
  barberId: string;
  serviceId: string;
  date: Date;
  startTime: string;
  endTime: string;
  status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled' | 'no-show';
  price: number;
  commission: number;
  notes?: string;
  barbershopId: string;
  createdAt: Date;
}

export interface CashFlow {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  description: string;
  category: string;
  appointmentId?: string;
  date: Date;
  barbershopId: string;
}

export interface Commission {
  id: string;
  barberId: string;
  appointmentId: string;
  amount: number;
  percentage: number;
  month: string; // "2024-01"
  isPaid: boolean;
  barbershopId: string;
}

export interface DashboardMetrics {
  todayAppointments: number;
  weekAppointments: number;
  monthAppointments: number;
  todayRevenue: number;
  weekRevenue: number;
  monthRevenue: number;
  averageTicket: number;
  topServices: Array<{ name: string; count: number; revenue: number }>;
  topBarbers: Array<{ name: string; appointments: number; revenue: number }>;
  peakHours: Array<{ hour: string; count: number }>;
  cancelledAppointments: number;
}

export interface Plan {
  id: string;
  name: 'basic' | 'pro' | 'premium';
  price: number;
  features: string[];
  billingCycle: 'monthly' | 'annual';
}

export interface BotMessage {
  id: string;
  clientPhone: string;
  message: string;
  response: string;
  intent: string;
  appointmentId?: string;
  timestamp: Date;
  barbershopId: string;
}

export interface Notification {
  id: string;
  type: 'reminder_24h' | 'reminder_1h' | 'confirmation' | 'feedback';
  recipientPhone: string;
  message: string;
  appointmentId: string;
  sentAt?: Date;
  status: 'pending' | 'sent' | 'failed';
  barbershopId: string;
}
