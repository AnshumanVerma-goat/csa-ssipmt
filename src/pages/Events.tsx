import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Events = () => {
  const [selectedSession, setSelectedSession] = useState("2024-25");

  const sessions = ["2022-23", "2023-24", "2024-25", "2025-26"];

  const events = [
    {
      id: 1,
      title: "Annual Tech Fest 2025",
      date: "March 25, 2025",
      month: "Mar",
      day: "25",
      location: "Main Auditorium",
      participants: "500+",
      description: "The biggest technology event of the year featuring competitions, workshops, and exhibitions.",
      registrationOpen: true,
      session: "2024-25",
    },
    {
      id: 2,
      title: "Coding Marathon",
      date: "April 10, 2025",
      month: "Apr",
      day: "10",
      location: "Computer Lab",
      participants: "200+",
      description: "24-hour coding challenge to test your programming skills and endurance.",
      registrationOpen: true,
      session: "2024-25",
    },
    {
      id: 3,
      title: "AI Workshop Series",
      date: "May 5-7, 2025",
      month: "May",
      day: "05",
      location: "Seminar Hall",
      participants: "150+",
      description: "Three-day intensive workshop on Artificial Intelligence and Machine Learning.",
      registrationOpen: true,
      session: "2024-25",
    },
  ];

  const filteredEvents = events.filter((event) => event.session === selectedSession);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Events & Competitions</h1>
          <p className="text-lg text-muted-foreground">
            Explore our calendar of events, competitions, and workshops
          </p>
        </div>

        <Tabs defaultValue="2024-25" className="mb-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            {sessions.map((session) => (
              <TabsTrigger
                key={session}
                value={session}
                onClick={() => setSelectedSession(session)}
              >
                {session}
              </TabsTrigger>
            ))}
          </TabsList>

          {sessions.map((session) => (
            <TabsContent key={session} value={session} className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event) => (
                    <Card key={event.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex gap-4">
                          <div className="bg-accent text-accent-foreground rounded-lg p-3 text-center min-w-[70px] h-fit">
                            <div className="text-3xl font-bold">{event.day}</div>
                            <div className="text-sm">{event.month}</div>
                          </div>
                          <div className="flex-1">
                            <CardTitle className="mb-2">{event.title}</CardTitle>
                            <CardDescription>{event.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="w-4 h-4" />
                            <span>{event.participants} Expected</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="default" asChild>
                            <Link to={`/events/${event.id}`}>View Details</Link>
                          </Button>
                          {event.registrationOpen && (
                            <Button variant="secondary" asChild>
                              <Link to={`/events/${event.id}/register`}>Register Now</Link>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-2 text-center py-12">
                    <p className="text-muted-foreground">
                      No events scheduled for this session yet. Check back later!
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Calendar View Placeholder */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Monthly Calendar View</CardTitle>
            <CardDescription>
              Interactive calendar showing all events for the selected session
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-muted-foreground">
              Calendar view will be implemented here with event markers on specific dates
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Events;
