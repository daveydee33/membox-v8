import React, { ReactNode } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Button } from '@mui/material'
import Image from 'next/image'

const LoginLogout = () => {
  const { data: session } = useSession()

  const Wrapper = ({ children }: { children: ReactNode }) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '0.5rem',
      }}
    >
      {children}
    </div>
  )

  if (session) {
    return (
      <Wrapper>
        {session.user?.email}
        {session.user?.image && (
          <Image
            src={session.user?.image}
            width={40}
            height={40}
            alt="avatar"
            style={{ borderRadius: '50%' }}
          ></Image>
        )}
        <Button onClick={() => signOut()}>Sign out</Button>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <Button onClick={() => signIn()}>Sign in</Button>
    </Wrapper>
  )
}

export default LoginLogout
