import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-display font-bold text-foreground mb-2">Contact Us</h1>
        <p className="text-muted-foreground">We'd love to hear from you</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Form */}
        <div className="bg-card border border-border rounded-xl p-8">
          {submitted ? (
            <div className="text-center py-8">
              <Send className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-display font-bold text-foreground mb-2">Message Sent!</h3>
              <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Name</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Email</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Message</label>
                <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
              </div>
              <Button type="submit" className="w-full gold-gradient text-primary-foreground py-3 font-semibold hover:opacity-90">
                Send Message
              </Button>
            </form>
          )}
        </div>

        {/* Info */}
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-display font-semibold text-foreground mb-4">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" /><span className="text-muted-foreground">+91 98765 43210</span></div>
              <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-primary" /><span className="text-muted-foreground">support@desidaaru.com</span></div>
              <div className="flex items-start gap-3"><MapPin className="h-5 w-5 text-primary mt-0.5" /><span className="text-muted-foreground">123 Spirit Lane, Mumbai, Maharashtra 400001</span></div>
            </div>
          </div>

          {/* Map embed */}
          <div className="rounded-xl overflow-hidden border border-border h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160984!2d72.7411!3d19.0826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="DesiDaaru Store Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
