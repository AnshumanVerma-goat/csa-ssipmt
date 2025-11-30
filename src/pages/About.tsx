import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Lightbulb, Trophy } from "lucide-react";

const About = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About CSA</h1>
          
          <div className="prose prose-lg mb-12">
            <p className="text-lg text-muted-foreground">
              The Computer Science Association (CSA) at SSIPMT is a student-driven organization
              dedicated to fostering innovation, technical excellence, and leadership in the field
              of computer science and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <Target className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To empower students with cutting-edge technical knowledge, practical skills,
                  and opportunities to excel in the ever-evolving technology landscape.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lightbulb className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To create a vibrant community of innovators, problem-solvers, and tech leaders
                  who shape the future of technology.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Join a diverse community of passionate students, faculty, and industry experts
                  working together to push the boundaries of technology.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Trophy className="w-12 h-12 text-accent mb-4" />
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ranked 2nd in AICTE Idea Lab Techfest 2023 and numerous other accolades
                  in hackathons, competitions, and research initiatives.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-hero text-white">
            <CardHeader>
              <CardTitle className="text-2xl">What We Do</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Technical Events & Workshops</h3>
                <p className="opacity-90">
                  Regular workshops, seminars, and hands-on training sessions on latest technologies
                  including AI, ML, Web Development, Cloud Computing, and more.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Competitions & Hackathons</h3>
                <p className="opacity-90">
                  Organizing and participating in coding competitions, hackathons, and tech fests
                  at regional and national levels.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Industry Collaboration</h3>
                <p className="opacity-90">
                  Connecting students with industry experts through guest lectures, internship
                  opportunities, and collaborative projects.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
