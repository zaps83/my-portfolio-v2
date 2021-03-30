import React from 'react'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism'

export const serializer = {
    types: {
        code: props => (
              <SyntaxHighlighter 
                language={props.node.language}
                style={atomDark}
              >{props.node.code}</SyntaxHighlighter >
 
          )
    }
}