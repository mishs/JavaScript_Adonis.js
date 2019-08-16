'use strict'

class PostController {
    //pass view as a parameter
    async index( { view }) {
        //hard-coding data as stage to test before accessing from database
        const posts = [
            {title: 'Post One', body: 'This the body for post one'},
            {title: 'Post Two', body: 'This the body for post two'},
            {title: 'Post Three', body: 'This the body for post three'}
        ]
        //render the view the dot inside render method targets through inside folder
        // return view.render('posts.index');

        return view.render('posts.index', {
            title: 'Latest Posts',
            posts: posts
        })
    }
}

module.exports = PostController
