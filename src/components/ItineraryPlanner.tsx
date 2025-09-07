
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Clock, MapPin, Mountain, Sprout, Landmark, IndianRupee } from "lucide-react";

type Interest = "Adventure" | "Culture" | "Nature" | "Heritage";

const interestButtons: { key: Interest; icon: React.ComponentType<any> }[] = [
  { key: "Adventure", icon: Mountain },
  { key: "Culture", icon: Landmark },
  { key: "Nature", icon: Sprout },
  { key: "Heritage", icon: Landmark },
];

const durations = ["1-2 Days", "3-5 Days", "6-8 Days", "9+ Days"];
const budgets = [
  "₹5,000 - ₹10,000",
  "₹10,000 - ₹25,000",
  "₹25,000 - ₹50,000",
  "₹50,000+",
];

const samplePlan = [
  {
    day: 1,
    title: "Gangtok Cultural Heritage",
    route:
      "Enchey Monastery → Namgyal Institute of Tibetology → Lal Bazaar"
  },
  {
    day: 2,
    title: "Rumtek & Nearby",
    route:
      "Rumtek Monastery → Do Drul Chorten → Local Homestay"
  },
  {
    day: 3,
    title: "Himalayan Adventure",
    route:
      "Ban Jhakri Falls Trek → Rock Climbing → Cultural Show"
  }
];

const ItineraryPlanner = () => {
  const [selected, setSelected] = useState<Interest>("Adventure");
  const [duration, setDuration] = useState(durations[1]);
  const [budget, setBudget] = useState(budgets[1]);

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            AI-Powered <span className="bg-gradient-monastery bg-clip-text text-transparent">Itinerary Planning</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Personalized monastery journeys based on your interests, budget, and time in Sikkim.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Planner Form */}
          <Card className="border-border/60">
            <CardHeader>
              <CardTitle>Plan Your Journey</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="text-sm text-muted-foreground mb-2">Select Your Interests</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {interestButtons.map(({ key, icon: Icon }) => (
                    <Button
                      key={key}
                      variant={selected === key ? "default" : "outline"}
                      className="justify-center"
                      onClick={() => setSelected(key)}
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      {key}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Duration</div>
                  <div className="relative">
                    <select
                      className="w-full rounded-md border bg-background px-4 py-3"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                    >
                      {durations.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Budget</div>
                  <div className="relative">
                    <select
                      className="w-full rounded-md border bg-background px-4 py-3"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                    >
                      {budgets.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <Button className="w-full py-6 text-base">
                <CheckCircle2 className="mr-2 h-5 w-5" />
                Generate AI Itinerary
              </Button>

              <div className="flex items-start gap-3 rounded-lg border p-4">
                <div className="mt-1">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="text-sm text-muted-foreground">
                  I can help you discover hidden monasteries, book authentic homestays, and connect with local monks. What would you like to explore?
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sample Output */}
          <Card className="border-border/60">
            <CardHeader>
              <CardTitle>Sample AI-Generated Itinerary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {samplePlan.map((item) => (
                <div key={item.day} className="flex gap-4">
                  <div className="h-9 w-9 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                    {item.day}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">Day {item.day}: {item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.route}</div>
                    <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />8 hours</span>
                      <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" />45km</span>
                      <span className="inline-flex items-center gap-1"><Badge variant="secondary">Homestay</Badge></span>
                    </div>
                  </div>
                </div>
              ))}

              <Separator />
              <div className="flex items-center justify-between text-sm">
                <div className="text-muted-foreground">Estimated Total Cost</div>
                <div className="font-semibold inline-flex items-center"><IndianRupee className="h-4 w-4 mr-1" />18,500</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ItineraryPlanner;


