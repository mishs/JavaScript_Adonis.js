'use strict'

class PostController {
    //pass view as a parameter
    async index( { view }) {
        //render the view the dot inside render method targets through inside folder
        return view.render('posts.index')
    }
}

module.exports = PostController
