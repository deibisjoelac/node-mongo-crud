const store = require('./store');
function add(user,message){
    return new Promise((resolve,reject)=>{
        if(!user || !message){
            return reject('Error al crear el mensaje');
        }
        const fullMessage = {
            user,
            message,
            date: new Date()
        }
        store.addMessage(fullMessage)
        return resolve(fullMessage);
    });
}

function update(id,message){
    return new Promise( async (resolve,reject)=>{
        if(!id || !message){
            return reject('Error al crear el mensaje');
        }
        const result = await store.updateMessage(id,message)
        return resolve(result);
    });
}

function destroy( id){
    return new Promise((resolve,reject)=>{
        if(!id) return reject('Id no valido');
        store.destroyMessage(id)
        .then(result => resolve(result))
        .catch(err => reject(err));
    });
}
function all(filterMessages){
    return new Promise((resolve,reject)=>{
        return resolve(
            store.getMessages(filterMessages));
    });
}
module.exports = {
    add,
    update,
    destroy,
    all
}