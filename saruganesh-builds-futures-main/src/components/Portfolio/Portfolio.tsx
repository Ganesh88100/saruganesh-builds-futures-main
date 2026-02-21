import { ExternalLink, Github, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="hero-gradient">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of projects and work - coming soon!
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="skill-card text-center">
            <CardContent className="p-16">
              <div className="mb-8">
                <div className="inline-flex p-6 bg-primary/10 rounded-full text-primary mb-6">
                  <Clock className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Portfolio Coming Soon</h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                  I'm currently working on exciting projects that will be showcased here. 
                  This section will feature case studies, screenshots, and detailed 
                  information about the technologies and solutions I've implemented.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">What to Expect</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      <span>Web Development Projects</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      <span>Python Applications</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      <span>Mobile App Designs</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      <span>Automation Scripts</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Project Features</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      <span>Live Demo Links</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      <span>Source Code Access</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      <span>Technology Stack Details</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      <span>Project Case Studies</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-primary/20 hover:bg-primary/5"
                  onClick={() => window.open('https://github.com/saruganesh', '_blank')}
                >
                  <Github className="mr-2 h-4 w-4" />
                  View GitHub
                </Button>
                <Button 
                  size="lg"
                  className="bg-gradient-primary hover:shadow-medium transition-all duration-300"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Discuss a Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Future placeholder cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 opacity-50">
          {[1, 2, 3].map((index) => (
            <Card key={index} className="glass-card">
              <CardContent className="p-6">
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground">Project Screenshot</span>
                </div>
                <h4 className="font-semibold mb-2">Project {index}</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Detailed project description and technology stack will be shown here.
                </p>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" disabled>
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Demo
                  </Button>
                  <Button variant="ghost" size="sm" disabled>
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;