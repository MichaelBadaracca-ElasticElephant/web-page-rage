var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' )
var http = require( 'http' );
var request = require( 'request' )




app.use( express.static( './' ) );

//TODO: use a different solution than body parser as it is depricated and presents a security risk according to this resource: http://andrewkelley.me/post/do-not-use-bodyparser-with-express-js.html
app.use( bodyParser.urlencoded( { extended: false }) )


//Not sure if this is RESTFul
app.post( "/externalPage/", function ( req, res ) {
    console.log( "Got to server", req.body )
    request.get( 'https://google.com', function ( err, res2, body ) {
        if ( err ) {
            console.log( err );
        } else {
            console.log( body );
            //res.status( 200 );
            res.send( body );

        }

        //TODO Do something with response
    });


})


app.listen( 8080 );