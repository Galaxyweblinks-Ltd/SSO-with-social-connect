import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SocialConnect from 'shared/SocialConnect';
import Style from './LoginWrapper.module.scss';

/**
 * Name:LoginWrapper
 * Desc: Render login submit form
 * @param {func} dispatch
 */

const LoginWrapper = () => {
  const router = useRouter();
  const sessionData = useSelector((state) => state.auth);

  useEffect(() => {
    if (sessionData.loggedIn) {
      router.push('/home');
    }
  }, [sessionData]);
  return (
    <div className={Style.formWrapper}>
      <SocialConnect faceBookText="Sign in with Facebook" />
    </div>
  );
};

LoginWrapper.propTypes = {};
LoginWrapper.defaultProps = {};
export default LoginWrapper;
