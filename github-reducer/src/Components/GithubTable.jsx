import React from 'react'

const GithubTable = ({name,node_id}) => {
  return (
    <tr>
        <td>
            {name}
        </td>
        <td>
            {node_id}
        </td>
    </tr>
  )
}

export default GithubTable
