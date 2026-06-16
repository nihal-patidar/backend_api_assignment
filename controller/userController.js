import users from "../users.js";



function getAllUser(req, res){

    if(!users.length) return res.status(404).send({
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

function getUser(req , res){

    console.log("log body",req.body);
    console.log("log query".req?.query);
    console.log("log params",req.params);

    const {id} = req.params ;

    const result = users.find((user)=> user.id === id);
    if(!result){
        return res.status(404).send({
            msg : "User not found",
        })
    }

    return res.status(200).send({
        user : result 
    })
}

function updateUser(req , res){

    const {id} = req.params ;
    const newUser = req.body ;

    console.log("Newuser ",newUser)

    const result = users.findIndex((user)=> user.id === id);

    if(result === -1){
        return res.status(404).send({
            msg : "user Not Found",
        })
    }

    users[result] = newUser ;
    console.log("user ", users[result]);
    return res.status(200).send({
        user : users[result]
    })
}


export {createUser, getAllUser, getUser, updateUser}