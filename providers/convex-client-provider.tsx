"use client";

import Login from "@/app/login/page";
import Loading from "@/components/auth/loading";
import { zhCN } from "@clerk/localizations";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";

interface ConvexClientProviderProps {
  children: React.ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;
const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({
  children,
}: ConvexClientProviderProps) => {
  return (
    <ClerkProvider localization={zhCN}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <AuthComponents>{children}</AuthComponents>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};

const AuthComponents = ({ children }: ConvexClientProviderProps) => {
  const { isSignedIn } = useAuth();

  // 如果用户未登录，显示登录表单
  if (!isSignedIn) {
    return <Login />;
  }

  // 用户已登录，渲染 children
  return (
    <>
      <AuthLoading>
        <Loading />
      </AuthLoading>
      <Authenticated>{children}</Authenticated>
    </>
  );
};
