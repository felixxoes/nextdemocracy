function AJAX_JSON_Req( url )
{
    var AJAX_req = new XMLHttpRequest();
    AJAX_req.open( "GET", url, true );
    AJAX_req.setRequestHeader("Content-type", "application/json");

    AJAX_req.onreadystatechange = function()
    {
        if( AJAX_req.readyState == 4 && AJAX_req.status == 200 )
        {
            var response = JSON.parse( AJAX_req.responseText );
            document.write( '<h1>Titel: </h1><p>' + response.Projekttitel + '</p>');
            document.write( '<h1>Traegerschaft: </h1><p>' + response.Traegerschaft +'</p>' );
        }
    }
    AJAX_req.send();
}

AJAX_JSON_Req( 'data/plist-test.json' );