import React from "react";

const TaskInput = ({ handleTask, addNewTask, task }) => {
	return (
		<div className="input">
			<input
				type="text"
				value={task}
				onChange={(e) => handleTask(e)}
				placeholder="Add new task"
			/>
			<button onClick={addNewTask}>Add</button>
		</div>
	);
};

export default TaskInput;
