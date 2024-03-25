import { ChainId } from '@pancakeswap/chains'
import { OptionProps } from '@pancakeswap/uikit'
import {
  EventInformation,
  PancakeNotificationBuilders,
  ResponseEvents,
  SubscriptionType,
  pushNotification,
} from './types'

export const ONE_DAY_MILLISECONDS = 86400000
export const TWO_MINUTES_MILLISECONDS = 120000

export const NotificationFilterTypes: OptionProps[] = [
  {
    label: 'All',
    value: 'All',
  },
  {
    label: 'Lottery',
    value: SubscriptionType.Lottery,
  },
  {
    label: 'Prediction',
    value: SubscriptionType.Prediction,
  },
  {
    label: 'Liquidity',
    value: SubscriptionType.Liquidity,
  },
  {
    label: 'Farm',
    value: SubscriptionType.Farms,
  },
  {
    label: 'Prices',
    value: SubscriptionType.PriceUpdates,
  },
  {
    label: 'Promotion',
    value: SubscriptionType.Promotional,
  },
  {
    label: 'Alerts',
    value: SubscriptionType.Alerts,
  },
  {
    label: 'Rewards',
    value: SubscriptionType.TradingReward,
  },
  {
    label: 'Archived',
    value: 'Archived',
  },
]

export const NEXT_PUBLIC_WEB_NOTIFICATION_SECURE_TOKEN = process.env.NEXT_PUBLIC_WEB_NOTIFICATION_SECURE_TOKEN ?? ''
export const WEB_PUSH_ENCRYPTION_KEY = process.env.NEXT_PUBLIC_WEB_PUSH_ENCRYPTION_KEY ?? ''
export const WEB_PUSH_IV = process.env.NEXT_PUBLIC_WEB_PUSH_IV ?? ''

export const PancakeNotifications: {
  [notificationBuilder in keyof PancakeNotificationBuilders]: <T>(args: T[]) => pushNotification
} = {
  newLpNotification: (): pushNotification => {
    return {
      title: 'New LP Position Added',
      body: `New LP position successfully added. you will be notified on important updates.`,
      icon: `https://pancakeswap.finance/logo.png`,
      url: 'https://pancakeswap.finance',
      type: SubscriptionType.Liquidity,
    }
    // ... add more as we create use cases
  },
}
export const APP_DOMAIN = 'pancakeswap.finance'

export const PUBLIC_VAPID_KEY = process.env.NEXT_PUBLIC_VAPID_KEY ?? ''

export const Events: { [event in keyof typeof ResponseEvents]: EventInformation } = {
  [ResponseEvents.NotificationsEnabled]: {
    title: 'Notifications Enabled',
    message: () => 'You can now opt-in to pancakeswap web notifications',
  },
  [ResponseEvents.NotificationsEnabledError]: {
    title: 'Error Enabling Notifications',
    message: (error) => `Something went wrong when trying to enable notifications ${error}`,
  },
  [ResponseEvents.SubscriptionRequestError]: {
    title: 'Subscription Error',
  },
  [ResponseEvents.PreferencesUpdated]: {
    title: 'Success',
    message: () => 'Your notification preferences have been updated.',
  },
  [ResponseEvents.PreferencesError]: {
    title: 'Something went wrong',
    message: (error) => `Unable to update your preferences ${error}`,
  },
  [ResponseEvents.UnsubscribeError]: {
    title: 'Error Unsubscribing',
    message: (error) => `Unable to unsubscribe ${error}`,
  },
  [ResponseEvents.Unsubscribed]: {
    title: 'Update',
    message: () => 'You successfully unsubscribed from notifications. You can re-subscribe any time',
  },
}

export const CHAIN_NAME_TO_CHAIN_ID = {
  bsc: ChainId.BSC,
  ethereum: ChainId.ETHEREUM,
  polygon_zkevm: ChainId.POLYGON_ZKEVM,
  era: ChainId.ZKSYNC,
  arbitrum: ChainId.ARBITRUM_ONE,
  linea: ChainId.LINEA,
  base: ChainId.BASE,
}

export const ENABLE_ALL_SCOPES = [
  SubscriptionType.Alerts,
  SubscriptionType.Farms,
  SubscriptionType.Liquidity,
  SubscriptionType.Lottery,
  SubscriptionType.Prediction,
  SubscriptionType.PriceUpdates,
  SubscriptionType.Promotional,
]
export const DISABLE_ALL_SCOPES = [SubscriptionType.Alerts, SubscriptionType.Liquidity]
