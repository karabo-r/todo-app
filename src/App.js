import { useState } from "react";
import styled from "styled-components";
import Fliters from "./components/Fliters";
import TaskInput from "./components/TaskInput";
import TodoList from "./components/TodoList";

const App = () => {
	const [task, setTask] = useState("");
	const [todos, setTodos] = useState([]);
	const [displayStatus, setDisplayedStatus] = useState("All");

	const handleDisplayStatus = (status) => setDisplayedStatus(status);
	const handleTask = (e) => setTask(e.target.value);

	const addNewTask = () => {
		const newTask = {
			id: todos.length,
			content: task,
			active: true,
		};

		setTodos(todos.concat(newTask));
		setTask("");
	};

	// delete completed tasks
	const deleteTodos = () => {
		// save only active tasks
		const activeTasks = todos.filter((task) => task.active === true);
		setTodos(activeTasks);
	};

	const propsCollections = {
		task,
		todos,
		setTodos,
		addNewTask,
		handleTask,
		deleteTodos,
		displayStatus,
		setDisplayedStatus,
		handleDisplayStatus,
	};

	return (
		<Container>
			<h1 className="title">#todo</h1>
			<Fliters {...propsCollections} />
			<TaskInput {...propsCollections} />
			<TodoList {...propsCollections} />
		</Container>
	);
};

const Container = styled.div`
	width: 40vw;
	height: 100vh;
	display: flex;
	align-items: center;
	flex-direction: column;

	.title {
		font-family: "Raleway", sans-serif;
		font-size: 2rem;
		font-weight: 700;
		margin-top: 1.5rem;
		text-align: center;
	}

	.filters {
		width: 100%;
		height: 2rem;
		display: flex;
		margin-top: 3rem;
		justify-content: center;
		justify-content: space-evenly;

		h1 {
			width: 5rem;
			cursor: pointer;
			font-size: 0.9rem;
			text-align: center;
			font-family: "Montserrat", sans-serif;
		}
	}

	.input {
		width: 100%;
		display: flex;
		margin-top: 2rem;
		margin-bottom: 1rem;
		justify-content: space-around;
		input {
			width: 60%;
			outline: none;
			font-weight: 400;
			font-style: normal;
			border-radius: 5px;
			padding: 0.8rem 2rem;
			border: 1px solid #bdbdbd;
			font-family: "Montserrat";
		}
		button {
			border: none;
			outline: none;
			color: #ffffff;
			font-weight: 600;
			line-height: 17px;
			font-style: normal;
			border-radius: 5px;
			padding: 0.6rem 2rem;
			background-color: #2f80ed;
			font-family: "Montserrat";
			box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
		}
	}

	.list {
		height: 100%;
		width: 100%;
		position: relative;

		li {
			height: 2rem;
			display: flex;
			padding: 0.5rem;
			cursor: pointer;
			font-size: 1.1rem;
			align-items: center;
			text-transform: capitalize;

			input {
				size: 2rem;
				cursor: pointer;
				margin-right: 1rem;
				transform: scale(1.4);
				background-color: rebeccapurple;
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
			border-radius: 5px;
			line-height: 15px;
		}

		.complete {
			text-decoration: line-through;
		}
	}
`;
export default App;
