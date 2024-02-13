import { ethers } from "ethers";
const pk = "0x3b283c117de8724e2dc28adfb246d5571502c1fabf9121113ba95bfd248b1e3a";
const toAddress = "0x7bd0d01ed6d9da14861f022b94467f8d2f8bb536";
const abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "assetsIn",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amountsIn",
        type: "uint256[]",
      },
    ],
    name: "addLiquidity",
    outputs: [
      {
        internalType: "address[]",
        name: "shares",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "shareAmounts",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "liquidity",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "liquidityAmounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IERC20DexModule.SwapKind",
        name: "kind",
        type: "uint8",
      },
      {
        components: [
          {
            internalType: "address",
            name: "poolId",
            type: "address",
          },
          {
            internalType: "address",
            name: "assetIn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountIn",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "assetOut",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountOut",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "userData",
            type: "bytes",
          },
        ],
        internalType: "struct IERC20DexModule.BatchSwapStep[]",
        name: "swaps",
        type: "tuple[]",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "batchSwap",
    outputs: [
      {
        internalType: "address[]",
        name: "assets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "address[]",
        name: "assetsIn",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amountsIn",
        type: "uint256[]",
      },
      {
        internalType: "string",
        name: "poolType",
        type: "string",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "asset",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "weight",
                type: "uint256",
              },
            ],
            internalType: "struct IERC20DexModule.AssetWeight[]",
            name: "weights",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "swapFee",
            type: "uint256",
          },
        ],
        internalType: "struct IERC20DexModule.PoolOptions",
        name: "options",
        type: "tuple",
      },
    ],
    name: "createPool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "baseAsset",
        type: "address",
      },
      {
        internalType: "address",
        name: "quoteAsset",
        type: "address",
      },
    ],
    name: "getExchangeRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "getLiquidity",
    outputs: [
      {
        internalType: "address[]",
        name: "asset",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "getPoolName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "getPoolOptions",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "asset",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "weight",
                type: "uint256",
              },
            ],
            internalType: "struct IERC20DexModule.AssetWeight[]",
            name: "weights",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "swapFee",
            type: "uint256",
          },
        ],
        internalType: "struct IERC20DexModule.PoolOptions",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "assets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "getPreviewAddLiquidityNoSwap",
    outputs: [
      {
        internalType: "address[]",
        name: "shares",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "shareAmounts",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "liqOut",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "liquidityAmounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "liquidity",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "getPreviewAddLiquidityStaticPrice",
    outputs: [
      {
        internalType: "address[]",
        name: "shares",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "shareAmounts",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "liqOut",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "liquidityAmounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IERC20DexModule.SwapKind",
        name: "kind",
        type: "uint8",
      },
      {
        components: [
          {
            internalType: "address",
            name: "poolId",
            type: "address",
          },
          {
            internalType: "address",
            name: "assetIn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountIn",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "assetOut",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountOut",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "userData",
            type: "bytes",
          },
        ],
        internalType: "struct IERC20DexModule.BatchSwapStep[]",
        name: "swaps",
        type: "tuple[]",
      },
    ],
    name: "getPreviewBatchSwap",
    outputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "getPreviewBurnShares",
    outputs: [
      {
        internalType: "address[]",
        name: "assets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "assets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "getPreviewSharesForLiquidity",
    outputs: [
      {
        internalType: "address[]",
        name: "shares",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "shareAmounts",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "liquidity",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "liquidityAmounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "getPreviewSharesForSingleSidedLiquidityRequest",
    outputs: [
      {
        internalType: "address[]",
        name: "assets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IERC20DexModule.SwapKind",
        name: "kind",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "baseAsset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "baseAssetAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "quoteAsset",
        type: "address",
      },
    ],
    name: "getPreviewSwapExact",
    outputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "assetIn",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "assetAmount",
        type: "uint256",
      },
    ],
    name: "getRemoveLiquidityExactAmountOut",
    outputs: [
      {
        internalType: "address[]",
        name: "assets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "assetOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "sharesIn",
        type: "uint256",
      },
    ],
    name: "getRemoveLiquidityOneSideOut",
    outputs: [
      {
        internalType: "address[]",
        name: "assets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "getTotalShares",
    outputs: [
      {
        internalType: "address[]",
        name: "assets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "assetIn",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    name: "removeLiquidityBurningShares",
    outputs: [
      {
        internalType: "address[]",
        name: "liquidity",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "liquidityAmounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "assetOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "sharesIn",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "maxSharesIn",
        type: "uint256",
      },
    ],
    name: "removeLiquidityExactAmount",
    outputs: [
      {
        internalType: "address[]",
        name: "shares",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "shareAmounts",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "liquidity",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "liquidityAmounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IERC20DexModule.SwapKind",
        name: "kind",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "poolId",
        type: "address",
      },
      {
        internalType: "address",
        name: "assetIn",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "assetOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "address[]",
        name: "assets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
];

const main = async () => {
  const provider = new ethers.JsonRpcProvider(
    "https://artio.rpc.berachain.com/",
    { chainId: 80085, name: "Berachain Artio" }
  );
  const signer = new ethers.Wallet(
    "0x2db14caa7643cc134778259677fe82695f1444b9dd1d3d58e362f5d24491dd47",
    provider
  );

  const contract = new ethers.Contract(
    "0x0d5862FDbdd12490f9b4De54c236cff63B038074",
    abi,
    signer
  );
  // [object Object]
  const tx = await contract["batchSwap"](
    0,
    [
      {
        amountIn: ethers.toBigInt("5000000000000000"),
        amountOut: ethers.toBigInt("2596181262879044379"),
        assetIn: "0x0000000000000000000000000000000000000000",
        assetOut: "0x7eeca4205ff31f947edbd49195a7a88e6a91161b",
        poolId: "0xa88572f08f79d28b8f864350f122c1cc0abb0d96",
        userData: "0x", // 空字节数组
        value: ethers.toBigInt("5000000000000000"),
      }
    ],
    ethers.toBigInt(99999999)
  );
  

  provider.once(tx.hash, (receipt) => {
    console.log("Transaction confirmed:");
    console.log("Transaction sent:", tx.hash);
  });

  // const tx = await signer.sendTransaction({
  //   to: toAddress,
  //   value: ethers.parseUnits("0.001", "ether"),
  // });
  // console.log(tx);

  //   const signer = new ethers.Wallet(
  //     "0x3b283c117de8724e2dc28adfb246d5571502c1fabf9121113ba95bfd248b1e3a",
  //     provider
  //   );
  //   const tx = await signer.sendTransaction({
  //     to: toAddress,
  //     value: ethers.parseUnits("0.001", "ether"),
  //   });
  //   console.log(tx);
};

main();
