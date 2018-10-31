import $ from 'jquery';
import Route from '@ember/routing/route';

export default Route.extend({

	model: function(parameters){
        return {
            movie: this.getMovie(parameters.movieId),
            trailer: this.getMovieTrailer(parameters.movieId)
        };
    },

    getMovie: function(movieId) {
		return $.parseJSON(Ember.$.ajax({
                type: 'GET',
                url: 'https://movies-be.herokuapp.com/movies/' + movieId,
                async: false
            }).responseText
        );
    },

    getMovieTrailer: function(movieId) {
		return $.parseJSON(Ember.$.ajax({
                type: 'GET',
                url: 'https://movies-be.herokuapp.com/movies/' + movieId + '/trailer',
                async: false
            }).responseText
        );
    }

});
