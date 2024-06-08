/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface PayAsYouGoAgreementInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "agreementStatus"
      | "cancel"
      | "close"
      | "contractType"
      | "currency"
      | "employeeEnterContract"
      | "employeeId"
      | "employerAddress"
      | "employerId"
      | "paymentAddress"
      | "payments"
      | "sendPayment"
      | "setMonthlyPayments"
      | "suspend"
      | "withdrawFunds"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "PayAsYouGoPaymentMade" | "PaymentMade"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "agreementStatus",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "cancel", values?: undefined): string;
  encodeFunctionData(functionFragment: "close", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "contractType",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "currency", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "employeeEnterContract",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "employeeId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "employerAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "employerId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "paymentAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "payments",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sendPayment",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setMonthlyPayments",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "suspend", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawFunds",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "agreementStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "close", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "contractType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "currency", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "employeeEnterContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "employeeId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "employerAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "employerId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "paymentAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "payments", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sendPayment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMonthlyPayments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "suspend", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFunds",
    data: BytesLike
  ): Result;
}

export namespace PayAsYouGoPaymentMadeEvent {
  export type InputTuple = [
    employeeAddress: AddressLike,
    employerAddress: AddressLike
  ];
  export type OutputTuple = [employeeAddress: string, employerAddress: string];
  export interface OutputObject {
    employeeAddress: string;
    employerAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PaymentMadeEvent {
  export type InputTuple = [agreementAddress: AddressLike];
  export type OutputTuple = [agreementAddress: string];
  export interface OutputObject {
    agreementAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface PayAsYouGoAgreement extends BaseContract {
  connect(runner?: ContractRunner | null): PayAsYouGoAgreement;
  waitForDeployment(): Promise<this>;

  interface: PayAsYouGoAgreementInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  agreementStatus: TypedContractMethod<[], [bigint], "view">;

  cancel: TypedContractMethod<[], [void], "nonpayable">;

  close: TypedContractMethod<[], [void], "nonpayable">;

  contractType: TypedContractMethod<[], [string], "view">;

  currency: TypedContractMethod<[], [string], "view">;

  employeeEnterContract: TypedContractMethod<
    [_paymentAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  employeeId: TypedContractMethod<[], [string], "view">;

  employerAddress: TypedContractMethod<[], [string], "view">;

  employerId: TypedContractMethod<[], [string], "view">;

  paymentAddress: TypedContractMethod<[], [string], "view">;

  payments: TypedContractMethod<
    [arg0: BigNumberish],
    [[bigint, string] & { amount: bigint; payeeAddress: string }],
    "view"
  >;

  sendPayment: TypedContractMethod<[], [void], "nonpayable">;

  setMonthlyPayments: TypedContractMethod<
    [newMonthlyPayment: BigNumberish],
    [void],
    "nonpayable"
  >;

  suspend: TypedContractMethod<[], [void], "nonpayable">;

  withdrawFunds: TypedContractMethod<[], [void], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "agreementStatus"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "cancel"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "close"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "contractType"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "currency"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "employeeEnterContract"
  ): TypedContractMethod<[_paymentAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "employeeId"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "employerAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "employerId"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "paymentAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "payments"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [[bigint, string] & { amount: bigint; payeeAddress: string }],
    "view"
  >;
  getFunction(
    nameOrSignature: "sendPayment"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setMonthlyPayments"
  ): TypedContractMethod<
    [newMonthlyPayment: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "suspend"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawFunds"
  ): TypedContractMethod<[], [void], "view">;

  getEvent(
    key: "PayAsYouGoPaymentMade"
  ): TypedContractEvent<
    PayAsYouGoPaymentMadeEvent.InputTuple,
    PayAsYouGoPaymentMadeEvent.OutputTuple,
    PayAsYouGoPaymentMadeEvent.OutputObject
  >;
  getEvent(
    key: "PaymentMade"
  ): TypedContractEvent<
    PaymentMadeEvent.InputTuple,
    PaymentMadeEvent.OutputTuple,
    PaymentMadeEvent.OutputObject
  >;

  filters: {
    "PayAsYouGoPaymentMade(address,address)": TypedContractEvent<
      PayAsYouGoPaymentMadeEvent.InputTuple,
      PayAsYouGoPaymentMadeEvent.OutputTuple,
      PayAsYouGoPaymentMadeEvent.OutputObject
    >;
    PayAsYouGoPaymentMade: TypedContractEvent<
      PayAsYouGoPaymentMadeEvent.InputTuple,
      PayAsYouGoPaymentMadeEvent.OutputTuple,
      PayAsYouGoPaymentMadeEvent.OutputObject
    >;

    "PaymentMade(address)": TypedContractEvent<
      PaymentMadeEvent.InputTuple,
      PaymentMadeEvent.OutputTuple,
      PaymentMadeEvent.OutputObject
    >;
    PaymentMade: TypedContractEvent<
      PaymentMadeEvent.InputTuple,
      PaymentMadeEvent.OutputTuple,
      PaymentMadeEvent.OutputObject
    >;
  };
}
