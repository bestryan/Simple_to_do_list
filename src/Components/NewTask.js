import React from "react";

export default function NewTask({ newTask, handleChange, handleSubmit }) {

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = (date.getHours() < 10 ? "0" : "") + date.getHours();
    const mins = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();

    const d = `${day}/${month}/${year} ${hours}:${mins}`

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="title"
                placeholder="New List"
                value={newTask.title || ""}
                onChange={handleChange}
            />
            <input
                name="date"
                value={newTask.date = d || ""}
                onChange={handleChange}
                style={{ display: "none" }}
            />
            {!newTask.title ? null : (
                <>
                    <textarea
                        name="description"
                        placeholder="Notes..."
                        value={newTask.description || ""}
                        onChange={handleChange}
                    />
                    <button type="submit">Add Task</button>
                </>
            )}
        </form>
    );
}