import { useState } from 'react'
import { useRecoilValue, RecoilRoot, useRecoilState} from 'recoil'
import { jobsAtom, networkAtom, notificationsAtom, messagingAtom, totalNotificationsSelector } from './atoms'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsCount = useRecoilValue(jobsAtom)
  const [messagingCount, setMessagingCount] = useRecoilState(messagingAtom)
  const notificationsCount = useRecoilValue(notificationsAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationsSelector)

  return (
    <>
    <button>Home</button>

    <button>My network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
    <button>jobs {jobsCount}</button>
    <button>Messaging ({messagingCount})</button>
    <button>notification ({notificationsCount})</button>

    <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App
