import $ from 'jquery';
import Component from '@ember/component';

export default Component.extend({

	movies: [],

  	didInsertElement: function() {
  		this.setupListeners();
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
	        	$('#mm-header').text('Top Movies');
	        	$('.mm-movie-link').remove();
	          	self.get('movies').pushObjects(topMovies);
	          	$('#mm-movies').animate({opacity: 1}, 500);
	        });
	      }
	    });
  	},

  	getPopularMovies: function() {
  		let self = this;

	    $.ajax({
	      type: 'GET',
	      url: 'https://movies-be.herokuapp.com/movies/popular',
	      async: true,
	      success: function(popularMovies) {
	        $('#mm-loading-spinner').fadeOut(500, function() {
	        	$('#mm-header').text('Popular Movies');
	        	$('.mm-movie-link').remove();
	          	self.get('movies').pushObjects(popularMovies);
	          	$('#mm-movies').animate({opacity: 1}, 500);
	        });
	      }
	    });
  	},

  	setupListeners: function() {
  		let self = this;

  		$('#mm-sort').change(function(){
  			let sort = $('#mm-sort').val();
  			if (sort === 'top') self.getTopMovies();
  			if (sort === 'popular') self.getPopularMovies();
  		});
  	}

});
