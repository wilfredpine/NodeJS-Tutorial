// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete

const blog_index = (req, res) => {
    res.render('create',  { 'title': 'New Blog'});
}

module.exports = {
    blog_index
}
