Library.Router.map(function(){
  this.resource('books', function(){
    this.route('show', {path: ':book_id'});
  });

  this.resource('authors', function(){
    this.route('books');
  })
});
