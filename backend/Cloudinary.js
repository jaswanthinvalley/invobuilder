const cloudninary = require('cloudinary').v2



cloudninary.config({
    cloud_name : process.env.CD_NAME,
    api_key : process.env.CD_API_KEY,
    api_secret : process.env.CD_API_SECRET

})

(async function () {
const upload = await cloudninary.uploader.upload('backend\sampelimages\jash.jpg')
console.log(upload)
})()