import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export async function middleware(req) {
	const res = NextResponse.next();
	const supabase = createMiddlewareClient({ req, res });

	const {
		data: { user },
	} = await supabase.auth.getUser();

	// jika pengguna masuk dan jalur saat ini adalah / arahkan pengguna ke / akun
	if (user && req.nextUrl.pathname === "/") {
		return NextResponse.redirect(new URL("/account", req.url));
	}

	// jika pengguna tidak masuk dan jalur saat ini tidak / arahkan pengguna ke /
	if (!user && req.nextUrl.pathname !== "/login") {
		return NextResponse.redirect(new URL("/login", req.url));
	}

	return res;
}

export const config = {
	matcher: ["/", "/account"],
};
