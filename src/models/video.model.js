import mongoose , {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema = new Schema(
    {
        video:{
            type : String,
            required : true
        },
        title:{
            type:String,
            required: true
        },
        description:{
            type:String,
            required: true
        },
        thumbnail:{
            type:String,
            required: true
        },
        views:{
            type:Number,
            default: 0
        },
        owner:{
            type:mongoose.Types.ObjectId,
            ref: "User"
        },
        isPublished:{
            type:Boolean,
            
        }
    },
    {
        timestamps:true
    }
);

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model('video',videoSchema);
