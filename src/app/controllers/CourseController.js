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
       req.body.image=`http://i3.ytimg.com/vi/${req.body.videoId}/maxresdefault.jpg`
       const course=new Course(req.body)
       course.save()
        .then(() => res.redirect('/me/stored/courses'))
        .catch(error => {})
    }
    //[GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id).lean()
            .then(course => res.render('courses/edit', {course}))
            .catch(next)
        
    }
    //[PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
        
    }
    //[DELETE] /cources/:id
    destroy(req, res, next) {
        Course.delete({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next)
    }

    //[DELETE] /cources/:id/force
    forceDestroy(req, res, next) {
        Course.deleteOne({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next)
    }

    //[PATCH] /cources/:id/restore
    restore(req, res, next) {
        Course.restore({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next)
    }


}

module.exports = new CourseController();
