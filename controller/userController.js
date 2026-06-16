import users from "../users.js";



function getAllUser(req, res){

    if(users.length) return res.status(404).send({
        msg : "No user Found",
    })


    return res.status(200).send({
        msg : "Found Successful",
        users : users 
    })
}


function createUser(req , res){
    console.log("log body" , req.body)
    const { id , firstName , lastName , hobby } = req.body ;

    if(users.find((user)=>user.id === id)){
        return res.status(404).send({
            err : "user already present : duplicate id"
        })
    }

    users.push({id : id , firstName : firstName , lastName : lastName , hobby : hobby});

    res.status(201).send({
        msg : "user has been created successfully"
    })
}


export {createUser, getAllUser}