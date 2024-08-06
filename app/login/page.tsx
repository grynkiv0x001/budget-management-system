import { signIn } from '@/auth';

const Login = () => {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('github');
      }}
    >
      <button type="submit">Sign in with GitHub</button>
    </form>
  );
};

export default Login;
