import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Clock, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <main className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About Gatimbi Library</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Serving the Central Imenti community with knowledge, education, and digital resources since our founding.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide accessible, quality educational resources and foster a love of learning 
                  in the Central Imenti community through modern library services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Community Focus</h3>
                <p className="text-muted-foreground">
                  We serve both adult and junior members, providing age-appropriate resources 
                  and specialized programs for students from local schools.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Operating Hours</h3>
                <div className="text-muted-foreground">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Services</h3>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Book lending & reservations</li>
                  <li>• Digital resources</li>
                  <li>• Study spaces</li>
                  <li>• Educational programs</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Visit Us</h2>
              <p className="text-muted-foreground mb-4">
                Located in the heart of Central Imenti, Meru County, Kenya
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>Phone: +254 700 000000</p>
                <p>Email: info@gatimbilibrary.ke</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;