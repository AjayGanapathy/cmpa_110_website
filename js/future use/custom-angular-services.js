/*
This script defines custom angular services
	Angular services store data. They pass data to and receive data from angular controllers.
	 (In actuality, it's a little more complex. Angular services are not just models, but controllers in their own right. They can do all sorts of data manipulation on behalf of angular controllers. The question, of course is why would one want to shift the concerns of the controller code over to a service? The answer is simple - if ther are several controllers, all of which want to perform the same manipulations on the same code, then those manipulations can simply be built into the service, rather than hardcoded and duplicated in every controller. For more information on the dual-role of angular services see http://docs.angularjs.org/guide/dev_guide.services)
Angular is an MVC framework. 
	Services = model code
	Directives = view code
	Controllers = controller code
This file is just the tip of the iceberg. The majority of angular directives, controllers, and services are pre-built.
*/
/*Services go here*/