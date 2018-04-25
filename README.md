# mc-shared

This is a collection of native Javascript modules that contain several useful utilities for any project. Whether its Angular, Backbone, React, or any other framework. These utilities are well suited to integrate because they are unopinionated about framework. They are just Javascript. 

This package cantains four modules.

	Events
	General Utility
	Data Sending and Recieving, and
	Observable
	
While you may be familiar with each of these these patterns already and wondering why you should use this package, the answer is that these modules are vast simplifications of common patterns and common monolilth libraries, and they are widely versitile within a project. 

They require no complicated or strict import porcedures, they can be used on the frontend or the backend just as well (npm or something like bower, they automatically attach them themselves to the global window object (see below) on the frontend, and you simply require it into your node module on the backend. Beyond that they work identically) 

Most importantly, these packages are stripped down to the bare minimum. So the Observables module only has subscribe and push methods. And the Events module is a simple registration of a callback to a name with the "on" method, and then the "dispatch" method is called with that name from any other part of the app and the callback will run locally where it was registered.

I did not see the need in my own work to make it more complicated than these cases, but if I need more, I add more functionality without ever breaking existing functioniality.




To import 

everything is attached to the window object, which has a shared object, which has the four module/services

	events_service
	send_service
	react_service
	utility_service


	so anywhere in a function, an app module, or the global scope importing everything (not required) would look like this
	Note: there are no dependcies, and each module is independent of each other

	var shared = window.shared;
    var g = shared.utility_service;
    var send = shared.send_service;
    var react = shared.react_service;
    var events = shared.events_service;





	
