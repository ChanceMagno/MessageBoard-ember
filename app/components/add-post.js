import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePost() {
      var params = {
        name: this.get('name'),
        img: this.get('img'),
        question: this.get('question'),
        content: this.get('content')
      };

      this.sendAction('savePost', params);
    }
  }
});
