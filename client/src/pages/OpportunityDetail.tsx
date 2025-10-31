import { useParams, Link } from 'wouter';
import { ArrowLeft, CheckCircle2, Users, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { opportunities } from '@/data/opportunities';
import NotFound from './NotFound';

export default function OpportunityDetail() {
  const params = useParams<{ id: string }>();
  const opportunity = opportunities.find(opp => opp.id === params.id);

  if (!opportunity) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 gradient-green-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src={opportunity.image} 
            alt={opportunity.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-10">
          <Link href="/">
            <Button 
              variant="ghost" 
              className="text-white hover:text-bright-green hover:bg-white/10 mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Opportunities
            </Button>
          </Link>

          <div className="max-w-4xl">
            <div className="inline-block mb-4 px-4 py-2 bg-bright-green/20 rounded-full border border-bright-green">
              <span className="text-bright-green font-semibold text-sm">{opportunity.subtitle}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black mb-4">
              {opportunity.title}
            </h1>
            
            <p className="text-2xl text-bright-green font-semibold mb-6">
              "{opportunity.tagline}"
            </p>
            
            <p className="text-xl text-gray-200 leading-relaxed">
              {opportunity.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-bright-green text-primary-green hover:bg-accent-gold hover:text-primary-green font-bold"
              >
                Schedule Consultation
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-green font-bold"
              >
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Images Gallery */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {opportunity.images.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <img 
                  src={image} 
                  alt={`${opportunity.title} - Image ${index + 1}`}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-4xl font-black text-primary mb-12 text-center">
            Key Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {opportunity.features.map((feature, index) => (
              <Card key={index} className="border-2 border-border hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-1" />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-4xl font-black text-primary mb-12 text-center">
            Benefits & Results
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {opportunity.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Users className="h-8 w-8 text-primary" />
            </div>
            
            <h2 className="text-4xl font-black text-primary mb-6">
              Ideal For
            </h2>
            
            <p className="text-xl text-foreground leading-relaxed">
              {opportunity.targetAudience}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-green text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform your operations with {opportunity.title}. 
            Schedule your Reveal Session today and discover how this solution can drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-primary-green hover:bg-accent-gold hover:text-primary-green font-bold text-lg px-8 py-6"
            >
              Schedule Consultation
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-green font-bold text-lg px-8 py-6"
            >
              <Download className="mr-2 h-5 w-5" />
              Download PDF
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
