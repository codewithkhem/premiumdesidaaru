import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const AgeVerification = () => {
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const v = localStorage.getItem("age_verified");
    if (v === "true") setVerified(true);
  }, []);

  const handleVerify = () => {
    localStorage.setItem("age_verified", "true");
    setVerified(true);
  };

  if (verified) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-lg">
      <div className="text-center max-w-md mx-auto px-6 animate-fade-in">
        <img src={logo} alt="DesiDaaru" className="w-40 h-40 mx-auto mb-6 object-contain" />
        <h2 className="text-3xl font-display font-bold text-foreground mb-2">Age Verification</h2>
        <p className="text-muted-foreground mb-8">
          You must be 18 years or older to access this website. By entering, you confirm that you are of legal drinking age.
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={handleVerify} className="gold-gradient text-primary-foreground px-8 py-3 text-lg font-semibold hover:opacity-90 transition-opacity">
            I am 18+
          </Button>
          <Button
            variant="outline"
            className="border-border text-muted-foreground px-8 py-3 text-lg"
            onClick={() => window.location.replace("https://google.com")}
          >
            I am under 18
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-6">
          By entering this site you agree to our Terms & Conditions and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default AgeVerification;
