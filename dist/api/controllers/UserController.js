/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

"use strict";

module.exports = {
  /**
   * @override
   */
  create: function create(req, res, next) {
    sails.services.passport.protocols.local.register(req.body, function (err, user) {
      if (err) return res.negotiate(err);

      res.ok(user);
    });
  },

  me: function me(req, res) {
    res.ok(req.user);
  }
};