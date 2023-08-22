import pb from '@/api/pocketbase';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

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
      alert('비밀번호가 일치하지 않습니다. 다시 확인해주세요.');
    }

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

  return (
    <div>
      <h2>회원가입</h2>

      <form
        onSubmit={handleRegister}
        className="mt-2 flex flex-col items-start justify-start gap-2"
      >
        <div>
          <label htmlFor="name">사용자 이름</label>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={formState.name}
            onChange={handleInput}
            className="ml-2 border border-slate-300"
          />
        </div>
        <div>
          <label htmlFor="username">계정 이름</label>
          <input
            type="text"
            name="username"
            id="username"
            defaultValue={formState.username}
            onChange={handleInput}
            className="ml-2 border border-slate-300"
          />
        </div>
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
        <div>
          <label htmlFor="passwordConfirm">비밀번호 확인</label>
          <input
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            defaultValue={formState.passwordConfirm}
            onChange={handleInput}
            className="ml-2 border border-slate-300"
          />
        </div>
        <div className="flex gap-2">
          <button type="submit">가입</button>
          <button type="reset">취소</button>
        </div>
      </form>
      <Link to="/signin">로그인</Link>
    </div>
  );
}

export default SignUp;
