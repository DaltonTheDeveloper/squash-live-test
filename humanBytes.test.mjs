import {test} from 'node:test';
import assert from 'node:assert/strict';
import {humanBytes} from './lib.mjs';

test('uses KB immediately below the first MiB boundary', () => {
  assert.equal(humanBytes(1024 * 1024 - 1), '1024 KB');
});

test('scales multiples of one MiB as MB', () => {
  assert.equal(humanBytes(2 * 1024 * 1024), '2 MB');
  assert.equal(humanBytes(5 * 1024 * 1024), '5 MB');
});

test('preserves zero-byte and sub-kilobyte formatting', () => {
  assert.equal(humanBytes(0), '0 KB');
  assert.equal(humanBytes(512), '1 KB');
});
