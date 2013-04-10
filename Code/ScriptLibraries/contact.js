$(document).ready( function() {
	$('.company').typeahead({
	    source: function (query, process) {
	        return $.get('jsonCompanies.xsp?query=', { query: query }, function (data) {
	            return process(data);
	        });
	    }
	});
	try{
		//Turn all fields with .datepicker class assigned into date pickers
		$('.datepicker').datepicker().on('show', function(ev){
		});	
	}catch(e){}
});