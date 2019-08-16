'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('home')
// Route.on('/home').render('home')

// also, just for experimental sake, how do I review view straight from route- using .on?
//research difference between .on and .get
//route to access the postcontroller method- index
//just like ('/') is url to welcome, this one ('/post' ...) below is specifying when post round is hit from (/) home page
   //the second part in quotes, note that else fails(PostController.index) maps to ... .
Route.get('/posts', 'PostController.index')

// Route.on('/').render('Home')

//ms- the file is addressed with a capital letter though in the folder (here folder is resources/views/"home.edge") is lower-case

//ms - Testing and Exercising Routing
/**
 * Ms
 * Routes handle CRUD function Route.get, to post or delete-etc
 * we can do whatever we want when a route is hit- so create a funciton soon afer a route- as below
 */

//  Route.get('/test1', () => 'Here we are testing new routes' )

 //it seems ES6 arrow functioni wants precision since this below didn't work
   // Route.get('/test1', () => {'Here we are testing new routes'; }) - rather do as above, no curly brackets etc

//with old functions would be

// Route.get('/test2', function(){
//     return 'Old way doing functions';
// })

//test for parameters in url;
//here- be very mindful of syntax. From /test /   :  ... and parameters being -> params . (not colon, but .) id
  //NB-> if if you have parameters inside function brackets without inner curly brackets, it breaks. i.e
     //(params) => ... WRONG, else you get error - id undefined
     // ({params}) =>  CORRECT

Route.get('/test/:id', ({params}) => `Testing with parameter id ${params.id}`)