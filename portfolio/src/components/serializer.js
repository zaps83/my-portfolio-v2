import React from 'react'

export const serializer = {
    types: {
        code: props => (
            <pre data-language={props.node.language}>
              <code className='p-text'>{props.node.code}</code>
            </pre>
          )
    }
}