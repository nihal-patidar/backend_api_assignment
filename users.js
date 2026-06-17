var users = [] ;


function removeUserFromArray (id){
    users = users.filter(user => user.id !== id);
}

export default users ;

export {removeUserFromArray} ;