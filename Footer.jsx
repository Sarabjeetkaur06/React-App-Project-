function Footer({ tasks }) {
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <p>
      Total Tasks: {tasks.length} | Completed: {completedTasks}
    </p>
  );
}

export default Footer;
