import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const { username, password } = await req.json();

		//
		if (username === "wak786" && password === "password") {
			return NextResponse.json({ success: true, message: "Login successful!" });
		} else {
			return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
		}
	} catch (error) {
		return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
	}
}