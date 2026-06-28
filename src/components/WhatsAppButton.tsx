import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919876543210?text=Hi%20DesiDaaru%2C%20I%20need%20help%20with%20my%20order"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-[#fff] rounded-full p-4 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="h-6 w-6" />
  </a>
);

export default WhatsAppButton;
