import mongoose from 'mongoose'

let isConnected = false

export const connectToDB = async() => {
    mongoose.set('strictQuery',true)

    if (isConnected){
        console.log('Mongodb already connected!')
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: 'share_prompt',
        })

        isConnected = true
        console.log('Mongodb connected')
    } catch(error) {
        console.log(error)
    }
}

//This code might need updatetion according to mongodb atlas