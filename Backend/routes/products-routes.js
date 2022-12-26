const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;

const ProductModel = require('../models/ProductModel');

// products/add
router.post('/add',
    function (req, res) {
        const newDocument = {
            "sku": req.body.sku,
            "productName": req.body.productName,
            "productDesc": req.body.productDesc,
            "productImage": req.body.productImage,
            "price": req.body.price,
            "category": req.body.category,
            "size": req.body.size,
            "color": req.body.color

        };

        // Check if sku is unique
        ProductModel
            .findOne({ sku: newDocument['sku'] })
            .then(
                async function () {
                    // If avatar file is included...
                    if (Object.values(req.files).length > 0) {

                        const files = Object.values(req.files);


                        // upload to Cloudinary
                        await cloudinary.uploader.upload(
                            files[0].path,
                            (cloudinaryErr, cloudinaryResult) => {
                                if (cloudinaryErr) {
                                    console.log(cloudinaryErr);
                                    res.json(
                                        {
                                            status: "not ok",
                                            message: "Error occured during image upload"
                                        }
                                    );
                                }

                                // Include the image url in newDocument
                                else {
                                    newDocument.productImage = cloudinaryResult.url;
                                    console.log('newDocument.productImage', newDocument.productImage);
                                }
                            }
                        );
                    };

                    // Create document in database
                    ProductModel
                        .create(newDocument)
                        // If successful...
                        .then(
                            function (createdDocument) {
                                // Express sends this...
                                res.json({
                                    status: "ok",
                                    createdDocument
                                });
                            }
                        )
                        // If problem occurs, the catch the problem...
                        .catch(
                            function (dbError) {
                                // For the developer
                                console.log('An error occured during .create()', dbError);

                                // For the client (frontend app)
                                res.status(503).json(
                                    {
                                        "status": "not ok",
                                        "message": "Something went wrong with db"
                                    }
                                );
                            }
                        );
                }
            );
    }
);



// products/list
router.post('/list',
    function (req, res) {
        ProductModel
            .find(req.query)
            .then(
                function (dbDocument) {
                    res.json(dbDocument);
                }
            )
            .catch(
                function (error) {
                    console.log('products/list error', error);

                    res.send('An error occured');
                }
            );
    }
);

// products/update
router.put('/update',

    function (req, res) {

        let updates = {};

        if (req.body.productName) {
            updates['productName'] = req.body.productName;
        };
        if (req.body.productDescription) {
            updates['productDesc'] = req.body.productDesc;
        };
        if (req.body.productImage) {
            updates['productImage'] = req.body.productImage;
        };

        if (req.body.price) {
            updates['price'] = req.body.price;
        };
        if (req.body.category) {
            updates['category'] = req.body.category;
        };
        if (req.body.size) {
            updates['size'] = req.body.size;
        };
        if (req.body.color) {
            updates['color'] = req.body.color;
        };



        UserModel
            .findOneAndUpdate(
                {
                    "sku": req.body.sku
                },
                {
                    $set: updates
                },
                {

                    new: true
                }
            )
            .then(
                function (dbDocument) {
                    res.json(dbDocument);
                }
            )
            .catch(
                function (error) {
                    console.log('/products/update error', error);
                    res.send('An error ocured');
                }
            );
    }

);

module.exports = router;