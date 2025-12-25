import { useEffect, useState } from 'react';
import { eventsAPI, noticesAPI, statsAPI } from '@/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Calendar, Users, Award, TrendingUp } from 'lucide-react';

// Example component showing how to use the API
export default function DashboardExample() {
  const [stats, setStats] = useState<any>(null);
  const [events, setEvents] = useState<any[]>([]);
  const [notices, setNotices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch stats
        const statsResponse = await statsAPI.get();
        setStats(statsResponse.data.data);

        // Fetch events
        const eventsResponse = await eventsAPI.getAll({ status: 'upcoming' });
        setEvents(eventsResponse.data.data);

        // Fetch notices
        const noticesResponse = await noticesAPI.getAll({ priority: 'high' });
        setNotices(noticesResponse.data.data);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
      </div>
    );
  }

  const statCards = [
    {
      title: 'Total Events',
      value: stats?.total_events || 0,
      icon: Calendar,
      color: 'text-blue-500',
    },
    {
      title: 'Total Clubs',
      value: stats?.total_clubs || 0,
      icon: Users,
      color: 'text-green-500',
    },
    {
      title: 'Certificates',
      value: stats?.total_certificates || 0,
      icon: Award,
      color: 'text-purple-500',
    },
    {
      title: 'Registrations',
      value: stats?.total_registrations || 0,
      icon: TrendingUp,
      color: 'text-orange-500',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Events and Notices */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {events.length > 0 ? (
                  events.map((event) => (
                    <div
                      key={event.id}
                      className="flex items-start space-x-4 p-3 rounded-lg hover:bg-accent/5 transition-colors"
                    >
                      <div className="bg-accent text-accent-foreground rounded-lg p-2 text-center min-w-[50px]">
                        <div className="text-xl font-bold">
                          {new Date(event.date).getDate()}
                        </div>
                        <div className="text-xs">
                          {new Date(event.date).toLocaleString('default', {
                            month: 'short',
                          })}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{event.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {event.description}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {event.time} • {event.venue}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground">No upcoming events</p>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Important Notices */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Important Notices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notices.length > 0 ? (
                  notices.map((notice) => (
                    <div
                      key={notice.id}
                      className="border-l-4 border-accent pl-4 py-2 hover:bg-accent/5 transition-colors"
                    >
                      <h4 className="font-semibold">{notice.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {notice.content}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {new Date(notice.date).toLocaleDateString()}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground">No notices</p>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
