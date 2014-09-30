var express 	= require('express');
var bodyParser	= require('body-parser');
var client 		= express()
	management	= express();
	
// Use body-parser
client.use(bodyParser.json());
//client.use(bodyParser.urlencoded({extended: true}));

management.use(bodyParser.json());
//management.use(bodyParser.urlencoded({extended: true}));

// Define the client and management routes
var clientRouter = express.Router();
var managementRouter = express.Router();

// Include the routes defined within the router files
require("./clientRoutes.js")(clientRouter)
require("./managementRoutes.js")(managementRouter)

// Use the routes define and set proper endpoints
client.use('/api/client', clientRouter);
management.use('/api/management', managementRouter);

// Set appropriate ports for each endpoint
var clientPort = process.env.PORT || 8080;
var managementPort = process.env.PORT || 8081;

// Default listen on all interfaces
client.listen(clientPort);

/** 
 * Set to internal only interface so we don't have a publically facing management API
 *
 * We should have a local application hosting the web server that will access the management
 * API on the localhost interface.  This is the most secure. 
 *
 * Implement HTTPS on the client facing side. (Not necessary server side unless publically accessible.)
 **/
management.listen(managementPort, 'localhost');