import {expect, test} from '@oclif/test'

describe('build/vue-componennt', () => {
  test
  .stdout()
  .command(['build/vue-componennt'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['build/vue-componennt', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
