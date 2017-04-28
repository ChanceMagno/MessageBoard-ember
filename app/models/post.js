import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  img: DS.attr(),
  question: DS.attr(),
  content: DS.attr(),
  comments: DS.hasMany('comment', { async: true})
});
