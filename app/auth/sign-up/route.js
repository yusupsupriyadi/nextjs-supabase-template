import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
	const requestUrl = new URL(request.url);
	const formData = await request.formData();
	const email = formData.get("email");
	const password = formData.get("password");
	const cookieStore = cookies();
	const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

	await supabase.auth.signUp({
		email,
		password,
		options: {
			emailRedirectTo: `${requestUrl.origin}/auth/callback`,
		},
	});

	return NextResponse.redirect(requestUrl.origin, {
		status: 301,
	});
}
