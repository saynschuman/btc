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
import css from './InvestorHomaPage.module.css'
import BigBlock from '../common/bigBlock'
import ChartCourse from '../common/ChartCourse/ChartCourse'
import ChartIncome from '../common/ChartIncome/ChartIncome'
import MobileMenuInvestor from '../common/MobileMenuInvestor/MobileMenuInvestor'

const InvestorHomepage = props => {
  return (
    <div>
      <BigBlock title={'График курса BTC'} courseBtcUSD={'6 952,04'} courseBtcRUB={'399 574'}>
        <ChartCourse />
      </BigBlock>
      <Block title={'График доходности проекта, % '}>
        <ChartIncome />
      </Block>
    </div>
  )
}

export default InvestorHomepage
