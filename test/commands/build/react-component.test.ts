import {expect, test} from '@oclif/test'

describe('build/react-component', () => {
  test
  .stdout()
  .command(['build/react-component'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['build/react-component', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
