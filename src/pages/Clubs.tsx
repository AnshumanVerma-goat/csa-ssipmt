import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, Lightbulb, Users } from "lucide-react";

const Clubs = () => {
  const clubs = [
    {
      id: 1,
      name: "Computer Science Association (CSA)",
      icon: Code,
      description:
        "The main technical club focused on computer science, programming competitions, and technology workshops.",
      activities: [
        "Coding competitions and hackathons",
        "Technical workshops and seminars",
        "Industry expert sessions",
        "Project showcases",
      ],
      color: "text-accent",
    },
    {
      id: 2,
      name: "Center of Excellence (CoE)",
      icon: Lightbulb,
      description:
        "Dedicated to research, innovation, and advanced learning in emerging technologies and industry trends.",
      activities: [
        "Research projects and publications",
        "Innovation labs and prototyping",
        "Industry collaboration programs",
        "Advanced certification courses",
      ],
      color: "text-primary",
    },
    {
      id: 3,
      name: "Tech Community Hub",
      icon: Users,
      description:
        "A collaborative space bringing together all tech enthusiasts for knowledge sharing and networking.",
      activities: [
        "Peer learning sessions",
        "Tech talks and discussions",
        "Community projects",
        "Networking events",
      ],
      color: "text-hero",
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Clubs & Communities</h1>
          <p className="text-lg text-muted-foreground">
            Join our vibrant clubs and communities to enhance your learning experience and connect
            with peers who share your passion for technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {clubs.map((club) => (
            <Card key={club.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <club.icon className={`w-16 h-16 ${club.color} mb-4`} />
                <CardTitle className="text-2xl">{club.name}</CardTitle>
                <CardDescription className="text-base">{club.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Key Activities:</h3>
                  <ul className="space-y-2">
                    {club.activities.map((activity, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span className="text-muted-foreground">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="default" asChild>
                  <Link to="/contact">Join Now</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 max-w-4xl mx-auto bg-hero text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Want to Start a New Club?</h2>
            <p className="mb-6 opacity-90">
              Have an idea for a new club or community? We encourage student initiatives and
              leadership. Get in touch with us to discuss your proposal.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Clubs;
