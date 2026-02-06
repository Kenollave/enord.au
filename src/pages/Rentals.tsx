import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Radio, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import eventImage from "@/assets/event-drone.jpg";
import heroImage from "@/assets/hero-drone-sydney.jpg";
import droneMavic3T from "@/assets/drone-mavic-3t.png";
import droneMavic3Pro from "@/assets/drone-mavic-3-pro.png";
import droneMavic3Enterprise from "@/assets/drone-mavic-3-enterprise-nobg.png";
import droneMatrice4E from "@/assets/drone-matrice-4e.png";

const drones = [
  {
    id: "mavic-3t",
    name: "DJI Mavic 3T",
    image: droneMavic3T,
    description: "Fly More Combo w. DJI RC\n\n4K HDR Video • 34 Minute* Flight Time • O3 Transmission"
  },
  {
    id: "mavic-3-pro",
    name: "DJI Mavic 3 Pro",
    image: droneMavic3Pro,
    description: "Fly More Combo w. DJI RC Pro\n\n5.1K Video • 46 Minute* Flight Time • O3+ Transmission"
  },
  {
    id: "mavic-3-enterprise",
    name: "DJI Mavic 3 Enterprise",
    image: droneMavic3Enterprise,
    description: "Fly More Combo w. DJI Mavic 3 Enterprise\n\n4K UHD Video • Upto 45 Minute* Flight Time • O3 Transmission"
  },
  {
    id: "matrice-4e",
    name: "DJI Matrice 4E",
    image: droneMatrice4E,
    description: "Fly More Combo w. DJI Matrice 4E\n\n4K Video • Upto 49 Minute* Flight Time • O4 Transmission"
  }
];

const bookingSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50),
  lastName: z.string().min(1, "Last name is required").max(50),
  email: z.string().email("Invalid email address").max(255),
  mobile: z.string().min(10, "Mobile number must be at least 10 digits").max(15),
  droneModel: z.string().min(1, "Please select a drone model"),
  pickupDate: z.string().min(1, "Pickup date is required"),
  pickupTime: z.string().min(1, "Pickup time is required"),
  returnDate: z.string().min(1, "Return date is required"),
  returnTime: z.string().min(1, "Return time is required"),
  isLicensed: z.boolean().refine((val) => val === true, {
    message: "You must have a valid Drone Pilot License to hire the drones"
  })
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const Rentals = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      droneModel: "",
      pickupDate: "",
      pickupTime: "",
      returnDate: "",
      returnTime: "",
      isLicensed: false
    }
  });

  const scrollToBooking = (droneName: string) => {
    form.setValue("droneModel", droneName);
    document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.mobile,
        service: `Drone Rental: ${data.droneModel}`,
        message: `Rental Request Details:
Drone Model: ${data.droneModel}
Pickup: ${data.pickupDate} at ${data.pickupTime}
Return: ${data.returnDate} at ${data.returnTime}
Licensed: Yes`,
from_name: "ENORD UAV SOLUTIONS",
reply_to: data.email,
      };

      await emailjs.send(
        "service_3nkima9",
        "template_6ft4tsh",
        templateParams,
        "PQyMQv2dZ_9fuD-nN"
      );

      toast({
        title: "Booking Request Sent!",
        description: "We'll contact you shortly to confirm your drone rental."
      });
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send",
        description: "Please try again or contact us directly at info@enord.com.au",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="h-16 w-16 rounded-lg bg-primary-foreground/10 flex items-center justify-center mb-6 mx-auto">
              <Radio className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Drone Rentals
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Professional drone equipment rentals for all your aerial projects
            </p>
            <p className="text-lg font-semibold text-primary-foreground">
              Must have a drone license to hire
            </p>
          </div>
        </div>
      </section>

      {/* Reliable Drone Rentals Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Reliable Drone Rentals in Sydney Made Simple
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Enord, we believe renting a drone should be straightforward. Whether you're a professional photographer, an event planner, or just curious about aerial technology, our drone rental service in Sydney is designed with you in mind.
              </p>
              <p className="text-lg text-muted-foreground">
                With access to the latest drone models and expert support, you can take your project to the skies with confidence.
              </p>
            </div>

            <div>
              <Card className="overflow-hidden">
                <img 
                  src={heroImage} 
                  alt="Drone flying over Sydney"
                  className="w-full h-[400px] object-cover"
                />
              </Card>
            </div>
          </div>

          {/* How Our Drone Rental Process Works */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How Our Drone Rental Process Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We've made the booking process easy and hassle-free
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Choose your drone</h3>
                <p className="text-muted-foreground">
                  Let us know what you're planning and we'll recommend the right model.
                </p>
              </Card>

              <Card className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Submit a rental request</h3>
                <p className="text-muted-foreground">
                  Ideally with 48 hours' notice (though we do our best to accommodate urgent needs).
                </p>
              </Card>

              <Card className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Provide security deposit</h3>
                <p className="text-muted-foreground">
                  A refundable deposit is required unless insurance is provided.
                </p>
              </Card>

              <Card className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3">Pick up your drone</h3>
                <p className="text-muted-foreground">
                  Collection and return must occur during store hours.
                </p>
              </Card>

              <Card className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                  5
                </div>
                <h3 className="text-xl font-bold mb-3">Bring your own SD card</h3>
                <p className="text-muted-foreground">
                  Please note we do not supply storage media.
                </p>
              </Card>

              <Card className="p-6 bg-primary text-primary-foreground">
                <CheckCircle2 className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-3">Start Flying</h3>
                <p className="text-primary-foreground/90">
                  Our aim is to keep things transparent, simple, and efficient — so you can focus on the skies.
                </p>
              </Card>
            </div>
          </div>

          {/* Why Customers Choose Enord */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="overflow-hidden">
                <img 
                  src={eventImage} 
                  alt="Professional drone equipment"
                  className="w-full h-[400px] object-cover"
                />
              </Card>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Customers Choose Enord
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're proud to serve customers across Sydney and beyond with a drone hire experience that's:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Flexible</h3>
                    <p className="text-muted-foreground">Daily and monthly rental options</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Reliable</h3>
                    <p className="text-muted-foreground">Fully maintained, quality-checked drones</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Supportive</h3>
                    <p className="text-muted-foreground">Friendly team with expert knowledge</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Accessible</h3>
                    <p className="text-muted-foreground">Available from locations around Australia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Transparent</h3>
                    <p className="text-muted-foreground">Clear terms and easy booking</p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mt-6 italic">
                We take care of the details so you can concentrate on your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Drones Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Available Drones for Hire
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our professional fleet of DJI drones
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {drones.map((drone) => (
              <Card key={drone.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-muted">
                  <img 
                    src={drone.image} 
                    alt={drone.name}
                    className="w-full h-[280px] object-contain p-2"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{drone.name}</h3>
                  <p className="text-muted-foreground mb-3 text-xs whitespace-pre-line">
                    {drone.description}
                  </p>
                  <Button 
                    onClick={() => scrollToBooking(drone.name)}
                    variant="cta" 
                    className="w-full"
                  >
                    Book Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Daily to Monthly Flexibility */}
          <div className="mb-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Drone Hire Options: Daily to Monthly Flexibility
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Not every project needs the same timeline. That's why we offer daily drone hire services in Sydney for quick jobs and monthly drone rentals for extended use.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Whether it's a weekend shoot or a month-long survey project, we have flexible rental plans to suit your schedule and budget.
              </p>
              <div className="bg-primary/10 border-l-4 border-primary p-4 rounded max-w-2xl mx-auto">
                <p className="font-semibold">
                  Need a drone urgently? We try to accommodate same-day rentals, and our team is here to guide you through the best options available.
                </p>
              </div>
            </div>
          </div>

          {/* Complete UAV Drone Rental Solutions */}
          <div className="mb-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Complete UAV Drone Rental Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Enord is more than just a rental company — we're your aerial support partner. Our UAV drone rental solutions in Sydney come with professional assistance to ensure you rent the right equipment for the job.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Every drone is checked, maintained, and ready for action, with support from our experienced team to guide you through operation and best practices if needed.
              </p>
              <p className="text-lg font-semibold">
                Whether it's for photography, inspection, events, or creative projects, you'll find a drone tailored to your needs.
              </p>
            </div>
          </div>

          {/* Ready to Book CTA */}
          <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-lg p-12 text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Book Your Drone Rental in Sydney?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/90">
              Whether you need short-term access for a creative shoot or long-term use for professional work, Enord is your trusted partner.
            </p>
            <p className="text-lg mb-8 text-primary-foreground/90 font-semibold">
              Book your drone rental in Sydney today – and discover how simple, flexible, and effective the process can be.
            </p>
            <p className="text-2xl font-bold mb-8">
              Let us help you take flight.
            </p>
            <Button 
              onClick={() => document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" })}
              variant="secondary"
              size="lg"
              className="text-lg px-8"
            >
              Book Your Drone Now
            </Button>
          </div>

          {/* Booking Form */}
          <div id="booking-form" className="max-w-3xl mx-auto bg-background p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Book Your Drone</h3>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    {...form.register("firstName")}
                    placeholder="John"
                  />
                  {form.formState.errors.firstName && (
                    <p className="text-sm text-destructive">{form.formState.errors.firstName.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    {...form.register("lastName")}
                    placeholder="Doe"
                  />
                  {form.formState.errors.lastName && (
                    <p className="text-sm text-destructive">{form.formState.errors.lastName.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  {...form.register("email")}
                  placeholder="john.doe@example.com"
                />
                {form.formState.errors.email && (
                  <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number *</Label>
                <Input
                  id="mobile"
                  type="tel"
                  {...form.register("mobile")}
                  placeholder="0412 345 678"
                />
                {form.formState.errors.mobile && (
                  <p className="text-sm text-destructive">{form.formState.errors.mobile.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="droneModel">Drone Model *</Label>
                <Select 
                  value={form.watch("droneModel")}
                  onValueChange={(value) => form.setValue("droneModel", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a drone" />
                  </SelectTrigger>
                  <SelectContent>
                    {drones.map((drone) => (
                      <SelectItem key={drone.id} value={drone.name}>
                        {drone.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {form.formState.errors.droneModel && (
                  <p className="text-sm text-destructive">{form.formState.errors.droneModel.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="pickupDate">Pickup Date *</Label>
                  <Input
                    id="pickupDate"
                    type="date"
                    className="text-muted-foreground [color-scheme:light]"
                    {...form.register("pickupDate")}
                  />
                  {form.formState.errors.pickupDate && (
                    <p className="text-sm text-destructive">{form.formState.errors.pickupDate.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pickupTime">Pickup Time *</Label>
                  <Input
                    id="pickupTime"
                    type="time"
                    className="text-muted-foreground [color-scheme:light]"
                    {...form.register("pickupTime")}
                  />
                  {form.formState.errors.pickupTime && (
                    <p className="text-sm text-destructive">{form.formState.errors.pickupTime.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="returnDate">Return Date *</Label>
                  <Input
                    id="returnDate"
                    type="date"
                    className="text-muted-foreground [color-scheme:light]"
                    {...form.register("returnDate")}
                  />
                  {form.formState.errors.returnDate && (
                    <p className="text-sm text-destructive">{form.formState.errors.returnDate.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="returnTime">Return Time *</Label>
                  <Input
                    id="returnTime"
                    type="time"
                    className="text-muted-foreground [color-scheme:light]"
                    {...form.register("returnTime")}
                  />
                  {form.formState.errors.returnTime && (
                    <p className="text-sm text-destructive">{form.formState.errors.returnTime.message}</p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3 pt-4">
                <Checkbox
                  id="isLicensed"
                  checked={form.watch("isLicensed")}
                  onCheckedChange={(checked) => form.setValue("isLicensed", checked as boolean)}
                />
                <div className="space-y-1">
                  <Label htmlFor="isLicensed" className="cursor-pointer">
                    I have a valid Drone Pilot License to hire the drones. *
                  </Label>
                  {form.formState.errors.isLicensed && (
                    <p className="text-sm text-destructive">{form.formState.errors.isLicensed.message}</p>
                  )}
                </div>
              </div>

              <Button 
                type="submit" 
                variant="cta" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit Booking Request"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rentals;