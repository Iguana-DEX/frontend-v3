import { useTheme } from '@pancakeswap/hooks'
import { languageList, useTranslation } from '@pancakeswap/localization'
import { Box, Button, Flex, LangSelector, Link, Logo, ThemeSwitcher } from '@pancakeswap/uikit'
import NoSSR from 'components/NoSSR'
import { useTheme as useNextTheme } from 'next-themes'

const Menu = () => {
  const theme = useTheme()
  const { setTheme } = useNextTheme()
  const { currentLanguage, setLanguage, t } = useTranslation()

  return (
    <Flex height="56px" bg="backgroundAlt" px="16px" alignItems="center" justifyContent="space-between" zIndex={9}>
      <Flex>
        <Logo href="/" />
      </Flex>
      <Flex alignItems="center">
        <NoSSR>
          <Box mr="16px">
            <ThemeSwitcher isDark={theme.isDark} toggleTheme={() => setTheme(theme.isDark ? 'light' : 'dark')} />
          </Box>
        </NoSSR>
        <LangSelector
          buttonScale="xs"
          color="textSubtle"
          hideLanguage
          currentLang={currentLanguage.code}
          langs={languageList}
          setLang={setLanguage}
        />
        <Link external href="https://iguanadex.com/">
          <Button scale="sm">{t('Launch App')}</Button>
        </Link>
      </Flex>
    </Flex>
  )
}

export default Menu
