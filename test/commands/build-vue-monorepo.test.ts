import {expect, test} from '@oclif/test'

describe('build-vue-monorepo', () => {
  test
  .stdout()
  .command(['build-vue-monorepo'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['build-vue-monorepo', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
