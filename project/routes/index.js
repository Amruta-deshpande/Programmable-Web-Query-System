var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/API', function(req, res, next) {
    var db_name = 'Webservicedb';
    var collection_name = 'apicollections';

    var category = req.query.category;
    var protocols=req.query.protocols;
    var updated = req.query.updated;
    var rating;
    if(req.query.rating !== "") {
        rating=parseFloat(req.query.rating);
    }
    else{
        rating = 0.0;
    }
    
    var tag=req.query.tag;
    
    var keyword=req.query.keyword;
    console.log(req.query.selectparam);
    
    var param=req.query.selectparam;

    //Connecting using MongoClient
    MongoClient.connect('mongodb://localhost:27017/' + db_name, function (err, db) {
        return new Promise(function (resolve, reject) {
            if (err) reject(err);
            //--------------------------------------
            if(param==='greaterthan'){
            var array = db.collection(collection_name).find(
                            {"title":{ $regex: ".*" + [keyword] + ".*" ,'$options' : 'i'},
                            "summary": { $regex: ".*" + [keyword] + ".*",'$options' : 'i'},
                            "description": { $regex: ".*" + [keyword] + ".*" ,'$options' : 'i'},
                            "category": { $regex: ".*" + [category] + ".*",'$options' : 'i' },
                            "protocols": { $regex: ".*" + [protocols]+ ".*",'$options' : 'i' },
                            "updated": { $regex: ".*" + [updated]+ ".*" ,'$options' : 'i'},
                            "rating": { $gt:rating},
                            "tag": { $regex: ".*" + [tag] + ".*",'$options' : 'i' }}
                ).limit(20).toArray();
            // console.log(array)
            db.close();
            resolve(array);
            }
            else if(param==='lessthan'){
                var array = db.collection(collection_name).find(
                             {"title":{ $regex: ".*" + [keyword] + ".*" ,'$options' : 'i'},
                            "summary": { $regex: ".*" + [keyword] + ".*",'$options' : 'i'},
                            "description": { $regex: ".*" + [keyword] + ".*" ,'$options' : 'i'},
                            "category": { $regex: ".*" + [category] + ".*",'$options' : 'i' },
                            "protocols": { $regex: ".*" + [protocols]+ ".*",'$options' : 'i' },
                            "updated": { $regex: ".*" + [updated]+ ".*" ,'$options' : 'i'},
                            "rating": { $lt:rating},
                            "tag": { $regex: ".*" + [tag] + ".*",'$options' : 'i' }}).limit(20).toArray();
            db.close();
            resolve(array);
            }
            else if(param==='equalto'){
                var array = db.collection(collection_name).find( 
                            {"title":{ $regex: ".*" + [keyword] + ".*" ,'$options' : 'i'},
                            "summary": { $regex: ".*" + [keyword] + ".*",'$options' : 'i'},
                            "description": { $regex: ".*" + [keyword] + ".*" ,'$options' : 'i'},
                            "category": { $regex: ".*" + [category] + ".*",'$options' : 'i' },
                            "protocols": { $regex: ".*" + [protocols]+ ".*",'$options' : 'i' },
                            "updated": { $regex: ".*" + [updated]+ ".*" ,'$options' : 'i'},
                            "rating": { $eq:rating},
                            "tag": { $regex: ".*" + [tag] + ".*",'$options' : 'i' }}).limit(20).toArray();
            db.close();
            resolve(array);

            }
            else{
                var array = db.collection(collection_name).find( {"title":{ $regex: ".*" + [keyword] + ".*" ,'$options' : 'i'},
                            "summary": { $regex: ".*" + [keyword] + ".*",'$options' : 'i'},
                            "description": { $regex: ".*" + [keyword] + ".*" ,'$options' : 'i'},
                            "category": { $regex: ".*" + [category] + ".*",'$options' : 'i' },
                            "protocols": { $regex: ".*" + [protocols]+ ".*",'$options' : 'i' },
                            "updated": { $regex: ".*" + [updated]+ ".*" ,'$options' : 'i'},
                            // "rating": { $regex: ".*" + [rating] + ".*",'$options' : 'i'},
                            "tag": { $regex: ".*" + [tag] + ".*",'$options' : 'i' }}).limit(20).toArray();

            db.close();
            resolve(array);

            }
           
            //--------------------------------------
        }).then(function (arr) {
            //--------------------------------------
            // console.log(arr);

                res.render('API', { list: arr } );
            
        });
    });
});

router.get('/ApiInfo', function(req, res, next) {

    var db_name = 'Webservicedb';
    var collection_name = 'apicollections';
    var id = req.query.id;
    console.log(id)



    //Connecting using MongoClient
    MongoClient.connect('mongodb://localhost:27017/' + db_name, function (err, db) {
        return new Promise(function (resolve, reject) {
            if (err) reject(err);
            //--------------------------------------
            var array = db.collection(collection_name).find({_id:new ObjectId(id)}).limit(1).toArray();
            db.close();
            resolve(array);
            //--------------------------------------
        }).then(function (arr) {
            //--------------------------------------
            //console.log(arr);


            res.render('ApiInfo', {list:arr[0]} );


            //--------------------------------------
        });
    });
});

router.get('/Mashup', function(req, res, next) {
    var db_name = 'Webservicedb';
    var collection_name = 'Mashupcollection';

    
    var updated = req.query.updated;
    var apiused=req.query.apiused;
    var tag=req.query.tag;

    var keyword=req.query.keyword;

    //Connecting using MongoClient
    MongoClient.connect('mongodb://localhost:27017/' + db_name, function (err, db) {
        return new Promise(function (resolve, reject) {
            if (err) reject(err);
            //--------------------------------------
            var array = db.collection(collection_name).find(
                            {title:{ $regex: ".*" + keyword + ".*" ,'$options' : 'i'},
            				summary: { $regex: ".*" + keyword + ".*",'$options' : 'i'},
            				description: { $regex: ".*" + keyword + ".*" ,'$options' : 'i'},
            				api:{ $regex: ".*" + apiused+ ".*",'$options' : 'i' },
            				updated: { $regex: ".*" + updated+ ".*" },
            				tag: { $regex: ".*" + tag + ".*",'$options' : 'i' }}).limit(20).toArray();
            db.close();
            resolve(array);
            //--------------------------------------
        }).then(function (arr) {
            //--------------------------------------
            console.log(arr);

                res.render('Mashup', { list: arr } );
            
        });
    });
});

router.get('/MashupInfo', function(req, res, next) {

    var db_name = 'Webservicedb';
    var collection_name = 'Mashupcollection';
    var id = req.query.id;
    console.log(id)



    //Connecting using MongoClient
    MongoClient.connect('mongodb://localhost:27017/' + db_name, function (err, db) {
        return new Promise(function (resolve, reject) {
            if (err) reject(err);
            //--------------------------------------
            var array = db.collection(collection_name).find({_id:new ObjectId(id)}).limit(1).toArray();
            db.close();
            resolve(array);
            //--------------------------------------
        }).then(function (arr) {
            //--------------------------------------
            console.log(arr);


            res.render('MashupInfo', {list:arr[0]} );


            //--------------------------------------
        });
    });
});


module.exports = router;
