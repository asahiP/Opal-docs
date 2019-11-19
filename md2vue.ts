import { readFile, writeFile } from 'fs'
import { join } from 'path'

const marked = require('marked')

function main (input?: string, output?: string): void {
  readFile(join(__dirname, input), { encoding: 'utf8' }, (err, data) => {
    writeFile(
      join(__dirname, output),
      `
      <template>
        <article>
          <h1>更新日志</h1>
          <div class="markdown-body">
          ${marked(data)}
          </div>
        </article>
      </template>`,
      () => {}
    )
  })
}

main(...process.argv.slice(2))