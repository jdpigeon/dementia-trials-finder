/**
 * Created by dano on 04/03/17.
 */

var updateList = function (updatedStudies) {
  // clear existing studies
  $('#study-list').find('.list li').remove();

  // add new
  $.each(updatedStudies, function(index, object) {
    $('#study-list').find('.list').append('<div class="study-item"> <div class="panel panel-default"> <div class="panel-heading"><a href="">'+object.name+'</a></div> </div> <a href="">'+object.location+'</a> <p>'+object.description+'</p> </div>')
  });
};

var updated_items = [{name: 'Name1', location:  'Western', description:'A study using Brian stimulation to treat dementia'},
  {name: 'Name2', location:  'Western', description:'Forcing people to turn their minds around'},
  {name: 'Name3', location:  'CAMH', description:'Standard medical treatment'}
];

