import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/70 py-12">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-20 h-9 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold text-lg">
                  WAPE
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Work Actively, Proactively, Efficiently. The ERP platform built
              for construction digital transformation.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">
              Platform
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#modules"
                  className="hover:text-accent transition-colors"
                >
                  Modules
                </a>
              </li>
              <li>
                <a
                  href="#why-wape"
                  className="hover:text-accent transition-colors"
                >
                  Why WAPE
                </a>
              </li>
              <li>
                <a
                  href="#approach"
                  className="hover:text-accent transition-colors"
                >
                  Our Approach
                </a>
              </li>
              {/* <li>
                <a
                  href="#testimonials"
                  className="hover:text-accent transition-colors"
                >
                  Testimonials
                </a>
              </li> */}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:contact@wape.io"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  <Mail size={14} /> contact@wape.io
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  <Linkedin size={14} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <span>© 2026 WAPE. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
