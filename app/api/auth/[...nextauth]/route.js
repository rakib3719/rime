

import { connectDB } from "@/app/lib/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"


const handler = NextAuth({
session: {
    strategy:"jwt",
    maxAge: 30 * 24 * 60 * 60
},
secret: "adifhnlkdajfkjdfakdmfkadjfkjfkugrh",

providers: [

CredentialsProvider({
    credentials: {
       email: {},
       password: {}
      
    },

async authorize (credentials)  {
    
const {email, password} = credentials;

if(!email || !password){
    return null;
}
const db = await connectDB();
const userCollection = db.collection("user")
const user = await userCollection.findOne({email: email});
if(!user){
    return null;
}



const compare = password === user?.password;
if(!compare){
    return null;
}

return {
 

    email: user.email,
    role: user.role, 
  };


}

},


)


],

callbacks: {

async jwt ({token, user}){

if(user){

 
    token.email = user.email;

    token.role = user.role;

}
return token

},


async session ({session, token}){
    if(token){
        session.user = {

            email: token.email,
         
            role : token.role
        }
    }

    return session;
}
},
pages: {
    signIn: '/login'
}


})







export{handler as GET, handler as POST}