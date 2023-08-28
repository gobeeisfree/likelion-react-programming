import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import pb from '@/api/pocketbase';
import debounce from '@/utils/debounce';
import { Helmet } from 'react-helmet-async';
function SignUp() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const handleRegister = async (e) => {
    e.preventDefault();
    const { password, passwordConfirm } = formState;
    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다. 다시 확인해보세요.');
      return;
    }
    // PocketBase SDK 인증 요청
    await pb.collection('users').create({
      ...formState,
      emailVisibility: true,
    });
    navigate('/');
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleDebounceInput = debounce(handleInput, 500);
  return (
    <>
      <Helmet>
        <title>Sign Up - ReactBird</title>
      </Helmet>
      <div className="container mx-auto max-w-lg">
        <h2 className="my-5 text-center text-2xl font-medium text-blue-950 dark:text-sky-500/90">
          회원가입
        </h2>

        <form
          onSubmit={handleRegister}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex w-full flex-col gap-2">
            <label
              htmlFor="name"
              className="dark:text-zinc-500 dark:hover:text-zinc-300"
            >
              사용자 이름
            </label>
            <input
              type="text"
              name="name"
              id="name"
              defaultValue={formState.name}
              onChange={handleDebounceInput}
              className="
              w-full rounded-md border border-zinc-300 px-4 py-1.5 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2
              dark:border-zinc-300/40 dark:bg-black dark:text-sky-400 dark:placeholder:text-zinc-600 dark:focus:ring-1 dark:focus:ring-sky-400 dark:focus:ring-offset-1
            "
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <label
              htmlFor="username"
              className="dark:text-zinc-500 dark:hover:text-zinc-300"
            >
              계정 이름
            </label>
            <input
              type="text"
              name="username"
              id="username"
              defaultValue={formState.username}
              onChange={handleDebounceInput}
              className="
              w-full rounded-md border border-zinc-300 px-4 py-1.5 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2
              dark:border-zinc-300/40 dark:bg-black dark:text-sky-400 dark:placeholder:text-zinc-600 dark:focus:ring-1 dark:focus:ring-sky-400 dark:focus:ring-offset-1
            "
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <label
              htmlFor="email"
              className="dark:text-zinc-500 dark:hover:text-zinc-300"
            >
              이메일
            </label>
            <input
              type="email"
              name="email"
              id="email"
              defaultValue={formState.email}
              onChange={handleDebounceInput}
              className="
              w-full rounded-md border border-zinc-300 px-4 py-1.5 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2
              dark:border-zinc-300/40 dark:bg-black dark:text-sky-400 dark:placeholder:text-zinc-600 dark:focus:ring-1 dark:focus:ring-sky-400 dark:focus:ring-offset-1
            "
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <label
              htmlFor="password"
              className="dark:text-zinc-500 dark:hover:text-zinc-300"
            >
              패스워드
            </label>
            <input
              type="password"
              name="password"
              id="password"
              defaultValue={formState.password}
              onChange={handleDebounceInput}
              className="
              w-full rounded-md border border-zinc-300 px-4 py-1.5 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2
              dark:border-zinc-300/40 dark:bg-black dark:text-sky-400 dark:placeholder:text-zinc-600 dark:focus:ring-1 dark:focus:ring-sky-400 dark:focus:ring-offset-1
            "
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <label
              htmlFor="passwordConfirm"
              className="dark:text-zinc-500 dark:hover:text-zinc-300"
            >
              패스워드 확인
            </label>
            <input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              defaultValue={formState.passwordConfirm}
              onChange={handleDebounceInput}
              className="
              w-full rounded-md border border-zinc-300 px-4 py-1.5 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2
              dark:border-zinc-300/40 dark:bg-black dark:text-sky-400 dark:placeholder:text-zinc-600 dark:focus:ring-1 dark:focus:ring-sky-400 dark:focus:ring-offset-1
            "
            />
          </div>
          <div className="mt-5 flex gap-2">
            <button
              type="submit"
              className="
                rounded-full border-2 border-zinc-300 px-3.5 py-1 hover:border-zinc-400
              dark:border-[1px] dark:border-sky-400 dark:text-sky-400 dark:hover:border-sky-500 dark:hover:bg-sky-400 dark:hover:text-sky-50
              "
            >
              가입
            </button>
            <button
              type="reset"
              className="
                rounded-full border-2 border-zinc-200 bg-zinc-200 px-3.5 py-1 hover:border-zinc-300 hover:bg-zinc-300
                dark:border-zinc-400 dark:bg-zinc-400
              "
            >
              취소
            </button>
          </div>
        </form>

        <div className="mt-8 flex justify-center border-t border-slate-200 pt-8 dark:border-slate-200/30">
          <Link
            to="/signin"
            className="dark:text-zinc-500 dark:hover:text-zinc-300"
          >
            로그인
          </Link>
        </div>
      </div>
    </>
  );
}
export default SignUp;
