const Course = require('../models/Course');

class CourseController { 
    //[GET] courses/:slug 
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug }).lean()
            .then(course => res.render('courses/show', {course}))
            .catch(next);
    }

    //[GET] cources/create
    create(req, res, next) {
        res.render('courses/create')
    }

    //[POST] cources/store
    store(req, res, next) {
       const formData = req.body;
       formData.image=`http://i3.ytimg.com/vi/${req.body.videoId}/maxresdefault.jpg`
       console.log(formData.image)
       console.log(formData.name)
       console.log(formData.videoId)
       console.log(formData.description)
       const course=new Course(formData)
       course.save()
        .then(() => res.redirect('/'))
        .catch(error => {})
    }
}

module.exports = new CourseController();
