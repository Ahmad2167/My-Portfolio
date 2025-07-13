import { MessageSquare, Phone, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const whatsappClick = () => {
    window.open("https://wa.me/17602848322?text=Hi%20Ahmad,%20I'm%20interested%20in%20your%20services.", "_blank");
  };

  const rsvClick = () => {
    window.open("https://rsvlogisticsinc.com", "_blank");
  };

  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Ahmad Ashraf</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Senior Dispatch Head at RSV Logistics Inc. & IT Services Provider. 
              Delivering excellence through leadership and technology.
            </p>
            <Button 
              variant="whatsapp" 
              onClick={whatsappClick}
              className="bg-white/20 hover:bg-white/30"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              WhatsApp Me
            </Button>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-blue-100">
              <li>• Logistics & Dispatch Operations</li>
              <li>• Sales Coordination</li>
              <li>• Custom Web Development</li>
              <li>• Data Scraping & Automation</li>
              <li>• AI Chatbots & CRM Integration</li>
              <li>• Cold Calling & Sales Outreach</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-blue-100">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <span>+1 (760) 284-8322</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <span>ahmadch2167@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-blue-100">
          <p>&copy; 2025 Ahmad Ashraf. All rights reserved. Built with passion and expertise.</p>
        </div>
      </div>
    </footer>
  );
}