/**
 * For team events creation
 */

import { headers } from "next/headers";
import { NextResponse } from "next/server";

import db from "@/utils/db";

export async function POST(req: Request) {
  try {
    const secret = headers().get("secret");
    if (secret !== process.env.NEXT_HEADER_SECRET) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid secret",
        },
        {
          status: 401,
        }
      );
    }
    const data = await req.json();
    const { e_name, e_image, e_description, reg_fees, max_member, min_member } =
      data;

    if (
      !e_name ||
      !e_image ||
      !e_description ||
      !reg_fees ||
      !max_member ||
      !min_member
    )
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all the fields",
        },
        {
          status: 400,
        }
      );

    const event = await db.eventTeam.create({
      data: {
        e_description,
        e_image,
        e_name,
        max_member,
        reg_fees,
        min_member,
      },
      select: {
        id: true,
        e_name: true,
        e_image: true,
        e_description: true,
        reg_fees: true,
        max_member: true,
      },
    });
    return NextResponse.json(
      {
        success: true,
        message: "Event created successfully",
        event,
      },
      {
        status: 201,
      }
    );
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
