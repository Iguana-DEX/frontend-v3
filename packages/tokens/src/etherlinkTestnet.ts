import { ChainId } from '@pancakeswap/chains'
import { ERC20Token } from '@pancakeswap/sdk'

export const etherlinkTestnetTokens = {
  // wxtz: WXTZ[ChainId.ETHERLINK_TESTNET],
  usdc: new ERC20Token(ChainId.ETHERLINK_TESTNET, '0xa7c9092A5D2C3663B7C5F714dbA806d02d62B58a', 18, 'USDC', 'USD Coin'),
  usdt: new ERC20Token(
    ChainId.ETHERLINK_TESTNET,
    '0xD21B917D2f4a4a8E3D12892160BFFd8f4cd72d4F',
    18,
    'USDT',
    'Tether USD',
  ),
}
