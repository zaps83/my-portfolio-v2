import React from 'react'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import './styles/serializer.css'

export const serializer = {
    types: {
        code: props => (
              <SyntaxHighlighter 
                language={props.node.language}
                style={atomDark}
                className='code'
              >{props.node.code}</SyntaxHighlighter >
 
          )
    }
}