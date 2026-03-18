// middleware/validateTask.js

import { body, validationResult } from "express-validator";

export const validateTask = [
  body("title")
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters"),

  body("description")
    .optional()
    .isLength({ max: 200 })
    .withMessage("Description too long"),

  body("completed")
    .optional()
    .isBoolean()
    .withMessage("Completed must be true or false"),

    (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Validation failed",
        errors: errors.array(),
      });
    }

    next();
  },
];