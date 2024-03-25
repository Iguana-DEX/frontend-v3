import { useTranslation } from '@pancakeswap/localization'
import { Button, Flex, OpenNewIcon, Text, useMatchBreakpoints } from '@pancakeswap/uikit'
import { NextLinkFromReactRouter } from '@pancakeswap/widgets-internal'
// eslint-disable-next-line import/no-named-default
import Image from 'next/legacy/image'
import { memo } from 'react'
import { styled } from 'styled-components'
import * as S from './Styled'
import { flyingAnim } from './animations'
import { baseBg, baseBgMobile, baseMoon, baseTree } from './images'

const iguanaLogo = 'https://raw.githubusercontent.com/Iguana-DEX/assets/main/iguana_brand_assets/logo-dark.webp'
const etherlinkLogo = 'https://raw.githubusercontent.com/Iguana-DEX/assets/main/chains/etherlink.svg'
const iggiesClub = 'https://raw.githubusercontent.com/Iguana-DEX/assets/main/iguana_brand_assets/iggies-club.webp'

const RightWrapper = styled.div`
  position: absolute;
  min-height: 100%;
  width: 100%;
  right: 0;
  bottom: -2px;
  z-index: 2;
  > span:first-child {
    position: absolute !important;
    right: -10px;
    bottom: 0px;
    z-index: 2;
    ${({ theme }) => theme.mediaQueries.lg} {
      right: 180px;
      top: auto;
      bottom: 1px;
    }
  }
  > span:nth-child(2) {
    position: absolute !important;
    top: -20px;
    right: 90px;
    z-index: 3;
    animation: ${flyingAnim} 3.5s ease-in-out infinite;
  }
`

const BgWrapper = styled.div`
  position: absolute;
  right: 0px;
  top: -2px;
  overflow: hidden;
  height: 100%;
  border-radius: 32px;
  z-index: 1;
  > span:first-child {
    position: relative !important;
    right: 0px;
    top: 1px;
    height: 100% !important;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    bottom: auto;
    height: 100%;
    right: 0px;
    top: -1px;
    border-bottom-left-radius: 0px;
    > span:first-child {
      position: relative !important;
      right: 0px;
      top: 0px;
    }
  }
  > span:nth-child(2) {
    position: absolute !important;
    bottom: -2px;
    right: 0px;
    z-index: 3;
  }
`
const Header = styled.div`
  padding-right: 100px;
  position: relative;
  font-family: 'Kanit';
  font-style: normal;
  font-weight: 800;
  font-size: 25px;
  line-height: 98%;
  letter-spacing: 0.01em;
  color: #f2d76d;
  margin-top: 18px;
  margin-bottom: 20px;
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`
const SubTitle = styled.div`
  color: #ffffff;
  font-feature-settings: 'liga' off;
  font-family: Kanit;
  font-size: 19.847px;
  font-style: normal;
  font-weight: 700;
  line-height: 98%; /* 19.45px */
  margin-bottom: 20px;
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-bottom: 10px;
  }
`

const Divider = styled.div`
  height: 22px;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.white};
`

const BaseBanner = () => {
  const { t } = useTranslation()
  const { isMobile, isDesktop } = useMatchBreakpoints()

  return (
    <S.Wrapper
      style={{
        background: `linear-gradient(180deg, #0052FF 0%, #FFF 100%)`,
        overflow: isMobile ? 'hidden' : 'visible',
      }}
    >
      <S.Inner>
        <S.LeftWrapper position="relative" style={{ zIndex: 3, justifyContent: isMobile ? 'flex-start' : 'center' }}>
          <Flex alignItems="center" mb="8px" style={{ gap: isMobile ? 8 : 15 }}>
            <Image
              src={iguanaLogo}
              alt="Iguana Logo"
              width={isMobile ? 100 : 112}
              height={isMobile ? 15 : 38}
              unoptimized
            />
            <Divider />
            <Image
              src={etherlinkLogo}
              alt="Etherlink Logo"
              width={isMobile ? 100 : 32}
              height={isMobile ? 15 : 32}
              unoptimized
            />
          </Flex>
          <Header color="#f2d76d">{t('Swap and Provide Liquidity Now')}</Header>
          {/* {!isMobile && <SubTitle>{t('Swap and Provide Liquidity Now')}</SubTitle>} */}
          <NextLinkFromReactRouter to="/swap">
            <Button variant="text" pl="0px" pt="0px" scale={isMobile ? 'sm' : 'md'}>
              <Text textTransform={isMobile ? 'uppercase' : 'capitalize'} bold mt="4" fontSize="16px" color="#181325">
                {t('Get Started')}
              </Text>
              <OpenNewIcon mt="4" color="#181325" />
            </Button>
          </NextLinkFromReactRouter>
        </S.LeftWrapper>
        <RightWrapper>
          {/* <div style={{ borderRadius: '0px', overflow: 'hidden' }}>
            <Image
              src="https://raw.githubusercontent.com/Iguana-DEX/assets/main/iguana_brand_assets/bg-header.webp"
              alt="Background header"
              layout="fill"
              objectFit="cover"
            />
          </div> */}
          {isDesktop ? (
            <>
              <div style={{ width: '248px', height: '145px', marginLeft: '800px', marginTop: '70px' }}>
                <Image
                  src={iggiesClub}
                  alt="iggiesClub"
                  width={248}
                  height={145}
                  // style={{ position: 'absolute', top: 50, left: 800, width: 248, height: 145 }}
                />
              </div>
              {/* <Image src={baseBunny} alt="baseBunny" width={218} height={203} placeholder="blur" /> */}
              <Image src={baseMoon} alt="baseMoon" width={123} height={94} placeholder="blur" />
            </>
          ) : (
            <div style={{ width: '248px', height: '145px', marginLeft: '800px', marginTop: '70px' }}>
              <Image
                src={iggiesClub}
                alt="iggiesClub"
                width={248}
                height={145}
                // style={{ position: 'absolute', top: 50, left: 800, width: 248, height: 145 }}
              />
            </div>
            // <Image src={baseBunny} alt="baseBunny" width={196} height={182} placeholder="blur" />
          )}
          <BgWrapper>
            {isDesktop ? (
              <>
                <Image src={baseBg} alt="baseBg" width={624} height={192} placeholder="blur" />
                <Image src={baseTree} alt="baseTree" width={149} height={150} placeholder="blur" />
              </>
            ) : (
              <Image src={baseBgMobile} alt="baseBgMobile" width={316} height={176} placeholder="blur" />
            )}
          </BgWrapper>
        </RightWrapper>
      </S.Inner>
    </S.Wrapper>
  )
}

export default memo(BaseBanner)
