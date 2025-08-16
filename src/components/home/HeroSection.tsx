import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import libraryHeroBg from "@/assets/library-hero-bg.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[80vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(33, 150, 243, 0.8), rgba(30, 136, 229, 0.9)), url(${libraryHeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Gatimbi Library Portal
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Serving the Central Imenti community with quality educational resources and services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold">
                Register Now
              </Button>
            </Link>
            <Link to="/books">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
              >
                Browse Books
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;