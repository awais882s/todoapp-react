import React from 'react'

export default function Todolist({ students }) {
    return (
        <div>
            <tr>
                <td>
                    {students.name}
                </td>
            </tr>
        </div>
    )
}
