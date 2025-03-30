"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Eye, EyeOff, Loader2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false)
  const [userType, setUserType] = useState("client")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreeTerms: false,
  })
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      // In a real app, we would register the user with the server here
      console.log("Registering:", { ...formData, userType })

      toast({
        title: "Account created successfully!",
        description: "Welcome to RuralSkillsConnect. Let's set up your profile.",
        variant: "default",
      })

      setLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-beige p-4 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-blue/20 to-primary-green/20 z-0"></div>

      <Link
        href="/"
        className="absolute top-4 left-4 text-neutral-charcoal hover:text-primary-green flex items-center z-10"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Link>

      <Card className="w-full max-w-md relative z-10 shadow-medium">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary-green flex items-center justify-center">
                <span className="text-white font-bold">RSC</span>
              </div>
              <span className="text-2xl font-bold text-primary-blue">RuralSkillsConnect</span>
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-center text-primary-blue">Create an account</CardTitle>
          <CardDescription className="text-center text-neutral-gray">
            Sign up to start connecting with skills and opportunities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <RadioGroup value={userType} onValueChange={setUserType} className="flex justify-center space-x-8 mb-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="client" id="client" className="text-primary-green" />
                <Label htmlFor="client" className="text-neutral-charcoal">
                  I want to hire
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="worker" id="worker" className="text-primary-green" />
                <Label htmlFor="worker" className="text-neutral-charcoal">
                  I want to work
                </Label>
              </div>
            </RadioGroup>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-neutral-charcoal">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="focus:border-primary-green focus:ring-primary-green"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-neutral-charcoal">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="focus:border-primary-green focus:ring-primary-green"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-neutral-charcoal">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="focus:border-primary-green focus:ring-primary-green"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-neutral-charcoal">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="focus:border-primary-green focus:ring-primary-green"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-gray"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              <p className="text-xs text-neutral-gray mt-1">
                Password must be at least 8 characters long and include a number and a special character.
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onCheckedChange={(checked) => setFormData({ ...formData, agreeTerms: checked as boolean })}
                required
                className="data-[state=checked]:bg-primary-green data-[state=checked]:border-primary-green"
              />
              <Label htmlFor="terms" className="text-sm text-neutral-charcoal">
                I agree to the{" "}
                <Link href="/terms" className="text-primary-green hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary-green hover:underline">
                  Privacy Policy
                </Link>
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full bg-secondary-orange hover:bg-secondary-orange/90 text-white"
              disabled={loading || !formData.agreeTerms}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating account...
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-neutral-gray">or continue with</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" type="button" className="w-full">
              <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </Button>
            <Button variant="outline" type="button" className="w-full">
              <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2">
                <path
                  d="M9.03 8h-3a1 1 0 00-1 1v8a1 1 0 001 1h3a1 1 0 001-1V9a1 1 0 00-1-1zm10.97 0h-3a1 1 0 00-1 1v8a1 1 0 001 1h3a1 1 0 001-1V9a1 1 0 00-1-1zM9.03 2H5a1 1 0 00-1 1v3a1 1 0 001 1h4.03a1 1 0 001-1V3a1 1 0 00-1-1zm9 0h-4.03a1 1 0 00-1 1v3a1 1 0 001 1H18a1 1 0 001-1V3a1 1 0 00-1-1z"
                  fill="currentColor"
                />
              </svg>
              Microsoft
            </Button>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-neutral-gray">
              Already have an account?{" "}
              <Link href="/login" className="text-primary-green hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

