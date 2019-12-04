module.exports = {


    postToInventory: (req, res, next ) => {
        const dbInstance = req.app.get('db'); 
        const {name, price, img} = req.body;

        dbInstance.post_inventory([name,price,img]).then( () => res.sendStatus(200)).catch(err => {
            res.status(500).send({errorMessage: "DID NOT WORK"});
            console.log(err); 
        });
    },

    getInventory: (req, res, next) => {
        const dbInstance = req.app.get('db'); 
        

        dbInstance.get_inventory().then( inventory => res.status(200).send(inventory) ).catch(err => {
            res.status(500).send({errorMessage: "It no work"});
            console.log(err)
        });
    },

    delete: (req, res, next) => {
        const dbInstance = req.app.get('db'); 
        const {id} = req.params; 

        dbInstance.delete_product(id).then(() => res.sendStatus(200) ).catch(err => {
            res.status(500).send(
                {errorMessage:"This no work"});
                console.log(err); 
        });
    },

    update: (req, res, next) => {
        const dbInstance = req.app.get('db'); 

            console.log(req.params.id)

        dbInstance.update_product([req.params.id, req.body.name,req.body.price, req.body.img]).then( () => res.sendStatus(200)).catch(err => {
            res.status(500).send({errorMessage: 'THIS NO WORK'});
            console.log(err); 
        })
    }
}