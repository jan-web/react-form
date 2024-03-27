import { useForm } from 'react-hook-form';

import _ from './Form.module.css';

export const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = data => {
		console.log('data: ', data);
	};
	console.log('errors: ', errors);

	return (
		<form className={_.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={_.wrap}>
				<label className={_.label} htmlFor='email'>
					Email
				</label>
				<input
					{...register('email', {
						required: {
							value: true,
							message: 'Поле обязательно для заполнения',
						},
						pattern: {
							value: /^.+@.+\..+$/,
							message: 'Неверный email',
						},
					})}
					className={_.input}
					type='text'
					id='email'
					aria-invalid={!!errors.email}
				/>

				{errors.email && <p className={_.error}>{errors.email.message}</p>}
			</div>

			<div className={_.wrap}>
				<label className={_.label} htmlFor='password'>
					Пароль
				</label>
				<input
					{...register('password', {
						required: {
							value: true,
							message: 'Поле обязательно для заполнения',
						},
						pattern: {
							value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/,
							message: 'Неверный email',
						},
					})}
					className={_.input}
					type='password'
					id='password'
					aria-invalid={!!errors.password}
				/>

				{errors.password && <p className={_.error}>{errors.password.message}</p>}
			</div>

			<div className={_.wrapCheckbox}>
				<input
					className={_.checkbox}
					type='checkbox'
					id='save'
					{...register('save', {
						required: 'Поле обязательно для заполнения',
					})}
				/>
				<label className={_.labelCheckbox} htmlFor='save'>
					Сохранить пароль
				</label>
			</div>
			<button className={_.submit} type='submit'>
				Войти
			</button>
		</form>
	);
};

//const [email, setEmail] = useState('');
// const [emailError, setEmailError] = useState(false);
// const [emailDirty, setEmailDirty] = useState(false);
// const [password, setPassword] = useState('');
// const [passwordError, setPasswordError] = useState(false);
// const [passwordDirty, setPasswordDirty] = useState(false);
// const [checkErrorForm, setCheckErrorForm] = useState(false);
// const [save, setSave] = useState(false);
// const [isPending, setIsPending] = useState(false);

// const validEmail = value => {
// 	setEmailError(/^.+@.+\..+$/.test(value));
// };

// const handleEmail = ({ target }) => {
// 	setEmail(target.value);
// 	validEmail(target.value);
// };

// const validPassword = value => {
// 	setPasswordError(
// 		/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/.test(value)
// 	);
// };
// const handlePassword = ({ target }) => {
// 	setPassword(target.value);
// 	validPassword(target.value);
// };

// const handleSubmit = e => {
// 	e.preventDefault();

// 	if (!emailError | !passwordError) {
// 		setCheckErrorForm(true);
// 		return;
// 	}
// 	setIsPending(true);
// 	console.log('email, password, save ', { email, password, save });
// };

// const handleSave = ({ target }) => {
// 	setSave(target.checked);
// };
