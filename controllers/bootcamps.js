const Bootcamp = require("../models/Bootcamp");

// @desc      Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res.status(200).json({
      success: true,
      count: bootcamps.length,
      data: bootcamps,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};

// @desc      Get single bootcamp
// @route     GET /api/v1/bootcamps/:id
// @access    Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      return res.status(404).json({
        success: false,
        error: "Bootcamp not Found",
      });
    }

    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};

// @desc      Create new bootcamp
// @route     POST /api/v1/bootcamps
// @access    Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const newBootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: newBootcamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};

// @desc      Update bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access    Private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const updatedBootcamp = await Bootcamp.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new:true,
        runValidators:true

      }
    );

       if (!updatedBootcamp) {
         return res.status(404).json({
           success: false,
           error: "Bootcamp not Found",
         });
       }

    res.status(201).json({
      success: true,
      data: updatedBootcamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }
};

// @desc      Delete bootcamp
// @route     DELETE /api/v1/bootcamps/:id
// @access    Private
exports.deleteBootcamp = async (req, res, next) => {

  try {
    const deletedBootcamp= await Bootcamp.findByIdAndDelete(req.params.id);

     if (!deletedBootcamp) {
       return res.status(404).json({
         success: false,
         error: "Bootcamp not Found",
       });
     }

      res.status(201).json({
        success: true,
        data: deletedBootcamp,
      });

  } catch (error) {
    res.status(400).json({
      success: false,
    });
  }


};

