import $ from 'jquery';
import Component from '@ember/component';

export default Component.extend({

	movies: [],

  	didInsertElement: function() {
    	this.getTopMovies();
  	},

  	getTopMovies: function() {
  		let self = this;

	    $.ajax({
	      type: 'GET',
	      url: 'https://movies-be.herokuapp.com/movies/top',
	      async: true,
	      success: function(topMovies) {
	        $('#mm-loading-spinner').fadeOut(500, function() {
	          self.get('movies').pushObjects(topMovies);
	          $('#mm-movies').animate({opacity: 1}, 500);
	        });
	      }
	    });
  	}

});
