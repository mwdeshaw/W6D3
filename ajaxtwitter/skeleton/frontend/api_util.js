const APIUtil = {
  followUser: id => {
    return $.ajax({
      method: 'post',
      url: `/users/${id}/follow`,
      dataType: 'json'
    });
  },

  unfollowUser: id => {
    return $.ajax({
      method: 'delete',
      url: `/users/${id}/follow`,
      dataType: 'json'
    });
  },

  searchUsers(queryVal, success) {
    return $.ajax({
      method: 'get',
      url: `/users/search`,
      data: {'query': queryVal},
      dataType: 'json'
    })
  }

};


module.exports = APIUtil;
