import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, CheckCircle, XCircle, Users, Calendar } from "lucide-react";

const stats = [
  {
    title: "Total Messages Sent",
    value: "1,284",
    icon: MessageSquare,
    change: "+12% from last month",
    color: "text-primary",
  },
  {
    title: "Success Rate",
    value: "98.5%",
    icon: CheckCircle,
    change: "+2.4% from last month",
    color: "text-success",
  },
  {
    title: "Failed Messages",
    value: "19",
    icon: XCircle,
    change: "-5 from last month",
    color: "text-destructive",
  },
  {
    title: "Active Patients",
    value: "342",
    icon: Users,
    change: "+18 new this month",
    color: "text-accent",
  },
];

const upcomingReminders = [
  { patient: "Anna Svensson", type: "Check-up Reminder", time: "Tomorrow, 10:00 AM" },
  { patient: "Erik Johansson", type: "Follow-up", time: "Tomorrow, 2:00 PM" },
  { patient: "Maria Karlsson", type: "Appointment Confirmation", time: "In 2 days" },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Overview of your clinic's messaging activity</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title} className="transition-shadow hover:shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upcoming Reminders */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <CardTitle>Upcoming Scheduled Messages</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingReminders.map((reminder, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border border-border p-4 transition-colors hover:bg-muted/50"
                >
                  <div>
                    <p className="font-medium text-foreground">{reminder.patient}</p>
                    <p className="text-sm text-muted-foreground">{reminder.type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">{reminder.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
