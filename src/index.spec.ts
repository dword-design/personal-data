import { expect, test } from '@playwright/test';
import endent from 'endent';

import * as self from '.';

test('address', () =>
  expect(self.address).toEqual(endent`
    Sebastian Landwehr
    Breite Str. 20
    53111 Bonn
  `));
