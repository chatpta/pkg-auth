const assert = require( 'assert' ).strict;
const Jwt = require( '../lib/Jwt' );
const keys = require( './keys/keys' );


describe( 'Test JWT token', function () {
    const jwt = new Jwt( keys );

    describe( 'Create and deconstruct jwt', function () {

        const header = {
            alg: 'sha512',
            typ: 'JWT'
        };

        const payload = {
            iat: 1639063025516,
            client_id: '1c76ea46-a212-4cc5-9031-a9a28d927c4c',
            roles: [ 'user', 'ie', 'ce' ]
        };

        it( 'creates jwt', function ( done ) {
            let token = jwt.createJWT( header, payload );
            let recreated = jwt.readJWT( token );

            assert.deepStrictEqual( recreated.header, header, 'JWT is not read properly' );
            assert.deepStrictEqual( recreated.payload, payload, 'JWT is not read properly' );
            done();
        } );

    } );
} );

