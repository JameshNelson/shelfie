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
    }
}