const APIUtil = require(`./api_util.js`);

class FollowToggle {

  constructor($el) {
    this.userId = $el.attr(`data-user-id`);
    this.followState = $el.attr(`data-initial-follow-state`);
    this.$el = $el;
    this.render();
    this.$el.click(e => {
      this.handleClick(e);
    });
  }
  
  render() {
    this.$el.prop('disabled', false);
    if (this.followState === "true") {
      this.$el.html(`Unfollow!`);
    } else {
      this.$el.html(`Follow!`);
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.$el.prop('disabled', true);

    if (this.followState === "false") { 
      APIUtil.followUser(this.userId)
      .then(() => {
        this.followState = 'true';  
        this.render();
      });
    } else {
      APIUtil.unfollowUser(this.userId)
      .then(() => {
        this.followState = 'false';
        this.render();
      });
    }
  }
}

module.exports = FollowToggle;