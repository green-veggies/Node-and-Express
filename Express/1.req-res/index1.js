import express from "express";
const app=express();

const callBack1=(req,res,next)=>{
    console.log("first callback");
    next();
}
const callBack2=(req,res,next)=>{
    console.log("second callback");
    next();
}
const callBack3=(req,res,next)=>{
    console.log("third callback");
    res.send(`<h2>All callbacks completed</h1><h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie magna vitae nisl sodales, eget dignissim diam egestas. Cras rutrum, orci eu vestibulum pulvinar, dolor metus convallis justo, ac pharetra tortor massa ut tellus. Integer nunc diam, tristique a accumsan eu, ullamcorper id felis. In a porttitor mi, vel condimentum mi. Nulla vitae posuere lorem, eget cursus leo. Pellentesque eget erat eu massa rhoncus semper sit amet sed felis. Phasellus suscipit lorem non purus suscipit aliquam a nec neque. Aliquam condimentum sem mattis ullamcorper pellentesque. Vivamus iaculis est et neque lobortis dignissim.</h2>`)
    next();
}


app.get('/callBacks',[callBack1,callBack2,callBack3],(req,res)=>{
    console.log("completed the task")
    // res.send(`<FInally completed`)
});


app.listen(3000,()=>{
    console.log(`Listening on port 3000`);
})