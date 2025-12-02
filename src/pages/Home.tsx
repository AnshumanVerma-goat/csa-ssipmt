import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, Award, Users, Image } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Calendar,
      title: "Events & Competitions",
      description: "Participate in exciting tech events and competitions throughout the year",
      link: "/events",
    },
    {
      icon: Award,
      title: "Certificates",
      description: "Access your participation and winner certificates easily",
      link: "/certificates",
    },
    {
      icon: Users,
      title: "Clubs & Communities",
      description: "Join various clubs and connect with like-minded students",
      link: "/clubs",
    },
    {
      icon: Image,
      title: "Gallery",
      description: "Browse through moments captured from our events and activities",
      link: "/gallery",
    },
  ];


  return (
    <div>
      {/* Hero Section with College Photo */}
      <section className="bg-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-4 border-hero-accent rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 border-4 border-hero-accent"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 border-4 border-hero-accent rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 py-24 relative z-10 flex flex-col md:flex-row items-center gap-10">
          <img
            src="/placeholder.svg" // Replace with your actual college photo, e.g. /college-photo.jpg
            alt="College"
            className="w-full md:w-1/2 rounded-xl shadow-lg object-cover max-h-[350px] border-4 border-accent"
          />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Computer Science Association
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              SSIPMT - Fostering Innovation, Excellence & Technical Leadership
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/events">Explore Events</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-accent mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="p-0" asChild>
                    <Link to={feature.link}>Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notice & Events Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Notices</CardTitle>
                  <Button variant="link" className="text-accent" asChild>
                    <Link to="/events">View All</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-accent pl-4 py-2">
                  <p className="font-medium">Registration Open: Tech Fest 2025</p>
                  <p className="text-sm text-muted-foreground">Posted on March 15, 2025</p>
                </div>
                <div className="border-l-4 border-accent pl-4 py-2">
                  <p className="font-medium">Workshop: Machine Learning Basics</p>
                  <p className="text-sm text-muted-foreground">Posted on March 10, 2025</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Upcoming Events</CardTitle>
                  <Button variant="link" className="text-accent" asChild>
                    <Link to="/events">View All</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-accent text-accent-foreground rounded-lg p-3 text-center min-w-[60px]">
                    <div className="text-2xl font-bold">25</div>
                    <div className="text-xs">Mar</div>
                  </div>
                  <div>
                    <p className="font-medium">Coding Competition 2025</p>
                    <p className="text-sm text-muted-foreground">View details</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
