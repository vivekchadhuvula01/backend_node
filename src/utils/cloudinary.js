import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';  //file sysytem given by nodejs r-w-d 




    // Configuration
 cloudinary.config({ 
        cloud_name: process.env.cloud_name, 
        api_key: process.env.api_key, 
        api_secret: process.env.api_key 
       }   )

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //uploade file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:'auto'
        })
        //file has been uploaded successfully
        console.log('file has been uploaded on cloudinary',
        response.url)
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) //removes the locally save dtemporary file as the upload operation failed
        return null
        
    }
}

export {uploadOnCloudinary}