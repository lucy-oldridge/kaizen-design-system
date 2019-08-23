// const unified = require("unified")
// const parse = require("remark-parse")
// const containers = require("remark-containers")
// const stringify = require("rehype-stringify")
// const remark2rehype = require("remark-rehype")

// const processor = unified()
//   .use(parse)
//   .use(containers, {
//     default: true,
//     custom: [
//       {
//         type: "aside",
//         element: "article",
//         transform: function(node, config, tokenize) {
//           node.data.hProperties = {
//             className: config || "testingonetwothree",
//           }
//         },
//       },
//     ],
//   })
//   .use(remark2rehype)
//   .use(stringify)

module.exports = ({ markdownAST }, pluginOptions) => {
  // Manipulate AST
  console.log("KANGAROOS")
  return markdownAST
}
