require('dotenv').config(); 

const express = require('express'),
    shelfie_controller = require('./controller'),
    massive = require('massive');

    const app = express(); 

    const{SERVER_PORT, CONNECTION_STRING} = process.env; 

    massive(CONNECTION_STRING).then(dbInstance => {
        app.set('db', dbInstance)
    }).catch(err => console.log(err)); 

    app.use(express.json()); 

    app.get('/api/inventory', shelfie_controller.getInventory);
    app.post('/api/product', shelfie_controller.postToInventory);
    app.delete(`/api/product/:id`, shelfie_controller.delete); 

 
app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}, ma lord`)
})