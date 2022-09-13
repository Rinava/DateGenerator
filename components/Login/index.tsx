import styles from './styles.module.scss';

const Login = () => {
  return (
    <form onSubmit={() => {}} className={styles.login}>
      <div className={styles.input_container}>
        <label className={styles.label} htmlFor='email'>
          Email
        </label>
        <input type='email' name='email' />
      </div>
      <div className={styles.input_container}>
        <label className={styles.label} htmlFor='password'>
          Password
        </label>
        <input type='password' name='password' />
      </div>
      <button type='submit' className={styles.submit}>
        Login
      </button>
      <a >Create new account</a>
    </form>
  );
};
export default Login;
