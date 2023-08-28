import { useAuth } from '@/contexts/Auth';
import { node, string } from 'prop-types';
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
      <ul className="flex items-center gap-5 p-5 font-extralight">
        {!isAuth && (
          <li>
            <Link href="/signin">Sign In</Link>
          </li>
        )}
        {isAuth && (
          <li>
            <Link href="/product/new">NEW</Link>
          </li>
        )}
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          {isAuth && (
            <button
              type="button"
              className="rounded border border-white/40 px-2 py-0.5 pb-1 text-zinc-400 hover:border-sky-400/70 hover:text-sky-400"
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

function Link({ href, children }) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) => {
        const baseClassName = 'font-suit font-normal uppercase';
        return isActive
          ? `${baseClassName} cursor-default text-sky-400`
          : `${baseClassName} text-zinc-400 hover:text-slate-50`;
      }}
    >
      {children}
    </NavLink>
  );
}

Link.propTypes = {
  href: string.isRequired,
  children: node.isRequired,
};
