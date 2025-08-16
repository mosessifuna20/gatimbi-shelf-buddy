import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 hero-gradient text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to start reading?
          </h2>
          <h3 className="text-2xl md:text-3xl mb-8 text-primary-light font-medium">
            Join our library today.
          </h3>
          <p className="text-xl mb-10 text-white/90">
            Become a member of Gatimbi Library and unlock access to thousands of books, 
            educational resources, and community programs designed to support your learning journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold"
              >
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

export default CTASection;