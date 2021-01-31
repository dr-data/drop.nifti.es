/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Forwarder } from "../Forwarder";

export class Forwarder__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Forwarder> {
    return super.deploy(overrides || {}) as Promise<Forwarder>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Forwarder {
    return super.attach(address) as Forwarder;
  }
  connect(signer: Signer): Forwarder__factory {
    return super.connect(signer) as Forwarder__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Forwarder {
    return new Contract(address, _abi, signerOrProvider) as Forwarder;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "domainSeparator",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "domainValue",
        type: "bytes",
      },
    ],
    name: "DomainRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "typeHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "typeStr",
        type: "string",
      },
    ],
    name: "RequestTypeRegistered",
    type: "event",
  },
  {
    inputs: [],
    name: "EIP712_DOMAIN_TYPE",
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
    inputs: [],
    name: "GENERIC_PARAMS",
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
        name: "req",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "requestTypeHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "suffixData",
        type: "bytes",
      },
    ],
    name: "_getEncoded",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "domains",
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
    inputs: [
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
        name: "req",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "domainSeparator",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "requestTypeHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "suffixData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "ret",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
    ],
    name: "getNonce",
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
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "version",
        type: "string",
      },
    ],
    name: "registerDomainSeparator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "typeName",
        type: "string",
      },
      {
        internalType: "string",
        name: "typeSuffix",
        type: "string",
      },
    ],
    name: "registerRequestType",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "typeHashes",
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
    inputs: [
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
        name: "req",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "domainSeparator",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "requestTypeHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "suffixData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
    ],
    name: "verify",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060606040518060800160405280604a8152602001620012c3604a9139604051602001620000409190620000c8565b60408051601f1981840301815291905290506200005d8162000064565b5062000174565b8051602080830191909120600081815291829052604091829020805460ff19166001179055905181907f64d6bce64323458c44643c51fe45113efc882082f7b7fd5f09f0d69d2eedb20290620000bc9085906200010c565b60405180910390a25050565b60006e08cdee4eec2e4c8a4cae2eacae6e85608b1b82528251620000f481600f85016020870162000141565b602960f81b600f939091019283015250601001919050565b60006020825282518060208401526200012d81604085016020870162000141565b601f01601f19169190910160400192915050565b60005b838110156200015e57818101518382015260200162000144565b838111156200016e576000848401525b50505050565b61113f80620001846000396000f3fe6080604052600436106100855760003560e01c8063066a310c1461009157806321fe98df146100bc5780632d0335ab146100e9578063992d82c3146101165780639c7b459214610138578063c3f28abd14610158578063c45c26741461016d578063c722f1771461018d578063cdf5735a146101ad578063d9210be5146101ce5761008c565b3661008c57005b600080fd5b34801561009d57600080fd5b506100a66101ee565b6040516100b39190610e22565b60405180910390f35b3480156100c857600080fd5b506100dc6100d7366004610aba565b61020a565b6040516100b39190610daa565b3480156100f557600080fd5b50610109610104366004610a98565b61021f565b6040516100b3919061100e565b34801561012257600080fd5b50610136610131366004610b3a565b61023a565b005b34801561014457600080fd5b50610136610153366004610ad2565b6102c2565b34801561016457600080fd5b506100a66103a4565b34801561017957600080fd5b506100a6610188366004610bdd565b6103c0565b34801561019957600080fd5b506100dc6101a8366004610aba565b610435565b6101c06101bb366004610b3a565b61044a565b6040516100b3929190610db5565b3480156101da57600080fd5b506101366101e9366004610ad2565b6105b8565b6040518060800160405280604a815260200161106e604a913981565b60006020819052908152604090205460ff1681565b6001600160a01b031660009081526002602052604090205490565b61024387610687565b6102b987878787878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8b0181900481028201810190925289815292508991508890819084018382808284376000920191909152506106c692505050565b50505050505050565b600046905060606040518060800160405280605281526020016110b8605291398051906020012086866040516102f9929190610caf565b60405180910390208585604051610311929190610caf565b60405190819003812061032c93929186903090602001610dd8565b60408051601f198184030181528282528051602080830191909120600081815260019283905293909320805460ff1916909117905592509081907f4bc68689cbe89a4a6333a3ab0a70093874da3e5bfb71e93102027f3f073687d890610393908590610e22565b60405180910390a250505050505050565b6040518060800160405280605281526020016110b86052913981565b606082846000015185602001518660400151876060015188608001518960a00151805190602001206040516020016103fd96959493929190610d74565b60408051601f198184030181529082905261041d92918590602001610c72565b60405160208183030381529060405290509392505050565b60016020526000908152604090205460ff1681565b6000606061045789610687565b6104cd89898989898080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8d018190048102820181019092528b815292508b91508a90819084018382808284376000920191909152506106c692505050565b6104d6896107a4565b88602001516001600160a01b031689606001518a604001518b60a001518c60000151604051602001610509929190610cdb565b60408051601f198184030181529082905261052391610cbf565b600060405180830381858888f193505050503d8060008114610561576040519150601f19603f3d011682016040523d82523d6000602084013e610566565b606091505b50909250905047156105ac5788516040516001600160a01b03909116904780156108fc02916000818181858888f193505050501580156105aa573d6000803e3d6000fd5b505b97509795505050505050565b60005b838110156106325760008585838181106105d157fe5b909101356001600160f81b031916915050600560fb1b81148015906106045750602960f81b6001600160f81b0319821614155b6106295760405162461bcd60e51b815260040161062090610e9e565b60405180910390fd5b506001016105bb565b50606084846040518060800160405280604a815260200161106e604a91398585604051602001610666959493929190610d0d565b6040516020818303038152906040529050610680816107c5565b5050505050565b608081015181516001600160a01b0316600090815260026020526040902054146106c35760405162461bcd60e51b815260040161062090610ec8565b50565b60008481526001602052604090205460ff166106f45760405162461bcd60e51b815260040161062090610f69565b60008381526020819052604090205460ff166107225760405162461bcd60e51b815260040161062090610f32565b6000846107308786866103c0565b8051602091820120604051610746939201610d59565b60408051601f19818403018152919052805160209091012086519091506001600160a01b03166107768284610827565b6001600160a01b03161461079c5760405162461bcd60e51b815260040161062090610fe2565b505050505050565b516001600160a01b0316600090815260026020526040902080546001019055565b8051602080830191909120600081815291829052604091829020805460ff19166001179055905181907f64d6bce64323458c44643c51fe45113efc882082f7b7fd5f09f0d69d2eedb2029061081b908590610e22565b60405180910390a25050565b6000815160411461084a5760405162461bcd60e51b815260040161062090610e67565b60208201516040830151606084015160001a6fa2a8918ca85bafe22016d0b997e4df60600160ff1b038211156108925760405162461bcd60e51b815260040161062090610ef0565b8060ff16601b14806108a757508060ff16601c145b6108c35760405162461bcd60e51b815260040161062090610fa0565b6000600187838686604051600081526020016040526040516108e89493929190610e04565b6020604051602081039080840390855afa15801561090a573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661093d5760405162461bcd60e51b815260040161062090610e35565b93505050505b92915050565b80356001600160a01b038116811461094357600080fd5b60008083601f840112610971578182fd5b5081356001600160401b03811115610987578182fd5b60208301915083602082850101111561099f57600080fd5b9250929050565b600082601f8301126109b6578081fd5b81356001600160401b038111156109cb578182fd5b6109de601f8201601f1916602001611017565b91508082528360208285010111156109f557600080fd5b8060208401602084013760009082016020015292915050565b600060c08284031215610a1f578081fd5b610a2960c0611017565b9050610a358383610949565b8152610a448360208401610949565b602082015260408281013590820152606080830135908201526080808301359082015260a08201356001600160401b03811115610a8057600080fd5b610a8c848285016109a6565b60a08301525092915050565b600060208284031215610aa9578081fd5b610ab38383610949565b9392505050565b600060208284031215610acb578081fd5b5035919050565b60008060008060408587031215610ae7578283fd5b84356001600160401b0380821115610afd578485fd5b610b0988838901610960565b90965094506020870135915080821115610b21578384fd5b50610b2e87828801610960565b95989497509550505050565b600080600080600080600060a0888a031215610b54578283fd5b87356001600160401b0380821115610b6a578485fd5b610b768b838c01610a0e565b985060208a0135975060408a0135965060608a0135915080821115610b99578485fd5b610ba58b838c01610960565b909650945060808a0135915080821115610bbd578384fd5b50610bca8a828b01610960565b989b979a50959850939692959293505050565b600080600060608486031215610bf1578283fd5b83356001600160401b0380821115610c07578485fd5b610c1387838801610a0e565b9450602086013593506040860135915080821115610c2f578283fd5b50610c3c868287016109a6565b9150509250925092565b60008151808452610c5e81602086016020860161103d565b601f01601f19169290920160200192915050565b60008482528351610c8a81602085016020880161103d565b80830190508351610ca281602084016020880161103d565b0160200195945050505050565b6000828483379101908152919050565b60008251610cd181846020870161103d565b9190910192915050565b60008351610ced81846020880161103d565b60609390931b6001600160601b0319169190920190815260140192915050565b600085878337600560fb1b8287019081528551610d31816001840160208a0161103d565b600b60fa1b600192909101918201528385600283013790920160020191825250949350505050565b61190160f01b81526002810192909252602282015260420190565b6001600160a01b03968716815294909516602085015260408401929092526060830152608082015260a081019190915260c00190565b901515815260200190565b6000831515825260406020830152610dd06040830184610c46565b949350505050565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b93845260ff9290921660208401526040830152606082015260800190565b600060208252610ab36020830184610c46565b60208082526018908201527745434453413a20696e76616c6964207369676e617475726560401b604082015260600190565b6020808252601f908201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604082015260600190565b60208082526010908201526f696e76616c696420747970656e616d6560801b604082015260600190565b6020808252600e908201526d0dcdedcc6ca40dad2e6dac2e8c6d60931b604082015260600190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604082015261756560f01b606082015260800190565b6020808252601d908201527f756e726567697374657265642072657175657374207479706568617368000000604082015260600190565b6020808252601d908201527f756e7265676973746572656420646f6d61696e20736570617261746f72000000604082015260600190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604082015261756560f01b606082015260800190565b6020808252601290820152710e6d2cedcc2e8eae4ca40dad2e6dac2e8c6d60731b604082015260600190565b90815260200190565b6040518181016001600160401b038111828210171561103557600080fd5b604052919050565b60005b83811015611058578181015183820152602001611040565b83811115611067576000848401525b5050505056fe616464726573732066726f6d2c6164647265737320746f2c75696e743235362076616c75652c75696e74323536206761732c75696e74323536206e6f6e63652c62797465732064617461454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429a26469706673582212202a82729044604fb3deb003608992f5edf7142ef2f7ce0c6fb885ac76a4d5364664736f6c634300060c0033616464726573732066726f6d2c6164647265737320746f2c75696e743235362076616c75652c75696e74323536206761732c75696e74323536206e6f6e63652c62797465732064617461";
