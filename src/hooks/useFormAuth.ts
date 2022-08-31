import useInput from '../hooks/useInput';
import { emailVal, passwordVal } from '../helpers/validator';
import useValidate from '../hooks/useValidate';
import useActions from '../hooks/useActions';
import useTypedSelector from '../hooks/useTypedSelector';

const useFormAuth = () => {
  const { fetchLogin } = useActions();
  const { error } = useTypedSelector((state) => state.auth);
  const email = useInput('');
  const password = useInput('');

  const emailValidator = useValidate(email.value, emailVal);
  const passwordValidator = useValidate(password.value, passwordVal);

  const login = () => {
    emailValidator.clearErrors();
    passwordValidator.clearErrors();

    emailValidator.validate();
    passwordValidator.validate();

    fetchLogin({ email: email.value, password: password.value });
  };
  return { error, emailValidator, passwordValidator, email, password, login };
};

export default useFormAuth;
