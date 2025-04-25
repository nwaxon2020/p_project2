// import ConnectDatabase from "@/lib/database";
// import { User } from "@/models/schemas";
// import { NextRequest, NextResponse } from "next/server";
// import bcrypt from "bcryptjs";


// export async function POST(req:NextRequest) {
    
//     try {
//         //getting data from Input form
//         const {username, email, password, profilePic} = await req.json();

//         //error handling for form
//         if(username.length < 3){
//             return NextResponse.json({error: "User name must be atleat three(3) characters Long..."},{status: 400})
//         }
//         if(!email || !password){
//             return NextResponse.json({error: "Please enter a valid Credential..."}, {status: 400})
//         }
//         if(password.length < 8){
//             return NextResponse.json({error: "Password must be atleat eight(8) characters Long"}, {status: 400})
//         }

//         //connect to database
//         await ConnectDatabase();

//         //checking if user already exist in database
//         const userExist = await User.findOne({email})
//         if(userExist){
//             return NextResponse.json({error: "User Email Already Exist...Please "}, {status: 400})
//         }

//         //Hash the new user password
//         const hashedPassword = await bcrypt.hash(password, 10)

//         //Creating a new user
//         await User.create({username, email, password:hashedPassword, profilePic})
        
//         return NextResponse.json({message: "Account created successfully ✔"})


//     } catch (error: unknown) {
//         if (error instanceof Error) {
//             return NextResponse.json({ error: error.message }, { status: 500 });
//         } else {
//             return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
//         }
//     }
// }