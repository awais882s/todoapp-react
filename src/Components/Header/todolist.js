import React from "react";

export default function Todolist({ student, index }) {
    return (
        <tbody>
            <tr>
                <td>{index}</td>
                <td>{student.name}</td>
            </tr>
        </tbody>

    );
}