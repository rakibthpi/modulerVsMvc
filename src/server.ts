import mongoose from 'mongoose';
import app from "./app";
import config from "./app/config";


async function main() {
   try{
        await mongoose.connect(config.mongoUrl as string);
        app.listen(config.port, () => {
            console.log(`Server listening on port Rakib Hosen ${config.port}`);
        });
   }
   catch(error){
       console.log(error);
   }
}

main()