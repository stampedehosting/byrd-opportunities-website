import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Target, TrendingUp } from "lucide-react";
import OpportunityCard from "@/components/OpportunityCard";
import { opportunities } from "@/data/opportunities";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 gradient-green-dark opacity-95"></div>
        <div className="absolute inset-0 bg-[url('/images/strategic-ai-integration-1-main.png')] bg-cover bg-center opacity-10"></div>
        
        <div className="container relative z-10 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-6 py-2 bg-bright-green/20 rounded-full border border-bright-green">
              <span className="text-bright-green font-semibold">AI-Powered Business Transformation</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Grounded Wisdom.
              <br />
              <span className="text-bright-green">Elevated Outcomes.</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Transform your operations with tailored AI systems and strategic insight. 
              Unlock sustainable growth through intelligent automation and data-driven decision-making.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-bright-green text-primary-green hover:bg-accent-gold hover:text-primary-green font-bold text-lg px-8 py-6"
                onClick={() => document.getElementById('opportunities')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Opportunities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-green font-bold text-lg px-8 py-6"
                onClick={() => window.open('https://www.byrdconsulting.group/appointments', '_blank')}
              >
                Schedule Reveal Session
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-black text-bright-green mb-2">50+</div>
                <div className="text-sm text-gray-200">Organizations Transformed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-black text-bright-green mb-2">35%</div>
                <div className="text-sm text-gray-200">Average Cost Reduction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-black text-bright-green mb-2">25%</div>
                <div className="text-sm text-gray-200">Efficiency Gains</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
              Why Choose Byrd Consulting Group?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Clarity is the first form of capital. We provide tailored AI systems and hands-on strategic insight 
              to optimize performance, reduce chaos, and unlock sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Structured Clarity</h3>
              <p className="text-muted-foreground">
                Engineer clear objectives through systematic AI integration and strategic planning.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Strategic Alignment</h3>
              <p className="text-muted-foreground">
                Align AI workflows with your most critical strategic impact areas.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Measurable Results</h3>
              <p className="text-muted-foreground">
                Deliver tangible outcomes through intelligent automation and optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section id="opportunities" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
              Our Strategic Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive suite of AI-powered solutions designed to transform 
              your operations and drive sustainable growth across diverse industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-green text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your Reveal Session today and discover how AI can unlock 
            sustainable growth for your business.
          </p>
          <Button 
            size="lg"
            className="bg-white text-primary-green hover:bg-accent-gold hover:text-primary-green font-bold text-lg px-8 py-6"
            onClick={() => window.open('https://www.byrdconsulting.group/appointments', '_blank')}
          >
            Schedule Your Reveal Session
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
