const houses = require('./db.json')
let globalId = 4

module.exports= {
    getHouses: (req,res)=>{
    res.status(200).send(houses)
    },
    createHouse: (req,res)=>{
        let{address,price,imageURL} = req.body
        let newHouse = {
            address,
            price,
            imageURL,
            id: globalId
        }
        houses.push(newHouse)
        res.status(200).send(houses)
        globalId++
    },
    updateHouse: (req,res)=>{
        // two ways to do the same thing
        let id = req.params.id
        // destructuring
        let {type} = req.body

        let index = houses.findIndex(house => +house.id === +id)
        
        if(houses[index].price === 0 && type === 'minus'){
            res.status(400).send('cannot go below 0')
        }else if (houses[index].price < 10000 && type === 'minus'){
            houses[index]. price = 0
            res.status(200).send(houses)
        } else if (type === 'minus'){
            houses[index].price -= 10000
            res.status(200).send(houses)
        }else if (type === 'plus'){
            houses[index].price += 10000
            res.status(200).send(houses)
        }
    },
    deleteHouse: (req,res)=>{
        let id = req.params.id
        let index = houses.findIndex(house => +house.id === +id )
        houses.splice(index, 1)
        res.status(200).send(houses)
    },

}