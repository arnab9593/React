import React from 'react'
import GithubTable from './GithubTable';

const GithubRow = ({datas}) => {
  return (
   <table>
    <thead>
        <tr>
            <th>
                USERNAME
            </th>

            <th>
               NODE ID
            </th>
        </tr>
    </thead>

<tbody>
    {datas&&datas.map((item) => 
        <GithubTable key={item.id} name = {item.login} node_id={item.node_id}></GithubTable>
    )}
</tbody>



   </table>

  )
}

export default GithubRow
