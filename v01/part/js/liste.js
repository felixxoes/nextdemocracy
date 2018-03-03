$(document).ready(function() {
$('#projektliste').DataTable( {
  "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.12/i18n/German.json"
        },
    "ajax": "data/plist.json",
    "columns": [
    { "data": "Projekttitel"},
    { "data": "Thema"},
    { "data": "Beschreibung"},
    { "data": "Website",
    "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
        $(nTd).html("<a href='"+oData.Website+"'>'Website'</a>");
        }},
    { "data": "Status"},
    { "data": "Format"}
    ]
} );
} );
