import { ChainId } from '@pancakeswap/chains'

const PRICE_API = 'https://api.binance.com/api/v3/ticker/price'

const zeroAddress = '0x0000000000000000000000000000000000000000' as const

// duck typing for native currency, token, token info
export type CurrencyParams =
  | {
      chainId: ChainId
      address: `0x${string}`
      isNative?: false
    }
  | {
      chainId: ChainId
      isNative: true
    }

export type CurrencyKey = `${number}:${string}`

export type CurrencyUsdResult = Record<CurrencyKey, number>

export function getCurrencyKey(currencyParams?: CurrencyParams): CurrencyKey | undefined {
  if (!currencyParams) {
    return undefined
  }

  if ('isNative' in currencyParams && currencyParams.isNative === true) {
    return `${currencyParams.chainId}:${zeroAddress}`
  }
  const { chainId, address } = currencyParams
  return `${chainId}:${address.toLowerCase()}`
}

export function getCurrencyListKey(currencyListParams?: CurrencyParams[]): string | undefined {
  if (!currencyListParams) {
    return undefined
  }

  const currencyKeys = currencyListParams.map(getCurrencyKey).filter((key): key is CurrencyKey => !!key)

  const uniqueKeys = [...new Set(currencyKeys)]

  return uniqueKeys.join(',')
}

function getRequestUrl(params?: CurrencyParams | CurrencyParams[]): string | undefined {
  if (!params) {
    return undefined
  }

  const infoList = Array.isArray(params) ? params : [params]

  console.log(infoList)

  let symbolString

  if (infoList.length > 1) {
    symbolString = '?symbols=['
    for (const tokenInfo in infoList) {
      if (tokenInfo.symbol === 'tXTZ') {
        symbolString += `"XTZUSDT",`
      } else if (tokenInfo.symbol === 'tzBTC') {
        symbolString += `"BTCUSDT",`
      } else if (tokenInfo.symbol === 'WETH') {
        symbolString += `"ETHUSDT",`
      } else {
        symbolString += `"${tokenInfo.symbol}USDT",`
      }
    }
    symbolString = `${symbolString.slice(0, -1)}]` // remove last comma
  } else {
    symbolString = '?symbol='
    if (infoList[0].symbol === 'tXTZ') {
      symbolString += `XTZUSDT`
    } else if (infoList[0].symbol === 'tzBTC') {
      symbolString += `BTCUSDT`
    } else if (infoList[0].symbol === 'WETH') {
      symbolString += `ETHUSDT`
    } else {
      symbolString += `${infoList[0].symbol}USDT`
    }
  }

  const encodedKey = encodeURIComponent(`${PRICE_API}${symbolString}`)

  const test = `${PRICE_API}${symbolString}`

  console.log(test)

  return encodedKey
}

export async function getCurrencyUsdPrice(currencyParams?: CurrencyParams) {
  const prices = await getCurrencyListUsdPrice(currencyParams && [currencyParams])
  const key = getCurrencyKey(currencyParams)
  return (key && prices[key]) ?? 0
}

export async function getCurrencyListUsdPrice(currencyListParams?: CurrencyParams[]): Promise<CurrencyUsdResult> {
  const requestUrl = getRequestUrl(currencyListParams)
  if (!requestUrl || !currencyListParams) {
    throw new Error(`Invalid request for currency prices, request url: ${requestUrl}`)
  }
  const res = await fetch(requestUrl)
  const data = await res.json()
  return data
}
