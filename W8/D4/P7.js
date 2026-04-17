//Generateing OTP using Crypto and hashing it using bcrypt
const crypto = require('crypto');
const bcrypt = require('bcrypt');
function generateOTP(length=6){
    return crypto.randomInt(100000,999999).toString();
}
async function hashOTP(otp) {
    //10 indicated salt round 2^10
    return await bcrypt.hash(otp,10);

    
}
async function verifyOTP(input,hash) {
    return await bcrypt.compare(input,hash);

}
(async()=>{
    const otp = generateOTP();
    console.log("Generated OTP:",otp);
    const hashedOTP = await hashOTP(otp);
    console.log("Hashed OTP:",hashedOTP);
    console.log("Verification (correct):",await verifyOTP(otp,hashedOTP));
})();