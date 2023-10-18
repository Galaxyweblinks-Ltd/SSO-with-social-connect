import facebook from 'assets/images/facebook-icon.svg';
import google from 'assets/images/google-icon.svg';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { loginFailure, loginSuccess } from 'redux/actions/authActions';
import Image from 'shared/Image';
import Text from 'shared/Text';
import { getFacebookAppId, getGoogleClientId } from 'shared/utils/utils';
import Style from './SocialConnect.module.scss';

/**
 * Name: SocialConnect
 * Desc: Render connect with Google and Facebook button
 
 * @param {string} faceBookText
 */

const SocialConnect = ({ faceBookText }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const facebookAppId = getFacebookAppId();
  const googleClientId = getGoogleClientId();
  const postResponse = (data, hasError) => {
    if (!hasError) {
      setTimeout(() => {
        dispatch(loginSuccess(data));
        router.push('/home');
      }, 500);
    }
  };
  const handleResponseGoogle = async (googleUser) => {
    if (googleUser) {
      const reqData = {
        email: googleUser.profileObj.email,
        isFromSSO: true,
        ssoName: 'Google',
        pageName: 'Login',
        firstName: googleUser.profileObj.givenName,
        lastName: googleUser.profileObj.familyName,
        tagLine: '',
        bio: '',
        token: googleUser.tokenId,
      };

      postResponse(reqData, false);
    } else {
      dispatch(loginFailure({}));
    }
  };

  const handleResponseFail = () => {
    //if login failed show error message code here
  };

  const handlerResponseFacebook = async (fbResponse) => {
    if (fbResponse.email) {
      const reqData = {
        email: fbResponse.email,
        isFromSSO: true,
        ssoName: 'Facebook',
        pageName: 'Login',
        firstName: fbResponse.first_name,
        lastName: fbResponse.last_name,
        tagLine: '',
        bio: '',
        token: fbResponse.accessToken,
      };

      postResponse(reqData, false);
    } else {
      dispatch(loginFailure({}));
    }
  };

  return (
    <>
      <div className={Style.socialMediaButtons}>
        <Text
          text={'sign in using your Google or Facebook ID'}
          fontSize="xxlg"
          fontFamily="semiBold"
          as="div"
          align="center"
        />
        <div className={Style.googleButton}>
          <Image src={google?.src} name="google" />
          <GoogleLogin
            clientId={googleClientId}
            isSignedIn={true}
            onSuccess={handleResponseGoogle}
            onFailure={handleResponseFail}
            cookiePolicy={'single_host_origin'}
            buttonText="Sign in with Google"
          />
        </div>
        <div className={Style.facebookButton}>
          <Image src={facebook?.src} name="facebook" />
          <FacebookLogin
            appId={facebookAppId}
            autoLoad={false}
            fields="email,first_name,last_name,picture"
            scope="public_profile, email, user_birthday"
            callback={handlerResponseFacebook}
            cssClass={Style.facebookButton}
            textButton={faceBookText}
          />
        </div>
      </div>
    </>
  );
};

SocialConnect.defaultProps = {
  faceBookText: '',
};

SocialConnect.propTypes = {
  faceBookText: PropTypes.string,
};

export default SocialConnect;
