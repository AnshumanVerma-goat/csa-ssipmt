import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Search, Download, Award } from "lucide-react";

const Certificates = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8 text-center">
          <Award className="w-16 h-16 text-accent mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Certificate Access Portal</h1>
          <p className="text-lg text-muted-foreground">
            Enter your details to access your participation and winner certificates
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Search Your Certificate</CardTitle>
            <CardDescription>
              Enter your registration number or email to find your certificates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="search">Registration Number / Email</Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    id="search"
                    placeholder="Enter your registration number or email"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button>
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Section - Will be populated after backend integration */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Your Certificates</h2>
          
          <div className="text-center py-12 bg-muted/30 rounded-lg">
            <p className="text-muted-foreground mb-4">
              Enter your details above to view your certificates
            </p>
            <p className="text-sm text-muted-foreground">
              Certificate management will be integrated with the backend database
            </p>
          </div>

          {/* Example Certificate Card (for reference) */}
          <Card className="mt-6 border-2 border-dashed opacity-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Award className="w-12 h-12 text-accent" />
                  <div>
                    <h3 className="font-semibold">Annual Tech Fest 2024</h3>
                    <p className="text-sm text-muted-foreground">Winner - Coding Competition</p>
                    <p className="text-xs text-muted-foreground">Issued on: March 25, 2024</p>
                  </div>
                </div>
                <Button variant="secondary">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
