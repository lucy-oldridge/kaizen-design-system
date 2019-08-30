"use strict"

const parse = require("remark-parse")
const containers = require("remark-containers")
const unified = require("unified")
const remark2rehype = require("remark-rehype")
const stringify = require("rehype-stringify")

const visit = require(`unist-util-visit`)
const processor = unified()
  // .use(parse)
  .use(containers, {
    default: true,
    custom: [
      {
        type: "callout",
        element: "article",
        transform: function(node, config, tokenize) {
          node.data.hProperties = {
            className: config || "left",
          }
        },
      },
      {
        type: "quote",
        element: "aside",
        transform: function(node, config, tokenize) {
          var words = tokenizeWords.parse(config)

          node.data.hProperties = {
            className: `quoted ${words.shift()}`,
          }
          node.children.push({
            type: "footer",
            data: {
              hName: "footer",
            },
            children: tokenize(words.join(" ")),
          })
        },
      },
    ],
  })
  .use(remark2rehype)
  .use(stringify)

module.exports = ({ markdownAST }, pluginOptions = {}) => {
  // visit(markdownAST, `text`, node => {
  //   const processedText = String(processor().processSync(node.value))
  //   console.log(processedText)
  //   node.value = processedText
  // })
  // return processor().processSync(parsedAST)
  console.log(markdownAST)
  return markdownAST
}

// module.exports = ({ markdownAST }, pluginOptions) => {
//   // Manipulate AST
//   return processor.processSync(markdownAST)
// }
// module.exports = processor
