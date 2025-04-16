import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";


cloudinary.config({
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
})

export async function POST() {
        try {

            const timestamp = Math.round(new Date().getTime() / 1000);
            const signature = cloudinary.utils.api_sign_request({
                    timestamp,
                    transformation: "c_crop,g_face,w_400,h_400,r_max",
                },
                process.env.CLOUDINARY_API_SECRET as string
            )

            return NextResponse.json({
                timestamp,
                signature,
                api_key: process.env.CLOUDINARY_API_KEY
            },{status: 200})

        } catch (error) {
            console.log("CLOUDINARY_IMAGE_UPLOAD_ISSUES: ", error) 
            return NextResponse.json({error: "Problem uploading Image"}, {status: 500})
        }

}