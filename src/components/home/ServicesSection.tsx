import { BookOpen, Smartphone, Clock, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Extensive Book Collection",
      description: "Access thousands of books, newspapers, and educational materials for both junior and adult readers."
    },
    {
      icon: Smartphone,
      title: "Digital Access",
      description: "Manage your library account online, search for books, and receive notifications about due dates and new arrivals."
    },
    {
      icon: Clock,
      title: "Borrowing Services",
      description: "Borrow books and materials for home reading with our easy-to-use reservation and checkout system."
    },
    {
      icon: Users,
      title: "Community Programs",
      description: "Participate in reading programs, educational events, and community activities hosted by the library."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2 uppercase tracking-wide">OUR SERVICES</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            A better way to access knowledge
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Gatimbi Library offers a wide range of services to support education and learning in Central Imenti.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="card-service">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;