import {useState} from 'react'

import {
  MainContainer,
  AppContainer,
  Image,
  Text,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isLock, setLock] = useState(true)
  const onToggleLock = () => {
    setLock(prevState => !prevState)
  }

  const imageUrl = isLock
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const altText = isLock ? 'lock' : 'unlock'

  return (
    <MainContainer>
      <AppContainer>
        <Image src={imageUrl} alt={altText} />
        <Text>
          {isLock ? 'Your Device is Locked' : 'Your Device is Unlocked'}
        </Text>
        <Button onClick={onToggleLock}>{isLock ? 'Unlock' : 'Lock'}</Button>
      </AppContainer>
    </MainContainer>
  )
}

export default Unlock
