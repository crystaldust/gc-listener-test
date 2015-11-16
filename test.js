var gc = require( 'gc-listener' );

var gcTimes = 0;

gc.setCB( function() {
  console.log( 'cb called' );
  ++gcTimes;
  console.log( gcTimes );
  showMem();
} );


var ary = [];

var interval = setInterval( function() {
  if( gcTimes < 5 ) {
    //console.log( 'push' );
    for( var i=0; i<1000; ++i ) {
      ary.push( { value : Math.random() } );
    }
  }
  else {
    console.log( 'stop pushing new values!' );
    clearInterval( interval );
  }
}, 1 );

var OneMega = 1024 * 1024;

function showMem() {
  var usage = process.memoryUsage();
  console.log( 'rss       : ', ( usage.rss        / OneMega ) );
  console.log( 'heapTotal : ', ( usage.heapTotal  / OneMega ) );
  console.log( 'heapUsed  : ', ( usage.heapUsed   / OneMega ) );

}
