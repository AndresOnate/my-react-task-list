export const Task = (props) => {
  const { name, completed } = props;
  return (
    <div className="task">
      <input type="checkbox" checked={completed} readOnly />
      <span>{name}</span>
    </div>
  );
};
