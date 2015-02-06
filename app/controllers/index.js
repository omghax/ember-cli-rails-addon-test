import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    testForMetaTag: function() {
      var config;
      var metaName = 'ember-cli-rails-addon-test/config/environment';

      try {
        config = Ember.$('meta[name="' + metaName + '"]').attr('content');
        config = JSON.parse(window.unescape(config));
        this.set('result', 'Found config: ' + JSON.stringify(config));
      } catch(err) {
        this.set('result', 'No meta tag found for "' + metaName + '".');
      }
    }
  }
});
