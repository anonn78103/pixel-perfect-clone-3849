import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import signupSalad from "@/assets/signup-salad.jpg";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
        
        {/* Left side - Form */}
        <div className="max-w-md mx-auto w-full">
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <span className="text-xl sm:text-2xl">🍽️</span>
              <span className="text-lg sm:text-xl font-bold text-primary">FoodieBites</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Create an Account</h1>
            <p className="text-gray-600 text-sm sm:text-base">Sign up with your valid email and password</p>
          </div>

          <form className="space-y-4">
            <div>
              <Input 
                placeholder="Username" 
                className="w-full"
              />
            </div>
            
            <div>
              <Input 
                type="email"
                placeholder="Email" 
                className="w-full"
              />
            </div>
            
            <div className="relative">
              <Input 
                type={showPassword ? "text" : "password"}
                placeholder="Password" 
                className="w-full pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            
            <div className="relative">
              <Input 
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password" 
                className="w-full pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-full"
            >
              Sign Up
            </Button>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or sign up with</span>
              </div>
            </div>
            
            <Button 
              type="button" 
              variant="outline" 
              className="w-full py-3 rounded-full border-gray-300"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign up with Google
            </Button>
          </form>
          
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="#" className="text-primary hover:underline">Login</a>
          </p>
        </div>

        {/* Right side - Food Image */}
        <div className="hidden lg:block">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <img 
                src={signupSalad} 
                alt="Fresh salad with vegetables"
                className="w-full h-full object-cover"
                style={{ minHeight: '500px', maxHeight: '700px' }}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignUp;