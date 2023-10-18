import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutSuccess } from 'redux/actions/authActions';

/**
 * Name:HomeWrapper
 * Desc: Render login submit form
 * @param {func} dispatch
 */

const HomeWrapper = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const sessionData = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutSuccess());
  };
  useEffect(() => {
    if (!sessionData.loggedIn) {
      router.push('/');
    }
  }, [sessionData]);
  return (
    <>
      <div className="container">
        <div>
          <div>
            <div>{`${sessionData.userInfo.firstName} ${sessionData.userInfo.lastName}`}</div>
            <div>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
HomeWrapper.defaultProps = {};
HomeWrapper.propTypes = {};
export default HomeWrapper;
