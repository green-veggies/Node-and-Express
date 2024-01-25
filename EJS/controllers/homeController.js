const homeController = (req,res)=>{

    const data ={
        name:"Jasrotia"
    }


    res.render('index',data);
};
export {homeController};