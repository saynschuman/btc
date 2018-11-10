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
import ButtonBlue from '../common/ButtonBlue/ButtonBlue'
import CommonLink from '../common/CommonLink/CommonLink'
import MobileMenuInvestor from '../common/MobileMenuInvestor/MobileMenuInvestor'
import { connect } from 'react-redux'
import { HashRouter, Switch, Route } from 'react-router-dom'
import InvestorHomePage from '../investorHomepage/investorHomePage'
import css from './RootInvestor.module.css'
import InvestorSettings from '../InvestorSettings/InvestorSettings'
import InvestorPrivateSettings from '../InvestorPrivateSettings/InvestorPrivateSettings'

const RootInvestor = props => {
  return (
    <HashRouter>
      <div>
        <Header />
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
              <Numbers data={'0.221 BTC'} />
              <CommonLink>Gdf...fdsw</CommonLink>
              <ButtonBlue info text={'Вывод'} />
            </Block>
            <Block title={'Курс'} icon={course}>
              <ul className={css.courses}>
                <li>1 TH/s = 0.15 BTC</li>
                <li>1 BTC = 6 952,04$</li>
                <li>1 BTC = 399 574P</li>
              </ul>
            </Block>
          </Aside>
          <Main>
            <Switch>
              <Route exact path="/investor-home" component={InvestorHomePage} />
              <Route path="/investor-buy" component={InvestorSettings} />
              <Route path="/investor-settings" component={InvestorPrivateSettings} />
              <Route path="*" component={InvestorHomePage} />
            </Switch>
          </Main>
          {props.menuIsOpen && <MobileMenuInvestor />}
        </MainContainer>
      </div>
    </HashRouter>
  )
}

export default connect(state => {
  return {
    menuIsOpen: state.toggleMobileMenu.mobileMenuIsOpen
  }
})(RootInvestor)
