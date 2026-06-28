const LegalPage = ({ title, content }: { title: string; content: string[] }) => (
  <div className="container mx-auto px-4 py-12 max-w-3xl">
    <h1 className="text-4xl font-display font-bold text-foreground mb-8">{title}</h1>
    <div className="space-y-6">
      {content.map((p, i) => (
        <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
      ))}
    </div>
  </div>
);

export const PrivacyPage = () => (
  <LegalPage title="Privacy Policy" content={[
    "At DesiDaaru, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or make a purchase.",
    "We collect personal information such as your name, email address, phone number, and shipping address when you create an account, place an order, or contact us. We may also collect usage data including browsing behavior and device information.",
    "Your information is used to process orders, improve our services, send promotional communications (with your consent), and comply with legal obligations. We never sell your personal information to third parties.",
    "We implement industry-standard security measures to protect your data, including SSL encryption, secure payment processing, and regular security audits.",
    "You have the right to access, update, or delete your personal information at any time by contacting our support team at support@desidaaru.com.",
    "This policy may be updated from time to time. Last updated: March 2026.",
  ]} />
);

export const TermsPage = () => (
  <LegalPage title="Terms & Conditions" content={[
    "By accessing and using the DesiDaaru website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website.",
    "You must be at least 18 years of age to purchase alcohol products from our website. By placing an order, you confirm that you meet the legal drinking age requirement in your jurisdiction.",
    "All products are subject to availability. We reserve the right to limit quantities, refuse orders, and modify or discontinue products without prior notice.",
    "Prices are displayed in Indian Rupees (₹) and are inclusive of applicable taxes unless stated otherwise. Delivery charges may apply based on order value and location.",
    "We strive to display accurate product descriptions and images. However, actual products may vary slightly from their representations on the website.",
    "DesiDaaru promotes responsible drinking. We reserve the right to refuse service to anyone who appears to be purchasing alcohol for minors or for illegal purposes.",
  ]} />
);

export const RefundPage = () => (
  <LegalPage title="Refund Policy" content={[
    "We want you to be completely satisfied with your purchase. If you receive a damaged, defective, or incorrect product, please contact us within 48 hours of delivery.",
    "To initiate a return, contact our support team with your order number and photographs of the issue. We will review your request and respond within 24 hours.",
    "Eligible returns will be processed as a full refund or replacement, at your preference. Refunds will be credited to your original payment method within 5-7 business days.",
    "Due to the nature of alcohol products, we cannot accept returns for products that have been opened, consumed, or damaged due to customer negligence.",
    "For orders cancelled before dispatch, a full refund will be processed within 3-5 business days. Orders that have already been dispatched cannot be cancelled.",
    "For any refund-related queries, please contact us at support@desidaaru.com or call +91 98765 43210.",
  ]} />
);
