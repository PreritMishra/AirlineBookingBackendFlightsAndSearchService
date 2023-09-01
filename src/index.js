const express = require("express");
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

const db= require('./models/index');

const setupAndStartServer = async() => {
    //create express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
    app.use('/api', ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);

        // const airports = await Airport.findAll({
        //     include: City
        // });
        // console.log(airports);
        // const airports = await City.findAll({
        //     where: {
        //         id: 4
        //     },
        //     include: [
        //         {
        //             model: Airport
        //         }
        //     ]
        // });
        // console.log(airports)
        //->>> fetched all the airports in the city with the help of cityID
        // const cityId = 7; // Replace 4 with the desired city ID

        // const city = await City.findByPk(cityId, {
        //     include: Airport,
        // });

        // if (!city) {
        //     console.log(`City with ID ${cityId} not found.`);
        // } else {
        //     const airports = city.Airports; // Assuming the association is named "Airports"
        //     console.log(airports);
        // }

        // const city = await City.findOne({
        //     where:{
        //         id: 7
        //     }
        // });
        // const airports = await city.getAirports();
        // /**
        //  * const newAirport = await Airport.create({
        //     name: "Prayagraj Airport",
        //     id:9  //random city id
        //     //It will create the airport with the id 9 later we can change by below method the id//
        // });
        //  */
        // const newAirport = await Airport.findOne({
        //     where: {
        //         id: 7
        //     }
        // });
        // await city.addAirport(newAirport);
        // console.log(city,airports);
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter:true});
        }

    });
}

setupAndStartServer();