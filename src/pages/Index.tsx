
import AuthForm from "@/components/AuthForm";
import { useEffect } from "react";
import { toast } from "sonner";

const Index = () => {
  // Show toast when page loads to demonstrate the toast component
  useEffect(() => {
    toast.success("Welcome to the login page!", {
      description: "Please sign in to continue.",
      duration: 4000,
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-background to-background/95">
      <div className="w-full max-w-md">
        <AuthForm />
      </div>
    </div>
  );
};

export default Index;
