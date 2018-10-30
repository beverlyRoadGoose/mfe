import $ from 'jquery';
import Route from '@ember/routing/route';

export default Route.extend({

	activate: function() {
		$(document).ajaxStart(function() { Pace.restart(); });
	}

});
