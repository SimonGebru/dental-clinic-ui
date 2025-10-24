export interface Patient {
  id: string;
  name: string;
  phone: string;
  consent: boolean;
  lastAppointment: string;
}

export interface Message {
  id: string;
  patientName: string;
  type: string;
  content: string;
  status: "sent" | "failed" | "scheduled";
  date: string;
}

export interface Template {
  id: string;
  name: string;
  category: "thank-you" | "reminder" | "promotion";
  content: string;
}

export const mockPatients: Patient[] = [
  { id: "1", name: "Anna Svensson", phone: "+46701234567", consent: true, lastAppointment: "2024-10-15" },
  { id: "2", name: "Erik Johansson", phone: "+46702345678", consent: true, lastAppointment: "2024-10-18" },
  { id: "3", name: "Maria Karlsson", phone: "+46703456789", consent: false, lastAppointment: "2024-09-22" },
  { id: "4", name: "Lars Nilsson", phone: "+46704567890", consent: true, lastAppointment: "2024-10-20" },
  { id: "5", name: "Sofia Andersson", phone: "+46705678901", consent: true, lastAppointment: "2024-10-12" },
  { id: "6", name: "Johan Berg", phone: "+46706789012", consent: false, lastAppointment: "2024-09-30" },
  { id: "7", name: "Emma Lindberg", phone: "+46707890123", consent: true, lastAppointment: "2024-10-21" },
  { id: "8", name: "Oscar Gustafsson", phone: "+46708901234", consent: true, lastAppointment: "2024-10-16" },
];

export const mockMessages: Message[] = [
  {
    id: "1",
    patientName: "Anna Svensson",
    type: "Thank You",
    content: "Thank you for visiting us today, Anna! We hope to see you again soon.",
    status: "sent",
    date: "2024-10-21 14:30",
  },
  {
    id: "2",
    patientName: "Erik Johansson",
    type: "Reminder",
    content: "Hi Erik! This is a reminder about your check-up tomorrow at 10:00 AM.",
    status: "scheduled",
    date: "2024-10-22 09:00",
  },
  {
    id: "3",
    patientName: "Sofia Andersson",
    type: "Promotion",
    content: "Special offer! Get 20% off teeth whitening this month. Book now!",
    status: "sent",
    date: "2024-10-20 11:00",
  },
  {
    id: "4",
    patientName: "Maria Karlsson",
    type: "Reminder",
    content: "Hi Maria! Don't forget your appointment next week.",
    status: "failed",
    date: "2024-10-19 15:00",
  },
];

export const mockTemplates: Template[] = [
  {
    id: "1",
    name: "Post-Visit Thank You",
    category: "thank-you",
    content: "Thank you for visiting us today, {{first_name}}! We appreciate your trust in our care.",
  },
  {
    id: "2",
    name: "Appointment Reminder",
    category: "reminder",
    content: "Hi {{first_name}}! This is a reminder about your appointment on {{date}} at {{time}}.",
  },
  {
    id: "3",
    name: "Teeth Whitening Promotion",
    category: "promotion",
    content: "Special offer for {{first_name}}! Get 20% off teeth whitening this month. Call us to book!",
  },
  {
    id: "4",
    name: "Follow-up Check",
    category: "reminder",
    content: "Hi {{first_name}}, it's time for your 6-month check-up. Please call to schedule.",
  },
];
