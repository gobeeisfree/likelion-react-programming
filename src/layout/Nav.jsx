import { useAuth } from '@/contexts/Auth';
import { NavLink, useNavigate } from 'react-router-dom';

function Nav() {
  const { isAuth, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };
  return (
    <nav>
      <ul className="flex items-center gap-4 p-5 font-extralight">
        {!isAuth && (
          <li>
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                isActive ? 'font-semibold text-rose-600' : ''
              }
            >
              Sign In
            </NavLink>
          </li>
        )}
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? 'font-semibold text-rose-600' : ''
            }
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'font-semibold text-rose-600' : ''
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          {isAuth && (
            <button
              type="button"
              className="rounded-md border border-white/40 px-2 py-0.5 hover:border-white"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
