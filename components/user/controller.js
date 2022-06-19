const store = require('./store');
function add(name){

    if(!name){
        return Promise.reject('Error al crear el usuario');
    }
    const fullUser = {
        name,
    }
    store.addUser(fullUser)
    return Promise.resolve(fullUser);
 
}

function update(id,user){
    return new Promise( async (resolve,reject)=>{
        if(!id || !user){
            return reject('Error al actualizar el usuario');
        }
        const result = await store.updateUser(id,user)
        return resolve(result);
    });
}

function destroy( id){
    return new Promise((resolve,reject)=>{
        if(!id) return reject('Id no valido');
        store.destroyUser(id)
        .then(result => resolve(result))
        .catch(err => reject(err));
    });
}
function all(filterUsers){
    return new Promise((resolve,reject)=>{
        return resolve(
            store.getUsers(filterUsers));
    });
}
module.exports = {
    add,
    update,
    destroy,
    all
}