import api from "@/lib/axios"

interface signupPayload {
    name : string,
    email : string,
    password : string
}

const signup = async (payload : signupPayload ) => {
   const response = await  api.post("/auth/signup",payload);
   return response.data;
}

export default signup;