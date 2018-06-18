# ANGULAR

* NgModules ---compilation context---> components

* Components
	* define **views** (component class)
	* use **services** (service class)
		- Service providers can be _injected_ as _dependencies_
		
* Class decorators (provide metadata on how to use them)
	- function that modify JavaScript classes
		
	- NgModules cam import functionality from other NgModules
	
	- _Directives_. Provide program logic.
	- _Binding markup_. Connects your application data and the DOM.
	- _Event binding_. App respond to user input in the target enviroment by updating application data.
	- _Property binding_. Interpolate values that are computed from your application data into the HTML.
	
* Pipes
	Transform values for display (ex. dates and currency display values in a way appropiate to the users locale).
	
* Service class
	`@Injectable` decorator. The decorator provides the metadata that allows your service to be 
	injected into client components as a dependency.
	
	- _Dependency injection_ keep components classes lean and efficient. They don't fecth data from server, 
	validate user input, or log directly to the console; the delegate such task to services.
	
* Routing
	*Router* NgModule provudes a service taht lets you define a nevigation path among the different application states
	and view hierarchies in your app.
	- The ruoter maps URL-like paths to views instead of pages. The router intercepts the browser's behavior, and shows 
	or hides view hierarchies.
	- The router can lazy-load the module on demand
	- To define navigation rules, you associate _navigation paths_ with your components
	
