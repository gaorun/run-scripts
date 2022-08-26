import {expect, test} from '@oclif/test'

describe('build-react-monorepo', () => {
  test
  .stdout()
  .command(['build-react-monorepo'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['build-react-monorepo', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
