import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery = () => {
  const categories = ["All", "Tech Fest", "Workshops", "Competitions", "Celebrations"];

  // Placeholder for gallery images
  const images = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
    title: `Event ${i + 1}`,
  }));

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Gallery</h1>
          <p className="text-lg text-muted-foreground">
            Browse through moments captured from our events and activities
          </p>
        </div>

        <Tabs defaultValue="All" className="mb-8">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {images
                  .filter((img) => category === "All" || img.category === category)
                  .map((image) => (
                    <Card key={image.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="p-0">
                        <div className="aspect-square bg-muted flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-4xl mb-2">📸</div>
                            <p className="text-sm text-muted-foreground">{image.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-8 p-6 bg-muted/30 rounded-lg">
          <p className="text-muted-foreground">
            Gallery images will be managed through the admin panel once backend is integrated
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
