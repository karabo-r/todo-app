import React, { useEffect, useState } from "react";
import styled from "styled-components";

const App = () => {
	const [task, setTask] = useState("");
	const [todos, setTodos] = useState([]);
	const [displayStatus, setDisplayedStatus] = useState("All");

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

	function updateCheckbox(event, id) {
		console.log(event, id);
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
						onClick={(e) => updateCheckbox(e, list.id)}
						disabled
						className="checkbox-active"
					/>
				)}
				{list.active && (
					<input
						type="checkbox"
						onClick={(e) => updateCheckbox(e, list.id)}
						disabled
					/>
				)}
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
					<input
						type="checkbox"
						disabled
						onClick={(e) => updateCheckbox(e, list.id)}
					/>
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

	function handleDisplayStatus(status) {
		setDisplayedStatus(status);
	}

	function addNewTask() {
		const newTask = {
			id: todos.length,
			content: task,
			active: true,
		};

		setTodos(todos.concat(newTask));
		console.log(todos);
		setTask("");
	}

	function handleTask(e) {
		setTask(e.target.value);
	}

	// delete completed tasks
	function deleteTodos() {
		// save only active tasks
		const activeTasks = todos.filter((task) => task.active === true);
		setTodos(activeTasks);
	}

	// useEffect(() => {}, [todos]);
	return (
		<Container>
			<h1 className="title">#todo</h1>
			<div className="filters">
				<h1
					onClick={() => handleDisplayStatus("All")}
					style={{
						borderBottom: `${
							displayStatus === "All" ? "3px solid #2F80ED" : ""
						}`,
					}}
				>
					All
				</h1>
				<h1
					onClick={() => handleDisplayStatus("Active")}
					style={{
						borderBottom: `${
							displayStatus === "Active" ? "3px solid #2F80ED" : ""
						}`,
					}}
				>
					Active
				</h1>
				<h1
					onClick={() => handleDisplayStatus("Completed")}
					style={{
						borderBottom: `${
							displayStatus === "Completed" ? "3px solid #2F80ED" : ""
						}`,
					}}
				>
					Completed
				</h1>
			</div>
			<div className="input">
				<input
					type="text"
					value={task}
					onChange={(e) => handleTask(e)}
					placeholder="Add new task"
				/>
				<button onClick={addNewTask}>Add</button>
			</div>
			<div className="list">
				{processedList}
				{displayStatus === "Completed" && (
					<button onClick={deleteTodos}>delete</button>
				)}
			</div>
		</Container>
	);
};

const Container = styled.div`
	height: 100vh;
	width: 40vw;
	display: flex;
	flex-direction: column;
	align-items: center;

	.title {
		font-family: "Raleway", sans-serif;
		font-size: 2rem;
		font-weight: 700;
		margin-top: 1.5rem;
		text-align: center;
	}

	.filters {
		margin-top: 3rem;
		height: 2rem;
		background-color: transparent;
		width: 100%;
		display: flex;
		justify-content: center;
		justify-content: space-evenly;

		h1 {
			width: 5rem;
			font-size: 0.9rem;
			text-align: center;
			cursor: pointer;
			font-family: "Montserrat", sans-serif;
			/* padding-bottom: 20px; */
		}
	}

	.input {
		/* background-color: rebeccapurple; */
		margin-bottom: 1rem;
		width: 100%;
		display: flex;
		justify-content: space-around;
		margin-top: 2rem;
		input {
			outline: none;
			padding: 0.8rem 2rem;
			border: 1px solid #bdbdbd;
			border-radius: 5px;
			width: 60%;
			font-family: "Montserrat";
			font-style: normal;
			font-weight: 400;
			/* font-size: 14px; */
			/* line-height: 17px; */
		}
		button {
			background-color: #2f80ed;
			box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
			border-radius: 5px;
			padding: 0.6rem 2rem;
			outline: none;
			border: none;
			color: #ffffff;
			font-family: "Montserrat";
			font-style: normal;
			font-weight: 600;
			/* font-size: 14px; */
			line-height: 17px;
		}
	}

	.list {
		/* background-color: rebeccapurple; */
		height: 100%;
		width: 100%;
		position: relative;

		li {
			/* background-color: rebeccapurple; */
			height: 2rem;
			display: flex;
			align-items: center;
			/* flex-direction: ; */
			text-transform: capitalize;
			font-size: 1.1rem;
			padding: 0.5rem;
			cursor: pointer;

			input {
				size: 2rem;
				transform: scale(1.4);
				margin-right: 1rem;
				background-color: rebeccapurple;
				cursor: pointer;
			}
		}
		button {
			background-color: #eb5757;
			outline: none;
			border: none;
			position: absolute;
			right: 0;
			padding: 1rem 2rem;
			margin-right: 1rem;
			font-family: "Montserrat";
			cursor: pointer;
			font-style: normal;
			font-weight: 600;
			/* font-size: 12px; */
			border-radius: 5px;
			line-height: 15px;
		}

		.complete {
			text-decoration: line-through;
		}

		.uncomplete {
			text-decoration: none;
		}

		.checkbox-active {
			/* appearance: none; */
			width: 12px;
			height: 12px;
			background-color: rebeccapurple;
			color: red;
			/* width: 24px; */
			/* height: 24px; */
			/* background: rebeccapurple; */
		}

		/* .checkbox-active::after{
			content: "\f00c"
		} */
	}
`;
export default App;
