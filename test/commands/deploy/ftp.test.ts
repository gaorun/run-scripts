import {expect, test} from '@oclif/test'

describe('deploy/ftp', () => {
  test
  .stdout()
  .command(['deploy/ftp'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['deploy/ftp', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
