import { useState } from 'react'
import { useGoogleLogin } from 'react-google-login'
import { useAuth } from '../context/authContext'
import { authenticate } from '../utils/api-client'
import { gapi, loadAuth2 } from 'gapi-script'

const clientId = "73535695397-05ihej7t5p58j85rmsovfvodaa30dkeo.apps.googleusercontent.com"

export default function useAuthAction() {
  const user = useAuth()

  const [hasError, setHasError] = useState(false);
  function handleOnSuccess(response) {
    setHasError(false);
    authenticate(response);
  }
  function handleOnError(error) {
    console.log("error", error)
    setHasError(true);
  }
  const {signIn} = useGoogleLogin({
    clientId,
    onSuccess: handleOnSuccess,
    onFailure: handleOnError,
  });

  // window.addEventListener("message", ({ data }) => {
  //   console.log(data)
  // })
  // const { signIn } = useGoogleLogin({
  //   onSuccess: authenticate,
  //   clientId: GoogleClientId
  // })

  function handleAuthAction(authAction, data) {
    if (user) {
      authAction(data)
    } else {
      signIn();
    }
  }

  return handleAuthAction
}