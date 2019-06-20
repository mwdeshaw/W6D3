const FollowToggle = require(`./follow_toggle.js`);
const UsersSearch = require('./users_search.js')

// const toggleCb = function() {
//   let args = Array.from(arguments);
//   args.forEach(el => {new FollowToggle(el);
//   });
// };

$(() => {
  $('.follow-toggle').each((idx, el) => {
    new FollowToggle($(el));
  });
  $('.users-search').each((idx, el) => {
    new UsersSearch($(el));
  });
});
