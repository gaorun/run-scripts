import {expect, test} from '@oclif/test'

describe('deploy/zip', () => {
  test
  .stdout()
  .command(['deploy/zip'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['deploy/zip', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
