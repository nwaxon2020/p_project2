import mongoose from "mongoose";

export default async function ConnectDatabase() {
    try {
        const url = process.env.MONGO_URL
        const database = await mongoose.connect(`${url}`)

        if(database.connection.readyState === 1){
            console.log("Database Already connected ✔")
            return
        }

        console.log("Database Connected Successfully ✔✔✔")

    } catch (error:any) {
        console.log("There was a problem connecting Database ❌", error)
    }
}