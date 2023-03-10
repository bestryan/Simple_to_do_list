import React from "react";

export default function TasksList({ allTasks, handleDelete }) {
    return (
        <ul>
            {allTasks.map(({ title, date, description, id }) => (
                <li key={id}>
                    <div>
                        <h2>{title}</h2>
                        <button onClick={() => handleDelete(id)}>x</button>
                        <p className="date">{date}</p>
                    </div>
                    {!description ? null : <p>{description}</p>}
                </li>
            ))}
        </ul>
    );
}
