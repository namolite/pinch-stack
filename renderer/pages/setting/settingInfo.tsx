import { useAtom } from "jotai"

import { authAtom } from "@Utils/states"

import LoginForm from "@Components/auth/loginForm"
import RegisterForm from "@Components/auth/registerForm"

import { host } from "@Data/host"


export default function SettingInfo() {
  const [authState, setAuthState] = useAtom(authAtom)

  // TODO Mask
  return (
    <div>
      {authState === 'logined' ? (
        <>logined</>
      ) : (
        <div>
          <div className="mask"></div>
          <div>
            {authState === 'login' ? (
              <>
                <LoginForm
                  onClose={() => setAuthState('logined')}
                  host={host}
                />
              </>
            ) : (
              <>
                <RegisterForm
                  host={host}
                />

              </>
            )}
          </div>
        </div>
      )}
      <br /><button onClick={() => setAuthState('login')}>Login</button>
      <br /><button onClick={() => setAuthState('reg')}>Register</button>
    </div>
  )
}