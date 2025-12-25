import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// Example faculty data. Replace with real data as needed.
const facultyList = [
  {
    name: "Dr. A. Sharma",
    designation: "Head of Department",
    photo: "/placeholder.jpg", // Replace with actual photo path
  },
  {
    name: "Prof. B. Verma",
    designation: "Assistant Professor",
    photo: "/placeholder.jpg",
  },
  {
    name: "Dr. C. Singh",
    designation: "Associate Professor",
    photo: "/placeholder.jpg",
  },
  // Add more faculty as needed
];

const Faculty = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Faculty Members</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {facultyList.map((faculty) => (
            <Card key={faculty.name} className="flex flex-col items-center p-6">
              <img
                src={faculty.photo}
                alt={faculty.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-accent"
              />
              <CardHeader className="text-center p-0 mb-2">
                <CardTitle>{faculty.name}</CardTitle>
                <CardDescription>{faculty.designation}</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
