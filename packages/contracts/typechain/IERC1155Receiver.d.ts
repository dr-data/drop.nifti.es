/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from 'ethers';
import { Contract, ContractTransaction, Overrides, CallOverrides } from '@ethersproject/contracts';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import { TypedEventFilter, TypedEvent, TypedListener } from './commons';

interface IERC1155ReceiverInterface extends ethers.utils.Interface {
  functions: {
    'onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)': FunctionFragment;
    'onERC1155Received(address,address,uint256,uint256,bytes)': FunctionFragment;
    'supportsInterface(bytes4)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'onERC1155BatchReceived',
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'onERC1155Received',
    values: [string, string, BigNumberish, BigNumberish, BytesLike],
  ): string;
  encodeFunctionData(functionFragment: 'supportsInterface', values: [BytesLike]): string;

  decodeFunctionResult(functionFragment: 'onERC1155BatchReceived', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'onERC1155Received', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'supportsInterface', data: BytesLike): Result;

  events: {};
}

export class IERC1155Receiver extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  listeners<T, G>(eventFilter?: TypedEventFilter<T, G>): Array<TypedListener<T, G>>;
  off<T, G>(eventFilter: TypedEventFilter<T, G>, listener: TypedListener<T, G>): this;
  on<T, G>(eventFilter: TypedEventFilter<T, G>, listener: TypedListener<T, G>): this;
  once<T, G>(eventFilter: TypedEventFilter<T, G>, listener: TypedListener<T, G>): this;
  removeListener<T, G>(eventFilter: TypedEventFilter<T, G>, listener: TypedListener<T, G>): this;
  removeAllListeners<T, G>(eventFilter: TypedEventFilter<T, G>): this;

  queryFilter<T, G>(
    event: TypedEventFilter<T, G>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEvent<T & G>>>;

  interface: IERC1155ReceiverInterface;

  functions: {
    onERC1155BatchReceived(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    'onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)'(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    onERC1155Received(
      operator: string,
      from: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    'onERC1155Received(address,address,uint256,uint256,bytes)'(
      operator: string,
      from: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    'supportsInterface(bytes4)'(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
  };

  onERC1155BatchReceived(
    operator: string,
    from: string,
    ids: BigNumberish[],
    values: BigNumberish[],
    data: BytesLike,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)'(
    operator: string,
    from: string,
    ids: BigNumberish[],
    values: BigNumberish[],
    data: BytesLike,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  onERC1155Received(
    operator: string,
    from: string,
    id: BigNumberish,
    value: BigNumberish,
    data: BytesLike,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  'onERC1155Received(address,address,uint256,uint256,bytes)'(
    operator: string,
    from: string,
    id: BigNumberish,
    value: BigNumberish,
    data: BytesLike,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  'supportsInterface(bytes4)'(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    onERC1155BatchReceived(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: CallOverrides,
    ): Promise<string>;

    'onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)'(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: CallOverrides,
    ): Promise<string>;

    onERC1155Received(
      operator: string,
      from: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides,
    ): Promise<string>;

    'onERC1155Received(address,address,uint256,uint256,bytes)'(
      operator: string,
      from: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides,
    ): Promise<string>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    'supportsInterface(bytes4)'(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    onERC1155BatchReceived(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    'onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)'(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    onERC1155Received(
      operator: string,
      from: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    'onERC1155Received(address,address,uint256,uint256,bytes)'(
      operator: string,
      from: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    'supportsInterface(bytes4)'(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    onERC1155BatchReceived(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    'onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)'(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      operator: string,
      from: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    'onERC1155Received(address,address,uint256,uint256,bytes)'(
      operator: string,
      from: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'supportsInterface(bytes4)'(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
