import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to top, #3c2940, #161617);
  height: 100vh;
`

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Image = styled.img`
  width: 60px;
  height: 60px;
`

export const Text = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 300;
  color: #ffffff;
  line-height: 32px;
`

export const Button = styled.button`
  padding: 6px 12px;
  margin-top: 55px;
  border: none;
  border-radius: 6px;
  color: #e2e8f0;
  background-color: #06b6d4;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
`
