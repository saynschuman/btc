import React from 'react'
import Header from '../../commmon/Header/Header'
import Main from '../common/main/main'
import Block from '../common/block'
import Aside from '../common/aside/aside'
import MainContainer from '../common/MainContainer/MainContainer'

const InvestorHomepage = () => {
  return (
    <div>
      {/* <Header whoAreYou={'investor'} /> */}
      <MainContainer>
        <Aside>
          <Block>123</Block>
        </Aside>
        <Main>
          <Block>123</Block>
        </Main>
      </MainContainer>
    </div>
  )
}

export default InvestorHomepage
