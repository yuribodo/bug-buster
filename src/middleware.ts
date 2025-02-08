import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // Verifica se está na página de login
    if (req.nextUrl.pathname.startsWith("/login")) {
      if (req.nextauth.token) {
        // Se estiver autenticado e tentar acessar login, redireciona para home
        return NextResponse.redirect(new URL("/", req.url));
      }
    }
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Se tiver token, está autorizado
        if (token) return true;
        // Se não tiver token, só permite acesso a / e /login
        return req.nextUrl.pathname === "/" || req.nextUrl.pathname === "/login";
      },
    },
  }
);

// Configura em quais caminhos o middleware será executado
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
