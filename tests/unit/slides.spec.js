import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { shallowMount, mount } from '@vue/test-utils'
import Slides from '../../src/slides/slides.vue'
import SlidesItem from '../../src/slides/slides-item.vue'
import Vue from 'vue'

chai.use(sinonChai)

describe('Slides.vue', () => {
  it('存在.', () => {
    expect(Slides).to.exist
  })
})