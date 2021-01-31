/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IRelayHubInterface extends ethers.utils.Interface {
  functions: {
    "addRelayWorkers(address[])": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "calculateCharge(uint256,tuple)": FunctionFragment;
    "depositFor(address)": FunctionFragment;
    "gasOverhead()": FunctionFragment;
    "gasReserve()": FunctionFragment;
    "isRelayManagerStaked(address)": FunctionFragment;
    "maxWorkerCount()": FunctionFragment;
    "maximumRecipientDeposit()": FunctionFragment;
    "minimumStake()": FunctionFragment;
    "minimumUnstakeDelay()": FunctionFragment;
    "penalize(address,address)": FunctionFragment;
    "penalizer()": FunctionFragment;
    "postOverhead()": FunctionFragment;
    "registerRelayServer(uint256,uint256,string)": FunctionFragment;
    "relayCall(uint256,tuple,bytes,bytes,uint256)": FunctionFragment;
    "stakeManager()": FunctionFragment;
    "versionHub()": FunctionFragment;
    "withdraw(uint256,address)": FunctionFragment;
    "workerCount(address)": FunctionFragment;
    "workerToManager(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addRelayWorkers",
    values: [string[]]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "calculateCharge",
    values: [
      BigNumberish,
      {
        gasPrice: BigNumberish;
        pctRelayFee: BigNumberish;
        baseRelayFee: BigNumberish;
        relayWorker: string;
        paymaster: string;
        paymasterData: BytesLike;
        clientId: BigNumberish;
        forwarder: string;
      }
    ]
  ): string;
  encodeFunctionData(functionFragment: "depositFor", values: [string]): string;
  encodeFunctionData(
    functionFragment: "gasOverhead",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "gasReserve",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isRelayManagerStaked",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "maxWorkerCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maximumRecipientDeposit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minimumStake",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minimumUnstakeDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "penalize",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "penalizer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "postOverhead",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "registerRelayServer",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "relayCall",
    values: [
      BigNumberish,
      {
        request: {
          from: string;
          to: string;
          value: BigNumberish;
          gas: BigNumberish;
          nonce: BigNumberish;
          data: BytesLike;
        };
        relayData: {
          gasPrice: BigNumberish;
          pctRelayFee: BigNumberish;
          baseRelayFee: BigNumberish;
          relayWorker: string;
          paymaster: string;
          paymasterData: BytesLike;
          clientId: BigNumberish;
          forwarder: string;
        };
      },
      BytesLike,
      BytesLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "versionHub",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "workerCount", values: [string]): string;
  encodeFunctionData(
    functionFragment: "workerToManager",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addRelayWorkers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateCharge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "depositFor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "gasOverhead",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gasReserve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isRelayManagerStaked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxWorkerCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maximumRecipientDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minimumStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minimumUnstakeDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "penalize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "penalizer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "postOverhead",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerRelayServer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "relayCall", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakeManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "versionHub", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "workerCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "workerToManager",
    data: BytesLike
  ): Result;

  events: {
    "Deposited(address,address,uint256)": EventFragment;
    "RelayServerRegistered(address,uint256,uint256,string)": EventFragment;
    "RelayWorkersAdded(address,address[],uint256)": EventFragment;
    "TransactionRejectedByPaymaster(address,address,address,address,address,bytes4,uint256,bytes)": EventFragment;
    "TransactionRelayed(address,address,address,address,address,bytes4,uint8,uint256)": EventFragment;
    "TransactionResult(uint8,bytes)": EventFragment;
    "Withdrawn(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RelayServerRegistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RelayWorkersAdded"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "TransactionRejectedByPaymaster"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransactionRelayed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransactionResult"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}

export class IRelayHub extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IRelayHubInterface;

  functions: {
    addRelayWorkers(
      newRelayWorkers: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addRelayWorkers(address[])"(
      newRelayWorkers: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    balanceOf(target: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "balanceOf(address)"(
      target: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calculateCharge(
      gasUsed: BigNumberish,
      relayData: {
        gasPrice: BigNumberish;
        pctRelayFee: BigNumberish;
        baseRelayFee: BigNumberish;
        relayWorker: string;
        paymaster: string;
        paymasterData: BytesLike;
        clientId: BigNumberish;
        forwarder: string;
      },
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "calculateCharge(uint256,tuple)"(
      gasUsed: BigNumberish,
      relayData: {
        gasPrice: BigNumberish;
        pctRelayFee: BigNumberish;
        baseRelayFee: BigNumberish;
        relayWorker: string;
        paymaster: string;
        paymasterData: BytesLike;
        clientId: BigNumberish;
        forwarder: string;
      },
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    depositFor(
      target: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "depositFor(address)"(
      target: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    gasOverhead(overrides?: CallOverrides): Promise<[BigNumber]>;

    "gasOverhead()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    gasReserve(overrides?: CallOverrides): Promise<[BigNumber]>;

    "gasReserve()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    isRelayManagerStaked(
      relayManager: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isRelayManagerStaked(address)"(
      relayManager: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    maxWorkerCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "maxWorkerCount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    maximumRecipientDeposit(overrides?: CallOverrides): Promise<[BigNumber]>;

    "maximumRecipientDeposit()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    minimumStake(overrides?: CallOverrides): Promise<[BigNumber]>;

    "minimumStake()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    minimumUnstakeDelay(overrides?: CallOverrides): Promise<[BigNumber]>;

    "minimumUnstakeDelay()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    penalize(
      relayWorker: string,
      beneficiary: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "penalize(address,address)"(
      relayWorker: string,
      beneficiary: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    penalizer(overrides?: CallOverrides): Promise<[string]>;

    "penalizer()"(overrides?: CallOverrides): Promise<[string]>;

    postOverhead(overrides?: CallOverrides): Promise<[BigNumber]>;

    "postOverhead()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    registerRelayServer(
      baseRelayFee: BigNumberish,
      pctRelayFee: BigNumberish,
      url: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "registerRelayServer(uint256,uint256,string)"(
      baseRelayFee: BigNumberish,
      pctRelayFee: BigNumberish,
      url: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    relayCall(
      paymasterMaxAcceptanceBudget: BigNumberish,
      relayRequest: {
        request: {
          from: string;
          to: string;
          value: BigNumberish;
          gas: BigNumberish;
          nonce: BigNumberish;
          data: BytesLike;
        };
        relayData: {
          gasPrice: BigNumberish;
          pctRelayFee: BigNumberish;
          baseRelayFee: BigNumberish;
          relayWorker: string;
          paymaster: string;
          paymasterData: BytesLike;
          clientId: BigNumberish;
          forwarder: string;
        };
      },
      signature: BytesLike,
      approvalData: BytesLike,
      externalGasLimit: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "relayCall(uint256,tuple,bytes,bytes,uint256)"(
      paymasterMaxAcceptanceBudget: BigNumberish,
      relayRequest: {
        request: {
          from: string;
          to: string;
          value: BigNumberish;
          gas: BigNumberish;
          nonce: BigNumberish;
          data: BytesLike;
        };
        relayData: {
          gasPrice: BigNumberish;
          pctRelayFee: BigNumberish;
          baseRelayFee: BigNumberish;
          relayWorker: string;
          paymaster: string;
          paymasterData: BytesLike;
          clientId: BigNumberish;
          forwarder: string;
        };
      },
      signature: BytesLike,
      approvalData: BytesLike,
      externalGasLimit: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    stakeManager(overrides?: CallOverrides): Promise<[string]>;

    "stakeManager()"(overrides?: CallOverrides): Promise<[string]>;

    versionHub(overrides?: CallOverrides): Promise<[string]>;

    "versionHub()"(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      amount: BigNumberish,
      dest: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdraw(uint256,address)"(
      amount: BigNumberish,
      dest: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    workerCount(
      manager: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "workerCount(address)"(
      manager: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    workerToManager(
      worker: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "workerToManager(address)"(
      worker: string,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  addRelayWorkers(
    newRelayWorkers: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addRelayWorkers(address[])"(
    newRelayWorkers: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  balanceOf(target: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOf(address)"(
    target: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateCharge(
    gasUsed: BigNumberish,
    relayData: {
      gasPrice: BigNumberish;
      pctRelayFee: BigNumberish;
      baseRelayFee: BigNumberish;
      relayWorker: string;
      paymaster: string;
      paymasterData: BytesLike;
      clientId: BigNumberish;
      forwarder: string;
    },
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "calculateCharge(uint256,tuple)"(
    gasUsed: BigNumberish,
    relayData: {
      gasPrice: BigNumberish;
      pctRelayFee: BigNumberish;
      baseRelayFee: BigNumberish;
      relayWorker: string;
      paymaster: string;
      paymasterData: BytesLike;
      clientId: BigNumberish;
      forwarder: string;
    },
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  depositFor(
    target: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "depositFor(address)"(
    target: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  gasOverhead(overrides?: CallOverrides): Promise<BigNumber>;

  "gasOverhead()"(overrides?: CallOverrides): Promise<BigNumber>;

  gasReserve(overrides?: CallOverrides): Promise<BigNumber>;

  "gasReserve()"(overrides?: CallOverrides): Promise<BigNumber>;

  isRelayManagerStaked(
    relayManager: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isRelayManagerStaked(address)"(
    relayManager: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  maxWorkerCount(overrides?: CallOverrides): Promise<BigNumber>;

  "maxWorkerCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  maximumRecipientDeposit(overrides?: CallOverrides): Promise<BigNumber>;

  "maximumRecipientDeposit()"(overrides?: CallOverrides): Promise<BigNumber>;

  minimumStake(overrides?: CallOverrides): Promise<BigNumber>;

  "minimumStake()"(overrides?: CallOverrides): Promise<BigNumber>;

  minimumUnstakeDelay(overrides?: CallOverrides): Promise<BigNumber>;

  "minimumUnstakeDelay()"(overrides?: CallOverrides): Promise<BigNumber>;

  penalize(
    relayWorker: string,
    beneficiary: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "penalize(address,address)"(
    relayWorker: string,
    beneficiary: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  penalizer(overrides?: CallOverrides): Promise<string>;

  "penalizer()"(overrides?: CallOverrides): Promise<string>;

  postOverhead(overrides?: CallOverrides): Promise<BigNumber>;

  "postOverhead()"(overrides?: CallOverrides): Promise<BigNumber>;

  registerRelayServer(
    baseRelayFee: BigNumberish,
    pctRelayFee: BigNumberish,
    url: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "registerRelayServer(uint256,uint256,string)"(
    baseRelayFee: BigNumberish,
    pctRelayFee: BigNumberish,
    url: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  relayCall(
    paymasterMaxAcceptanceBudget: BigNumberish,
    relayRequest: {
      request: {
        from: string;
        to: string;
        value: BigNumberish;
        gas: BigNumberish;
        nonce: BigNumberish;
        data: BytesLike;
      };
      relayData: {
        gasPrice: BigNumberish;
        pctRelayFee: BigNumberish;
        baseRelayFee: BigNumberish;
        relayWorker: string;
        paymaster: string;
        paymasterData: BytesLike;
        clientId: BigNumberish;
        forwarder: string;
      };
    },
    signature: BytesLike,
    approvalData: BytesLike,
    externalGasLimit: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "relayCall(uint256,tuple,bytes,bytes,uint256)"(
    paymasterMaxAcceptanceBudget: BigNumberish,
    relayRequest: {
      request: {
        from: string;
        to: string;
        value: BigNumberish;
        gas: BigNumberish;
        nonce: BigNumberish;
        data: BytesLike;
      };
      relayData: {
        gasPrice: BigNumberish;
        pctRelayFee: BigNumberish;
        baseRelayFee: BigNumberish;
        relayWorker: string;
        paymaster: string;
        paymasterData: BytesLike;
        clientId: BigNumberish;
        forwarder: string;
      };
    },
    signature: BytesLike,
    approvalData: BytesLike,
    externalGasLimit: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  stakeManager(overrides?: CallOverrides): Promise<string>;

  "stakeManager()"(overrides?: CallOverrides): Promise<string>;

  versionHub(overrides?: CallOverrides): Promise<string>;

  "versionHub()"(overrides?: CallOverrides): Promise<string>;

  withdraw(
    amount: BigNumberish,
    dest: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdraw(uint256,address)"(
    amount: BigNumberish,
    dest: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  workerCount(manager: string, overrides?: CallOverrides): Promise<BigNumber>;

  "workerCount(address)"(
    manager: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  workerToManager(worker: string, overrides?: CallOverrides): Promise<string>;

  "workerToManager(address)"(
    worker: string,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    addRelayWorkers(
      newRelayWorkers: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    "addRelayWorkers(address[])"(
      newRelayWorkers: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(target: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      target: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateCharge(
      gasUsed: BigNumberish,
      relayData: {
        gasPrice: BigNumberish;
        pctRelayFee: BigNumberish;
        baseRelayFee: BigNumberish;
        relayWorker: string;
        paymaster: string;
        paymasterData: BytesLike;
        clientId: BigNumberish;
        forwarder: string;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calculateCharge(uint256,tuple)"(
      gasUsed: BigNumberish,
      relayData: {
        gasPrice: BigNumberish;
        pctRelayFee: BigNumberish;
        baseRelayFee: BigNumberish;
        relayWorker: string;
        paymaster: string;
        paymasterData: BytesLike;
        clientId: BigNumberish;
        forwarder: string;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositFor(target: string, overrides?: CallOverrides): Promise<void>;

    "depositFor(address)"(
      target: string,
      overrides?: CallOverrides
    ): Promise<void>;

    gasOverhead(overrides?: CallOverrides): Promise<BigNumber>;

    "gasOverhead()"(overrides?: CallOverrides): Promise<BigNumber>;

    gasReserve(overrides?: CallOverrides): Promise<BigNumber>;

    "gasReserve()"(overrides?: CallOverrides): Promise<BigNumber>;

    isRelayManagerStaked(
      relayManager: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isRelayManagerStaked(address)"(
      relayManager: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    maxWorkerCount(overrides?: CallOverrides): Promise<BigNumber>;

    "maxWorkerCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    maximumRecipientDeposit(overrides?: CallOverrides): Promise<BigNumber>;

    "maximumRecipientDeposit()"(overrides?: CallOverrides): Promise<BigNumber>;

    minimumStake(overrides?: CallOverrides): Promise<BigNumber>;

    "minimumStake()"(overrides?: CallOverrides): Promise<BigNumber>;

    minimumUnstakeDelay(overrides?: CallOverrides): Promise<BigNumber>;

    "minimumUnstakeDelay()"(overrides?: CallOverrides): Promise<BigNumber>;

    penalize(
      relayWorker: string,
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "penalize(address,address)"(
      relayWorker: string,
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<void>;

    penalizer(overrides?: CallOverrides): Promise<string>;

    "penalizer()"(overrides?: CallOverrides): Promise<string>;

    postOverhead(overrides?: CallOverrides): Promise<BigNumber>;

    "postOverhead()"(overrides?: CallOverrides): Promise<BigNumber>;

    registerRelayServer(
      baseRelayFee: BigNumberish,
      pctRelayFee: BigNumberish,
      url: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "registerRelayServer(uint256,uint256,string)"(
      baseRelayFee: BigNumberish,
      pctRelayFee: BigNumberish,
      url: string,
      overrides?: CallOverrides
    ): Promise<void>;

    relayCall(
      paymasterMaxAcceptanceBudget: BigNumberish,
      relayRequest: {
        request: {
          from: string;
          to: string;
          value: BigNumberish;
          gas: BigNumberish;
          nonce: BigNumberish;
          data: BytesLike;
        };
        relayData: {
          gasPrice: BigNumberish;
          pctRelayFee: BigNumberish;
          baseRelayFee: BigNumberish;
          relayWorker: string;
          paymaster: string;
          paymasterData: BytesLike;
          clientId: BigNumberish;
          forwarder: string;
        };
      },
      signature: BytesLike,
      approvalData: BytesLike,
      externalGasLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string] & { paymasterAccepted: boolean; returnValue: string }
    >;

    "relayCall(uint256,tuple,bytes,bytes,uint256)"(
      paymasterMaxAcceptanceBudget: BigNumberish,
      relayRequest: {
        request: {
          from: string;
          to: string;
          value: BigNumberish;
          gas: BigNumberish;
          nonce: BigNumberish;
          data: BytesLike;
        };
        relayData: {
          gasPrice: BigNumberish;
          pctRelayFee: BigNumberish;
          baseRelayFee: BigNumberish;
          relayWorker: string;
          paymaster: string;
          paymasterData: BytesLike;
          clientId: BigNumberish;
          forwarder: string;
        };
      },
      signature: BytesLike,
      approvalData: BytesLike,
      externalGasLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string] & { paymasterAccepted: boolean; returnValue: string }
    >;

    stakeManager(overrides?: CallOverrides): Promise<string>;

    "stakeManager()"(overrides?: CallOverrides): Promise<string>;

    versionHub(overrides?: CallOverrides): Promise<string>;

    "versionHub()"(overrides?: CallOverrides): Promise<string>;

    withdraw(
      amount: BigNumberish,
      dest: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdraw(uint256,address)"(
      amount: BigNumberish,
      dest: string,
      overrides?: CallOverrides
    ): Promise<void>;

    workerCount(manager: string, overrides?: CallOverrides): Promise<BigNumber>;

    "workerCount(address)"(
      manager: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    workerToManager(worker: string, overrides?: CallOverrides): Promise<string>;

    "workerToManager(address)"(
      worker: string,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    Deposited(
      paymaster: string | null,
      from: string | null,
      amount: null
    ): EventFilter;

    RelayServerRegistered(
      relayManager: string | null,
      baseRelayFee: null,
      pctRelayFee: null,
      relayUrl: null
    ): EventFilter;

    RelayWorkersAdded(
      relayManager: string | null,
      newRelayWorkers: null,
      workersCount: null
    ): EventFilter;

    TransactionRejectedByPaymaster(
      relayManager: string | null,
      paymaster: string | null,
      from: string | null,
      to: null,
      relayWorker: null,
      selector: null,
      innerGasUsed: null,
      reason: null
    ): EventFilter;

    TransactionRelayed(
      relayManager: string | null,
      relayWorker: string | null,
      from: string | null,
      to: null,
      paymaster: null,
      selector: null,
      status: null,
      charge: null
    ): EventFilter;

    TransactionResult(status: null, returnValue: null): EventFilter;

    Withdrawn(
      account: string | null,
      dest: string | null,
      amount: null
    ): EventFilter;
  };

  estimateGas: {
    addRelayWorkers(
      newRelayWorkers: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addRelayWorkers(address[])"(
      newRelayWorkers: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    balanceOf(target: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      target: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateCharge(
      gasUsed: BigNumberish,
      relayData: {
        gasPrice: BigNumberish;
        pctRelayFee: BigNumberish;
        baseRelayFee: BigNumberish;
        relayWorker: string;
        paymaster: string;
        paymasterData: BytesLike;
        clientId: BigNumberish;
        forwarder: string;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calculateCharge(uint256,tuple)"(
      gasUsed: BigNumberish,
      relayData: {
        gasPrice: BigNumberish;
        pctRelayFee: BigNumberish;
        baseRelayFee: BigNumberish;
        relayWorker: string;
        paymaster: string;
        paymasterData: BytesLike;
        clientId: BigNumberish;
        forwarder: string;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositFor(
      target: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "depositFor(address)"(
      target: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    gasOverhead(overrides?: CallOverrides): Promise<BigNumber>;

    "gasOverhead()"(overrides?: CallOverrides): Promise<BigNumber>;

    gasReserve(overrides?: CallOverrides): Promise<BigNumber>;

    "gasReserve()"(overrides?: CallOverrides): Promise<BigNumber>;

    isRelayManagerStaked(
      relayManager: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isRelayManagerStaked(address)"(
      relayManager: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxWorkerCount(overrides?: CallOverrides): Promise<BigNumber>;

    "maxWorkerCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    maximumRecipientDeposit(overrides?: CallOverrides): Promise<BigNumber>;

    "maximumRecipientDeposit()"(overrides?: CallOverrides): Promise<BigNumber>;

    minimumStake(overrides?: CallOverrides): Promise<BigNumber>;

    "minimumStake()"(overrides?: CallOverrides): Promise<BigNumber>;

    minimumUnstakeDelay(overrides?: CallOverrides): Promise<BigNumber>;

    "minimumUnstakeDelay()"(overrides?: CallOverrides): Promise<BigNumber>;

    penalize(
      relayWorker: string,
      beneficiary: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "penalize(address,address)"(
      relayWorker: string,
      beneficiary: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    penalizer(overrides?: CallOverrides): Promise<BigNumber>;

    "penalizer()"(overrides?: CallOverrides): Promise<BigNumber>;

    postOverhead(overrides?: CallOverrides): Promise<BigNumber>;

    "postOverhead()"(overrides?: CallOverrides): Promise<BigNumber>;

    registerRelayServer(
      baseRelayFee: BigNumberish,
      pctRelayFee: BigNumberish,
      url: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "registerRelayServer(uint256,uint256,string)"(
      baseRelayFee: BigNumberish,
      pctRelayFee: BigNumberish,
      url: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    relayCall(
      paymasterMaxAcceptanceBudget: BigNumberish,
      relayRequest: {
        request: {
          from: string;
          to: string;
          value: BigNumberish;
          gas: BigNumberish;
          nonce: BigNumberish;
          data: BytesLike;
        };
        relayData: {
          gasPrice: BigNumberish;
          pctRelayFee: BigNumberish;
          baseRelayFee: BigNumberish;
          relayWorker: string;
          paymaster: string;
          paymasterData: BytesLike;
          clientId: BigNumberish;
          forwarder: string;
        };
      },
      signature: BytesLike,
      approvalData: BytesLike,
      externalGasLimit: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "relayCall(uint256,tuple,bytes,bytes,uint256)"(
      paymasterMaxAcceptanceBudget: BigNumberish,
      relayRequest: {
        request: {
          from: string;
          to: string;
          value: BigNumberish;
          gas: BigNumberish;
          nonce: BigNumberish;
          data: BytesLike;
        };
        relayData: {
          gasPrice: BigNumberish;
          pctRelayFee: BigNumberish;
          baseRelayFee: BigNumberish;
          relayWorker: string;
          paymaster: string;
          paymasterData: BytesLike;
          clientId: BigNumberish;
          forwarder: string;
        };
      },
      signature: BytesLike,
      approvalData: BytesLike,
      externalGasLimit: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    stakeManager(overrides?: CallOverrides): Promise<BigNumber>;

    "stakeManager()"(overrides?: CallOverrides): Promise<BigNumber>;

    versionHub(overrides?: CallOverrides): Promise<BigNumber>;

    "versionHub()"(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      amount: BigNumberish,
      dest: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "withdraw(uint256,address)"(
      amount: BigNumberish,
      dest: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    workerCount(manager: string, overrides?: CallOverrides): Promise<BigNumber>;

    "workerCount(address)"(
      manager: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    workerToManager(
      worker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "workerToManager(address)"(
      worker: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addRelayWorkers(
      newRelayWorkers: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addRelayWorkers(address[])"(
      newRelayWorkers: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      target: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      target: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateCharge(
      gasUsed: BigNumberish,
      relayData: {
        gasPrice: BigNumberish;
        pctRelayFee: BigNumberish;
        baseRelayFee: BigNumberish;
        relayWorker: string;
        paymaster: string;
        paymasterData: BytesLike;
        clientId: BigNumberish;
        forwarder: string;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calculateCharge(uint256,tuple)"(
      gasUsed: BigNumberish,
      relayData: {
        gasPrice: BigNumberish;
        pctRelayFee: BigNumberish;
        baseRelayFee: BigNumberish;
        relayWorker: string;
        paymaster: string;
        paymasterData: BytesLike;
        clientId: BigNumberish;
        forwarder: string;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    depositFor(
      target: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "depositFor(address)"(
      target: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    gasOverhead(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "gasOverhead()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gasReserve(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "gasReserve()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isRelayManagerStaked(
      relayManager: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isRelayManagerStaked(address)"(
      relayManager: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxWorkerCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "maxWorkerCount()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maximumRecipientDeposit(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "maximumRecipientDeposit()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minimumStake(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "minimumStake()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minimumUnstakeDelay(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "minimumUnstakeDelay()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    penalize(
      relayWorker: string,
      beneficiary: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "penalize(address,address)"(
      relayWorker: string,
      beneficiary: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    penalizer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "penalizer()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    postOverhead(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "postOverhead()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registerRelayServer(
      baseRelayFee: BigNumberish,
      pctRelayFee: BigNumberish,
      url: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "registerRelayServer(uint256,uint256,string)"(
      baseRelayFee: BigNumberish,
      pctRelayFee: BigNumberish,
      url: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    relayCall(
      paymasterMaxAcceptanceBudget: BigNumberish,
      relayRequest: {
        request: {
          from: string;
          to: string;
          value: BigNumberish;
          gas: BigNumberish;
          nonce: BigNumberish;
          data: BytesLike;
        };
        relayData: {
          gasPrice: BigNumberish;
          pctRelayFee: BigNumberish;
          baseRelayFee: BigNumberish;
          relayWorker: string;
          paymaster: string;
          paymasterData: BytesLike;
          clientId: BigNumberish;
          forwarder: string;
        };
      },
      signature: BytesLike,
      approvalData: BytesLike,
      externalGasLimit: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "relayCall(uint256,tuple,bytes,bytes,uint256)"(
      paymasterMaxAcceptanceBudget: BigNumberish,
      relayRequest: {
        request: {
          from: string;
          to: string;
          value: BigNumberish;
          gas: BigNumberish;
          nonce: BigNumberish;
          data: BytesLike;
        };
        relayData: {
          gasPrice: BigNumberish;
          pctRelayFee: BigNumberish;
          baseRelayFee: BigNumberish;
          relayWorker: string;
          paymaster: string;
          paymasterData: BytesLike;
          clientId: BigNumberish;
          forwarder: string;
        };
      },
      signature: BytesLike,
      approvalData: BytesLike,
      externalGasLimit: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    stakeManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "stakeManager()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    versionHub(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "versionHub()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      amount: BigNumberish,
      dest: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdraw(uint256,address)"(
      amount: BigNumberish,
      dest: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    workerCount(
      manager: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "workerCount(address)"(
      manager: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    workerToManager(
      worker: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "workerToManager(address)"(
      worker: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
