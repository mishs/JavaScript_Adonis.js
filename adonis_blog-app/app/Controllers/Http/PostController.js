'use strict'

class PostController {
    //pass view as a parameter
    async index( { view }) {
        //render the view the dot inside render method targets through inside folder
        return view.render('posts.index', {
            //Object to show and test you can add data in our view. Next, call it from inside the view
            title: 'Latest Post'
        })
    }
}

module.exports = PostController
