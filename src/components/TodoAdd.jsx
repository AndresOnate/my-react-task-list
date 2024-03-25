import React from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ handleNewTodo }) => {

    const { formState , onInputChange, onResetForm } = useForm({
        name: '',
        description: '',
	});
    const onFormSubmit = e => {
		e.preventDefault();

		if (formState['description'].length <= 1 || formState['name'].length <=1) return;

		let newTodo = {
			id: new Date().getTime(),
            name : formState['name'],
			description: formState['description'],
			completed: false,
		};

		handleNewTodo(newTodo);
		onResetForm();
	};

    return(
        <form onSubmit={onFormSubmit}>
            <input type="text" className="input-add" name="name" value={formState['name']} onChange={onInputChange} placeholder="Nombre" />
            <input type='text' className='input-add' name='description' value={formState['description']} onChange={onInputChange} placeholder='¿Qué hay que hacer?'/>
            <button  className="btn-add" type="submit">Agregar</button>
        </form>

    );
}
