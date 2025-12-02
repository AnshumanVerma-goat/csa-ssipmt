import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const csaFaculty = [
  { name: "Dr. A. Sharma", designation: "CSA Coordinator", photo: "/placeholder.svg" },
  // Add more CSA faculty
];
const csaMembers = [
  { name: "Student 1" },
  { name: "Student 2" },
  // Add more CSA members
];

const CSA = () => (
  <div className="py-12">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">CSA Club</h1>
      <h2 className="text-2xl font-semibold mb-4">Faculty</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
        {csaFaculty.map(faculty => (
          <Card key={faculty.name} className="flex flex-col items-center p-6">
            <img src={faculty.photo} alt={faculty.name} className="w-20 h-20 rounded-full object-cover mb-2 border-2 border-accent" />
            <CardHeader className="text-center p-0 mb-2">
              <CardTitle>{faculty.name}</CardTitle>
              <CardDescription>{faculty.designation}</CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        ))}
      </div>
      <h2 className="text-2xl font-semibold mb-4">Members</h2>
      <ul className="list-disc pl-6">
        {csaMembers.map(member => (
          <li key={member.name} className="mb-1">{member.name}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default CSA;
