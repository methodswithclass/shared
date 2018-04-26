# mc-shared


This collection of native JavaScript unopinionated services can be used in any JavaScript framework: Angular, Backbone, React; even Node on the backend without any adjustments.


This package cantains four modules.


	Events
	General Utility
	Data Sending and Recieving, and
	Observable
	
	
There are no dependencies and all of the services are independent from each other

None of these module patterns are new or ground breaking, only a handful of the methods of the Utility are custom built that aren't found anywhere else. 


The reason it's smart to use these modules over the standard, in some casess, is that these modules


	are vast simplifications of the common monolilthic libraries, and they are widely more versitile within a project. 

	have no complicated or strict import procedures

	are stripped down to the bare minimum and are very lightweight, saving docs to learn and MBs to lug around




To add modules/services to your projects on the frontend do the following:

	the services come packaged as a collection under the 'shared' object, each named the following, which is attached to the global window object 

	events_service
	send_service
	react_service
	utility_service


	anywhere in a function, an app module, or the global scope, importing everything (not required) would look like this
	
	var shared = window.shared;
	var g = shared.utility_service;
	var send = shared.send_service;
	var react = shared.react_service;
	var events = shared.events_service;



To add the services to your node project do the following:


	the services come packaged together in a temp object and are returned from mc-shared through the standard "module.exports" call, it is also received through the standard "require" statement.


	var shared = require("mc-shared");


	var g = shared.utility_service;
	var send = shared.send_service;
	var react = shared.react_service;
	var events = shared.events_service;




mc-shared can be installed on the frontend with something like bower, so that it's attached to the window object, and it can be installed with npm so that it loads onto the backend with require. These two instances of the package can coexist simultaneously. The mc-shared module code detects whether it's the frontend or backend automatically.   




	
