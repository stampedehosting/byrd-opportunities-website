export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black text-bright-green mb-4">BYRD</h3>
            <p className="text-gray-300 mb-4">
              Grounded Wisdom. Elevated Outcomes.
            </p>
            <p className="text-sm text-gray-400">
              Transforming businesses through AI-powered solutions and strategic insight.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-bright-green">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#opportunities" className="text-gray-300 hover:text-bright-green transition-colors">
                  Opportunities
                </a>
              </li>
              <li>
                <a href="/#about" className="text-gray-300 hover:text-bright-green transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-gray-300 hover:text-bright-green transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-bright-green">Get in Touch</h4>
            <p className="text-gray-300 mb-2">
              Ready to transform your operations?
            </p>
            <p className="text-sm text-gray-400 mb-4">
              Schedule your Reveal Session today and discover how AI can unlock sustainable growth for your business.
            </p>
            <a 
              href="https://byrdconsultinggroup.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-bright-green hover:text-accent-gold transition-colors font-medium"
            >
              Visit byrdconsultinggroup.ai →
            </a>
          </div>
        </div>

        <div className="border-t border-medium-green mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} Byrd Consulting Group. All rights reserved.</p>
          <p className="mt-2">Clarity is the First Form of Capital.</p>
        </div>
      </div>
    </footer>
  );
}
