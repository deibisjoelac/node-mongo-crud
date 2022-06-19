const Model = require('./model');

function addMessage(message){
    const myMessage = new Model(message);
    myMessage.save();
}

async function updateMessage(id,message){
    const  foundMessage = await Model.findById(id);
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}
async function destroyMessage(id){
    const  foundMessage = await Model.deleteOne({ id  : id});
    return foundMessage;
}


async function getMessages(filterMessages){
    let filter = {};
    if(filterMessages){
        filter = { user : filterMessages };
    }
    return await Model.find(filter);
}

module.exports = {
    addMessage,
    updateMessage,
    destroyMessage,
    getMessages
}