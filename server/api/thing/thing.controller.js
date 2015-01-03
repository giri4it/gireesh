/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');

// Get list of things
exports.index = function(req, res) {
  res.json([
  {
  name : 'Featured applications',
  info : 'The applications freely available and hosted'
  }, {
  name : 'Blogs',
  info : 'This is not a complete blog, but a searchable list of items that is good for a reference when some queries to clarify.'
  }, {
  name : 'My insights',
  info : 'Some friedly philosophical musings which sometimes take place inside my head.'
  },  {
  name : 'Social works',
  info : 'Gathering info which help me to direct my social works.'
  },  {
  name : 'Future application ideas',
  info : 'Applications are listed here that I am going to work on.  Please vote for them so that I can set the priorities.'
  },{
  name : 'Job Opportunities with us',
  info : 'Here are the job opportunities to work with us.'
  }
  ]);
};