import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, Award, Users, Image } from "lucide-react";
import { motion } from "framer-motion";

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
    <div className="overflow-hidden">
      {/* Hero Section with College Photo */}
      <section className="bg-hero relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute top-10 left-10 w-20 h-20 border-4 border-hero-accent rotate-45"
            animate={{ 
              rotate: [45, 225, 45],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-16 h-16 border-4 border-hero-accent"
            animate={{ 
              y: [-10, 10, -10],
              rotate: [0, 90, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/4 w-12 h-12 border-4 border-hero-accent rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 py-12 sm:py-16 md:py-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* Animated Image */}
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              src="/images/institute/clg building.webp"
              alt="SSIPMT College Building"
              className="w-full md:w-1/2 rounded-xl shadow-2xl object-cover max-h-[250px] sm:max-h-[300px] md:max-h-[350px] border-4 border-accent hover:scale-105 transition-transform duration-500"
            />
            
            {/* Animated Text Content */}
            <div className="max-w-3xl text-center md:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6"
              >
                Computer Science Association
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 md:mb-8"
              >
                SSIPMT - Fostering Innovation, Excellence & Technical Leadership
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start"
              >
                <Button size="lg" variant="secondary" asChild className="hover:scale-105 transition-transform">
                  <Link to="/events">Explore Events</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary hover:scale-105 transition-all" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12"
          >
            What We Offer
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 h-full border-2 hover:border-accent/50">
                  <CardHeader>
                    <motion.div
                      whileHover={{ scale: 1.08, y: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 text-accent mb-4" />
                    </motion.div>
                    <CardTitle className="text-lg sm:text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-sm sm:text-base">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="link" className="p-0 hover:translate-x-2 transition-transform" asChild>
                      <Link to={feature.link}>Learn More →</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice & Events Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Notices Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <CardTitle className="text-xl sm:text-2xl">Notices</CardTitle>
                    <Button variant="link" className="text-accent hover:translate-x-1 transition-transform" asChild>
                      <Link to="/events">View All</Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <motion.div 
                    className="border-l-4 border-accent pl-4 py-2 hover:bg-accent/5 transition-colors cursor-pointer"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="font-medium text-sm sm:text-base">Registration Open: Tech Fest 2025</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Posted on March 15, 2025</p>
                  </motion.div>
                  <motion.div 
                    className="border-l-4 border-accent pl-4 py-2 hover:bg-accent/5 transition-colors cursor-pointer"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="font-medium text-sm sm:text-base">Workshop: Machine Learning Basics</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Posted on March 10, 2025</p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Upcoming Events Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <CardTitle className="text-xl sm:text-2xl">Upcoming Events</CardTitle>
                    <Button variant="link" className="text-accent hover:translate-x-1 transition-transform" asChild>
                      <Link to="/events">View All</Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <motion.div 
                    className="flex gap-4 hover:bg-accent/5 p-2 rounded-lg transition-colors cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-accent text-accent-foreground rounded-lg p-3 text-center min-w-[50px] sm:min-w-[60px] flex-shrink-0">
                      <div className="text-xl sm:text-2xl font-bold">25</div>
                      <div className="text-xs">Mar</div>
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">Coding Competition 2025</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">View details</p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
