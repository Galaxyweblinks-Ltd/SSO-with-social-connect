import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutSuccess } from 'redux/actions/authActions';

/**
 * Name:HomeWrapper
 * Desc: Renders the home page with user information and logout functionality.
 * @param {func} dispatch
 */

const HomeWrapper = () => {
  // Initializing the dispatch function to trigger Redux actions
  const dispatch = useDispatch();
  const router = useRouter();
  // Extracting authentication-related data from the Redux store
  const sessionData = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutSuccess());
  };

  // Effect hook to redirect to the login page if the user is not logged in
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