const Model = require('./model');

function addUser(user){
    const myUser = new Model(user);
    return myUser.save();
}

async function updateUser(id,name){
    const  foundUser = await Model.findById(id);
    foundUser.name = name;
    const newUser = await foundUser.save();
    return newUser;
}
async function destroyUser(id){
    const  foundUser = await Model.deleteOne({ id  : id});
    return foundUser;
}


async function getUsers(filterUsers){
    let filter = {};
    if(filterUsers){
        filter = { name : filterUsers };
    }
    return await Model.find(filter);
}

module.exports = {
    addUser,
    updateUser,
    destroyUser,
    getUsers
}