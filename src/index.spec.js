import { endent } from '@dword-design/functions'

import * as self from '.'

export default {
  address: () =>
    expect(self.address).toEqual(endent`
    Sebastian Landwehr
    Breite Str. 20
    53111 Bonn
  `),
}
