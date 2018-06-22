module.exports = {
    
    create: ( req, res ) => {
        const dbInstance = req.app.get('db');
        const { id, name, price, img } = req.body

        dbInstance.create_product([ id, name, price, img ])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Catastrophic error!!!"});
            console.log(err)
        } );
    },
   
    getInventory: ( req, res ) => {
        const dbInstance = req.app.get('db');
        const {params} = req;
        
        dbInstance.get_inventory([params.id])
        .then( () => res.sendStatus(200).send( product ) )
        .catch( err => {
            res.status(500).send({errorMessage: "Catastrophic error!!!"});
            console.log(err)
        } );
    },

    update: ( req, res ) => {
        const dbInstance = req.app.get('db');
        const {params, query} = req;
        
        dbInstance.update_product([params.id, query.desc])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Catastrophic error!!!"});
            console.log(err)
        } );
    },

    delete: ( req, res ) => {
        const dbInstance = req.app.get('db');
        const {params} = req;

        dbInstance.delete_product([params.id])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Catastrophic error!!!"});
            console.log(err)
        } );
    }

    
}