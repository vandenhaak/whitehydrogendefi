import { Buffer } from "buffer";
import { Address } from '@stellar/stellar-sdk';
import {
  AssembledTransaction,
  Client as ContractClient,
  ClientOptions as ContractClientOptions,
  Result,
  Spec as ContractSpec,
} from '@stellar/stellar-sdk/contract';
import type {
  u32,
  i32,
  u64,
  i64,
  u128,
  i128,
  u256,
  i256,
  Option,
  Typepoint,
  Duration,
} from '@stellar/stellar-sdk/contract';
export * from '@stellar/stellar-sdk'
export * as contract from '@stellar/stellar-sdk/contract'
export * as rpc from '@stellar/stellar-sdk/rpc'

if (typeof window !== 'undefined') {
  //@ts-ignore Buffer exists
  window.Buffer = window.Buffer || Buffer;
}


export const networks = {
  testnet: {
    networkPassphrase: "Test SDF Network ; September 2015",
    contractId: "CAXXXUAYLSSPDIVNEXFQGOUJBHNRM5QC6PP6GHROQFSUGSNU3NJDH5P7",
  }
} as const

export type DataKey = {tag: "Contributions", values: readonly [string]} | {tag: "Contributors", values: void} | {tag: "Token", values: void} | {tag: "ShareToken", values: void} | {tag: "IsActive", values: void} | {tag: "Admin", values: void} | {tag: "Initialized", values: void} | {tag: "Deadline", values: void};

export const Errors = {
  
}

export interface Client {
  /**
   * Construct and simulate a initialize transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.   *
   * Initialize the contract with the admin address and the deposit token contract address.
   * Deploys the share token contract and initializes it.
   * 
   * # Arguments
   * - `env` - The execution environment of the contract.
   * - `admin` - The address of the admin.
   * - `token_wasm_hash` - The hash of the token contract wasm.
   * - `token` - The address of the deposit token contract.
   */
  initialize: ({admin, token_wasm_hash, token, deadline}: {admin: string, token_wasm_hash: Buffer, token: string, deadline: i128}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<null>>

  /**
   * Construct and simulate a start_campaign transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.   *
   * Start a staking campaign
   * # Arguments
   * - `env` - The execution environment of the contract.
   * - `admin` - The address of the admin.
   */
  start_campaign: ({admin}: {admin: string}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<null>>

  /**
   * Construct and simulate a stop_campaign transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.   *
   * Stop a staking campaign
   * # Arguments
   * - `env` - The execution environment of the contract.
   * - `admin` - The address of the admin.
   * 
   */
  stop_campaign: ({admin}: {admin: string}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<null>>

  /**
   * Construct and simulate a check_campaign_status transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.   *
   * Get the status of the staking campaign
   */
  check_campaign_status: (options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<boolean>>

  /**
   * Construct and simulate a deposit transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.   *
   * Records a deposit made by a contributor if the staking is active.
   * # Arguments
   * 
   * - `env` - The execution environment of the contract.
   * - `contributor` - The address of the contributor making the contribution.
   * - `token` - The address of the token to deposit.
   * - `amount` - The amount of contribution in tokens.
   */
  deposit: ({contributor, token, amount}: {contributor: string, token: string, amount: i128}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<null>>

  /**
   * Construct and simulate a withdraw transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.   *
   * Withdraws the contribution made by a contributor if the staking is active.
   * 
   * # Arguments
   * - `env` - The execution environment of the contract.
   * - `contributor` - The address of the contributor making the contribution.
   * - `amount` - The amount of contribution in tokens.
   * - `token` - The address of the token to withdraw.
   * - `recipient` - The address of the recipient of the contribution.
   */
  withdraw: ({contributor, recipient, token}: {contributor: string, recipient: string, token: string}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<null>>

  /**
   * Construct and simulate a disbursment transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  disbursment: ({admin_address, recipient, token, amount}: {admin_address: string, recipient: string, token: string, amount: i128}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<null>>

  /**
   * Construct and simulate a clear_contributor transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.   *
   * Clear the contributor from the storage
   */
  clear_contributor: ({contributor}: {contributor: string}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<null>>

  /**
   * Construct and simulate a get_user_contribution transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  get_user_contribution: ({contributor}: {contributor: string}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<i128>>

  /**
   * Construct and simulate a set_contribution transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  set_contribution: ({contributor, amount}: {contributor: string, amount: i128}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<null>>

  /**
   * Construct and simulate a get_contributors transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  get_contributors: (options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<Array<string>>>

  /**
   * Construct and simulate a get_total_contributions transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  get_total_contributions: (options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<i128>>

  /**
   * Construct and simulate a get_share_token transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  get_share_token: (options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<string>>

  /**
   * Construct and simulate a get_share_token_balance transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  get_share_token_balance: ({user}: {user: string}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<i128>>

  /**
   * Construct and simulate a is_contributor transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  is_contributor: ({contributor}: {contributor: string}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<boolean>>

  /**
   * Construct and simulate a add_new_admin transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  add_new_admin: ({new_admin}: {new_admin: string}, options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<null>>

  /**
   * Construct and simulate a get_admin transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  get_admin: (options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<string>>

}
export class Client extends ContractClient {
  constructor(public readonly options: ContractClientOptions) {
    super(
      new ContractSpec([ "AAAAAgAAAAAAAAAAAAAAB0RhdGFLZXkAAAAACAAAAAEAAAAAAAAADUNvbnRyaWJ1dGlvbnMAAAAAAAABAAAAEwAAAAAAAAAAAAAADENvbnRyaWJ1dG9ycwAAAAAAAAAAAAAABVRva2VuAAAAAAAAAAAAAAAAAAAKU2hhcmVUb2tlbgAAAAAAAAAAAAAAAAAISXNBY3RpdmUAAAAAAAAAAAAAAAVBZG1pbgAAAAAAAAAAAAAAAAAAC0luaXRpYWxpemVkAAAAAAAAAAAAAAAACERlYWRsaW5l",
        "AAAAAAAAAWVJbml0aWFsaXplIHRoZSBjb250cmFjdCB3aXRoIHRoZSBhZG1pbiBhZGRyZXNzIGFuZCB0aGUgZGVwb3NpdCB0b2tlbiBjb250cmFjdCBhZGRyZXNzLgpEZXBsb3lzIHRoZSBzaGFyZSB0b2tlbiBjb250cmFjdCBhbmQgaW5pdGlhbGl6ZXMgaXQuCgojIEFyZ3VtZW50cwotIGBlbnZgIC0gVGhlIGV4ZWN1dGlvbiBlbnZpcm9ubWVudCBvZiB0aGUgY29udHJhY3QuCi0gYGFkbWluYCAtIFRoZSBhZGRyZXNzIG9mIHRoZSBhZG1pbi4KLSBgdG9rZW5fd2FzbV9oYXNoYCAtIFRoZSBoYXNoIG9mIHRoZSB0b2tlbiBjb250cmFjdCB3YXNtLgotIGB0b2tlbmAgLSBUaGUgYWRkcmVzcyBvZiB0aGUgZGVwb3NpdCB0b2tlbiBjb250cmFjdC4AAAAAAAAKaW5pdGlhbGl6ZQAAAAAABAAAAAAAAAAFYWRtaW4AAAAAAAATAAAAAAAAAA90b2tlbl93YXNtX2hhc2gAAAAD7gAAACAAAAAAAAAABXRva2VuAAAAAAAAEwAAAAAAAAAIZGVhZGxpbmUAAAALAAAAAA==",
        "AAAAAAAAAH9TdGFydCBhIHN0YWtpbmcgY2FtcGFpZ24KIyBBcmd1bWVudHMKLSBgZW52YCAtIFRoZSBleGVjdXRpb24gZW52aXJvbm1lbnQgb2YgdGhlIGNvbnRyYWN0LgotIGBhZG1pbmAgLSBUaGUgYWRkcmVzcyBvZiB0aGUgYWRtaW4uAAAAAA5zdGFydF9jYW1wYWlnbgAAAAAAAQAAAAAAAAAFYWRtaW4AAAAAAAATAAAAAA==",
        "AAAAAAAAAH9TdG9wIGEgc3Rha2luZyBjYW1wYWlnbgojIEFyZ3VtZW50cwotIGBlbnZgIC0gVGhlIGV4ZWN1dGlvbiBlbnZpcm9ubWVudCBvZiB0aGUgY29udHJhY3QuCi0gYGFkbWluYCAtIFRoZSBhZGRyZXNzIG9mIHRoZSBhZG1pbi4KAAAAAA1zdG9wX2NhbXBhaWduAAAAAAAAAQAAAAAAAAAFYWRtaW4AAAAAAAATAAAAAA==",
        "AAAAAAAAACZHZXQgdGhlIHN0YXR1cyBvZiB0aGUgc3Rha2luZyBjYW1wYWlnbgAAAAAAFWNoZWNrX2NhbXBhaWduX3N0YXR1cwAAAAAAAAAAAAABAAAAAQ==",
        "AAAAAAAAATFSZWNvcmRzIGEgZGVwb3NpdCBtYWRlIGJ5IGEgY29udHJpYnV0b3IgaWYgdGhlIHN0YWtpbmcgaXMgYWN0aXZlLgojIEFyZ3VtZW50cwoKLSBgZW52YCAtIFRoZSBleGVjdXRpb24gZW52aXJvbm1lbnQgb2YgdGhlIGNvbnRyYWN0LgotIGBjb250cmlidXRvcmAgLSBUaGUgYWRkcmVzcyBvZiB0aGUgY29udHJpYnV0b3IgbWFraW5nIHRoZSBjb250cmlidXRpb24uCi0gYHRva2VuYCAtIFRoZSBhZGRyZXNzIG9mIHRoZSB0b2tlbiB0byBkZXBvc2l0LgotIGBhbW91bnRgIC0gVGhlIGFtb3VudCBvZiBjb250cmlidXRpb24gaW4gdG9rZW5zLgAAAAAAAAdkZXBvc2l0AAAAAAMAAAAAAAAAC2NvbnRyaWJ1dG9yAAAAABMAAAAAAAAABXRva2VuAAAAAAAAEwAAAAAAAAAGYW1vdW50AAAAAAALAAAAAA==",
        "AAAAAAAAAX1XaXRoZHJhd3MgdGhlIGNvbnRyaWJ1dGlvbiBtYWRlIGJ5IGEgY29udHJpYnV0b3IgaWYgdGhlIHN0YWtpbmcgaXMgYWN0aXZlLgoKIyBBcmd1bWVudHMKLSBgZW52YCAtIFRoZSBleGVjdXRpb24gZW52aXJvbm1lbnQgb2YgdGhlIGNvbnRyYWN0LgotIGBjb250cmlidXRvcmAgLSBUaGUgYWRkcmVzcyBvZiB0aGUgY29udHJpYnV0b3IgbWFraW5nIHRoZSBjb250cmlidXRpb24uCi0gYGFtb3VudGAgLSBUaGUgYW1vdW50IG9mIGNvbnRyaWJ1dGlvbiBpbiB0b2tlbnMuCi0gYHRva2VuYCAtIFRoZSBhZGRyZXNzIG9mIHRoZSB0b2tlbiB0byB3aXRoZHJhdy4KLSBgcmVjaXBpZW50YCAtIFRoZSBhZGRyZXNzIG9mIHRoZSByZWNpcGllbnQgb2YgdGhlIGNvbnRyaWJ1dGlvbi4AAAAAAAAId2l0aGRyYXcAAAADAAAAAAAAAAtjb250cmlidXRvcgAAAAATAAAAAAAAAAlyZWNpcGllbnQAAAAAAAATAAAAAAAAAAV0b2tlbgAAAAAAABMAAAAA",
        "AAAAAAAAAAAAAAALZGlzYnVyc21lbnQAAAAABAAAAAAAAAANYWRtaW5fYWRkcmVzcwAAAAAAABMAAAAAAAAACXJlY2lwaWVudAAAAAAAABMAAAAAAAAABXRva2VuAAAAAAAAEwAAAAAAAAAGYW1vdW50AAAAAAALAAAAAA==",
        "AAAAAAAAACZDbGVhciB0aGUgY29udHJpYnV0b3IgZnJvbSB0aGUgc3RvcmFnZQAAAAAAEWNsZWFyX2NvbnRyaWJ1dG9yAAAAAAAAAQAAAAAAAAALY29udHJpYnV0b3IAAAAAEwAAAAA=",
        "AAAAAAAAAAAAAAAVZ2V0X3VzZXJfY29udHJpYnV0aW9uAAAAAAAAAQAAAAAAAAALY29udHJpYnV0b3IAAAAAEwAAAAEAAAAL",
        "AAAAAAAAAAAAAAAQc2V0X2NvbnRyaWJ1dGlvbgAAAAIAAAAAAAAAC2NvbnRyaWJ1dG9yAAAAABMAAAAAAAAABmFtb3VudAAAAAAACwAAAAA=",
        "AAAAAAAAAAAAAAAQZ2V0X2NvbnRyaWJ1dG9ycwAAAAAAAAABAAAD6gAAABM=",
        "AAAAAAAAAAAAAAAXZ2V0X3RvdGFsX2NvbnRyaWJ1dGlvbnMAAAAAAAAAAAEAAAAL",
        "AAAAAAAAAAAAAAAPZ2V0X3NoYXJlX3Rva2VuAAAAAAAAAAABAAAAEw==",
        "AAAAAAAAAAAAAAAXZ2V0X3NoYXJlX3Rva2VuX2JhbGFuY2UAAAAAAQAAAAAAAAAEdXNlcgAAABMAAAABAAAACw==",
        "AAAAAAAAAAAAAAAOaXNfY29udHJpYnV0b3IAAAAAAAEAAAAAAAAAC2NvbnRyaWJ1dG9yAAAAABMAAAABAAAAAQ==",
        "AAAAAAAAAAAAAAANYWRkX25ld19hZG1pbgAAAAAAAAEAAAAAAAAACW5ld19hZG1pbgAAAAAAABMAAAAA",
        "AAAAAAAAAAAAAAAJZ2V0X2FkbWluAAAAAAAAAAAAAAEAAAAT" ]),
      options
    )
  }
  public readonly fromJSON = {
    initialize: this.txFromJSON<null>,
        start_campaign: this.txFromJSON<null>,
        stop_campaign: this.txFromJSON<null>,
        check_campaign_status: this.txFromJSON<boolean>,
        deposit: this.txFromJSON<null>,
        withdraw: this.txFromJSON<null>,
        disbursment: this.txFromJSON<null>,
        clear_contributor: this.txFromJSON<null>,
        get_user_contribution: this.txFromJSON<i128>,
        set_contribution: this.txFromJSON<null>,
        get_contributors: this.txFromJSON<Array<string>>,
        get_total_contributions: this.txFromJSON<i128>,
        get_share_token: this.txFromJSON<string>,
        get_share_token_balance: this.txFromJSON<i128>,
        is_contributor: this.txFromJSON<boolean>,
        add_new_admin: this.txFromJSON<null>,
        get_admin: this.txFromJSON<string>
  }
}