'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-camping:componentTs', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/componentTs'))
      .withPrompts({ someAnswer: true });
  });

  it('creates files', () => {
    assert.file(['dummyfile.txt']);
  });
});
