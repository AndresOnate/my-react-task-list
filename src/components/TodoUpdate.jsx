import { useRef, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useForm } from "../hooks/useForm";

export const TodoUpdate = ({ todo, handleUpdateTodo }) => {

	const { formState , onInputChange, onResetForm } = useForm({
        updateName: todo.name,
        updateDescription: todo.description,
	});

	console.log(formState);

	const [disabled, setDisabled] = useState(true);
	const focusInputRef = useRef();

	const onSubmitUpdate = e => {
		e.preventDefault();

		const id = todo.id;
		const name = formState['updateName']
		const description = formState['updateDescription'];

		handleUpdateTodo(id, name, description);

		setDisabled(!disabled);

		focusInputRef.current.focus();
	};


	return (
		<form onSubmit={onSubmitUpdate}>
			<input
				type='text'
				className={`input-update ${
					todo.completed ? 'text-decoration-dashed' : ''
				}`}
				name='updateName'
				value={formState['updateName']}
				onChange={onInputChange}
				placeholder='Nombre'
				readOnly={disabled}
				ref={focusInputRef}
			/>
            <input
				type='text'
				className={"input-update"}
				name='updateDescription'
				value={formState['updateDescription']}
				onChange={onInputChange}
				placeholder='Descripción'
				readOnly={disabled}
				ref={focusInputRef}
			/>

			<button className='btn-edit' type='submit'>
				<FaEdit />
			</button>
		</form>
	);
};