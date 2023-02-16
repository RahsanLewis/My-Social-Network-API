const router = require('express').Router();

const {
  addFriend,
  createUser,
  updateUser,
  getUsers,
  getSingleUser,
  deleteUser,
  deleteFriend,
} = require('../../controllers/user-controller');

router.route('/users')
  .get(getUsers)
  .post(createUser);

router.route('/users/:id')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

router.route('/users/:id/friends/:friendsId')
  .post(addFriend)
  .delete(deleteFriend);

module.exports = router;
