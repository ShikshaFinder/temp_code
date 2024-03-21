import db from "@/utils/db";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { e_name, e_image, e_description, reg_fees } = await req.json();
    const secret = headers().get("secret");
    if (secret !== process.env.NEXT_HEADER_SECRET) {
      return NextResponse.json(
        {
          success: false,
          message: "Provide secret",
        },
        { status: 401 }
      );
    }
    if (!e_name || !e_image || !e_description || !reg_fees) {
      return NextResponse.json(
        {
          success: false,
          message: "Provide all the required fields",
        },
        { status: 400 }
      );
    }
    const event = await db.eventSolo.create({
      data: {
        e_description,
        e_image,
        e_name,
        reg_fees,
      },
    });
    return NextResponse.json(
      {
        success: true,
        message: "New event created",
        event,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}
