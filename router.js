const express=require("express");
const router=express.Router();
const InfoRouter= require("./infoSchema");

//crete
router.post("/",async(req,res) => {
    console.log(req.body);
var data = new InfoRouter({
    
Name:req.body.Name,
Age:req.body.Age,
City:req.body.City
})

await data.save();
res.json(data);

})
//update

router.put("/update",async (req,res) => {

var update = await InfoRouter.updateOne({_id:req.body._id},{$set:{

Name:req.body.Name,
Age:req.body.Age,
City:req.body.City
}});

res.json(update);
})


//delete

router.delete("/del/:id",async(req,res)=>{
    var delData= await InfoRouter.findByIdAndRemove(req.params.id).then(e =>{
        res.json({message:"Deleted succes fully"})
    })
})


//get all
router.get("/",async(req,res)=>{
    var findData=await InfoRouter.find();
    res.json(findData);
})
router.get("/",(req,res) => {

    res.json("hi from routerjs");
})
module.exports=router;