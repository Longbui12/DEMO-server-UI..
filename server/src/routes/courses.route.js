const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get(
    '/create',
    // ví dụ về middleware tiếp theo
    //   function (req, res, next) {
    //     if (req.query.ve === "vip") return next();
    //     res
    //       .status(403)
    //       .json({ message: " Mày đã fail rồi nhé con 🛑🛑🛑 🚀🚀🚀!!! " });
    //   },
    //////////////////////////////
    courseController.create,
);

router.post('/store', courseController.store);

router.get('/:id/edit', courseController.edit);
router.post('/handle-form-actions', courseController.handleFormActions);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.destroy);
router.delete('/:id/force', courseController.forceDestroy);
router.get('/:slug', courseController.show);

module.exports = router;
