import mongoose from 'mongoose'
import colors from 'colors'

const dbconnection = async ()=>{
    try {
        await  mongoose.connect(process.env.DB_Url)
        console.log(`Database conneted succesfully`.bgGreen)
        
    } catch (error) {
        console.log(`Error in Database `.bgRed)
        
    }
}
export default dbconnection