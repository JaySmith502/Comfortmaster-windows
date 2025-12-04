import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface PhoneButtonProps {
  phoneNumber: string;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  children?: React.ReactNode;
}

export function PhoneButton({ phoneNumber, className, variant = "default", size = "default", children }: PhoneButtonProps) {
  return (
    <Button variant={variant} size={size} className={className} asChild>
      <a href={`tel:${phoneNumber.replace(/\D/g, "")}`}>
        <Phone className="mr-2 h-4 w-4" />
        {children || phoneNumber}
      </a>
    </Button>
  );
}
