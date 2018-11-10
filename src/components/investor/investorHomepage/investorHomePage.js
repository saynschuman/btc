import React from 'react'
import Header from '../../commmon/Header/Header'
import Main from '../common/main/main'
import Block from '../common/block'
import BlockNom from '../common/blockNom'
import Aside from '../common/aside/aside'
import MainContainer from '../common/MainContainer/MainContainer'
import { flash, btc, wallet, course } from './img/export'
import Numbers from '../common/Numbers/Numbers'
import ButtonViolet from '../common/ButtonViolet/ButtonViolet'

const InvestorHomepage = () => {
  return (
    <div>
      {/* <Header whoAreYou={'investor'} /> */}
      <MainContainer>
        <Aside>
          <Block title={'Ваша мощность (?)'} icon={flash}>
            <Numbers data={'1.201 TH/s'} />
          </Block>
          <BlockNom title={'Полученный доход (?)'} icon={btc}>
            <Numbers data={'1.201 BTC'} />
            <ButtonViolet info text={'Инвестировать'} />
          </BlockNom>
          <Block title={'Баланс кошелька'} icon={wallet}>
            123
          </Block>
          <Block title={'Курс'} icon={course}>
            123
          </Block>
        </Aside>
        <Main>
          <Block title={'График курса'}>123</Block>
        </Main>
      </MainContainer>
    </div>
  )
}

export default InvestorHomepage
