"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Code2, ArrowRight } from "lucide-react";
import { signInWithMagicLink } from "../actions";
import { useActionState, useState } from "react";
import type { ActionState } from "@/lib/auth/middleware";
import { createClient } from "@/utils/supabase/client";
import config from "../../../../config";
import { motion } from "framer-motion";

const Login = ({ mode = "signin" }: { mode?: "signin" | "signup" }) => {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const priceId = searchParams.get("priceId");
  const discountCode = searchParams.get("discountCode");

  const handleGoogleSignIn = () => {
    const redirectTo = `${config.domainName}/api/auth/callback`;
    setLoading(true);
    const supabase = createClient();
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${redirectTo}?priceId=${encodeURIComponent(
          priceId || ""
        )}&discountCode=${encodeURIComponent(
          discountCode || ""
        )}&redirect=${encodeURIComponent("/test")}`,
      },
    });
    setLoading(false);
  };

  const [magicLinkState, magicLinkAction, pending] = useActionState<
    ActionState,
    FormData
  >(signInWithMagicLink, { error: "", success: "" });

  return (
    <motion.div
      className="min-h-[100dvh] bg-gray-950 flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-md space-y-8">
        <motion.div
          className="flex justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <motion.div
            className="inline-block bg-purple-500/10 p-3 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }}
          >
            <Code2 className="w-8 h-8 text-purple-400" />
          </motion.div>
        </motion.div>

        <motion.div
          className="space-y-4 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {mode === "signin" ? "Welcome Back" : "Get Started"}
          </motion.h1>
          <p className="mt-2 text-lg text-gray-400">
            {mode === "signin"
              ? "Sign in to continue your journey"
              : "Create your free account now"}
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-900/80 backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-white/5"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {magicLinkState?.success ? (
            <div className="p-6 text-center bg-green-900/50 rounded-lg border border-green-800/50">
              <h3 className="text-lg font-medium text-green-400">
                Check your inbox
              </h3>
              <p className="mt-2 text-sm text-green-300">
                We've sent you a magic sign-in link
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <form action={magicLinkAction} className="space-y-6">
                <Input
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  className="h-12 bg-gray-800/50 border-gray-700/50 text-gray-100 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent rounded-lg"
                />
                <input type="hidden" name="priceId" value={priceId || ""} />
                <input
                  type="hidden"
                  name="discountCode"
                  value={discountCode || ""}
                />

                <Button
                  type="submit"
                  className="w-full h-12 font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg transition-all group"
                >
                  {pending ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <div className="flex items-center gap-2">
                      <span>Continue with Email</span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                      >
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </motion.span>
                    </div>
                  )}
                </Button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700/50" />
                </div>
                <div className="relative flex justify-center">
                  <span className="px-4 text-sm text-gray-500 bg-gray-900/80">
                    or continue with
                  </span>
                </div>
              </div>

              <Button
                onClick={handleGoogleSignIn}
                className="w-full h-12 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 rounded-lg text-gray-300 transition-colors"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google
                  </motion.div>
                )}
              </Button>
            </div>
          )}

          {magicLinkState?.error && (
            <motion.div
              className="mt-4 p-3 text-sm text-red-400 bg-red-900/30 rounded-lg border border-red-800/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {magicLinkState.error}
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Login;
