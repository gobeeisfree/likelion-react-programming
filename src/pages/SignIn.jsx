import pb from '@/api/pocketbase';
import { useAuth } from '@/contexts/Auth';
import debounce from '@/utils/debounce';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();
  const { isAuth } = useAuth;

  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const handleSignIn = async (e) => {
    e.preventDefault();

    const { email, password } = formState;

    await pb.collection('users').authWithPassword(email, password);

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
            onChange={handleDebounceInput}
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
            onChange={handleDebounceInput}
            className="ml-2 border border-slate-300"
          />
        </div>
        <div className="flex gap-2">
          <button type="submit">로그인</button>
          <button type="reset">취소</button>
        </div>
      </form>
      <Link to="/signup">회원가입</Link>
      {isAuth && (
        <button
          type="button"
          className="ml-4"
          onClick={async () => {
            if (confirm('정말 탈퇴하시겠습니까?')) {
              if (pb.authStore.model) {
                try {
                  await pb.collection('users').delete(pb.authStore.model.id);
                  console.log('탈퇴 성공');
                } catch (error) {
                  console.error(error);
                }
              } else {
                console.log('현재 로그인 된 사용자가 없습니다.');
              }
            }
          }}
        >
          탈퇴
        </button>
      )}
    </div>
  );
}

export default SignIn;
