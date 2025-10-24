import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, TrendingDown } from "lucide-react";

const weeklyData = [
  { day: "Mon", sent: 42 },
  { day: "Tue", sent: 38 },
  { day: "Wed", sent: 55 },
  { day: "Thu", sent: 48 },
  { day: "Fri", sent: 62 },
  { day: "Sat", sent: 28 },
  { day: "Sun", sent: 15 },
];

const metrics = [
  { label: "Average Daily Messages", value: "41.1", trend: "+8.2%", up: true },
  { label: "Success Rate", value: "98.5%", trend: "+1.3%", up: true },
  { label: "Opt-out Rate", value: "0.8%", trend: "-0.2%", up: false },
  { label: "Response Rate", value: "23.4%", trend: "+4.1%", up: true },
];

export default function Reports() {
  const maxSent = Math.max(...weeklyData.map((d) => d.sent));

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
          <p className="text-muted-foreground">Track your messaging performance</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <Card key={metric.label}>
              <CardHeader className="pb-2">
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                  <div
                    className={`flex items-center gap-1 text-sm font-medium ${
                      metric.up ? "text-success" : "text-destructive"
                    }`}
                  >
                    {metric.up ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : (
                      <TrendingDown className="h-4 w-4" />
                    )}
                    {metric.trend}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chart */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              <CardTitle>Messages Sent This Week</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {weeklyData.map((data) => (
                <div key={data.day} className="flex items-center gap-4">
                  <div className="w-12 text-sm font-medium text-foreground">{data.day}</div>
                  <div className="flex-1">
                    <div className="h-8 rounded-lg bg-muted">
                      <div
                        className="h-full rounded-lg bg-primary transition-all"
                        style={{ width: `${(data.sent / maxSent) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="w-12 text-right text-sm font-medium text-foreground">
                    {data.sent}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Additional Stats */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Top Message Types</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Reminders</span>
                <span className="font-medium text-foreground">52%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Thank You</span>
                <span className="font-medium text-foreground">31%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Promotions</span>
                <span className="font-medium text-foreground">17%</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Peak Sending Times</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">9:00 - 11:00</span>
                <span className="font-medium text-foreground">42%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">14:00 - 16:00</span>
                <span className="font-medium text-foreground">35%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Other times</span>
                <span className="font-medium text-foreground">23%</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
