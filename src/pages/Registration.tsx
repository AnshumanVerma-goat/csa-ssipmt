import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Registration = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    event: "",
    roll: "",
    branch: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the data to a backend or store it as needed
    setSubmitted(true);
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-xl">
        <Card>
          <CardHeader>
            <CardTitle>Event Registration</CardTitle>
            <CardDescription>Register to participate in an event</CardDescription>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="text-green-600 font-semibold text-center py-8">
                Registration successful! Thank you for registering.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-1 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Roll Number</label>
                  <input
                    type="text"
                    name="roll"
                    value={form.roll}
                    onChange={handleChange}
                    required
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Branch</label>
                  <input
                    type="text"
                    name="branch"
                    value={form.branch}
                    onChange={handleChange}
                    required
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Event</label>
                  <select
                    name="event"
                    value={form.event}
                    onChange={handleChange}
                    required
                    className="w-full border rounded px-3 py-2"
                  >
                    <option value="">Select an event</option>
                    <option value="Annual Tech Fest 2025">Annual Tech Fest 2025</option>
                    <option value="Coding Marathon">Coding Marathon</option>
                    <option value="AI Workshop Series">AI Workshop Series</option>
                  </select>
                </div>
                <Button type="submit" variant="default" className="w-full">Register</Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Registration;
