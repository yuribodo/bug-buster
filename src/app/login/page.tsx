'use client'

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { Mail, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signIn } from "next-auth/react"

interface LoginFormData {
  email: string;
}

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormData>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      const signInResult = await signIn('email', {
        email: data.email,
        callbackUrl: `${window.location.origin}/chat`,
        redirect: false
      });

      if (!signInResult?.ok) {
        throw new Error('Failed to sign in');
      }

      console.log('Magic link sent successfully');

    } catch (error) {
      console.error('Error sending magic link:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-950 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="border-purple-900/20 bg-gray-900/50 backdrop-blur-xl">
          <CardHeader className="space-y-3">
            <motion.div
              className="mx-auto bg-purple-900/30 w-12 h-12 rounded-full flex items-center justify-center"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-6 h-6 text-purple-400" />
            </motion.div>
            <CardTitle className="text-2xl font-bold text-center bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 text-transparent bg-clip-text">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-center text-gray-400">
              Enter your email to receive a magic link for instant access
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <Input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    type="email"
                    placeholder="name@example.com"
                    className="pl-10 bg-gray-800/50 border-purple-900/30 focus:border-purple-500 focus:ring-purple-500 text-gray-200 placeholder:text-gray-500"
                  />
                  <Mail className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
                </div>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-red-400"
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-purple-800 hover:bg-purple-700 text-purple-100 transition-colors"
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="w-5 h-5 border-2 border-purple-200 border-t-transparent rounded-full"
                  />
                ) : (
                  "Send Magic Link"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default LoginPage;
