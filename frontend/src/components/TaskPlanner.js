import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskPlanner = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('/api/tasks')
            .then((res) => setTasks(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h1>Task Planner</h1>
            {tasks.map((task) => (
                <div key={task._id}>{task.description}</div>
            ))}
        </div>
    );
};

export default TaskPlanner;