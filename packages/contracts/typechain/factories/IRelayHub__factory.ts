/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IRelayHub } from "../IRelayHub";

export class IRelayHub__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRelayHub {
    return new Contract(address, _abi, signerOrProvider) as IRelayHub;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "paymaster",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "relayManager",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "baseRelayFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "pctRelayFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "relayUrl",
        type: "string",
      },
    ],
    name: "RelayServerRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "relayManager",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "newRelayWorkers",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "workersCount",
        type: "uint256",
      },
    ],
    name: "RelayWorkersAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "relayManager",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "paymaster",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "relayWorker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "innerGasUsed",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "reason",
        type: "bytes",
      },
    ],
    name: "TransactionRejectedByPaymaster",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "relayManager",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "relayWorker",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "paymaster",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
      {
        indexed: false,
        internalType: "enum IRelayHub.RelayCallStatus",
        name: "status",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "charge",
        type: "uint256",
      },
    ],
    name: "TransactionRelayed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum IRelayHub.RelayCallStatus",
        name: "status",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "returnValue",
        type: "bytes",
      },
    ],
    name: "TransactionResult",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "dest",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "newRelayWorkers",
        type: "address[]",
      },
    ],
    name: "addRelayWorkers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "gasUsed",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "gasPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pctRelayFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "baseRelayFee",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "relayWorker",
            type: "address",
          },
          {
            internalType: "address",
            name: "paymaster",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "paymasterData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "clientId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "forwarder",
            type: "address",
          },
        ],
        internalType: "struct GsnTypes.RelayData",
        name: "relayData",
        type: "tuple",
      },
    ],
    name: "calculateCharge",
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
        name: "target",
        type: "address",
      },
    ],
    name: "depositFor",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "gasOverhead",
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
    inputs: [],
    name: "gasReserve",
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
        name: "relayManager",
        type: "address",
      },
    ],
    name: "isRelayManagerStaked",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxWorkerCount",
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
    inputs: [],
    name: "maximumRecipientDeposit",
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
    inputs: [],
    name: "minimumStake",
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
    inputs: [],
    name: "minimumUnstakeDelay",
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
        name: "relayWorker",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "penalize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "penalizer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "postOverhead",
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
        internalType: "uint256",
        name: "baseRelayFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pctRelayFee",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "url",
        type: "string",
      },
    ],
    name: "registerRelayServer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "paymasterMaxAcceptanceBudget",
        type: "uint256",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "gas",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "nonce",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
            ],
            internalType: "struct IForwarder.ForwardRequest",
            name: "request",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "gasPrice",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "pctRelayFee",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "baseRelayFee",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "relayWorker",
                type: "address",
              },
              {
                internalType: "address",
                name: "paymaster",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "paymasterData",
                type: "bytes",
              },
              {
                internalType: "uint256",
                name: "clientId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "forwarder",
                type: "address",
              },
            ],
            internalType: "struct GsnTypes.RelayData",
            name: "relayData",
            type: "tuple",
          },
        ],
        internalType: "struct GsnTypes.RelayRequest",
        name: "relayRequest",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "approvalData",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "externalGasLimit",
        type: "uint256",
      },
    ],
    name: "relayCall",
    outputs: [
      {
        internalType: "bool",
        name: "paymasterAccepted",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "returnValue",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakeManager",
    outputs: [
      {
        internalType: "contract IStakeManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "versionHub",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "dest",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "manager",
        type: "address",
      },
    ],
    name: "workerCount",
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
        name: "worker",
        type: "address",
      },
    ],
    name: "workerToManager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
