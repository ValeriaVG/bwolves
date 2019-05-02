import Home from './.'

// See: https://github.com/mzgoddard/preact-render-spy
import { shallow } from 'preact-render-spy'

describe('Initial Test of Home Page', () => {
  test('has image', () => {
    const context = shallow(<Home />)
    expect(context.find('img').length).toBe(1)
  })
})
