import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Opportunity } from '@/data/opportunities';

interface OpportunityCardProps {
  opportunity: Opportunity;
}

export default function OpportunityCard({ opportunity }: OpportunityCardProps) {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-2 border-border hover:border-primary">
      <div className="relative h-48 overflow-hidden">
        <img
          src={opportunity.image}
          alt={opportunity.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-bold text-xl">{opportunity.title}</h3>
          <p className="text-bright-green text-sm font-medium">{opportunity.subtitle}</p>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-primary text-lg">{opportunity.tagline}</CardTitle>
        <CardDescription className="line-clamp-3">
          {opportunity.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {opportunity.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="text-xs bg-accent/20 text-accent-foreground px-3 py-1 rounded-full font-medium"
              >
                {feature.title}
              </span>
            ))}
          </div>
          
          <Link href={`/opportunity/${opportunity.id}`}>
            <Button 
              variant="default" 
              className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
