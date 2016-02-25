$(document).ready(function() {
// Decompress the saved JSON from the server data
  var saved_json = inflateToJsonSignature( $( "#signature_json_text" ).val() ); // Save the JSON text in a var to use below

  var sig_api = $('.sigPad').signaturePad();

  if ( saved_json.length >  0 ) {
    sig_api.regenerate( saved_json ); // Regenerate the signature from the now uncompressed server data
  }

  $( "#signature_form" ).submit( function( event ) {
    // Compress the saved JSON upon submit
    var result = deflateFromJsonSignature( $( "#signature_json_text" ).val() );
    $( "#signature_json_text" ).val( result );
    return true;
  } );
});