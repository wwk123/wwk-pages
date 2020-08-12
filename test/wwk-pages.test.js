const test = require('ava')
const wwkPages = require('..')

// TODO: Implement module test
test('<test-title>', t => {
  const err = t.throws(() => wwkPages(100), TypeError)
  t.is(err.message, 'Expected a string, got number')

  t.is(wwkPages('w'), 'w@zce.me')
  t.is(wwkPages('w', { host: 'wedn.net' }), 'w@wedn.net')
})
