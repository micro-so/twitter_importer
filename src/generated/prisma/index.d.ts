
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model TwitterImportSession
 * 
 */
export type TwitterImportSession = $Result.DefaultSelection<Prisma.$TwitterImportSessionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TwitterImportSessions
 * const twitterImportSessions = await prisma.twitterImportSession.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more TwitterImportSessions
   * const twitterImportSessions = await prisma.twitterImportSession.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.twitterImportSession`: Exposes CRUD operations for the **TwitterImportSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TwitterImportSessions
    * const twitterImportSessions = await prisma.twitterImportSession.findMany()
    * ```
    */
  get twitterImportSession(): Prisma.TwitterImportSessionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.1
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    TwitterImportSession: 'TwitterImportSession'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "twitterImportSession"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TwitterImportSession: {
        payload: Prisma.$TwitterImportSessionPayload<ExtArgs>
        fields: Prisma.TwitterImportSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TwitterImportSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwitterImportSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TwitterImportSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwitterImportSessionPayload>
          }
          findFirst: {
            args: Prisma.TwitterImportSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwitterImportSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TwitterImportSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwitterImportSessionPayload>
          }
          findMany: {
            args: Prisma.TwitterImportSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwitterImportSessionPayload>[]
          }
          create: {
            args: Prisma.TwitterImportSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwitterImportSessionPayload>
          }
          createMany: {
            args: Prisma.TwitterImportSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TwitterImportSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwitterImportSessionPayload>[]
          }
          delete: {
            args: Prisma.TwitterImportSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwitterImportSessionPayload>
          }
          update: {
            args: Prisma.TwitterImportSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwitterImportSessionPayload>
          }
          deleteMany: {
            args: Prisma.TwitterImportSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TwitterImportSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TwitterImportSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwitterImportSessionPayload>[]
          }
          upsert: {
            args: Prisma.TwitterImportSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TwitterImportSessionPayload>
          }
          aggregate: {
            args: Prisma.TwitterImportSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTwitterImportSession>
          }
          groupBy: {
            args: Prisma.TwitterImportSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TwitterImportSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TwitterImportSessionCountArgs<ExtArgs>
            result: $Utils.Optional<TwitterImportSessionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    twitterImportSession?: TwitterImportSessionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model TwitterImportSession
   */

  export type AggregateTwitterImportSession = {
    _count: TwitterImportSessionCountAggregateOutputType | null
    _min: TwitterImportSessionMinAggregateOutputType | null
    _max: TwitterImportSessionMaxAggregateOutputType | null
  }

  export type TwitterImportSessionMinAggregateOutputType = {
    sessionId: string | null
    userId: string | null
    jobId: string | null
    viewerUrl: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TwitterImportSessionMaxAggregateOutputType = {
    sessionId: string | null
    userId: string | null
    jobId: string | null
    viewerUrl: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TwitterImportSessionCountAggregateOutputType = {
    sessionId: number
    userId: number
    jobId: number
    viewerUrl: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TwitterImportSessionMinAggregateInputType = {
    sessionId?: true
    userId?: true
    jobId?: true
    viewerUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TwitterImportSessionMaxAggregateInputType = {
    sessionId?: true
    userId?: true
    jobId?: true
    viewerUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TwitterImportSessionCountAggregateInputType = {
    sessionId?: true
    userId?: true
    jobId?: true
    viewerUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TwitterImportSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TwitterImportSession to aggregate.
     */
    where?: TwitterImportSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterImportSessions to fetch.
     */
    orderBy?: TwitterImportSessionOrderByWithRelationInput | TwitterImportSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TwitterImportSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterImportSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterImportSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TwitterImportSessions
    **/
    _count?: true | TwitterImportSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TwitterImportSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TwitterImportSessionMaxAggregateInputType
  }

  export type GetTwitterImportSessionAggregateType<T extends TwitterImportSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateTwitterImportSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTwitterImportSession[P]>
      : GetScalarType<T[P], AggregateTwitterImportSession[P]>
  }




  export type TwitterImportSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TwitterImportSessionWhereInput
    orderBy?: TwitterImportSessionOrderByWithAggregationInput | TwitterImportSessionOrderByWithAggregationInput[]
    by: TwitterImportSessionScalarFieldEnum[] | TwitterImportSessionScalarFieldEnum
    having?: TwitterImportSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TwitterImportSessionCountAggregateInputType | true
    _min?: TwitterImportSessionMinAggregateInputType
    _max?: TwitterImportSessionMaxAggregateInputType
  }

  export type TwitterImportSessionGroupByOutputType = {
    sessionId: string
    userId: string
    jobId: string | null
    viewerUrl: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: TwitterImportSessionCountAggregateOutputType | null
    _min: TwitterImportSessionMinAggregateOutputType | null
    _max: TwitterImportSessionMaxAggregateOutputType | null
  }

  type GetTwitterImportSessionGroupByPayload<T extends TwitterImportSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TwitterImportSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TwitterImportSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TwitterImportSessionGroupByOutputType[P]>
            : GetScalarType<T[P], TwitterImportSessionGroupByOutputType[P]>
        }
      >
    >


  export type TwitterImportSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionId?: boolean
    userId?: boolean
    jobId?: boolean
    viewerUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["twitterImportSession"]>

  export type TwitterImportSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionId?: boolean
    userId?: boolean
    jobId?: boolean
    viewerUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["twitterImportSession"]>

  export type TwitterImportSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionId?: boolean
    userId?: boolean
    jobId?: boolean
    viewerUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["twitterImportSession"]>

  export type TwitterImportSessionSelectScalar = {
    sessionId?: boolean
    userId?: boolean
    jobId?: boolean
    viewerUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TwitterImportSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sessionId" | "userId" | "jobId" | "viewerUrl" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["twitterImportSession"]>

  export type $TwitterImportSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TwitterImportSession"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      sessionId: string
      userId: string
      jobId: string | null
      viewerUrl: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["twitterImportSession"]>
    composites: {}
  }

  type TwitterImportSessionGetPayload<S extends boolean | null | undefined | TwitterImportSessionDefaultArgs> = $Result.GetResult<Prisma.$TwitterImportSessionPayload, S>

  type TwitterImportSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TwitterImportSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TwitterImportSessionCountAggregateInputType | true
    }

  export interface TwitterImportSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TwitterImportSession'], meta: { name: 'TwitterImportSession' } }
    /**
     * Find zero or one TwitterImportSession that matches the filter.
     * @param {TwitterImportSessionFindUniqueArgs} args - Arguments to find a TwitterImportSession
     * @example
     * // Get one TwitterImportSession
     * const twitterImportSession = await prisma.twitterImportSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TwitterImportSessionFindUniqueArgs>(args: SelectSubset<T, TwitterImportSessionFindUniqueArgs<ExtArgs>>): Prisma__TwitterImportSessionClient<$Result.GetResult<Prisma.$TwitterImportSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TwitterImportSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TwitterImportSessionFindUniqueOrThrowArgs} args - Arguments to find a TwitterImportSession
     * @example
     * // Get one TwitterImportSession
     * const twitterImportSession = await prisma.twitterImportSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TwitterImportSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, TwitterImportSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TwitterImportSessionClient<$Result.GetResult<Prisma.$TwitterImportSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TwitterImportSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterImportSessionFindFirstArgs} args - Arguments to find a TwitterImportSession
     * @example
     * // Get one TwitterImportSession
     * const twitterImportSession = await prisma.twitterImportSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TwitterImportSessionFindFirstArgs>(args?: SelectSubset<T, TwitterImportSessionFindFirstArgs<ExtArgs>>): Prisma__TwitterImportSessionClient<$Result.GetResult<Prisma.$TwitterImportSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TwitterImportSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterImportSessionFindFirstOrThrowArgs} args - Arguments to find a TwitterImportSession
     * @example
     * // Get one TwitterImportSession
     * const twitterImportSession = await prisma.twitterImportSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TwitterImportSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, TwitterImportSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TwitterImportSessionClient<$Result.GetResult<Prisma.$TwitterImportSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TwitterImportSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterImportSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TwitterImportSessions
     * const twitterImportSessions = await prisma.twitterImportSession.findMany()
     * 
     * // Get first 10 TwitterImportSessions
     * const twitterImportSessions = await prisma.twitterImportSession.findMany({ take: 10 })
     * 
     * // Only select the `sessionId`
     * const twitterImportSessionWithSessionIdOnly = await prisma.twitterImportSession.findMany({ select: { sessionId: true } })
     * 
     */
    findMany<T extends TwitterImportSessionFindManyArgs>(args?: SelectSubset<T, TwitterImportSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TwitterImportSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TwitterImportSession.
     * @param {TwitterImportSessionCreateArgs} args - Arguments to create a TwitterImportSession.
     * @example
     * // Create one TwitterImportSession
     * const TwitterImportSession = await prisma.twitterImportSession.create({
     *   data: {
     *     // ... data to create a TwitterImportSession
     *   }
     * })
     * 
     */
    create<T extends TwitterImportSessionCreateArgs>(args: SelectSubset<T, TwitterImportSessionCreateArgs<ExtArgs>>): Prisma__TwitterImportSessionClient<$Result.GetResult<Prisma.$TwitterImportSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TwitterImportSessions.
     * @param {TwitterImportSessionCreateManyArgs} args - Arguments to create many TwitterImportSessions.
     * @example
     * // Create many TwitterImportSessions
     * const twitterImportSession = await prisma.twitterImportSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TwitterImportSessionCreateManyArgs>(args?: SelectSubset<T, TwitterImportSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TwitterImportSessions and returns the data saved in the database.
     * @param {TwitterImportSessionCreateManyAndReturnArgs} args - Arguments to create many TwitterImportSessions.
     * @example
     * // Create many TwitterImportSessions
     * const twitterImportSession = await prisma.twitterImportSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TwitterImportSessions and only return the `sessionId`
     * const twitterImportSessionWithSessionIdOnly = await prisma.twitterImportSession.createManyAndReturn({
     *   select: { sessionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TwitterImportSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, TwitterImportSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TwitterImportSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TwitterImportSession.
     * @param {TwitterImportSessionDeleteArgs} args - Arguments to delete one TwitterImportSession.
     * @example
     * // Delete one TwitterImportSession
     * const TwitterImportSession = await prisma.twitterImportSession.delete({
     *   where: {
     *     // ... filter to delete one TwitterImportSession
     *   }
     * })
     * 
     */
    delete<T extends TwitterImportSessionDeleteArgs>(args: SelectSubset<T, TwitterImportSessionDeleteArgs<ExtArgs>>): Prisma__TwitterImportSessionClient<$Result.GetResult<Prisma.$TwitterImportSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TwitterImportSession.
     * @param {TwitterImportSessionUpdateArgs} args - Arguments to update one TwitterImportSession.
     * @example
     * // Update one TwitterImportSession
     * const twitterImportSession = await prisma.twitterImportSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TwitterImportSessionUpdateArgs>(args: SelectSubset<T, TwitterImportSessionUpdateArgs<ExtArgs>>): Prisma__TwitterImportSessionClient<$Result.GetResult<Prisma.$TwitterImportSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TwitterImportSessions.
     * @param {TwitterImportSessionDeleteManyArgs} args - Arguments to filter TwitterImportSessions to delete.
     * @example
     * // Delete a few TwitterImportSessions
     * const { count } = await prisma.twitterImportSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TwitterImportSessionDeleteManyArgs>(args?: SelectSubset<T, TwitterImportSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TwitterImportSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterImportSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TwitterImportSessions
     * const twitterImportSession = await prisma.twitterImportSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TwitterImportSessionUpdateManyArgs>(args: SelectSubset<T, TwitterImportSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TwitterImportSessions and returns the data updated in the database.
     * @param {TwitterImportSessionUpdateManyAndReturnArgs} args - Arguments to update many TwitterImportSessions.
     * @example
     * // Update many TwitterImportSessions
     * const twitterImportSession = await prisma.twitterImportSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TwitterImportSessions and only return the `sessionId`
     * const twitterImportSessionWithSessionIdOnly = await prisma.twitterImportSession.updateManyAndReturn({
     *   select: { sessionId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TwitterImportSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, TwitterImportSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TwitterImportSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TwitterImportSession.
     * @param {TwitterImportSessionUpsertArgs} args - Arguments to update or create a TwitterImportSession.
     * @example
     * // Update or create a TwitterImportSession
     * const twitterImportSession = await prisma.twitterImportSession.upsert({
     *   create: {
     *     // ... data to create a TwitterImportSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TwitterImportSession we want to update
     *   }
     * })
     */
    upsert<T extends TwitterImportSessionUpsertArgs>(args: SelectSubset<T, TwitterImportSessionUpsertArgs<ExtArgs>>): Prisma__TwitterImportSessionClient<$Result.GetResult<Prisma.$TwitterImportSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TwitterImportSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterImportSessionCountArgs} args - Arguments to filter TwitterImportSessions to count.
     * @example
     * // Count the number of TwitterImportSessions
     * const count = await prisma.twitterImportSession.count({
     *   where: {
     *     // ... the filter for the TwitterImportSessions we want to count
     *   }
     * })
    **/
    count<T extends TwitterImportSessionCountArgs>(
      args?: Subset<T, TwitterImportSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TwitterImportSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TwitterImportSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterImportSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TwitterImportSessionAggregateArgs>(args: Subset<T, TwitterImportSessionAggregateArgs>): Prisma.PrismaPromise<GetTwitterImportSessionAggregateType<T>>

    /**
     * Group by TwitterImportSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TwitterImportSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TwitterImportSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TwitterImportSessionGroupByArgs['orderBy'] }
        : { orderBy?: TwitterImportSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TwitterImportSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTwitterImportSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TwitterImportSession model
   */
  readonly fields: TwitterImportSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TwitterImportSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TwitterImportSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TwitterImportSession model
   */
  interface TwitterImportSessionFieldRefs {
    readonly sessionId: FieldRef<"TwitterImportSession", 'String'>
    readonly userId: FieldRef<"TwitterImportSession", 'String'>
    readonly jobId: FieldRef<"TwitterImportSession", 'String'>
    readonly viewerUrl: FieldRef<"TwitterImportSession", 'String'>
    readonly status: FieldRef<"TwitterImportSession", 'String'>
    readonly createdAt: FieldRef<"TwitterImportSession", 'DateTime'>
    readonly updatedAt: FieldRef<"TwitterImportSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TwitterImportSession findUnique
   */
  export type TwitterImportSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwitterImportSession
     */
    select?: TwitterImportSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwitterImportSession
     */
    omit?: TwitterImportSessionOmit<ExtArgs> | null
    /**
     * Filter, which TwitterImportSession to fetch.
     */
    where: TwitterImportSessionWhereUniqueInput
  }

  /**
   * TwitterImportSession findUniqueOrThrow
   */
  export type TwitterImportSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwitterImportSession
     */
    select?: TwitterImportSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwitterImportSession
     */
    omit?: TwitterImportSessionOmit<ExtArgs> | null
    /**
     * Filter, which TwitterImportSession to fetch.
     */
    where: TwitterImportSessionWhereUniqueInput
  }

  /**
   * TwitterImportSession findFirst
   */
  export type TwitterImportSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwitterImportSession
     */
    select?: TwitterImportSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwitterImportSession
     */
    omit?: TwitterImportSessionOmit<ExtArgs> | null
    /**
     * Filter, which TwitterImportSession to fetch.
     */
    where?: TwitterImportSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterImportSessions to fetch.
     */
    orderBy?: TwitterImportSessionOrderByWithRelationInput | TwitterImportSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwitterImportSessions.
     */
    cursor?: TwitterImportSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterImportSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterImportSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwitterImportSessions.
     */
    distinct?: TwitterImportSessionScalarFieldEnum | TwitterImportSessionScalarFieldEnum[]
  }

  /**
   * TwitterImportSession findFirstOrThrow
   */
  export type TwitterImportSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwitterImportSession
     */
    select?: TwitterImportSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwitterImportSession
     */
    omit?: TwitterImportSessionOmit<ExtArgs> | null
    /**
     * Filter, which TwitterImportSession to fetch.
     */
    where?: TwitterImportSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterImportSessions to fetch.
     */
    orderBy?: TwitterImportSessionOrderByWithRelationInput | TwitterImportSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TwitterImportSessions.
     */
    cursor?: TwitterImportSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterImportSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterImportSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TwitterImportSessions.
     */
    distinct?: TwitterImportSessionScalarFieldEnum | TwitterImportSessionScalarFieldEnum[]
  }

  /**
   * TwitterImportSession findMany
   */
  export type TwitterImportSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwitterImportSession
     */
    select?: TwitterImportSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwitterImportSession
     */
    omit?: TwitterImportSessionOmit<ExtArgs> | null
    /**
     * Filter, which TwitterImportSessions to fetch.
     */
    where?: TwitterImportSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TwitterImportSessions to fetch.
     */
    orderBy?: TwitterImportSessionOrderByWithRelationInput | TwitterImportSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TwitterImportSessions.
     */
    cursor?: TwitterImportSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TwitterImportSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TwitterImportSessions.
     */
    skip?: number
    distinct?: TwitterImportSessionScalarFieldEnum | TwitterImportSessionScalarFieldEnum[]
  }

  /**
   * TwitterImportSession create
   */
  export type TwitterImportSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwitterImportSession
     */
    select?: TwitterImportSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwitterImportSession
     */
    omit?: TwitterImportSessionOmit<ExtArgs> | null
    /**
     * The data needed to create a TwitterImportSession.
     */
    data: XOR<TwitterImportSessionCreateInput, TwitterImportSessionUncheckedCreateInput>
  }

  /**
   * TwitterImportSession createMany
   */
  export type TwitterImportSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TwitterImportSessions.
     */
    data: TwitterImportSessionCreateManyInput | TwitterImportSessionCreateManyInput[]
  }

  /**
   * TwitterImportSession createManyAndReturn
   */
  export type TwitterImportSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwitterImportSession
     */
    select?: TwitterImportSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TwitterImportSession
     */
    omit?: TwitterImportSessionOmit<ExtArgs> | null
    /**
     * The data used to create many TwitterImportSessions.
     */
    data: TwitterImportSessionCreateManyInput | TwitterImportSessionCreateManyInput[]
  }

  /**
   * TwitterImportSession update
   */
  export type TwitterImportSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwitterImportSession
     */
    select?: TwitterImportSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwitterImportSession
     */
    omit?: TwitterImportSessionOmit<ExtArgs> | null
    /**
     * The data needed to update a TwitterImportSession.
     */
    data: XOR<TwitterImportSessionUpdateInput, TwitterImportSessionUncheckedUpdateInput>
    /**
     * Choose, which TwitterImportSession to update.
     */
    where: TwitterImportSessionWhereUniqueInput
  }

  /**
   * TwitterImportSession updateMany
   */
  export type TwitterImportSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TwitterImportSessions.
     */
    data: XOR<TwitterImportSessionUpdateManyMutationInput, TwitterImportSessionUncheckedUpdateManyInput>
    /**
     * Filter which TwitterImportSessions to update
     */
    where?: TwitterImportSessionWhereInput
    /**
     * Limit how many TwitterImportSessions to update.
     */
    limit?: number
  }

  /**
   * TwitterImportSession updateManyAndReturn
   */
  export type TwitterImportSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwitterImportSession
     */
    select?: TwitterImportSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TwitterImportSession
     */
    omit?: TwitterImportSessionOmit<ExtArgs> | null
    /**
     * The data used to update TwitterImportSessions.
     */
    data: XOR<TwitterImportSessionUpdateManyMutationInput, TwitterImportSessionUncheckedUpdateManyInput>
    /**
     * Filter which TwitterImportSessions to update
     */
    where?: TwitterImportSessionWhereInput
    /**
     * Limit how many TwitterImportSessions to update.
     */
    limit?: number
  }

  /**
   * TwitterImportSession upsert
   */
  export type TwitterImportSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwitterImportSession
     */
    select?: TwitterImportSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwitterImportSession
     */
    omit?: TwitterImportSessionOmit<ExtArgs> | null
    /**
     * The filter to search for the TwitterImportSession to update in case it exists.
     */
    where: TwitterImportSessionWhereUniqueInput
    /**
     * In case the TwitterImportSession found by the `where` argument doesn't exist, create a new TwitterImportSession with this data.
     */
    create: XOR<TwitterImportSessionCreateInput, TwitterImportSessionUncheckedCreateInput>
    /**
     * In case the TwitterImportSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TwitterImportSessionUpdateInput, TwitterImportSessionUncheckedUpdateInput>
  }

  /**
   * TwitterImportSession delete
   */
  export type TwitterImportSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwitterImportSession
     */
    select?: TwitterImportSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwitterImportSession
     */
    omit?: TwitterImportSessionOmit<ExtArgs> | null
    /**
     * Filter which TwitterImportSession to delete.
     */
    where: TwitterImportSessionWhereUniqueInput
  }

  /**
   * TwitterImportSession deleteMany
   */
  export type TwitterImportSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TwitterImportSessions to delete
     */
    where?: TwitterImportSessionWhereInput
    /**
     * Limit how many TwitterImportSessions to delete.
     */
    limit?: number
  }

  /**
   * TwitterImportSession without action
   */
  export type TwitterImportSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TwitterImportSession
     */
    select?: TwitterImportSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TwitterImportSession
     */
    omit?: TwitterImportSessionOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TwitterImportSessionScalarFieldEnum: {
    sessionId: 'sessionId',
    userId: 'userId',
    jobId: 'jobId',
    viewerUrl: 'viewerUrl',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TwitterImportSessionScalarFieldEnum = (typeof TwitterImportSessionScalarFieldEnum)[keyof typeof TwitterImportSessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type TwitterImportSessionWhereInput = {
    AND?: TwitterImportSessionWhereInput | TwitterImportSessionWhereInput[]
    OR?: TwitterImportSessionWhereInput[]
    NOT?: TwitterImportSessionWhereInput | TwitterImportSessionWhereInput[]
    sessionId?: StringFilter<"TwitterImportSession"> | string
    userId?: StringFilter<"TwitterImportSession"> | string
    jobId?: StringNullableFilter<"TwitterImportSession"> | string | null
    viewerUrl?: StringNullableFilter<"TwitterImportSession"> | string | null
    status?: StringFilter<"TwitterImportSession"> | string
    createdAt?: DateTimeFilter<"TwitterImportSession"> | Date | string
    updatedAt?: DateTimeFilter<"TwitterImportSession"> | Date | string
  }

  export type TwitterImportSessionOrderByWithRelationInput = {
    sessionId?: SortOrder
    userId?: SortOrder
    jobId?: SortOrderInput | SortOrder
    viewerUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterImportSessionWhereUniqueInput = Prisma.AtLeast<{
    sessionId?: string
    jobId?: string
    AND?: TwitterImportSessionWhereInput | TwitterImportSessionWhereInput[]
    OR?: TwitterImportSessionWhereInput[]
    NOT?: TwitterImportSessionWhereInput | TwitterImportSessionWhereInput[]
    userId?: StringFilter<"TwitterImportSession"> | string
    viewerUrl?: StringNullableFilter<"TwitterImportSession"> | string | null
    status?: StringFilter<"TwitterImportSession"> | string
    createdAt?: DateTimeFilter<"TwitterImportSession"> | Date | string
    updatedAt?: DateTimeFilter<"TwitterImportSession"> | Date | string
  }, "sessionId" | "jobId">

  export type TwitterImportSessionOrderByWithAggregationInput = {
    sessionId?: SortOrder
    userId?: SortOrder
    jobId?: SortOrderInput | SortOrder
    viewerUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TwitterImportSessionCountOrderByAggregateInput
    _max?: TwitterImportSessionMaxOrderByAggregateInput
    _min?: TwitterImportSessionMinOrderByAggregateInput
  }

  export type TwitterImportSessionScalarWhereWithAggregatesInput = {
    AND?: TwitterImportSessionScalarWhereWithAggregatesInput | TwitterImportSessionScalarWhereWithAggregatesInput[]
    OR?: TwitterImportSessionScalarWhereWithAggregatesInput[]
    NOT?: TwitterImportSessionScalarWhereWithAggregatesInput | TwitterImportSessionScalarWhereWithAggregatesInput[]
    sessionId?: StringWithAggregatesFilter<"TwitterImportSession"> | string
    userId?: StringWithAggregatesFilter<"TwitterImportSession"> | string
    jobId?: StringNullableWithAggregatesFilter<"TwitterImportSession"> | string | null
    viewerUrl?: StringNullableWithAggregatesFilter<"TwitterImportSession"> | string | null
    status?: StringWithAggregatesFilter<"TwitterImportSession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TwitterImportSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TwitterImportSession"> | Date | string
  }

  export type TwitterImportSessionCreateInput = {
    sessionId?: string
    userId: string
    jobId?: string | null
    viewerUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterImportSessionUncheckedCreateInput = {
    sessionId?: string
    userId: string
    jobId?: string | null
    viewerUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterImportSessionUpdateInput = {
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    viewerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterImportSessionUncheckedUpdateInput = {
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    viewerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterImportSessionCreateManyInput = {
    sessionId?: string
    userId: string
    jobId?: string | null
    viewerUrl?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TwitterImportSessionUpdateManyMutationInput = {
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    viewerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TwitterImportSessionUncheckedUpdateManyInput = {
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jobId?: NullableStringFieldUpdateOperationsInput | string | null
    viewerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TwitterImportSessionCountOrderByAggregateInput = {
    sessionId?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    viewerUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterImportSessionMaxOrderByAggregateInput = {
    sessionId?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    viewerUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TwitterImportSessionMinOrderByAggregateInput = {
    sessionId?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    viewerUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}