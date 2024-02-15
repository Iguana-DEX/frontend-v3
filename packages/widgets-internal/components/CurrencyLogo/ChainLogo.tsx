import { Box, HelpIcon } from "@pancakeswap/uikit";
import Image from "next/image";
import { memo } from "react";
import { SpaceProps } from "styled-system";

export const ChainLogo = memo(
  ({
    chainId,
    width = 24,
    height = 24,
    ...props
  }: { chainId?: number; width?: number; height?: number } & SpaceProps) => {
    let icon = (
      <Image
        alt={`chain-${chainId}`}
        style={{ maxHeight: `${height}px` }}
        src={`https://assets.pancakeswap.finance/web/chains/${chainId}.png`}
        width={width}
        height={height}
        unoptimized
      />
    );

    if (chainId === 128123) {
      icon = (
        <Image
          alt={`chain-${chainId}`}
          style={{ maxHeight: `${height}px` }}
          src="etherlink_logo.png"
          width={width}
          height={height}
          unoptimized
        />
      );
    } else {
      icon = <HelpIcon width={width} height={height} />;
    }

    return <Box {...props}>{icon}</Box>;
  }
);

// export const ChainLogo = memo(
//   ({
//     chainId,
//     width = 24,
//     height = 24,
//     ...props
//   }: { chainId?: number; width?: number; height?: number } & SpaceProps) => {
//     const icon = chainId ? (
//       <Image
//         alt={`chain-${chainId}`}
//         style={{ maxHeight: `${height}px` }}
//         src={`https://assets.pancakeswap.finance/web/chains/${chainId}.png`}
//         width={width}
//         height={height}
//         unoptimized
//       />
//     ) : (
//       <HelpIcon width={width} height={height} />
//     );
//     return <Box {...props}>{icon}</Box>;
//   }
// );
