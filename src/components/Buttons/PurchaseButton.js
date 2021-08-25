import React from 'react'
import styled from 'styled-components'
import { Caption2, SmallText } from '../styles/TextStyles'
import { Link } from 'gatsby'

const PurchaseButton = ({ title, subtitle }) => (
  <Link to="#">
    <Wrapper>
      <Title>{title || 'Get Pro Access'}</Title>
      <Subtitle>{subtitle || '$19 per month'}</Subtitle>
    </Wrapper>
  </Link>
)
export default PurchaseButton

const Wrapper = styled.div`
  width: 280px;
  height: 77px;
  padding: 12px;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 20px 40px rgba(23, 0, 102, 0.2),
    inset 0 0 0 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
`

const Title = styled(Caption2)`
  color: #000;
`

const Subtitle = styled(SmallText)`
  color: #000;
  opacity: 0.7;
`
