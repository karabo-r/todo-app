import React from "react";

const TodoList = ({ todos, setTodos, displayStatus, deleteTodos }) => {
	function updateTaskStatus(event, id) {
		const updatedTask = {
			...todos[id],
			active: !todos[id].active,
		};

		todos.splice(todos.indexOf(todos[id]), 1, updatedTask);
		setTodos(todos);

		updateTaskStyle(event, id);
	}

	function updateTaskStyle(event, id) {
		if (!todos[id].active) {
			event.target.firstChild.checked = true;
			event.currentTarget.style.textDecoration = "line-through";
		} else {
			event.target.firstChild.checked = null;
			event.currentTarget.style.textDecoration = null;
		}
	}

	function displayAll(list) {
		return (
			<li
				onClick={(e) => updateTaskStatus(e, list.id)}
				className={!list.active ? "complete" : ""}
			>
				{!list.active && (
					<input
						type="checkbox"
						defaultChecked
						disabled
						className="checkbox-active"
					/>
				)}
				{list.active && <input type="checkbox" disabled />}
				{list.content}
			</li>
		);
	}

	function displayActive(list) {
		if (list.active) {
			return (
				<li
					className={!list.active ? "complete" : ""}
					onClick={(e) => updateTaskStatus(e, list.id)}
				>
					<input type="checkbox" disabled />
					{list.content}
				</li>
			);
		}
	}

	function displayCompleted(list) {
		if (!list.active) {
			return (
				<li className="complete" onClick={(e) => updateTaskStatus(e, list.id)}>
					<input type="checkbox" defaultChecked disabled />
					{list.content}
				</li>
			);
		}
	}

	const processedList = todos.map((todo) => {
		switch (displayStatus) {
			case "All":
				return displayAll(todo);
			case "Active":
				return displayActive(todo);
			case "Completed":
				return displayCompleted(todo);
			default:
				break;
		}
	});

	return (
		<div className="list">
			{processedList}
			{displayStatus === "Completed" && (
				<button onClick={deleteTodos}>delete</button>
			)}
		</div>
	);
};

export default TodoList;
