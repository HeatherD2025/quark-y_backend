/**
 * Client
 **/

import * as runtime from '../runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Post
 *
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>;
/**
 * Model Comment
 *
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>;
/**
 * Model Item
 *
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>;
/**
 * Model Token
 *
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent
    ) => void
  ): PrismaClient;

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
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    }
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Comments
   * const comments = await prisma.comment.findMany()
   * ```
   */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Items
   * const items = await prisma.item.findMany()
   * ```
   */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Tokens
   * const tokens = await prisma.token.findMany()
   * ```
   */
  get token(): Prisma.TokenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<
    infer U
  >
    ? U
    : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
    ? 'Please either choose `select` or `omit`.'
    : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for 'Merge' **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for 'Merge' **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: 'User';
    Post: 'Post';
    Comment: 'Comment';
    Item: 'Item';
    Token: 'Token';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps: 'user' | 'post' | 'comment' | 'item' | 'token';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>;
        fields: Prisma.PostFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[];
          };
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[];
          };
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[];
          };
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePost>;
          };
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PostGroupByOutputType>[];
          };
          count: {
            args: Prisma.PostCountArgs<ExtArgs>;
            result: $Utils.Optional<PostCountAggregateOutputType> | number;
          };
        };
      };
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>;
        fields: Prisma.CommentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[];
          };
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[];
          };
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[];
          };
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateComment>;
          };
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CommentGroupByOutputType>[];
          };
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>;
            result: $Utils.Optional<CommentCountAggregateOutputType> | number;
          };
        };
      };
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>;
        fields: Prisma.ItemFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>;
          };
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>;
          };
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[];
          };
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>;
          };
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[];
          };
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>;
          };
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>;
          };
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[];
          };
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>;
          };
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateItem>;
          };
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ItemGroupByOutputType>[];
          };
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>;
            result: $Utils.Optional<ItemCountAggregateOutputType> | number;
          };
        };
      };
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>;
        fields: Prisma.TokenFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>;
          };
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>;
          };
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[];
          };
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>;
          };
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[];
          };
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>;
          };
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>;
          };
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[];
          };
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>;
          };
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateToken>;
          };
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TokenGroupByOutputType>[];
          };
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>;
            result: $Utils.Optional<TokenCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default 'colorless'
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
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
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    post?: PostOmit;
    comment?: CommentOmit;
    item?: ItemOmit;
    token?: TokenOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<
    LogLevel | LogDefinition
  >
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
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
    | 'groupBy';

  /**
   * These options are being passed into the middleware as 'params'
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number;
    comments: number;
    Token: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs;
    comments?: boolean | UserCountOutputTypeCountCommentsArgs;
    Token?: boolean | UserCountOutputTypeCountTokenArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: PostWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: CommentWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokenArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: TokenWhereInput;
  };

  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    comments: number;
  };

  export type ItemCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    comments?: boolean | ItemCountOutputTypeCountCommentsArgs;
  };

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountCommentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: CommentWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    username: string | null;
    email: string | null;
    password: string | null;
    role: string | null;
    isAdmin: boolean | null;
    dateCreated: Date | null;
    dateUpdated: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    username: string | null;
    email: string | null;
    password: string | null;
    role: string | null;
    isAdmin: boolean | null;
    dateCreated: Date | null;
    dateUpdated: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    username: number;
    email: number;
    password: number;
    role: number;
    isAdmin: number;
    dateCreated: number;
    dateUpdated: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    username?: true;
    email?: true;
    password?: true;
    role?: true;
    isAdmin?: true;
    dateCreated?: true;
    dateUpdated?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    username?: true;
    email?: true;
    password?: true;
    role?: true;
    isAdmin?: true;
    dateCreated?: true;
    dateUpdated?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    username?: true;
    email?: true;
    password?: true;
    role?: true;
    isAdmin?: true;
    dateCreated?: true;
    dateUpdated?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    username: string;
    email: string;
    password: string;
    role: string;
    isAdmin: boolean;
    dateCreated: Date;
    dateUpdated: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      username?: boolean;
      email?: boolean;
      password?: boolean;
      role?: boolean;
      isAdmin?: boolean;
      dateCreated?: boolean;
      dateUpdated?: boolean;
      posts?: boolean | User$postsArgs<ExtArgs>;
      comments?: boolean | User$commentsArgs<ExtArgs>;
      Token?: boolean | User$TokenArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      username?: boolean;
      email?: boolean;
      password?: boolean;
      role?: boolean;
      isAdmin?: boolean;
      dateCreated?: boolean;
      dateUpdated?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      username?: boolean;
      email?: boolean;
      password?: boolean;
      role?: boolean;
      isAdmin?: boolean;
      dateCreated?: boolean;
      dateUpdated?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    username?: boolean;
    email?: boolean;
    password?: boolean;
    role?: boolean;
    isAdmin?: boolean;
    dateCreated?: boolean;
    dateUpdated?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    | 'id'
    | 'username'
    | 'email'
    | 'password'
    | 'role'
    | 'isAdmin'
    | 'dateCreated'
    | 'dateUpdated',
    ExtArgs['result']['user']
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    posts?: boolean | User$postsArgs<ExtArgs>;
    comments?: boolean | User$commentsArgs<ExtArgs>;
    Token?: boolean | User$TokenArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'User';
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[];
      comments: Prisma.$CommentPayload<ExtArgs>[];
      Token: Prisma.$TokenPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        username: string;
        email: string;
        password: string;
        role: string;
        isAdmin: boolean;
        dateCreated: Date;
        dateUpdated: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
     *       contains: 'prisma.io',
     *     },
     *   },
     *   orderBy: {
     *     age: 'asc',
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: 'by' must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field '${P}' used in 'having' needs to be provided in 'by'.`
              : [
                  Error,
                  'Field ',
                  P,
                  ` in 'having' needs to be provided in 'by'`
                ];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field '${P}' in 'orderBy' needs to be provided in 'by'`;
              }[OrderFields]
          : 'Error: If you provide 'take', you also need to provide 'orderBy''
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field '${P}' in 'orderBy' needs to be provided in 'by'`;
              }[OrderFields]
          : 'Error: If you provide 'skip', you also need to provide 'orderBy''
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field '${P}' in 'orderBy' needs to be provided in 'by'`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a 'Promise-like' for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    posts<T extends User$postsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$postsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PostPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    comments<T extends User$commentsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$commentsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CommentPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    Token<T extends User$TokenArgs<ExtArgs> = {}>(
      args?: Subset<T, User$TokenArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$TokenPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>;
    readonly username: FieldRef<'User', 'String'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly password: FieldRef<'User', 'String'>;
    readonly role: FieldRef<'User', 'String'>;
    readonly isAdmin: FieldRef<'User', 'Boolean'>;
    readonly dateCreated: FieldRef<'User', 'DateTime'>;
    readonly dateUpdated: FieldRef<'User', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.posts
   */
  export type User$postsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    where?: PostWhereInput;
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    cursor?: PostWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[];
  };

  /**
   * User.comments
   */
  export type User$commentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    where?: CommentWhereInput;
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    cursor?: CommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * User.Token
   */
  export type User$TokenArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null;
    where?: TokenWhereInput;
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[];
    cursor?: TokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null;
    _avg: PostAvgAggregateOutputType | null;
    _sum: PostSumAggregateOutputType | null;
    _min: PostMinAggregateOutputType | null;
    _max: PostMaxAggregateOutputType | null;
  };

  export type PostAvgAggregateOutputType = {
    id: number | null;
  };

  export type PostSumAggregateOutputType = {
    id: number | null;
  };

  export type PostMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    content: string | null;
    userId: string | null;
    dateCreated: Date | null;
    dateUpdated: Date | null;
  };

  export type PostMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    content: string | null;
    userId: string | null;
    dateCreated: Date | null;
    dateUpdated: Date | null;
  };

  export type PostCountAggregateOutputType = {
    id: number;
    title: number;
    content: number;
    userId: number;
    dateCreated: number;
    dateUpdated: number;
    _all: number;
  };

  export type PostAvgAggregateInputType = {
    id?: true;
  };

  export type PostSumAggregateInputType = {
    id?: true;
  };

  export type PostMinAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    userId?: true;
    dateCreated?: true;
    dateUpdated?: true;
  };

  export type PostMaxAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    userId?: true;
    dateCreated?: true;
    dateUpdated?: true;
  };

  export type PostCountAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    userId?: true;
    dateCreated?: true;
    dateUpdated?: true;
    _all?: true;
  };

  export type PostAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Posts
     **/
    _count?: true | PostCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PostAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PostSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PostMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PostMaxAggregateInputType;
  };

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
    [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>;
  };

  export type PostGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: PostWhereInput;
    orderBy?:
      | PostOrderByWithAggregationInput
      | PostOrderByWithAggregationInput[];
    by: PostScalarFieldEnum[] | PostScalarFieldEnum;
    having?: PostScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PostCountAggregateInputType | true;
    _avg?: PostAvgAggregateInputType;
    _sum?: PostSumAggregateInputType;
    _min?: PostMinAggregateInputType;
    _max?: PostMaxAggregateInputType;
  };

  export type PostGroupByOutputType = {
    id: number;
    title: string | null;
    content: string;
    userId: string;
    dateCreated: Date;
    dateUpdated: Date;
    _count: PostCountAggregateOutputType | null;
    _avg: PostAvgAggregateOutputType | null;
    _sum: PostSumAggregateOutputType | null;
    _min: PostMinAggregateOutputType | null;
    _max: PostMaxAggregateOutputType | null;
  };

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PostGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PostGroupByOutputType[P]>
          : GetScalarType<T[P], PostGroupByOutputType[P]>;
      }
    >
  >;

  export type PostSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      content?: boolean;
      userId?: boolean;
      dateCreated?: boolean;
      dateUpdated?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['post']
  >;

  export type PostSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      content?: boolean;
      userId?: boolean;
      dateCreated?: boolean;
      dateUpdated?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['post']
  >;

  export type PostSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      content?: boolean;
      userId?: boolean;
      dateCreated?: boolean;
      dateUpdated?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['post']
  >;

  export type PostSelectScalar = {
    id?: boolean;
    title?: boolean;
    content?: boolean;
    userId?: boolean;
    dateCreated?: boolean;
    dateUpdated?: boolean;
  };

  export type PostOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    'id' | 'title' | 'content' | 'userId' | 'dateCreated' | 'dateUpdated',
    ExtArgs['result']['post']
  >;
  export type PostInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type PostIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type PostIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $PostPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'Post';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        title: string | null;
        content: string;
        userId: string;
        dateCreated: Date;
        dateUpdated: Date;
      },
      ExtArgs['result']['post']
    >;
    composites: {};
  };

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> =
    $Result.GetResult<Prisma.$PostPayload, S>;

  type PostCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PostCountAggregateInputType | true;
  };

  export interface PostDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Post'];
      meta: { name: 'Post' };
    };
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(
      args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(
      args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     *
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PostFindManyArgs>(
      args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     *
     */
    create<T extends PostCreateArgs>(
      args: SelectSubset<T, PostCreateArgs<ExtArgs>>
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PostCreateManyArgs>(
      args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     *
     */
    delete<T extends PostDeleteArgs>(
      args: SelectSubset<T, PostDeleteArgs<ExtArgs>>
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PostUpdateArgs>(
      args: SelectSubset<T, PostUpdateArgs<ExtArgs>>
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PostDeleteManyArgs>(
      args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PostUpdateManyArgs>(
      args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(
      args: SelectSubset<T, PostUpsertArgs<ExtArgs>>
    ): Prisma__PostClient<
      $Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
     **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
     *       contains: 'prisma.io',
     *     },
     *   },
     *   orderBy: {
     *     age: 'asc',
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PostAggregateArgs>(
      args: Subset<T, PostAggregateArgs>
    ): Prisma.PrismaPromise<GetPostAggregateType<T>>;

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: 'by' must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field '${P}' used in 'having' needs to be provided in 'by'.`
              : [
                  Error,
                  'Field ',
                  P,
                  ` in 'having' needs to be provided in 'by'`
                ];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field '${P}' in 'orderBy' needs to be provided in 'by'`;
              }[OrderFields]
          : 'Error: If you provide 'take', you also need to provide 'orderBy''
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field '${P}' in 'orderBy' needs to be provided in 'by'`;
              }[OrderFields]
          : 'Error: If you provide 'skip', you also need to provide 'orderBy''
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field '${P}' in 'orderBy' needs to be provided in 'by'`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetPostGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Post model
     */
    readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a 'Promise-like' for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<'Post', 'Int'>;
    readonly title: FieldRef<'Post', 'String'>;
    readonly content: FieldRef<'Post', 'String'>;
    readonly userId: FieldRef<'Post', 'String'>;
    readonly dateCreated: FieldRef<'Post', 'DateTime'>;
    readonly dateUpdated: FieldRef<'Post', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput;
  };

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput;
  };

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[];
  };

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[];
  };

  /**
   * Post findMany
   */
  export type PostFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[];
  };

  /**
   * Post create
   */
  export type PostCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>;
  };

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Post update
   */
  export type PostUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>;
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput;
  };

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>;
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput;
    /**
     * Limit how many Posts to update.
     */
    limit?: number;
  };

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>;
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput;
    /**
     * Limit how many Posts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Post upsert
   */
  export type PostUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput;
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>;
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>;
  };

  /**
   * Post delete
   */
  export type PostDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput;
  };

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput;
    /**
     * Limit how many Posts to delete.
     */
    limit?: number;
  };

  /**
   * Post without action
   */
  export type PostDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
  };

  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null;
    _min: CommentMinAggregateOutputType | null;
    _max: CommentMaxAggregateOutputType | null;
  };

  export type CommentMinAggregateOutputType = {
    id: string | null;
    content: string | null;
    userId: string | null;
    articleUrl: string | null;
    articleTitle: string | null;
    dateCreated: Date | null;
    dateUpdated: Date | null;
  };

  export type CommentMaxAggregateOutputType = {
    id: string | null;
    content: string | null;
    userId: string | null;
    articleUrl: string | null;
    articleTitle: string | null;
    dateCreated: Date | null;
    dateUpdated: Date | null;
  };

  export type CommentCountAggregateOutputType = {
    id: number;
    content: number;
    userId: number;
    articleUrl: number;
    articleTitle: number;
    dateCreated: number;
    dateUpdated: number;
    _all: number;
  };

  export type CommentMinAggregateInputType = {
    id?: true;
    content?: true;
    userId?: true;
    articleUrl?: true;
    articleTitle?: true;
    dateCreated?: true;
    dateUpdated?: true;
  };

  export type CommentMaxAggregateInputType = {
    id?: true;
    content?: true;
    userId?: true;
    articleUrl?: true;
    articleTitle?: true;
    dateCreated?: true;
    dateUpdated?: true;
  };

  export type CommentCountAggregateInputType = {
    id?: true;
    content?: true;
    userId?: true;
    articleUrl?: true;
    articleTitle?: true;
    dateCreated?: true;
    dateUpdated?: true;
    _all?: true;
  };

  export type CommentAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Comments
     **/
    _count?: true | CommentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CommentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CommentMaxAggregateInputType;
  };

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
    [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>;
  };

  export type CommentGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: CommentWhereInput;
    orderBy?:
      | CommentOrderByWithAggregationInput
      | CommentOrderByWithAggregationInput[];
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum;
    having?: CommentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CommentCountAggregateInputType | true;
    _min?: CommentMinAggregateInputType;
    _max?: CommentMaxAggregateInputType;
  };

  export type CommentGroupByOutputType = {
    id: string;
    content: string;
    userId: string;
    articleUrl: string;
    articleTitle: string | null;
    dateCreated: Date;
    dateUpdated: Date;
    _count: CommentCountAggregateOutputType | null;
    _min: CommentMinAggregateOutputType | null;
    _max: CommentMaxAggregateOutputType | null;
  };

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CommentGroupByOutputType, T['by']> & {
          [P in keyof T & keyof CommentGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>;
        }
      >
    >;

  export type CommentSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      content?: boolean;
      userId?: boolean;
      articleUrl?: boolean;
      articleTitle?: boolean;
      dateCreated?: boolean;
      dateUpdated?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      article?: boolean | ItemDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['comment']
  >;

  export type CommentSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      content?: boolean;
      userId?: boolean;
      articleUrl?: boolean;
      articleTitle?: boolean;
      dateCreated?: boolean;
      dateUpdated?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      article?: boolean | ItemDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['comment']
  >;

  export type CommentSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      content?: boolean;
      userId?: boolean;
      articleUrl?: boolean;
      articleTitle?: boolean;
      dateCreated?: boolean;
      dateUpdated?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      article?: boolean | ItemDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['comment']
  >;

  export type CommentSelectScalar = {
    id?: boolean;
    content?: boolean;
    userId?: boolean;
    articleUrl?: boolean;
    articleTitle?: boolean;
    dateCreated?: boolean;
    dateUpdated?: boolean;
  };

  export type CommentOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    | 'id'
    | 'content'
    | 'userId'
    | 'articleUrl'
    | 'articleTitle'
    | 'dateCreated'
    | 'dateUpdated',
    ExtArgs['result']['comment']
  >;
  export type CommentInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    article?: boolean | ItemDefaultArgs<ExtArgs>;
  };
  export type CommentIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    article?: boolean | ItemDefaultArgs<ExtArgs>;
  };
  export type CommentIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    article?: boolean | ItemDefaultArgs<ExtArgs>;
  };

  export type $CommentPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'Comment';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      article: Prisma.$ItemPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        content: string;
        userId: string;
        articleUrl: string;
        articleTitle: string | null;
        dateCreated: Date;
        dateUpdated: Date;
      },
      ExtArgs['result']['comment']
    >;
    composites: {};
  };

  type CommentGetPayload<
    S extends boolean | null | undefined | CommentDefaultArgs
  > = $Result.GetResult<Prisma.$CommentPayload, S>;

  type CommentCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CommentCountAggregateInputType | true;
  };

  export interface CommentDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Comment'];
      meta: { name: 'Comment' };
    };
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(
      args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(
      args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     *
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CommentFindManyArgs>(
      args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     *
     */
    create<T extends CommentCreateArgs>(
      args: SelectSubset<T, CommentCreateArgs<ExtArgs>>
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CommentCreateManyArgs>(
      args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     *
     */
    delete<T extends CommentDeleteArgs>(
      args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CommentUpdateArgs>(
      args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CommentDeleteManyArgs>(
      args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CommentUpdateManyArgs>(
      args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(
      args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>
    ): Prisma__CommentClient<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
     **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
     *       contains: 'prisma.io',
     *     },
     *   },
     *   orderBy: {
     *     age: 'asc',
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CommentAggregateArgs>(
      args: Subset<T, CommentAggregateArgs>
    ): Prisma.PrismaPromise<GetCommentAggregateType<T>>;

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: 'by' must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field '${P}' used in 'having' needs to be provided in 'by'.`
              : [
                  Error,
                  'Field ',
                  P,
                  ` in 'having' needs to be provided in 'by'`
                ];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field '${P}' in 'orderBy' needs to be provided in 'by'`;
              }[OrderFields]
          : 'Error: If you provide 'take', you also need to provide 'orderBy''
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field '${P}' in 'orderBy' needs to be provided in 'by'`;
              }[OrderFields]
          : 'Error: If you provide 'skip', you also need to provide 'orderBy''
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field '${P}' in 'orderBy' needs to be provided in 'by'`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetCommentGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Comment model
     */
    readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a 'Promise-like' for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    article<T extends ItemDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ItemDefaultArgs<ExtArgs>>
    ): Prisma__ItemClient<
      | $Result.GetResult<
          Prisma.$ItemPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<'Comment', 'String'>;
    readonly content: FieldRef<'Comment', 'String'>;
    readonly userId: FieldRef<'Comment', 'String'>;
    readonly articleUrl: FieldRef<'Comment', 'String'>;
    readonly articleTitle: FieldRef<'Comment', 'String'>;
    readonly dateCreated: FieldRef<'Comment', 'DateTime'>;
    readonly dateUpdated: FieldRef<'Comment', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput;
  };

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput;
  };

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * Comment create
   */
  export type CommentCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>;
  };

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Comment update
   */
  export type CommentUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>;
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput;
  };

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>;
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput;
    /**
     * Limit how many Comments to update.
     */
    limit?: number;
  };

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>;
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput;
    /**
     * Limit how many Comments to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput;
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>;
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>;
  };

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput;
  };

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput;
    /**
     * Limit how many Comments to delete.
     */
    limit?: number;
  };

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
  };

  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null;
    _min: ItemMinAggregateOutputType | null;
    _max: ItemMaxAggregateOutputType | null;
  };

  export type ItemMinAggregateOutputType = {
    id: string | null;
    articleUrl: string | null;
  };

  export type ItemMaxAggregateOutputType = {
    id: string | null;
    articleUrl: string | null;
  };

  export type ItemCountAggregateOutputType = {
    id: number;
    articleUrl: number;
    _all: number;
  };

  export type ItemMinAggregateInputType = {
    id?: true;
    articleUrl?: true;
  };

  export type ItemMaxAggregateInputType = {
    id?: true;
    articleUrl?: true;
  };

  export type ItemCountAggregateInputType = {
    id?: true;
    articleUrl?: true;
    _all?: true;
  };

  export type ItemAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Items
     **/
    _count?: true | ItemCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ItemMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ItemMaxAggregateInputType;
  };

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
    [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>;
  };

  export type ItemGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: ItemWhereInput;
    orderBy?:
      | ItemOrderByWithAggregationInput
      | ItemOrderByWithAggregationInput[];
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum;
    having?: ItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ItemCountAggregateInputType | true;
    _min?: ItemMinAggregateInputType;
    _max?: ItemMaxAggregateInputType;
  };

  export type ItemGroupByOutputType = {
    id: string;
    articleUrl: string;
    _count: ItemCountAggregateOutputType | null;
    _min: ItemMinAggregateOutputType | null;
    _max: ItemMaxAggregateOutputType | null;
  };

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ItemGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
          : GetScalarType<T[P], ItemGroupByOutputType[P]>;
      }
    >
  >;

  export type ItemSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      articleUrl?: boolean;
      comments?: boolean | Item$commentsArgs<ExtArgs>;
      _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['item']
  >;

  export type ItemSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      articleUrl?: boolean;
    },
    ExtArgs['result']['item']
  >;

  export type ItemSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      articleUrl?: boolean;
    },
    ExtArgs['result']['item']
  >;

  export type ItemSelectScalar = {
    id?: boolean;
    articleUrl?: boolean;
  };

  export type ItemOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<'id' | 'articleUrl', ExtArgs['result']['item']>;
  export type ItemInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    comments?: boolean | Item$commentsArgs<ExtArgs>;
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type ItemIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {};
  export type ItemIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {};

  export type $ItemPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'Item';
    objects: {
      comments: Prisma.$CommentPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        articleUrl: string;
      },
      ExtArgs['result']['item']
    >;
    composites: {};
  };

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> =
    $Result.GetResult<Prisma.$ItemPayload, S>;

  type ItemCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ItemCountAggregateInputType | true;
  };

  export interface ItemDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Item'];
      meta: { name: 'Item' };
    };
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(
      args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>
    ): Prisma__ItemClient<
      $Result.GetResult<
        Prisma.$ItemPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ItemClient<
      $Result.GetResult<
        Prisma.$ItemPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(
      args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>
    ): Prisma__ItemClient<
      $Result.GetResult<
        Prisma.$ItemPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ItemClient<
      $Result.GetResult<
        Prisma.$ItemPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     *
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ItemFindManyArgs>(
      args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ItemPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     *
     */
    create<T extends ItemCreateArgs>(
      args: SelectSubset<T, ItemCreateArgs<ExtArgs>>
    ): Prisma__ItemClient<
      $Result.GetResult<
        Prisma.$ItemPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ItemCreateManyArgs>(
      args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ItemPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     *
     */
    delete<T extends ItemDeleteArgs>(
      args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>
    ): Prisma__ItemClient<
      $Result.GetResult<
        Prisma.$ItemPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ItemUpdateArgs>(
      args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>
    ): Prisma__ItemClient<
      $Result.GetResult<
        Prisma.$ItemPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ItemDeleteManyArgs>(
      args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ItemUpdateManyArgs>(
      args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ItemPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(
      args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>
    ): Prisma__ItemClient<
      $Result.GetResult<
        Prisma.$ItemPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
     **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
     *       contains: 'prisma.io',
     *     },
     *   },
     *   orderBy: {
     *     age: 'asc',
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ItemAggregateArgs>(
      args: Subset<T, ItemAggregateArgs>
    ): Prisma.PrismaPromise<GetItemAggregateType<T>>;

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
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
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: 'by' must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field '${P}' used in 'having' needs to be provided in 'by'.`
              : [
                  Error,
                  'Field ',
                  P,
                  ` in 'having' needs to be provided in 'by'`
                ];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field '${P}' in 'orderBy' needs to be provided in 'by'`;
              }[OrderFields]
          : 'Error: If you provide 'take', you also need to provide 'orderBy''
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field '${P}' in 'orderBy' needs to be provided in 'by'`;
              }[OrderFields]
          : 'Error: If you provide 'skip', you also need to provide 'orderBy''
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field '${P}' in 'orderBy' needs to be provided in 'by'`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetItemGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Item model
     */
    readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a 'Promise-like' for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    comments<T extends Item$commentsArgs<ExtArgs> = {}>(
      args?: Subset<T, Item$commentsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CommentPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id: FieldRef<'Item', 'String'>;
    readonly articleUrl: FieldRef<'Item', 'String'>;
  }

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null;
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput;
  };

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null;
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput;
  };

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null;
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[];
  };

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null;
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[];
  };

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null;
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Items.
     */
    skip?: number;
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[];
  };

  /**
   * Item create
   */
  export type ItemCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null;
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>;
  };

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Item update
   */
  export type ItemUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null;
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>;
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput;
  };

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>;
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput;
    /**
     * Limit how many Items to update.
     */
    limit?: number;
  };

  /**
   * Item updateManyAndReturn
   */
  export type ItemUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>;
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput;
    /**
     * Limit how many Items to update.
     */
    limit?: number;
  };

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null;
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput;
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>;
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>;
  };

  /**
   * Item delete
   */
  export type ItemDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null;
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput;
  };

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput;
    /**
     * Limit how many Items to delete.
     */
    limit?: number;
  };

  /**
   * Item.comments
   */
  export type Item$commentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    where?: CommentWhereInput;
    orderBy?:
      | CommentOrderByWithRelationInput
      | CommentOrderByWithRelationInput[];
    cursor?: CommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * Item without action
   */
  export type ItemDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null;
  };

  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null;
    _avg: TokenAvgAggregateOutputType | null;
    _sum: TokenSumAggregateOutputType | null;
    _min: TokenMinAggregateOutputType | null;
    _max: TokenMaxAggregateOutputType | null;
  };

  export type TokenAvgAggregateOutputType = {
    id: number | null;
  };

  export type TokenSumAggregateOutputType = {
    id: number | null;
  };

  export type TokenMinAggregateOutputType = {
    id: number | null;
    userId: string | null;
    refreshToken: string | null;
    dateAdded: Date | null;
    dateUpdated: Date | null;
  };

  export type TokenMaxAggregateOutputType = {
    id: number | null;
    userId: string | null;
    refreshToken: string | null;
    dateAdded: Date | null;
    dateUpdated: Date | null;
  };

  export type TokenCountAggregateOutputType = {
    id: number;
    userId: number;
    refreshToken: number;
    dateAdded: number;
    dateUpdated: number;
    _all: number;
  };

  export type TokenAvgAggregateInputType = {
    id?: true;
  };

  export type TokenSumAggregateInputType = {
    id?: true;
  };

  export type TokenMinAggregateInputType = {
    id?: true;
    userId?: true;
    refreshToken?: true;
    dateAdded?: true;
    dateUpdated?: true;
  };

  export type TokenMaxAggregateInputType = {
    id?: true;
    userId?: true;
    refreshToken?: true;
    dateAdded?: true;
    dateUpdated?: true;
  };

  export type TokenCountAggregateInputType = {
    id?: true;
    userId?: true;
    refreshToken?: true;
    dateAdded?: true;
    dateUpdated?: true;
    _all?: true;
  };

  export type TokenAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Tokens
     **/
    _count?: true | TokenCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: TokenAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: TokenSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TokenMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TokenMaxAggregateInputType;
  };

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
    [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>;
  };

  export type TokenGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: TokenWhereInput;
    orderBy?:
      | TokenOrderByWithAggregationInput
      | TokenOrderByWithAggregationInput[];
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum;
    having?: TokenScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TokenCountAggregateInputType | true;
    _avg?: TokenAvgAggregateInputType;
    _sum?: TokenSumAggregateInputType;
    _min?: TokenMinAggregateInputType;
    _max?: TokenMaxAggregateInputType;
  };

  export type TokenGroupByOutputType = {
    id: number;
    userId: string;
    refreshToken: string;
    dateAdded: Date;
    dateUpdated: Date;
    _count: TokenCountAggregateOutputType | null;
    _avg: TokenAvgAggregateOutputType | null;
    _sum: TokenSumAggregateOutputType | null;
    _min: TokenMinAggregateOutputType | null;
    _max: TokenMaxAggregateOutputType | null;
  };

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<TokenGroupByOutputType, T['by']> & {
          [P in keyof T & keyof TokenGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>;
        }
      >
    >;

  export type TokenSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      refreshToken?: boolean;
      dateAdded?: boolean;
      dateUpdated?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['token']
  >;

  export type TokenSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      refreshToken?: boolean;
      dateAdded?: boolean;
      dateUpdated?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['token']
  >;

  export type TokenSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      refreshToken?: boolean;
      dateAdded?: boolean;
      dateUpdated?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['token']
  >;

  export type TokenSelectScalar = {
    id?: boolean;
    userId?: boolean;
    refreshToken?: boolean;
    dateAdded?: boolean;
    dateUpdated?: boolean;
  };

  export type TokenOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    'id' | 'userId' | 'refreshToken' | 'dateAdded' | 'dateUpdated',
    ExtArgs['result']['token']
  >;
  export type TokenInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type TokenIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type TokenIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $TokenPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'Token';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        userId: string;
        refreshToken: string;
        dateAdded: Date;
        dateUpdated: Date;
      },
      ExtArgs['result']['token']
    >;
    composites: {};
  };

  type TokenGetPayload<
    S extends boolean | null | undefined | TokenDefaultArgs
  > = $Result.GetResult<Prisma.$TokenPayload, S>;

  type TokenCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TokenCountAggregateInputType | true;
  };

  export interface TokenDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Token'];
      meta: { name: 'Token' };
    };
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(
      args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>
    ): Prisma__TokenClient<
      $Result.GetResult<
        Prisma.$TokenPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TokenClient<
      $Result.GetResult<
        Prisma.$TokenPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(
      args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>
    ): Prisma__TokenClient<
      $Result.GetResult<
        Prisma.$TokenPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TokenClient<
      $Result.GetResult<
        Prisma.$TokenPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     *
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TokenFindManyArgs>(
      args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TokenPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     *
     */
    create<T extends TokenCreateArgs>(
      args: SelectSubset<T, TokenCreateArgs<ExtArgs>>
    ): Prisma__TokenClient<
      $Result.GetResult<
        Prisma.$TokenPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TokenCreateManyArgs>(
      args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(
      args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TokenPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     *
     */
    delete<T extends TokenDeleteArgs>(
      args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>
    ): Prisma__TokenClient<
      $Result.GetResult<
        Prisma.$TokenPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TokenUpdateArgs>(
      args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>
    ): Prisma__TokenClient<
      $Result.GetResult<
        Prisma.$TokenPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TokenDeleteManyArgs>(
      args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TokenUpdateManyArgs>(
      args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(
      args: SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TokenPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(
      args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>
    ): Prisma__TokenClient<
      $Result.GetResult<
        Prisma.$TokenPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
     **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
     *       contains: 'prisma.io',
     *     },
     *   },
     *   orderBy: {
     *     age: 'asc',
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TokenAggregateArgs>(
      args: Subset<T, TokenAggregateArgs>
    ): Prisma.PrismaPromise<GetTokenAggregateType<T>>;

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
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
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: 'by' must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field '${P}' used in 'having' needs to be provided in 'by'.`
              : [
                  Error,
                  'Field ',
                  P,
                  ` in 'having' needs to be provided in 'by'`
                ];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field '${P}' in 'orderBy' needs to be provided in 'by'`;
              }[OrderFields]
          : 'Error: If you provide 'take', you also need to provide 'orderBy''
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field '${P}' in 'orderBy' needs to be provided in 'by'`;
              }[OrderFields]
          : 'Error: If you provide 'skip', you also need to provide 'orderBy''
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field '${P}' in 'orderBy' needs to be provided in 'by'`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetTokenGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Token model
     */
    readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a 'Promise-like' for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Token model
   */
  interface TokenFieldRefs {
    readonly id: FieldRef<'Token', 'Int'>;
    readonly userId: FieldRef<'Token', 'String'>;
    readonly refreshToken: FieldRef<'Token', 'String'>;
    readonly dateAdded: FieldRef<'Token', 'DateTime'>;
    readonly dateUpdated: FieldRef<'Token', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null;
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput;
  };

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null;
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput;
  };

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null;
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[];
  };

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null;
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[];
  };

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null;
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tokens.
     */
    skip?: number;
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[];
  };

  /**
   * Token create
   */
  export type TokenCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null;
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>;
  };

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null;
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Token update
   */
  export type TokenUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null;
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>;
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput;
  };

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>;
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput;
    /**
     * Limit how many Tokens to update.
     */
    limit?: number;
  };

  /**
   * Token updateManyAndReturn
   */
  export type TokenUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null;
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>;
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput;
    /**
     * Limit how many Tokens to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null;
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput;
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>;
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>;
  };

  /**
   * Token delete
   */
  export type TokenDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null;
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput;
  };

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput;
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number;
  };

  /**
   * Token without action
   */
  export type TokenDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: 'id';
    username: 'username';
    email: 'email';
    password: 'password';
    role: 'role';
    isAdmin: 'isAdmin';
    dateCreated: 'dateCreated';
    dateUpdated: 'dateUpdated';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const PostScalarFieldEnum: {
    id: 'id';
    title: 'title';
    content: 'content';
    userId: 'userId';
    dateCreated: 'dateCreated';
    dateUpdated: 'dateUpdated';
  };

  export type PostScalarFieldEnum =
    (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum];

  export const CommentScalarFieldEnum: {
    id: 'id';
    content: 'content';
    userId: 'userId';
    articleUrl: 'articleUrl';
    articleTitle: 'articleTitle';
    dateCreated: 'dateCreated';
    dateUpdated: 'dateUpdated';
  };

  export type CommentScalarFieldEnum =
    (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum];

  export const ItemScalarFieldEnum: {
    id: 'id';
    articleUrl: 'articleUrl';
  };

  export type ItemScalarFieldEnum =
    (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum];

  export const TokenScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    refreshToken: 'refreshToken';
    dateAdded: 'dateAdded';
    dateUpdated: 'dateUpdated';
  };

  export type TokenScalarFieldEnum =
    (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<'User'> | string;
    username?: StringFilter<'User'> | string;
    email?: StringFilter<'User'> | string;
    password?: StringFilter<'User'> | string;
    role?: StringFilter<'User'> | string;
    isAdmin?: BoolFilter<'User'> | boolean;
    dateCreated?: DateTimeFilter<'User'> | Date | string;
    dateUpdated?: DateTimeFilter<'User'> | Date | string;
    posts?: PostListRelationFilter;
    comments?: CommentListRelationFilter;
    Token?: TokenListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    username?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    isAdmin?: SortOrder;
    dateCreated?: SortOrder;
    dateUpdated?: SortOrder;
    posts?: PostOrderByRelationAggregateInput;
    comments?: CommentOrderByRelationAggregateInput;
    Token?: TokenOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      username?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      password?: StringFilter<'User'> | string;
      role?: StringFilter<'User'> | string;
      isAdmin?: BoolFilter<'User'> | boolean;
      dateCreated?: DateTimeFilter<'User'> | Date | string;
      dateUpdated?: DateTimeFilter<'User'> | Date | string;
      posts?: PostListRelationFilter;
      comments?: CommentListRelationFilter;
      Token?: TokenListRelationFilter;
    },
    'id' | 'username' | 'email'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    username?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    isAdmin?: SortOrder;
    dateCreated?: SortOrder;
    dateUpdated?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'User'> | string;
    username?: StringWithAggregatesFilter<'User'> | string;
    email?: StringWithAggregatesFilter<'User'> | string;
    password?: StringWithAggregatesFilter<'User'> | string;
    role?: StringWithAggregatesFilter<'User'> | string;
    isAdmin?: BoolWithAggregatesFilter<'User'> | boolean;
    dateCreated?: DateTimeWithAggregatesFilter<'User'> | Date | string;
    dateUpdated?: DateTimeWithAggregatesFilter<'User'> | Date | string;
  };

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[];
    OR?: PostWhereInput[];
    NOT?: PostWhereInput | PostWhereInput[];
    id?: IntFilter<'Post'> | number;
    title?: StringNullableFilter<'Post'> | string | null;
    content?: StringFilter<'Post'> | string;
    userId?: StringFilter<'Post'> | string;
    dateCreated?: DateTimeFilter<'Post'> | Date | string;
    dateUpdated?: DateTimeFilter<'Post'> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type PostOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrderInput | SortOrder;
    content?: SortOrder;
    userId?: SortOrder;
    dateCreated?: SortOrder;
    dateUpdated?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type PostWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: PostWhereInput | PostWhereInput[];
      OR?: PostWhereInput[];
      NOT?: PostWhereInput | PostWhereInput[];
      title?: StringNullableFilter<'Post'> | string | null;
      content?: StringFilter<'Post'> | string;
      userId?: StringFilter<'Post'> | string;
      dateCreated?: DateTimeFilter<'Post'> | Date | string;
      dateUpdated?: DateTimeFilter<'Post'> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id'
  >;

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrderInput | SortOrder;
    content?: SortOrder;
    userId?: SortOrder;
    dateCreated?: SortOrder;
    dateUpdated?: SortOrder;
    _count?: PostCountOrderByAggregateInput;
    _avg?: PostAvgOrderByAggregateInput;
    _max?: PostMaxOrderByAggregateInput;
    _min?: PostMinOrderByAggregateInput;
    _sum?: PostSumOrderByAggregateInput;
  };

  export type PostScalarWhereWithAggregatesInput = {
    AND?:
      | PostScalarWhereWithAggregatesInput
      | PostScalarWhereWithAggregatesInput[];
    OR?: PostScalarWhereWithAggregatesInput[];
    NOT?:
      | PostScalarWhereWithAggregatesInput
      | PostScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Post'> | number;
    title?: StringNullableWithAggregatesFilter<'Post'> | string | null;
    content?: StringWithAggregatesFilter<'Post'> | string;
    userId?: StringWithAggregatesFilter<'Post'> | string;
    dateCreated?: DateTimeWithAggregatesFilter<'Post'> | Date | string;
    dateUpdated?: DateTimeWithAggregatesFilter<'Post'> | Date | string;
  };

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[];
    OR?: CommentWhereInput[];
    NOT?: CommentWhereInput | CommentWhereInput[];
    id?: StringFilter<'Comment'> | string;
    content?: StringFilter<'Comment'> | string;
    userId?: StringFilter<'Comment'> | string;
    articleUrl?: StringFilter<'Comment'> | string;
    articleTitle?: StringNullableFilter<'Comment'> | string | null;
    dateCreated?: DateTimeFilter<'Comment'> | Date | string;
    dateUpdated?: DateTimeFilter<'Comment'> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    article?: XOR<ItemScalarRelationFilter, ItemWhereInput>;
  };

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder;
    content?: SortOrder;
    userId?: SortOrder;
    articleUrl?: SortOrder;
    articleTitle?: SortOrderInput | SortOrder;
    dateCreated?: SortOrder;
    dateUpdated?: SortOrder;
    user?: UserOrderByWithRelationInput;
    article?: ItemOrderByWithRelationInput;
  };

  export type CommentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: CommentWhereInput | CommentWhereInput[];
      OR?: CommentWhereInput[];
      NOT?: CommentWhereInput | CommentWhereInput[];
      content?: StringFilter<'Comment'> | string;
      userId?: StringFilter<'Comment'> | string;
      articleUrl?: StringFilter<'Comment'> | string;
      articleTitle?: StringNullableFilter<'Comment'> | string | null;
      dateCreated?: DateTimeFilter<'Comment'> | Date | string;
      dateUpdated?: DateTimeFilter<'Comment'> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      article?: XOR<ItemScalarRelationFilter, ItemWhereInput>;
    },
    'id'
  >;

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder;
    content?: SortOrder;
    userId?: SortOrder;
    articleUrl?: SortOrder;
    articleTitle?: SortOrderInput | SortOrder;
    dateCreated?: SortOrder;
    dateUpdated?: SortOrder;
    _count?: CommentCountOrderByAggregateInput;
    _max?: CommentMaxOrderByAggregateInput;
    _min?: CommentMinOrderByAggregateInput;
  };

  export type CommentScalarWhereWithAggregatesInput = {
    AND?:
      | CommentScalarWhereWithAggregatesInput
      | CommentScalarWhereWithAggregatesInput[];
    OR?: CommentScalarWhereWithAggregatesInput[];
    NOT?:
      | CommentScalarWhereWithAggregatesInput
      | CommentScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Comment'> | string;
    content?: StringWithAggregatesFilter<'Comment'> | string;
    userId?: StringWithAggregatesFilter<'Comment'> | string;
    articleUrl?: StringWithAggregatesFilter<'Comment'> | string;
    articleTitle?:
      | StringNullableWithAggregatesFilter<'Comment'>
      | string
      | null;
    dateCreated?: DateTimeWithAggregatesFilter<'Comment'> | Date | string;
    dateUpdated?: DateTimeWithAggregatesFilter<'Comment'> | Date | string;
  };

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[];
    OR?: ItemWhereInput[];
    NOT?: ItemWhereInput | ItemWhereInput[];
    id?: StringFilter<'Item'> | string;
    articleUrl?: StringFilter<'Item'> | string;
    comments?: CommentListRelationFilter;
  };

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder;
    articleUrl?: SortOrder;
    comments?: CommentOrderByRelationAggregateInput;
  };

  export type ItemWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      articleUrl?: string;
      AND?: ItemWhereInput | ItemWhereInput[];
      OR?: ItemWhereInput[];
      NOT?: ItemWhereInput | ItemWhereInput[];
      comments?: CommentListRelationFilter;
    },
    'id' | 'articleUrl'
  >;

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder;
    articleUrl?: SortOrder;
    _count?: ItemCountOrderByAggregateInput;
    _max?: ItemMaxOrderByAggregateInput;
    _min?: ItemMinOrderByAggregateInput;
  };

  export type ItemScalarWhereWithAggregatesInput = {
    AND?:
      | ItemScalarWhereWithAggregatesInput
      | ItemScalarWhereWithAggregatesInput[];
    OR?: ItemScalarWhereWithAggregatesInput[];
    NOT?:
      | ItemScalarWhereWithAggregatesInput
      | ItemScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Item'> | string;
    articleUrl?: StringWithAggregatesFilter<'Item'> | string;
  };

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[];
    OR?: TokenWhereInput[];
    NOT?: TokenWhereInput | TokenWhereInput[];
    id?: IntFilter<'Token'> | number;
    userId?: StringFilter<'Token'> | string;
    refreshToken?: StringFilter<'Token'> | string;
    dateAdded?: DateTimeFilter<'Token'> | Date | string;
    dateUpdated?: DateTimeFilter<'Token'> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    refreshToken?: SortOrder;
    dateAdded?: SortOrder;
    dateUpdated?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type TokenWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: TokenWhereInput | TokenWhereInput[];
      OR?: TokenWhereInput[];
      NOT?: TokenWhereInput | TokenWhereInput[];
      userId?: StringFilter<'Token'> | string;
      refreshToken?: StringFilter<'Token'> | string;
      dateAdded?: DateTimeFilter<'Token'> | Date | string;
      dateUpdated?: DateTimeFilter<'Token'> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id'
  >;

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    refreshToken?: SortOrder;
    dateAdded?: SortOrder;
    dateUpdated?: SortOrder;
    _count?: TokenCountOrderByAggregateInput;
    _avg?: TokenAvgOrderByAggregateInput;
    _max?: TokenMaxOrderByAggregateInput;
    _min?: TokenMinOrderByAggregateInput;
    _sum?: TokenSumOrderByAggregateInput;
  };

  export type TokenScalarWhereWithAggregatesInput = {
    AND?:
      | TokenScalarWhereWithAggregatesInput
      | TokenScalarWhereWithAggregatesInput[];
    OR?: TokenScalarWhereWithAggregatesInput[];
    NOT?:
      | TokenScalarWhereWithAggregatesInput
      | TokenScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Token'> | number;
    userId?: StringWithAggregatesFilter<'Token'> | string;
    refreshToken?: StringWithAggregatesFilter<'Token'> | string;
    dateAdded?: DateTimeWithAggregatesFilter<'Token'> | Date | string;
    dateUpdated?: DateTimeWithAggregatesFilter<'Token'> | Date | string;
  };

  export type UserCreateInput = {
    id?: string;
    username: string;
    email: string;
    password: string;
    role?: string;
    isAdmin?: boolean;
    dateCreated?: Date | string;
    dateUpdated?: Date | string;
    posts?: PostCreateNestedManyWithoutUserInput;
    comments?: CommentCreateNestedManyWithoutUserInput;
    Token?: TokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    username: string;
    email: string;
    password: string;
    role?: string;
    isAdmin?: boolean;
    dateCreated?: Date | string;
    dateUpdated?: Date | string;
    posts?: PostUncheckedCreateNestedManyWithoutUserInput;
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput;
    Token?: TokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    isAdmin?: BoolFieldUpdateOperationsInput | boolean;
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUpdateManyWithoutUserNestedInput;
    comments?: CommentUpdateManyWithoutUserNestedInput;
    Token?: TokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    isAdmin?: BoolFieldUpdateOperationsInput | boolean;
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput;
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput;
    Token?: TokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    username: string;
    email: string;
    password: string;
    role?: string;
    isAdmin?: boolean;
    dateCreated?: Date | string;
    dateUpdated?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    isAdmin?: BoolFieldUpdateOperationsInput | boolean;
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    isAdmin?: BoolFieldUpdateOperationsInput | boolean;
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PostCreateInput = {
    title?: string | null;
    content: string;
    dateCreated?: Date | string;
    dateUpdated?: Date | string;
    user: UserCreateNestedOneWithoutPostsInput;
  };

  export type PostUncheckedCreateInput = {
    id?: number;
    title?: string | null;
    content: string;
    userId: string;
    dateCreated?: Date | string;
    dateUpdated?: Date | string;
  };

  export type PostUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: StringFieldUpdateOperationsInput | string;
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutPostsNestedInput;
  };

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PostCreateManyInput = {
    id?: number;
    title?: string | null;
    content: string;
    userId: string;
    dateCreated?: Date | string;
    dateUpdated?: Date | string;
  };

  export type PostUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: StringFieldUpdateOperationsInput | string;
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentCreateInput = {
    id?: string;
    content: string;
    articleTitle?: string | null;
    dateCreated?: Date | string;
    dateUpdated?: Date | string;
    user: UserCreateNestedOneWithoutCommentsInput;
    article: ItemCreateNestedOneWithoutCommentsInput;
  };

  export type CommentUncheckedCreateInput = {
    id?: string;
    content: string;
    userId: string;
    articleUrl: string;
    articleTitle?: string | null;
    dateCreated?: Date | string;
    dateUpdated?: Date | string;
  };

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    articleTitle?: NullableStringFieldUpdateOperationsInput | string | null;
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput;
    article?: ItemUpdateOneRequiredWithoutCommentsNestedInput;
  };

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    articleUrl?: StringFieldUpdateOperationsInput | string;
    articleTitle?: NullableStringFieldUpdateOperationsInput | string | null;
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentCreateManyInput = {
    id?: string;
    content: string;
    userId: string;
    articleUrl: string;
    articleTitle?: string | null;
    dateCreated?: Date | string;
    dateUpdated?: Date | string;
  };

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    articleTitle?: NullableStringFieldUpdateOperationsInput | string | null;
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    articleUrl?: StringFieldUpdateOperationsInput | string;
    articleTitle?: NullableStringFieldUpdateOperationsInput | string | null;
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ItemCreateInput = {
    id?: string;
    articleUrl: string;
    comments?: CommentCreateNestedManyWithoutArticleInput;
  };

  export type ItemUncheckedCreateInput = {
    id?: string;
    articleUrl: string;
    comments?: CommentUncheckedCreateNestedManyWithoutArticleInput;
  };

  export type ItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    articleUrl?: StringFieldUpdateOperationsInput | string;
    comments?: CommentUpdateManyWithoutArticleNestedInput;
  };

  export type ItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    articleUrl?: StringFieldUpdateOperationsInput | string;
    comments?: CommentUncheckedUpdateManyWithoutArticleNestedInput;
  };

  export type ItemCreateManyInput = {
    id?: string;
    articleUrl: string;
  };

  export type ItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    articleUrl?: StringFieldUpdateOperationsInput | string;
  };

  export type ItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    articleUrl?: StringFieldUpdateOperationsInput | string;
  };

  export type TokenCreateInput = {
    refreshToken: string;
    dateAdded?: Date | string;
    dateUpdated?: Date | string;
    user: UserCreateNestedOneWithoutTokenInput;
  };

  export type TokenUncheckedCreateInput = {
    id?: number;
    userId: string;
    refreshToken: string;
    dateAdded?: Date | string;
    dateUpdated?: Date | string;
  };

  export type TokenUpdateInput = {
    refreshToken?: StringFieldUpdateOperationsInput | string;
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutTokenNestedInput;
  };

  export type TokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    userId?: StringFieldUpdateOperationsInput | string;
    refreshToken?: StringFieldUpdateOperationsInput | string;
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TokenCreateManyInput = {
    id?: number;
    userId: string;
    refreshToken: string;
    dateAdded?: Date | string;
    dateUpdated?: Date | string;
  };

  export type TokenUpdateManyMutationInput = {
    refreshToken?: StringFieldUpdateOperationsInput | string;
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    userId?: StringFieldUpdateOperationsInput | string;
    refreshToken?: StringFieldUpdateOperationsInput | string;
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type PostListRelationFilter = {
    every?: PostWhereInput;
    some?: PostWhereInput;
    none?: PostWhereInput;
  };

  export type CommentListRelationFilter = {
    every?: CommentWhereInput;
    some?: CommentWhereInput;
    none?: CommentWhereInput;
  };

  export type TokenListRelationFilter = {
    every?: TokenWhereInput;
    some?: TokenWhereInput;
    none?: TokenWhereInput;
  };

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    username?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    isAdmin?: SortOrder;
    dateCreated?: SortOrder;
    dateUpdated?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    username?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    isAdmin?: SortOrder;
    dateCreated?: SortOrder;
    dateUpdated?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    username?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    role?: SortOrder;
    isAdmin?: SortOrder;
    dateCreated?: SortOrder;
    dateUpdated?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    userId?: SortOrder;
    dateCreated?: SortOrder;
    dateUpdated?: SortOrder;
  };

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    userId?: SortOrder;
    dateCreated?: SortOrder;
    dateUpdated?: SortOrder;
  };

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    userId?: SortOrder;
    dateCreated?: SortOrder;
    dateUpdated?: SortOrder;
  };

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput;
    isNot?: ItemWhereInput;
  };

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    userId?: SortOrder;
    articleUrl?: SortOrder;
    articleTitle?: SortOrder;
    dateCreated?: SortOrder;
    dateUpdated?: SortOrder;
  };

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    userId?: SortOrder;
    articleUrl?: SortOrder;
    articleTitle?: SortOrder;
    dateCreated?: SortOrder;
    dateUpdated?: SortOrder;
  };

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    userId?: SortOrder;
    articleUrl?: SortOrder;
    articleTitle?: SortOrder;
    dateCreated?: SortOrder;
    dateUpdated?: SortOrder;
  };

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder;
    articleUrl?: SortOrder;
  };

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder;
    articleUrl?: SortOrder;
  };

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder;
    articleUrl?: SortOrder;
  };

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    refreshToken?: SortOrder;
    dateAdded?: SortOrder;
    dateUpdated?: SortOrder;
  };

  export type TokenAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    refreshToken?: SortOrder;
    dateAdded?: SortOrder;
    dateUpdated?: SortOrder;
  };

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    refreshToken?: SortOrder;
    dateAdded?: SortOrder;
    dateUpdated?: SortOrder;
  };

  export type TokenSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type PostCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
      | PostCreateWithoutUserInput[]
      | PostUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutUserInput
      | PostCreateOrConnectWithoutUserInput[];
    createMany?: PostCreateManyUserInputEnvelope;
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
  };

  export type CommentCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          CommentCreateWithoutUserInput,
          CommentUncheckedCreateWithoutUserInput
        >
      | CommentCreateWithoutUserInput[]
      | CommentUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutUserInput
      | CommentCreateOrConnectWithoutUserInput[];
    createMany?: CommentCreateManyUserInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type TokenCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
      | TokenCreateWithoutUserInput[]
      | TokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | TokenCreateOrConnectWithoutUserInput
      | TokenCreateOrConnectWithoutUserInput[];
    createMany?: TokenCreateManyUserInputEnvelope;
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[];
  };

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
      | PostCreateWithoutUserInput[]
      | PostUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutUserInput
      | PostCreateOrConnectWithoutUserInput[];
    createMany?: PostCreateManyUserInputEnvelope;
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
  };

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          CommentCreateWithoutUserInput,
          CommentUncheckedCreateWithoutUserInput
        >
      | CommentCreateWithoutUserInput[]
      | CommentUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutUserInput
      | CommentCreateOrConnectWithoutUserInput[];
    createMany?: CommentCreateManyUserInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type TokenUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
      | TokenCreateWithoutUserInput[]
      | TokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | TokenCreateOrConnectWithoutUserInput
      | TokenCreateOrConnectWithoutUserInput[];
    createMany?: TokenCreateManyUserInputEnvelope;
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type PostUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
      | PostCreateWithoutUserInput[]
      | PostUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutUserInput
      | PostCreateOrConnectWithoutUserInput[];
    upsert?:
      | PostUpsertWithWhereUniqueWithoutUserInput
      | PostUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: PostCreateManyUserInputEnvelope;
    set?: PostWhereUniqueInput | PostWhereUniqueInput[];
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[];
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    update?:
      | PostUpdateWithWhereUniqueWithoutUserInput
      | PostUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | PostUpdateManyWithWhereWithoutUserInput
      | PostUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[];
  };

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          CommentCreateWithoutUserInput,
          CommentUncheckedCreateWithoutUserInput
        >
      | CommentCreateWithoutUserInput[]
      | CommentUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutUserInput
      | CommentCreateOrConnectWithoutUserInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutUserInput
      | CommentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: CommentCreateManyUserInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutUserInput
      | CommentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutUserInput
      | CommentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type TokenUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
      | TokenCreateWithoutUserInput[]
      | TokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | TokenCreateOrConnectWithoutUserInput
      | TokenCreateOrConnectWithoutUserInput[];
    upsert?:
      | TokenUpsertWithWhereUniqueWithoutUserInput
      | TokenUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: TokenCreateManyUserInputEnvelope;
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[];
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[];
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[];
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[];
    update?:
      | TokenUpdateWithWhereUniqueWithoutUserInput
      | TokenUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | TokenUpdateManyWithWhereWithoutUserInput
      | TokenUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[];
  };

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
      | PostCreateWithoutUserInput[]
      | PostUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutUserInput
      | PostCreateOrConnectWithoutUserInput[];
    upsert?:
      | PostUpsertWithWhereUniqueWithoutUserInput
      | PostUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: PostCreateManyUserInputEnvelope;
    set?: PostWhereUniqueInput | PostWhereUniqueInput[];
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[];
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    update?:
      | PostUpdateWithWhereUniqueWithoutUserInput
      | PostUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | PostUpdateManyWithWhereWithoutUserInput
      | PostUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[];
  };

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          CommentCreateWithoutUserInput,
          CommentUncheckedCreateWithoutUserInput
        >
      | CommentCreateWithoutUserInput[]
      | CommentUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutUserInput
      | CommentCreateOrConnectWithoutUserInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutUserInput
      | CommentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: CommentCreateManyUserInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutUserInput
      | CommentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutUserInput
      | CommentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type TokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
      | TokenCreateWithoutUserInput[]
      | TokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | TokenCreateOrConnectWithoutUserInput
      | TokenCreateOrConnectWithoutUserInput[];
    upsert?:
      | TokenUpsertWithWhereUniqueWithoutUserInput
      | TokenUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: TokenCreateManyUserInputEnvelope;
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[];
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[];
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[];
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[];
    update?:
      | TokenUpdateWithWhereUniqueWithoutUserInput
      | TokenUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | TokenUpdateManyWithWhereWithoutUserInput
      | TokenUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<
      UserCreateWithoutPostsInput,
      UserUncheckedCreateWithoutPostsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput;
    connect?: UserWhereUniqueInput;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<
      UserCreateWithoutPostsInput,
      UserUncheckedCreateWithoutPostsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput;
    upsert?: UserUpsertWithoutPostsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutPostsInput,
        UserUpdateWithoutPostsInput
      >,
      UserUncheckedUpdateWithoutPostsInput
    >;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<
      UserCreateWithoutCommentsInput,
      UserUncheckedCreateWithoutCommentsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput;
    connect?: UserWhereUniqueInput;
  };

  export type ItemCreateNestedOneWithoutCommentsInput = {
    create?: XOR<
      ItemCreateWithoutCommentsInput,
      ItemUncheckedCreateWithoutCommentsInput
    >;
    connectOrCreate?: ItemCreateOrConnectWithoutCommentsInput;
    connect?: ItemWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<
      UserCreateWithoutCommentsInput,
      UserUncheckedCreateWithoutCommentsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput;
    upsert?: UserUpsertWithoutCommentsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutCommentsInput,
        UserUpdateWithoutCommentsInput
      >,
      UserUncheckedUpdateWithoutCommentsInput
    >;
  };

  export type ItemUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<
      ItemCreateWithoutCommentsInput,
      ItemUncheckedCreateWithoutCommentsInput
    >;
    connectOrCreate?: ItemCreateOrConnectWithoutCommentsInput;
    upsert?: ItemUpsertWithoutCommentsInput;
    connect?: ItemWhereUniqueInput;
    update?: XOR<
      XOR<
        ItemUpdateToOneWithWhereWithoutCommentsInput,
        ItemUpdateWithoutCommentsInput
      >,
      ItemUncheckedUpdateWithoutCommentsInput
    >;
  };

  export type CommentCreateNestedManyWithoutArticleInput = {
    create?:
      | XOR<
          CommentCreateWithoutArticleInput,
          CommentUncheckedCreateWithoutArticleInput
        >
      | CommentCreateWithoutArticleInput[]
      | CommentUncheckedCreateWithoutArticleInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutArticleInput
      | CommentCreateOrConnectWithoutArticleInput[];
    createMany?: CommentCreateManyArticleInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type CommentUncheckedCreateNestedManyWithoutArticleInput = {
    create?:
      | XOR<
          CommentCreateWithoutArticleInput,
          CommentUncheckedCreateWithoutArticleInput
        >
      | CommentCreateWithoutArticleInput[]
      | CommentUncheckedCreateWithoutArticleInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutArticleInput
      | CommentCreateOrConnectWithoutArticleInput[];
    createMany?: CommentCreateManyArticleInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type CommentUpdateManyWithoutArticleNestedInput = {
    create?:
      | XOR<
          CommentCreateWithoutArticleInput,
          CommentUncheckedCreateWithoutArticleInput
        >
      | CommentCreateWithoutArticleInput[]
      | CommentUncheckedCreateWithoutArticleInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutArticleInput
      | CommentCreateOrConnectWithoutArticleInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutArticleInput
      | CommentUpsertWithWhereUniqueWithoutArticleInput[];
    createMany?: CommentCreateManyArticleInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutArticleInput
      | CommentUpdateWithWhereUniqueWithoutArticleInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutArticleInput
      | CommentUpdateManyWithWhereWithoutArticleInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type CommentUncheckedUpdateManyWithoutArticleNestedInput = {
    create?:
      | XOR<
          CommentCreateWithoutArticleInput,
          CommentUncheckedCreateWithoutArticleInput
        >
      | CommentCreateWithoutArticleInput[]
      | CommentUncheckedCreateWithoutArticleInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutArticleInput
      | CommentCreateOrConnectWithoutArticleInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutArticleInput
      | CommentUpsertWithWhereUniqueWithoutArticleInput[];
    createMany?: CommentCreateManyArticleInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutArticleInput
      | CommentUpdateWithWhereUniqueWithoutArticleInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutArticleInput
      | CommentUpdateManyWithWhereWithoutArticleInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutTokenInput = {
    create?: XOR<
      UserCreateWithoutTokenInput,
      UserUncheckedCreateWithoutTokenInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutTokenNestedInput = {
    create?: XOR<
      UserCreateWithoutTokenInput,
      UserUncheckedCreateWithoutTokenInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput;
    upsert?: UserUpsertWithoutTokenInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutTokenInput,
        UserUpdateWithoutTokenInput
      >,
      UserUncheckedUpdateWithoutTokenInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type PostCreateWithoutUserInput = {
    title?: string | null;
    content: string;
    dateCreated?: Date | string;
    dateUpdated?: Date | string;
  };

  export type PostUncheckedCreateWithoutUserInput = {
    id?: number;
    title?: string | null;
    content: string;
    dateCreated?: Date | string;
    dateUpdated?: Date | string;
  };

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput;
    create: XOR<
      PostCreateWithoutUserInput,
      PostUncheckedCreateWithoutUserInput
    >;
  };

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type CommentCreateWithoutUserInput = {
    id?: string;
    content: string;
    articleTitle?: string | null;
    dateCreated?: Date | string;
    dateUpdated?: Date | string;
    article: ItemCreateNestedOneWithoutCommentsInput;
  };

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: string;
    content: string;
    articleUrl: string;
    articleTitle?: string | null;
    dateCreated?: Date | string;
    dateUpdated?: Date | string;
  };

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput;
    create: XOR<
      CommentCreateWithoutUserInput,
      CommentUncheckedCreateWithoutUserInput
    >;
  };

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type TokenCreateWithoutUserInput = {
    refreshToken: string;
    dateAdded?: Date | string;
    dateUpdated?: Date | string;
  };

  export type TokenUncheckedCreateWithoutUserInput = {
    id?: number;
    refreshToken: string;
    dateAdded?: Date | string;
    dateUpdated?: Date | string;
  };

  export type TokenCreateOrConnectWithoutUserInput = {
    where: TokenWhereUniqueInput;
    create: XOR<
      TokenCreateWithoutUserInput,
      TokenUncheckedCreateWithoutUserInput
    >;
  };

  export type TokenCreateManyUserInputEnvelope = {
    data: TokenCreateManyUserInput | TokenCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput;
    update: XOR<
      PostUpdateWithoutUserInput,
      PostUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      PostCreateWithoutUserInput,
      PostUncheckedCreateWithoutUserInput
    >;
  };

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput;
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>;
  };

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput;
    data: XOR<
      PostUpdateManyMutationInput,
      PostUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[];
    OR?: PostScalarWhereInput[];
    NOT?: PostScalarWhereInput | PostScalarWhereInput[];
    id?: IntFilter<'Post'> | number;
    title?: StringNullableFilter<'Post'> | string | null;
    content?: StringFilter<'Post'> | string;
    userId?: StringFilter<'Post'> | string;
    dateCreated?: DateTimeFilter<'Post'> | Date | string;
    dateUpdated?: DateTimeFilter<'Post'> | Date | string;
  };

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput;
    update: XOR<
      CommentUpdateWithoutUserInput,
      CommentUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      CommentCreateWithoutUserInput,
      CommentUncheckedCreateWithoutUserInput
    >;
  };

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput;
    data: XOR<
      CommentUpdateWithoutUserInput,
      CommentUncheckedUpdateWithoutUserInput
    >;
  };

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput;
    data: XOR<
      CommentUpdateManyMutationInput,
      CommentUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[];
    OR?: CommentScalarWhereInput[];
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[];
    id?: StringFilter<'Comment'> | string;
    content?: StringFilter<'Comment'> | string;
    userId?: StringFilter<'Comment'> | string;
    articleUrl?: StringFilter<'Comment'> | string;
    articleTitle?: StringNullableFilter<'Comment'> | string | null;
    dateCreated?: DateTimeFilter<'Comment'> | Date | string;
    dateUpdated?: DateTimeFilter<'Comment'> | Date | string;
  };

  export type TokenUpsertWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput;
    update: XOR<
      TokenUpdateWithoutUserInput,
      TokenUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      TokenCreateWithoutUserInput,
      TokenUncheckedCreateWithoutUserInput
    >;
  };

  export type TokenUpdateWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput;
    data: XOR<
      TokenUpdateWithoutUserInput,
      TokenUncheckedUpdateWithoutUserInput
    >;
  };

  export type TokenUpdateManyWithWhereWithoutUserInput = {
    where: TokenScalarWhereInput;
    data: XOR<
      TokenUpdateManyMutationInput,
      TokenUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type TokenScalarWhereInput = {
    AND?: TokenScalarWhereInput | TokenScalarWhereInput[];
    OR?: TokenScalarWhereInput[];
    NOT?: TokenScalarWhereInput | TokenScalarWhereInput[];
    id?: IntFilter<'Token'> | number;
    userId?: StringFilter<'Token'> | string;
    refreshToken?: StringFilter<'Token'> | string;
    dateAdded?: DateTimeFilter<'Token'> | Date | string;
    dateUpdated?: DateTimeFilter<'Token'> | Date | string;
  };

  export type UserCreateWithoutPostsInput = {
    id?: string;
    username: string;
    email: string;
    password: string;
    role?: string;
    isAdmin?: boolean;
    dateCreated?: Date | string;
    dateUpdated?: Date | string;
    comments?: CommentCreateNestedManyWithoutUserInput;
    Token?: TokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string;
    username: string;
    email: string;
    password: string;
    role?: string;
    isAdmin?: boolean;
    dateCreated?: Date | string;
    dateUpdated?: Date | string;
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput;
    Token?: TokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutPostsInput,
      UserUncheckedCreateWithoutPostsInput
    >;
  };

  export type UserUpsertWithoutPostsInput = {
    update: XOR<
      UserUpdateWithoutPostsInput,
      UserUncheckedUpdateWithoutPostsInput
    >;
    create: XOR<
      UserCreateWithoutPostsInput,
      UserUncheckedCreateWithoutPostsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutPostsInput,
      UserUncheckedUpdateWithoutPostsInput
    >;
  };

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    isAdmin?: BoolFieldUpdateOperationsInput | boolean;
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUpdateManyWithoutUserNestedInput;
    Token?: TokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    isAdmin?: BoolFieldUpdateOperationsInput | boolean;
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput;
    Token?: TokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateWithoutCommentsInput = {
    id?: string;
    username: string;
    email: string;
    password: string;
    role?: string;
    isAdmin?: boolean;
    dateCreated?: Date | string;
    dateUpdated?: Date | string;
    posts?: PostCreateNestedManyWithoutUserInput;
    Token?: TokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string;
    username: string;
    email: string;
    password: string;
    role?: string;
    isAdmin?: boolean;
    dateCreated?: Date | string;
    dateUpdated?: Date | string;
    posts?: PostUncheckedCreateNestedManyWithoutUserInput;
    Token?: TokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutCommentsInput,
      UserUncheckedCreateWithoutCommentsInput
    >;
  };

  export type ItemCreateWithoutCommentsInput = {
    id?: string;
    articleUrl: string;
  };

  export type ItemUncheckedCreateWithoutCommentsInput = {
    id?: string;
    articleUrl: string;
  };

  export type ItemCreateOrConnectWithoutCommentsInput = {
    where: ItemWhereUniqueInput;
    create: XOR<
      ItemCreateWithoutCommentsInput,
      ItemUncheckedCreateWithoutCommentsInput
    >;
  };

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<
      UserUpdateWithoutCommentsInput,
      UserUncheckedUpdateWithoutCommentsInput
    >;
    create: XOR<
      UserCreateWithoutCommentsInput,
      UserUncheckedCreateWithoutCommentsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutCommentsInput,
      UserUncheckedUpdateWithoutCommentsInput
    >;
  };

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    isAdmin?: BoolFieldUpdateOperationsInput | boolean;
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUpdateManyWithoutUserNestedInput;
    Token?: TokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    isAdmin?: BoolFieldUpdateOperationsInput | boolean;
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput;
    Token?: TokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type ItemUpsertWithoutCommentsInput = {
    update: XOR<
      ItemUpdateWithoutCommentsInput,
      ItemUncheckedUpdateWithoutCommentsInput
    >;
    create: XOR<
      ItemCreateWithoutCommentsInput,
      ItemUncheckedCreateWithoutCommentsInput
    >;
    where?: ItemWhereInput;
  };

  export type ItemUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ItemWhereInput;
    data: XOR<
      ItemUpdateWithoutCommentsInput,
      ItemUncheckedUpdateWithoutCommentsInput
    >;
  };

  export type ItemUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    articleUrl?: StringFieldUpdateOperationsInput | string;
  };

  export type ItemUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    articleUrl?: StringFieldUpdateOperationsInput | string;
  };

  export type CommentCreateWithoutArticleInput = {
    id?: string;
    content: string;
    articleTitle?: string | null;
    dateCreated?: Date | string;
    dateUpdated?: Date | string;
    user: UserCreateNestedOneWithoutCommentsInput;
  };

  export type CommentUncheckedCreateWithoutArticleInput = {
    id?: string;
    content: string;
    userId: string;
    articleTitle?: string | null;
    dateCreated?: Date | string;
    dateUpdated?: Date | string;
  };

  export type CommentCreateOrConnectWithoutArticleInput = {
    where: CommentWhereUniqueInput;
    create: XOR<
      CommentCreateWithoutArticleInput,
      CommentUncheckedCreateWithoutArticleInput
    >;
  };

  export type CommentCreateManyArticleInputEnvelope = {
    data: CommentCreateManyArticleInput | CommentCreateManyArticleInput[];
    skipDuplicates?: boolean;
  };

  export type CommentUpsertWithWhereUniqueWithoutArticleInput = {
    where: CommentWhereUniqueInput;
    update: XOR<
      CommentUpdateWithoutArticleInput,
      CommentUncheckedUpdateWithoutArticleInput
    >;
    create: XOR<
      CommentCreateWithoutArticleInput,
      CommentUncheckedCreateWithoutArticleInput
    >;
  };

  export type CommentUpdateWithWhereUniqueWithoutArticleInput = {
    where: CommentWhereUniqueInput;
    data: XOR<
      CommentUpdateWithoutArticleInput,
      CommentUncheckedUpdateWithoutArticleInput
    >;
  };

  export type CommentUpdateManyWithWhereWithoutArticleInput = {
    where: CommentScalarWhereInput;
    data: XOR<
      CommentUpdateManyMutationInput,
      CommentUncheckedUpdateManyWithoutArticleInput
    >;
  };

  export type UserCreateWithoutTokenInput = {
    id?: string;
    username: string;
    email: string;
    password: string;
    role?: string;
    isAdmin?: boolean;
    dateCreated?: Date | string;
    dateUpdated?: Date | string;
    posts?: PostCreateNestedManyWithoutUserInput;
    comments?: CommentCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutTokenInput = {
    id?: string;
    username: string;
    email: string;
    password: string;
    role?: string;
    isAdmin?: boolean;
    dateCreated?: Date | string;
    dateUpdated?: Date | string;
    posts?: PostUncheckedCreateNestedManyWithoutUserInput;
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutTokenInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutTokenInput,
      UserUncheckedCreateWithoutTokenInput
    >;
  };

  export type UserUpsertWithoutTokenInput = {
    update: XOR<
      UserUpdateWithoutTokenInput,
      UserUncheckedUpdateWithoutTokenInput
    >;
    create: XOR<
      UserCreateWithoutTokenInput,
      UserUncheckedCreateWithoutTokenInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutTokenInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutTokenInput,
      UserUncheckedUpdateWithoutTokenInput
    >;
  };

  export type UserUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    isAdmin?: BoolFieldUpdateOperationsInput | boolean;
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUpdateManyWithoutUserNestedInput;
    comments?: CommentUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string;
    username?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    role?: StringFieldUpdateOperationsInput | string;
    isAdmin?: BoolFieldUpdateOperationsInput | boolean;
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput;
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type PostCreateManyUserInput = {
    id?: number;
    title?: string | null;
    content: string;
    dateCreated?: Date | string;
    dateUpdated?: Date | string;
  };

  export type CommentCreateManyUserInput = {
    id?: string;
    content: string;
    articleUrl: string;
    articleTitle?: string | null;
    dateCreated?: Date | string;
    dateUpdated?: Date | string;
  };

  export type TokenCreateManyUserInput = {
    id?: number;
    refreshToken: string;
    dateAdded?: Date | string;
    dateUpdated?: Date | string;
  };

  export type PostUpdateWithoutUserInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: StringFieldUpdateOperationsInput | string;
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: StringFieldUpdateOperationsInput | string;
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PostUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: NullableStringFieldUpdateOperationsInput | string | null;
    content?: StringFieldUpdateOperationsInput | string;
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    articleTitle?: NullableStringFieldUpdateOperationsInput | string | null;
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
    article?: ItemUpdateOneRequiredWithoutCommentsNestedInput;
  };

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    articleUrl?: StringFieldUpdateOperationsInput | string;
    articleTitle?: NullableStringFieldUpdateOperationsInput | string | null;
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    articleUrl?: StringFieldUpdateOperationsInput | string;
    articleTitle?: NullableStringFieldUpdateOperationsInput | string | null;
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TokenUpdateWithoutUserInput = {
    refreshToken?: StringFieldUpdateOperationsInput | string;
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    refreshToken?: StringFieldUpdateOperationsInput | string;
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TokenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    refreshToken?: StringFieldUpdateOperationsInput | string;
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentCreateManyArticleInput = {
    id?: string;
    content: string;
    userId: string;
    articleTitle?: string | null;
    dateCreated?: Date | string;
    dateUpdated?: Date | string;
  };

  export type CommentUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    articleTitle?: NullableStringFieldUpdateOperationsInput | string | null;
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput;
  };

  export type CommentUncheckedUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    articleTitle?: NullableStringFieldUpdateOperationsInput | string | null;
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentUncheckedUpdateManyWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    articleTitle?: NullableStringFieldUpdateOperationsInput | string | null;
    dateCreated?: DateTimeFieldUpdateOperationsInput | Date | string;
    dateUpdated?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
