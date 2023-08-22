import pb from '@/api/pocketbase';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const handleSignIn = async (e) => {
    e.preventDefault();

    const { email, password } = formState;

    const authDate = await pb
      .collection('users')
      .authWithPassword(email, password);

    console.log(authDate);
    navigate('/');
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>로그인</h2>

      <form
        onSubmit={handleSignIn}
        className="mt-2 flex flex-col items-start justify-start gap-2"
      >
        <div>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue={formState.email}
            onChange={handleInput}
            className="ml-2 border border-slate-300"
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            name="password"
            id="password"
            defaultValue={formState.password}
            onChange={handleInput}
            className="ml-2 border border-slate-300"
          />
        </div>
        <div className="flex gap-2">
          <button type="submit">로그인</button>
          <button type="reset">취소</button>
        </div>
      </form>
      <Link to="/signup">회원가입</Link>
    </div>
  );
}

export default SignIn;
