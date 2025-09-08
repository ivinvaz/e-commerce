
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
 * Model TB_USUARIO
 * 
 */
export type TB_USUARIO = $Result.DefaultSelection<Prisma.$TB_USUARIOPayload>
/**
 * Model TB_TIPO_USUARIO
 * 
 */
export type TB_TIPO_USUARIO = $Result.DefaultSelection<Prisma.$TB_TIPO_USUARIOPayload>
/**
 * Model TB_CATEGORIA_USUARIO
 * 
 */
export type TB_CATEGORIA_USUARIO = $Result.DefaultSelection<Prisma.$TB_CATEGORIA_USUARIOPayload>
/**
 * Model TB_PRODUTO
 * 
 */
export type TB_PRODUTO = $Result.DefaultSelection<Prisma.$TB_PRODUTOPayload>
/**
 * Model TB_TIPO_PRODUTO
 * 
 */
export type TB_TIPO_PRODUTO = $Result.DefaultSelection<Prisma.$TB_TIPO_PRODUTOPayload>
/**
 * Model TB_CATEGORIA_PRODUTO
 * 
 */
export type TB_CATEGORIA_PRODUTO = $Result.DefaultSelection<Prisma.$TB_CATEGORIA_PRODUTOPayload>
/**
 * Model TB_QTD_PRODUTO
 * 
 */
export type TB_QTD_PRODUTO = $Result.DefaultSelection<Prisma.$TB_QTD_PRODUTOPayload>
/**
 * Model TB_TAMANHO_PRODUTO
 * 
 */
export type TB_TAMANHO_PRODUTO = $Result.DefaultSelection<Prisma.$TB_TAMANHO_PRODUTOPayload>
/**
 * Model TB_CARRINHO
 * 
 */
export type TB_CARRINHO = $Result.DefaultSelection<Prisma.$TB_CARRINHOPayload>
/**
 * Model TB_ITENS
 * 
 */
export type TB_ITENS = $Result.DefaultSelection<Prisma.$TB_ITENSPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TB_USUARIOS
 * const tB_USUARIOS = await prisma.tB_USUARIO.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more TB_USUARIOS
   * const tB_USUARIOS = await prisma.tB_USUARIO.findMany()
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
   * `prisma.tB_USUARIO`: Exposes CRUD operations for the **TB_USUARIO** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TB_USUARIOS
    * const tB_USUARIOS = await prisma.tB_USUARIO.findMany()
    * ```
    */
  get tB_USUARIO(): Prisma.TB_USUARIODelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tB_TIPO_USUARIO`: Exposes CRUD operations for the **TB_TIPO_USUARIO** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TB_TIPO_USUARIOS
    * const tB_TIPO_USUARIOS = await prisma.tB_TIPO_USUARIO.findMany()
    * ```
    */
  get tB_TIPO_USUARIO(): Prisma.TB_TIPO_USUARIODelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tB_CATEGORIA_USUARIO`: Exposes CRUD operations for the **TB_CATEGORIA_USUARIO** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TB_CATEGORIA_USUARIOS
    * const tB_CATEGORIA_USUARIOS = await prisma.tB_CATEGORIA_USUARIO.findMany()
    * ```
    */
  get tB_CATEGORIA_USUARIO(): Prisma.TB_CATEGORIA_USUARIODelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tB_PRODUTO`: Exposes CRUD operations for the **TB_PRODUTO** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TB_PRODUTOS
    * const tB_PRODUTOS = await prisma.tB_PRODUTO.findMany()
    * ```
    */
  get tB_PRODUTO(): Prisma.TB_PRODUTODelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tB_TIPO_PRODUTO`: Exposes CRUD operations for the **TB_TIPO_PRODUTO** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TB_TIPO_PRODUTOS
    * const tB_TIPO_PRODUTOS = await prisma.tB_TIPO_PRODUTO.findMany()
    * ```
    */
  get tB_TIPO_PRODUTO(): Prisma.TB_TIPO_PRODUTODelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tB_CATEGORIA_PRODUTO`: Exposes CRUD operations for the **TB_CATEGORIA_PRODUTO** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TB_CATEGORIA_PRODUTOS
    * const tB_CATEGORIA_PRODUTOS = await prisma.tB_CATEGORIA_PRODUTO.findMany()
    * ```
    */
  get tB_CATEGORIA_PRODUTO(): Prisma.TB_CATEGORIA_PRODUTODelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tB_QTD_PRODUTO`: Exposes CRUD operations for the **TB_QTD_PRODUTO** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TB_QTD_PRODUTOS
    * const tB_QTD_PRODUTOS = await prisma.tB_QTD_PRODUTO.findMany()
    * ```
    */
  get tB_QTD_PRODUTO(): Prisma.TB_QTD_PRODUTODelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tB_TAMANHO_PRODUTO`: Exposes CRUD operations for the **TB_TAMANHO_PRODUTO** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TB_TAMANHO_PRODUTOS
    * const tB_TAMANHO_PRODUTOS = await prisma.tB_TAMANHO_PRODUTO.findMany()
    * ```
    */
  get tB_TAMANHO_PRODUTO(): Prisma.TB_TAMANHO_PRODUTODelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tB_CARRINHO`: Exposes CRUD operations for the **TB_CARRINHO** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TB_CARRINHOS
    * const tB_CARRINHOS = await prisma.tB_CARRINHO.findMany()
    * ```
    */
  get tB_CARRINHO(): Prisma.TB_CARRINHODelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tB_ITENS`: Exposes CRUD operations for the **TB_ITENS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TB_ITENS
    * const tB_ITENS = await prisma.tB_ITENS.findMany()
    * ```
    */
  get tB_ITENS(): Prisma.TB_ITENSDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
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
    TB_USUARIO: 'TB_USUARIO',
    TB_TIPO_USUARIO: 'TB_TIPO_USUARIO',
    TB_CATEGORIA_USUARIO: 'TB_CATEGORIA_USUARIO',
    TB_PRODUTO: 'TB_PRODUTO',
    TB_TIPO_PRODUTO: 'TB_TIPO_PRODUTO',
    TB_CATEGORIA_PRODUTO: 'TB_CATEGORIA_PRODUTO',
    TB_QTD_PRODUTO: 'TB_QTD_PRODUTO',
    TB_TAMANHO_PRODUTO: 'TB_TAMANHO_PRODUTO',
    TB_CARRINHO: 'TB_CARRINHO',
    TB_ITENS: 'TB_ITENS'
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
      modelProps: "tB_USUARIO" | "tB_TIPO_USUARIO" | "tB_CATEGORIA_USUARIO" | "tB_PRODUTO" | "tB_TIPO_PRODUTO" | "tB_CATEGORIA_PRODUTO" | "tB_QTD_PRODUTO" | "tB_TAMANHO_PRODUTO" | "tB_CARRINHO" | "tB_ITENS"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TB_USUARIO: {
        payload: Prisma.$TB_USUARIOPayload<ExtArgs>
        fields: Prisma.TB_USUARIOFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TB_USUARIOFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_USUARIOPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TB_USUARIOFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_USUARIOPayload>
          }
          findFirst: {
            args: Prisma.TB_USUARIOFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_USUARIOPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TB_USUARIOFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_USUARIOPayload>
          }
          findMany: {
            args: Prisma.TB_USUARIOFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_USUARIOPayload>[]
          }
          create: {
            args: Prisma.TB_USUARIOCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_USUARIOPayload>
          }
          createMany: {
            args: Prisma.TB_USUARIOCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TB_USUARIOCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_USUARIOPayload>[]
          }
          delete: {
            args: Prisma.TB_USUARIODeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_USUARIOPayload>
          }
          update: {
            args: Prisma.TB_USUARIOUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_USUARIOPayload>
          }
          deleteMany: {
            args: Prisma.TB_USUARIODeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TB_USUARIOUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TB_USUARIOUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_USUARIOPayload>[]
          }
          upsert: {
            args: Prisma.TB_USUARIOUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_USUARIOPayload>
          }
          aggregate: {
            args: Prisma.TB_USUARIOAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTB_USUARIO>
          }
          groupBy: {
            args: Prisma.TB_USUARIOGroupByArgs<ExtArgs>
            result: $Utils.Optional<TB_USUARIOGroupByOutputType>[]
          }
          count: {
            args: Prisma.TB_USUARIOCountArgs<ExtArgs>
            result: $Utils.Optional<TB_USUARIOCountAggregateOutputType> | number
          }
        }
      }
      TB_TIPO_USUARIO: {
        payload: Prisma.$TB_TIPO_USUARIOPayload<ExtArgs>
        fields: Prisma.TB_TIPO_USUARIOFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TB_TIPO_USUARIOFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_TIPO_USUARIOPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TB_TIPO_USUARIOFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_TIPO_USUARIOPayload>
          }
          findFirst: {
            args: Prisma.TB_TIPO_USUARIOFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_TIPO_USUARIOPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TB_TIPO_USUARIOFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_TIPO_USUARIOPayload>
          }
          findMany: {
            args: Prisma.TB_TIPO_USUARIOFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_TIPO_USUARIOPayload>[]
          }
          create: {
            args: Prisma.TB_TIPO_USUARIOCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_TIPO_USUARIOPayload>
          }
          createMany: {
            args: Prisma.TB_TIPO_USUARIOCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TB_TIPO_USUARIOCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_TIPO_USUARIOPayload>[]
          }
          delete: {
            args: Prisma.TB_TIPO_USUARIODeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_TIPO_USUARIOPayload>
          }
          update: {
            args: Prisma.TB_TIPO_USUARIOUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_TIPO_USUARIOPayload>
          }
          deleteMany: {
            args: Prisma.TB_TIPO_USUARIODeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TB_TIPO_USUARIOUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TB_TIPO_USUARIOUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_TIPO_USUARIOPayload>[]
          }
          upsert: {
            args: Prisma.TB_TIPO_USUARIOUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_TIPO_USUARIOPayload>
          }
          aggregate: {
            args: Prisma.TB_TIPO_USUARIOAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTB_TIPO_USUARIO>
          }
          groupBy: {
            args: Prisma.TB_TIPO_USUARIOGroupByArgs<ExtArgs>
            result: $Utils.Optional<TB_TIPO_USUARIOGroupByOutputType>[]
          }
          count: {
            args: Prisma.TB_TIPO_USUARIOCountArgs<ExtArgs>
            result: $Utils.Optional<TB_TIPO_USUARIOCountAggregateOutputType> | number
          }
        }
      }
      TB_CATEGORIA_USUARIO: {
        payload: Prisma.$TB_CATEGORIA_USUARIOPayload<ExtArgs>
        fields: Prisma.TB_CATEGORIA_USUARIOFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TB_CATEGORIA_USUARIOFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_CATEGORIA_USUARIOPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TB_CATEGORIA_USUARIOFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_CATEGORIA_USUARIOPayload>
          }
          findFirst: {
            args: Prisma.TB_CATEGORIA_USUARIOFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_CATEGORIA_USUARIOPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TB_CATEGORIA_USUARIOFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_CATEGORIA_USUARIOPayload>
          }
          findMany: {
            args: Prisma.TB_CATEGORIA_USUARIOFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_CATEGORIA_USUARIOPayload>[]
          }
          create: {
            args: Prisma.TB_CATEGORIA_USUARIOCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_CATEGORIA_USUARIOPayload>
          }
          createMany: {
            args: Prisma.TB_CATEGORIA_USUARIOCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TB_CATEGORIA_USUARIOCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_CATEGORIA_USUARIOPayload>[]
          }
          delete: {
            args: Prisma.TB_CATEGORIA_USUARIODeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_CATEGORIA_USUARIOPayload>
          }
          update: {
            args: Prisma.TB_CATEGORIA_USUARIOUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_CATEGORIA_USUARIOPayload>
          }
          deleteMany: {
            args: Prisma.TB_CATEGORIA_USUARIODeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TB_CATEGORIA_USUARIOUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TB_CATEGORIA_USUARIOUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_CATEGORIA_USUARIOPayload>[]
          }
          upsert: {
            args: Prisma.TB_CATEGORIA_USUARIOUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_CATEGORIA_USUARIOPayload>
          }
          aggregate: {
            args: Prisma.TB_CATEGORIA_USUARIOAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTB_CATEGORIA_USUARIO>
          }
          groupBy: {
            args: Prisma.TB_CATEGORIA_USUARIOGroupByArgs<ExtArgs>
            result: $Utils.Optional<TB_CATEGORIA_USUARIOGroupByOutputType>[]
          }
          count: {
            args: Prisma.TB_CATEGORIA_USUARIOCountArgs<ExtArgs>
            result: $Utils.Optional<TB_CATEGORIA_USUARIOCountAggregateOutputType> | number
          }
        }
      }
      TB_PRODUTO: {
        payload: Prisma.$TB_PRODUTOPayload<ExtArgs>
        fields: Prisma.TB_PRODUTOFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TB_PRODUTOFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_PRODUTOPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TB_PRODUTOFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_PRODUTOPayload>
          }
          findFirst: {
            args: Prisma.TB_PRODUTOFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_PRODUTOPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TB_PRODUTOFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_PRODUTOPayload>
          }
          findMany: {
            args: Prisma.TB_PRODUTOFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_PRODUTOPayload>[]
          }
          create: {
            args: Prisma.TB_PRODUTOCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_PRODUTOPayload>
          }
          createMany: {
            args: Prisma.TB_PRODUTOCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TB_PRODUTOCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_PRODUTOPayload>[]
          }
          delete: {
            args: Prisma.TB_PRODUTODeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_PRODUTOPayload>
          }
          update: {
            args: Prisma.TB_PRODUTOUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_PRODUTOPayload>
          }
          deleteMany: {
            args: Prisma.TB_PRODUTODeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TB_PRODUTOUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TB_PRODUTOUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_PRODUTOPayload>[]
          }
          upsert: {
            args: Prisma.TB_PRODUTOUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_PRODUTOPayload>
          }
          aggregate: {
            args: Prisma.TB_PRODUTOAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTB_PRODUTO>
          }
          groupBy: {
            args: Prisma.TB_PRODUTOGroupByArgs<ExtArgs>
            result: $Utils.Optional<TB_PRODUTOGroupByOutputType>[]
          }
          count: {
            args: Prisma.TB_PRODUTOCountArgs<ExtArgs>
            result: $Utils.Optional<TB_PRODUTOCountAggregateOutputType> | number
          }
        }
      }
      TB_TIPO_PRODUTO: {
        payload: Prisma.$TB_TIPO_PRODUTOPayload<ExtArgs>
        fields: Prisma.TB_TIPO_PRODUTOFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TB_TIPO_PRODUTOFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_TIPO_PRODUTOPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TB_TIPO_PRODUTOFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_TIPO_PRODUTOPayload>
          }
          findFirst: {
            args: Prisma.TB_TIPO_PRODUTOFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_TIPO_PRODUTOPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TB_TIPO_PRODUTOFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_TIPO_PRODUTOPayload>
          }
          findMany: {
            args: Prisma.TB_TIPO_PRODUTOFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_TIPO_PRODUTOPayload>[]
          }
          create: {
            args: Prisma.TB_TIPO_PRODUTOCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_TIPO_PRODUTOPayload>
          }
          createMany: {
            args: Prisma.TB_TIPO_PRODUTOCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TB_TIPO_PRODUTOCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_TIPO_PRODUTOPayload>[]
          }
          delete: {
            args: Prisma.TB_TIPO_PRODUTODeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_TIPO_PRODUTOPayload>
          }
          update: {
            args: Prisma.TB_TIPO_PRODUTOUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_TIPO_PRODUTOPayload>
          }
          deleteMany: {
            args: Prisma.TB_TIPO_PRODUTODeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TB_TIPO_PRODUTOUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TB_TIPO_PRODUTOUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_TIPO_PRODUTOPayload>[]
          }
          upsert: {
            args: Prisma.TB_TIPO_PRODUTOUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_TIPO_PRODUTOPayload>
          }
          aggregate: {
            args: Prisma.TB_TIPO_PRODUTOAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTB_TIPO_PRODUTO>
          }
          groupBy: {
            args: Prisma.TB_TIPO_PRODUTOGroupByArgs<ExtArgs>
            result: $Utils.Optional<TB_TIPO_PRODUTOGroupByOutputType>[]
          }
          count: {
            args: Prisma.TB_TIPO_PRODUTOCountArgs<ExtArgs>
            result: $Utils.Optional<TB_TIPO_PRODUTOCountAggregateOutputType> | number
          }
        }
      }
      TB_CATEGORIA_PRODUTO: {
        payload: Prisma.$TB_CATEGORIA_PRODUTOPayload<ExtArgs>
        fields: Prisma.TB_CATEGORIA_PRODUTOFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TB_CATEGORIA_PRODUTOFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_CATEGORIA_PRODUTOPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TB_CATEGORIA_PRODUTOFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_CATEGORIA_PRODUTOPayload>
          }
          findFirst: {
            args: Prisma.TB_CATEGORIA_PRODUTOFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_CATEGORIA_PRODUTOPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TB_CATEGORIA_PRODUTOFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_CATEGORIA_PRODUTOPayload>
          }
          findMany: {
            args: Prisma.TB_CATEGORIA_PRODUTOFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_CATEGORIA_PRODUTOPayload>[]
          }
          create: {
            args: Prisma.TB_CATEGORIA_PRODUTOCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_CATEGORIA_PRODUTOPayload>
          }
          createMany: {
            args: Prisma.TB_CATEGORIA_PRODUTOCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TB_CATEGORIA_PRODUTOCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_CATEGORIA_PRODUTOPayload>[]
          }
          delete: {
            args: Prisma.TB_CATEGORIA_PRODUTODeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_CATEGORIA_PRODUTOPayload>
          }
          update: {
            args: Prisma.TB_CATEGORIA_PRODUTOUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_CATEGORIA_PRODUTOPayload>
          }
          deleteMany: {
            args: Prisma.TB_CATEGORIA_PRODUTODeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TB_CATEGORIA_PRODUTOUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TB_CATEGORIA_PRODUTOUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_CATEGORIA_PRODUTOPayload>[]
          }
          upsert: {
            args: Prisma.TB_CATEGORIA_PRODUTOUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_CATEGORIA_PRODUTOPayload>
          }
          aggregate: {
            args: Prisma.TB_CATEGORIA_PRODUTOAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTB_CATEGORIA_PRODUTO>
          }
          groupBy: {
            args: Prisma.TB_CATEGORIA_PRODUTOGroupByArgs<ExtArgs>
            result: $Utils.Optional<TB_CATEGORIA_PRODUTOGroupByOutputType>[]
          }
          count: {
            args: Prisma.TB_CATEGORIA_PRODUTOCountArgs<ExtArgs>
            result: $Utils.Optional<TB_CATEGORIA_PRODUTOCountAggregateOutputType> | number
          }
        }
      }
      TB_QTD_PRODUTO: {
        payload: Prisma.$TB_QTD_PRODUTOPayload<ExtArgs>
        fields: Prisma.TB_QTD_PRODUTOFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TB_QTD_PRODUTOFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_QTD_PRODUTOPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TB_QTD_PRODUTOFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_QTD_PRODUTOPayload>
          }
          findFirst: {
            args: Prisma.TB_QTD_PRODUTOFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_QTD_PRODUTOPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TB_QTD_PRODUTOFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_QTD_PRODUTOPayload>
          }
          findMany: {
            args: Prisma.TB_QTD_PRODUTOFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_QTD_PRODUTOPayload>[]
          }
          create: {
            args: Prisma.TB_QTD_PRODUTOCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_QTD_PRODUTOPayload>
          }
          createMany: {
            args: Prisma.TB_QTD_PRODUTOCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TB_QTD_PRODUTOCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_QTD_PRODUTOPayload>[]
          }
          delete: {
            args: Prisma.TB_QTD_PRODUTODeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_QTD_PRODUTOPayload>
          }
          update: {
            args: Prisma.TB_QTD_PRODUTOUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_QTD_PRODUTOPayload>
          }
          deleteMany: {
            args: Prisma.TB_QTD_PRODUTODeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TB_QTD_PRODUTOUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TB_QTD_PRODUTOUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_QTD_PRODUTOPayload>[]
          }
          upsert: {
            args: Prisma.TB_QTD_PRODUTOUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_QTD_PRODUTOPayload>
          }
          aggregate: {
            args: Prisma.TB_QTD_PRODUTOAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTB_QTD_PRODUTO>
          }
          groupBy: {
            args: Prisma.TB_QTD_PRODUTOGroupByArgs<ExtArgs>
            result: $Utils.Optional<TB_QTD_PRODUTOGroupByOutputType>[]
          }
          count: {
            args: Prisma.TB_QTD_PRODUTOCountArgs<ExtArgs>
            result: $Utils.Optional<TB_QTD_PRODUTOCountAggregateOutputType> | number
          }
        }
      }
      TB_TAMANHO_PRODUTO: {
        payload: Prisma.$TB_TAMANHO_PRODUTOPayload<ExtArgs>
        fields: Prisma.TB_TAMANHO_PRODUTOFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TB_TAMANHO_PRODUTOFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_TAMANHO_PRODUTOPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TB_TAMANHO_PRODUTOFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_TAMANHO_PRODUTOPayload>
          }
          findFirst: {
            args: Prisma.TB_TAMANHO_PRODUTOFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_TAMANHO_PRODUTOPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TB_TAMANHO_PRODUTOFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_TAMANHO_PRODUTOPayload>
          }
          findMany: {
            args: Prisma.TB_TAMANHO_PRODUTOFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_TAMANHO_PRODUTOPayload>[]
          }
          create: {
            args: Prisma.TB_TAMANHO_PRODUTOCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_TAMANHO_PRODUTOPayload>
          }
          createMany: {
            args: Prisma.TB_TAMANHO_PRODUTOCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TB_TAMANHO_PRODUTOCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_TAMANHO_PRODUTOPayload>[]
          }
          delete: {
            args: Prisma.TB_TAMANHO_PRODUTODeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_TAMANHO_PRODUTOPayload>
          }
          update: {
            args: Prisma.TB_TAMANHO_PRODUTOUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_TAMANHO_PRODUTOPayload>
          }
          deleteMany: {
            args: Prisma.TB_TAMANHO_PRODUTODeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TB_TAMANHO_PRODUTOUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TB_TAMANHO_PRODUTOUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_TAMANHO_PRODUTOPayload>[]
          }
          upsert: {
            args: Prisma.TB_TAMANHO_PRODUTOUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_TAMANHO_PRODUTOPayload>
          }
          aggregate: {
            args: Prisma.TB_TAMANHO_PRODUTOAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTB_TAMANHO_PRODUTO>
          }
          groupBy: {
            args: Prisma.TB_TAMANHO_PRODUTOGroupByArgs<ExtArgs>
            result: $Utils.Optional<TB_TAMANHO_PRODUTOGroupByOutputType>[]
          }
          count: {
            args: Prisma.TB_TAMANHO_PRODUTOCountArgs<ExtArgs>
            result: $Utils.Optional<TB_TAMANHO_PRODUTOCountAggregateOutputType> | number
          }
        }
      }
      TB_CARRINHO: {
        payload: Prisma.$TB_CARRINHOPayload<ExtArgs>
        fields: Prisma.TB_CARRINHOFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TB_CARRINHOFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_CARRINHOPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TB_CARRINHOFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_CARRINHOPayload>
          }
          findFirst: {
            args: Prisma.TB_CARRINHOFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_CARRINHOPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TB_CARRINHOFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_CARRINHOPayload>
          }
          findMany: {
            args: Prisma.TB_CARRINHOFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_CARRINHOPayload>[]
          }
          create: {
            args: Prisma.TB_CARRINHOCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_CARRINHOPayload>
          }
          createMany: {
            args: Prisma.TB_CARRINHOCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TB_CARRINHOCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_CARRINHOPayload>[]
          }
          delete: {
            args: Prisma.TB_CARRINHODeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_CARRINHOPayload>
          }
          update: {
            args: Prisma.TB_CARRINHOUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_CARRINHOPayload>
          }
          deleteMany: {
            args: Prisma.TB_CARRINHODeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TB_CARRINHOUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TB_CARRINHOUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_CARRINHOPayload>[]
          }
          upsert: {
            args: Prisma.TB_CARRINHOUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_CARRINHOPayload>
          }
          aggregate: {
            args: Prisma.TB_CARRINHOAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTB_CARRINHO>
          }
          groupBy: {
            args: Prisma.TB_CARRINHOGroupByArgs<ExtArgs>
            result: $Utils.Optional<TB_CARRINHOGroupByOutputType>[]
          }
          count: {
            args: Prisma.TB_CARRINHOCountArgs<ExtArgs>
            result: $Utils.Optional<TB_CARRINHOCountAggregateOutputType> | number
          }
        }
      }
      TB_ITENS: {
        payload: Prisma.$TB_ITENSPayload<ExtArgs>
        fields: Prisma.TB_ITENSFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TB_ITENSFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_ITENSPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TB_ITENSFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_ITENSPayload>
          }
          findFirst: {
            args: Prisma.TB_ITENSFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_ITENSPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TB_ITENSFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_ITENSPayload>
          }
          findMany: {
            args: Prisma.TB_ITENSFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_ITENSPayload>[]
          }
          create: {
            args: Prisma.TB_ITENSCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_ITENSPayload>
          }
          createMany: {
            args: Prisma.TB_ITENSCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TB_ITENSCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_ITENSPayload>[]
          }
          delete: {
            args: Prisma.TB_ITENSDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_ITENSPayload>
          }
          update: {
            args: Prisma.TB_ITENSUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_ITENSPayload>
          }
          deleteMany: {
            args: Prisma.TB_ITENSDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TB_ITENSUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TB_ITENSUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_ITENSPayload>[]
          }
          upsert: {
            args: Prisma.TB_ITENSUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TB_ITENSPayload>
          }
          aggregate: {
            args: Prisma.TB_ITENSAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTB_ITENS>
          }
          groupBy: {
            args: Prisma.TB_ITENSGroupByArgs<ExtArgs>
            result: $Utils.Optional<TB_ITENSGroupByOutputType>[]
          }
          count: {
            args: Prisma.TB_ITENSCountArgs<ExtArgs>
            result: $Utils.Optional<TB_ITENSCountAggregateOutputType> | number
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
    tB_USUARIO?: TB_USUARIOOmit
    tB_TIPO_USUARIO?: TB_TIPO_USUARIOOmit
    tB_CATEGORIA_USUARIO?: TB_CATEGORIA_USUARIOOmit
    tB_PRODUTO?: TB_PRODUTOOmit
    tB_TIPO_PRODUTO?: TB_TIPO_PRODUTOOmit
    tB_CATEGORIA_PRODUTO?: TB_CATEGORIA_PRODUTOOmit
    tB_QTD_PRODUTO?: TB_QTD_PRODUTOOmit
    tB_TAMANHO_PRODUTO?: TB_TAMANHO_PRODUTOOmit
    tB_CARRINHO?: TB_CARRINHOOmit
    tB_ITENS?: TB_ITENSOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type TB_CATEGORIA_USUARIOCountOutputType
   */

  export type TB_CATEGORIA_USUARIOCountOutputType = {
    tiposUsuario: number
  }

  export type TB_CATEGORIA_USUARIOCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tiposUsuario?: boolean | TB_CATEGORIA_USUARIOCountOutputTypeCountTiposUsuarioArgs
  }

  // Custom InputTypes
  /**
   * TB_CATEGORIA_USUARIOCountOutputType without action
   */
  export type TB_CATEGORIA_USUARIOCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CATEGORIA_USUARIOCountOutputType
     */
    select?: TB_CATEGORIA_USUARIOCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TB_CATEGORIA_USUARIOCountOutputType without action
   */
  export type TB_CATEGORIA_USUARIOCountOutputTypeCountTiposUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_TIPO_USUARIOWhereInput
  }


  /**
   * Count Type TB_PRODUTOCountOutputType
   */

  export type TB_PRODUTOCountOutputType = {
    tiposProduto: number
    quantidades: number
    itens: number
  }

  export type TB_PRODUTOCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tiposProduto?: boolean | TB_PRODUTOCountOutputTypeCountTiposProdutoArgs
    quantidades?: boolean | TB_PRODUTOCountOutputTypeCountQuantidadesArgs
    itens?: boolean | TB_PRODUTOCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * TB_PRODUTOCountOutputType without action
   */
  export type TB_PRODUTOCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_PRODUTOCountOutputType
     */
    select?: TB_PRODUTOCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TB_PRODUTOCountOutputType without action
   */
  export type TB_PRODUTOCountOutputTypeCountTiposProdutoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_TIPO_PRODUTOWhereInput
  }

  /**
   * TB_PRODUTOCountOutputType without action
   */
  export type TB_PRODUTOCountOutputTypeCountQuantidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_QTD_PRODUTOWhereInput
  }

  /**
   * TB_PRODUTOCountOutputType without action
   */
  export type TB_PRODUTOCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_ITENSWhereInput
  }


  /**
   * Count Type TB_CATEGORIA_PRODUTOCountOutputType
   */

  export type TB_CATEGORIA_PRODUTOCountOutputType = {
    tiposProduto: number
  }

  export type TB_CATEGORIA_PRODUTOCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tiposProduto?: boolean | TB_CATEGORIA_PRODUTOCountOutputTypeCountTiposProdutoArgs
  }

  // Custom InputTypes
  /**
   * TB_CATEGORIA_PRODUTOCountOutputType without action
   */
  export type TB_CATEGORIA_PRODUTOCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CATEGORIA_PRODUTOCountOutputType
     */
    select?: TB_CATEGORIA_PRODUTOCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TB_CATEGORIA_PRODUTOCountOutputType without action
   */
  export type TB_CATEGORIA_PRODUTOCountOutputTypeCountTiposProdutoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_TIPO_PRODUTOWhereInput
  }


  /**
   * Count Type TB_TAMANHO_PRODUTOCountOutputType
   */

  export type TB_TAMANHO_PRODUTOCountOutputType = {
    qtdProdutos: number
    itens: number
  }

  export type TB_TAMANHO_PRODUTOCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qtdProdutos?: boolean | TB_TAMANHO_PRODUTOCountOutputTypeCountQtdProdutosArgs
    itens?: boolean | TB_TAMANHO_PRODUTOCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * TB_TAMANHO_PRODUTOCountOutputType without action
   */
  export type TB_TAMANHO_PRODUTOCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TAMANHO_PRODUTOCountOutputType
     */
    select?: TB_TAMANHO_PRODUTOCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TB_TAMANHO_PRODUTOCountOutputType without action
   */
  export type TB_TAMANHO_PRODUTOCountOutputTypeCountQtdProdutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_QTD_PRODUTOWhereInput
  }

  /**
   * TB_TAMANHO_PRODUTOCountOutputType without action
   */
  export type TB_TAMANHO_PRODUTOCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_ITENSWhereInput
  }


  /**
   * Count Type TB_CARRINHOCountOutputType
   */

  export type TB_CARRINHOCountOutputType = {
    itens: number
  }

  export type TB_CARRINHOCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | TB_CARRINHOCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * TB_CARRINHOCountOutputType without action
   */
  export type TB_CARRINHOCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CARRINHOCountOutputType
     */
    select?: TB_CARRINHOCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TB_CARRINHOCountOutputType without action
   */
  export type TB_CARRINHOCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_ITENSWhereInput
  }


  /**
   * Models
   */

  /**
   * Model TB_USUARIO
   */

  export type AggregateTB_USUARIO = {
    _count: TB_USUARIOCountAggregateOutputType | null
    _avg: TB_USUARIOAvgAggregateOutputType | null
    _sum: TB_USUARIOSumAggregateOutputType | null
    _min: TB_USUARIOMinAggregateOutputType | null
    _max: TB_USUARIOMaxAggregateOutputType | null
  }

  export type TB_USUARIOAvgAggregateOutputType = {
    SQ_USUARIO: number | null
    TP_USUARIO: number | null
    ST_USUARIO: number | null
  }

  export type TB_USUARIOSumAggregateOutputType = {
    SQ_USUARIO: number | null
    TP_USUARIO: number | null
    ST_USUARIO: number | null
  }

  export type TB_USUARIOMinAggregateOutputType = {
    SQ_USUARIO: number | null
    TP_USUARIO: number | null
    ST_USUARIO: number | null
    NO_USUARIO: string | null
    EMAIL_USUARIO: string | null
    SENHA_USUARIO: string | null
    DT_CRIACAO: Date | null
    DT_EDITADO: Date | null
  }

  export type TB_USUARIOMaxAggregateOutputType = {
    SQ_USUARIO: number | null
    TP_USUARIO: number | null
    ST_USUARIO: number | null
    NO_USUARIO: string | null
    EMAIL_USUARIO: string | null
    SENHA_USUARIO: string | null
    DT_CRIACAO: Date | null
    DT_EDITADO: Date | null
  }

  export type TB_USUARIOCountAggregateOutputType = {
    SQ_USUARIO: number
    TP_USUARIO: number
    ST_USUARIO: number
    NO_USUARIO: number
    EMAIL_USUARIO: number
    SENHA_USUARIO: number
    DT_CRIACAO: number
    DT_EDITADO: number
    _all: number
  }


  export type TB_USUARIOAvgAggregateInputType = {
    SQ_USUARIO?: true
    TP_USUARIO?: true
    ST_USUARIO?: true
  }

  export type TB_USUARIOSumAggregateInputType = {
    SQ_USUARIO?: true
    TP_USUARIO?: true
    ST_USUARIO?: true
  }

  export type TB_USUARIOMinAggregateInputType = {
    SQ_USUARIO?: true
    TP_USUARIO?: true
    ST_USUARIO?: true
    NO_USUARIO?: true
    EMAIL_USUARIO?: true
    SENHA_USUARIO?: true
    DT_CRIACAO?: true
    DT_EDITADO?: true
  }

  export type TB_USUARIOMaxAggregateInputType = {
    SQ_USUARIO?: true
    TP_USUARIO?: true
    ST_USUARIO?: true
    NO_USUARIO?: true
    EMAIL_USUARIO?: true
    SENHA_USUARIO?: true
    DT_CRIACAO?: true
    DT_EDITADO?: true
  }

  export type TB_USUARIOCountAggregateInputType = {
    SQ_USUARIO?: true
    TP_USUARIO?: true
    ST_USUARIO?: true
    NO_USUARIO?: true
    EMAIL_USUARIO?: true
    SENHA_USUARIO?: true
    DT_CRIACAO?: true
    DT_EDITADO?: true
    _all?: true
  }

  export type TB_USUARIOAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_USUARIO to aggregate.
     */
    where?: TB_USUARIOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_USUARIOS to fetch.
     */
    orderBy?: TB_USUARIOOrderByWithRelationInput | TB_USUARIOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TB_USUARIOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_USUARIOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_USUARIOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TB_USUARIOS
    **/
    _count?: true | TB_USUARIOCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TB_USUARIOAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TB_USUARIOSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TB_USUARIOMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TB_USUARIOMaxAggregateInputType
  }

  export type GetTB_USUARIOAggregateType<T extends TB_USUARIOAggregateArgs> = {
        [P in keyof T & keyof AggregateTB_USUARIO]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTB_USUARIO[P]>
      : GetScalarType<T[P], AggregateTB_USUARIO[P]>
  }




  export type TB_USUARIOGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_USUARIOWhereInput
    orderBy?: TB_USUARIOOrderByWithAggregationInput | TB_USUARIOOrderByWithAggregationInput[]
    by: TB_USUARIOScalarFieldEnum[] | TB_USUARIOScalarFieldEnum
    having?: TB_USUARIOScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TB_USUARIOCountAggregateInputType | true
    _avg?: TB_USUARIOAvgAggregateInputType
    _sum?: TB_USUARIOSumAggregateInputType
    _min?: TB_USUARIOMinAggregateInputType
    _max?: TB_USUARIOMaxAggregateInputType
  }

  export type TB_USUARIOGroupByOutputType = {
    SQ_USUARIO: number
    TP_USUARIO: number
    ST_USUARIO: number
    NO_USUARIO: string
    EMAIL_USUARIO: string
    SENHA_USUARIO: string
    DT_CRIACAO: Date
    DT_EDITADO: Date
    _count: TB_USUARIOCountAggregateOutputType | null
    _avg: TB_USUARIOAvgAggregateOutputType | null
    _sum: TB_USUARIOSumAggregateOutputType | null
    _min: TB_USUARIOMinAggregateOutputType | null
    _max: TB_USUARIOMaxAggregateOutputType | null
  }

  type GetTB_USUARIOGroupByPayload<T extends TB_USUARIOGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TB_USUARIOGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TB_USUARIOGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TB_USUARIOGroupByOutputType[P]>
            : GetScalarType<T[P], TB_USUARIOGroupByOutputType[P]>
        }
      >
    >


  export type TB_USUARIOSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SQ_USUARIO?: boolean
    TP_USUARIO?: boolean
    ST_USUARIO?: boolean
    NO_USUARIO?: boolean
    EMAIL_USUARIO?: boolean
    SENHA_USUARIO?: boolean
    DT_CRIACAO?: boolean
    DT_EDITADO?: boolean
    carrinho?: boolean | TB_USUARIO$carrinhoArgs<ExtArgs>
    tipoUsuario?: boolean | TB_USUARIO$tipoUsuarioArgs<ExtArgs>
  }, ExtArgs["result"]["tB_USUARIO"]>

  export type TB_USUARIOSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SQ_USUARIO?: boolean
    TP_USUARIO?: boolean
    ST_USUARIO?: boolean
    NO_USUARIO?: boolean
    EMAIL_USUARIO?: boolean
    SENHA_USUARIO?: boolean
    DT_CRIACAO?: boolean
    DT_EDITADO?: boolean
  }, ExtArgs["result"]["tB_USUARIO"]>

  export type TB_USUARIOSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SQ_USUARIO?: boolean
    TP_USUARIO?: boolean
    ST_USUARIO?: boolean
    NO_USUARIO?: boolean
    EMAIL_USUARIO?: boolean
    SENHA_USUARIO?: boolean
    DT_CRIACAO?: boolean
    DT_EDITADO?: boolean
  }, ExtArgs["result"]["tB_USUARIO"]>

  export type TB_USUARIOSelectScalar = {
    SQ_USUARIO?: boolean
    TP_USUARIO?: boolean
    ST_USUARIO?: boolean
    NO_USUARIO?: boolean
    EMAIL_USUARIO?: boolean
    SENHA_USUARIO?: boolean
    DT_CRIACAO?: boolean
    DT_EDITADO?: boolean
  }

  export type TB_USUARIOOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"SQ_USUARIO" | "TP_USUARIO" | "ST_USUARIO" | "NO_USUARIO" | "EMAIL_USUARIO" | "SENHA_USUARIO" | "DT_CRIACAO" | "DT_EDITADO", ExtArgs["result"]["tB_USUARIO"]>
  export type TB_USUARIOInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrinho?: boolean | TB_USUARIO$carrinhoArgs<ExtArgs>
    tipoUsuario?: boolean | TB_USUARIO$tipoUsuarioArgs<ExtArgs>
  }
  export type TB_USUARIOIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TB_USUARIOIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TB_USUARIOPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TB_USUARIO"
    objects: {
      carrinho: Prisma.$TB_CARRINHOPayload<ExtArgs> | null
      tipoUsuario: Prisma.$TB_TIPO_USUARIOPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      SQ_USUARIO: number
      TP_USUARIO: number
      ST_USUARIO: number
      NO_USUARIO: string
      EMAIL_USUARIO: string
      SENHA_USUARIO: string
      DT_CRIACAO: Date
      DT_EDITADO: Date
    }, ExtArgs["result"]["tB_USUARIO"]>
    composites: {}
  }

  type TB_USUARIOGetPayload<S extends boolean | null | undefined | TB_USUARIODefaultArgs> = $Result.GetResult<Prisma.$TB_USUARIOPayload, S>

  type TB_USUARIOCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TB_USUARIOFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TB_USUARIOCountAggregateInputType | true
    }

  export interface TB_USUARIODelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TB_USUARIO'], meta: { name: 'TB_USUARIO' } }
    /**
     * Find zero or one TB_USUARIO that matches the filter.
     * @param {TB_USUARIOFindUniqueArgs} args - Arguments to find a TB_USUARIO
     * @example
     * // Get one TB_USUARIO
     * const tB_USUARIO = await prisma.tB_USUARIO.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TB_USUARIOFindUniqueArgs>(args: SelectSubset<T, TB_USUARIOFindUniqueArgs<ExtArgs>>): Prisma__TB_USUARIOClient<$Result.GetResult<Prisma.$TB_USUARIOPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TB_USUARIO that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TB_USUARIOFindUniqueOrThrowArgs} args - Arguments to find a TB_USUARIO
     * @example
     * // Get one TB_USUARIO
     * const tB_USUARIO = await prisma.tB_USUARIO.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TB_USUARIOFindUniqueOrThrowArgs>(args: SelectSubset<T, TB_USUARIOFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TB_USUARIOClient<$Result.GetResult<Prisma.$TB_USUARIOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_USUARIO that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_USUARIOFindFirstArgs} args - Arguments to find a TB_USUARIO
     * @example
     * // Get one TB_USUARIO
     * const tB_USUARIO = await prisma.tB_USUARIO.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TB_USUARIOFindFirstArgs>(args?: SelectSubset<T, TB_USUARIOFindFirstArgs<ExtArgs>>): Prisma__TB_USUARIOClient<$Result.GetResult<Prisma.$TB_USUARIOPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_USUARIO that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_USUARIOFindFirstOrThrowArgs} args - Arguments to find a TB_USUARIO
     * @example
     * // Get one TB_USUARIO
     * const tB_USUARIO = await prisma.tB_USUARIO.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TB_USUARIOFindFirstOrThrowArgs>(args?: SelectSubset<T, TB_USUARIOFindFirstOrThrowArgs<ExtArgs>>): Prisma__TB_USUARIOClient<$Result.GetResult<Prisma.$TB_USUARIOPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TB_USUARIOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_USUARIOFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TB_USUARIOS
     * const tB_USUARIOS = await prisma.tB_USUARIO.findMany()
     * 
     * // Get first 10 TB_USUARIOS
     * const tB_USUARIOS = await prisma.tB_USUARIO.findMany({ take: 10 })
     * 
     * // Only select the `SQ_USUARIO`
     * const tB_USUARIOWithSQ_USUARIOOnly = await prisma.tB_USUARIO.findMany({ select: { SQ_USUARIO: true } })
     * 
     */
    findMany<T extends TB_USUARIOFindManyArgs>(args?: SelectSubset<T, TB_USUARIOFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_USUARIOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TB_USUARIO.
     * @param {TB_USUARIOCreateArgs} args - Arguments to create a TB_USUARIO.
     * @example
     * // Create one TB_USUARIO
     * const TB_USUARIO = await prisma.tB_USUARIO.create({
     *   data: {
     *     // ... data to create a TB_USUARIO
     *   }
     * })
     * 
     */
    create<T extends TB_USUARIOCreateArgs>(args: SelectSubset<T, TB_USUARIOCreateArgs<ExtArgs>>): Prisma__TB_USUARIOClient<$Result.GetResult<Prisma.$TB_USUARIOPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TB_USUARIOS.
     * @param {TB_USUARIOCreateManyArgs} args - Arguments to create many TB_USUARIOS.
     * @example
     * // Create many TB_USUARIOS
     * const tB_USUARIO = await prisma.tB_USUARIO.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TB_USUARIOCreateManyArgs>(args?: SelectSubset<T, TB_USUARIOCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TB_USUARIOS and returns the data saved in the database.
     * @param {TB_USUARIOCreateManyAndReturnArgs} args - Arguments to create many TB_USUARIOS.
     * @example
     * // Create many TB_USUARIOS
     * const tB_USUARIO = await prisma.tB_USUARIO.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TB_USUARIOS and only return the `SQ_USUARIO`
     * const tB_USUARIOWithSQ_USUARIOOnly = await prisma.tB_USUARIO.createManyAndReturn({
     *   select: { SQ_USUARIO: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TB_USUARIOCreateManyAndReturnArgs>(args?: SelectSubset<T, TB_USUARIOCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_USUARIOPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TB_USUARIO.
     * @param {TB_USUARIODeleteArgs} args - Arguments to delete one TB_USUARIO.
     * @example
     * // Delete one TB_USUARIO
     * const TB_USUARIO = await prisma.tB_USUARIO.delete({
     *   where: {
     *     // ... filter to delete one TB_USUARIO
     *   }
     * })
     * 
     */
    delete<T extends TB_USUARIODeleteArgs>(args: SelectSubset<T, TB_USUARIODeleteArgs<ExtArgs>>): Prisma__TB_USUARIOClient<$Result.GetResult<Prisma.$TB_USUARIOPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TB_USUARIO.
     * @param {TB_USUARIOUpdateArgs} args - Arguments to update one TB_USUARIO.
     * @example
     * // Update one TB_USUARIO
     * const tB_USUARIO = await prisma.tB_USUARIO.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TB_USUARIOUpdateArgs>(args: SelectSubset<T, TB_USUARIOUpdateArgs<ExtArgs>>): Prisma__TB_USUARIOClient<$Result.GetResult<Prisma.$TB_USUARIOPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TB_USUARIOS.
     * @param {TB_USUARIODeleteManyArgs} args - Arguments to filter TB_USUARIOS to delete.
     * @example
     * // Delete a few TB_USUARIOS
     * const { count } = await prisma.tB_USUARIO.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TB_USUARIODeleteManyArgs>(args?: SelectSubset<T, TB_USUARIODeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_USUARIOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_USUARIOUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TB_USUARIOS
     * const tB_USUARIO = await prisma.tB_USUARIO.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TB_USUARIOUpdateManyArgs>(args: SelectSubset<T, TB_USUARIOUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_USUARIOS and returns the data updated in the database.
     * @param {TB_USUARIOUpdateManyAndReturnArgs} args - Arguments to update many TB_USUARIOS.
     * @example
     * // Update many TB_USUARIOS
     * const tB_USUARIO = await prisma.tB_USUARIO.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TB_USUARIOS and only return the `SQ_USUARIO`
     * const tB_USUARIOWithSQ_USUARIOOnly = await prisma.tB_USUARIO.updateManyAndReturn({
     *   select: { SQ_USUARIO: true },
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
    updateManyAndReturn<T extends TB_USUARIOUpdateManyAndReturnArgs>(args: SelectSubset<T, TB_USUARIOUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_USUARIOPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TB_USUARIO.
     * @param {TB_USUARIOUpsertArgs} args - Arguments to update or create a TB_USUARIO.
     * @example
     * // Update or create a TB_USUARIO
     * const tB_USUARIO = await prisma.tB_USUARIO.upsert({
     *   create: {
     *     // ... data to create a TB_USUARIO
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TB_USUARIO we want to update
     *   }
     * })
     */
    upsert<T extends TB_USUARIOUpsertArgs>(args: SelectSubset<T, TB_USUARIOUpsertArgs<ExtArgs>>): Prisma__TB_USUARIOClient<$Result.GetResult<Prisma.$TB_USUARIOPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TB_USUARIOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_USUARIOCountArgs} args - Arguments to filter TB_USUARIOS to count.
     * @example
     * // Count the number of TB_USUARIOS
     * const count = await prisma.tB_USUARIO.count({
     *   where: {
     *     // ... the filter for the TB_USUARIOS we want to count
     *   }
     * })
    **/
    count<T extends TB_USUARIOCountArgs>(
      args?: Subset<T, TB_USUARIOCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TB_USUARIOCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TB_USUARIO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_USUARIOAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TB_USUARIOAggregateArgs>(args: Subset<T, TB_USUARIOAggregateArgs>): Prisma.PrismaPromise<GetTB_USUARIOAggregateType<T>>

    /**
     * Group by TB_USUARIO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_USUARIOGroupByArgs} args - Group by arguments.
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
      T extends TB_USUARIOGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TB_USUARIOGroupByArgs['orderBy'] }
        : { orderBy?: TB_USUARIOGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TB_USUARIOGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTB_USUARIOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TB_USUARIO model
   */
  readonly fields: TB_USUARIOFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TB_USUARIO.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TB_USUARIOClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carrinho<T extends TB_USUARIO$carrinhoArgs<ExtArgs> = {}>(args?: Subset<T, TB_USUARIO$carrinhoArgs<ExtArgs>>): Prisma__TB_CARRINHOClient<$Result.GetResult<Prisma.$TB_CARRINHOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tipoUsuario<T extends TB_USUARIO$tipoUsuarioArgs<ExtArgs> = {}>(args?: Subset<T, TB_USUARIO$tipoUsuarioArgs<ExtArgs>>): Prisma__TB_TIPO_USUARIOClient<$Result.GetResult<Prisma.$TB_TIPO_USUARIOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TB_USUARIO model
   */
  interface TB_USUARIOFieldRefs {
    readonly SQ_USUARIO: FieldRef<"TB_USUARIO", 'Int'>
    readonly TP_USUARIO: FieldRef<"TB_USUARIO", 'Int'>
    readonly ST_USUARIO: FieldRef<"TB_USUARIO", 'Int'>
    readonly NO_USUARIO: FieldRef<"TB_USUARIO", 'String'>
    readonly EMAIL_USUARIO: FieldRef<"TB_USUARIO", 'String'>
    readonly SENHA_USUARIO: FieldRef<"TB_USUARIO", 'String'>
    readonly DT_CRIACAO: FieldRef<"TB_USUARIO", 'DateTime'>
    readonly DT_EDITADO: FieldRef<"TB_USUARIO", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TB_USUARIO findUnique
   */
  export type TB_USUARIOFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_USUARIO
     */
    select?: TB_USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_USUARIO
     */
    omit?: TB_USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_USUARIOInclude<ExtArgs> | null
    /**
     * Filter, which TB_USUARIO to fetch.
     */
    where: TB_USUARIOWhereUniqueInput
  }

  /**
   * TB_USUARIO findUniqueOrThrow
   */
  export type TB_USUARIOFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_USUARIO
     */
    select?: TB_USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_USUARIO
     */
    omit?: TB_USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_USUARIOInclude<ExtArgs> | null
    /**
     * Filter, which TB_USUARIO to fetch.
     */
    where: TB_USUARIOWhereUniqueInput
  }

  /**
   * TB_USUARIO findFirst
   */
  export type TB_USUARIOFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_USUARIO
     */
    select?: TB_USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_USUARIO
     */
    omit?: TB_USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_USUARIOInclude<ExtArgs> | null
    /**
     * Filter, which TB_USUARIO to fetch.
     */
    where?: TB_USUARIOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_USUARIOS to fetch.
     */
    orderBy?: TB_USUARIOOrderByWithRelationInput | TB_USUARIOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_USUARIOS.
     */
    cursor?: TB_USUARIOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_USUARIOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_USUARIOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_USUARIOS.
     */
    distinct?: TB_USUARIOScalarFieldEnum | TB_USUARIOScalarFieldEnum[]
  }

  /**
   * TB_USUARIO findFirstOrThrow
   */
  export type TB_USUARIOFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_USUARIO
     */
    select?: TB_USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_USUARIO
     */
    omit?: TB_USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_USUARIOInclude<ExtArgs> | null
    /**
     * Filter, which TB_USUARIO to fetch.
     */
    where?: TB_USUARIOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_USUARIOS to fetch.
     */
    orderBy?: TB_USUARIOOrderByWithRelationInput | TB_USUARIOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_USUARIOS.
     */
    cursor?: TB_USUARIOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_USUARIOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_USUARIOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_USUARIOS.
     */
    distinct?: TB_USUARIOScalarFieldEnum | TB_USUARIOScalarFieldEnum[]
  }

  /**
   * TB_USUARIO findMany
   */
  export type TB_USUARIOFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_USUARIO
     */
    select?: TB_USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_USUARIO
     */
    omit?: TB_USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_USUARIOInclude<ExtArgs> | null
    /**
     * Filter, which TB_USUARIOS to fetch.
     */
    where?: TB_USUARIOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_USUARIOS to fetch.
     */
    orderBy?: TB_USUARIOOrderByWithRelationInput | TB_USUARIOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TB_USUARIOS.
     */
    cursor?: TB_USUARIOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_USUARIOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_USUARIOS.
     */
    skip?: number
    distinct?: TB_USUARIOScalarFieldEnum | TB_USUARIOScalarFieldEnum[]
  }

  /**
   * TB_USUARIO create
   */
  export type TB_USUARIOCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_USUARIO
     */
    select?: TB_USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_USUARIO
     */
    omit?: TB_USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_USUARIOInclude<ExtArgs> | null
    /**
     * The data needed to create a TB_USUARIO.
     */
    data: XOR<TB_USUARIOCreateInput, TB_USUARIOUncheckedCreateInput>
  }

  /**
   * TB_USUARIO createMany
   */
  export type TB_USUARIOCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TB_USUARIOS.
     */
    data: TB_USUARIOCreateManyInput | TB_USUARIOCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TB_USUARIO createManyAndReturn
   */
  export type TB_USUARIOCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_USUARIO
     */
    select?: TB_USUARIOSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_USUARIO
     */
    omit?: TB_USUARIOOmit<ExtArgs> | null
    /**
     * The data used to create many TB_USUARIOS.
     */
    data: TB_USUARIOCreateManyInput | TB_USUARIOCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TB_USUARIO update
   */
  export type TB_USUARIOUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_USUARIO
     */
    select?: TB_USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_USUARIO
     */
    omit?: TB_USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_USUARIOInclude<ExtArgs> | null
    /**
     * The data needed to update a TB_USUARIO.
     */
    data: XOR<TB_USUARIOUpdateInput, TB_USUARIOUncheckedUpdateInput>
    /**
     * Choose, which TB_USUARIO to update.
     */
    where: TB_USUARIOWhereUniqueInput
  }

  /**
   * TB_USUARIO updateMany
   */
  export type TB_USUARIOUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TB_USUARIOS.
     */
    data: XOR<TB_USUARIOUpdateManyMutationInput, TB_USUARIOUncheckedUpdateManyInput>
    /**
     * Filter which TB_USUARIOS to update
     */
    where?: TB_USUARIOWhereInput
    /**
     * Limit how many TB_USUARIOS to update.
     */
    limit?: number
  }

  /**
   * TB_USUARIO updateManyAndReturn
   */
  export type TB_USUARIOUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_USUARIO
     */
    select?: TB_USUARIOSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_USUARIO
     */
    omit?: TB_USUARIOOmit<ExtArgs> | null
    /**
     * The data used to update TB_USUARIOS.
     */
    data: XOR<TB_USUARIOUpdateManyMutationInput, TB_USUARIOUncheckedUpdateManyInput>
    /**
     * Filter which TB_USUARIOS to update
     */
    where?: TB_USUARIOWhereInput
    /**
     * Limit how many TB_USUARIOS to update.
     */
    limit?: number
  }

  /**
   * TB_USUARIO upsert
   */
  export type TB_USUARIOUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_USUARIO
     */
    select?: TB_USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_USUARIO
     */
    omit?: TB_USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_USUARIOInclude<ExtArgs> | null
    /**
     * The filter to search for the TB_USUARIO to update in case it exists.
     */
    where: TB_USUARIOWhereUniqueInput
    /**
     * In case the TB_USUARIO found by the `where` argument doesn't exist, create a new TB_USUARIO with this data.
     */
    create: XOR<TB_USUARIOCreateInput, TB_USUARIOUncheckedCreateInput>
    /**
     * In case the TB_USUARIO was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TB_USUARIOUpdateInput, TB_USUARIOUncheckedUpdateInput>
  }

  /**
   * TB_USUARIO delete
   */
  export type TB_USUARIODeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_USUARIO
     */
    select?: TB_USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_USUARIO
     */
    omit?: TB_USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_USUARIOInclude<ExtArgs> | null
    /**
     * Filter which TB_USUARIO to delete.
     */
    where: TB_USUARIOWhereUniqueInput
  }

  /**
   * TB_USUARIO deleteMany
   */
  export type TB_USUARIODeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_USUARIOS to delete
     */
    where?: TB_USUARIOWhereInput
    /**
     * Limit how many TB_USUARIOS to delete.
     */
    limit?: number
  }

  /**
   * TB_USUARIO.carrinho
   */
  export type TB_USUARIO$carrinhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CARRINHO
     */
    select?: TB_CARRINHOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CARRINHO
     */
    omit?: TB_CARRINHOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_CARRINHOInclude<ExtArgs> | null
    where?: TB_CARRINHOWhereInput
  }

  /**
   * TB_USUARIO.tipoUsuario
   */
  export type TB_USUARIO$tipoUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TIPO_USUARIO
     */
    select?: TB_TIPO_USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TIPO_USUARIO
     */
    omit?: TB_TIPO_USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TIPO_USUARIOInclude<ExtArgs> | null
    where?: TB_TIPO_USUARIOWhereInput
  }

  /**
   * TB_USUARIO without action
   */
  export type TB_USUARIODefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_USUARIO
     */
    select?: TB_USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_USUARIO
     */
    omit?: TB_USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_USUARIOInclude<ExtArgs> | null
  }


  /**
   * Model TB_TIPO_USUARIO
   */

  export type AggregateTB_TIPO_USUARIO = {
    _count: TB_TIPO_USUARIOCountAggregateOutputType | null
    _avg: TB_TIPO_USUARIOAvgAggregateOutputType | null
    _sum: TB_TIPO_USUARIOSumAggregateOutputType | null
    _min: TB_TIPO_USUARIOMinAggregateOutputType | null
    _max: TB_TIPO_USUARIOMaxAggregateOutputType | null
  }

  export type TB_TIPO_USUARIOAvgAggregateOutputType = {
    SQ_TIPO_USUARIO: number | null
    SQ_USUARIO: number | null
    SQ_CATEGORIA_USUARIO: number | null
  }

  export type TB_TIPO_USUARIOSumAggregateOutputType = {
    SQ_TIPO_USUARIO: number | null
    SQ_USUARIO: number | null
    SQ_CATEGORIA_USUARIO: number | null
  }

  export type TB_TIPO_USUARIOMinAggregateOutputType = {
    SQ_TIPO_USUARIO: number | null
    SQ_USUARIO: number | null
    SQ_CATEGORIA_USUARIO: number | null
  }

  export type TB_TIPO_USUARIOMaxAggregateOutputType = {
    SQ_TIPO_USUARIO: number | null
    SQ_USUARIO: number | null
    SQ_CATEGORIA_USUARIO: number | null
  }

  export type TB_TIPO_USUARIOCountAggregateOutputType = {
    SQ_TIPO_USUARIO: number
    SQ_USUARIO: number
    SQ_CATEGORIA_USUARIO: number
    _all: number
  }


  export type TB_TIPO_USUARIOAvgAggregateInputType = {
    SQ_TIPO_USUARIO?: true
    SQ_USUARIO?: true
    SQ_CATEGORIA_USUARIO?: true
  }

  export type TB_TIPO_USUARIOSumAggregateInputType = {
    SQ_TIPO_USUARIO?: true
    SQ_USUARIO?: true
    SQ_CATEGORIA_USUARIO?: true
  }

  export type TB_TIPO_USUARIOMinAggregateInputType = {
    SQ_TIPO_USUARIO?: true
    SQ_USUARIO?: true
    SQ_CATEGORIA_USUARIO?: true
  }

  export type TB_TIPO_USUARIOMaxAggregateInputType = {
    SQ_TIPO_USUARIO?: true
    SQ_USUARIO?: true
    SQ_CATEGORIA_USUARIO?: true
  }

  export type TB_TIPO_USUARIOCountAggregateInputType = {
    SQ_TIPO_USUARIO?: true
    SQ_USUARIO?: true
    SQ_CATEGORIA_USUARIO?: true
    _all?: true
  }

  export type TB_TIPO_USUARIOAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_TIPO_USUARIO to aggregate.
     */
    where?: TB_TIPO_USUARIOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_TIPO_USUARIOS to fetch.
     */
    orderBy?: TB_TIPO_USUARIOOrderByWithRelationInput | TB_TIPO_USUARIOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TB_TIPO_USUARIOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_TIPO_USUARIOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_TIPO_USUARIOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TB_TIPO_USUARIOS
    **/
    _count?: true | TB_TIPO_USUARIOCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TB_TIPO_USUARIOAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TB_TIPO_USUARIOSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TB_TIPO_USUARIOMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TB_TIPO_USUARIOMaxAggregateInputType
  }

  export type GetTB_TIPO_USUARIOAggregateType<T extends TB_TIPO_USUARIOAggregateArgs> = {
        [P in keyof T & keyof AggregateTB_TIPO_USUARIO]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTB_TIPO_USUARIO[P]>
      : GetScalarType<T[P], AggregateTB_TIPO_USUARIO[P]>
  }




  export type TB_TIPO_USUARIOGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_TIPO_USUARIOWhereInput
    orderBy?: TB_TIPO_USUARIOOrderByWithAggregationInput | TB_TIPO_USUARIOOrderByWithAggregationInput[]
    by: TB_TIPO_USUARIOScalarFieldEnum[] | TB_TIPO_USUARIOScalarFieldEnum
    having?: TB_TIPO_USUARIOScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TB_TIPO_USUARIOCountAggregateInputType | true
    _avg?: TB_TIPO_USUARIOAvgAggregateInputType
    _sum?: TB_TIPO_USUARIOSumAggregateInputType
    _min?: TB_TIPO_USUARIOMinAggregateInputType
    _max?: TB_TIPO_USUARIOMaxAggregateInputType
  }

  export type TB_TIPO_USUARIOGroupByOutputType = {
    SQ_TIPO_USUARIO: number
    SQ_USUARIO: number
    SQ_CATEGORIA_USUARIO: number
    _count: TB_TIPO_USUARIOCountAggregateOutputType | null
    _avg: TB_TIPO_USUARIOAvgAggregateOutputType | null
    _sum: TB_TIPO_USUARIOSumAggregateOutputType | null
    _min: TB_TIPO_USUARIOMinAggregateOutputType | null
    _max: TB_TIPO_USUARIOMaxAggregateOutputType | null
  }

  type GetTB_TIPO_USUARIOGroupByPayload<T extends TB_TIPO_USUARIOGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TB_TIPO_USUARIOGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TB_TIPO_USUARIOGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TB_TIPO_USUARIOGroupByOutputType[P]>
            : GetScalarType<T[P], TB_TIPO_USUARIOGroupByOutputType[P]>
        }
      >
    >


  export type TB_TIPO_USUARIOSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SQ_TIPO_USUARIO?: boolean
    SQ_USUARIO?: boolean
    SQ_CATEGORIA_USUARIO?: boolean
    usuario?: boolean | TB_USUARIODefaultArgs<ExtArgs>
    categoriaUsuario?: boolean | TB_CATEGORIA_USUARIODefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_TIPO_USUARIO"]>

  export type TB_TIPO_USUARIOSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SQ_TIPO_USUARIO?: boolean
    SQ_USUARIO?: boolean
    SQ_CATEGORIA_USUARIO?: boolean
    usuario?: boolean | TB_USUARIODefaultArgs<ExtArgs>
    categoriaUsuario?: boolean | TB_CATEGORIA_USUARIODefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_TIPO_USUARIO"]>

  export type TB_TIPO_USUARIOSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SQ_TIPO_USUARIO?: boolean
    SQ_USUARIO?: boolean
    SQ_CATEGORIA_USUARIO?: boolean
    usuario?: boolean | TB_USUARIODefaultArgs<ExtArgs>
    categoriaUsuario?: boolean | TB_CATEGORIA_USUARIODefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_TIPO_USUARIO"]>

  export type TB_TIPO_USUARIOSelectScalar = {
    SQ_TIPO_USUARIO?: boolean
    SQ_USUARIO?: boolean
    SQ_CATEGORIA_USUARIO?: boolean
  }

  export type TB_TIPO_USUARIOOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"SQ_TIPO_USUARIO" | "SQ_USUARIO" | "SQ_CATEGORIA_USUARIO", ExtArgs["result"]["tB_TIPO_USUARIO"]>
  export type TB_TIPO_USUARIOInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | TB_USUARIODefaultArgs<ExtArgs>
    categoriaUsuario?: boolean | TB_CATEGORIA_USUARIODefaultArgs<ExtArgs>
  }
  export type TB_TIPO_USUARIOIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | TB_USUARIODefaultArgs<ExtArgs>
    categoriaUsuario?: boolean | TB_CATEGORIA_USUARIODefaultArgs<ExtArgs>
  }
  export type TB_TIPO_USUARIOIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | TB_USUARIODefaultArgs<ExtArgs>
    categoriaUsuario?: boolean | TB_CATEGORIA_USUARIODefaultArgs<ExtArgs>
  }

  export type $TB_TIPO_USUARIOPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TB_TIPO_USUARIO"
    objects: {
      usuario: Prisma.$TB_USUARIOPayload<ExtArgs>
      categoriaUsuario: Prisma.$TB_CATEGORIA_USUARIOPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      SQ_TIPO_USUARIO: number
      SQ_USUARIO: number
      SQ_CATEGORIA_USUARIO: number
    }, ExtArgs["result"]["tB_TIPO_USUARIO"]>
    composites: {}
  }

  type TB_TIPO_USUARIOGetPayload<S extends boolean | null | undefined | TB_TIPO_USUARIODefaultArgs> = $Result.GetResult<Prisma.$TB_TIPO_USUARIOPayload, S>

  type TB_TIPO_USUARIOCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TB_TIPO_USUARIOFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TB_TIPO_USUARIOCountAggregateInputType | true
    }

  export interface TB_TIPO_USUARIODelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TB_TIPO_USUARIO'], meta: { name: 'TB_TIPO_USUARIO' } }
    /**
     * Find zero or one TB_TIPO_USUARIO that matches the filter.
     * @param {TB_TIPO_USUARIOFindUniqueArgs} args - Arguments to find a TB_TIPO_USUARIO
     * @example
     * // Get one TB_TIPO_USUARIO
     * const tB_TIPO_USUARIO = await prisma.tB_TIPO_USUARIO.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TB_TIPO_USUARIOFindUniqueArgs>(args: SelectSubset<T, TB_TIPO_USUARIOFindUniqueArgs<ExtArgs>>): Prisma__TB_TIPO_USUARIOClient<$Result.GetResult<Prisma.$TB_TIPO_USUARIOPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TB_TIPO_USUARIO that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TB_TIPO_USUARIOFindUniqueOrThrowArgs} args - Arguments to find a TB_TIPO_USUARIO
     * @example
     * // Get one TB_TIPO_USUARIO
     * const tB_TIPO_USUARIO = await prisma.tB_TIPO_USUARIO.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TB_TIPO_USUARIOFindUniqueOrThrowArgs>(args: SelectSubset<T, TB_TIPO_USUARIOFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TB_TIPO_USUARIOClient<$Result.GetResult<Prisma.$TB_TIPO_USUARIOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_TIPO_USUARIO that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_TIPO_USUARIOFindFirstArgs} args - Arguments to find a TB_TIPO_USUARIO
     * @example
     * // Get one TB_TIPO_USUARIO
     * const tB_TIPO_USUARIO = await prisma.tB_TIPO_USUARIO.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TB_TIPO_USUARIOFindFirstArgs>(args?: SelectSubset<T, TB_TIPO_USUARIOFindFirstArgs<ExtArgs>>): Prisma__TB_TIPO_USUARIOClient<$Result.GetResult<Prisma.$TB_TIPO_USUARIOPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_TIPO_USUARIO that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_TIPO_USUARIOFindFirstOrThrowArgs} args - Arguments to find a TB_TIPO_USUARIO
     * @example
     * // Get one TB_TIPO_USUARIO
     * const tB_TIPO_USUARIO = await prisma.tB_TIPO_USUARIO.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TB_TIPO_USUARIOFindFirstOrThrowArgs>(args?: SelectSubset<T, TB_TIPO_USUARIOFindFirstOrThrowArgs<ExtArgs>>): Prisma__TB_TIPO_USUARIOClient<$Result.GetResult<Prisma.$TB_TIPO_USUARIOPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TB_TIPO_USUARIOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_TIPO_USUARIOFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TB_TIPO_USUARIOS
     * const tB_TIPO_USUARIOS = await prisma.tB_TIPO_USUARIO.findMany()
     * 
     * // Get first 10 TB_TIPO_USUARIOS
     * const tB_TIPO_USUARIOS = await prisma.tB_TIPO_USUARIO.findMany({ take: 10 })
     * 
     * // Only select the `SQ_TIPO_USUARIO`
     * const tB_TIPO_USUARIOWithSQ_TIPO_USUARIOOnly = await prisma.tB_TIPO_USUARIO.findMany({ select: { SQ_TIPO_USUARIO: true } })
     * 
     */
    findMany<T extends TB_TIPO_USUARIOFindManyArgs>(args?: SelectSubset<T, TB_TIPO_USUARIOFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_TIPO_USUARIOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TB_TIPO_USUARIO.
     * @param {TB_TIPO_USUARIOCreateArgs} args - Arguments to create a TB_TIPO_USUARIO.
     * @example
     * // Create one TB_TIPO_USUARIO
     * const TB_TIPO_USUARIO = await prisma.tB_TIPO_USUARIO.create({
     *   data: {
     *     // ... data to create a TB_TIPO_USUARIO
     *   }
     * })
     * 
     */
    create<T extends TB_TIPO_USUARIOCreateArgs>(args: SelectSubset<T, TB_TIPO_USUARIOCreateArgs<ExtArgs>>): Prisma__TB_TIPO_USUARIOClient<$Result.GetResult<Prisma.$TB_TIPO_USUARIOPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TB_TIPO_USUARIOS.
     * @param {TB_TIPO_USUARIOCreateManyArgs} args - Arguments to create many TB_TIPO_USUARIOS.
     * @example
     * // Create many TB_TIPO_USUARIOS
     * const tB_TIPO_USUARIO = await prisma.tB_TIPO_USUARIO.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TB_TIPO_USUARIOCreateManyArgs>(args?: SelectSubset<T, TB_TIPO_USUARIOCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TB_TIPO_USUARIOS and returns the data saved in the database.
     * @param {TB_TIPO_USUARIOCreateManyAndReturnArgs} args - Arguments to create many TB_TIPO_USUARIOS.
     * @example
     * // Create many TB_TIPO_USUARIOS
     * const tB_TIPO_USUARIO = await prisma.tB_TIPO_USUARIO.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TB_TIPO_USUARIOS and only return the `SQ_TIPO_USUARIO`
     * const tB_TIPO_USUARIOWithSQ_TIPO_USUARIOOnly = await prisma.tB_TIPO_USUARIO.createManyAndReturn({
     *   select: { SQ_TIPO_USUARIO: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TB_TIPO_USUARIOCreateManyAndReturnArgs>(args?: SelectSubset<T, TB_TIPO_USUARIOCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_TIPO_USUARIOPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TB_TIPO_USUARIO.
     * @param {TB_TIPO_USUARIODeleteArgs} args - Arguments to delete one TB_TIPO_USUARIO.
     * @example
     * // Delete one TB_TIPO_USUARIO
     * const TB_TIPO_USUARIO = await prisma.tB_TIPO_USUARIO.delete({
     *   where: {
     *     // ... filter to delete one TB_TIPO_USUARIO
     *   }
     * })
     * 
     */
    delete<T extends TB_TIPO_USUARIODeleteArgs>(args: SelectSubset<T, TB_TIPO_USUARIODeleteArgs<ExtArgs>>): Prisma__TB_TIPO_USUARIOClient<$Result.GetResult<Prisma.$TB_TIPO_USUARIOPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TB_TIPO_USUARIO.
     * @param {TB_TIPO_USUARIOUpdateArgs} args - Arguments to update one TB_TIPO_USUARIO.
     * @example
     * // Update one TB_TIPO_USUARIO
     * const tB_TIPO_USUARIO = await prisma.tB_TIPO_USUARIO.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TB_TIPO_USUARIOUpdateArgs>(args: SelectSubset<T, TB_TIPO_USUARIOUpdateArgs<ExtArgs>>): Prisma__TB_TIPO_USUARIOClient<$Result.GetResult<Prisma.$TB_TIPO_USUARIOPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TB_TIPO_USUARIOS.
     * @param {TB_TIPO_USUARIODeleteManyArgs} args - Arguments to filter TB_TIPO_USUARIOS to delete.
     * @example
     * // Delete a few TB_TIPO_USUARIOS
     * const { count } = await prisma.tB_TIPO_USUARIO.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TB_TIPO_USUARIODeleteManyArgs>(args?: SelectSubset<T, TB_TIPO_USUARIODeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_TIPO_USUARIOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_TIPO_USUARIOUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TB_TIPO_USUARIOS
     * const tB_TIPO_USUARIO = await prisma.tB_TIPO_USUARIO.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TB_TIPO_USUARIOUpdateManyArgs>(args: SelectSubset<T, TB_TIPO_USUARIOUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_TIPO_USUARIOS and returns the data updated in the database.
     * @param {TB_TIPO_USUARIOUpdateManyAndReturnArgs} args - Arguments to update many TB_TIPO_USUARIOS.
     * @example
     * // Update many TB_TIPO_USUARIOS
     * const tB_TIPO_USUARIO = await prisma.tB_TIPO_USUARIO.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TB_TIPO_USUARIOS and only return the `SQ_TIPO_USUARIO`
     * const tB_TIPO_USUARIOWithSQ_TIPO_USUARIOOnly = await prisma.tB_TIPO_USUARIO.updateManyAndReturn({
     *   select: { SQ_TIPO_USUARIO: true },
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
    updateManyAndReturn<T extends TB_TIPO_USUARIOUpdateManyAndReturnArgs>(args: SelectSubset<T, TB_TIPO_USUARIOUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_TIPO_USUARIOPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TB_TIPO_USUARIO.
     * @param {TB_TIPO_USUARIOUpsertArgs} args - Arguments to update or create a TB_TIPO_USUARIO.
     * @example
     * // Update or create a TB_TIPO_USUARIO
     * const tB_TIPO_USUARIO = await prisma.tB_TIPO_USUARIO.upsert({
     *   create: {
     *     // ... data to create a TB_TIPO_USUARIO
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TB_TIPO_USUARIO we want to update
     *   }
     * })
     */
    upsert<T extends TB_TIPO_USUARIOUpsertArgs>(args: SelectSubset<T, TB_TIPO_USUARIOUpsertArgs<ExtArgs>>): Prisma__TB_TIPO_USUARIOClient<$Result.GetResult<Prisma.$TB_TIPO_USUARIOPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TB_TIPO_USUARIOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_TIPO_USUARIOCountArgs} args - Arguments to filter TB_TIPO_USUARIOS to count.
     * @example
     * // Count the number of TB_TIPO_USUARIOS
     * const count = await prisma.tB_TIPO_USUARIO.count({
     *   where: {
     *     // ... the filter for the TB_TIPO_USUARIOS we want to count
     *   }
     * })
    **/
    count<T extends TB_TIPO_USUARIOCountArgs>(
      args?: Subset<T, TB_TIPO_USUARIOCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TB_TIPO_USUARIOCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TB_TIPO_USUARIO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_TIPO_USUARIOAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TB_TIPO_USUARIOAggregateArgs>(args: Subset<T, TB_TIPO_USUARIOAggregateArgs>): Prisma.PrismaPromise<GetTB_TIPO_USUARIOAggregateType<T>>

    /**
     * Group by TB_TIPO_USUARIO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_TIPO_USUARIOGroupByArgs} args - Group by arguments.
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
      T extends TB_TIPO_USUARIOGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TB_TIPO_USUARIOGroupByArgs['orderBy'] }
        : { orderBy?: TB_TIPO_USUARIOGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TB_TIPO_USUARIOGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTB_TIPO_USUARIOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TB_TIPO_USUARIO model
   */
  readonly fields: TB_TIPO_USUARIOFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TB_TIPO_USUARIO.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TB_TIPO_USUARIOClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends TB_USUARIODefaultArgs<ExtArgs> = {}>(args?: Subset<T, TB_USUARIODefaultArgs<ExtArgs>>): Prisma__TB_USUARIOClient<$Result.GetResult<Prisma.$TB_USUARIOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categoriaUsuario<T extends TB_CATEGORIA_USUARIODefaultArgs<ExtArgs> = {}>(args?: Subset<T, TB_CATEGORIA_USUARIODefaultArgs<ExtArgs>>): Prisma__TB_CATEGORIA_USUARIOClient<$Result.GetResult<Prisma.$TB_CATEGORIA_USUARIOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TB_TIPO_USUARIO model
   */
  interface TB_TIPO_USUARIOFieldRefs {
    readonly SQ_TIPO_USUARIO: FieldRef<"TB_TIPO_USUARIO", 'Int'>
    readonly SQ_USUARIO: FieldRef<"TB_TIPO_USUARIO", 'Int'>
    readonly SQ_CATEGORIA_USUARIO: FieldRef<"TB_TIPO_USUARIO", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TB_TIPO_USUARIO findUnique
   */
  export type TB_TIPO_USUARIOFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TIPO_USUARIO
     */
    select?: TB_TIPO_USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TIPO_USUARIO
     */
    omit?: TB_TIPO_USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TIPO_USUARIOInclude<ExtArgs> | null
    /**
     * Filter, which TB_TIPO_USUARIO to fetch.
     */
    where: TB_TIPO_USUARIOWhereUniqueInput
  }

  /**
   * TB_TIPO_USUARIO findUniqueOrThrow
   */
  export type TB_TIPO_USUARIOFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TIPO_USUARIO
     */
    select?: TB_TIPO_USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TIPO_USUARIO
     */
    omit?: TB_TIPO_USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TIPO_USUARIOInclude<ExtArgs> | null
    /**
     * Filter, which TB_TIPO_USUARIO to fetch.
     */
    where: TB_TIPO_USUARIOWhereUniqueInput
  }

  /**
   * TB_TIPO_USUARIO findFirst
   */
  export type TB_TIPO_USUARIOFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TIPO_USUARIO
     */
    select?: TB_TIPO_USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TIPO_USUARIO
     */
    omit?: TB_TIPO_USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TIPO_USUARIOInclude<ExtArgs> | null
    /**
     * Filter, which TB_TIPO_USUARIO to fetch.
     */
    where?: TB_TIPO_USUARIOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_TIPO_USUARIOS to fetch.
     */
    orderBy?: TB_TIPO_USUARIOOrderByWithRelationInput | TB_TIPO_USUARIOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_TIPO_USUARIOS.
     */
    cursor?: TB_TIPO_USUARIOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_TIPO_USUARIOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_TIPO_USUARIOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_TIPO_USUARIOS.
     */
    distinct?: TB_TIPO_USUARIOScalarFieldEnum | TB_TIPO_USUARIOScalarFieldEnum[]
  }

  /**
   * TB_TIPO_USUARIO findFirstOrThrow
   */
  export type TB_TIPO_USUARIOFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TIPO_USUARIO
     */
    select?: TB_TIPO_USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TIPO_USUARIO
     */
    omit?: TB_TIPO_USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TIPO_USUARIOInclude<ExtArgs> | null
    /**
     * Filter, which TB_TIPO_USUARIO to fetch.
     */
    where?: TB_TIPO_USUARIOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_TIPO_USUARIOS to fetch.
     */
    orderBy?: TB_TIPO_USUARIOOrderByWithRelationInput | TB_TIPO_USUARIOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_TIPO_USUARIOS.
     */
    cursor?: TB_TIPO_USUARIOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_TIPO_USUARIOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_TIPO_USUARIOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_TIPO_USUARIOS.
     */
    distinct?: TB_TIPO_USUARIOScalarFieldEnum | TB_TIPO_USUARIOScalarFieldEnum[]
  }

  /**
   * TB_TIPO_USUARIO findMany
   */
  export type TB_TIPO_USUARIOFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TIPO_USUARIO
     */
    select?: TB_TIPO_USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TIPO_USUARIO
     */
    omit?: TB_TIPO_USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TIPO_USUARIOInclude<ExtArgs> | null
    /**
     * Filter, which TB_TIPO_USUARIOS to fetch.
     */
    where?: TB_TIPO_USUARIOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_TIPO_USUARIOS to fetch.
     */
    orderBy?: TB_TIPO_USUARIOOrderByWithRelationInput | TB_TIPO_USUARIOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TB_TIPO_USUARIOS.
     */
    cursor?: TB_TIPO_USUARIOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_TIPO_USUARIOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_TIPO_USUARIOS.
     */
    skip?: number
    distinct?: TB_TIPO_USUARIOScalarFieldEnum | TB_TIPO_USUARIOScalarFieldEnum[]
  }

  /**
   * TB_TIPO_USUARIO create
   */
  export type TB_TIPO_USUARIOCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TIPO_USUARIO
     */
    select?: TB_TIPO_USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TIPO_USUARIO
     */
    omit?: TB_TIPO_USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TIPO_USUARIOInclude<ExtArgs> | null
    /**
     * The data needed to create a TB_TIPO_USUARIO.
     */
    data: XOR<TB_TIPO_USUARIOCreateInput, TB_TIPO_USUARIOUncheckedCreateInput>
  }

  /**
   * TB_TIPO_USUARIO createMany
   */
  export type TB_TIPO_USUARIOCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TB_TIPO_USUARIOS.
     */
    data: TB_TIPO_USUARIOCreateManyInput | TB_TIPO_USUARIOCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TB_TIPO_USUARIO createManyAndReturn
   */
  export type TB_TIPO_USUARIOCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TIPO_USUARIO
     */
    select?: TB_TIPO_USUARIOSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TIPO_USUARIO
     */
    omit?: TB_TIPO_USUARIOOmit<ExtArgs> | null
    /**
     * The data used to create many TB_TIPO_USUARIOS.
     */
    data: TB_TIPO_USUARIOCreateManyInput | TB_TIPO_USUARIOCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TIPO_USUARIOIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TB_TIPO_USUARIO update
   */
  export type TB_TIPO_USUARIOUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TIPO_USUARIO
     */
    select?: TB_TIPO_USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TIPO_USUARIO
     */
    omit?: TB_TIPO_USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TIPO_USUARIOInclude<ExtArgs> | null
    /**
     * The data needed to update a TB_TIPO_USUARIO.
     */
    data: XOR<TB_TIPO_USUARIOUpdateInput, TB_TIPO_USUARIOUncheckedUpdateInput>
    /**
     * Choose, which TB_TIPO_USUARIO to update.
     */
    where: TB_TIPO_USUARIOWhereUniqueInput
  }

  /**
   * TB_TIPO_USUARIO updateMany
   */
  export type TB_TIPO_USUARIOUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TB_TIPO_USUARIOS.
     */
    data: XOR<TB_TIPO_USUARIOUpdateManyMutationInput, TB_TIPO_USUARIOUncheckedUpdateManyInput>
    /**
     * Filter which TB_TIPO_USUARIOS to update
     */
    where?: TB_TIPO_USUARIOWhereInput
    /**
     * Limit how many TB_TIPO_USUARIOS to update.
     */
    limit?: number
  }

  /**
   * TB_TIPO_USUARIO updateManyAndReturn
   */
  export type TB_TIPO_USUARIOUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TIPO_USUARIO
     */
    select?: TB_TIPO_USUARIOSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TIPO_USUARIO
     */
    omit?: TB_TIPO_USUARIOOmit<ExtArgs> | null
    /**
     * The data used to update TB_TIPO_USUARIOS.
     */
    data: XOR<TB_TIPO_USUARIOUpdateManyMutationInput, TB_TIPO_USUARIOUncheckedUpdateManyInput>
    /**
     * Filter which TB_TIPO_USUARIOS to update
     */
    where?: TB_TIPO_USUARIOWhereInput
    /**
     * Limit how many TB_TIPO_USUARIOS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TIPO_USUARIOIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TB_TIPO_USUARIO upsert
   */
  export type TB_TIPO_USUARIOUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TIPO_USUARIO
     */
    select?: TB_TIPO_USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TIPO_USUARIO
     */
    omit?: TB_TIPO_USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TIPO_USUARIOInclude<ExtArgs> | null
    /**
     * The filter to search for the TB_TIPO_USUARIO to update in case it exists.
     */
    where: TB_TIPO_USUARIOWhereUniqueInput
    /**
     * In case the TB_TIPO_USUARIO found by the `where` argument doesn't exist, create a new TB_TIPO_USUARIO with this data.
     */
    create: XOR<TB_TIPO_USUARIOCreateInput, TB_TIPO_USUARIOUncheckedCreateInput>
    /**
     * In case the TB_TIPO_USUARIO was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TB_TIPO_USUARIOUpdateInput, TB_TIPO_USUARIOUncheckedUpdateInput>
  }

  /**
   * TB_TIPO_USUARIO delete
   */
  export type TB_TIPO_USUARIODeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TIPO_USUARIO
     */
    select?: TB_TIPO_USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TIPO_USUARIO
     */
    omit?: TB_TIPO_USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TIPO_USUARIOInclude<ExtArgs> | null
    /**
     * Filter which TB_TIPO_USUARIO to delete.
     */
    where: TB_TIPO_USUARIOWhereUniqueInput
  }

  /**
   * TB_TIPO_USUARIO deleteMany
   */
  export type TB_TIPO_USUARIODeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_TIPO_USUARIOS to delete
     */
    where?: TB_TIPO_USUARIOWhereInput
    /**
     * Limit how many TB_TIPO_USUARIOS to delete.
     */
    limit?: number
  }

  /**
   * TB_TIPO_USUARIO without action
   */
  export type TB_TIPO_USUARIODefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TIPO_USUARIO
     */
    select?: TB_TIPO_USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TIPO_USUARIO
     */
    omit?: TB_TIPO_USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TIPO_USUARIOInclude<ExtArgs> | null
  }


  /**
   * Model TB_CATEGORIA_USUARIO
   */

  export type AggregateTB_CATEGORIA_USUARIO = {
    _count: TB_CATEGORIA_USUARIOCountAggregateOutputType | null
    _avg: TB_CATEGORIA_USUARIOAvgAggregateOutputType | null
    _sum: TB_CATEGORIA_USUARIOSumAggregateOutputType | null
    _min: TB_CATEGORIA_USUARIOMinAggregateOutputType | null
    _max: TB_CATEGORIA_USUARIOMaxAggregateOutputType | null
  }

  export type TB_CATEGORIA_USUARIOAvgAggregateOutputType = {
    SQ_CATEGORIA_USUARIO: number | null
  }

  export type TB_CATEGORIA_USUARIOSumAggregateOutputType = {
    SQ_CATEGORIA_USUARIO: number | null
  }

  export type TB_CATEGORIA_USUARIOMinAggregateOutputType = {
    SQ_CATEGORIA_USUARIO: number | null
    NO_CATEGORIA: string | null
  }

  export type TB_CATEGORIA_USUARIOMaxAggregateOutputType = {
    SQ_CATEGORIA_USUARIO: number | null
    NO_CATEGORIA: string | null
  }

  export type TB_CATEGORIA_USUARIOCountAggregateOutputType = {
    SQ_CATEGORIA_USUARIO: number
    NO_CATEGORIA: number
    _all: number
  }


  export type TB_CATEGORIA_USUARIOAvgAggregateInputType = {
    SQ_CATEGORIA_USUARIO?: true
  }

  export type TB_CATEGORIA_USUARIOSumAggregateInputType = {
    SQ_CATEGORIA_USUARIO?: true
  }

  export type TB_CATEGORIA_USUARIOMinAggregateInputType = {
    SQ_CATEGORIA_USUARIO?: true
    NO_CATEGORIA?: true
  }

  export type TB_CATEGORIA_USUARIOMaxAggregateInputType = {
    SQ_CATEGORIA_USUARIO?: true
    NO_CATEGORIA?: true
  }

  export type TB_CATEGORIA_USUARIOCountAggregateInputType = {
    SQ_CATEGORIA_USUARIO?: true
    NO_CATEGORIA?: true
    _all?: true
  }

  export type TB_CATEGORIA_USUARIOAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_CATEGORIA_USUARIO to aggregate.
     */
    where?: TB_CATEGORIA_USUARIOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_CATEGORIA_USUARIOS to fetch.
     */
    orderBy?: TB_CATEGORIA_USUARIOOrderByWithRelationInput | TB_CATEGORIA_USUARIOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TB_CATEGORIA_USUARIOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_CATEGORIA_USUARIOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_CATEGORIA_USUARIOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TB_CATEGORIA_USUARIOS
    **/
    _count?: true | TB_CATEGORIA_USUARIOCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TB_CATEGORIA_USUARIOAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TB_CATEGORIA_USUARIOSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TB_CATEGORIA_USUARIOMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TB_CATEGORIA_USUARIOMaxAggregateInputType
  }

  export type GetTB_CATEGORIA_USUARIOAggregateType<T extends TB_CATEGORIA_USUARIOAggregateArgs> = {
        [P in keyof T & keyof AggregateTB_CATEGORIA_USUARIO]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTB_CATEGORIA_USUARIO[P]>
      : GetScalarType<T[P], AggregateTB_CATEGORIA_USUARIO[P]>
  }




  export type TB_CATEGORIA_USUARIOGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_CATEGORIA_USUARIOWhereInput
    orderBy?: TB_CATEGORIA_USUARIOOrderByWithAggregationInput | TB_CATEGORIA_USUARIOOrderByWithAggregationInput[]
    by: TB_CATEGORIA_USUARIOScalarFieldEnum[] | TB_CATEGORIA_USUARIOScalarFieldEnum
    having?: TB_CATEGORIA_USUARIOScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TB_CATEGORIA_USUARIOCountAggregateInputType | true
    _avg?: TB_CATEGORIA_USUARIOAvgAggregateInputType
    _sum?: TB_CATEGORIA_USUARIOSumAggregateInputType
    _min?: TB_CATEGORIA_USUARIOMinAggregateInputType
    _max?: TB_CATEGORIA_USUARIOMaxAggregateInputType
  }

  export type TB_CATEGORIA_USUARIOGroupByOutputType = {
    SQ_CATEGORIA_USUARIO: number
    NO_CATEGORIA: string
    _count: TB_CATEGORIA_USUARIOCountAggregateOutputType | null
    _avg: TB_CATEGORIA_USUARIOAvgAggregateOutputType | null
    _sum: TB_CATEGORIA_USUARIOSumAggregateOutputType | null
    _min: TB_CATEGORIA_USUARIOMinAggregateOutputType | null
    _max: TB_CATEGORIA_USUARIOMaxAggregateOutputType | null
  }

  type GetTB_CATEGORIA_USUARIOGroupByPayload<T extends TB_CATEGORIA_USUARIOGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TB_CATEGORIA_USUARIOGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TB_CATEGORIA_USUARIOGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TB_CATEGORIA_USUARIOGroupByOutputType[P]>
            : GetScalarType<T[P], TB_CATEGORIA_USUARIOGroupByOutputType[P]>
        }
      >
    >


  export type TB_CATEGORIA_USUARIOSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SQ_CATEGORIA_USUARIO?: boolean
    NO_CATEGORIA?: boolean
    tiposUsuario?: boolean | TB_CATEGORIA_USUARIO$tiposUsuarioArgs<ExtArgs>
    _count?: boolean | TB_CATEGORIA_USUARIOCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_CATEGORIA_USUARIO"]>

  export type TB_CATEGORIA_USUARIOSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SQ_CATEGORIA_USUARIO?: boolean
    NO_CATEGORIA?: boolean
  }, ExtArgs["result"]["tB_CATEGORIA_USUARIO"]>

  export type TB_CATEGORIA_USUARIOSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SQ_CATEGORIA_USUARIO?: boolean
    NO_CATEGORIA?: boolean
  }, ExtArgs["result"]["tB_CATEGORIA_USUARIO"]>

  export type TB_CATEGORIA_USUARIOSelectScalar = {
    SQ_CATEGORIA_USUARIO?: boolean
    NO_CATEGORIA?: boolean
  }

  export type TB_CATEGORIA_USUARIOOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"SQ_CATEGORIA_USUARIO" | "NO_CATEGORIA", ExtArgs["result"]["tB_CATEGORIA_USUARIO"]>
  export type TB_CATEGORIA_USUARIOInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tiposUsuario?: boolean | TB_CATEGORIA_USUARIO$tiposUsuarioArgs<ExtArgs>
    _count?: boolean | TB_CATEGORIA_USUARIOCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TB_CATEGORIA_USUARIOIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TB_CATEGORIA_USUARIOIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TB_CATEGORIA_USUARIOPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TB_CATEGORIA_USUARIO"
    objects: {
      tiposUsuario: Prisma.$TB_TIPO_USUARIOPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      SQ_CATEGORIA_USUARIO: number
      NO_CATEGORIA: string
    }, ExtArgs["result"]["tB_CATEGORIA_USUARIO"]>
    composites: {}
  }

  type TB_CATEGORIA_USUARIOGetPayload<S extends boolean | null | undefined | TB_CATEGORIA_USUARIODefaultArgs> = $Result.GetResult<Prisma.$TB_CATEGORIA_USUARIOPayload, S>

  type TB_CATEGORIA_USUARIOCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TB_CATEGORIA_USUARIOFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TB_CATEGORIA_USUARIOCountAggregateInputType | true
    }

  export interface TB_CATEGORIA_USUARIODelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TB_CATEGORIA_USUARIO'], meta: { name: 'TB_CATEGORIA_USUARIO' } }
    /**
     * Find zero or one TB_CATEGORIA_USUARIO that matches the filter.
     * @param {TB_CATEGORIA_USUARIOFindUniqueArgs} args - Arguments to find a TB_CATEGORIA_USUARIO
     * @example
     * // Get one TB_CATEGORIA_USUARIO
     * const tB_CATEGORIA_USUARIO = await prisma.tB_CATEGORIA_USUARIO.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TB_CATEGORIA_USUARIOFindUniqueArgs>(args: SelectSubset<T, TB_CATEGORIA_USUARIOFindUniqueArgs<ExtArgs>>): Prisma__TB_CATEGORIA_USUARIOClient<$Result.GetResult<Prisma.$TB_CATEGORIA_USUARIOPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TB_CATEGORIA_USUARIO that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TB_CATEGORIA_USUARIOFindUniqueOrThrowArgs} args - Arguments to find a TB_CATEGORIA_USUARIO
     * @example
     * // Get one TB_CATEGORIA_USUARIO
     * const tB_CATEGORIA_USUARIO = await prisma.tB_CATEGORIA_USUARIO.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TB_CATEGORIA_USUARIOFindUniqueOrThrowArgs>(args: SelectSubset<T, TB_CATEGORIA_USUARIOFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TB_CATEGORIA_USUARIOClient<$Result.GetResult<Prisma.$TB_CATEGORIA_USUARIOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_CATEGORIA_USUARIO that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_CATEGORIA_USUARIOFindFirstArgs} args - Arguments to find a TB_CATEGORIA_USUARIO
     * @example
     * // Get one TB_CATEGORIA_USUARIO
     * const tB_CATEGORIA_USUARIO = await prisma.tB_CATEGORIA_USUARIO.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TB_CATEGORIA_USUARIOFindFirstArgs>(args?: SelectSubset<T, TB_CATEGORIA_USUARIOFindFirstArgs<ExtArgs>>): Prisma__TB_CATEGORIA_USUARIOClient<$Result.GetResult<Prisma.$TB_CATEGORIA_USUARIOPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_CATEGORIA_USUARIO that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_CATEGORIA_USUARIOFindFirstOrThrowArgs} args - Arguments to find a TB_CATEGORIA_USUARIO
     * @example
     * // Get one TB_CATEGORIA_USUARIO
     * const tB_CATEGORIA_USUARIO = await prisma.tB_CATEGORIA_USUARIO.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TB_CATEGORIA_USUARIOFindFirstOrThrowArgs>(args?: SelectSubset<T, TB_CATEGORIA_USUARIOFindFirstOrThrowArgs<ExtArgs>>): Prisma__TB_CATEGORIA_USUARIOClient<$Result.GetResult<Prisma.$TB_CATEGORIA_USUARIOPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TB_CATEGORIA_USUARIOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_CATEGORIA_USUARIOFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TB_CATEGORIA_USUARIOS
     * const tB_CATEGORIA_USUARIOS = await prisma.tB_CATEGORIA_USUARIO.findMany()
     * 
     * // Get first 10 TB_CATEGORIA_USUARIOS
     * const tB_CATEGORIA_USUARIOS = await prisma.tB_CATEGORIA_USUARIO.findMany({ take: 10 })
     * 
     * // Only select the `SQ_CATEGORIA_USUARIO`
     * const tB_CATEGORIA_USUARIOWithSQ_CATEGORIA_USUARIOOnly = await prisma.tB_CATEGORIA_USUARIO.findMany({ select: { SQ_CATEGORIA_USUARIO: true } })
     * 
     */
    findMany<T extends TB_CATEGORIA_USUARIOFindManyArgs>(args?: SelectSubset<T, TB_CATEGORIA_USUARIOFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_CATEGORIA_USUARIOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TB_CATEGORIA_USUARIO.
     * @param {TB_CATEGORIA_USUARIOCreateArgs} args - Arguments to create a TB_CATEGORIA_USUARIO.
     * @example
     * // Create one TB_CATEGORIA_USUARIO
     * const TB_CATEGORIA_USUARIO = await prisma.tB_CATEGORIA_USUARIO.create({
     *   data: {
     *     // ... data to create a TB_CATEGORIA_USUARIO
     *   }
     * })
     * 
     */
    create<T extends TB_CATEGORIA_USUARIOCreateArgs>(args: SelectSubset<T, TB_CATEGORIA_USUARIOCreateArgs<ExtArgs>>): Prisma__TB_CATEGORIA_USUARIOClient<$Result.GetResult<Prisma.$TB_CATEGORIA_USUARIOPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TB_CATEGORIA_USUARIOS.
     * @param {TB_CATEGORIA_USUARIOCreateManyArgs} args - Arguments to create many TB_CATEGORIA_USUARIOS.
     * @example
     * // Create many TB_CATEGORIA_USUARIOS
     * const tB_CATEGORIA_USUARIO = await prisma.tB_CATEGORIA_USUARIO.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TB_CATEGORIA_USUARIOCreateManyArgs>(args?: SelectSubset<T, TB_CATEGORIA_USUARIOCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TB_CATEGORIA_USUARIOS and returns the data saved in the database.
     * @param {TB_CATEGORIA_USUARIOCreateManyAndReturnArgs} args - Arguments to create many TB_CATEGORIA_USUARIOS.
     * @example
     * // Create many TB_CATEGORIA_USUARIOS
     * const tB_CATEGORIA_USUARIO = await prisma.tB_CATEGORIA_USUARIO.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TB_CATEGORIA_USUARIOS and only return the `SQ_CATEGORIA_USUARIO`
     * const tB_CATEGORIA_USUARIOWithSQ_CATEGORIA_USUARIOOnly = await prisma.tB_CATEGORIA_USUARIO.createManyAndReturn({
     *   select: { SQ_CATEGORIA_USUARIO: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TB_CATEGORIA_USUARIOCreateManyAndReturnArgs>(args?: SelectSubset<T, TB_CATEGORIA_USUARIOCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_CATEGORIA_USUARIOPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TB_CATEGORIA_USUARIO.
     * @param {TB_CATEGORIA_USUARIODeleteArgs} args - Arguments to delete one TB_CATEGORIA_USUARIO.
     * @example
     * // Delete one TB_CATEGORIA_USUARIO
     * const TB_CATEGORIA_USUARIO = await prisma.tB_CATEGORIA_USUARIO.delete({
     *   where: {
     *     // ... filter to delete one TB_CATEGORIA_USUARIO
     *   }
     * })
     * 
     */
    delete<T extends TB_CATEGORIA_USUARIODeleteArgs>(args: SelectSubset<T, TB_CATEGORIA_USUARIODeleteArgs<ExtArgs>>): Prisma__TB_CATEGORIA_USUARIOClient<$Result.GetResult<Prisma.$TB_CATEGORIA_USUARIOPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TB_CATEGORIA_USUARIO.
     * @param {TB_CATEGORIA_USUARIOUpdateArgs} args - Arguments to update one TB_CATEGORIA_USUARIO.
     * @example
     * // Update one TB_CATEGORIA_USUARIO
     * const tB_CATEGORIA_USUARIO = await prisma.tB_CATEGORIA_USUARIO.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TB_CATEGORIA_USUARIOUpdateArgs>(args: SelectSubset<T, TB_CATEGORIA_USUARIOUpdateArgs<ExtArgs>>): Prisma__TB_CATEGORIA_USUARIOClient<$Result.GetResult<Prisma.$TB_CATEGORIA_USUARIOPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TB_CATEGORIA_USUARIOS.
     * @param {TB_CATEGORIA_USUARIODeleteManyArgs} args - Arguments to filter TB_CATEGORIA_USUARIOS to delete.
     * @example
     * // Delete a few TB_CATEGORIA_USUARIOS
     * const { count } = await prisma.tB_CATEGORIA_USUARIO.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TB_CATEGORIA_USUARIODeleteManyArgs>(args?: SelectSubset<T, TB_CATEGORIA_USUARIODeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_CATEGORIA_USUARIOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_CATEGORIA_USUARIOUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TB_CATEGORIA_USUARIOS
     * const tB_CATEGORIA_USUARIO = await prisma.tB_CATEGORIA_USUARIO.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TB_CATEGORIA_USUARIOUpdateManyArgs>(args: SelectSubset<T, TB_CATEGORIA_USUARIOUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_CATEGORIA_USUARIOS and returns the data updated in the database.
     * @param {TB_CATEGORIA_USUARIOUpdateManyAndReturnArgs} args - Arguments to update many TB_CATEGORIA_USUARIOS.
     * @example
     * // Update many TB_CATEGORIA_USUARIOS
     * const tB_CATEGORIA_USUARIO = await prisma.tB_CATEGORIA_USUARIO.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TB_CATEGORIA_USUARIOS and only return the `SQ_CATEGORIA_USUARIO`
     * const tB_CATEGORIA_USUARIOWithSQ_CATEGORIA_USUARIOOnly = await prisma.tB_CATEGORIA_USUARIO.updateManyAndReturn({
     *   select: { SQ_CATEGORIA_USUARIO: true },
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
    updateManyAndReturn<T extends TB_CATEGORIA_USUARIOUpdateManyAndReturnArgs>(args: SelectSubset<T, TB_CATEGORIA_USUARIOUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_CATEGORIA_USUARIOPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TB_CATEGORIA_USUARIO.
     * @param {TB_CATEGORIA_USUARIOUpsertArgs} args - Arguments to update or create a TB_CATEGORIA_USUARIO.
     * @example
     * // Update or create a TB_CATEGORIA_USUARIO
     * const tB_CATEGORIA_USUARIO = await prisma.tB_CATEGORIA_USUARIO.upsert({
     *   create: {
     *     // ... data to create a TB_CATEGORIA_USUARIO
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TB_CATEGORIA_USUARIO we want to update
     *   }
     * })
     */
    upsert<T extends TB_CATEGORIA_USUARIOUpsertArgs>(args: SelectSubset<T, TB_CATEGORIA_USUARIOUpsertArgs<ExtArgs>>): Prisma__TB_CATEGORIA_USUARIOClient<$Result.GetResult<Prisma.$TB_CATEGORIA_USUARIOPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TB_CATEGORIA_USUARIOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_CATEGORIA_USUARIOCountArgs} args - Arguments to filter TB_CATEGORIA_USUARIOS to count.
     * @example
     * // Count the number of TB_CATEGORIA_USUARIOS
     * const count = await prisma.tB_CATEGORIA_USUARIO.count({
     *   where: {
     *     // ... the filter for the TB_CATEGORIA_USUARIOS we want to count
     *   }
     * })
    **/
    count<T extends TB_CATEGORIA_USUARIOCountArgs>(
      args?: Subset<T, TB_CATEGORIA_USUARIOCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TB_CATEGORIA_USUARIOCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TB_CATEGORIA_USUARIO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_CATEGORIA_USUARIOAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TB_CATEGORIA_USUARIOAggregateArgs>(args: Subset<T, TB_CATEGORIA_USUARIOAggregateArgs>): Prisma.PrismaPromise<GetTB_CATEGORIA_USUARIOAggregateType<T>>

    /**
     * Group by TB_CATEGORIA_USUARIO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_CATEGORIA_USUARIOGroupByArgs} args - Group by arguments.
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
      T extends TB_CATEGORIA_USUARIOGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TB_CATEGORIA_USUARIOGroupByArgs['orderBy'] }
        : { orderBy?: TB_CATEGORIA_USUARIOGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TB_CATEGORIA_USUARIOGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTB_CATEGORIA_USUARIOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TB_CATEGORIA_USUARIO model
   */
  readonly fields: TB_CATEGORIA_USUARIOFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TB_CATEGORIA_USUARIO.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TB_CATEGORIA_USUARIOClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tiposUsuario<T extends TB_CATEGORIA_USUARIO$tiposUsuarioArgs<ExtArgs> = {}>(args?: Subset<T, TB_CATEGORIA_USUARIO$tiposUsuarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_TIPO_USUARIOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TB_CATEGORIA_USUARIO model
   */
  interface TB_CATEGORIA_USUARIOFieldRefs {
    readonly SQ_CATEGORIA_USUARIO: FieldRef<"TB_CATEGORIA_USUARIO", 'Int'>
    readonly NO_CATEGORIA: FieldRef<"TB_CATEGORIA_USUARIO", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TB_CATEGORIA_USUARIO findUnique
   */
  export type TB_CATEGORIA_USUARIOFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CATEGORIA_USUARIO
     */
    select?: TB_CATEGORIA_USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CATEGORIA_USUARIO
     */
    omit?: TB_CATEGORIA_USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_CATEGORIA_USUARIOInclude<ExtArgs> | null
    /**
     * Filter, which TB_CATEGORIA_USUARIO to fetch.
     */
    where: TB_CATEGORIA_USUARIOWhereUniqueInput
  }

  /**
   * TB_CATEGORIA_USUARIO findUniqueOrThrow
   */
  export type TB_CATEGORIA_USUARIOFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CATEGORIA_USUARIO
     */
    select?: TB_CATEGORIA_USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CATEGORIA_USUARIO
     */
    omit?: TB_CATEGORIA_USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_CATEGORIA_USUARIOInclude<ExtArgs> | null
    /**
     * Filter, which TB_CATEGORIA_USUARIO to fetch.
     */
    where: TB_CATEGORIA_USUARIOWhereUniqueInput
  }

  /**
   * TB_CATEGORIA_USUARIO findFirst
   */
  export type TB_CATEGORIA_USUARIOFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CATEGORIA_USUARIO
     */
    select?: TB_CATEGORIA_USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CATEGORIA_USUARIO
     */
    omit?: TB_CATEGORIA_USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_CATEGORIA_USUARIOInclude<ExtArgs> | null
    /**
     * Filter, which TB_CATEGORIA_USUARIO to fetch.
     */
    where?: TB_CATEGORIA_USUARIOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_CATEGORIA_USUARIOS to fetch.
     */
    orderBy?: TB_CATEGORIA_USUARIOOrderByWithRelationInput | TB_CATEGORIA_USUARIOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_CATEGORIA_USUARIOS.
     */
    cursor?: TB_CATEGORIA_USUARIOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_CATEGORIA_USUARIOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_CATEGORIA_USUARIOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_CATEGORIA_USUARIOS.
     */
    distinct?: TB_CATEGORIA_USUARIOScalarFieldEnum | TB_CATEGORIA_USUARIOScalarFieldEnum[]
  }

  /**
   * TB_CATEGORIA_USUARIO findFirstOrThrow
   */
  export type TB_CATEGORIA_USUARIOFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CATEGORIA_USUARIO
     */
    select?: TB_CATEGORIA_USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CATEGORIA_USUARIO
     */
    omit?: TB_CATEGORIA_USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_CATEGORIA_USUARIOInclude<ExtArgs> | null
    /**
     * Filter, which TB_CATEGORIA_USUARIO to fetch.
     */
    where?: TB_CATEGORIA_USUARIOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_CATEGORIA_USUARIOS to fetch.
     */
    orderBy?: TB_CATEGORIA_USUARIOOrderByWithRelationInput | TB_CATEGORIA_USUARIOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_CATEGORIA_USUARIOS.
     */
    cursor?: TB_CATEGORIA_USUARIOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_CATEGORIA_USUARIOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_CATEGORIA_USUARIOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_CATEGORIA_USUARIOS.
     */
    distinct?: TB_CATEGORIA_USUARIOScalarFieldEnum | TB_CATEGORIA_USUARIOScalarFieldEnum[]
  }

  /**
   * TB_CATEGORIA_USUARIO findMany
   */
  export type TB_CATEGORIA_USUARIOFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CATEGORIA_USUARIO
     */
    select?: TB_CATEGORIA_USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CATEGORIA_USUARIO
     */
    omit?: TB_CATEGORIA_USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_CATEGORIA_USUARIOInclude<ExtArgs> | null
    /**
     * Filter, which TB_CATEGORIA_USUARIOS to fetch.
     */
    where?: TB_CATEGORIA_USUARIOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_CATEGORIA_USUARIOS to fetch.
     */
    orderBy?: TB_CATEGORIA_USUARIOOrderByWithRelationInput | TB_CATEGORIA_USUARIOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TB_CATEGORIA_USUARIOS.
     */
    cursor?: TB_CATEGORIA_USUARIOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_CATEGORIA_USUARIOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_CATEGORIA_USUARIOS.
     */
    skip?: number
    distinct?: TB_CATEGORIA_USUARIOScalarFieldEnum | TB_CATEGORIA_USUARIOScalarFieldEnum[]
  }

  /**
   * TB_CATEGORIA_USUARIO create
   */
  export type TB_CATEGORIA_USUARIOCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CATEGORIA_USUARIO
     */
    select?: TB_CATEGORIA_USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CATEGORIA_USUARIO
     */
    omit?: TB_CATEGORIA_USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_CATEGORIA_USUARIOInclude<ExtArgs> | null
    /**
     * The data needed to create a TB_CATEGORIA_USUARIO.
     */
    data: XOR<TB_CATEGORIA_USUARIOCreateInput, TB_CATEGORIA_USUARIOUncheckedCreateInput>
  }

  /**
   * TB_CATEGORIA_USUARIO createMany
   */
  export type TB_CATEGORIA_USUARIOCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TB_CATEGORIA_USUARIOS.
     */
    data: TB_CATEGORIA_USUARIOCreateManyInput | TB_CATEGORIA_USUARIOCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TB_CATEGORIA_USUARIO createManyAndReturn
   */
  export type TB_CATEGORIA_USUARIOCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CATEGORIA_USUARIO
     */
    select?: TB_CATEGORIA_USUARIOSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CATEGORIA_USUARIO
     */
    omit?: TB_CATEGORIA_USUARIOOmit<ExtArgs> | null
    /**
     * The data used to create many TB_CATEGORIA_USUARIOS.
     */
    data: TB_CATEGORIA_USUARIOCreateManyInput | TB_CATEGORIA_USUARIOCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TB_CATEGORIA_USUARIO update
   */
  export type TB_CATEGORIA_USUARIOUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CATEGORIA_USUARIO
     */
    select?: TB_CATEGORIA_USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CATEGORIA_USUARIO
     */
    omit?: TB_CATEGORIA_USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_CATEGORIA_USUARIOInclude<ExtArgs> | null
    /**
     * The data needed to update a TB_CATEGORIA_USUARIO.
     */
    data: XOR<TB_CATEGORIA_USUARIOUpdateInput, TB_CATEGORIA_USUARIOUncheckedUpdateInput>
    /**
     * Choose, which TB_CATEGORIA_USUARIO to update.
     */
    where: TB_CATEGORIA_USUARIOWhereUniqueInput
  }

  /**
   * TB_CATEGORIA_USUARIO updateMany
   */
  export type TB_CATEGORIA_USUARIOUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TB_CATEGORIA_USUARIOS.
     */
    data: XOR<TB_CATEGORIA_USUARIOUpdateManyMutationInput, TB_CATEGORIA_USUARIOUncheckedUpdateManyInput>
    /**
     * Filter which TB_CATEGORIA_USUARIOS to update
     */
    where?: TB_CATEGORIA_USUARIOWhereInput
    /**
     * Limit how many TB_CATEGORIA_USUARIOS to update.
     */
    limit?: number
  }

  /**
   * TB_CATEGORIA_USUARIO updateManyAndReturn
   */
  export type TB_CATEGORIA_USUARIOUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CATEGORIA_USUARIO
     */
    select?: TB_CATEGORIA_USUARIOSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CATEGORIA_USUARIO
     */
    omit?: TB_CATEGORIA_USUARIOOmit<ExtArgs> | null
    /**
     * The data used to update TB_CATEGORIA_USUARIOS.
     */
    data: XOR<TB_CATEGORIA_USUARIOUpdateManyMutationInput, TB_CATEGORIA_USUARIOUncheckedUpdateManyInput>
    /**
     * Filter which TB_CATEGORIA_USUARIOS to update
     */
    where?: TB_CATEGORIA_USUARIOWhereInput
    /**
     * Limit how many TB_CATEGORIA_USUARIOS to update.
     */
    limit?: number
  }

  /**
   * TB_CATEGORIA_USUARIO upsert
   */
  export type TB_CATEGORIA_USUARIOUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CATEGORIA_USUARIO
     */
    select?: TB_CATEGORIA_USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CATEGORIA_USUARIO
     */
    omit?: TB_CATEGORIA_USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_CATEGORIA_USUARIOInclude<ExtArgs> | null
    /**
     * The filter to search for the TB_CATEGORIA_USUARIO to update in case it exists.
     */
    where: TB_CATEGORIA_USUARIOWhereUniqueInput
    /**
     * In case the TB_CATEGORIA_USUARIO found by the `where` argument doesn't exist, create a new TB_CATEGORIA_USUARIO with this data.
     */
    create: XOR<TB_CATEGORIA_USUARIOCreateInput, TB_CATEGORIA_USUARIOUncheckedCreateInput>
    /**
     * In case the TB_CATEGORIA_USUARIO was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TB_CATEGORIA_USUARIOUpdateInput, TB_CATEGORIA_USUARIOUncheckedUpdateInput>
  }

  /**
   * TB_CATEGORIA_USUARIO delete
   */
  export type TB_CATEGORIA_USUARIODeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CATEGORIA_USUARIO
     */
    select?: TB_CATEGORIA_USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CATEGORIA_USUARIO
     */
    omit?: TB_CATEGORIA_USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_CATEGORIA_USUARIOInclude<ExtArgs> | null
    /**
     * Filter which TB_CATEGORIA_USUARIO to delete.
     */
    where: TB_CATEGORIA_USUARIOWhereUniqueInput
  }

  /**
   * TB_CATEGORIA_USUARIO deleteMany
   */
  export type TB_CATEGORIA_USUARIODeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_CATEGORIA_USUARIOS to delete
     */
    where?: TB_CATEGORIA_USUARIOWhereInput
    /**
     * Limit how many TB_CATEGORIA_USUARIOS to delete.
     */
    limit?: number
  }

  /**
   * TB_CATEGORIA_USUARIO.tiposUsuario
   */
  export type TB_CATEGORIA_USUARIO$tiposUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TIPO_USUARIO
     */
    select?: TB_TIPO_USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TIPO_USUARIO
     */
    omit?: TB_TIPO_USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TIPO_USUARIOInclude<ExtArgs> | null
    where?: TB_TIPO_USUARIOWhereInput
    orderBy?: TB_TIPO_USUARIOOrderByWithRelationInput | TB_TIPO_USUARIOOrderByWithRelationInput[]
    cursor?: TB_TIPO_USUARIOWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TB_TIPO_USUARIOScalarFieldEnum | TB_TIPO_USUARIOScalarFieldEnum[]
  }

  /**
   * TB_CATEGORIA_USUARIO without action
   */
  export type TB_CATEGORIA_USUARIODefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CATEGORIA_USUARIO
     */
    select?: TB_CATEGORIA_USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CATEGORIA_USUARIO
     */
    omit?: TB_CATEGORIA_USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_CATEGORIA_USUARIOInclude<ExtArgs> | null
  }


  /**
   * Model TB_PRODUTO
   */

  export type AggregateTB_PRODUTO = {
    _count: TB_PRODUTOCountAggregateOutputType | null
    _avg: TB_PRODUTOAvgAggregateOutputType | null
    _sum: TB_PRODUTOSumAggregateOutputType | null
    _min: TB_PRODUTOMinAggregateOutputType | null
    _max: TB_PRODUTOMaxAggregateOutputType | null
  }

  export type TB_PRODUTOAvgAggregateOutputType = {
    SQ_PRODUTO: number | null
    ST_PRODUTO: number | null
  }

  export type TB_PRODUTOSumAggregateOutputType = {
    SQ_PRODUTO: number | null
    ST_PRODUTO: number | null
  }

  export type TB_PRODUTOMinAggregateOutputType = {
    SQ_PRODUTO: number | null
    ST_PRODUTO: number | null
    NO_PRODUTO: string | null
    DT_CRIACAO: Date | null
    DT_EDITADO: Date | null
  }

  export type TB_PRODUTOMaxAggregateOutputType = {
    SQ_PRODUTO: number | null
    ST_PRODUTO: number | null
    NO_PRODUTO: string | null
    DT_CRIACAO: Date | null
    DT_EDITADO: Date | null
  }

  export type TB_PRODUTOCountAggregateOutputType = {
    SQ_PRODUTO: number
    ST_PRODUTO: number
    NO_PRODUTO: number
    DT_CRIACAO: number
    DT_EDITADO: number
    _all: number
  }


  export type TB_PRODUTOAvgAggregateInputType = {
    SQ_PRODUTO?: true
    ST_PRODUTO?: true
  }

  export type TB_PRODUTOSumAggregateInputType = {
    SQ_PRODUTO?: true
    ST_PRODUTO?: true
  }

  export type TB_PRODUTOMinAggregateInputType = {
    SQ_PRODUTO?: true
    ST_PRODUTO?: true
    NO_PRODUTO?: true
    DT_CRIACAO?: true
    DT_EDITADO?: true
  }

  export type TB_PRODUTOMaxAggregateInputType = {
    SQ_PRODUTO?: true
    ST_PRODUTO?: true
    NO_PRODUTO?: true
    DT_CRIACAO?: true
    DT_EDITADO?: true
  }

  export type TB_PRODUTOCountAggregateInputType = {
    SQ_PRODUTO?: true
    ST_PRODUTO?: true
    NO_PRODUTO?: true
    DT_CRIACAO?: true
    DT_EDITADO?: true
    _all?: true
  }

  export type TB_PRODUTOAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_PRODUTO to aggregate.
     */
    where?: TB_PRODUTOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_PRODUTOS to fetch.
     */
    orderBy?: TB_PRODUTOOrderByWithRelationInput | TB_PRODUTOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TB_PRODUTOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_PRODUTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_PRODUTOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TB_PRODUTOS
    **/
    _count?: true | TB_PRODUTOCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TB_PRODUTOAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TB_PRODUTOSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TB_PRODUTOMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TB_PRODUTOMaxAggregateInputType
  }

  export type GetTB_PRODUTOAggregateType<T extends TB_PRODUTOAggregateArgs> = {
        [P in keyof T & keyof AggregateTB_PRODUTO]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTB_PRODUTO[P]>
      : GetScalarType<T[P], AggregateTB_PRODUTO[P]>
  }




  export type TB_PRODUTOGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_PRODUTOWhereInput
    orderBy?: TB_PRODUTOOrderByWithAggregationInput | TB_PRODUTOOrderByWithAggregationInput[]
    by: TB_PRODUTOScalarFieldEnum[] | TB_PRODUTOScalarFieldEnum
    having?: TB_PRODUTOScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TB_PRODUTOCountAggregateInputType | true
    _avg?: TB_PRODUTOAvgAggregateInputType
    _sum?: TB_PRODUTOSumAggregateInputType
    _min?: TB_PRODUTOMinAggregateInputType
    _max?: TB_PRODUTOMaxAggregateInputType
  }

  export type TB_PRODUTOGroupByOutputType = {
    SQ_PRODUTO: number
    ST_PRODUTO: number
    NO_PRODUTO: string
    DT_CRIACAO: Date
    DT_EDITADO: Date
    _count: TB_PRODUTOCountAggregateOutputType | null
    _avg: TB_PRODUTOAvgAggregateOutputType | null
    _sum: TB_PRODUTOSumAggregateOutputType | null
    _min: TB_PRODUTOMinAggregateOutputType | null
    _max: TB_PRODUTOMaxAggregateOutputType | null
  }

  type GetTB_PRODUTOGroupByPayload<T extends TB_PRODUTOGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TB_PRODUTOGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TB_PRODUTOGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TB_PRODUTOGroupByOutputType[P]>
            : GetScalarType<T[P], TB_PRODUTOGroupByOutputType[P]>
        }
      >
    >


  export type TB_PRODUTOSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SQ_PRODUTO?: boolean
    ST_PRODUTO?: boolean
    NO_PRODUTO?: boolean
    DT_CRIACAO?: boolean
    DT_EDITADO?: boolean
    tiposProduto?: boolean | TB_PRODUTO$tiposProdutoArgs<ExtArgs>
    quantidades?: boolean | TB_PRODUTO$quantidadesArgs<ExtArgs>
    itens?: boolean | TB_PRODUTO$itensArgs<ExtArgs>
    _count?: boolean | TB_PRODUTOCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_PRODUTO"]>

  export type TB_PRODUTOSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SQ_PRODUTO?: boolean
    ST_PRODUTO?: boolean
    NO_PRODUTO?: boolean
    DT_CRIACAO?: boolean
    DT_EDITADO?: boolean
  }, ExtArgs["result"]["tB_PRODUTO"]>

  export type TB_PRODUTOSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SQ_PRODUTO?: boolean
    ST_PRODUTO?: boolean
    NO_PRODUTO?: boolean
    DT_CRIACAO?: boolean
    DT_EDITADO?: boolean
  }, ExtArgs["result"]["tB_PRODUTO"]>

  export type TB_PRODUTOSelectScalar = {
    SQ_PRODUTO?: boolean
    ST_PRODUTO?: boolean
    NO_PRODUTO?: boolean
    DT_CRIACAO?: boolean
    DT_EDITADO?: boolean
  }

  export type TB_PRODUTOOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"SQ_PRODUTO" | "ST_PRODUTO" | "NO_PRODUTO" | "DT_CRIACAO" | "DT_EDITADO", ExtArgs["result"]["tB_PRODUTO"]>
  export type TB_PRODUTOInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tiposProduto?: boolean | TB_PRODUTO$tiposProdutoArgs<ExtArgs>
    quantidades?: boolean | TB_PRODUTO$quantidadesArgs<ExtArgs>
    itens?: boolean | TB_PRODUTO$itensArgs<ExtArgs>
    _count?: boolean | TB_PRODUTOCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TB_PRODUTOIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TB_PRODUTOIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TB_PRODUTOPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TB_PRODUTO"
    objects: {
      tiposProduto: Prisma.$TB_TIPO_PRODUTOPayload<ExtArgs>[]
      quantidades: Prisma.$TB_QTD_PRODUTOPayload<ExtArgs>[]
      itens: Prisma.$TB_ITENSPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      SQ_PRODUTO: number
      ST_PRODUTO: number
      NO_PRODUTO: string
      DT_CRIACAO: Date
      DT_EDITADO: Date
    }, ExtArgs["result"]["tB_PRODUTO"]>
    composites: {}
  }

  type TB_PRODUTOGetPayload<S extends boolean | null | undefined | TB_PRODUTODefaultArgs> = $Result.GetResult<Prisma.$TB_PRODUTOPayload, S>

  type TB_PRODUTOCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TB_PRODUTOFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TB_PRODUTOCountAggregateInputType | true
    }

  export interface TB_PRODUTODelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TB_PRODUTO'], meta: { name: 'TB_PRODUTO' } }
    /**
     * Find zero or one TB_PRODUTO that matches the filter.
     * @param {TB_PRODUTOFindUniqueArgs} args - Arguments to find a TB_PRODUTO
     * @example
     * // Get one TB_PRODUTO
     * const tB_PRODUTO = await prisma.tB_PRODUTO.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TB_PRODUTOFindUniqueArgs>(args: SelectSubset<T, TB_PRODUTOFindUniqueArgs<ExtArgs>>): Prisma__TB_PRODUTOClient<$Result.GetResult<Prisma.$TB_PRODUTOPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TB_PRODUTO that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TB_PRODUTOFindUniqueOrThrowArgs} args - Arguments to find a TB_PRODUTO
     * @example
     * // Get one TB_PRODUTO
     * const tB_PRODUTO = await prisma.tB_PRODUTO.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TB_PRODUTOFindUniqueOrThrowArgs>(args: SelectSubset<T, TB_PRODUTOFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TB_PRODUTOClient<$Result.GetResult<Prisma.$TB_PRODUTOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_PRODUTO that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_PRODUTOFindFirstArgs} args - Arguments to find a TB_PRODUTO
     * @example
     * // Get one TB_PRODUTO
     * const tB_PRODUTO = await prisma.tB_PRODUTO.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TB_PRODUTOFindFirstArgs>(args?: SelectSubset<T, TB_PRODUTOFindFirstArgs<ExtArgs>>): Prisma__TB_PRODUTOClient<$Result.GetResult<Prisma.$TB_PRODUTOPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_PRODUTO that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_PRODUTOFindFirstOrThrowArgs} args - Arguments to find a TB_PRODUTO
     * @example
     * // Get one TB_PRODUTO
     * const tB_PRODUTO = await prisma.tB_PRODUTO.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TB_PRODUTOFindFirstOrThrowArgs>(args?: SelectSubset<T, TB_PRODUTOFindFirstOrThrowArgs<ExtArgs>>): Prisma__TB_PRODUTOClient<$Result.GetResult<Prisma.$TB_PRODUTOPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TB_PRODUTOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_PRODUTOFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TB_PRODUTOS
     * const tB_PRODUTOS = await prisma.tB_PRODUTO.findMany()
     * 
     * // Get first 10 TB_PRODUTOS
     * const tB_PRODUTOS = await prisma.tB_PRODUTO.findMany({ take: 10 })
     * 
     * // Only select the `SQ_PRODUTO`
     * const tB_PRODUTOWithSQ_PRODUTOOnly = await prisma.tB_PRODUTO.findMany({ select: { SQ_PRODUTO: true } })
     * 
     */
    findMany<T extends TB_PRODUTOFindManyArgs>(args?: SelectSubset<T, TB_PRODUTOFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_PRODUTOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TB_PRODUTO.
     * @param {TB_PRODUTOCreateArgs} args - Arguments to create a TB_PRODUTO.
     * @example
     * // Create one TB_PRODUTO
     * const TB_PRODUTO = await prisma.tB_PRODUTO.create({
     *   data: {
     *     // ... data to create a TB_PRODUTO
     *   }
     * })
     * 
     */
    create<T extends TB_PRODUTOCreateArgs>(args: SelectSubset<T, TB_PRODUTOCreateArgs<ExtArgs>>): Prisma__TB_PRODUTOClient<$Result.GetResult<Prisma.$TB_PRODUTOPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TB_PRODUTOS.
     * @param {TB_PRODUTOCreateManyArgs} args - Arguments to create many TB_PRODUTOS.
     * @example
     * // Create many TB_PRODUTOS
     * const tB_PRODUTO = await prisma.tB_PRODUTO.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TB_PRODUTOCreateManyArgs>(args?: SelectSubset<T, TB_PRODUTOCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TB_PRODUTOS and returns the data saved in the database.
     * @param {TB_PRODUTOCreateManyAndReturnArgs} args - Arguments to create many TB_PRODUTOS.
     * @example
     * // Create many TB_PRODUTOS
     * const tB_PRODUTO = await prisma.tB_PRODUTO.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TB_PRODUTOS and only return the `SQ_PRODUTO`
     * const tB_PRODUTOWithSQ_PRODUTOOnly = await prisma.tB_PRODUTO.createManyAndReturn({
     *   select: { SQ_PRODUTO: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TB_PRODUTOCreateManyAndReturnArgs>(args?: SelectSubset<T, TB_PRODUTOCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_PRODUTOPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TB_PRODUTO.
     * @param {TB_PRODUTODeleteArgs} args - Arguments to delete one TB_PRODUTO.
     * @example
     * // Delete one TB_PRODUTO
     * const TB_PRODUTO = await prisma.tB_PRODUTO.delete({
     *   where: {
     *     // ... filter to delete one TB_PRODUTO
     *   }
     * })
     * 
     */
    delete<T extends TB_PRODUTODeleteArgs>(args: SelectSubset<T, TB_PRODUTODeleteArgs<ExtArgs>>): Prisma__TB_PRODUTOClient<$Result.GetResult<Prisma.$TB_PRODUTOPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TB_PRODUTO.
     * @param {TB_PRODUTOUpdateArgs} args - Arguments to update one TB_PRODUTO.
     * @example
     * // Update one TB_PRODUTO
     * const tB_PRODUTO = await prisma.tB_PRODUTO.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TB_PRODUTOUpdateArgs>(args: SelectSubset<T, TB_PRODUTOUpdateArgs<ExtArgs>>): Prisma__TB_PRODUTOClient<$Result.GetResult<Prisma.$TB_PRODUTOPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TB_PRODUTOS.
     * @param {TB_PRODUTODeleteManyArgs} args - Arguments to filter TB_PRODUTOS to delete.
     * @example
     * // Delete a few TB_PRODUTOS
     * const { count } = await prisma.tB_PRODUTO.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TB_PRODUTODeleteManyArgs>(args?: SelectSubset<T, TB_PRODUTODeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_PRODUTOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_PRODUTOUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TB_PRODUTOS
     * const tB_PRODUTO = await prisma.tB_PRODUTO.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TB_PRODUTOUpdateManyArgs>(args: SelectSubset<T, TB_PRODUTOUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_PRODUTOS and returns the data updated in the database.
     * @param {TB_PRODUTOUpdateManyAndReturnArgs} args - Arguments to update many TB_PRODUTOS.
     * @example
     * // Update many TB_PRODUTOS
     * const tB_PRODUTO = await prisma.tB_PRODUTO.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TB_PRODUTOS and only return the `SQ_PRODUTO`
     * const tB_PRODUTOWithSQ_PRODUTOOnly = await prisma.tB_PRODUTO.updateManyAndReturn({
     *   select: { SQ_PRODUTO: true },
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
    updateManyAndReturn<T extends TB_PRODUTOUpdateManyAndReturnArgs>(args: SelectSubset<T, TB_PRODUTOUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_PRODUTOPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TB_PRODUTO.
     * @param {TB_PRODUTOUpsertArgs} args - Arguments to update or create a TB_PRODUTO.
     * @example
     * // Update or create a TB_PRODUTO
     * const tB_PRODUTO = await prisma.tB_PRODUTO.upsert({
     *   create: {
     *     // ... data to create a TB_PRODUTO
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TB_PRODUTO we want to update
     *   }
     * })
     */
    upsert<T extends TB_PRODUTOUpsertArgs>(args: SelectSubset<T, TB_PRODUTOUpsertArgs<ExtArgs>>): Prisma__TB_PRODUTOClient<$Result.GetResult<Prisma.$TB_PRODUTOPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TB_PRODUTOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_PRODUTOCountArgs} args - Arguments to filter TB_PRODUTOS to count.
     * @example
     * // Count the number of TB_PRODUTOS
     * const count = await prisma.tB_PRODUTO.count({
     *   where: {
     *     // ... the filter for the TB_PRODUTOS we want to count
     *   }
     * })
    **/
    count<T extends TB_PRODUTOCountArgs>(
      args?: Subset<T, TB_PRODUTOCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TB_PRODUTOCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TB_PRODUTO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_PRODUTOAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TB_PRODUTOAggregateArgs>(args: Subset<T, TB_PRODUTOAggregateArgs>): Prisma.PrismaPromise<GetTB_PRODUTOAggregateType<T>>

    /**
     * Group by TB_PRODUTO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_PRODUTOGroupByArgs} args - Group by arguments.
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
      T extends TB_PRODUTOGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TB_PRODUTOGroupByArgs['orderBy'] }
        : { orderBy?: TB_PRODUTOGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TB_PRODUTOGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTB_PRODUTOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TB_PRODUTO model
   */
  readonly fields: TB_PRODUTOFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TB_PRODUTO.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TB_PRODUTOClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tiposProduto<T extends TB_PRODUTO$tiposProdutoArgs<ExtArgs> = {}>(args?: Subset<T, TB_PRODUTO$tiposProdutoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_TIPO_PRODUTOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quantidades<T extends TB_PRODUTO$quantidadesArgs<ExtArgs> = {}>(args?: Subset<T, TB_PRODUTO$quantidadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_QTD_PRODUTOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    itens<T extends TB_PRODUTO$itensArgs<ExtArgs> = {}>(args?: Subset<T, TB_PRODUTO$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_ITENSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TB_PRODUTO model
   */
  interface TB_PRODUTOFieldRefs {
    readonly SQ_PRODUTO: FieldRef<"TB_PRODUTO", 'Int'>
    readonly ST_PRODUTO: FieldRef<"TB_PRODUTO", 'Int'>
    readonly NO_PRODUTO: FieldRef<"TB_PRODUTO", 'String'>
    readonly DT_CRIACAO: FieldRef<"TB_PRODUTO", 'DateTime'>
    readonly DT_EDITADO: FieldRef<"TB_PRODUTO", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TB_PRODUTO findUnique
   */
  export type TB_PRODUTOFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_PRODUTO
     */
    select?: TB_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_PRODUTO
     */
    omit?: TB_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_PRODUTOInclude<ExtArgs> | null
    /**
     * Filter, which TB_PRODUTO to fetch.
     */
    where: TB_PRODUTOWhereUniqueInput
  }

  /**
   * TB_PRODUTO findUniqueOrThrow
   */
  export type TB_PRODUTOFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_PRODUTO
     */
    select?: TB_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_PRODUTO
     */
    omit?: TB_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_PRODUTOInclude<ExtArgs> | null
    /**
     * Filter, which TB_PRODUTO to fetch.
     */
    where: TB_PRODUTOWhereUniqueInput
  }

  /**
   * TB_PRODUTO findFirst
   */
  export type TB_PRODUTOFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_PRODUTO
     */
    select?: TB_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_PRODUTO
     */
    omit?: TB_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_PRODUTOInclude<ExtArgs> | null
    /**
     * Filter, which TB_PRODUTO to fetch.
     */
    where?: TB_PRODUTOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_PRODUTOS to fetch.
     */
    orderBy?: TB_PRODUTOOrderByWithRelationInput | TB_PRODUTOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_PRODUTOS.
     */
    cursor?: TB_PRODUTOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_PRODUTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_PRODUTOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_PRODUTOS.
     */
    distinct?: TB_PRODUTOScalarFieldEnum | TB_PRODUTOScalarFieldEnum[]
  }

  /**
   * TB_PRODUTO findFirstOrThrow
   */
  export type TB_PRODUTOFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_PRODUTO
     */
    select?: TB_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_PRODUTO
     */
    omit?: TB_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_PRODUTOInclude<ExtArgs> | null
    /**
     * Filter, which TB_PRODUTO to fetch.
     */
    where?: TB_PRODUTOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_PRODUTOS to fetch.
     */
    orderBy?: TB_PRODUTOOrderByWithRelationInput | TB_PRODUTOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_PRODUTOS.
     */
    cursor?: TB_PRODUTOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_PRODUTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_PRODUTOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_PRODUTOS.
     */
    distinct?: TB_PRODUTOScalarFieldEnum | TB_PRODUTOScalarFieldEnum[]
  }

  /**
   * TB_PRODUTO findMany
   */
  export type TB_PRODUTOFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_PRODUTO
     */
    select?: TB_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_PRODUTO
     */
    omit?: TB_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_PRODUTOInclude<ExtArgs> | null
    /**
     * Filter, which TB_PRODUTOS to fetch.
     */
    where?: TB_PRODUTOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_PRODUTOS to fetch.
     */
    orderBy?: TB_PRODUTOOrderByWithRelationInput | TB_PRODUTOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TB_PRODUTOS.
     */
    cursor?: TB_PRODUTOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_PRODUTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_PRODUTOS.
     */
    skip?: number
    distinct?: TB_PRODUTOScalarFieldEnum | TB_PRODUTOScalarFieldEnum[]
  }

  /**
   * TB_PRODUTO create
   */
  export type TB_PRODUTOCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_PRODUTO
     */
    select?: TB_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_PRODUTO
     */
    omit?: TB_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_PRODUTOInclude<ExtArgs> | null
    /**
     * The data needed to create a TB_PRODUTO.
     */
    data: XOR<TB_PRODUTOCreateInput, TB_PRODUTOUncheckedCreateInput>
  }

  /**
   * TB_PRODUTO createMany
   */
  export type TB_PRODUTOCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TB_PRODUTOS.
     */
    data: TB_PRODUTOCreateManyInput | TB_PRODUTOCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TB_PRODUTO createManyAndReturn
   */
  export type TB_PRODUTOCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_PRODUTO
     */
    select?: TB_PRODUTOSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_PRODUTO
     */
    omit?: TB_PRODUTOOmit<ExtArgs> | null
    /**
     * The data used to create many TB_PRODUTOS.
     */
    data: TB_PRODUTOCreateManyInput | TB_PRODUTOCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TB_PRODUTO update
   */
  export type TB_PRODUTOUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_PRODUTO
     */
    select?: TB_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_PRODUTO
     */
    omit?: TB_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_PRODUTOInclude<ExtArgs> | null
    /**
     * The data needed to update a TB_PRODUTO.
     */
    data: XOR<TB_PRODUTOUpdateInput, TB_PRODUTOUncheckedUpdateInput>
    /**
     * Choose, which TB_PRODUTO to update.
     */
    where: TB_PRODUTOWhereUniqueInput
  }

  /**
   * TB_PRODUTO updateMany
   */
  export type TB_PRODUTOUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TB_PRODUTOS.
     */
    data: XOR<TB_PRODUTOUpdateManyMutationInput, TB_PRODUTOUncheckedUpdateManyInput>
    /**
     * Filter which TB_PRODUTOS to update
     */
    where?: TB_PRODUTOWhereInput
    /**
     * Limit how many TB_PRODUTOS to update.
     */
    limit?: number
  }

  /**
   * TB_PRODUTO updateManyAndReturn
   */
  export type TB_PRODUTOUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_PRODUTO
     */
    select?: TB_PRODUTOSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_PRODUTO
     */
    omit?: TB_PRODUTOOmit<ExtArgs> | null
    /**
     * The data used to update TB_PRODUTOS.
     */
    data: XOR<TB_PRODUTOUpdateManyMutationInput, TB_PRODUTOUncheckedUpdateManyInput>
    /**
     * Filter which TB_PRODUTOS to update
     */
    where?: TB_PRODUTOWhereInput
    /**
     * Limit how many TB_PRODUTOS to update.
     */
    limit?: number
  }

  /**
   * TB_PRODUTO upsert
   */
  export type TB_PRODUTOUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_PRODUTO
     */
    select?: TB_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_PRODUTO
     */
    omit?: TB_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_PRODUTOInclude<ExtArgs> | null
    /**
     * The filter to search for the TB_PRODUTO to update in case it exists.
     */
    where: TB_PRODUTOWhereUniqueInput
    /**
     * In case the TB_PRODUTO found by the `where` argument doesn't exist, create a new TB_PRODUTO with this data.
     */
    create: XOR<TB_PRODUTOCreateInput, TB_PRODUTOUncheckedCreateInput>
    /**
     * In case the TB_PRODUTO was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TB_PRODUTOUpdateInput, TB_PRODUTOUncheckedUpdateInput>
  }

  /**
   * TB_PRODUTO delete
   */
  export type TB_PRODUTODeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_PRODUTO
     */
    select?: TB_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_PRODUTO
     */
    omit?: TB_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_PRODUTOInclude<ExtArgs> | null
    /**
     * Filter which TB_PRODUTO to delete.
     */
    where: TB_PRODUTOWhereUniqueInput
  }

  /**
   * TB_PRODUTO deleteMany
   */
  export type TB_PRODUTODeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_PRODUTOS to delete
     */
    where?: TB_PRODUTOWhereInput
    /**
     * Limit how many TB_PRODUTOS to delete.
     */
    limit?: number
  }

  /**
   * TB_PRODUTO.tiposProduto
   */
  export type TB_PRODUTO$tiposProdutoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TIPO_PRODUTO
     */
    select?: TB_TIPO_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TIPO_PRODUTO
     */
    omit?: TB_TIPO_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TIPO_PRODUTOInclude<ExtArgs> | null
    where?: TB_TIPO_PRODUTOWhereInput
    orderBy?: TB_TIPO_PRODUTOOrderByWithRelationInput | TB_TIPO_PRODUTOOrderByWithRelationInput[]
    cursor?: TB_TIPO_PRODUTOWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TB_TIPO_PRODUTOScalarFieldEnum | TB_TIPO_PRODUTOScalarFieldEnum[]
  }

  /**
   * TB_PRODUTO.quantidades
   */
  export type TB_PRODUTO$quantidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_QTD_PRODUTO
     */
    select?: TB_QTD_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_QTD_PRODUTO
     */
    omit?: TB_QTD_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_QTD_PRODUTOInclude<ExtArgs> | null
    where?: TB_QTD_PRODUTOWhereInput
    orderBy?: TB_QTD_PRODUTOOrderByWithRelationInput | TB_QTD_PRODUTOOrderByWithRelationInput[]
    cursor?: TB_QTD_PRODUTOWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TB_QTD_PRODUTOScalarFieldEnum | TB_QTD_PRODUTOScalarFieldEnum[]
  }

  /**
   * TB_PRODUTO.itens
   */
  export type TB_PRODUTO$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_ITENS
     */
    select?: TB_ITENSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_ITENS
     */
    omit?: TB_ITENSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_ITENSInclude<ExtArgs> | null
    where?: TB_ITENSWhereInput
    orderBy?: TB_ITENSOrderByWithRelationInput | TB_ITENSOrderByWithRelationInput[]
    cursor?: TB_ITENSWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TB_ITENSScalarFieldEnum | TB_ITENSScalarFieldEnum[]
  }

  /**
   * TB_PRODUTO without action
   */
  export type TB_PRODUTODefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_PRODUTO
     */
    select?: TB_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_PRODUTO
     */
    omit?: TB_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_PRODUTOInclude<ExtArgs> | null
  }


  /**
   * Model TB_TIPO_PRODUTO
   */

  export type AggregateTB_TIPO_PRODUTO = {
    _count: TB_TIPO_PRODUTOCountAggregateOutputType | null
    _avg: TB_TIPO_PRODUTOAvgAggregateOutputType | null
    _sum: TB_TIPO_PRODUTOSumAggregateOutputType | null
    _min: TB_TIPO_PRODUTOMinAggregateOutputType | null
    _max: TB_TIPO_PRODUTOMaxAggregateOutputType | null
  }

  export type TB_TIPO_PRODUTOAvgAggregateOutputType = {
    SQ_TIPO_PRODUTO: number | null
    SQ_PRODUTO: number | null
    SQ_CATEGORIA_PRODUTO: number | null
  }

  export type TB_TIPO_PRODUTOSumAggregateOutputType = {
    SQ_TIPO_PRODUTO: number | null
    SQ_PRODUTO: number | null
    SQ_CATEGORIA_PRODUTO: number | null
  }

  export type TB_TIPO_PRODUTOMinAggregateOutputType = {
    SQ_TIPO_PRODUTO: number | null
    SQ_PRODUTO: number | null
    SQ_CATEGORIA_PRODUTO: number | null
  }

  export type TB_TIPO_PRODUTOMaxAggregateOutputType = {
    SQ_TIPO_PRODUTO: number | null
    SQ_PRODUTO: number | null
    SQ_CATEGORIA_PRODUTO: number | null
  }

  export type TB_TIPO_PRODUTOCountAggregateOutputType = {
    SQ_TIPO_PRODUTO: number
    SQ_PRODUTO: number
    SQ_CATEGORIA_PRODUTO: number
    _all: number
  }


  export type TB_TIPO_PRODUTOAvgAggregateInputType = {
    SQ_TIPO_PRODUTO?: true
    SQ_PRODUTO?: true
    SQ_CATEGORIA_PRODUTO?: true
  }

  export type TB_TIPO_PRODUTOSumAggregateInputType = {
    SQ_TIPO_PRODUTO?: true
    SQ_PRODUTO?: true
    SQ_CATEGORIA_PRODUTO?: true
  }

  export type TB_TIPO_PRODUTOMinAggregateInputType = {
    SQ_TIPO_PRODUTO?: true
    SQ_PRODUTO?: true
    SQ_CATEGORIA_PRODUTO?: true
  }

  export type TB_TIPO_PRODUTOMaxAggregateInputType = {
    SQ_TIPO_PRODUTO?: true
    SQ_PRODUTO?: true
    SQ_CATEGORIA_PRODUTO?: true
  }

  export type TB_TIPO_PRODUTOCountAggregateInputType = {
    SQ_TIPO_PRODUTO?: true
    SQ_PRODUTO?: true
    SQ_CATEGORIA_PRODUTO?: true
    _all?: true
  }

  export type TB_TIPO_PRODUTOAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_TIPO_PRODUTO to aggregate.
     */
    where?: TB_TIPO_PRODUTOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_TIPO_PRODUTOS to fetch.
     */
    orderBy?: TB_TIPO_PRODUTOOrderByWithRelationInput | TB_TIPO_PRODUTOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TB_TIPO_PRODUTOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_TIPO_PRODUTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_TIPO_PRODUTOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TB_TIPO_PRODUTOS
    **/
    _count?: true | TB_TIPO_PRODUTOCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TB_TIPO_PRODUTOAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TB_TIPO_PRODUTOSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TB_TIPO_PRODUTOMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TB_TIPO_PRODUTOMaxAggregateInputType
  }

  export type GetTB_TIPO_PRODUTOAggregateType<T extends TB_TIPO_PRODUTOAggregateArgs> = {
        [P in keyof T & keyof AggregateTB_TIPO_PRODUTO]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTB_TIPO_PRODUTO[P]>
      : GetScalarType<T[P], AggregateTB_TIPO_PRODUTO[P]>
  }




  export type TB_TIPO_PRODUTOGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_TIPO_PRODUTOWhereInput
    orderBy?: TB_TIPO_PRODUTOOrderByWithAggregationInput | TB_TIPO_PRODUTOOrderByWithAggregationInput[]
    by: TB_TIPO_PRODUTOScalarFieldEnum[] | TB_TIPO_PRODUTOScalarFieldEnum
    having?: TB_TIPO_PRODUTOScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TB_TIPO_PRODUTOCountAggregateInputType | true
    _avg?: TB_TIPO_PRODUTOAvgAggregateInputType
    _sum?: TB_TIPO_PRODUTOSumAggregateInputType
    _min?: TB_TIPO_PRODUTOMinAggregateInputType
    _max?: TB_TIPO_PRODUTOMaxAggregateInputType
  }

  export type TB_TIPO_PRODUTOGroupByOutputType = {
    SQ_TIPO_PRODUTO: number
    SQ_PRODUTO: number
    SQ_CATEGORIA_PRODUTO: number
    _count: TB_TIPO_PRODUTOCountAggregateOutputType | null
    _avg: TB_TIPO_PRODUTOAvgAggregateOutputType | null
    _sum: TB_TIPO_PRODUTOSumAggregateOutputType | null
    _min: TB_TIPO_PRODUTOMinAggregateOutputType | null
    _max: TB_TIPO_PRODUTOMaxAggregateOutputType | null
  }

  type GetTB_TIPO_PRODUTOGroupByPayload<T extends TB_TIPO_PRODUTOGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TB_TIPO_PRODUTOGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TB_TIPO_PRODUTOGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TB_TIPO_PRODUTOGroupByOutputType[P]>
            : GetScalarType<T[P], TB_TIPO_PRODUTOGroupByOutputType[P]>
        }
      >
    >


  export type TB_TIPO_PRODUTOSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SQ_TIPO_PRODUTO?: boolean
    SQ_PRODUTO?: boolean
    SQ_CATEGORIA_PRODUTO?: boolean
    produto?: boolean | TB_PRODUTODefaultArgs<ExtArgs>
    categoriaProduto?: boolean | TB_CATEGORIA_PRODUTODefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_TIPO_PRODUTO"]>

  export type TB_TIPO_PRODUTOSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SQ_TIPO_PRODUTO?: boolean
    SQ_PRODUTO?: boolean
    SQ_CATEGORIA_PRODUTO?: boolean
    produto?: boolean | TB_PRODUTODefaultArgs<ExtArgs>
    categoriaProduto?: boolean | TB_CATEGORIA_PRODUTODefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_TIPO_PRODUTO"]>

  export type TB_TIPO_PRODUTOSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SQ_TIPO_PRODUTO?: boolean
    SQ_PRODUTO?: boolean
    SQ_CATEGORIA_PRODUTO?: boolean
    produto?: boolean | TB_PRODUTODefaultArgs<ExtArgs>
    categoriaProduto?: boolean | TB_CATEGORIA_PRODUTODefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_TIPO_PRODUTO"]>

  export type TB_TIPO_PRODUTOSelectScalar = {
    SQ_TIPO_PRODUTO?: boolean
    SQ_PRODUTO?: boolean
    SQ_CATEGORIA_PRODUTO?: boolean
  }

  export type TB_TIPO_PRODUTOOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"SQ_TIPO_PRODUTO" | "SQ_PRODUTO" | "SQ_CATEGORIA_PRODUTO", ExtArgs["result"]["tB_TIPO_PRODUTO"]>
  export type TB_TIPO_PRODUTOInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | TB_PRODUTODefaultArgs<ExtArgs>
    categoriaProduto?: boolean | TB_CATEGORIA_PRODUTODefaultArgs<ExtArgs>
  }
  export type TB_TIPO_PRODUTOIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | TB_PRODUTODefaultArgs<ExtArgs>
    categoriaProduto?: boolean | TB_CATEGORIA_PRODUTODefaultArgs<ExtArgs>
  }
  export type TB_TIPO_PRODUTOIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | TB_PRODUTODefaultArgs<ExtArgs>
    categoriaProduto?: boolean | TB_CATEGORIA_PRODUTODefaultArgs<ExtArgs>
  }

  export type $TB_TIPO_PRODUTOPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TB_TIPO_PRODUTO"
    objects: {
      produto: Prisma.$TB_PRODUTOPayload<ExtArgs>
      categoriaProduto: Prisma.$TB_CATEGORIA_PRODUTOPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      SQ_TIPO_PRODUTO: number
      SQ_PRODUTO: number
      SQ_CATEGORIA_PRODUTO: number
    }, ExtArgs["result"]["tB_TIPO_PRODUTO"]>
    composites: {}
  }

  type TB_TIPO_PRODUTOGetPayload<S extends boolean | null | undefined | TB_TIPO_PRODUTODefaultArgs> = $Result.GetResult<Prisma.$TB_TIPO_PRODUTOPayload, S>

  type TB_TIPO_PRODUTOCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TB_TIPO_PRODUTOFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TB_TIPO_PRODUTOCountAggregateInputType | true
    }

  export interface TB_TIPO_PRODUTODelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TB_TIPO_PRODUTO'], meta: { name: 'TB_TIPO_PRODUTO' } }
    /**
     * Find zero or one TB_TIPO_PRODUTO that matches the filter.
     * @param {TB_TIPO_PRODUTOFindUniqueArgs} args - Arguments to find a TB_TIPO_PRODUTO
     * @example
     * // Get one TB_TIPO_PRODUTO
     * const tB_TIPO_PRODUTO = await prisma.tB_TIPO_PRODUTO.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TB_TIPO_PRODUTOFindUniqueArgs>(args: SelectSubset<T, TB_TIPO_PRODUTOFindUniqueArgs<ExtArgs>>): Prisma__TB_TIPO_PRODUTOClient<$Result.GetResult<Prisma.$TB_TIPO_PRODUTOPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TB_TIPO_PRODUTO that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TB_TIPO_PRODUTOFindUniqueOrThrowArgs} args - Arguments to find a TB_TIPO_PRODUTO
     * @example
     * // Get one TB_TIPO_PRODUTO
     * const tB_TIPO_PRODUTO = await prisma.tB_TIPO_PRODUTO.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TB_TIPO_PRODUTOFindUniqueOrThrowArgs>(args: SelectSubset<T, TB_TIPO_PRODUTOFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TB_TIPO_PRODUTOClient<$Result.GetResult<Prisma.$TB_TIPO_PRODUTOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_TIPO_PRODUTO that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_TIPO_PRODUTOFindFirstArgs} args - Arguments to find a TB_TIPO_PRODUTO
     * @example
     * // Get one TB_TIPO_PRODUTO
     * const tB_TIPO_PRODUTO = await prisma.tB_TIPO_PRODUTO.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TB_TIPO_PRODUTOFindFirstArgs>(args?: SelectSubset<T, TB_TIPO_PRODUTOFindFirstArgs<ExtArgs>>): Prisma__TB_TIPO_PRODUTOClient<$Result.GetResult<Prisma.$TB_TIPO_PRODUTOPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_TIPO_PRODUTO that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_TIPO_PRODUTOFindFirstOrThrowArgs} args - Arguments to find a TB_TIPO_PRODUTO
     * @example
     * // Get one TB_TIPO_PRODUTO
     * const tB_TIPO_PRODUTO = await prisma.tB_TIPO_PRODUTO.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TB_TIPO_PRODUTOFindFirstOrThrowArgs>(args?: SelectSubset<T, TB_TIPO_PRODUTOFindFirstOrThrowArgs<ExtArgs>>): Prisma__TB_TIPO_PRODUTOClient<$Result.GetResult<Prisma.$TB_TIPO_PRODUTOPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TB_TIPO_PRODUTOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_TIPO_PRODUTOFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TB_TIPO_PRODUTOS
     * const tB_TIPO_PRODUTOS = await prisma.tB_TIPO_PRODUTO.findMany()
     * 
     * // Get first 10 TB_TIPO_PRODUTOS
     * const tB_TIPO_PRODUTOS = await prisma.tB_TIPO_PRODUTO.findMany({ take: 10 })
     * 
     * // Only select the `SQ_TIPO_PRODUTO`
     * const tB_TIPO_PRODUTOWithSQ_TIPO_PRODUTOOnly = await prisma.tB_TIPO_PRODUTO.findMany({ select: { SQ_TIPO_PRODUTO: true } })
     * 
     */
    findMany<T extends TB_TIPO_PRODUTOFindManyArgs>(args?: SelectSubset<T, TB_TIPO_PRODUTOFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_TIPO_PRODUTOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TB_TIPO_PRODUTO.
     * @param {TB_TIPO_PRODUTOCreateArgs} args - Arguments to create a TB_TIPO_PRODUTO.
     * @example
     * // Create one TB_TIPO_PRODUTO
     * const TB_TIPO_PRODUTO = await prisma.tB_TIPO_PRODUTO.create({
     *   data: {
     *     // ... data to create a TB_TIPO_PRODUTO
     *   }
     * })
     * 
     */
    create<T extends TB_TIPO_PRODUTOCreateArgs>(args: SelectSubset<T, TB_TIPO_PRODUTOCreateArgs<ExtArgs>>): Prisma__TB_TIPO_PRODUTOClient<$Result.GetResult<Prisma.$TB_TIPO_PRODUTOPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TB_TIPO_PRODUTOS.
     * @param {TB_TIPO_PRODUTOCreateManyArgs} args - Arguments to create many TB_TIPO_PRODUTOS.
     * @example
     * // Create many TB_TIPO_PRODUTOS
     * const tB_TIPO_PRODUTO = await prisma.tB_TIPO_PRODUTO.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TB_TIPO_PRODUTOCreateManyArgs>(args?: SelectSubset<T, TB_TIPO_PRODUTOCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TB_TIPO_PRODUTOS and returns the data saved in the database.
     * @param {TB_TIPO_PRODUTOCreateManyAndReturnArgs} args - Arguments to create many TB_TIPO_PRODUTOS.
     * @example
     * // Create many TB_TIPO_PRODUTOS
     * const tB_TIPO_PRODUTO = await prisma.tB_TIPO_PRODUTO.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TB_TIPO_PRODUTOS and only return the `SQ_TIPO_PRODUTO`
     * const tB_TIPO_PRODUTOWithSQ_TIPO_PRODUTOOnly = await prisma.tB_TIPO_PRODUTO.createManyAndReturn({
     *   select: { SQ_TIPO_PRODUTO: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TB_TIPO_PRODUTOCreateManyAndReturnArgs>(args?: SelectSubset<T, TB_TIPO_PRODUTOCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_TIPO_PRODUTOPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TB_TIPO_PRODUTO.
     * @param {TB_TIPO_PRODUTODeleteArgs} args - Arguments to delete one TB_TIPO_PRODUTO.
     * @example
     * // Delete one TB_TIPO_PRODUTO
     * const TB_TIPO_PRODUTO = await prisma.tB_TIPO_PRODUTO.delete({
     *   where: {
     *     // ... filter to delete one TB_TIPO_PRODUTO
     *   }
     * })
     * 
     */
    delete<T extends TB_TIPO_PRODUTODeleteArgs>(args: SelectSubset<T, TB_TIPO_PRODUTODeleteArgs<ExtArgs>>): Prisma__TB_TIPO_PRODUTOClient<$Result.GetResult<Prisma.$TB_TIPO_PRODUTOPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TB_TIPO_PRODUTO.
     * @param {TB_TIPO_PRODUTOUpdateArgs} args - Arguments to update one TB_TIPO_PRODUTO.
     * @example
     * // Update one TB_TIPO_PRODUTO
     * const tB_TIPO_PRODUTO = await prisma.tB_TIPO_PRODUTO.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TB_TIPO_PRODUTOUpdateArgs>(args: SelectSubset<T, TB_TIPO_PRODUTOUpdateArgs<ExtArgs>>): Prisma__TB_TIPO_PRODUTOClient<$Result.GetResult<Prisma.$TB_TIPO_PRODUTOPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TB_TIPO_PRODUTOS.
     * @param {TB_TIPO_PRODUTODeleteManyArgs} args - Arguments to filter TB_TIPO_PRODUTOS to delete.
     * @example
     * // Delete a few TB_TIPO_PRODUTOS
     * const { count } = await prisma.tB_TIPO_PRODUTO.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TB_TIPO_PRODUTODeleteManyArgs>(args?: SelectSubset<T, TB_TIPO_PRODUTODeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_TIPO_PRODUTOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_TIPO_PRODUTOUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TB_TIPO_PRODUTOS
     * const tB_TIPO_PRODUTO = await prisma.tB_TIPO_PRODUTO.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TB_TIPO_PRODUTOUpdateManyArgs>(args: SelectSubset<T, TB_TIPO_PRODUTOUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_TIPO_PRODUTOS and returns the data updated in the database.
     * @param {TB_TIPO_PRODUTOUpdateManyAndReturnArgs} args - Arguments to update many TB_TIPO_PRODUTOS.
     * @example
     * // Update many TB_TIPO_PRODUTOS
     * const tB_TIPO_PRODUTO = await prisma.tB_TIPO_PRODUTO.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TB_TIPO_PRODUTOS and only return the `SQ_TIPO_PRODUTO`
     * const tB_TIPO_PRODUTOWithSQ_TIPO_PRODUTOOnly = await prisma.tB_TIPO_PRODUTO.updateManyAndReturn({
     *   select: { SQ_TIPO_PRODUTO: true },
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
    updateManyAndReturn<T extends TB_TIPO_PRODUTOUpdateManyAndReturnArgs>(args: SelectSubset<T, TB_TIPO_PRODUTOUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_TIPO_PRODUTOPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TB_TIPO_PRODUTO.
     * @param {TB_TIPO_PRODUTOUpsertArgs} args - Arguments to update or create a TB_TIPO_PRODUTO.
     * @example
     * // Update or create a TB_TIPO_PRODUTO
     * const tB_TIPO_PRODUTO = await prisma.tB_TIPO_PRODUTO.upsert({
     *   create: {
     *     // ... data to create a TB_TIPO_PRODUTO
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TB_TIPO_PRODUTO we want to update
     *   }
     * })
     */
    upsert<T extends TB_TIPO_PRODUTOUpsertArgs>(args: SelectSubset<T, TB_TIPO_PRODUTOUpsertArgs<ExtArgs>>): Prisma__TB_TIPO_PRODUTOClient<$Result.GetResult<Prisma.$TB_TIPO_PRODUTOPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TB_TIPO_PRODUTOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_TIPO_PRODUTOCountArgs} args - Arguments to filter TB_TIPO_PRODUTOS to count.
     * @example
     * // Count the number of TB_TIPO_PRODUTOS
     * const count = await prisma.tB_TIPO_PRODUTO.count({
     *   where: {
     *     // ... the filter for the TB_TIPO_PRODUTOS we want to count
     *   }
     * })
    **/
    count<T extends TB_TIPO_PRODUTOCountArgs>(
      args?: Subset<T, TB_TIPO_PRODUTOCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TB_TIPO_PRODUTOCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TB_TIPO_PRODUTO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_TIPO_PRODUTOAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TB_TIPO_PRODUTOAggregateArgs>(args: Subset<T, TB_TIPO_PRODUTOAggregateArgs>): Prisma.PrismaPromise<GetTB_TIPO_PRODUTOAggregateType<T>>

    /**
     * Group by TB_TIPO_PRODUTO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_TIPO_PRODUTOGroupByArgs} args - Group by arguments.
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
      T extends TB_TIPO_PRODUTOGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TB_TIPO_PRODUTOGroupByArgs['orderBy'] }
        : { orderBy?: TB_TIPO_PRODUTOGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TB_TIPO_PRODUTOGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTB_TIPO_PRODUTOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TB_TIPO_PRODUTO model
   */
  readonly fields: TB_TIPO_PRODUTOFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TB_TIPO_PRODUTO.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TB_TIPO_PRODUTOClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produto<T extends TB_PRODUTODefaultArgs<ExtArgs> = {}>(args?: Subset<T, TB_PRODUTODefaultArgs<ExtArgs>>): Prisma__TB_PRODUTOClient<$Result.GetResult<Prisma.$TB_PRODUTOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categoriaProduto<T extends TB_CATEGORIA_PRODUTODefaultArgs<ExtArgs> = {}>(args?: Subset<T, TB_CATEGORIA_PRODUTODefaultArgs<ExtArgs>>): Prisma__TB_CATEGORIA_PRODUTOClient<$Result.GetResult<Prisma.$TB_CATEGORIA_PRODUTOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TB_TIPO_PRODUTO model
   */
  interface TB_TIPO_PRODUTOFieldRefs {
    readonly SQ_TIPO_PRODUTO: FieldRef<"TB_TIPO_PRODUTO", 'Int'>
    readonly SQ_PRODUTO: FieldRef<"TB_TIPO_PRODUTO", 'Int'>
    readonly SQ_CATEGORIA_PRODUTO: FieldRef<"TB_TIPO_PRODUTO", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TB_TIPO_PRODUTO findUnique
   */
  export type TB_TIPO_PRODUTOFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TIPO_PRODUTO
     */
    select?: TB_TIPO_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TIPO_PRODUTO
     */
    omit?: TB_TIPO_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TIPO_PRODUTOInclude<ExtArgs> | null
    /**
     * Filter, which TB_TIPO_PRODUTO to fetch.
     */
    where: TB_TIPO_PRODUTOWhereUniqueInput
  }

  /**
   * TB_TIPO_PRODUTO findUniqueOrThrow
   */
  export type TB_TIPO_PRODUTOFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TIPO_PRODUTO
     */
    select?: TB_TIPO_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TIPO_PRODUTO
     */
    omit?: TB_TIPO_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TIPO_PRODUTOInclude<ExtArgs> | null
    /**
     * Filter, which TB_TIPO_PRODUTO to fetch.
     */
    where: TB_TIPO_PRODUTOWhereUniqueInput
  }

  /**
   * TB_TIPO_PRODUTO findFirst
   */
  export type TB_TIPO_PRODUTOFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TIPO_PRODUTO
     */
    select?: TB_TIPO_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TIPO_PRODUTO
     */
    omit?: TB_TIPO_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TIPO_PRODUTOInclude<ExtArgs> | null
    /**
     * Filter, which TB_TIPO_PRODUTO to fetch.
     */
    where?: TB_TIPO_PRODUTOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_TIPO_PRODUTOS to fetch.
     */
    orderBy?: TB_TIPO_PRODUTOOrderByWithRelationInput | TB_TIPO_PRODUTOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_TIPO_PRODUTOS.
     */
    cursor?: TB_TIPO_PRODUTOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_TIPO_PRODUTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_TIPO_PRODUTOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_TIPO_PRODUTOS.
     */
    distinct?: TB_TIPO_PRODUTOScalarFieldEnum | TB_TIPO_PRODUTOScalarFieldEnum[]
  }

  /**
   * TB_TIPO_PRODUTO findFirstOrThrow
   */
  export type TB_TIPO_PRODUTOFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TIPO_PRODUTO
     */
    select?: TB_TIPO_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TIPO_PRODUTO
     */
    omit?: TB_TIPO_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TIPO_PRODUTOInclude<ExtArgs> | null
    /**
     * Filter, which TB_TIPO_PRODUTO to fetch.
     */
    where?: TB_TIPO_PRODUTOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_TIPO_PRODUTOS to fetch.
     */
    orderBy?: TB_TIPO_PRODUTOOrderByWithRelationInput | TB_TIPO_PRODUTOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_TIPO_PRODUTOS.
     */
    cursor?: TB_TIPO_PRODUTOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_TIPO_PRODUTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_TIPO_PRODUTOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_TIPO_PRODUTOS.
     */
    distinct?: TB_TIPO_PRODUTOScalarFieldEnum | TB_TIPO_PRODUTOScalarFieldEnum[]
  }

  /**
   * TB_TIPO_PRODUTO findMany
   */
  export type TB_TIPO_PRODUTOFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TIPO_PRODUTO
     */
    select?: TB_TIPO_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TIPO_PRODUTO
     */
    omit?: TB_TIPO_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TIPO_PRODUTOInclude<ExtArgs> | null
    /**
     * Filter, which TB_TIPO_PRODUTOS to fetch.
     */
    where?: TB_TIPO_PRODUTOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_TIPO_PRODUTOS to fetch.
     */
    orderBy?: TB_TIPO_PRODUTOOrderByWithRelationInput | TB_TIPO_PRODUTOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TB_TIPO_PRODUTOS.
     */
    cursor?: TB_TIPO_PRODUTOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_TIPO_PRODUTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_TIPO_PRODUTOS.
     */
    skip?: number
    distinct?: TB_TIPO_PRODUTOScalarFieldEnum | TB_TIPO_PRODUTOScalarFieldEnum[]
  }

  /**
   * TB_TIPO_PRODUTO create
   */
  export type TB_TIPO_PRODUTOCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TIPO_PRODUTO
     */
    select?: TB_TIPO_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TIPO_PRODUTO
     */
    omit?: TB_TIPO_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TIPO_PRODUTOInclude<ExtArgs> | null
    /**
     * The data needed to create a TB_TIPO_PRODUTO.
     */
    data: XOR<TB_TIPO_PRODUTOCreateInput, TB_TIPO_PRODUTOUncheckedCreateInput>
  }

  /**
   * TB_TIPO_PRODUTO createMany
   */
  export type TB_TIPO_PRODUTOCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TB_TIPO_PRODUTOS.
     */
    data: TB_TIPO_PRODUTOCreateManyInput | TB_TIPO_PRODUTOCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TB_TIPO_PRODUTO createManyAndReturn
   */
  export type TB_TIPO_PRODUTOCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TIPO_PRODUTO
     */
    select?: TB_TIPO_PRODUTOSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TIPO_PRODUTO
     */
    omit?: TB_TIPO_PRODUTOOmit<ExtArgs> | null
    /**
     * The data used to create many TB_TIPO_PRODUTOS.
     */
    data: TB_TIPO_PRODUTOCreateManyInput | TB_TIPO_PRODUTOCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TIPO_PRODUTOIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TB_TIPO_PRODUTO update
   */
  export type TB_TIPO_PRODUTOUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TIPO_PRODUTO
     */
    select?: TB_TIPO_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TIPO_PRODUTO
     */
    omit?: TB_TIPO_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TIPO_PRODUTOInclude<ExtArgs> | null
    /**
     * The data needed to update a TB_TIPO_PRODUTO.
     */
    data: XOR<TB_TIPO_PRODUTOUpdateInput, TB_TIPO_PRODUTOUncheckedUpdateInput>
    /**
     * Choose, which TB_TIPO_PRODUTO to update.
     */
    where: TB_TIPO_PRODUTOWhereUniqueInput
  }

  /**
   * TB_TIPO_PRODUTO updateMany
   */
  export type TB_TIPO_PRODUTOUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TB_TIPO_PRODUTOS.
     */
    data: XOR<TB_TIPO_PRODUTOUpdateManyMutationInput, TB_TIPO_PRODUTOUncheckedUpdateManyInput>
    /**
     * Filter which TB_TIPO_PRODUTOS to update
     */
    where?: TB_TIPO_PRODUTOWhereInput
    /**
     * Limit how many TB_TIPO_PRODUTOS to update.
     */
    limit?: number
  }

  /**
   * TB_TIPO_PRODUTO updateManyAndReturn
   */
  export type TB_TIPO_PRODUTOUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TIPO_PRODUTO
     */
    select?: TB_TIPO_PRODUTOSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TIPO_PRODUTO
     */
    omit?: TB_TIPO_PRODUTOOmit<ExtArgs> | null
    /**
     * The data used to update TB_TIPO_PRODUTOS.
     */
    data: XOR<TB_TIPO_PRODUTOUpdateManyMutationInput, TB_TIPO_PRODUTOUncheckedUpdateManyInput>
    /**
     * Filter which TB_TIPO_PRODUTOS to update
     */
    where?: TB_TIPO_PRODUTOWhereInput
    /**
     * Limit how many TB_TIPO_PRODUTOS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TIPO_PRODUTOIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TB_TIPO_PRODUTO upsert
   */
  export type TB_TIPO_PRODUTOUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TIPO_PRODUTO
     */
    select?: TB_TIPO_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TIPO_PRODUTO
     */
    omit?: TB_TIPO_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TIPO_PRODUTOInclude<ExtArgs> | null
    /**
     * The filter to search for the TB_TIPO_PRODUTO to update in case it exists.
     */
    where: TB_TIPO_PRODUTOWhereUniqueInput
    /**
     * In case the TB_TIPO_PRODUTO found by the `where` argument doesn't exist, create a new TB_TIPO_PRODUTO with this data.
     */
    create: XOR<TB_TIPO_PRODUTOCreateInput, TB_TIPO_PRODUTOUncheckedCreateInput>
    /**
     * In case the TB_TIPO_PRODUTO was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TB_TIPO_PRODUTOUpdateInput, TB_TIPO_PRODUTOUncheckedUpdateInput>
  }

  /**
   * TB_TIPO_PRODUTO delete
   */
  export type TB_TIPO_PRODUTODeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TIPO_PRODUTO
     */
    select?: TB_TIPO_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TIPO_PRODUTO
     */
    omit?: TB_TIPO_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TIPO_PRODUTOInclude<ExtArgs> | null
    /**
     * Filter which TB_TIPO_PRODUTO to delete.
     */
    where: TB_TIPO_PRODUTOWhereUniqueInput
  }

  /**
   * TB_TIPO_PRODUTO deleteMany
   */
  export type TB_TIPO_PRODUTODeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_TIPO_PRODUTOS to delete
     */
    where?: TB_TIPO_PRODUTOWhereInput
    /**
     * Limit how many TB_TIPO_PRODUTOS to delete.
     */
    limit?: number
  }

  /**
   * TB_TIPO_PRODUTO without action
   */
  export type TB_TIPO_PRODUTODefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TIPO_PRODUTO
     */
    select?: TB_TIPO_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TIPO_PRODUTO
     */
    omit?: TB_TIPO_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TIPO_PRODUTOInclude<ExtArgs> | null
  }


  /**
   * Model TB_CATEGORIA_PRODUTO
   */

  export type AggregateTB_CATEGORIA_PRODUTO = {
    _count: TB_CATEGORIA_PRODUTOCountAggregateOutputType | null
    _avg: TB_CATEGORIA_PRODUTOAvgAggregateOutputType | null
    _sum: TB_CATEGORIA_PRODUTOSumAggregateOutputType | null
    _min: TB_CATEGORIA_PRODUTOMinAggregateOutputType | null
    _max: TB_CATEGORIA_PRODUTOMaxAggregateOutputType | null
  }

  export type TB_CATEGORIA_PRODUTOAvgAggregateOutputType = {
    SQ_CATEGORIA_PRODUTO: number | null
  }

  export type TB_CATEGORIA_PRODUTOSumAggregateOutputType = {
    SQ_CATEGORIA_PRODUTO: number | null
  }

  export type TB_CATEGORIA_PRODUTOMinAggregateOutputType = {
    SQ_CATEGORIA_PRODUTO: number | null
    NO_CATEGORIA: string | null
  }

  export type TB_CATEGORIA_PRODUTOMaxAggregateOutputType = {
    SQ_CATEGORIA_PRODUTO: number | null
    NO_CATEGORIA: string | null
  }

  export type TB_CATEGORIA_PRODUTOCountAggregateOutputType = {
    SQ_CATEGORIA_PRODUTO: number
    NO_CATEGORIA: number
    _all: number
  }


  export type TB_CATEGORIA_PRODUTOAvgAggregateInputType = {
    SQ_CATEGORIA_PRODUTO?: true
  }

  export type TB_CATEGORIA_PRODUTOSumAggregateInputType = {
    SQ_CATEGORIA_PRODUTO?: true
  }

  export type TB_CATEGORIA_PRODUTOMinAggregateInputType = {
    SQ_CATEGORIA_PRODUTO?: true
    NO_CATEGORIA?: true
  }

  export type TB_CATEGORIA_PRODUTOMaxAggregateInputType = {
    SQ_CATEGORIA_PRODUTO?: true
    NO_CATEGORIA?: true
  }

  export type TB_CATEGORIA_PRODUTOCountAggregateInputType = {
    SQ_CATEGORIA_PRODUTO?: true
    NO_CATEGORIA?: true
    _all?: true
  }

  export type TB_CATEGORIA_PRODUTOAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_CATEGORIA_PRODUTO to aggregate.
     */
    where?: TB_CATEGORIA_PRODUTOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_CATEGORIA_PRODUTOS to fetch.
     */
    orderBy?: TB_CATEGORIA_PRODUTOOrderByWithRelationInput | TB_CATEGORIA_PRODUTOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TB_CATEGORIA_PRODUTOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_CATEGORIA_PRODUTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_CATEGORIA_PRODUTOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TB_CATEGORIA_PRODUTOS
    **/
    _count?: true | TB_CATEGORIA_PRODUTOCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TB_CATEGORIA_PRODUTOAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TB_CATEGORIA_PRODUTOSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TB_CATEGORIA_PRODUTOMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TB_CATEGORIA_PRODUTOMaxAggregateInputType
  }

  export type GetTB_CATEGORIA_PRODUTOAggregateType<T extends TB_CATEGORIA_PRODUTOAggregateArgs> = {
        [P in keyof T & keyof AggregateTB_CATEGORIA_PRODUTO]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTB_CATEGORIA_PRODUTO[P]>
      : GetScalarType<T[P], AggregateTB_CATEGORIA_PRODUTO[P]>
  }




  export type TB_CATEGORIA_PRODUTOGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_CATEGORIA_PRODUTOWhereInput
    orderBy?: TB_CATEGORIA_PRODUTOOrderByWithAggregationInput | TB_CATEGORIA_PRODUTOOrderByWithAggregationInput[]
    by: TB_CATEGORIA_PRODUTOScalarFieldEnum[] | TB_CATEGORIA_PRODUTOScalarFieldEnum
    having?: TB_CATEGORIA_PRODUTOScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TB_CATEGORIA_PRODUTOCountAggregateInputType | true
    _avg?: TB_CATEGORIA_PRODUTOAvgAggregateInputType
    _sum?: TB_CATEGORIA_PRODUTOSumAggregateInputType
    _min?: TB_CATEGORIA_PRODUTOMinAggregateInputType
    _max?: TB_CATEGORIA_PRODUTOMaxAggregateInputType
  }

  export type TB_CATEGORIA_PRODUTOGroupByOutputType = {
    SQ_CATEGORIA_PRODUTO: number
    NO_CATEGORIA: string
    _count: TB_CATEGORIA_PRODUTOCountAggregateOutputType | null
    _avg: TB_CATEGORIA_PRODUTOAvgAggregateOutputType | null
    _sum: TB_CATEGORIA_PRODUTOSumAggregateOutputType | null
    _min: TB_CATEGORIA_PRODUTOMinAggregateOutputType | null
    _max: TB_CATEGORIA_PRODUTOMaxAggregateOutputType | null
  }

  type GetTB_CATEGORIA_PRODUTOGroupByPayload<T extends TB_CATEGORIA_PRODUTOGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TB_CATEGORIA_PRODUTOGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TB_CATEGORIA_PRODUTOGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TB_CATEGORIA_PRODUTOGroupByOutputType[P]>
            : GetScalarType<T[P], TB_CATEGORIA_PRODUTOGroupByOutputType[P]>
        }
      >
    >


  export type TB_CATEGORIA_PRODUTOSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SQ_CATEGORIA_PRODUTO?: boolean
    NO_CATEGORIA?: boolean
    tiposProduto?: boolean | TB_CATEGORIA_PRODUTO$tiposProdutoArgs<ExtArgs>
    _count?: boolean | TB_CATEGORIA_PRODUTOCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_CATEGORIA_PRODUTO"]>

  export type TB_CATEGORIA_PRODUTOSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SQ_CATEGORIA_PRODUTO?: boolean
    NO_CATEGORIA?: boolean
  }, ExtArgs["result"]["tB_CATEGORIA_PRODUTO"]>

  export type TB_CATEGORIA_PRODUTOSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SQ_CATEGORIA_PRODUTO?: boolean
    NO_CATEGORIA?: boolean
  }, ExtArgs["result"]["tB_CATEGORIA_PRODUTO"]>

  export type TB_CATEGORIA_PRODUTOSelectScalar = {
    SQ_CATEGORIA_PRODUTO?: boolean
    NO_CATEGORIA?: boolean
  }

  export type TB_CATEGORIA_PRODUTOOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"SQ_CATEGORIA_PRODUTO" | "NO_CATEGORIA", ExtArgs["result"]["tB_CATEGORIA_PRODUTO"]>
  export type TB_CATEGORIA_PRODUTOInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tiposProduto?: boolean | TB_CATEGORIA_PRODUTO$tiposProdutoArgs<ExtArgs>
    _count?: boolean | TB_CATEGORIA_PRODUTOCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TB_CATEGORIA_PRODUTOIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TB_CATEGORIA_PRODUTOIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TB_CATEGORIA_PRODUTOPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TB_CATEGORIA_PRODUTO"
    objects: {
      tiposProduto: Prisma.$TB_TIPO_PRODUTOPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      SQ_CATEGORIA_PRODUTO: number
      NO_CATEGORIA: string
    }, ExtArgs["result"]["tB_CATEGORIA_PRODUTO"]>
    composites: {}
  }

  type TB_CATEGORIA_PRODUTOGetPayload<S extends boolean | null | undefined | TB_CATEGORIA_PRODUTODefaultArgs> = $Result.GetResult<Prisma.$TB_CATEGORIA_PRODUTOPayload, S>

  type TB_CATEGORIA_PRODUTOCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TB_CATEGORIA_PRODUTOFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TB_CATEGORIA_PRODUTOCountAggregateInputType | true
    }

  export interface TB_CATEGORIA_PRODUTODelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TB_CATEGORIA_PRODUTO'], meta: { name: 'TB_CATEGORIA_PRODUTO' } }
    /**
     * Find zero or one TB_CATEGORIA_PRODUTO that matches the filter.
     * @param {TB_CATEGORIA_PRODUTOFindUniqueArgs} args - Arguments to find a TB_CATEGORIA_PRODUTO
     * @example
     * // Get one TB_CATEGORIA_PRODUTO
     * const tB_CATEGORIA_PRODUTO = await prisma.tB_CATEGORIA_PRODUTO.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TB_CATEGORIA_PRODUTOFindUniqueArgs>(args: SelectSubset<T, TB_CATEGORIA_PRODUTOFindUniqueArgs<ExtArgs>>): Prisma__TB_CATEGORIA_PRODUTOClient<$Result.GetResult<Prisma.$TB_CATEGORIA_PRODUTOPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TB_CATEGORIA_PRODUTO that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TB_CATEGORIA_PRODUTOFindUniqueOrThrowArgs} args - Arguments to find a TB_CATEGORIA_PRODUTO
     * @example
     * // Get one TB_CATEGORIA_PRODUTO
     * const tB_CATEGORIA_PRODUTO = await prisma.tB_CATEGORIA_PRODUTO.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TB_CATEGORIA_PRODUTOFindUniqueOrThrowArgs>(args: SelectSubset<T, TB_CATEGORIA_PRODUTOFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TB_CATEGORIA_PRODUTOClient<$Result.GetResult<Prisma.$TB_CATEGORIA_PRODUTOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_CATEGORIA_PRODUTO that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_CATEGORIA_PRODUTOFindFirstArgs} args - Arguments to find a TB_CATEGORIA_PRODUTO
     * @example
     * // Get one TB_CATEGORIA_PRODUTO
     * const tB_CATEGORIA_PRODUTO = await prisma.tB_CATEGORIA_PRODUTO.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TB_CATEGORIA_PRODUTOFindFirstArgs>(args?: SelectSubset<T, TB_CATEGORIA_PRODUTOFindFirstArgs<ExtArgs>>): Prisma__TB_CATEGORIA_PRODUTOClient<$Result.GetResult<Prisma.$TB_CATEGORIA_PRODUTOPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_CATEGORIA_PRODUTO that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_CATEGORIA_PRODUTOFindFirstOrThrowArgs} args - Arguments to find a TB_CATEGORIA_PRODUTO
     * @example
     * // Get one TB_CATEGORIA_PRODUTO
     * const tB_CATEGORIA_PRODUTO = await prisma.tB_CATEGORIA_PRODUTO.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TB_CATEGORIA_PRODUTOFindFirstOrThrowArgs>(args?: SelectSubset<T, TB_CATEGORIA_PRODUTOFindFirstOrThrowArgs<ExtArgs>>): Prisma__TB_CATEGORIA_PRODUTOClient<$Result.GetResult<Prisma.$TB_CATEGORIA_PRODUTOPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TB_CATEGORIA_PRODUTOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_CATEGORIA_PRODUTOFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TB_CATEGORIA_PRODUTOS
     * const tB_CATEGORIA_PRODUTOS = await prisma.tB_CATEGORIA_PRODUTO.findMany()
     * 
     * // Get first 10 TB_CATEGORIA_PRODUTOS
     * const tB_CATEGORIA_PRODUTOS = await prisma.tB_CATEGORIA_PRODUTO.findMany({ take: 10 })
     * 
     * // Only select the `SQ_CATEGORIA_PRODUTO`
     * const tB_CATEGORIA_PRODUTOWithSQ_CATEGORIA_PRODUTOOnly = await prisma.tB_CATEGORIA_PRODUTO.findMany({ select: { SQ_CATEGORIA_PRODUTO: true } })
     * 
     */
    findMany<T extends TB_CATEGORIA_PRODUTOFindManyArgs>(args?: SelectSubset<T, TB_CATEGORIA_PRODUTOFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_CATEGORIA_PRODUTOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TB_CATEGORIA_PRODUTO.
     * @param {TB_CATEGORIA_PRODUTOCreateArgs} args - Arguments to create a TB_CATEGORIA_PRODUTO.
     * @example
     * // Create one TB_CATEGORIA_PRODUTO
     * const TB_CATEGORIA_PRODUTO = await prisma.tB_CATEGORIA_PRODUTO.create({
     *   data: {
     *     // ... data to create a TB_CATEGORIA_PRODUTO
     *   }
     * })
     * 
     */
    create<T extends TB_CATEGORIA_PRODUTOCreateArgs>(args: SelectSubset<T, TB_CATEGORIA_PRODUTOCreateArgs<ExtArgs>>): Prisma__TB_CATEGORIA_PRODUTOClient<$Result.GetResult<Prisma.$TB_CATEGORIA_PRODUTOPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TB_CATEGORIA_PRODUTOS.
     * @param {TB_CATEGORIA_PRODUTOCreateManyArgs} args - Arguments to create many TB_CATEGORIA_PRODUTOS.
     * @example
     * // Create many TB_CATEGORIA_PRODUTOS
     * const tB_CATEGORIA_PRODUTO = await prisma.tB_CATEGORIA_PRODUTO.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TB_CATEGORIA_PRODUTOCreateManyArgs>(args?: SelectSubset<T, TB_CATEGORIA_PRODUTOCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TB_CATEGORIA_PRODUTOS and returns the data saved in the database.
     * @param {TB_CATEGORIA_PRODUTOCreateManyAndReturnArgs} args - Arguments to create many TB_CATEGORIA_PRODUTOS.
     * @example
     * // Create many TB_CATEGORIA_PRODUTOS
     * const tB_CATEGORIA_PRODUTO = await prisma.tB_CATEGORIA_PRODUTO.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TB_CATEGORIA_PRODUTOS and only return the `SQ_CATEGORIA_PRODUTO`
     * const tB_CATEGORIA_PRODUTOWithSQ_CATEGORIA_PRODUTOOnly = await prisma.tB_CATEGORIA_PRODUTO.createManyAndReturn({
     *   select: { SQ_CATEGORIA_PRODUTO: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TB_CATEGORIA_PRODUTOCreateManyAndReturnArgs>(args?: SelectSubset<T, TB_CATEGORIA_PRODUTOCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_CATEGORIA_PRODUTOPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TB_CATEGORIA_PRODUTO.
     * @param {TB_CATEGORIA_PRODUTODeleteArgs} args - Arguments to delete one TB_CATEGORIA_PRODUTO.
     * @example
     * // Delete one TB_CATEGORIA_PRODUTO
     * const TB_CATEGORIA_PRODUTO = await prisma.tB_CATEGORIA_PRODUTO.delete({
     *   where: {
     *     // ... filter to delete one TB_CATEGORIA_PRODUTO
     *   }
     * })
     * 
     */
    delete<T extends TB_CATEGORIA_PRODUTODeleteArgs>(args: SelectSubset<T, TB_CATEGORIA_PRODUTODeleteArgs<ExtArgs>>): Prisma__TB_CATEGORIA_PRODUTOClient<$Result.GetResult<Prisma.$TB_CATEGORIA_PRODUTOPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TB_CATEGORIA_PRODUTO.
     * @param {TB_CATEGORIA_PRODUTOUpdateArgs} args - Arguments to update one TB_CATEGORIA_PRODUTO.
     * @example
     * // Update one TB_CATEGORIA_PRODUTO
     * const tB_CATEGORIA_PRODUTO = await prisma.tB_CATEGORIA_PRODUTO.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TB_CATEGORIA_PRODUTOUpdateArgs>(args: SelectSubset<T, TB_CATEGORIA_PRODUTOUpdateArgs<ExtArgs>>): Prisma__TB_CATEGORIA_PRODUTOClient<$Result.GetResult<Prisma.$TB_CATEGORIA_PRODUTOPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TB_CATEGORIA_PRODUTOS.
     * @param {TB_CATEGORIA_PRODUTODeleteManyArgs} args - Arguments to filter TB_CATEGORIA_PRODUTOS to delete.
     * @example
     * // Delete a few TB_CATEGORIA_PRODUTOS
     * const { count } = await prisma.tB_CATEGORIA_PRODUTO.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TB_CATEGORIA_PRODUTODeleteManyArgs>(args?: SelectSubset<T, TB_CATEGORIA_PRODUTODeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_CATEGORIA_PRODUTOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_CATEGORIA_PRODUTOUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TB_CATEGORIA_PRODUTOS
     * const tB_CATEGORIA_PRODUTO = await prisma.tB_CATEGORIA_PRODUTO.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TB_CATEGORIA_PRODUTOUpdateManyArgs>(args: SelectSubset<T, TB_CATEGORIA_PRODUTOUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_CATEGORIA_PRODUTOS and returns the data updated in the database.
     * @param {TB_CATEGORIA_PRODUTOUpdateManyAndReturnArgs} args - Arguments to update many TB_CATEGORIA_PRODUTOS.
     * @example
     * // Update many TB_CATEGORIA_PRODUTOS
     * const tB_CATEGORIA_PRODUTO = await prisma.tB_CATEGORIA_PRODUTO.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TB_CATEGORIA_PRODUTOS and only return the `SQ_CATEGORIA_PRODUTO`
     * const tB_CATEGORIA_PRODUTOWithSQ_CATEGORIA_PRODUTOOnly = await prisma.tB_CATEGORIA_PRODUTO.updateManyAndReturn({
     *   select: { SQ_CATEGORIA_PRODUTO: true },
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
    updateManyAndReturn<T extends TB_CATEGORIA_PRODUTOUpdateManyAndReturnArgs>(args: SelectSubset<T, TB_CATEGORIA_PRODUTOUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_CATEGORIA_PRODUTOPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TB_CATEGORIA_PRODUTO.
     * @param {TB_CATEGORIA_PRODUTOUpsertArgs} args - Arguments to update or create a TB_CATEGORIA_PRODUTO.
     * @example
     * // Update or create a TB_CATEGORIA_PRODUTO
     * const tB_CATEGORIA_PRODUTO = await prisma.tB_CATEGORIA_PRODUTO.upsert({
     *   create: {
     *     // ... data to create a TB_CATEGORIA_PRODUTO
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TB_CATEGORIA_PRODUTO we want to update
     *   }
     * })
     */
    upsert<T extends TB_CATEGORIA_PRODUTOUpsertArgs>(args: SelectSubset<T, TB_CATEGORIA_PRODUTOUpsertArgs<ExtArgs>>): Prisma__TB_CATEGORIA_PRODUTOClient<$Result.GetResult<Prisma.$TB_CATEGORIA_PRODUTOPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TB_CATEGORIA_PRODUTOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_CATEGORIA_PRODUTOCountArgs} args - Arguments to filter TB_CATEGORIA_PRODUTOS to count.
     * @example
     * // Count the number of TB_CATEGORIA_PRODUTOS
     * const count = await prisma.tB_CATEGORIA_PRODUTO.count({
     *   where: {
     *     // ... the filter for the TB_CATEGORIA_PRODUTOS we want to count
     *   }
     * })
    **/
    count<T extends TB_CATEGORIA_PRODUTOCountArgs>(
      args?: Subset<T, TB_CATEGORIA_PRODUTOCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TB_CATEGORIA_PRODUTOCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TB_CATEGORIA_PRODUTO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_CATEGORIA_PRODUTOAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TB_CATEGORIA_PRODUTOAggregateArgs>(args: Subset<T, TB_CATEGORIA_PRODUTOAggregateArgs>): Prisma.PrismaPromise<GetTB_CATEGORIA_PRODUTOAggregateType<T>>

    /**
     * Group by TB_CATEGORIA_PRODUTO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_CATEGORIA_PRODUTOGroupByArgs} args - Group by arguments.
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
      T extends TB_CATEGORIA_PRODUTOGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TB_CATEGORIA_PRODUTOGroupByArgs['orderBy'] }
        : { orderBy?: TB_CATEGORIA_PRODUTOGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TB_CATEGORIA_PRODUTOGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTB_CATEGORIA_PRODUTOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TB_CATEGORIA_PRODUTO model
   */
  readonly fields: TB_CATEGORIA_PRODUTOFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TB_CATEGORIA_PRODUTO.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TB_CATEGORIA_PRODUTOClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tiposProduto<T extends TB_CATEGORIA_PRODUTO$tiposProdutoArgs<ExtArgs> = {}>(args?: Subset<T, TB_CATEGORIA_PRODUTO$tiposProdutoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_TIPO_PRODUTOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TB_CATEGORIA_PRODUTO model
   */
  interface TB_CATEGORIA_PRODUTOFieldRefs {
    readonly SQ_CATEGORIA_PRODUTO: FieldRef<"TB_CATEGORIA_PRODUTO", 'Int'>
    readonly NO_CATEGORIA: FieldRef<"TB_CATEGORIA_PRODUTO", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TB_CATEGORIA_PRODUTO findUnique
   */
  export type TB_CATEGORIA_PRODUTOFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CATEGORIA_PRODUTO
     */
    select?: TB_CATEGORIA_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CATEGORIA_PRODUTO
     */
    omit?: TB_CATEGORIA_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_CATEGORIA_PRODUTOInclude<ExtArgs> | null
    /**
     * Filter, which TB_CATEGORIA_PRODUTO to fetch.
     */
    where: TB_CATEGORIA_PRODUTOWhereUniqueInput
  }

  /**
   * TB_CATEGORIA_PRODUTO findUniqueOrThrow
   */
  export type TB_CATEGORIA_PRODUTOFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CATEGORIA_PRODUTO
     */
    select?: TB_CATEGORIA_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CATEGORIA_PRODUTO
     */
    omit?: TB_CATEGORIA_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_CATEGORIA_PRODUTOInclude<ExtArgs> | null
    /**
     * Filter, which TB_CATEGORIA_PRODUTO to fetch.
     */
    where: TB_CATEGORIA_PRODUTOWhereUniqueInput
  }

  /**
   * TB_CATEGORIA_PRODUTO findFirst
   */
  export type TB_CATEGORIA_PRODUTOFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CATEGORIA_PRODUTO
     */
    select?: TB_CATEGORIA_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CATEGORIA_PRODUTO
     */
    omit?: TB_CATEGORIA_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_CATEGORIA_PRODUTOInclude<ExtArgs> | null
    /**
     * Filter, which TB_CATEGORIA_PRODUTO to fetch.
     */
    where?: TB_CATEGORIA_PRODUTOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_CATEGORIA_PRODUTOS to fetch.
     */
    orderBy?: TB_CATEGORIA_PRODUTOOrderByWithRelationInput | TB_CATEGORIA_PRODUTOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_CATEGORIA_PRODUTOS.
     */
    cursor?: TB_CATEGORIA_PRODUTOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_CATEGORIA_PRODUTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_CATEGORIA_PRODUTOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_CATEGORIA_PRODUTOS.
     */
    distinct?: TB_CATEGORIA_PRODUTOScalarFieldEnum | TB_CATEGORIA_PRODUTOScalarFieldEnum[]
  }

  /**
   * TB_CATEGORIA_PRODUTO findFirstOrThrow
   */
  export type TB_CATEGORIA_PRODUTOFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CATEGORIA_PRODUTO
     */
    select?: TB_CATEGORIA_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CATEGORIA_PRODUTO
     */
    omit?: TB_CATEGORIA_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_CATEGORIA_PRODUTOInclude<ExtArgs> | null
    /**
     * Filter, which TB_CATEGORIA_PRODUTO to fetch.
     */
    where?: TB_CATEGORIA_PRODUTOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_CATEGORIA_PRODUTOS to fetch.
     */
    orderBy?: TB_CATEGORIA_PRODUTOOrderByWithRelationInput | TB_CATEGORIA_PRODUTOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_CATEGORIA_PRODUTOS.
     */
    cursor?: TB_CATEGORIA_PRODUTOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_CATEGORIA_PRODUTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_CATEGORIA_PRODUTOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_CATEGORIA_PRODUTOS.
     */
    distinct?: TB_CATEGORIA_PRODUTOScalarFieldEnum | TB_CATEGORIA_PRODUTOScalarFieldEnum[]
  }

  /**
   * TB_CATEGORIA_PRODUTO findMany
   */
  export type TB_CATEGORIA_PRODUTOFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CATEGORIA_PRODUTO
     */
    select?: TB_CATEGORIA_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CATEGORIA_PRODUTO
     */
    omit?: TB_CATEGORIA_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_CATEGORIA_PRODUTOInclude<ExtArgs> | null
    /**
     * Filter, which TB_CATEGORIA_PRODUTOS to fetch.
     */
    where?: TB_CATEGORIA_PRODUTOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_CATEGORIA_PRODUTOS to fetch.
     */
    orderBy?: TB_CATEGORIA_PRODUTOOrderByWithRelationInput | TB_CATEGORIA_PRODUTOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TB_CATEGORIA_PRODUTOS.
     */
    cursor?: TB_CATEGORIA_PRODUTOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_CATEGORIA_PRODUTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_CATEGORIA_PRODUTOS.
     */
    skip?: number
    distinct?: TB_CATEGORIA_PRODUTOScalarFieldEnum | TB_CATEGORIA_PRODUTOScalarFieldEnum[]
  }

  /**
   * TB_CATEGORIA_PRODUTO create
   */
  export type TB_CATEGORIA_PRODUTOCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CATEGORIA_PRODUTO
     */
    select?: TB_CATEGORIA_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CATEGORIA_PRODUTO
     */
    omit?: TB_CATEGORIA_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_CATEGORIA_PRODUTOInclude<ExtArgs> | null
    /**
     * The data needed to create a TB_CATEGORIA_PRODUTO.
     */
    data: XOR<TB_CATEGORIA_PRODUTOCreateInput, TB_CATEGORIA_PRODUTOUncheckedCreateInput>
  }

  /**
   * TB_CATEGORIA_PRODUTO createMany
   */
  export type TB_CATEGORIA_PRODUTOCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TB_CATEGORIA_PRODUTOS.
     */
    data: TB_CATEGORIA_PRODUTOCreateManyInput | TB_CATEGORIA_PRODUTOCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TB_CATEGORIA_PRODUTO createManyAndReturn
   */
  export type TB_CATEGORIA_PRODUTOCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CATEGORIA_PRODUTO
     */
    select?: TB_CATEGORIA_PRODUTOSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CATEGORIA_PRODUTO
     */
    omit?: TB_CATEGORIA_PRODUTOOmit<ExtArgs> | null
    /**
     * The data used to create many TB_CATEGORIA_PRODUTOS.
     */
    data: TB_CATEGORIA_PRODUTOCreateManyInput | TB_CATEGORIA_PRODUTOCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TB_CATEGORIA_PRODUTO update
   */
  export type TB_CATEGORIA_PRODUTOUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CATEGORIA_PRODUTO
     */
    select?: TB_CATEGORIA_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CATEGORIA_PRODUTO
     */
    omit?: TB_CATEGORIA_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_CATEGORIA_PRODUTOInclude<ExtArgs> | null
    /**
     * The data needed to update a TB_CATEGORIA_PRODUTO.
     */
    data: XOR<TB_CATEGORIA_PRODUTOUpdateInput, TB_CATEGORIA_PRODUTOUncheckedUpdateInput>
    /**
     * Choose, which TB_CATEGORIA_PRODUTO to update.
     */
    where: TB_CATEGORIA_PRODUTOWhereUniqueInput
  }

  /**
   * TB_CATEGORIA_PRODUTO updateMany
   */
  export type TB_CATEGORIA_PRODUTOUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TB_CATEGORIA_PRODUTOS.
     */
    data: XOR<TB_CATEGORIA_PRODUTOUpdateManyMutationInput, TB_CATEGORIA_PRODUTOUncheckedUpdateManyInput>
    /**
     * Filter which TB_CATEGORIA_PRODUTOS to update
     */
    where?: TB_CATEGORIA_PRODUTOWhereInput
    /**
     * Limit how many TB_CATEGORIA_PRODUTOS to update.
     */
    limit?: number
  }

  /**
   * TB_CATEGORIA_PRODUTO updateManyAndReturn
   */
  export type TB_CATEGORIA_PRODUTOUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CATEGORIA_PRODUTO
     */
    select?: TB_CATEGORIA_PRODUTOSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CATEGORIA_PRODUTO
     */
    omit?: TB_CATEGORIA_PRODUTOOmit<ExtArgs> | null
    /**
     * The data used to update TB_CATEGORIA_PRODUTOS.
     */
    data: XOR<TB_CATEGORIA_PRODUTOUpdateManyMutationInput, TB_CATEGORIA_PRODUTOUncheckedUpdateManyInput>
    /**
     * Filter which TB_CATEGORIA_PRODUTOS to update
     */
    where?: TB_CATEGORIA_PRODUTOWhereInput
    /**
     * Limit how many TB_CATEGORIA_PRODUTOS to update.
     */
    limit?: number
  }

  /**
   * TB_CATEGORIA_PRODUTO upsert
   */
  export type TB_CATEGORIA_PRODUTOUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CATEGORIA_PRODUTO
     */
    select?: TB_CATEGORIA_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CATEGORIA_PRODUTO
     */
    omit?: TB_CATEGORIA_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_CATEGORIA_PRODUTOInclude<ExtArgs> | null
    /**
     * The filter to search for the TB_CATEGORIA_PRODUTO to update in case it exists.
     */
    where: TB_CATEGORIA_PRODUTOWhereUniqueInput
    /**
     * In case the TB_CATEGORIA_PRODUTO found by the `where` argument doesn't exist, create a new TB_CATEGORIA_PRODUTO with this data.
     */
    create: XOR<TB_CATEGORIA_PRODUTOCreateInput, TB_CATEGORIA_PRODUTOUncheckedCreateInput>
    /**
     * In case the TB_CATEGORIA_PRODUTO was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TB_CATEGORIA_PRODUTOUpdateInput, TB_CATEGORIA_PRODUTOUncheckedUpdateInput>
  }

  /**
   * TB_CATEGORIA_PRODUTO delete
   */
  export type TB_CATEGORIA_PRODUTODeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CATEGORIA_PRODUTO
     */
    select?: TB_CATEGORIA_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CATEGORIA_PRODUTO
     */
    omit?: TB_CATEGORIA_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_CATEGORIA_PRODUTOInclude<ExtArgs> | null
    /**
     * Filter which TB_CATEGORIA_PRODUTO to delete.
     */
    where: TB_CATEGORIA_PRODUTOWhereUniqueInput
  }

  /**
   * TB_CATEGORIA_PRODUTO deleteMany
   */
  export type TB_CATEGORIA_PRODUTODeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_CATEGORIA_PRODUTOS to delete
     */
    where?: TB_CATEGORIA_PRODUTOWhereInput
    /**
     * Limit how many TB_CATEGORIA_PRODUTOS to delete.
     */
    limit?: number
  }

  /**
   * TB_CATEGORIA_PRODUTO.tiposProduto
   */
  export type TB_CATEGORIA_PRODUTO$tiposProdutoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TIPO_PRODUTO
     */
    select?: TB_TIPO_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TIPO_PRODUTO
     */
    omit?: TB_TIPO_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TIPO_PRODUTOInclude<ExtArgs> | null
    where?: TB_TIPO_PRODUTOWhereInput
    orderBy?: TB_TIPO_PRODUTOOrderByWithRelationInput | TB_TIPO_PRODUTOOrderByWithRelationInput[]
    cursor?: TB_TIPO_PRODUTOWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TB_TIPO_PRODUTOScalarFieldEnum | TB_TIPO_PRODUTOScalarFieldEnum[]
  }

  /**
   * TB_CATEGORIA_PRODUTO without action
   */
  export type TB_CATEGORIA_PRODUTODefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CATEGORIA_PRODUTO
     */
    select?: TB_CATEGORIA_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CATEGORIA_PRODUTO
     */
    omit?: TB_CATEGORIA_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_CATEGORIA_PRODUTOInclude<ExtArgs> | null
  }


  /**
   * Model TB_QTD_PRODUTO
   */

  export type AggregateTB_QTD_PRODUTO = {
    _count: TB_QTD_PRODUTOCountAggregateOutputType | null
    _avg: TB_QTD_PRODUTOAvgAggregateOutputType | null
    _sum: TB_QTD_PRODUTOSumAggregateOutputType | null
    _min: TB_QTD_PRODUTOMinAggregateOutputType | null
    _max: TB_QTD_PRODUTOMaxAggregateOutputType | null
  }

  export type TB_QTD_PRODUTOAvgAggregateOutputType = {
    SQ_QTD_PRODUTO: number | null
    SQ_PRODUTO: number | null
    SQ_TAMANHO_PRODUTO: number | null
    QTD_PRODUTO: number | null
  }

  export type TB_QTD_PRODUTOSumAggregateOutputType = {
    SQ_QTD_PRODUTO: number | null
    SQ_PRODUTO: number | null
    SQ_TAMANHO_PRODUTO: number | null
    QTD_PRODUTO: number | null
  }

  export type TB_QTD_PRODUTOMinAggregateOutputType = {
    SQ_QTD_PRODUTO: number | null
    SQ_PRODUTO: number | null
    SQ_TAMANHO_PRODUTO: number | null
    QTD_PRODUTO: number | null
  }

  export type TB_QTD_PRODUTOMaxAggregateOutputType = {
    SQ_QTD_PRODUTO: number | null
    SQ_PRODUTO: number | null
    SQ_TAMANHO_PRODUTO: number | null
    QTD_PRODUTO: number | null
  }

  export type TB_QTD_PRODUTOCountAggregateOutputType = {
    SQ_QTD_PRODUTO: number
    SQ_PRODUTO: number
    SQ_TAMANHO_PRODUTO: number
    QTD_PRODUTO: number
    _all: number
  }


  export type TB_QTD_PRODUTOAvgAggregateInputType = {
    SQ_QTD_PRODUTO?: true
    SQ_PRODUTO?: true
    SQ_TAMANHO_PRODUTO?: true
    QTD_PRODUTO?: true
  }

  export type TB_QTD_PRODUTOSumAggregateInputType = {
    SQ_QTD_PRODUTO?: true
    SQ_PRODUTO?: true
    SQ_TAMANHO_PRODUTO?: true
    QTD_PRODUTO?: true
  }

  export type TB_QTD_PRODUTOMinAggregateInputType = {
    SQ_QTD_PRODUTO?: true
    SQ_PRODUTO?: true
    SQ_TAMANHO_PRODUTO?: true
    QTD_PRODUTO?: true
  }

  export type TB_QTD_PRODUTOMaxAggregateInputType = {
    SQ_QTD_PRODUTO?: true
    SQ_PRODUTO?: true
    SQ_TAMANHO_PRODUTO?: true
    QTD_PRODUTO?: true
  }

  export type TB_QTD_PRODUTOCountAggregateInputType = {
    SQ_QTD_PRODUTO?: true
    SQ_PRODUTO?: true
    SQ_TAMANHO_PRODUTO?: true
    QTD_PRODUTO?: true
    _all?: true
  }

  export type TB_QTD_PRODUTOAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_QTD_PRODUTO to aggregate.
     */
    where?: TB_QTD_PRODUTOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_QTD_PRODUTOS to fetch.
     */
    orderBy?: TB_QTD_PRODUTOOrderByWithRelationInput | TB_QTD_PRODUTOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TB_QTD_PRODUTOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_QTD_PRODUTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_QTD_PRODUTOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TB_QTD_PRODUTOS
    **/
    _count?: true | TB_QTD_PRODUTOCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TB_QTD_PRODUTOAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TB_QTD_PRODUTOSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TB_QTD_PRODUTOMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TB_QTD_PRODUTOMaxAggregateInputType
  }

  export type GetTB_QTD_PRODUTOAggregateType<T extends TB_QTD_PRODUTOAggregateArgs> = {
        [P in keyof T & keyof AggregateTB_QTD_PRODUTO]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTB_QTD_PRODUTO[P]>
      : GetScalarType<T[P], AggregateTB_QTD_PRODUTO[P]>
  }




  export type TB_QTD_PRODUTOGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_QTD_PRODUTOWhereInput
    orderBy?: TB_QTD_PRODUTOOrderByWithAggregationInput | TB_QTD_PRODUTOOrderByWithAggregationInput[]
    by: TB_QTD_PRODUTOScalarFieldEnum[] | TB_QTD_PRODUTOScalarFieldEnum
    having?: TB_QTD_PRODUTOScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TB_QTD_PRODUTOCountAggregateInputType | true
    _avg?: TB_QTD_PRODUTOAvgAggregateInputType
    _sum?: TB_QTD_PRODUTOSumAggregateInputType
    _min?: TB_QTD_PRODUTOMinAggregateInputType
    _max?: TB_QTD_PRODUTOMaxAggregateInputType
  }

  export type TB_QTD_PRODUTOGroupByOutputType = {
    SQ_QTD_PRODUTO: number
    SQ_PRODUTO: number
    SQ_TAMANHO_PRODUTO: number
    QTD_PRODUTO: number
    _count: TB_QTD_PRODUTOCountAggregateOutputType | null
    _avg: TB_QTD_PRODUTOAvgAggregateOutputType | null
    _sum: TB_QTD_PRODUTOSumAggregateOutputType | null
    _min: TB_QTD_PRODUTOMinAggregateOutputType | null
    _max: TB_QTD_PRODUTOMaxAggregateOutputType | null
  }

  type GetTB_QTD_PRODUTOGroupByPayload<T extends TB_QTD_PRODUTOGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TB_QTD_PRODUTOGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TB_QTD_PRODUTOGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TB_QTD_PRODUTOGroupByOutputType[P]>
            : GetScalarType<T[P], TB_QTD_PRODUTOGroupByOutputType[P]>
        }
      >
    >


  export type TB_QTD_PRODUTOSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SQ_QTD_PRODUTO?: boolean
    SQ_PRODUTO?: boolean
    SQ_TAMANHO_PRODUTO?: boolean
    QTD_PRODUTO?: boolean
    produto?: boolean | TB_PRODUTODefaultArgs<ExtArgs>
    tamanhoProduto?: boolean | TB_TAMANHO_PRODUTODefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_QTD_PRODUTO"]>

  export type TB_QTD_PRODUTOSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SQ_QTD_PRODUTO?: boolean
    SQ_PRODUTO?: boolean
    SQ_TAMANHO_PRODUTO?: boolean
    QTD_PRODUTO?: boolean
    produto?: boolean | TB_PRODUTODefaultArgs<ExtArgs>
    tamanhoProduto?: boolean | TB_TAMANHO_PRODUTODefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_QTD_PRODUTO"]>

  export type TB_QTD_PRODUTOSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SQ_QTD_PRODUTO?: boolean
    SQ_PRODUTO?: boolean
    SQ_TAMANHO_PRODUTO?: boolean
    QTD_PRODUTO?: boolean
    produto?: boolean | TB_PRODUTODefaultArgs<ExtArgs>
    tamanhoProduto?: boolean | TB_TAMANHO_PRODUTODefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_QTD_PRODUTO"]>

  export type TB_QTD_PRODUTOSelectScalar = {
    SQ_QTD_PRODUTO?: boolean
    SQ_PRODUTO?: boolean
    SQ_TAMANHO_PRODUTO?: boolean
    QTD_PRODUTO?: boolean
  }

  export type TB_QTD_PRODUTOOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"SQ_QTD_PRODUTO" | "SQ_PRODUTO" | "SQ_TAMANHO_PRODUTO" | "QTD_PRODUTO", ExtArgs["result"]["tB_QTD_PRODUTO"]>
  export type TB_QTD_PRODUTOInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | TB_PRODUTODefaultArgs<ExtArgs>
    tamanhoProduto?: boolean | TB_TAMANHO_PRODUTODefaultArgs<ExtArgs>
  }
  export type TB_QTD_PRODUTOIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | TB_PRODUTODefaultArgs<ExtArgs>
    tamanhoProduto?: boolean | TB_TAMANHO_PRODUTODefaultArgs<ExtArgs>
  }
  export type TB_QTD_PRODUTOIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | TB_PRODUTODefaultArgs<ExtArgs>
    tamanhoProduto?: boolean | TB_TAMANHO_PRODUTODefaultArgs<ExtArgs>
  }

  export type $TB_QTD_PRODUTOPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TB_QTD_PRODUTO"
    objects: {
      produto: Prisma.$TB_PRODUTOPayload<ExtArgs>
      tamanhoProduto: Prisma.$TB_TAMANHO_PRODUTOPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      SQ_QTD_PRODUTO: number
      SQ_PRODUTO: number
      SQ_TAMANHO_PRODUTO: number
      QTD_PRODUTO: number
    }, ExtArgs["result"]["tB_QTD_PRODUTO"]>
    composites: {}
  }

  type TB_QTD_PRODUTOGetPayload<S extends boolean | null | undefined | TB_QTD_PRODUTODefaultArgs> = $Result.GetResult<Prisma.$TB_QTD_PRODUTOPayload, S>

  type TB_QTD_PRODUTOCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TB_QTD_PRODUTOFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TB_QTD_PRODUTOCountAggregateInputType | true
    }

  export interface TB_QTD_PRODUTODelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TB_QTD_PRODUTO'], meta: { name: 'TB_QTD_PRODUTO' } }
    /**
     * Find zero or one TB_QTD_PRODUTO that matches the filter.
     * @param {TB_QTD_PRODUTOFindUniqueArgs} args - Arguments to find a TB_QTD_PRODUTO
     * @example
     * // Get one TB_QTD_PRODUTO
     * const tB_QTD_PRODUTO = await prisma.tB_QTD_PRODUTO.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TB_QTD_PRODUTOFindUniqueArgs>(args: SelectSubset<T, TB_QTD_PRODUTOFindUniqueArgs<ExtArgs>>): Prisma__TB_QTD_PRODUTOClient<$Result.GetResult<Prisma.$TB_QTD_PRODUTOPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TB_QTD_PRODUTO that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TB_QTD_PRODUTOFindUniqueOrThrowArgs} args - Arguments to find a TB_QTD_PRODUTO
     * @example
     * // Get one TB_QTD_PRODUTO
     * const tB_QTD_PRODUTO = await prisma.tB_QTD_PRODUTO.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TB_QTD_PRODUTOFindUniqueOrThrowArgs>(args: SelectSubset<T, TB_QTD_PRODUTOFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TB_QTD_PRODUTOClient<$Result.GetResult<Prisma.$TB_QTD_PRODUTOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_QTD_PRODUTO that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_QTD_PRODUTOFindFirstArgs} args - Arguments to find a TB_QTD_PRODUTO
     * @example
     * // Get one TB_QTD_PRODUTO
     * const tB_QTD_PRODUTO = await prisma.tB_QTD_PRODUTO.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TB_QTD_PRODUTOFindFirstArgs>(args?: SelectSubset<T, TB_QTD_PRODUTOFindFirstArgs<ExtArgs>>): Prisma__TB_QTD_PRODUTOClient<$Result.GetResult<Prisma.$TB_QTD_PRODUTOPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_QTD_PRODUTO that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_QTD_PRODUTOFindFirstOrThrowArgs} args - Arguments to find a TB_QTD_PRODUTO
     * @example
     * // Get one TB_QTD_PRODUTO
     * const tB_QTD_PRODUTO = await prisma.tB_QTD_PRODUTO.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TB_QTD_PRODUTOFindFirstOrThrowArgs>(args?: SelectSubset<T, TB_QTD_PRODUTOFindFirstOrThrowArgs<ExtArgs>>): Prisma__TB_QTD_PRODUTOClient<$Result.GetResult<Prisma.$TB_QTD_PRODUTOPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TB_QTD_PRODUTOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_QTD_PRODUTOFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TB_QTD_PRODUTOS
     * const tB_QTD_PRODUTOS = await prisma.tB_QTD_PRODUTO.findMany()
     * 
     * // Get first 10 TB_QTD_PRODUTOS
     * const tB_QTD_PRODUTOS = await prisma.tB_QTD_PRODUTO.findMany({ take: 10 })
     * 
     * // Only select the `SQ_QTD_PRODUTO`
     * const tB_QTD_PRODUTOWithSQ_QTD_PRODUTOOnly = await prisma.tB_QTD_PRODUTO.findMany({ select: { SQ_QTD_PRODUTO: true } })
     * 
     */
    findMany<T extends TB_QTD_PRODUTOFindManyArgs>(args?: SelectSubset<T, TB_QTD_PRODUTOFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_QTD_PRODUTOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TB_QTD_PRODUTO.
     * @param {TB_QTD_PRODUTOCreateArgs} args - Arguments to create a TB_QTD_PRODUTO.
     * @example
     * // Create one TB_QTD_PRODUTO
     * const TB_QTD_PRODUTO = await prisma.tB_QTD_PRODUTO.create({
     *   data: {
     *     // ... data to create a TB_QTD_PRODUTO
     *   }
     * })
     * 
     */
    create<T extends TB_QTD_PRODUTOCreateArgs>(args: SelectSubset<T, TB_QTD_PRODUTOCreateArgs<ExtArgs>>): Prisma__TB_QTD_PRODUTOClient<$Result.GetResult<Prisma.$TB_QTD_PRODUTOPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TB_QTD_PRODUTOS.
     * @param {TB_QTD_PRODUTOCreateManyArgs} args - Arguments to create many TB_QTD_PRODUTOS.
     * @example
     * // Create many TB_QTD_PRODUTOS
     * const tB_QTD_PRODUTO = await prisma.tB_QTD_PRODUTO.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TB_QTD_PRODUTOCreateManyArgs>(args?: SelectSubset<T, TB_QTD_PRODUTOCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TB_QTD_PRODUTOS and returns the data saved in the database.
     * @param {TB_QTD_PRODUTOCreateManyAndReturnArgs} args - Arguments to create many TB_QTD_PRODUTOS.
     * @example
     * // Create many TB_QTD_PRODUTOS
     * const tB_QTD_PRODUTO = await prisma.tB_QTD_PRODUTO.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TB_QTD_PRODUTOS and only return the `SQ_QTD_PRODUTO`
     * const tB_QTD_PRODUTOWithSQ_QTD_PRODUTOOnly = await prisma.tB_QTD_PRODUTO.createManyAndReturn({
     *   select: { SQ_QTD_PRODUTO: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TB_QTD_PRODUTOCreateManyAndReturnArgs>(args?: SelectSubset<T, TB_QTD_PRODUTOCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_QTD_PRODUTOPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TB_QTD_PRODUTO.
     * @param {TB_QTD_PRODUTODeleteArgs} args - Arguments to delete one TB_QTD_PRODUTO.
     * @example
     * // Delete one TB_QTD_PRODUTO
     * const TB_QTD_PRODUTO = await prisma.tB_QTD_PRODUTO.delete({
     *   where: {
     *     // ... filter to delete one TB_QTD_PRODUTO
     *   }
     * })
     * 
     */
    delete<T extends TB_QTD_PRODUTODeleteArgs>(args: SelectSubset<T, TB_QTD_PRODUTODeleteArgs<ExtArgs>>): Prisma__TB_QTD_PRODUTOClient<$Result.GetResult<Prisma.$TB_QTD_PRODUTOPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TB_QTD_PRODUTO.
     * @param {TB_QTD_PRODUTOUpdateArgs} args - Arguments to update one TB_QTD_PRODUTO.
     * @example
     * // Update one TB_QTD_PRODUTO
     * const tB_QTD_PRODUTO = await prisma.tB_QTD_PRODUTO.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TB_QTD_PRODUTOUpdateArgs>(args: SelectSubset<T, TB_QTD_PRODUTOUpdateArgs<ExtArgs>>): Prisma__TB_QTD_PRODUTOClient<$Result.GetResult<Prisma.$TB_QTD_PRODUTOPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TB_QTD_PRODUTOS.
     * @param {TB_QTD_PRODUTODeleteManyArgs} args - Arguments to filter TB_QTD_PRODUTOS to delete.
     * @example
     * // Delete a few TB_QTD_PRODUTOS
     * const { count } = await prisma.tB_QTD_PRODUTO.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TB_QTD_PRODUTODeleteManyArgs>(args?: SelectSubset<T, TB_QTD_PRODUTODeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_QTD_PRODUTOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_QTD_PRODUTOUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TB_QTD_PRODUTOS
     * const tB_QTD_PRODUTO = await prisma.tB_QTD_PRODUTO.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TB_QTD_PRODUTOUpdateManyArgs>(args: SelectSubset<T, TB_QTD_PRODUTOUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_QTD_PRODUTOS and returns the data updated in the database.
     * @param {TB_QTD_PRODUTOUpdateManyAndReturnArgs} args - Arguments to update many TB_QTD_PRODUTOS.
     * @example
     * // Update many TB_QTD_PRODUTOS
     * const tB_QTD_PRODUTO = await prisma.tB_QTD_PRODUTO.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TB_QTD_PRODUTOS and only return the `SQ_QTD_PRODUTO`
     * const tB_QTD_PRODUTOWithSQ_QTD_PRODUTOOnly = await prisma.tB_QTD_PRODUTO.updateManyAndReturn({
     *   select: { SQ_QTD_PRODUTO: true },
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
    updateManyAndReturn<T extends TB_QTD_PRODUTOUpdateManyAndReturnArgs>(args: SelectSubset<T, TB_QTD_PRODUTOUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_QTD_PRODUTOPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TB_QTD_PRODUTO.
     * @param {TB_QTD_PRODUTOUpsertArgs} args - Arguments to update or create a TB_QTD_PRODUTO.
     * @example
     * // Update or create a TB_QTD_PRODUTO
     * const tB_QTD_PRODUTO = await prisma.tB_QTD_PRODUTO.upsert({
     *   create: {
     *     // ... data to create a TB_QTD_PRODUTO
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TB_QTD_PRODUTO we want to update
     *   }
     * })
     */
    upsert<T extends TB_QTD_PRODUTOUpsertArgs>(args: SelectSubset<T, TB_QTD_PRODUTOUpsertArgs<ExtArgs>>): Prisma__TB_QTD_PRODUTOClient<$Result.GetResult<Prisma.$TB_QTD_PRODUTOPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TB_QTD_PRODUTOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_QTD_PRODUTOCountArgs} args - Arguments to filter TB_QTD_PRODUTOS to count.
     * @example
     * // Count the number of TB_QTD_PRODUTOS
     * const count = await prisma.tB_QTD_PRODUTO.count({
     *   where: {
     *     // ... the filter for the TB_QTD_PRODUTOS we want to count
     *   }
     * })
    **/
    count<T extends TB_QTD_PRODUTOCountArgs>(
      args?: Subset<T, TB_QTD_PRODUTOCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TB_QTD_PRODUTOCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TB_QTD_PRODUTO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_QTD_PRODUTOAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TB_QTD_PRODUTOAggregateArgs>(args: Subset<T, TB_QTD_PRODUTOAggregateArgs>): Prisma.PrismaPromise<GetTB_QTD_PRODUTOAggregateType<T>>

    /**
     * Group by TB_QTD_PRODUTO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_QTD_PRODUTOGroupByArgs} args - Group by arguments.
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
      T extends TB_QTD_PRODUTOGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TB_QTD_PRODUTOGroupByArgs['orderBy'] }
        : { orderBy?: TB_QTD_PRODUTOGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TB_QTD_PRODUTOGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTB_QTD_PRODUTOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TB_QTD_PRODUTO model
   */
  readonly fields: TB_QTD_PRODUTOFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TB_QTD_PRODUTO.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TB_QTD_PRODUTOClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produto<T extends TB_PRODUTODefaultArgs<ExtArgs> = {}>(args?: Subset<T, TB_PRODUTODefaultArgs<ExtArgs>>): Prisma__TB_PRODUTOClient<$Result.GetResult<Prisma.$TB_PRODUTOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tamanhoProduto<T extends TB_TAMANHO_PRODUTODefaultArgs<ExtArgs> = {}>(args?: Subset<T, TB_TAMANHO_PRODUTODefaultArgs<ExtArgs>>): Prisma__TB_TAMANHO_PRODUTOClient<$Result.GetResult<Prisma.$TB_TAMANHO_PRODUTOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TB_QTD_PRODUTO model
   */
  interface TB_QTD_PRODUTOFieldRefs {
    readonly SQ_QTD_PRODUTO: FieldRef<"TB_QTD_PRODUTO", 'Int'>
    readonly SQ_PRODUTO: FieldRef<"TB_QTD_PRODUTO", 'Int'>
    readonly SQ_TAMANHO_PRODUTO: FieldRef<"TB_QTD_PRODUTO", 'Int'>
    readonly QTD_PRODUTO: FieldRef<"TB_QTD_PRODUTO", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TB_QTD_PRODUTO findUnique
   */
  export type TB_QTD_PRODUTOFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_QTD_PRODUTO
     */
    select?: TB_QTD_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_QTD_PRODUTO
     */
    omit?: TB_QTD_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_QTD_PRODUTOInclude<ExtArgs> | null
    /**
     * Filter, which TB_QTD_PRODUTO to fetch.
     */
    where: TB_QTD_PRODUTOWhereUniqueInput
  }

  /**
   * TB_QTD_PRODUTO findUniqueOrThrow
   */
  export type TB_QTD_PRODUTOFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_QTD_PRODUTO
     */
    select?: TB_QTD_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_QTD_PRODUTO
     */
    omit?: TB_QTD_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_QTD_PRODUTOInclude<ExtArgs> | null
    /**
     * Filter, which TB_QTD_PRODUTO to fetch.
     */
    where: TB_QTD_PRODUTOWhereUniqueInput
  }

  /**
   * TB_QTD_PRODUTO findFirst
   */
  export type TB_QTD_PRODUTOFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_QTD_PRODUTO
     */
    select?: TB_QTD_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_QTD_PRODUTO
     */
    omit?: TB_QTD_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_QTD_PRODUTOInclude<ExtArgs> | null
    /**
     * Filter, which TB_QTD_PRODUTO to fetch.
     */
    where?: TB_QTD_PRODUTOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_QTD_PRODUTOS to fetch.
     */
    orderBy?: TB_QTD_PRODUTOOrderByWithRelationInput | TB_QTD_PRODUTOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_QTD_PRODUTOS.
     */
    cursor?: TB_QTD_PRODUTOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_QTD_PRODUTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_QTD_PRODUTOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_QTD_PRODUTOS.
     */
    distinct?: TB_QTD_PRODUTOScalarFieldEnum | TB_QTD_PRODUTOScalarFieldEnum[]
  }

  /**
   * TB_QTD_PRODUTO findFirstOrThrow
   */
  export type TB_QTD_PRODUTOFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_QTD_PRODUTO
     */
    select?: TB_QTD_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_QTD_PRODUTO
     */
    omit?: TB_QTD_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_QTD_PRODUTOInclude<ExtArgs> | null
    /**
     * Filter, which TB_QTD_PRODUTO to fetch.
     */
    where?: TB_QTD_PRODUTOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_QTD_PRODUTOS to fetch.
     */
    orderBy?: TB_QTD_PRODUTOOrderByWithRelationInput | TB_QTD_PRODUTOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_QTD_PRODUTOS.
     */
    cursor?: TB_QTD_PRODUTOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_QTD_PRODUTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_QTD_PRODUTOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_QTD_PRODUTOS.
     */
    distinct?: TB_QTD_PRODUTOScalarFieldEnum | TB_QTD_PRODUTOScalarFieldEnum[]
  }

  /**
   * TB_QTD_PRODUTO findMany
   */
  export type TB_QTD_PRODUTOFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_QTD_PRODUTO
     */
    select?: TB_QTD_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_QTD_PRODUTO
     */
    omit?: TB_QTD_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_QTD_PRODUTOInclude<ExtArgs> | null
    /**
     * Filter, which TB_QTD_PRODUTOS to fetch.
     */
    where?: TB_QTD_PRODUTOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_QTD_PRODUTOS to fetch.
     */
    orderBy?: TB_QTD_PRODUTOOrderByWithRelationInput | TB_QTD_PRODUTOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TB_QTD_PRODUTOS.
     */
    cursor?: TB_QTD_PRODUTOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_QTD_PRODUTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_QTD_PRODUTOS.
     */
    skip?: number
    distinct?: TB_QTD_PRODUTOScalarFieldEnum | TB_QTD_PRODUTOScalarFieldEnum[]
  }

  /**
   * TB_QTD_PRODUTO create
   */
  export type TB_QTD_PRODUTOCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_QTD_PRODUTO
     */
    select?: TB_QTD_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_QTD_PRODUTO
     */
    omit?: TB_QTD_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_QTD_PRODUTOInclude<ExtArgs> | null
    /**
     * The data needed to create a TB_QTD_PRODUTO.
     */
    data: XOR<TB_QTD_PRODUTOCreateInput, TB_QTD_PRODUTOUncheckedCreateInput>
  }

  /**
   * TB_QTD_PRODUTO createMany
   */
  export type TB_QTD_PRODUTOCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TB_QTD_PRODUTOS.
     */
    data: TB_QTD_PRODUTOCreateManyInput | TB_QTD_PRODUTOCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TB_QTD_PRODUTO createManyAndReturn
   */
  export type TB_QTD_PRODUTOCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_QTD_PRODUTO
     */
    select?: TB_QTD_PRODUTOSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_QTD_PRODUTO
     */
    omit?: TB_QTD_PRODUTOOmit<ExtArgs> | null
    /**
     * The data used to create many TB_QTD_PRODUTOS.
     */
    data: TB_QTD_PRODUTOCreateManyInput | TB_QTD_PRODUTOCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_QTD_PRODUTOIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TB_QTD_PRODUTO update
   */
  export type TB_QTD_PRODUTOUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_QTD_PRODUTO
     */
    select?: TB_QTD_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_QTD_PRODUTO
     */
    omit?: TB_QTD_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_QTD_PRODUTOInclude<ExtArgs> | null
    /**
     * The data needed to update a TB_QTD_PRODUTO.
     */
    data: XOR<TB_QTD_PRODUTOUpdateInput, TB_QTD_PRODUTOUncheckedUpdateInput>
    /**
     * Choose, which TB_QTD_PRODUTO to update.
     */
    where: TB_QTD_PRODUTOWhereUniqueInput
  }

  /**
   * TB_QTD_PRODUTO updateMany
   */
  export type TB_QTD_PRODUTOUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TB_QTD_PRODUTOS.
     */
    data: XOR<TB_QTD_PRODUTOUpdateManyMutationInput, TB_QTD_PRODUTOUncheckedUpdateManyInput>
    /**
     * Filter which TB_QTD_PRODUTOS to update
     */
    where?: TB_QTD_PRODUTOWhereInput
    /**
     * Limit how many TB_QTD_PRODUTOS to update.
     */
    limit?: number
  }

  /**
   * TB_QTD_PRODUTO updateManyAndReturn
   */
  export type TB_QTD_PRODUTOUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_QTD_PRODUTO
     */
    select?: TB_QTD_PRODUTOSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_QTD_PRODUTO
     */
    omit?: TB_QTD_PRODUTOOmit<ExtArgs> | null
    /**
     * The data used to update TB_QTD_PRODUTOS.
     */
    data: XOR<TB_QTD_PRODUTOUpdateManyMutationInput, TB_QTD_PRODUTOUncheckedUpdateManyInput>
    /**
     * Filter which TB_QTD_PRODUTOS to update
     */
    where?: TB_QTD_PRODUTOWhereInput
    /**
     * Limit how many TB_QTD_PRODUTOS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_QTD_PRODUTOIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TB_QTD_PRODUTO upsert
   */
  export type TB_QTD_PRODUTOUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_QTD_PRODUTO
     */
    select?: TB_QTD_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_QTD_PRODUTO
     */
    omit?: TB_QTD_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_QTD_PRODUTOInclude<ExtArgs> | null
    /**
     * The filter to search for the TB_QTD_PRODUTO to update in case it exists.
     */
    where: TB_QTD_PRODUTOWhereUniqueInput
    /**
     * In case the TB_QTD_PRODUTO found by the `where` argument doesn't exist, create a new TB_QTD_PRODUTO with this data.
     */
    create: XOR<TB_QTD_PRODUTOCreateInput, TB_QTD_PRODUTOUncheckedCreateInput>
    /**
     * In case the TB_QTD_PRODUTO was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TB_QTD_PRODUTOUpdateInput, TB_QTD_PRODUTOUncheckedUpdateInput>
  }

  /**
   * TB_QTD_PRODUTO delete
   */
  export type TB_QTD_PRODUTODeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_QTD_PRODUTO
     */
    select?: TB_QTD_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_QTD_PRODUTO
     */
    omit?: TB_QTD_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_QTD_PRODUTOInclude<ExtArgs> | null
    /**
     * Filter which TB_QTD_PRODUTO to delete.
     */
    where: TB_QTD_PRODUTOWhereUniqueInput
  }

  /**
   * TB_QTD_PRODUTO deleteMany
   */
  export type TB_QTD_PRODUTODeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_QTD_PRODUTOS to delete
     */
    where?: TB_QTD_PRODUTOWhereInput
    /**
     * Limit how many TB_QTD_PRODUTOS to delete.
     */
    limit?: number
  }

  /**
   * TB_QTD_PRODUTO without action
   */
  export type TB_QTD_PRODUTODefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_QTD_PRODUTO
     */
    select?: TB_QTD_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_QTD_PRODUTO
     */
    omit?: TB_QTD_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_QTD_PRODUTOInclude<ExtArgs> | null
  }


  /**
   * Model TB_TAMANHO_PRODUTO
   */

  export type AggregateTB_TAMANHO_PRODUTO = {
    _count: TB_TAMANHO_PRODUTOCountAggregateOutputType | null
    _avg: TB_TAMANHO_PRODUTOAvgAggregateOutputType | null
    _sum: TB_TAMANHO_PRODUTOSumAggregateOutputType | null
    _min: TB_TAMANHO_PRODUTOMinAggregateOutputType | null
    _max: TB_TAMANHO_PRODUTOMaxAggregateOutputType | null
  }

  export type TB_TAMANHO_PRODUTOAvgAggregateOutputType = {
    SQ_TAMANHO_PRODUTO: number | null
  }

  export type TB_TAMANHO_PRODUTOSumAggregateOutputType = {
    SQ_TAMANHO_PRODUTO: number | null
  }

  export type TB_TAMANHO_PRODUTOMinAggregateOutputType = {
    SQ_TAMANHO_PRODUTO: number | null
    NO_CATEGORIA: string | null
  }

  export type TB_TAMANHO_PRODUTOMaxAggregateOutputType = {
    SQ_TAMANHO_PRODUTO: number | null
    NO_CATEGORIA: string | null
  }

  export type TB_TAMANHO_PRODUTOCountAggregateOutputType = {
    SQ_TAMANHO_PRODUTO: number
    NO_CATEGORIA: number
    _all: number
  }


  export type TB_TAMANHO_PRODUTOAvgAggregateInputType = {
    SQ_TAMANHO_PRODUTO?: true
  }

  export type TB_TAMANHO_PRODUTOSumAggregateInputType = {
    SQ_TAMANHO_PRODUTO?: true
  }

  export type TB_TAMANHO_PRODUTOMinAggregateInputType = {
    SQ_TAMANHO_PRODUTO?: true
    NO_CATEGORIA?: true
  }

  export type TB_TAMANHO_PRODUTOMaxAggregateInputType = {
    SQ_TAMANHO_PRODUTO?: true
    NO_CATEGORIA?: true
  }

  export type TB_TAMANHO_PRODUTOCountAggregateInputType = {
    SQ_TAMANHO_PRODUTO?: true
    NO_CATEGORIA?: true
    _all?: true
  }

  export type TB_TAMANHO_PRODUTOAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_TAMANHO_PRODUTO to aggregate.
     */
    where?: TB_TAMANHO_PRODUTOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_TAMANHO_PRODUTOS to fetch.
     */
    orderBy?: TB_TAMANHO_PRODUTOOrderByWithRelationInput | TB_TAMANHO_PRODUTOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TB_TAMANHO_PRODUTOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_TAMANHO_PRODUTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_TAMANHO_PRODUTOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TB_TAMANHO_PRODUTOS
    **/
    _count?: true | TB_TAMANHO_PRODUTOCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TB_TAMANHO_PRODUTOAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TB_TAMANHO_PRODUTOSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TB_TAMANHO_PRODUTOMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TB_TAMANHO_PRODUTOMaxAggregateInputType
  }

  export type GetTB_TAMANHO_PRODUTOAggregateType<T extends TB_TAMANHO_PRODUTOAggregateArgs> = {
        [P in keyof T & keyof AggregateTB_TAMANHO_PRODUTO]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTB_TAMANHO_PRODUTO[P]>
      : GetScalarType<T[P], AggregateTB_TAMANHO_PRODUTO[P]>
  }




  export type TB_TAMANHO_PRODUTOGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_TAMANHO_PRODUTOWhereInput
    orderBy?: TB_TAMANHO_PRODUTOOrderByWithAggregationInput | TB_TAMANHO_PRODUTOOrderByWithAggregationInput[]
    by: TB_TAMANHO_PRODUTOScalarFieldEnum[] | TB_TAMANHO_PRODUTOScalarFieldEnum
    having?: TB_TAMANHO_PRODUTOScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TB_TAMANHO_PRODUTOCountAggregateInputType | true
    _avg?: TB_TAMANHO_PRODUTOAvgAggregateInputType
    _sum?: TB_TAMANHO_PRODUTOSumAggregateInputType
    _min?: TB_TAMANHO_PRODUTOMinAggregateInputType
    _max?: TB_TAMANHO_PRODUTOMaxAggregateInputType
  }

  export type TB_TAMANHO_PRODUTOGroupByOutputType = {
    SQ_TAMANHO_PRODUTO: number
    NO_CATEGORIA: string
    _count: TB_TAMANHO_PRODUTOCountAggregateOutputType | null
    _avg: TB_TAMANHO_PRODUTOAvgAggregateOutputType | null
    _sum: TB_TAMANHO_PRODUTOSumAggregateOutputType | null
    _min: TB_TAMANHO_PRODUTOMinAggregateOutputType | null
    _max: TB_TAMANHO_PRODUTOMaxAggregateOutputType | null
  }

  type GetTB_TAMANHO_PRODUTOGroupByPayload<T extends TB_TAMANHO_PRODUTOGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TB_TAMANHO_PRODUTOGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TB_TAMANHO_PRODUTOGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TB_TAMANHO_PRODUTOGroupByOutputType[P]>
            : GetScalarType<T[P], TB_TAMANHO_PRODUTOGroupByOutputType[P]>
        }
      >
    >


  export type TB_TAMANHO_PRODUTOSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SQ_TAMANHO_PRODUTO?: boolean
    NO_CATEGORIA?: boolean
    qtdProdutos?: boolean | TB_TAMANHO_PRODUTO$qtdProdutosArgs<ExtArgs>
    itens?: boolean | TB_TAMANHO_PRODUTO$itensArgs<ExtArgs>
    _count?: boolean | TB_TAMANHO_PRODUTOCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_TAMANHO_PRODUTO"]>

  export type TB_TAMANHO_PRODUTOSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SQ_TAMANHO_PRODUTO?: boolean
    NO_CATEGORIA?: boolean
  }, ExtArgs["result"]["tB_TAMANHO_PRODUTO"]>

  export type TB_TAMANHO_PRODUTOSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SQ_TAMANHO_PRODUTO?: boolean
    NO_CATEGORIA?: boolean
  }, ExtArgs["result"]["tB_TAMANHO_PRODUTO"]>

  export type TB_TAMANHO_PRODUTOSelectScalar = {
    SQ_TAMANHO_PRODUTO?: boolean
    NO_CATEGORIA?: boolean
  }

  export type TB_TAMANHO_PRODUTOOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"SQ_TAMANHO_PRODUTO" | "NO_CATEGORIA", ExtArgs["result"]["tB_TAMANHO_PRODUTO"]>
  export type TB_TAMANHO_PRODUTOInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qtdProdutos?: boolean | TB_TAMANHO_PRODUTO$qtdProdutosArgs<ExtArgs>
    itens?: boolean | TB_TAMANHO_PRODUTO$itensArgs<ExtArgs>
    _count?: boolean | TB_TAMANHO_PRODUTOCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TB_TAMANHO_PRODUTOIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TB_TAMANHO_PRODUTOIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TB_TAMANHO_PRODUTOPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TB_TAMANHO_PRODUTO"
    objects: {
      qtdProdutos: Prisma.$TB_QTD_PRODUTOPayload<ExtArgs>[]
      itens: Prisma.$TB_ITENSPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      SQ_TAMANHO_PRODUTO: number
      NO_CATEGORIA: string
    }, ExtArgs["result"]["tB_TAMANHO_PRODUTO"]>
    composites: {}
  }

  type TB_TAMANHO_PRODUTOGetPayload<S extends boolean | null | undefined | TB_TAMANHO_PRODUTODefaultArgs> = $Result.GetResult<Prisma.$TB_TAMANHO_PRODUTOPayload, S>

  type TB_TAMANHO_PRODUTOCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TB_TAMANHO_PRODUTOFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TB_TAMANHO_PRODUTOCountAggregateInputType | true
    }

  export interface TB_TAMANHO_PRODUTODelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TB_TAMANHO_PRODUTO'], meta: { name: 'TB_TAMANHO_PRODUTO' } }
    /**
     * Find zero or one TB_TAMANHO_PRODUTO that matches the filter.
     * @param {TB_TAMANHO_PRODUTOFindUniqueArgs} args - Arguments to find a TB_TAMANHO_PRODUTO
     * @example
     * // Get one TB_TAMANHO_PRODUTO
     * const tB_TAMANHO_PRODUTO = await prisma.tB_TAMANHO_PRODUTO.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TB_TAMANHO_PRODUTOFindUniqueArgs>(args: SelectSubset<T, TB_TAMANHO_PRODUTOFindUniqueArgs<ExtArgs>>): Prisma__TB_TAMANHO_PRODUTOClient<$Result.GetResult<Prisma.$TB_TAMANHO_PRODUTOPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TB_TAMANHO_PRODUTO that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TB_TAMANHO_PRODUTOFindUniqueOrThrowArgs} args - Arguments to find a TB_TAMANHO_PRODUTO
     * @example
     * // Get one TB_TAMANHO_PRODUTO
     * const tB_TAMANHO_PRODUTO = await prisma.tB_TAMANHO_PRODUTO.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TB_TAMANHO_PRODUTOFindUniqueOrThrowArgs>(args: SelectSubset<T, TB_TAMANHO_PRODUTOFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TB_TAMANHO_PRODUTOClient<$Result.GetResult<Prisma.$TB_TAMANHO_PRODUTOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_TAMANHO_PRODUTO that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_TAMANHO_PRODUTOFindFirstArgs} args - Arguments to find a TB_TAMANHO_PRODUTO
     * @example
     * // Get one TB_TAMANHO_PRODUTO
     * const tB_TAMANHO_PRODUTO = await prisma.tB_TAMANHO_PRODUTO.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TB_TAMANHO_PRODUTOFindFirstArgs>(args?: SelectSubset<T, TB_TAMANHO_PRODUTOFindFirstArgs<ExtArgs>>): Prisma__TB_TAMANHO_PRODUTOClient<$Result.GetResult<Prisma.$TB_TAMANHO_PRODUTOPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_TAMANHO_PRODUTO that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_TAMANHO_PRODUTOFindFirstOrThrowArgs} args - Arguments to find a TB_TAMANHO_PRODUTO
     * @example
     * // Get one TB_TAMANHO_PRODUTO
     * const tB_TAMANHO_PRODUTO = await prisma.tB_TAMANHO_PRODUTO.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TB_TAMANHO_PRODUTOFindFirstOrThrowArgs>(args?: SelectSubset<T, TB_TAMANHO_PRODUTOFindFirstOrThrowArgs<ExtArgs>>): Prisma__TB_TAMANHO_PRODUTOClient<$Result.GetResult<Prisma.$TB_TAMANHO_PRODUTOPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TB_TAMANHO_PRODUTOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_TAMANHO_PRODUTOFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TB_TAMANHO_PRODUTOS
     * const tB_TAMANHO_PRODUTOS = await prisma.tB_TAMANHO_PRODUTO.findMany()
     * 
     * // Get first 10 TB_TAMANHO_PRODUTOS
     * const tB_TAMANHO_PRODUTOS = await prisma.tB_TAMANHO_PRODUTO.findMany({ take: 10 })
     * 
     * // Only select the `SQ_TAMANHO_PRODUTO`
     * const tB_TAMANHO_PRODUTOWithSQ_TAMANHO_PRODUTOOnly = await prisma.tB_TAMANHO_PRODUTO.findMany({ select: { SQ_TAMANHO_PRODUTO: true } })
     * 
     */
    findMany<T extends TB_TAMANHO_PRODUTOFindManyArgs>(args?: SelectSubset<T, TB_TAMANHO_PRODUTOFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_TAMANHO_PRODUTOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TB_TAMANHO_PRODUTO.
     * @param {TB_TAMANHO_PRODUTOCreateArgs} args - Arguments to create a TB_TAMANHO_PRODUTO.
     * @example
     * // Create one TB_TAMANHO_PRODUTO
     * const TB_TAMANHO_PRODUTO = await prisma.tB_TAMANHO_PRODUTO.create({
     *   data: {
     *     // ... data to create a TB_TAMANHO_PRODUTO
     *   }
     * })
     * 
     */
    create<T extends TB_TAMANHO_PRODUTOCreateArgs>(args: SelectSubset<T, TB_TAMANHO_PRODUTOCreateArgs<ExtArgs>>): Prisma__TB_TAMANHO_PRODUTOClient<$Result.GetResult<Prisma.$TB_TAMANHO_PRODUTOPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TB_TAMANHO_PRODUTOS.
     * @param {TB_TAMANHO_PRODUTOCreateManyArgs} args - Arguments to create many TB_TAMANHO_PRODUTOS.
     * @example
     * // Create many TB_TAMANHO_PRODUTOS
     * const tB_TAMANHO_PRODUTO = await prisma.tB_TAMANHO_PRODUTO.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TB_TAMANHO_PRODUTOCreateManyArgs>(args?: SelectSubset<T, TB_TAMANHO_PRODUTOCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TB_TAMANHO_PRODUTOS and returns the data saved in the database.
     * @param {TB_TAMANHO_PRODUTOCreateManyAndReturnArgs} args - Arguments to create many TB_TAMANHO_PRODUTOS.
     * @example
     * // Create many TB_TAMANHO_PRODUTOS
     * const tB_TAMANHO_PRODUTO = await prisma.tB_TAMANHO_PRODUTO.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TB_TAMANHO_PRODUTOS and only return the `SQ_TAMANHO_PRODUTO`
     * const tB_TAMANHO_PRODUTOWithSQ_TAMANHO_PRODUTOOnly = await prisma.tB_TAMANHO_PRODUTO.createManyAndReturn({
     *   select: { SQ_TAMANHO_PRODUTO: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TB_TAMANHO_PRODUTOCreateManyAndReturnArgs>(args?: SelectSubset<T, TB_TAMANHO_PRODUTOCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_TAMANHO_PRODUTOPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TB_TAMANHO_PRODUTO.
     * @param {TB_TAMANHO_PRODUTODeleteArgs} args - Arguments to delete one TB_TAMANHO_PRODUTO.
     * @example
     * // Delete one TB_TAMANHO_PRODUTO
     * const TB_TAMANHO_PRODUTO = await prisma.tB_TAMANHO_PRODUTO.delete({
     *   where: {
     *     // ... filter to delete one TB_TAMANHO_PRODUTO
     *   }
     * })
     * 
     */
    delete<T extends TB_TAMANHO_PRODUTODeleteArgs>(args: SelectSubset<T, TB_TAMANHO_PRODUTODeleteArgs<ExtArgs>>): Prisma__TB_TAMANHO_PRODUTOClient<$Result.GetResult<Prisma.$TB_TAMANHO_PRODUTOPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TB_TAMANHO_PRODUTO.
     * @param {TB_TAMANHO_PRODUTOUpdateArgs} args - Arguments to update one TB_TAMANHO_PRODUTO.
     * @example
     * // Update one TB_TAMANHO_PRODUTO
     * const tB_TAMANHO_PRODUTO = await prisma.tB_TAMANHO_PRODUTO.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TB_TAMANHO_PRODUTOUpdateArgs>(args: SelectSubset<T, TB_TAMANHO_PRODUTOUpdateArgs<ExtArgs>>): Prisma__TB_TAMANHO_PRODUTOClient<$Result.GetResult<Prisma.$TB_TAMANHO_PRODUTOPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TB_TAMANHO_PRODUTOS.
     * @param {TB_TAMANHO_PRODUTODeleteManyArgs} args - Arguments to filter TB_TAMANHO_PRODUTOS to delete.
     * @example
     * // Delete a few TB_TAMANHO_PRODUTOS
     * const { count } = await prisma.tB_TAMANHO_PRODUTO.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TB_TAMANHO_PRODUTODeleteManyArgs>(args?: SelectSubset<T, TB_TAMANHO_PRODUTODeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_TAMANHO_PRODUTOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_TAMANHO_PRODUTOUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TB_TAMANHO_PRODUTOS
     * const tB_TAMANHO_PRODUTO = await prisma.tB_TAMANHO_PRODUTO.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TB_TAMANHO_PRODUTOUpdateManyArgs>(args: SelectSubset<T, TB_TAMANHO_PRODUTOUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_TAMANHO_PRODUTOS and returns the data updated in the database.
     * @param {TB_TAMANHO_PRODUTOUpdateManyAndReturnArgs} args - Arguments to update many TB_TAMANHO_PRODUTOS.
     * @example
     * // Update many TB_TAMANHO_PRODUTOS
     * const tB_TAMANHO_PRODUTO = await prisma.tB_TAMANHO_PRODUTO.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TB_TAMANHO_PRODUTOS and only return the `SQ_TAMANHO_PRODUTO`
     * const tB_TAMANHO_PRODUTOWithSQ_TAMANHO_PRODUTOOnly = await prisma.tB_TAMANHO_PRODUTO.updateManyAndReturn({
     *   select: { SQ_TAMANHO_PRODUTO: true },
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
    updateManyAndReturn<T extends TB_TAMANHO_PRODUTOUpdateManyAndReturnArgs>(args: SelectSubset<T, TB_TAMANHO_PRODUTOUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_TAMANHO_PRODUTOPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TB_TAMANHO_PRODUTO.
     * @param {TB_TAMANHO_PRODUTOUpsertArgs} args - Arguments to update or create a TB_TAMANHO_PRODUTO.
     * @example
     * // Update or create a TB_TAMANHO_PRODUTO
     * const tB_TAMANHO_PRODUTO = await prisma.tB_TAMANHO_PRODUTO.upsert({
     *   create: {
     *     // ... data to create a TB_TAMANHO_PRODUTO
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TB_TAMANHO_PRODUTO we want to update
     *   }
     * })
     */
    upsert<T extends TB_TAMANHO_PRODUTOUpsertArgs>(args: SelectSubset<T, TB_TAMANHO_PRODUTOUpsertArgs<ExtArgs>>): Prisma__TB_TAMANHO_PRODUTOClient<$Result.GetResult<Prisma.$TB_TAMANHO_PRODUTOPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TB_TAMANHO_PRODUTOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_TAMANHO_PRODUTOCountArgs} args - Arguments to filter TB_TAMANHO_PRODUTOS to count.
     * @example
     * // Count the number of TB_TAMANHO_PRODUTOS
     * const count = await prisma.tB_TAMANHO_PRODUTO.count({
     *   where: {
     *     // ... the filter for the TB_TAMANHO_PRODUTOS we want to count
     *   }
     * })
    **/
    count<T extends TB_TAMANHO_PRODUTOCountArgs>(
      args?: Subset<T, TB_TAMANHO_PRODUTOCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TB_TAMANHO_PRODUTOCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TB_TAMANHO_PRODUTO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_TAMANHO_PRODUTOAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TB_TAMANHO_PRODUTOAggregateArgs>(args: Subset<T, TB_TAMANHO_PRODUTOAggregateArgs>): Prisma.PrismaPromise<GetTB_TAMANHO_PRODUTOAggregateType<T>>

    /**
     * Group by TB_TAMANHO_PRODUTO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_TAMANHO_PRODUTOGroupByArgs} args - Group by arguments.
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
      T extends TB_TAMANHO_PRODUTOGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TB_TAMANHO_PRODUTOGroupByArgs['orderBy'] }
        : { orderBy?: TB_TAMANHO_PRODUTOGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TB_TAMANHO_PRODUTOGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTB_TAMANHO_PRODUTOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TB_TAMANHO_PRODUTO model
   */
  readonly fields: TB_TAMANHO_PRODUTOFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TB_TAMANHO_PRODUTO.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TB_TAMANHO_PRODUTOClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    qtdProdutos<T extends TB_TAMANHO_PRODUTO$qtdProdutosArgs<ExtArgs> = {}>(args?: Subset<T, TB_TAMANHO_PRODUTO$qtdProdutosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_QTD_PRODUTOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    itens<T extends TB_TAMANHO_PRODUTO$itensArgs<ExtArgs> = {}>(args?: Subset<T, TB_TAMANHO_PRODUTO$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_ITENSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TB_TAMANHO_PRODUTO model
   */
  interface TB_TAMANHO_PRODUTOFieldRefs {
    readonly SQ_TAMANHO_PRODUTO: FieldRef<"TB_TAMANHO_PRODUTO", 'Int'>
    readonly NO_CATEGORIA: FieldRef<"TB_TAMANHO_PRODUTO", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TB_TAMANHO_PRODUTO findUnique
   */
  export type TB_TAMANHO_PRODUTOFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TAMANHO_PRODUTO
     */
    select?: TB_TAMANHO_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TAMANHO_PRODUTO
     */
    omit?: TB_TAMANHO_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TAMANHO_PRODUTOInclude<ExtArgs> | null
    /**
     * Filter, which TB_TAMANHO_PRODUTO to fetch.
     */
    where: TB_TAMANHO_PRODUTOWhereUniqueInput
  }

  /**
   * TB_TAMANHO_PRODUTO findUniqueOrThrow
   */
  export type TB_TAMANHO_PRODUTOFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TAMANHO_PRODUTO
     */
    select?: TB_TAMANHO_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TAMANHO_PRODUTO
     */
    omit?: TB_TAMANHO_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TAMANHO_PRODUTOInclude<ExtArgs> | null
    /**
     * Filter, which TB_TAMANHO_PRODUTO to fetch.
     */
    where: TB_TAMANHO_PRODUTOWhereUniqueInput
  }

  /**
   * TB_TAMANHO_PRODUTO findFirst
   */
  export type TB_TAMANHO_PRODUTOFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TAMANHO_PRODUTO
     */
    select?: TB_TAMANHO_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TAMANHO_PRODUTO
     */
    omit?: TB_TAMANHO_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TAMANHO_PRODUTOInclude<ExtArgs> | null
    /**
     * Filter, which TB_TAMANHO_PRODUTO to fetch.
     */
    where?: TB_TAMANHO_PRODUTOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_TAMANHO_PRODUTOS to fetch.
     */
    orderBy?: TB_TAMANHO_PRODUTOOrderByWithRelationInput | TB_TAMANHO_PRODUTOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_TAMANHO_PRODUTOS.
     */
    cursor?: TB_TAMANHO_PRODUTOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_TAMANHO_PRODUTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_TAMANHO_PRODUTOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_TAMANHO_PRODUTOS.
     */
    distinct?: TB_TAMANHO_PRODUTOScalarFieldEnum | TB_TAMANHO_PRODUTOScalarFieldEnum[]
  }

  /**
   * TB_TAMANHO_PRODUTO findFirstOrThrow
   */
  export type TB_TAMANHO_PRODUTOFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TAMANHO_PRODUTO
     */
    select?: TB_TAMANHO_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TAMANHO_PRODUTO
     */
    omit?: TB_TAMANHO_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TAMANHO_PRODUTOInclude<ExtArgs> | null
    /**
     * Filter, which TB_TAMANHO_PRODUTO to fetch.
     */
    where?: TB_TAMANHO_PRODUTOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_TAMANHO_PRODUTOS to fetch.
     */
    orderBy?: TB_TAMANHO_PRODUTOOrderByWithRelationInput | TB_TAMANHO_PRODUTOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_TAMANHO_PRODUTOS.
     */
    cursor?: TB_TAMANHO_PRODUTOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_TAMANHO_PRODUTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_TAMANHO_PRODUTOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_TAMANHO_PRODUTOS.
     */
    distinct?: TB_TAMANHO_PRODUTOScalarFieldEnum | TB_TAMANHO_PRODUTOScalarFieldEnum[]
  }

  /**
   * TB_TAMANHO_PRODUTO findMany
   */
  export type TB_TAMANHO_PRODUTOFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TAMANHO_PRODUTO
     */
    select?: TB_TAMANHO_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TAMANHO_PRODUTO
     */
    omit?: TB_TAMANHO_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TAMANHO_PRODUTOInclude<ExtArgs> | null
    /**
     * Filter, which TB_TAMANHO_PRODUTOS to fetch.
     */
    where?: TB_TAMANHO_PRODUTOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_TAMANHO_PRODUTOS to fetch.
     */
    orderBy?: TB_TAMANHO_PRODUTOOrderByWithRelationInput | TB_TAMANHO_PRODUTOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TB_TAMANHO_PRODUTOS.
     */
    cursor?: TB_TAMANHO_PRODUTOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_TAMANHO_PRODUTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_TAMANHO_PRODUTOS.
     */
    skip?: number
    distinct?: TB_TAMANHO_PRODUTOScalarFieldEnum | TB_TAMANHO_PRODUTOScalarFieldEnum[]
  }

  /**
   * TB_TAMANHO_PRODUTO create
   */
  export type TB_TAMANHO_PRODUTOCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TAMANHO_PRODUTO
     */
    select?: TB_TAMANHO_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TAMANHO_PRODUTO
     */
    omit?: TB_TAMANHO_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TAMANHO_PRODUTOInclude<ExtArgs> | null
    /**
     * The data needed to create a TB_TAMANHO_PRODUTO.
     */
    data: XOR<TB_TAMANHO_PRODUTOCreateInput, TB_TAMANHO_PRODUTOUncheckedCreateInput>
  }

  /**
   * TB_TAMANHO_PRODUTO createMany
   */
  export type TB_TAMANHO_PRODUTOCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TB_TAMANHO_PRODUTOS.
     */
    data: TB_TAMANHO_PRODUTOCreateManyInput | TB_TAMANHO_PRODUTOCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TB_TAMANHO_PRODUTO createManyAndReturn
   */
  export type TB_TAMANHO_PRODUTOCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TAMANHO_PRODUTO
     */
    select?: TB_TAMANHO_PRODUTOSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TAMANHO_PRODUTO
     */
    omit?: TB_TAMANHO_PRODUTOOmit<ExtArgs> | null
    /**
     * The data used to create many TB_TAMANHO_PRODUTOS.
     */
    data: TB_TAMANHO_PRODUTOCreateManyInput | TB_TAMANHO_PRODUTOCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TB_TAMANHO_PRODUTO update
   */
  export type TB_TAMANHO_PRODUTOUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TAMANHO_PRODUTO
     */
    select?: TB_TAMANHO_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TAMANHO_PRODUTO
     */
    omit?: TB_TAMANHO_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TAMANHO_PRODUTOInclude<ExtArgs> | null
    /**
     * The data needed to update a TB_TAMANHO_PRODUTO.
     */
    data: XOR<TB_TAMANHO_PRODUTOUpdateInput, TB_TAMANHO_PRODUTOUncheckedUpdateInput>
    /**
     * Choose, which TB_TAMANHO_PRODUTO to update.
     */
    where: TB_TAMANHO_PRODUTOWhereUniqueInput
  }

  /**
   * TB_TAMANHO_PRODUTO updateMany
   */
  export type TB_TAMANHO_PRODUTOUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TB_TAMANHO_PRODUTOS.
     */
    data: XOR<TB_TAMANHO_PRODUTOUpdateManyMutationInput, TB_TAMANHO_PRODUTOUncheckedUpdateManyInput>
    /**
     * Filter which TB_TAMANHO_PRODUTOS to update
     */
    where?: TB_TAMANHO_PRODUTOWhereInput
    /**
     * Limit how many TB_TAMANHO_PRODUTOS to update.
     */
    limit?: number
  }

  /**
   * TB_TAMANHO_PRODUTO updateManyAndReturn
   */
  export type TB_TAMANHO_PRODUTOUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TAMANHO_PRODUTO
     */
    select?: TB_TAMANHO_PRODUTOSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TAMANHO_PRODUTO
     */
    omit?: TB_TAMANHO_PRODUTOOmit<ExtArgs> | null
    /**
     * The data used to update TB_TAMANHO_PRODUTOS.
     */
    data: XOR<TB_TAMANHO_PRODUTOUpdateManyMutationInput, TB_TAMANHO_PRODUTOUncheckedUpdateManyInput>
    /**
     * Filter which TB_TAMANHO_PRODUTOS to update
     */
    where?: TB_TAMANHO_PRODUTOWhereInput
    /**
     * Limit how many TB_TAMANHO_PRODUTOS to update.
     */
    limit?: number
  }

  /**
   * TB_TAMANHO_PRODUTO upsert
   */
  export type TB_TAMANHO_PRODUTOUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TAMANHO_PRODUTO
     */
    select?: TB_TAMANHO_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TAMANHO_PRODUTO
     */
    omit?: TB_TAMANHO_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TAMANHO_PRODUTOInclude<ExtArgs> | null
    /**
     * The filter to search for the TB_TAMANHO_PRODUTO to update in case it exists.
     */
    where: TB_TAMANHO_PRODUTOWhereUniqueInput
    /**
     * In case the TB_TAMANHO_PRODUTO found by the `where` argument doesn't exist, create a new TB_TAMANHO_PRODUTO with this data.
     */
    create: XOR<TB_TAMANHO_PRODUTOCreateInput, TB_TAMANHO_PRODUTOUncheckedCreateInput>
    /**
     * In case the TB_TAMANHO_PRODUTO was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TB_TAMANHO_PRODUTOUpdateInput, TB_TAMANHO_PRODUTOUncheckedUpdateInput>
  }

  /**
   * TB_TAMANHO_PRODUTO delete
   */
  export type TB_TAMANHO_PRODUTODeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TAMANHO_PRODUTO
     */
    select?: TB_TAMANHO_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TAMANHO_PRODUTO
     */
    omit?: TB_TAMANHO_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TAMANHO_PRODUTOInclude<ExtArgs> | null
    /**
     * Filter which TB_TAMANHO_PRODUTO to delete.
     */
    where: TB_TAMANHO_PRODUTOWhereUniqueInput
  }

  /**
   * TB_TAMANHO_PRODUTO deleteMany
   */
  export type TB_TAMANHO_PRODUTODeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_TAMANHO_PRODUTOS to delete
     */
    where?: TB_TAMANHO_PRODUTOWhereInput
    /**
     * Limit how many TB_TAMANHO_PRODUTOS to delete.
     */
    limit?: number
  }

  /**
   * TB_TAMANHO_PRODUTO.qtdProdutos
   */
  export type TB_TAMANHO_PRODUTO$qtdProdutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_QTD_PRODUTO
     */
    select?: TB_QTD_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_QTD_PRODUTO
     */
    omit?: TB_QTD_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_QTD_PRODUTOInclude<ExtArgs> | null
    where?: TB_QTD_PRODUTOWhereInput
    orderBy?: TB_QTD_PRODUTOOrderByWithRelationInput | TB_QTD_PRODUTOOrderByWithRelationInput[]
    cursor?: TB_QTD_PRODUTOWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TB_QTD_PRODUTOScalarFieldEnum | TB_QTD_PRODUTOScalarFieldEnum[]
  }

  /**
   * TB_TAMANHO_PRODUTO.itens
   */
  export type TB_TAMANHO_PRODUTO$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_ITENS
     */
    select?: TB_ITENSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_ITENS
     */
    omit?: TB_ITENSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_ITENSInclude<ExtArgs> | null
    where?: TB_ITENSWhereInput
    orderBy?: TB_ITENSOrderByWithRelationInput | TB_ITENSOrderByWithRelationInput[]
    cursor?: TB_ITENSWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TB_ITENSScalarFieldEnum | TB_ITENSScalarFieldEnum[]
  }

  /**
   * TB_TAMANHO_PRODUTO without action
   */
  export type TB_TAMANHO_PRODUTODefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_TAMANHO_PRODUTO
     */
    select?: TB_TAMANHO_PRODUTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_TAMANHO_PRODUTO
     */
    omit?: TB_TAMANHO_PRODUTOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_TAMANHO_PRODUTOInclude<ExtArgs> | null
  }


  /**
   * Model TB_CARRINHO
   */

  export type AggregateTB_CARRINHO = {
    _count: TB_CARRINHOCountAggregateOutputType | null
    _avg: TB_CARRINHOAvgAggregateOutputType | null
    _sum: TB_CARRINHOSumAggregateOutputType | null
    _min: TB_CARRINHOMinAggregateOutputType | null
    _max: TB_CARRINHOMaxAggregateOutputType | null
  }

  export type TB_CARRINHOAvgAggregateOutputType = {
    SQ_CARRINHO: number | null
    SQ_USUARIO: number | null
  }

  export type TB_CARRINHOSumAggregateOutputType = {
    SQ_CARRINHO: number | null
    SQ_USUARIO: number | null
  }

  export type TB_CARRINHOMinAggregateOutputType = {
    SQ_CARRINHO: number | null
    SQ_USUARIO: number | null
  }

  export type TB_CARRINHOMaxAggregateOutputType = {
    SQ_CARRINHO: number | null
    SQ_USUARIO: number | null
  }

  export type TB_CARRINHOCountAggregateOutputType = {
    SQ_CARRINHO: number
    SQ_USUARIO: number
    _all: number
  }


  export type TB_CARRINHOAvgAggregateInputType = {
    SQ_CARRINHO?: true
    SQ_USUARIO?: true
  }

  export type TB_CARRINHOSumAggregateInputType = {
    SQ_CARRINHO?: true
    SQ_USUARIO?: true
  }

  export type TB_CARRINHOMinAggregateInputType = {
    SQ_CARRINHO?: true
    SQ_USUARIO?: true
  }

  export type TB_CARRINHOMaxAggregateInputType = {
    SQ_CARRINHO?: true
    SQ_USUARIO?: true
  }

  export type TB_CARRINHOCountAggregateInputType = {
    SQ_CARRINHO?: true
    SQ_USUARIO?: true
    _all?: true
  }

  export type TB_CARRINHOAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_CARRINHO to aggregate.
     */
    where?: TB_CARRINHOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_CARRINHOS to fetch.
     */
    orderBy?: TB_CARRINHOOrderByWithRelationInput | TB_CARRINHOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TB_CARRINHOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_CARRINHOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_CARRINHOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TB_CARRINHOS
    **/
    _count?: true | TB_CARRINHOCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TB_CARRINHOAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TB_CARRINHOSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TB_CARRINHOMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TB_CARRINHOMaxAggregateInputType
  }

  export type GetTB_CARRINHOAggregateType<T extends TB_CARRINHOAggregateArgs> = {
        [P in keyof T & keyof AggregateTB_CARRINHO]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTB_CARRINHO[P]>
      : GetScalarType<T[P], AggregateTB_CARRINHO[P]>
  }




  export type TB_CARRINHOGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_CARRINHOWhereInput
    orderBy?: TB_CARRINHOOrderByWithAggregationInput | TB_CARRINHOOrderByWithAggregationInput[]
    by: TB_CARRINHOScalarFieldEnum[] | TB_CARRINHOScalarFieldEnum
    having?: TB_CARRINHOScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TB_CARRINHOCountAggregateInputType | true
    _avg?: TB_CARRINHOAvgAggregateInputType
    _sum?: TB_CARRINHOSumAggregateInputType
    _min?: TB_CARRINHOMinAggregateInputType
    _max?: TB_CARRINHOMaxAggregateInputType
  }

  export type TB_CARRINHOGroupByOutputType = {
    SQ_CARRINHO: number
    SQ_USUARIO: number
    _count: TB_CARRINHOCountAggregateOutputType | null
    _avg: TB_CARRINHOAvgAggregateOutputType | null
    _sum: TB_CARRINHOSumAggregateOutputType | null
    _min: TB_CARRINHOMinAggregateOutputType | null
    _max: TB_CARRINHOMaxAggregateOutputType | null
  }

  type GetTB_CARRINHOGroupByPayload<T extends TB_CARRINHOGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TB_CARRINHOGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TB_CARRINHOGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TB_CARRINHOGroupByOutputType[P]>
            : GetScalarType<T[P], TB_CARRINHOGroupByOutputType[P]>
        }
      >
    >


  export type TB_CARRINHOSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SQ_CARRINHO?: boolean
    SQ_USUARIO?: boolean
    usuario?: boolean | TB_USUARIODefaultArgs<ExtArgs>
    itens?: boolean | TB_CARRINHO$itensArgs<ExtArgs>
    _count?: boolean | TB_CARRINHOCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_CARRINHO"]>

  export type TB_CARRINHOSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SQ_CARRINHO?: boolean
    SQ_USUARIO?: boolean
    usuario?: boolean | TB_USUARIODefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_CARRINHO"]>

  export type TB_CARRINHOSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SQ_CARRINHO?: boolean
    SQ_USUARIO?: boolean
    usuario?: boolean | TB_USUARIODefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_CARRINHO"]>

  export type TB_CARRINHOSelectScalar = {
    SQ_CARRINHO?: boolean
    SQ_USUARIO?: boolean
  }

  export type TB_CARRINHOOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"SQ_CARRINHO" | "SQ_USUARIO", ExtArgs["result"]["tB_CARRINHO"]>
  export type TB_CARRINHOInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | TB_USUARIODefaultArgs<ExtArgs>
    itens?: boolean | TB_CARRINHO$itensArgs<ExtArgs>
    _count?: boolean | TB_CARRINHOCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TB_CARRINHOIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | TB_USUARIODefaultArgs<ExtArgs>
  }
  export type TB_CARRINHOIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | TB_USUARIODefaultArgs<ExtArgs>
  }

  export type $TB_CARRINHOPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TB_CARRINHO"
    objects: {
      usuario: Prisma.$TB_USUARIOPayload<ExtArgs>
      itens: Prisma.$TB_ITENSPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      SQ_CARRINHO: number
      SQ_USUARIO: number
    }, ExtArgs["result"]["tB_CARRINHO"]>
    composites: {}
  }

  type TB_CARRINHOGetPayload<S extends boolean | null | undefined | TB_CARRINHODefaultArgs> = $Result.GetResult<Prisma.$TB_CARRINHOPayload, S>

  type TB_CARRINHOCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TB_CARRINHOFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TB_CARRINHOCountAggregateInputType | true
    }

  export interface TB_CARRINHODelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TB_CARRINHO'], meta: { name: 'TB_CARRINHO' } }
    /**
     * Find zero or one TB_CARRINHO that matches the filter.
     * @param {TB_CARRINHOFindUniqueArgs} args - Arguments to find a TB_CARRINHO
     * @example
     * // Get one TB_CARRINHO
     * const tB_CARRINHO = await prisma.tB_CARRINHO.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TB_CARRINHOFindUniqueArgs>(args: SelectSubset<T, TB_CARRINHOFindUniqueArgs<ExtArgs>>): Prisma__TB_CARRINHOClient<$Result.GetResult<Prisma.$TB_CARRINHOPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TB_CARRINHO that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TB_CARRINHOFindUniqueOrThrowArgs} args - Arguments to find a TB_CARRINHO
     * @example
     * // Get one TB_CARRINHO
     * const tB_CARRINHO = await prisma.tB_CARRINHO.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TB_CARRINHOFindUniqueOrThrowArgs>(args: SelectSubset<T, TB_CARRINHOFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TB_CARRINHOClient<$Result.GetResult<Prisma.$TB_CARRINHOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_CARRINHO that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_CARRINHOFindFirstArgs} args - Arguments to find a TB_CARRINHO
     * @example
     * // Get one TB_CARRINHO
     * const tB_CARRINHO = await prisma.tB_CARRINHO.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TB_CARRINHOFindFirstArgs>(args?: SelectSubset<T, TB_CARRINHOFindFirstArgs<ExtArgs>>): Prisma__TB_CARRINHOClient<$Result.GetResult<Prisma.$TB_CARRINHOPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_CARRINHO that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_CARRINHOFindFirstOrThrowArgs} args - Arguments to find a TB_CARRINHO
     * @example
     * // Get one TB_CARRINHO
     * const tB_CARRINHO = await prisma.tB_CARRINHO.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TB_CARRINHOFindFirstOrThrowArgs>(args?: SelectSubset<T, TB_CARRINHOFindFirstOrThrowArgs<ExtArgs>>): Prisma__TB_CARRINHOClient<$Result.GetResult<Prisma.$TB_CARRINHOPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TB_CARRINHOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_CARRINHOFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TB_CARRINHOS
     * const tB_CARRINHOS = await prisma.tB_CARRINHO.findMany()
     * 
     * // Get first 10 TB_CARRINHOS
     * const tB_CARRINHOS = await prisma.tB_CARRINHO.findMany({ take: 10 })
     * 
     * // Only select the `SQ_CARRINHO`
     * const tB_CARRINHOWithSQ_CARRINHOOnly = await prisma.tB_CARRINHO.findMany({ select: { SQ_CARRINHO: true } })
     * 
     */
    findMany<T extends TB_CARRINHOFindManyArgs>(args?: SelectSubset<T, TB_CARRINHOFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_CARRINHOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TB_CARRINHO.
     * @param {TB_CARRINHOCreateArgs} args - Arguments to create a TB_CARRINHO.
     * @example
     * // Create one TB_CARRINHO
     * const TB_CARRINHO = await prisma.tB_CARRINHO.create({
     *   data: {
     *     // ... data to create a TB_CARRINHO
     *   }
     * })
     * 
     */
    create<T extends TB_CARRINHOCreateArgs>(args: SelectSubset<T, TB_CARRINHOCreateArgs<ExtArgs>>): Prisma__TB_CARRINHOClient<$Result.GetResult<Prisma.$TB_CARRINHOPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TB_CARRINHOS.
     * @param {TB_CARRINHOCreateManyArgs} args - Arguments to create many TB_CARRINHOS.
     * @example
     * // Create many TB_CARRINHOS
     * const tB_CARRINHO = await prisma.tB_CARRINHO.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TB_CARRINHOCreateManyArgs>(args?: SelectSubset<T, TB_CARRINHOCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TB_CARRINHOS and returns the data saved in the database.
     * @param {TB_CARRINHOCreateManyAndReturnArgs} args - Arguments to create many TB_CARRINHOS.
     * @example
     * // Create many TB_CARRINHOS
     * const tB_CARRINHO = await prisma.tB_CARRINHO.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TB_CARRINHOS and only return the `SQ_CARRINHO`
     * const tB_CARRINHOWithSQ_CARRINHOOnly = await prisma.tB_CARRINHO.createManyAndReturn({
     *   select: { SQ_CARRINHO: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TB_CARRINHOCreateManyAndReturnArgs>(args?: SelectSubset<T, TB_CARRINHOCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_CARRINHOPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TB_CARRINHO.
     * @param {TB_CARRINHODeleteArgs} args - Arguments to delete one TB_CARRINHO.
     * @example
     * // Delete one TB_CARRINHO
     * const TB_CARRINHO = await prisma.tB_CARRINHO.delete({
     *   where: {
     *     // ... filter to delete one TB_CARRINHO
     *   }
     * })
     * 
     */
    delete<T extends TB_CARRINHODeleteArgs>(args: SelectSubset<T, TB_CARRINHODeleteArgs<ExtArgs>>): Prisma__TB_CARRINHOClient<$Result.GetResult<Prisma.$TB_CARRINHOPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TB_CARRINHO.
     * @param {TB_CARRINHOUpdateArgs} args - Arguments to update one TB_CARRINHO.
     * @example
     * // Update one TB_CARRINHO
     * const tB_CARRINHO = await prisma.tB_CARRINHO.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TB_CARRINHOUpdateArgs>(args: SelectSubset<T, TB_CARRINHOUpdateArgs<ExtArgs>>): Prisma__TB_CARRINHOClient<$Result.GetResult<Prisma.$TB_CARRINHOPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TB_CARRINHOS.
     * @param {TB_CARRINHODeleteManyArgs} args - Arguments to filter TB_CARRINHOS to delete.
     * @example
     * // Delete a few TB_CARRINHOS
     * const { count } = await prisma.tB_CARRINHO.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TB_CARRINHODeleteManyArgs>(args?: SelectSubset<T, TB_CARRINHODeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_CARRINHOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_CARRINHOUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TB_CARRINHOS
     * const tB_CARRINHO = await prisma.tB_CARRINHO.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TB_CARRINHOUpdateManyArgs>(args: SelectSubset<T, TB_CARRINHOUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_CARRINHOS and returns the data updated in the database.
     * @param {TB_CARRINHOUpdateManyAndReturnArgs} args - Arguments to update many TB_CARRINHOS.
     * @example
     * // Update many TB_CARRINHOS
     * const tB_CARRINHO = await prisma.tB_CARRINHO.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TB_CARRINHOS and only return the `SQ_CARRINHO`
     * const tB_CARRINHOWithSQ_CARRINHOOnly = await prisma.tB_CARRINHO.updateManyAndReturn({
     *   select: { SQ_CARRINHO: true },
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
    updateManyAndReturn<T extends TB_CARRINHOUpdateManyAndReturnArgs>(args: SelectSubset<T, TB_CARRINHOUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_CARRINHOPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TB_CARRINHO.
     * @param {TB_CARRINHOUpsertArgs} args - Arguments to update or create a TB_CARRINHO.
     * @example
     * // Update or create a TB_CARRINHO
     * const tB_CARRINHO = await prisma.tB_CARRINHO.upsert({
     *   create: {
     *     // ... data to create a TB_CARRINHO
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TB_CARRINHO we want to update
     *   }
     * })
     */
    upsert<T extends TB_CARRINHOUpsertArgs>(args: SelectSubset<T, TB_CARRINHOUpsertArgs<ExtArgs>>): Prisma__TB_CARRINHOClient<$Result.GetResult<Prisma.$TB_CARRINHOPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TB_CARRINHOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_CARRINHOCountArgs} args - Arguments to filter TB_CARRINHOS to count.
     * @example
     * // Count the number of TB_CARRINHOS
     * const count = await prisma.tB_CARRINHO.count({
     *   where: {
     *     // ... the filter for the TB_CARRINHOS we want to count
     *   }
     * })
    **/
    count<T extends TB_CARRINHOCountArgs>(
      args?: Subset<T, TB_CARRINHOCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TB_CARRINHOCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TB_CARRINHO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_CARRINHOAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TB_CARRINHOAggregateArgs>(args: Subset<T, TB_CARRINHOAggregateArgs>): Prisma.PrismaPromise<GetTB_CARRINHOAggregateType<T>>

    /**
     * Group by TB_CARRINHO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_CARRINHOGroupByArgs} args - Group by arguments.
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
      T extends TB_CARRINHOGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TB_CARRINHOGroupByArgs['orderBy'] }
        : { orderBy?: TB_CARRINHOGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TB_CARRINHOGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTB_CARRINHOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TB_CARRINHO model
   */
  readonly fields: TB_CARRINHOFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TB_CARRINHO.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TB_CARRINHOClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends TB_USUARIODefaultArgs<ExtArgs> = {}>(args?: Subset<T, TB_USUARIODefaultArgs<ExtArgs>>): Prisma__TB_USUARIOClient<$Result.GetResult<Prisma.$TB_USUARIOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itens<T extends TB_CARRINHO$itensArgs<ExtArgs> = {}>(args?: Subset<T, TB_CARRINHO$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_ITENSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TB_CARRINHO model
   */
  interface TB_CARRINHOFieldRefs {
    readonly SQ_CARRINHO: FieldRef<"TB_CARRINHO", 'Int'>
    readonly SQ_USUARIO: FieldRef<"TB_CARRINHO", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TB_CARRINHO findUnique
   */
  export type TB_CARRINHOFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CARRINHO
     */
    select?: TB_CARRINHOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CARRINHO
     */
    omit?: TB_CARRINHOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_CARRINHOInclude<ExtArgs> | null
    /**
     * Filter, which TB_CARRINHO to fetch.
     */
    where: TB_CARRINHOWhereUniqueInput
  }

  /**
   * TB_CARRINHO findUniqueOrThrow
   */
  export type TB_CARRINHOFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CARRINHO
     */
    select?: TB_CARRINHOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CARRINHO
     */
    omit?: TB_CARRINHOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_CARRINHOInclude<ExtArgs> | null
    /**
     * Filter, which TB_CARRINHO to fetch.
     */
    where: TB_CARRINHOWhereUniqueInput
  }

  /**
   * TB_CARRINHO findFirst
   */
  export type TB_CARRINHOFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CARRINHO
     */
    select?: TB_CARRINHOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CARRINHO
     */
    omit?: TB_CARRINHOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_CARRINHOInclude<ExtArgs> | null
    /**
     * Filter, which TB_CARRINHO to fetch.
     */
    where?: TB_CARRINHOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_CARRINHOS to fetch.
     */
    orderBy?: TB_CARRINHOOrderByWithRelationInput | TB_CARRINHOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_CARRINHOS.
     */
    cursor?: TB_CARRINHOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_CARRINHOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_CARRINHOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_CARRINHOS.
     */
    distinct?: TB_CARRINHOScalarFieldEnum | TB_CARRINHOScalarFieldEnum[]
  }

  /**
   * TB_CARRINHO findFirstOrThrow
   */
  export type TB_CARRINHOFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CARRINHO
     */
    select?: TB_CARRINHOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CARRINHO
     */
    omit?: TB_CARRINHOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_CARRINHOInclude<ExtArgs> | null
    /**
     * Filter, which TB_CARRINHO to fetch.
     */
    where?: TB_CARRINHOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_CARRINHOS to fetch.
     */
    orderBy?: TB_CARRINHOOrderByWithRelationInput | TB_CARRINHOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_CARRINHOS.
     */
    cursor?: TB_CARRINHOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_CARRINHOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_CARRINHOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_CARRINHOS.
     */
    distinct?: TB_CARRINHOScalarFieldEnum | TB_CARRINHOScalarFieldEnum[]
  }

  /**
   * TB_CARRINHO findMany
   */
  export type TB_CARRINHOFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CARRINHO
     */
    select?: TB_CARRINHOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CARRINHO
     */
    omit?: TB_CARRINHOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_CARRINHOInclude<ExtArgs> | null
    /**
     * Filter, which TB_CARRINHOS to fetch.
     */
    where?: TB_CARRINHOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_CARRINHOS to fetch.
     */
    orderBy?: TB_CARRINHOOrderByWithRelationInput | TB_CARRINHOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TB_CARRINHOS.
     */
    cursor?: TB_CARRINHOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_CARRINHOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_CARRINHOS.
     */
    skip?: number
    distinct?: TB_CARRINHOScalarFieldEnum | TB_CARRINHOScalarFieldEnum[]
  }

  /**
   * TB_CARRINHO create
   */
  export type TB_CARRINHOCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CARRINHO
     */
    select?: TB_CARRINHOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CARRINHO
     */
    omit?: TB_CARRINHOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_CARRINHOInclude<ExtArgs> | null
    /**
     * The data needed to create a TB_CARRINHO.
     */
    data: XOR<TB_CARRINHOCreateInput, TB_CARRINHOUncheckedCreateInput>
  }

  /**
   * TB_CARRINHO createMany
   */
  export type TB_CARRINHOCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TB_CARRINHOS.
     */
    data: TB_CARRINHOCreateManyInput | TB_CARRINHOCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TB_CARRINHO createManyAndReturn
   */
  export type TB_CARRINHOCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CARRINHO
     */
    select?: TB_CARRINHOSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CARRINHO
     */
    omit?: TB_CARRINHOOmit<ExtArgs> | null
    /**
     * The data used to create many TB_CARRINHOS.
     */
    data: TB_CARRINHOCreateManyInput | TB_CARRINHOCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_CARRINHOIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TB_CARRINHO update
   */
  export type TB_CARRINHOUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CARRINHO
     */
    select?: TB_CARRINHOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CARRINHO
     */
    omit?: TB_CARRINHOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_CARRINHOInclude<ExtArgs> | null
    /**
     * The data needed to update a TB_CARRINHO.
     */
    data: XOR<TB_CARRINHOUpdateInput, TB_CARRINHOUncheckedUpdateInput>
    /**
     * Choose, which TB_CARRINHO to update.
     */
    where: TB_CARRINHOWhereUniqueInput
  }

  /**
   * TB_CARRINHO updateMany
   */
  export type TB_CARRINHOUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TB_CARRINHOS.
     */
    data: XOR<TB_CARRINHOUpdateManyMutationInput, TB_CARRINHOUncheckedUpdateManyInput>
    /**
     * Filter which TB_CARRINHOS to update
     */
    where?: TB_CARRINHOWhereInput
    /**
     * Limit how many TB_CARRINHOS to update.
     */
    limit?: number
  }

  /**
   * TB_CARRINHO updateManyAndReturn
   */
  export type TB_CARRINHOUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CARRINHO
     */
    select?: TB_CARRINHOSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CARRINHO
     */
    omit?: TB_CARRINHOOmit<ExtArgs> | null
    /**
     * The data used to update TB_CARRINHOS.
     */
    data: XOR<TB_CARRINHOUpdateManyMutationInput, TB_CARRINHOUncheckedUpdateManyInput>
    /**
     * Filter which TB_CARRINHOS to update
     */
    where?: TB_CARRINHOWhereInput
    /**
     * Limit how many TB_CARRINHOS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_CARRINHOIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TB_CARRINHO upsert
   */
  export type TB_CARRINHOUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CARRINHO
     */
    select?: TB_CARRINHOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CARRINHO
     */
    omit?: TB_CARRINHOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_CARRINHOInclude<ExtArgs> | null
    /**
     * The filter to search for the TB_CARRINHO to update in case it exists.
     */
    where: TB_CARRINHOWhereUniqueInput
    /**
     * In case the TB_CARRINHO found by the `where` argument doesn't exist, create a new TB_CARRINHO with this data.
     */
    create: XOR<TB_CARRINHOCreateInput, TB_CARRINHOUncheckedCreateInput>
    /**
     * In case the TB_CARRINHO was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TB_CARRINHOUpdateInput, TB_CARRINHOUncheckedUpdateInput>
  }

  /**
   * TB_CARRINHO delete
   */
  export type TB_CARRINHODeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CARRINHO
     */
    select?: TB_CARRINHOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CARRINHO
     */
    omit?: TB_CARRINHOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_CARRINHOInclude<ExtArgs> | null
    /**
     * Filter which TB_CARRINHO to delete.
     */
    where: TB_CARRINHOWhereUniqueInput
  }

  /**
   * TB_CARRINHO deleteMany
   */
  export type TB_CARRINHODeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_CARRINHOS to delete
     */
    where?: TB_CARRINHOWhereInput
    /**
     * Limit how many TB_CARRINHOS to delete.
     */
    limit?: number
  }

  /**
   * TB_CARRINHO.itens
   */
  export type TB_CARRINHO$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_ITENS
     */
    select?: TB_ITENSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_ITENS
     */
    omit?: TB_ITENSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_ITENSInclude<ExtArgs> | null
    where?: TB_ITENSWhereInput
    orderBy?: TB_ITENSOrderByWithRelationInput | TB_ITENSOrderByWithRelationInput[]
    cursor?: TB_ITENSWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TB_ITENSScalarFieldEnum | TB_ITENSScalarFieldEnum[]
  }

  /**
   * TB_CARRINHO without action
   */
  export type TB_CARRINHODefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_CARRINHO
     */
    select?: TB_CARRINHOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_CARRINHO
     */
    omit?: TB_CARRINHOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_CARRINHOInclude<ExtArgs> | null
  }


  /**
   * Model TB_ITENS
   */

  export type AggregateTB_ITENS = {
    _count: TB_ITENSCountAggregateOutputType | null
    _avg: TB_ITENSAvgAggregateOutputType | null
    _sum: TB_ITENSSumAggregateOutputType | null
    _min: TB_ITENSMinAggregateOutputType | null
    _max: TB_ITENSMaxAggregateOutputType | null
  }

  export type TB_ITENSAvgAggregateOutputType = {
    SQ_ITENS: number | null
    SQ_CARRINHO: number | null
    SQ_PRODUTO: number | null
    SQ_TAMANHO_PRODUTO: number | null
    QTD_PRODUTO: number | null
  }

  export type TB_ITENSSumAggregateOutputType = {
    SQ_ITENS: number | null
    SQ_CARRINHO: number | null
    SQ_PRODUTO: number | null
    SQ_TAMANHO_PRODUTO: number | null
    QTD_PRODUTO: number | null
  }

  export type TB_ITENSMinAggregateOutputType = {
    SQ_ITENS: number | null
    SQ_CARRINHO: number | null
    SQ_PRODUTO: number | null
    SQ_TAMANHO_PRODUTO: number | null
    QTD_PRODUTO: number | null
  }

  export type TB_ITENSMaxAggregateOutputType = {
    SQ_ITENS: number | null
    SQ_CARRINHO: number | null
    SQ_PRODUTO: number | null
    SQ_TAMANHO_PRODUTO: number | null
    QTD_PRODUTO: number | null
  }

  export type TB_ITENSCountAggregateOutputType = {
    SQ_ITENS: number
    SQ_CARRINHO: number
    SQ_PRODUTO: number
    SQ_TAMANHO_PRODUTO: number
    QTD_PRODUTO: number
    _all: number
  }


  export type TB_ITENSAvgAggregateInputType = {
    SQ_ITENS?: true
    SQ_CARRINHO?: true
    SQ_PRODUTO?: true
    SQ_TAMANHO_PRODUTO?: true
    QTD_PRODUTO?: true
  }

  export type TB_ITENSSumAggregateInputType = {
    SQ_ITENS?: true
    SQ_CARRINHO?: true
    SQ_PRODUTO?: true
    SQ_TAMANHO_PRODUTO?: true
    QTD_PRODUTO?: true
  }

  export type TB_ITENSMinAggregateInputType = {
    SQ_ITENS?: true
    SQ_CARRINHO?: true
    SQ_PRODUTO?: true
    SQ_TAMANHO_PRODUTO?: true
    QTD_PRODUTO?: true
  }

  export type TB_ITENSMaxAggregateInputType = {
    SQ_ITENS?: true
    SQ_CARRINHO?: true
    SQ_PRODUTO?: true
    SQ_TAMANHO_PRODUTO?: true
    QTD_PRODUTO?: true
  }

  export type TB_ITENSCountAggregateInputType = {
    SQ_ITENS?: true
    SQ_CARRINHO?: true
    SQ_PRODUTO?: true
    SQ_TAMANHO_PRODUTO?: true
    QTD_PRODUTO?: true
    _all?: true
  }

  export type TB_ITENSAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_ITENS to aggregate.
     */
    where?: TB_ITENSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_ITENS to fetch.
     */
    orderBy?: TB_ITENSOrderByWithRelationInput | TB_ITENSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TB_ITENSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_ITENS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_ITENS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TB_ITENS
    **/
    _count?: true | TB_ITENSCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TB_ITENSAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TB_ITENSSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TB_ITENSMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TB_ITENSMaxAggregateInputType
  }

  export type GetTB_ITENSAggregateType<T extends TB_ITENSAggregateArgs> = {
        [P in keyof T & keyof AggregateTB_ITENS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTB_ITENS[P]>
      : GetScalarType<T[P], AggregateTB_ITENS[P]>
  }




  export type TB_ITENSGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TB_ITENSWhereInput
    orderBy?: TB_ITENSOrderByWithAggregationInput | TB_ITENSOrderByWithAggregationInput[]
    by: TB_ITENSScalarFieldEnum[] | TB_ITENSScalarFieldEnum
    having?: TB_ITENSScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TB_ITENSCountAggregateInputType | true
    _avg?: TB_ITENSAvgAggregateInputType
    _sum?: TB_ITENSSumAggregateInputType
    _min?: TB_ITENSMinAggregateInputType
    _max?: TB_ITENSMaxAggregateInputType
  }

  export type TB_ITENSGroupByOutputType = {
    SQ_ITENS: number
    SQ_CARRINHO: number
    SQ_PRODUTO: number
    SQ_TAMANHO_PRODUTO: number
    QTD_PRODUTO: number
    _count: TB_ITENSCountAggregateOutputType | null
    _avg: TB_ITENSAvgAggregateOutputType | null
    _sum: TB_ITENSSumAggregateOutputType | null
    _min: TB_ITENSMinAggregateOutputType | null
    _max: TB_ITENSMaxAggregateOutputType | null
  }

  type GetTB_ITENSGroupByPayload<T extends TB_ITENSGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TB_ITENSGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TB_ITENSGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TB_ITENSGroupByOutputType[P]>
            : GetScalarType<T[P], TB_ITENSGroupByOutputType[P]>
        }
      >
    >


  export type TB_ITENSSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SQ_ITENS?: boolean
    SQ_CARRINHO?: boolean
    SQ_PRODUTO?: boolean
    SQ_TAMANHO_PRODUTO?: boolean
    QTD_PRODUTO?: boolean
    carrinho?: boolean | TB_CARRINHODefaultArgs<ExtArgs>
    produto?: boolean | TB_PRODUTODefaultArgs<ExtArgs>
    tamanhoProduto?: boolean | TB_TAMANHO_PRODUTODefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_ITENS"]>

  export type TB_ITENSSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SQ_ITENS?: boolean
    SQ_CARRINHO?: boolean
    SQ_PRODUTO?: boolean
    SQ_TAMANHO_PRODUTO?: boolean
    QTD_PRODUTO?: boolean
    carrinho?: boolean | TB_CARRINHODefaultArgs<ExtArgs>
    produto?: boolean | TB_PRODUTODefaultArgs<ExtArgs>
    tamanhoProduto?: boolean | TB_TAMANHO_PRODUTODefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_ITENS"]>

  export type TB_ITENSSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SQ_ITENS?: boolean
    SQ_CARRINHO?: boolean
    SQ_PRODUTO?: boolean
    SQ_TAMANHO_PRODUTO?: boolean
    QTD_PRODUTO?: boolean
    carrinho?: boolean | TB_CARRINHODefaultArgs<ExtArgs>
    produto?: boolean | TB_PRODUTODefaultArgs<ExtArgs>
    tamanhoProduto?: boolean | TB_TAMANHO_PRODUTODefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tB_ITENS"]>

  export type TB_ITENSSelectScalar = {
    SQ_ITENS?: boolean
    SQ_CARRINHO?: boolean
    SQ_PRODUTO?: boolean
    SQ_TAMANHO_PRODUTO?: boolean
    QTD_PRODUTO?: boolean
  }

  export type TB_ITENSOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"SQ_ITENS" | "SQ_CARRINHO" | "SQ_PRODUTO" | "SQ_TAMANHO_PRODUTO" | "QTD_PRODUTO", ExtArgs["result"]["tB_ITENS"]>
  export type TB_ITENSInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrinho?: boolean | TB_CARRINHODefaultArgs<ExtArgs>
    produto?: boolean | TB_PRODUTODefaultArgs<ExtArgs>
    tamanhoProduto?: boolean | TB_TAMANHO_PRODUTODefaultArgs<ExtArgs>
  }
  export type TB_ITENSIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrinho?: boolean | TB_CARRINHODefaultArgs<ExtArgs>
    produto?: boolean | TB_PRODUTODefaultArgs<ExtArgs>
    tamanhoProduto?: boolean | TB_TAMANHO_PRODUTODefaultArgs<ExtArgs>
  }
  export type TB_ITENSIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrinho?: boolean | TB_CARRINHODefaultArgs<ExtArgs>
    produto?: boolean | TB_PRODUTODefaultArgs<ExtArgs>
    tamanhoProduto?: boolean | TB_TAMANHO_PRODUTODefaultArgs<ExtArgs>
  }

  export type $TB_ITENSPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TB_ITENS"
    objects: {
      carrinho: Prisma.$TB_CARRINHOPayload<ExtArgs>
      produto: Prisma.$TB_PRODUTOPayload<ExtArgs>
      tamanhoProduto: Prisma.$TB_TAMANHO_PRODUTOPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      SQ_ITENS: number
      SQ_CARRINHO: number
      SQ_PRODUTO: number
      SQ_TAMANHO_PRODUTO: number
      QTD_PRODUTO: number
    }, ExtArgs["result"]["tB_ITENS"]>
    composites: {}
  }

  type TB_ITENSGetPayload<S extends boolean | null | undefined | TB_ITENSDefaultArgs> = $Result.GetResult<Prisma.$TB_ITENSPayload, S>

  type TB_ITENSCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TB_ITENSFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TB_ITENSCountAggregateInputType | true
    }

  export interface TB_ITENSDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TB_ITENS'], meta: { name: 'TB_ITENS' } }
    /**
     * Find zero or one TB_ITENS that matches the filter.
     * @param {TB_ITENSFindUniqueArgs} args - Arguments to find a TB_ITENS
     * @example
     * // Get one TB_ITENS
     * const tB_ITENS = await prisma.tB_ITENS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TB_ITENSFindUniqueArgs>(args: SelectSubset<T, TB_ITENSFindUniqueArgs<ExtArgs>>): Prisma__TB_ITENSClient<$Result.GetResult<Prisma.$TB_ITENSPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TB_ITENS that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TB_ITENSFindUniqueOrThrowArgs} args - Arguments to find a TB_ITENS
     * @example
     * // Get one TB_ITENS
     * const tB_ITENS = await prisma.tB_ITENS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TB_ITENSFindUniqueOrThrowArgs>(args: SelectSubset<T, TB_ITENSFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TB_ITENSClient<$Result.GetResult<Prisma.$TB_ITENSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_ITENS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_ITENSFindFirstArgs} args - Arguments to find a TB_ITENS
     * @example
     * // Get one TB_ITENS
     * const tB_ITENS = await prisma.tB_ITENS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TB_ITENSFindFirstArgs>(args?: SelectSubset<T, TB_ITENSFindFirstArgs<ExtArgs>>): Prisma__TB_ITENSClient<$Result.GetResult<Prisma.$TB_ITENSPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TB_ITENS that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_ITENSFindFirstOrThrowArgs} args - Arguments to find a TB_ITENS
     * @example
     * // Get one TB_ITENS
     * const tB_ITENS = await prisma.tB_ITENS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TB_ITENSFindFirstOrThrowArgs>(args?: SelectSubset<T, TB_ITENSFindFirstOrThrowArgs<ExtArgs>>): Prisma__TB_ITENSClient<$Result.GetResult<Prisma.$TB_ITENSPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TB_ITENS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_ITENSFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TB_ITENS
     * const tB_ITENS = await prisma.tB_ITENS.findMany()
     * 
     * // Get first 10 TB_ITENS
     * const tB_ITENS = await prisma.tB_ITENS.findMany({ take: 10 })
     * 
     * // Only select the `SQ_ITENS`
     * const tB_ITENSWithSQ_ITENSOnly = await prisma.tB_ITENS.findMany({ select: { SQ_ITENS: true } })
     * 
     */
    findMany<T extends TB_ITENSFindManyArgs>(args?: SelectSubset<T, TB_ITENSFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_ITENSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TB_ITENS.
     * @param {TB_ITENSCreateArgs} args - Arguments to create a TB_ITENS.
     * @example
     * // Create one TB_ITENS
     * const TB_ITENS = await prisma.tB_ITENS.create({
     *   data: {
     *     // ... data to create a TB_ITENS
     *   }
     * })
     * 
     */
    create<T extends TB_ITENSCreateArgs>(args: SelectSubset<T, TB_ITENSCreateArgs<ExtArgs>>): Prisma__TB_ITENSClient<$Result.GetResult<Prisma.$TB_ITENSPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TB_ITENS.
     * @param {TB_ITENSCreateManyArgs} args - Arguments to create many TB_ITENS.
     * @example
     * // Create many TB_ITENS
     * const tB_ITENS = await prisma.tB_ITENS.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TB_ITENSCreateManyArgs>(args?: SelectSubset<T, TB_ITENSCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TB_ITENS and returns the data saved in the database.
     * @param {TB_ITENSCreateManyAndReturnArgs} args - Arguments to create many TB_ITENS.
     * @example
     * // Create many TB_ITENS
     * const tB_ITENS = await prisma.tB_ITENS.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TB_ITENS and only return the `SQ_ITENS`
     * const tB_ITENSWithSQ_ITENSOnly = await prisma.tB_ITENS.createManyAndReturn({
     *   select: { SQ_ITENS: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TB_ITENSCreateManyAndReturnArgs>(args?: SelectSubset<T, TB_ITENSCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_ITENSPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TB_ITENS.
     * @param {TB_ITENSDeleteArgs} args - Arguments to delete one TB_ITENS.
     * @example
     * // Delete one TB_ITENS
     * const TB_ITENS = await prisma.tB_ITENS.delete({
     *   where: {
     *     // ... filter to delete one TB_ITENS
     *   }
     * })
     * 
     */
    delete<T extends TB_ITENSDeleteArgs>(args: SelectSubset<T, TB_ITENSDeleteArgs<ExtArgs>>): Prisma__TB_ITENSClient<$Result.GetResult<Prisma.$TB_ITENSPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TB_ITENS.
     * @param {TB_ITENSUpdateArgs} args - Arguments to update one TB_ITENS.
     * @example
     * // Update one TB_ITENS
     * const tB_ITENS = await prisma.tB_ITENS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TB_ITENSUpdateArgs>(args: SelectSubset<T, TB_ITENSUpdateArgs<ExtArgs>>): Prisma__TB_ITENSClient<$Result.GetResult<Prisma.$TB_ITENSPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TB_ITENS.
     * @param {TB_ITENSDeleteManyArgs} args - Arguments to filter TB_ITENS to delete.
     * @example
     * // Delete a few TB_ITENS
     * const { count } = await prisma.tB_ITENS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TB_ITENSDeleteManyArgs>(args?: SelectSubset<T, TB_ITENSDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_ITENS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_ITENSUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TB_ITENS
     * const tB_ITENS = await prisma.tB_ITENS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TB_ITENSUpdateManyArgs>(args: SelectSubset<T, TB_ITENSUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TB_ITENS and returns the data updated in the database.
     * @param {TB_ITENSUpdateManyAndReturnArgs} args - Arguments to update many TB_ITENS.
     * @example
     * // Update many TB_ITENS
     * const tB_ITENS = await prisma.tB_ITENS.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TB_ITENS and only return the `SQ_ITENS`
     * const tB_ITENSWithSQ_ITENSOnly = await prisma.tB_ITENS.updateManyAndReturn({
     *   select: { SQ_ITENS: true },
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
    updateManyAndReturn<T extends TB_ITENSUpdateManyAndReturnArgs>(args: SelectSubset<T, TB_ITENSUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TB_ITENSPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TB_ITENS.
     * @param {TB_ITENSUpsertArgs} args - Arguments to update or create a TB_ITENS.
     * @example
     * // Update or create a TB_ITENS
     * const tB_ITENS = await prisma.tB_ITENS.upsert({
     *   create: {
     *     // ... data to create a TB_ITENS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TB_ITENS we want to update
     *   }
     * })
     */
    upsert<T extends TB_ITENSUpsertArgs>(args: SelectSubset<T, TB_ITENSUpsertArgs<ExtArgs>>): Prisma__TB_ITENSClient<$Result.GetResult<Prisma.$TB_ITENSPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TB_ITENS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_ITENSCountArgs} args - Arguments to filter TB_ITENS to count.
     * @example
     * // Count the number of TB_ITENS
     * const count = await prisma.tB_ITENS.count({
     *   where: {
     *     // ... the filter for the TB_ITENS we want to count
     *   }
     * })
    **/
    count<T extends TB_ITENSCountArgs>(
      args?: Subset<T, TB_ITENSCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TB_ITENSCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TB_ITENS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_ITENSAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TB_ITENSAggregateArgs>(args: Subset<T, TB_ITENSAggregateArgs>): Prisma.PrismaPromise<GetTB_ITENSAggregateType<T>>

    /**
     * Group by TB_ITENS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TB_ITENSGroupByArgs} args - Group by arguments.
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
      T extends TB_ITENSGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TB_ITENSGroupByArgs['orderBy'] }
        : { orderBy?: TB_ITENSGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TB_ITENSGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTB_ITENSGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TB_ITENS model
   */
  readonly fields: TB_ITENSFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TB_ITENS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TB_ITENSClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carrinho<T extends TB_CARRINHODefaultArgs<ExtArgs> = {}>(args?: Subset<T, TB_CARRINHODefaultArgs<ExtArgs>>): Prisma__TB_CARRINHOClient<$Result.GetResult<Prisma.$TB_CARRINHOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produto<T extends TB_PRODUTODefaultArgs<ExtArgs> = {}>(args?: Subset<T, TB_PRODUTODefaultArgs<ExtArgs>>): Prisma__TB_PRODUTOClient<$Result.GetResult<Prisma.$TB_PRODUTOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tamanhoProduto<T extends TB_TAMANHO_PRODUTODefaultArgs<ExtArgs> = {}>(args?: Subset<T, TB_TAMANHO_PRODUTODefaultArgs<ExtArgs>>): Prisma__TB_TAMANHO_PRODUTOClient<$Result.GetResult<Prisma.$TB_TAMANHO_PRODUTOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TB_ITENS model
   */
  interface TB_ITENSFieldRefs {
    readonly SQ_ITENS: FieldRef<"TB_ITENS", 'Int'>
    readonly SQ_CARRINHO: FieldRef<"TB_ITENS", 'Int'>
    readonly SQ_PRODUTO: FieldRef<"TB_ITENS", 'Int'>
    readonly SQ_TAMANHO_PRODUTO: FieldRef<"TB_ITENS", 'Int'>
    readonly QTD_PRODUTO: FieldRef<"TB_ITENS", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TB_ITENS findUnique
   */
  export type TB_ITENSFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_ITENS
     */
    select?: TB_ITENSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_ITENS
     */
    omit?: TB_ITENSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_ITENSInclude<ExtArgs> | null
    /**
     * Filter, which TB_ITENS to fetch.
     */
    where: TB_ITENSWhereUniqueInput
  }

  /**
   * TB_ITENS findUniqueOrThrow
   */
  export type TB_ITENSFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_ITENS
     */
    select?: TB_ITENSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_ITENS
     */
    omit?: TB_ITENSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_ITENSInclude<ExtArgs> | null
    /**
     * Filter, which TB_ITENS to fetch.
     */
    where: TB_ITENSWhereUniqueInput
  }

  /**
   * TB_ITENS findFirst
   */
  export type TB_ITENSFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_ITENS
     */
    select?: TB_ITENSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_ITENS
     */
    omit?: TB_ITENSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_ITENSInclude<ExtArgs> | null
    /**
     * Filter, which TB_ITENS to fetch.
     */
    where?: TB_ITENSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_ITENS to fetch.
     */
    orderBy?: TB_ITENSOrderByWithRelationInput | TB_ITENSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_ITENS.
     */
    cursor?: TB_ITENSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_ITENS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_ITENS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_ITENS.
     */
    distinct?: TB_ITENSScalarFieldEnum | TB_ITENSScalarFieldEnum[]
  }

  /**
   * TB_ITENS findFirstOrThrow
   */
  export type TB_ITENSFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_ITENS
     */
    select?: TB_ITENSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_ITENS
     */
    omit?: TB_ITENSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_ITENSInclude<ExtArgs> | null
    /**
     * Filter, which TB_ITENS to fetch.
     */
    where?: TB_ITENSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_ITENS to fetch.
     */
    orderBy?: TB_ITENSOrderByWithRelationInput | TB_ITENSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TB_ITENS.
     */
    cursor?: TB_ITENSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_ITENS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_ITENS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TB_ITENS.
     */
    distinct?: TB_ITENSScalarFieldEnum | TB_ITENSScalarFieldEnum[]
  }

  /**
   * TB_ITENS findMany
   */
  export type TB_ITENSFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_ITENS
     */
    select?: TB_ITENSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_ITENS
     */
    omit?: TB_ITENSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_ITENSInclude<ExtArgs> | null
    /**
     * Filter, which TB_ITENS to fetch.
     */
    where?: TB_ITENSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TB_ITENS to fetch.
     */
    orderBy?: TB_ITENSOrderByWithRelationInput | TB_ITENSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TB_ITENS.
     */
    cursor?: TB_ITENSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TB_ITENS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TB_ITENS.
     */
    skip?: number
    distinct?: TB_ITENSScalarFieldEnum | TB_ITENSScalarFieldEnum[]
  }

  /**
   * TB_ITENS create
   */
  export type TB_ITENSCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_ITENS
     */
    select?: TB_ITENSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_ITENS
     */
    omit?: TB_ITENSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_ITENSInclude<ExtArgs> | null
    /**
     * The data needed to create a TB_ITENS.
     */
    data: XOR<TB_ITENSCreateInput, TB_ITENSUncheckedCreateInput>
  }

  /**
   * TB_ITENS createMany
   */
  export type TB_ITENSCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TB_ITENS.
     */
    data: TB_ITENSCreateManyInput | TB_ITENSCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TB_ITENS createManyAndReturn
   */
  export type TB_ITENSCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_ITENS
     */
    select?: TB_ITENSSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_ITENS
     */
    omit?: TB_ITENSOmit<ExtArgs> | null
    /**
     * The data used to create many TB_ITENS.
     */
    data: TB_ITENSCreateManyInput | TB_ITENSCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_ITENSIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TB_ITENS update
   */
  export type TB_ITENSUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_ITENS
     */
    select?: TB_ITENSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_ITENS
     */
    omit?: TB_ITENSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_ITENSInclude<ExtArgs> | null
    /**
     * The data needed to update a TB_ITENS.
     */
    data: XOR<TB_ITENSUpdateInput, TB_ITENSUncheckedUpdateInput>
    /**
     * Choose, which TB_ITENS to update.
     */
    where: TB_ITENSWhereUniqueInput
  }

  /**
   * TB_ITENS updateMany
   */
  export type TB_ITENSUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TB_ITENS.
     */
    data: XOR<TB_ITENSUpdateManyMutationInput, TB_ITENSUncheckedUpdateManyInput>
    /**
     * Filter which TB_ITENS to update
     */
    where?: TB_ITENSWhereInput
    /**
     * Limit how many TB_ITENS to update.
     */
    limit?: number
  }

  /**
   * TB_ITENS updateManyAndReturn
   */
  export type TB_ITENSUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_ITENS
     */
    select?: TB_ITENSSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TB_ITENS
     */
    omit?: TB_ITENSOmit<ExtArgs> | null
    /**
     * The data used to update TB_ITENS.
     */
    data: XOR<TB_ITENSUpdateManyMutationInput, TB_ITENSUncheckedUpdateManyInput>
    /**
     * Filter which TB_ITENS to update
     */
    where?: TB_ITENSWhereInput
    /**
     * Limit how many TB_ITENS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_ITENSIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TB_ITENS upsert
   */
  export type TB_ITENSUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_ITENS
     */
    select?: TB_ITENSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_ITENS
     */
    omit?: TB_ITENSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_ITENSInclude<ExtArgs> | null
    /**
     * The filter to search for the TB_ITENS to update in case it exists.
     */
    where: TB_ITENSWhereUniqueInput
    /**
     * In case the TB_ITENS found by the `where` argument doesn't exist, create a new TB_ITENS with this data.
     */
    create: XOR<TB_ITENSCreateInput, TB_ITENSUncheckedCreateInput>
    /**
     * In case the TB_ITENS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TB_ITENSUpdateInput, TB_ITENSUncheckedUpdateInput>
  }

  /**
   * TB_ITENS delete
   */
  export type TB_ITENSDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_ITENS
     */
    select?: TB_ITENSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_ITENS
     */
    omit?: TB_ITENSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_ITENSInclude<ExtArgs> | null
    /**
     * Filter which TB_ITENS to delete.
     */
    where: TB_ITENSWhereUniqueInput
  }

  /**
   * TB_ITENS deleteMany
   */
  export type TB_ITENSDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TB_ITENS to delete
     */
    where?: TB_ITENSWhereInput
    /**
     * Limit how many TB_ITENS to delete.
     */
    limit?: number
  }

  /**
   * TB_ITENS without action
   */
  export type TB_ITENSDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TB_ITENS
     */
    select?: TB_ITENSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TB_ITENS
     */
    omit?: TB_ITENSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TB_ITENSInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TB_USUARIOScalarFieldEnum: {
    SQ_USUARIO: 'SQ_USUARIO',
    TP_USUARIO: 'TP_USUARIO',
    ST_USUARIO: 'ST_USUARIO',
    NO_USUARIO: 'NO_USUARIO',
    EMAIL_USUARIO: 'EMAIL_USUARIO',
    SENHA_USUARIO: 'SENHA_USUARIO',
    DT_CRIACAO: 'DT_CRIACAO',
    DT_EDITADO: 'DT_EDITADO'
  };

  export type TB_USUARIOScalarFieldEnum = (typeof TB_USUARIOScalarFieldEnum)[keyof typeof TB_USUARIOScalarFieldEnum]


  export const TB_TIPO_USUARIOScalarFieldEnum: {
    SQ_TIPO_USUARIO: 'SQ_TIPO_USUARIO',
    SQ_USUARIO: 'SQ_USUARIO',
    SQ_CATEGORIA_USUARIO: 'SQ_CATEGORIA_USUARIO'
  };

  export type TB_TIPO_USUARIOScalarFieldEnum = (typeof TB_TIPO_USUARIOScalarFieldEnum)[keyof typeof TB_TIPO_USUARIOScalarFieldEnum]


  export const TB_CATEGORIA_USUARIOScalarFieldEnum: {
    SQ_CATEGORIA_USUARIO: 'SQ_CATEGORIA_USUARIO',
    NO_CATEGORIA: 'NO_CATEGORIA'
  };

  export type TB_CATEGORIA_USUARIOScalarFieldEnum = (typeof TB_CATEGORIA_USUARIOScalarFieldEnum)[keyof typeof TB_CATEGORIA_USUARIOScalarFieldEnum]


  export const TB_PRODUTOScalarFieldEnum: {
    SQ_PRODUTO: 'SQ_PRODUTO',
    ST_PRODUTO: 'ST_PRODUTO',
    NO_PRODUTO: 'NO_PRODUTO',
    DT_CRIACAO: 'DT_CRIACAO',
    DT_EDITADO: 'DT_EDITADO'
  };

  export type TB_PRODUTOScalarFieldEnum = (typeof TB_PRODUTOScalarFieldEnum)[keyof typeof TB_PRODUTOScalarFieldEnum]


  export const TB_TIPO_PRODUTOScalarFieldEnum: {
    SQ_TIPO_PRODUTO: 'SQ_TIPO_PRODUTO',
    SQ_PRODUTO: 'SQ_PRODUTO',
    SQ_CATEGORIA_PRODUTO: 'SQ_CATEGORIA_PRODUTO'
  };

  export type TB_TIPO_PRODUTOScalarFieldEnum = (typeof TB_TIPO_PRODUTOScalarFieldEnum)[keyof typeof TB_TIPO_PRODUTOScalarFieldEnum]


  export const TB_CATEGORIA_PRODUTOScalarFieldEnum: {
    SQ_CATEGORIA_PRODUTO: 'SQ_CATEGORIA_PRODUTO',
    NO_CATEGORIA: 'NO_CATEGORIA'
  };

  export type TB_CATEGORIA_PRODUTOScalarFieldEnum = (typeof TB_CATEGORIA_PRODUTOScalarFieldEnum)[keyof typeof TB_CATEGORIA_PRODUTOScalarFieldEnum]


  export const TB_QTD_PRODUTOScalarFieldEnum: {
    SQ_QTD_PRODUTO: 'SQ_QTD_PRODUTO',
    SQ_PRODUTO: 'SQ_PRODUTO',
    SQ_TAMANHO_PRODUTO: 'SQ_TAMANHO_PRODUTO',
    QTD_PRODUTO: 'QTD_PRODUTO'
  };

  export type TB_QTD_PRODUTOScalarFieldEnum = (typeof TB_QTD_PRODUTOScalarFieldEnum)[keyof typeof TB_QTD_PRODUTOScalarFieldEnum]


  export const TB_TAMANHO_PRODUTOScalarFieldEnum: {
    SQ_TAMANHO_PRODUTO: 'SQ_TAMANHO_PRODUTO',
    NO_CATEGORIA: 'NO_CATEGORIA'
  };

  export type TB_TAMANHO_PRODUTOScalarFieldEnum = (typeof TB_TAMANHO_PRODUTOScalarFieldEnum)[keyof typeof TB_TAMANHO_PRODUTOScalarFieldEnum]


  export const TB_CARRINHOScalarFieldEnum: {
    SQ_CARRINHO: 'SQ_CARRINHO',
    SQ_USUARIO: 'SQ_USUARIO'
  };

  export type TB_CARRINHOScalarFieldEnum = (typeof TB_CARRINHOScalarFieldEnum)[keyof typeof TB_CARRINHOScalarFieldEnum]


  export const TB_ITENSScalarFieldEnum: {
    SQ_ITENS: 'SQ_ITENS',
    SQ_CARRINHO: 'SQ_CARRINHO',
    SQ_PRODUTO: 'SQ_PRODUTO',
    SQ_TAMANHO_PRODUTO: 'SQ_TAMANHO_PRODUTO',
    QTD_PRODUTO: 'QTD_PRODUTO'
  };

  export type TB_ITENSScalarFieldEnum = (typeof TB_ITENSScalarFieldEnum)[keyof typeof TB_ITENSScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TB_USUARIOWhereInput = {
    AND?: TB_USUARIOWhereInput | TB_USUARIOWhereInput[]
    OR?: TB_USUARIOWhereInput[]
    NOT?: TB_USUARIOWhereInput | TB_USUARIOWhereInput[]
    SQ_USUARIO?: IntFilter<"TB_USUARIO"> | number
    TP_USUARIO?: IntFilter<"TB_USUARIO"> | number
    ST_USUARIO?: IntFilter<"TB_USUARIO"> | number
    NO_USUARIO?: StringFilter<"TB_USUARIO"> | string
    EMAIL_USUARIO?: StringFilter<"TB_USUARIO"> | string
    SENHA_USUARIO?: StringFilter<"TB_USUARIO"> | string
    DT_CRIACAO?: DateTimeFilter<"TB_USUARIO"> | Date | string
    DT_EDITADO?: DateTimeFilter<"TB_USUARIO"> | Date | string
    carrinho?: XOR<TB_CARRINHONullableScalarRelationFilter, TB_CARRINHOWhereInput> | null
    tipoUsuario?: XOR<TB_TIPO_USUARIONullableScalarRelationFilter, TB_TIPO_USUARIOWhereInput> | null
  }

  export type TB_USUARIOOrderByWithRelationInput = {
    SQ_USUARIO?: SortOrder
    TP_USUARIO?: SortOrder
    ST_USUARIO?: SortOrder
    NO_USUARIO?: SortOrder
    EMAIL_USUARIO?: SortOrder
    SENHA_USUARIO?: SortOrder
    DT_CRIACAO?: SortOrder
    DT_EDITADO?: SortOrder
    carrinho?: TB_CARRINHOOrderByWithRelationInput
    tipoUsuario?: TB_TIPO_USUARIOOrderByWithRelationInput
  }

  export type TB_USUARIOWhereUniqueInput = Prisma.AtLeast<{
    SQ_USUARIO?: number
    EMAIL_USUARIO?: string
    AND?: TB_USUARIOWhereInput | TB_USUARIOWhereInput[]
    OR?: TB_USUARIOWhereInput[]
    NOT?: TB_USUARIOWhereInput | TB_USUARIOWhereInput[]
    TP_USUARIO?: IntFilter<"TB_USUARIO"> | number
    ST_USUARIO?: IntFilter<"TB_USUARIO"> | number
    NO_USUARIO?: StringFilter<"TB_USUARIO"> | string
    SENHA_USUARIO?: StringFilter<"TB_USUARIO"> | string
    DT_CRIACAO?: DateTimeFilter<"TB_USUARIO"> | Date | string
    DT_EDITADO?: DateTimeFilter<"TB_USUARIO"> | Date | string
    carrinho?: XOR<TB_CARRINHONullableScalarRelationFilter, TB_CARRINHOWhereInput> | null
    tipoUsuario?: XOR<TB_TIPO_USUARIONullableScalarRelationFilter, TB_TIPO_USUARIOWhereInput> | null
  }, "SQ_USUARIO" | "EMAIL_USUARIO">

  export type TB_USUARIOOrderByWithAggregationInput = {
    SQ_USUARIO?: SortOrder
    TP_USUARIO?: SortOrder
    ST_USUARIO?: SortOrder
    NO_USUARIO?: SortOrder
    EMAIL_USUARIO?: SortOrder
    SENHA_USUARIO?: SortOrder
    DT_CRIACAO?: SortOrder
    DT_EDITADO?: SortOrder
    _count?: TB_USUARIOCountOrderByAggregateInput
    _avg?: TB_USUARIOAvgOrderByAggregateInput
    _max?: TB_USUARIOMaxOrderByAggregateInput
    _min?: TB_USUARIOMinOrderByAggregateInput
    _sum?: TB_USUARIOSumOrderByAggregateInput
  }

  export type TB_USUARIOScalarWhereWithAggregatesInput = {
    AND?: TB_USUARIOScalarWhereWithAggregatesInput | TB_USUARIOScalarWhereWithAggregatesInput[]
    OR?: TB_USUARIOScalarWhereWithAggregatesInput[]
    NOT?: TB_USUARIOScalarWhereWithAggregatesInput | TB_USUARIOScalarWhereWithAggregatesInput[]
    SQ_USUARIO?: IntWithAggregatesFilter<"TB_USUARIO"> | number
    TP_USUARIO?: IntWithAggregatesFilter<"TB_USUARIO"> | number
    ST_USUARIO?: IntWithAggregatesFilter<"TB_USUARIO"> | number
    NO_USUARIO?: StringWithAggregatesFilter<"TB_USUARIO"> | string
    EMAIL_USUARIO?: StringWithAggregatesFilter<"TB_USUARIO"> | string
    SENHA_USUARIO?: StringWithAggregatesFilter<"TB_USUARIO"> | string
    DT_CRIACAO?: DateTimeWithAggregatesFilter<"TB_USUARIO"> | Date | string
    DT_EDITADO?: DateTimeWithAggregatesFilter<"TB_USUARIO"> | Date | string
  }

  export type TB_TIPO_USUARIOWhereInput = {
    AND?: TB_TIPO_USUARIOWhereInput | TB_TIPO_USUARIOWhereInput[]
    OR?: TB_TIPO_USUARIOWhereInput[]
    NOT?: TB_TIPO_USUARIOWhereInput | TB_TIPO_USUARIOWhereInput[]
    SQ_TIPO_USUARIO?: IntFilter<"TB_TIPO_USUARIO"> | number
    SQ_USUARIO?: IntFilter<"TB_TIPO_USUARIO"> | number
    SQ_CATEGORIA_USUARIO?: IntFilter<"TB_TIPO_USUARIO"> | number
    usuario?: XOR<TB_USUARIOScalarRelationFilter, TB_USUARIOWhereInput>
    categoriaUsuario?: XOR<TB_CATEGORIA_USUARIOScalarRelationFilter, TB_CATEGORIA_USUARIOWhereInput>
  }

  export type TB_TIPO_USUARIOOrderByWithRelationInput = {
    SQ_TIPO_USUARIO?: SortOrder
    SQ_USUARIO?: SortOrder
    SQ_CATEGORIA_USUARIO?: SortOrder
    usuario?: TB_USUARIOOrderByWithRelationInput
    categoriaUsuario?: TB_CATEGORIA_USUARIOOrderByWithRelationInput
  }

  export type TB_TIPO_USUARIOWhereUniqueInput = Prisma.AtLeast<{
    SQ_TIPO_USUARIO?: number
    SQ_USUARIO?: number
    AND?: TB_TIPO_USUARIOWhereInput | TB_TIPO_USUARIOWhereInput[]
    OR?: TB_TIPO_USUARIOWhereInput[]
    NOT?: TB_TIPO_USUARIOWhereInput | TB_TIPO_USUARIOWhereInput[]
    SQ_CATEGORIA_USUARIO?: IntFilter<"TB_TIPO_USUARIO"> | number
    usuario?: XOR<TB_USUARIOScalarRelationFilter, TB_USUARIOWhereInput>
    categoriaUsuario?: XOR<TB_CATEGORIA_USUARIOScalarRelationFilter, TB_CATEGORIA_USUARIOWhereInput>
  }, "SQ_TIPO_USUARIO" | "SQ_USUARIO">

  export type TB_TIPO_USUARIOOrderByWithAggregationInput = {
    SQ_TIPO_USUARIO?: SortOrder
    SQ_USUARIO?: SortOrder
    SQ_CATEGORIA_USUARIO?: SortOrder
    _count?: TB_TIPO_USUARIOCountOrderByAggregateInput
    _avg?: TB_TIPO_USUARIOAvgOrderByAggregateInput
    _max?: TB_TIPO_USUARIOMaxOrderByAggregateInput
    _min?: TB_TIPO_USUARIOMinOrderByAggregateInput
    _sum?: TB_TIPO_USUARIOSumOrderByAggregateInput
  }

  export type TB_TIPO_USUARIOScalarWhereWithAggregatesInput = {
    AND?: TB_TIPO_USUARIOScalarWhereWithAggregatesInput | TB_TIPO_USUARIOScalarWhereWithAggregatesInput[]
    OR?: TB_TIPO_USUARIOScalarWhereWithAggregatesInput[]
    NOT?: TB_TIPO_USUARIOScalarWhereWithAggregatesInput | TB_TIPO_USUARIOScalarWhereWithAggregatesInput[]
    SQ_TIPO_USUARIO?: IntWithAggregatesFilter<"TB_TIPO_USUARIO"> | number
    SQ_USUARIO?: IntWithAggregatesFilter<"TB_TIPO_USUARIO"> | number
    SQ_CATEGORIA_USUARIO?: IntWithAggregatesFilter<"TB_TIPO_USUARIO"> | number
  }

  export type TB_CATEGORIA_USUARIOWhereInput = {
    AND?: TB_CATEGORIA_USUARIOWhereInput | TB_CATEGORIA_USUARIOWhereInput[]
    OR?: TB_CATEGORIA_USUARIOWhereInput[]
    NOT?: TB_CATEGORIA_USUARIOWhereInput | TB_CATEGORIA_USUARIOWhereInput[]
    SQ_CATEGORIA_USUARIO?: IntFilter<"TB_CATEGORIA_USUARIO"> | number
    NO_CATEGORIA?: StringFilter<"TB_CATEGORIA_USUARIO"> | string
    tiposUsuario?: TB_TIPO_USUARIOListRelationFilter
  }

  export type TB_CATEGORIA_USUARIOOrderByWithRelationInput = {
    SQ_CATEGORIA_USUARIO?: SortOrder
    NO_CATEGORIA?: SortOrder
    tiposUsuario?: TB_TIPO_USUARIOOrderByRelationAggregateInput
  }

  export type TB_CATEGORIA_USUARIOWhereUniqueInput = Prisma.AtLeast<{
    SQ_CATEGORIA_USUARIO?: number
    NO_CATEGORIA?: string
    AND?: TB_CATEGORIA_USUARIOWhereInput | TB_CATEGORIA_USUARIOWhereInput[]
    OR?: TB_CATEGORIA_USUARIOWhereInput[]
    NOT?: TB_CATEGORIA_USUARIOWhereInput | TB_CATEGORIA_USUARIOWhereInput[]
    tiposUsuario?: TB_TIPO_USUARIOListRelationFilter
  }, "SQ_CATEGORIA_USUARIO" | "NO_CATEGORIA">

  export type TB_CATEGORIA_USUARIOOrderByWithAggregationInput = {
    SQ_CATEGORIA_USUARIO?: SortOrder
    NO_CATEGORIA?: SortOrder
    _count?: TB_CATEGORIA_USUARIOCountOrderByAggregateInput
    _avg?: TB_CATEGORIA_USUARIOAvgOrderByAggregateInput
    _max?: TB_CATEGORIA_USUARIOMaxOrderByAggregateInput
    _min?: TB_CATEGORIA_USUARIOMinOrderByAggregateInput
    _sum?: TB_CATEGORIA_USUARIOSumOrderByAggregateInput
  }

  export type TB_CATEGORIA_USUARIOScalarWhereWithAggregatesInput = {
    AND?: TB_CATEGORIA_USUARIOScalarWhereWithAggregatesInput | TB_CATEGORIA_USUARIOScalarWhereWithAggregatesInput[]
    OR?: TB_CATEGORIA_USUARIOScalarWhereWithAggregatesInput[]
    NOT?: TB_CATEGORIA_USUARIOScalarWhereWithAggregatesInput | TB_CATEGORIA_USUARIOScalarWhereWithAggregatesInput[]
    SQ_CATEGORIA_USUARIO?: IntWithAggregatesFilter<"TB_CATEGORIA_USUARIO"> | number
    NO_CATEGORIA?: StringWithAggregatesFilter<"TB_CATEGORIA_USUARIO"> | string
  }

  export type TB_PRODUTOWhereInput = {
    AND?: TB_PRODUTOWhereInput | TB_PRODUTOWhereInput[]
    OR?: TB_PRODUTOWhereInput[]
    NOT?: TB_PRODUTOWhereInput | TB_PRODUTOWhereInput[]
    SQ_PRODUTO?: IntFilter<"TB_PRODUTO"> | number
    ST_PRODUTO?: IntFilter<"TB_PRODUTO"> | number
    NO_PRODUTO?: StringFilter<"TB_PRODUTO"> | string
    DT_CRIACAO?: DateTimeFilter<"TB_PRODUTO"> | Date | string
    DT_EDITADO?: DateTimeFilter<"TB_PRODUTO"> | Date | string
    tiposProduto?: TB_TIPO_PRODUTOListRelationFilter
    quantidades?: TB_QTD_PRODUTOListRelationFilter
    itens?: TB_ITENSListRelationFilter
  }

  export type TB_PRODUTOOrderByWithRelationInput = {
    SQ_PRODUTO?: SortOrder
    ST_PRODUTO?: SortOrder
    NO_PRODUTO?: SortOrder
    DT_CRIACAO?: SortOrder
    DT_EDITADO?: SortOrder
    tiposProduto?: TB_TIPO_PRODUTOOrderByRelationAggregateInput
    quantidades?: TB_QTD_PRODUTOOrderByRelationAggregateInput
    itens?: TB_ITENSOrderByRelationAggregateInput
  }

  export type TB_PRODUTOWhereUniqueInput = Prisma.AtLeast<{
    SQ_PRODUTO?: number
    AND?: TB_PRODUTOWhereInput | TB_PRODUTOWhereInput[]
    OR?: TB_PRODUTOWhereInput[]
    NOT?: TB_PRODUTOWhereInput | TB_PRODUTOWhereInput[]
    ST_PRODUTO?: IntFilter<"TB_PRODUTO"> | number
    NO_PRODUTO?: StringFilter<"TB_PRODUTO"> | string
    DT_CRIACAO?: DateTimeFilter<"TB_PRODUTO"> | Date | string
    DT_EDITADO?: DateTimeFilter<"TB_PRODUTO"> | Date | string
    tiposProduto?: TB_TIPO_PRODUTOListRelationFilter
    quantidades?: TB_QTD_PRODUTOListRelationFilter
    itens?: TB_ITENSListRelationFilter
  }, "SQ_PRODUTO">

  export type TB_PRODUTOOrderByWithAggregationInput = {
    SQ_PRODUTO?: SortOrder
    ST_PRODUTO?: SortOrder
    NO_PRODUTO?: SortOrder
    DT_CRIACAO?: SortOrder
    DT_EDITADO?: SortOrder
    _count?: TB_PRODUTOCountOrderByAggregateInput
    _avg?: TB_PRODUTOAvgOrderByAggregateInput
    _max?: TB_PRODUTOMaxOrderByAggregateInput
    _min?: TB_PRODUTOMinOrderByAggregateInput
    _sum?: TB_PRODUTOSumOrderByAggregateInput
  }

  export type TB_PRODUTOScalarWhereWithAggregatesInput = {
    AND?: TB_PRODUTOScalarWhereWithAggregatesInput | TB_PRODUTOScalarWhereWithAggregatesInput[]
    OR?: TB_PRODUTOScalarWhereWithAggregatesInput[]
    NOT?: TB_PRODUTOScalarWhereWithAggregatesInput | TB_PRODUTOScalarWhereWithAggregatesInput[]
    SQ_PRODUTO?: IntWithAggregatesFilter<"TB_PRODUTO"> | number
    ST_PRODUTO?: IntWithAggregatesFilter<"TB_PRODUTO"> | number
    NO_PRODUTO?: StringWithAggregatesFilter<"TB_PRODUTO"> | string
    DT_CRIACAO?: DateTimeWithAggregatesFilter<"TB_PRODUTO"> | Date | string
    DT_EDITADO?: DateTimeWithAggregatesFilter<"TB_PRODUTO"> | Date | string
  }

  export type TB_TIPO_PRODUTOWhereInput = {
    AND?: TB_TIPO_PRODUTOWhereInput | TB_TIPO_PRODUTOWhereInput[]
    OR?: TB_TIPO_PRODUTOWhereInput[]
    NOT?: TB_TIPO_PRODUTOWhereInput | TB_TIPO_PRODUTOWhereInput[]
    SQ_TIPO_PRODUTO?: IntFilter<"TB_TIPO_PRODUTO"> | number
    SQ_PRODUTO?: IntFilter<"TB_TIPO_PRODUTO"> | number
    SQ_CATEGORIA_PRODUTO?: IntFilter<"TB_TIPO_PRODUTO"> | number
    produto?: XOR<TB_PRODUTOScalarRelationFilter, TB_PRODUTOWhereInput>
    categoriaProduto?: XOR<TB_CATEGORIA_PRODUTOScalarRelationFilter, TB_CATEGORIA_PRODUTOWhereInput>
  }

  export type TB_TIPO_PRODUTOOrderByWithRelationInput = {
    SQ_TIPO_PRODUTO?: SortOrder
    SQ_PRODUTO?: SortOrder
    SQ_CATEGORIA_PRODUTO?: SortOrder
    produto?: TB_PRODUTOOrderByWithRelationInput
    categoriaProduto?: TB_CATEGORIA_PRODUTOOrderByWithRelationInput
  }

  export type TB_TIPO_PRODUTOWhereUniqueInput = Prisma.AtLeast<{
    SQ_TIPO_PRODUTO?: number
    AND?: TB_TIPO_PRODUTOWhereInput | TB_TIPO_PRODUTOWhereInput[]
    OR?: TB_TIPO_PRODUTOWhereInput[]
    NOT?: TB_TIPO_PRODUTOWhereInput | TB_TIPO_PRODUTOWhereInput[]
    SQ_PRODUTO?: IntFilter<"TB_TIPO_PRODUTO"> | number
    SQ_CATEGORIA_PRODUTO?: IntFilter<"TB_TIPO_PRODUTO"> | number
    produto?: XOR<TB_PRODUTOScalarRelationFilter, TB_PRODUTOWhereInput>
    categoriaProduto?: XOR<TB_CATEGORIA_PRODUTOScalarRelationFilter, TB_CATEGORIA_PRODUTOWhereInput>
  }, "SQ_TIPO_PRODUTO">

  export type TB_TIPO_PRODUTOOrderByWithAggregationInput = {
    SQ_TIPO_PRODUTO?: SortOrder
    SQ_PRODUTO?: SortOrder
    SQ_CATEGORIA_PRODUTO?: SortOrder
    _count?: TB_TIPO_PRODUTOCountOrderByAggregateInput
    _avg?: TB_TIPO_PRODUTOAvgOrderByAggregateInput
    _max?: TB_TIPO_PRODUTOMaxOrderByAggregateInput
    _min?: TB_TIPO_PRODUTOMinOrderByAggregateInput
    _sum?: TB_TIPO_PRODUTOSumOrderByAggregateInput
  }

  export type TB_TIPO_PRODUTOScalarWhereWithAggregatesInput = {
    AND?: TB_TIPO_PRODUTOScalarWhereWithAggregatesInput | TB_TIPO_PRODUTOScalarWhereWithAggregatesInput[]
    OR?: TB_TIPO_PRODUTOScalarWhereWithAggregatesInput[]
    NOT?: TB_TIPO_PRODUTOScalarWhereWithAggregatesInput | TB_TIPO_PRODUTOScalarWhereWithAggregatesInput[]
    SQ_TIPO_PRODUTO?: IntWithAggregatesFilter<"TB_TIPO_PRODUTO"> | number
    SQ_PRODUTO?: IntWithAggregatesFilter<"TB_TIPO_PRODUTO"> | number
    SQ_CATEGORIA_PRODUTO?: IntWithAggregatesFilter<"TB_TIPO_PRODUTO"> | number
  }

  export type TB_CATEGORIA_PRODUTOWhereInput = {
    AND?: TB_CATEGORIA_PRODUTOWhereInput | TB_CATEGORIA_PRODUTOWhereInput[]
    OR?: TB_CATEGORIA_PRODUTOWhereInput[]
    NOT?: TB_CATEGORIA_PRODUTOWhereInput | TB_CATEGORIA_PRODUTOWhereInput[]
    SQ_CATEGORIA_PRODUTO?: IntFilter<"TB_CATEGORIA_PRODUTO"> | number
    NO_CATEGORIA?: StringFilter<"TB_CATEGORIA_PRODUTO"> | string
    tiposProduto?: TB_TIPO_PRODUTOListRelationFilter
  }

  export type TB_CATEGORIA_PRODUTOOrderByWithRelationInput = {
    SQ_CATEGORIA_PRODUTO?: SortOrder
    NO_CATEGORIA?: SortOrder
    tiposProduto?: TB_TIPO_PRODUTOOrderByRelationAggregateInput
  }

  export type TB_CATEGORIA_PRODUTOWhereUniqueInput = Prisma.AtLeast<{
    SQ_CATEGORIA_PRODUTO?: number
    NO_CATEGORIA?: string
    AND?: TB_CATEGORIA_PRODUTOWhereInput | TB_CATEGORIA_PRODUTOWhereInput[]
    OR?: TB_CATEGORIA_PRODUTOWhereInput[]
    NOT?: TB_CATEGORIA_PRODUTOWhereInput | TB_CATEGORIA_PRODUTOWhereInput[]
    tiposProduto?: TB_TIPO_PRODUTOListRelationFilter
  }, "SQ_CATEGORIA_PRODUTO" | "NO_CATEGORIA">

  export type TB_CATEGORIA_PRODUTOOrderByWithAggregationInput = {
    SQ_CATEGORIA_PRODUTO?: SortOrder
    NO_CATEGORIA?: SortOrder
    _count?: TB_CATEGORIA_PRODUTOCountOrderByAggregateInput
    _avg?: TB_CATEGORIA_PRODUTOAvgOrderByAggregateInput
    _max?: TB_CATEGORIA_PRODUTOMaxOrderByAggregateInput
    _min?: TB_CATEGORIA_PRODUTOMinOrderByAggregateInput
    _sum?: TB_CATEGORIA_PRODUTOSumOrderByAggregateInput
  }

  export type TB_CATEGORIA_PRODUTOScalarWhereWithAggregatesInput = {
    AND?: TB_CATEGORIA_PRODUTOScalarWhereWithAggregatesInput | TB_CATEGORIA_PRODUTOScalarWhereWithAggregatesInput[]
    OR?: TB_CATEGORIA_PRODUTOScalarWhereWithAggregatesInput[]
    NOT?: TB_CATEGORIA_PRODUTOScalarWhereWithAggregatesInput | TB_CATEGORIA_PRODUTOScalarWhereWithAggregatesInput[]
    SQ_CATEGORIA_PRODUTO?: IntWithAggregatesFilter<"TB_CATEGORIA_PRODUTO"> | number
    NO_CATEGORIA?: StringWithAggregatesFilter<"TB_CATEGORIA_PRODUTO"> | string
  }

  export type TB_QTD_PRODUTOWhereInput = {
    AND?: TB_QTD_PRODUTOWhereInput | TB_QTD_PRODUTOWhereInput[]
    OR?: TB_QTD_PRODUTOWhereInput[]
    NOT?: TB_QTD_PRODUTOWhereInput | TB_QTD_PRODUTOWhereInput[]
    SQ_QTD_PRODUTO?: IntFilter<"TB_QTD_PRODUTO"> | number
    SQ_PRODUTO?: IntFilter<"TB_QTD_PRODUTO"> | number
    SQ_TAMANHO_PRODUTO?: IntFilter<"TB_QTD_PRODUTO"> | number
    QTD_PRODUTO?: IntFilter<"TB_QTD_PRODUTO"> | number
    produto?: XOR<TB_PRODUTOScalarRelationFilter, TB_PRODUTOWhereInput>
    tamanhoProduto?: XOR<TB_TAMANHO_PRODUTOScalarRelationFilter, TB_TAMANHO_PRODUTOWhereInput>
  }

  export type TB_QTD_PRODUTOOrderByWithRelationInput = {
    SQ_QTD_PRODUTO?: SortOrder
    SQ_PRODUTO?: SortOrder
    SQ_TAMANHO_PRODUTO?: SortOrder
    QTD_PRODUTO?: SortOrder
    produto?: TB_PRODUTOOrderByWithRelationInput
    tamanhoProduto?: TB_TAMANHO_PRODUTOOrderByWithRelationInput
  }

  export type TB_QTD_PRODUTOWhereUniqueInput = Prisma.AtLeast<{
    SQ_QTD_PRODUTO?: number
    AND?: TB_QTD_PRODUTOWhereInput | TB_QTD_PRODUTOWhereInput[]
    OR?: TB_QTD_PRODUTOWhereInput[]
    NOT?: TB_QTD_PRODUTOWhereInput | TB_QTD_PRODUTOWhereInput[]
    SQ_PRODUTO?: IntFilter<"TB_QTD_PRODUTO"> | number
    SQ_TAMANHO_PRODUTO?: IntFilter<"TB_QTD_PRODUTO"> | number
    QTD_PRODUTO?: IntFilter<"TB_QTD_PRODUTO"> | number
    produto?: XOR<TB_PRODUTOScalarRelationFilter, TB_PRODUTOWhereInput>
    tamanhoProduto?: XOR<TB_TAMANHO_PRODUTOScalarRelationFilter, TB_TAMANHO_PRODUTOWhereInput>
  }, "SQ_QTD_PRODUTO">

  export type TB_QTD_PRODUTOOrderByWithAggregationInput = {
    SQ_QTD_PRODUTO?: SortOrder
    SQ_PRODUTO?: SortOrder
    SQ_TAMANHO_PRODUTO?: SortOrder
    QTD_PRODUTO?: SortOrder
    _count?: TB_QTD_PRODUTOCountOrderByAggregateInput
    _avg?: TB_QTD_PRODUTOAvgOrderByAggregateInput
    _max?: TB_QTD_PRODUTOMaxOrderByAggregateInput
    _min?: TB_QTD_PRODUTOMinOrderByAggregateInput
    _sum?: TB_QTD_PRODUTOSumOrderByAggregateInput
  }

  export type TB_QTD_PRODUTOScalarWhereWithAggregatesInput = {
    AND?: TB_QTD_PRODUTOScalarWhereWithAggregatesInput | TB_QTD_PRODUTOScalarWhereWithAggregatesInput[]
    OR?: TB_QTD_PRODUTOScalarWhereWithAggregatesInput[]
    NOT?: TB_QTD_PRODUTOScalarWhereWithAggregatesInput | TB_QTD_PRODUTOScalarWhereWithAggregatesInput[]
    SQ_QTD_PRODUTO?: IntWithAggregatesFilter<"TB_QTD_PRODUTO"> | number
    SQ_PRODUTO?: IntWithAggregatesFilter<"TB_QTD_PRODUTO"> | number
    SQ_TAMANHO_PRODUTO?: IntWithAggregatesFilter<"TB_QTD_PRODUTO"> | number
    QTD_PRODUTO?: IntWithAggregatesFilter<"TB_QTD_PRODUTO"> | number
  }

  export type TB_TAMANHO_PRODUTOWhereInput = {
    AND?: TB_TAMANHO_PRODUTOWhereInput | TB_TAMANHO_PRODUTOWhereInput[]
    OR?: TB_TAMANHO_PRODUTOWhereInput[]
    NOT?: TB_TAMANHO_PRODUTOWhereInput | TB_TAMANHO_PRODUTOWhereInput[]
    SQ_TAMANHO_PRODUTO?: IntFilter<"TB_TAMANHO_PRODUTO"> | number
    NO_CATEGORIA?: StringFilter<"TB_TAMANHO_PRODUTO"> | string
    qtdProdutos?: TB_QTD_PRODUTOListRelationFilter
    itens?: TB_ITENSListRelationFilter
  }

  export type TB_TAMANHO_PRODUTOOrderByWithRelationInput = {
    SQ_TAMANHO_PRODUTO?: SortOrder
    NO_CATEGORIA?: SortOrder
    qtdProdutos?: TB_QTD_PRODUTOOrderByRelationAggregateInput
    itens?: TB_ITENSOrderByRelationAggregateInput
  }

  export type TB_TAMANHO_PRODUTOWhereUniqueInput = Prisma.AtLeast<{
    SQ_TAMANHO_PRODUTO?: number
    AND?: TB_TAMANHO_PRODUTOWhereInput | TB_TAMANHO_PRODUTOWhereInput[]
    OR?: TB_TAMANHO_PRODUTOWhereInput[]
    NOT?: TB_TAMANHO_PRODUTOWhereInput | TB_TAMANHO_PRODUTOWhereInput[]
    NO_CATEGORIA?: StringFilter<"TB_TAMANHO_PRODUTO"> | string
    qtdProdutos?: TB_QTD_PRODUTOListRelationFilter
    itens?: TB_ITENSListRelationFilter
  }, "SQ_TAMANHO_PRODUTO">

  export type TB_TAMANHO_PRODUTOOrderByWithAggregationInput = {
    SQ_TAMANHO_PRODUTO?: SortOrder
    NO_CATEGORIA?: SortOrder
    _count?: TB_TAMANHO_PRODUTOCountOrderByAggregateInput
    _avg?: TB_TAMANHO_PRODUTOAvgOrderByAggregateInput
    _max?: TB_TAMANHO_PRODUTOMaxOrderByAggregateInput
    _min?: TB_TAMANHO_PRODUTOMinOrderByAggregateInput
    _sum?: TB_TAMANHO_PRODUTOSumOrderByAggregateInput
  }

  export type TB_TAMANHO_PRODUTOScalarWhereWithAggregatesInput = {
    AND?: TB_TAMANHO_PRODUTOScalarWhereWithAggregatesInput | TB_TAMANHO_PRODUTOScalarWhereWithAggregatesInput[]
    OR?: TB_TAMANHO_PRODUTOScalarWhereWithAggregatesInput[]
    NOT?: TB_TAMANHO_PRODUTOScalarWhereWithAggregatesInput | TB_TAMANHO_PRODUTOScalarWhereWithAggregatesInput[]
    SQ_TAMANHO_PRODUTO?: IntWithAggregatesFilter<"TB_TAMANHO_PRODUTO"> | number
    NO_CATEGORIA?: StringWithAggregatesFilter<"TB_TAMANHO_PRODUTO"> | string
  }

  export type TB_CARRINHOWhereInput = {
    AND?: TB_CARRINHOWhereInput | TB_CARRINHOWhereInput[]
    OR?: TB_CARRINHOWhereInput[]
    NOT?: TB_CARRINHOWhereInput | TB_CARRINHOWhereInput[]
    SQ_CARRINHO?: IntFilter<"TB_CARRINHO"> | number
    SQ_USUARIO?: IntFilter<"TB_CARRINHO"> | number
    usuario?: XOR<TB_USUARIOScalarRelationFilter, TB_USUARIOWhereInput>
    itens?: TB_ITENSListRelationFilter
  }

  export type TB_CARRINHOOrderByWithRelationInput = {
    SQ_CARRINHO?: SortOrder
    SQ_USUARIO?: SortOrder
    usuario?: TB_USUARIOOrderByWithRelationInput
    itens?: TB_ITENSOrderByRelationAggregateInput
  }

  export type TB_CARRINHOWhereUniqueInput = Prisma.AtLeast<{
    SQ_CARRINHO?: number
    SQ_USUARIO?: number
    AND?: TB_CARRINHOWhereInput | TB_CARRINHOWhereInput[]
    OR?: TB_CARRINHOWhereInput[]
    NOT?: TB_CARRINHOWhereInput | TB_CARRINHOWhereInput[]
    usuario?: XOR<TB_USUARIOScalarRelationFilter, TB_USUARIOWhereInput>
    itens?: TB_ITENSListRelationFilter
  }, "SQ_CARRINHO" | "SQ_USUARIO">

  export type TB_CARRINHOOrderByWithAggregationInput = {
    SQ_CARRINHO?: SortOrder
    SQ_USUARIO?: SortOrder
    _count?: TB_CARRINHOCountOrderByAggregateInput
    _avg?: TB_CARRINHOAvgOrderByAggregateInput
    _max?: TB_CARRINHOMaxOrderByAggregateInput
    _min?: TB_CARRINHOMinOrderByAggregateInput
    _sum?: TB_CARRINHOSumOrderByAggregateInput
  }

  export type TB_CARRINHOScalarWhereWithAggregatesInput = {
    AND?: TB_CARRINHOScalarWhereWithAggregatesInput | TB_CARRINHOScalarWhereWithAggregatesInput[]
    OR?: TB_CARRINHOScalarWhereWithAggregatesInput[]
    NOT?: TB_CARRINHOScalarWhereWithAggregatesInput | TB_CARRINHOScalarWhereWithAggregatesInput[]
    SQ_CARRINHO?: IntWithAggregatesFilter<"TB_CARRINHO"> | number
    SQ_USUARIO?: IntWithAggregatesFilter<"TB_CARRINHO"> | number
  }

  export type TB_ITENSWhereInput = {
    AND?: TB_ITENSWhereInput | TB_ITENSWhereInput[]
    OR?: TB_ITENSWhereInput[]
    NOT?: TB_ITENSWhereInput | TB_ITENSWhereInput[]
    SQ_ITENS?: IntFilter<"TB_ITENS"> | number
    SQ_CARRINHO?: IntFilter<"TB_ITENS"> | number
    SQ_PRODUTO?: IntFilter<"TB_ITENS"> | number
    SQ_TAMANHO_PRODUTO?: IntFilter<"TB_ITENS"> | number
    QTD_PRODUTO?: IntFilter<"TB_ITENS"> | number
    carrinho?: XOR<TB_CARRINHOScalarRelationFilter, TB_CARRINHOWhereInput>
    produto?: XOR<TB_PRODUTOScalarRelationFilter, TB_PRODUTOWhereInput>
    tamanhoProduto?: XOR<TB_TAMANHO_PRODUTOScalarRelationFilter, TB_TAMANHO_PRODUTOWhereInput>
  }

  export type TB_ITENSOrderByWithRelationInput = {
    SQ_ITENS?: SortOrder
    SQ_CARRINHO?: SortOrder
    SQ_PRODUTO?: SortOrder
    SQ_TAMANHO_PRODUTO?: SortOrder
    QTD_PRODUTO?: SortOrder
    carrinho?: TB_CARRINHOOrderByWithRelationInput
    produto?: TB_PRODUTOOrderByWithRelationInput
    tamanhoProduto?: TB_TAMANHO_PRODUTOOrderByWithRelationInput
  }

  export type TB_ITENSWhereUniqueInput = Prisma.AtLeast<{
    SQ_ITENS?: number
    AND?: TB_ITENSWhereInput | TB_ITENSWhereInput[]
    OR?: TB_ITENSWhereInput[]
    NOT?: TB_ITENSWhereInput | TB_ITENSWhereInput[]
    SQ_CARRINHO?: IntFilter<"TB_ITENS"> | number
    SQ_PRODUTO?: IntFilter<"TB_ITENS"> | number
    SQ_TAMANHO_PRODUTO?: IntFilter<"TB_ITENS"> | number
    QTD_PRODUTO?: IntFilter<"TB_ITENS"> | number
    carrinho?: XOR<TB_CARRINHOScalarRelationFilter, TB_CARRINHOWhereInput>
    produto?: XOR<TB_PRODUTOScalarRelationFilter, TB_PRODUTOWhereInput>
    tamanhoProduto?: XOR<TB_TAMANHO_PRODUTOScalarRelationFilter, TB_TAMANHO_PRODUTOWhereInput>
  }, "SQ_ITENS">

  export type TB_ITENSOrderByWithAggregationInput = {
    SQ_ITENS?: SortOrder
    SQ_CARRINHO?: SortOrder
    SQ_PRODUTO?: SortOrder
    SQ_TAMANHO_PRODUTO?: SortOrder
    QTD_PRODUTO?: SortOrder
    _count?: TB_ITENSCountOrderByAggregateInput
    _avg?: TB_ITENSAvgOrderByAggregateInput
    _max?: TB_ITENSMaxOrderByAggregateInput
    _min?: TB_ITENSMinOrderByAggregateInput
    _sum?: TB_ITENSSumOrderByAggregateInput
  }

  export type TB_ITENSScalarWhereWithAggregatesInput = {
    AND?: TB_ITENSScalarWhereWithAggregatesInput | TB_ITENSScalarWhereWithAggregatesInput[]
    OR?: TB_ITENSScalarWhereWithAggregatesInput[]
    NOT?: TB_ITENSScalarWhereWithAggregatesInput | TB_ITENSScalarWhereWithAggregatesInput[]
    SQ_ITENS?: IntWithAggregatesFilter<"TB_ITENS"> | number
    SQ_CARRINHO?: IntWithAggregatesFilter<"TB_ITENS"> | number
    SQ_PRODUTO?: IntWithAggregatesFilter<"TB_ITENS"> | number
    SQ_TAMANHO_PRODUTO?: IntWithAggregatesFilter<"TB_ITENS"> | number
    QTD_PRODUTO?: IntWithAggregatesFilter<"TB_ITENS"> | number
  }

  export type TB_USUARIOCreateInput = {
    TP_USUARIO?: number
    ST_USUARIO: number
    NO_USUARIO: string
    EMAIL_USUARIO: string
    SENHA_USUARIO: string
    DT_CRIACAO?: Date | string
    DT_EDITADO?: Date | string
    carrinho?: TB_CARRINHOCreateNestedOneWithoutUsuarioInput
    tipoUsuario?: TB_TIPO_USUARIOCreateNestedOneWithoutUsuarioInput
  }

  export type TB_USUARIOUncheckedCreateInput = {
    SQ_USUARIO?: number
    TP_USUARIO?: number
    ST_USUARIO: number
    NO_USUARIO: string
    EMAIL_USUARIO: string
    SENHA_USUARIO: string
    DT_CRIACAO?: Date | string
    DT_EDITADO?: Date | string
    carrinho?: TB_CARRINHOUncheckedCreateNestedOneWithoutUsuarioInput
    tipoUsuario?: TB_TIPO_USUARIOUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type TB_USUARIOUpdateInput = {
    TP_USUARIO?: IntFieldUpdateOperationsInput | number
    ST_USUARIO?: IntFieldUpdateOperationsInput | number
    NO_USUARIO?: StringFieldUpdateOperationsInput | string
    EMAIL_USUARIO?: StringFieldUpdateOperationsInput | string
    SENHA_USUARIO?: StringFieldUpdateOperationsInput | string
    DT_CRIACAO?: DateTimeFieldUpdateOperationsInput | Date | string
    DT_EDITADO?: DateTimeFieldUpdateOperationsInput | Date | string
    carrinho?: TB_CARRINHOUpdateOneWithoutUsuarioNestedInput
    tipoUsuario?: TB_TIPO_USUARIOUpdateOneWithoutUsuarioNestedInput
  }

  export type TB_USUARIOUncheckedUpdateInput = {
    SQ_USUARIO?: IntFieldUpdateOperationsInput | number
    TP_USUARIO?: IntFieldUpdateOperationsInput | number
    ST_USUARIO?: IntFieldUpdateOperationsInput | number
    NO_USUARIO?: StringFieldUpdateOperationsInput | string
    EMAIL_USUARIO?: StringFieldUpdateOperationsInput | string
    SENHA_USUARIO?: StringFieldUpdateOperationsInput | string
    DT_CRIACAO?: DateTimeFieldUpdateOperationsInput | Date | string
    DT_EDITADO?: DateTimeFieldUpdateOperationsInput | Date | string
    carrinho?: TB_CARRINHOUncheckedUpdateOneWithoutUsuarioNestedInput
    tipoUsuario?: TB_TIPO_USUARIOUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type TB_USUARIOCreateManyInput = {
    SQ_USUARIO?: number
    TP_USUARIO?: number
    ST_USUARIO: number
    NO_USUARIO: string
    EMAIL_USUARIO: string
    SENHA_USUARIO: string
    DT_CRIACAO?: Date | string
    DT_EDITADO?: Date | string
  }

  export type TB_USUARIOUpdateManyMutationInput = {
    TP_USUARIO?: IntFieldUpdateOperationsInput | number
    ST_USUARIO?: IntFieldUpdateOperationsInput | number
    NO_USUARIO?: StringFieldUpdateOperationsInput | string
    EMAIL_USUARIO?: StringFieldUpdateOperationsInput | string
    SENHA_USUARIO?: StringFieldUpdateOperationsInput | string
    DT_CRIACAO?: DateTimeFieldUpdateOperationsInput | Date | string
    DT_EDITADO?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TB_USUARIOUncheckedUpdateManyInput = {
    SQ_USUARIO?: IntFieldUpdateOperationsInput | number
    TP_USUARIO?: IntFieldUpdateOperationsInput | number
    ST_USUARIO?: IntFieldUpdateOperationsInput | number
    NO_USUARIO?: StringFieldUpdateOperationsInput | string
    EMAIL_USUARIO?: StringFieldUpdateOperationsInput | string
    SENHA_USUARIO?: StringFieldUpdateOperationsInput | string
    DT_CRIACAO?: DateTimeFieldUpdateOperationsInput | Date | string
    DT_EDITADO?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TB_TIPO_USUARIOCreateInput = {
    usuario: TB_USUARIOCreateNestedOneWithoutTipoUsuarioInput
    categoriaUsuario: TB_CATEGORIA_USUARIOCreateNestedOneWithoutTiposUsuarioInput
  }

  export type TB_TIPO_USUARIOUncheckedCreateInput = {
    SQ_TIPO_USUARIO?: number
    SQ_USUARIO: number
    SQ_CATEGORIA_USUARIO: number
  }

  export type TB_TIPO_USUARIOUpdateInput = {
    usuario?: TB_USUARIOUpdateOneRequiredWithoutTipoUsuarioNestedInput
    categoriaUsuario?: TB_CATEGORIA_USUARIOUpdateOneRequiredWithoutTiposUsuarioNestedInput
  }

  export type TB_TIPO_USUARIOUncheckedUpdateInput = {
    SQ_TIPO_USUARIO?: IntFieldUpdateOperationsInput | number
    SQ_USUARIO?: IntFieldUpdateOperationsInput | number
    SQ_CATEGORIA_USUARIO?: IntFieldUpdateOperationsInput | number
  }

  export type TB_TIPO_USUARIOCreateManyInput = {
    SQ_TIPO_USUARIO?: number
    SQ_USUARIO: number
    SQ_CATEGORIA_USUARIO: number
  }

  export type TB_TIPO_USUARIOUpdateManyMutationInput = {

  }

  export type TB_TIPO_USUARIOUncheckedUpdateManyInput = {
    SQ_TIPO_USUARIO?: IntFieldUpdateOperationsInput | number
    SQ_USUARIO?: IntFieldUpdateOperationsInput | number
    SQ_CATEGORIA_USUARIO?: IntFieldUpdateOperationsInput | number
  }

  export type TB_CATEGORIA_USUARIOCreateInput = {
    NO_CATEGORIA: string
    tiposUsuario?: TB_TIPO_USUARIOCreateNestedManyWithoutCategoriaUsuarioInput
  }

  export type TB_CATEGORIA_USUARIOUncheckedCreateInput = {
    SQ_CATEGORIA_USUARIO?: number
    NO_CATEGORIA: string
    tiposUsuario?: TB_TIPO_USUARIOUncheckedCreateNestedManyWithoutCategoriaUsuarioInput
  }

  export type TB_CATEGORIA_USUARIOUpdateInput = {
    NO_CATEGORIA?: StringFieldUpdateOperationsInput | string
    tiposUsuario?: TB_TIPO_USUARIOUpdateManyWithoutCategoriaUsuarioNestedInput
  }

  export type TB_CATEGORIA_USUARIOUncheckedUpdateInput = {
    SQ_CATEGORIA_USUARIO?: IntFieldUpdateOperationsInput | number
    NO_CATEGORIA?: StringFieldUpdateOperationsInput | string
    tiposUsuario?: TB_TIPO_USUARIOUncheckedUpdateManyWithoutCategoriaUsuarioNestedInput
  }

  export type TB_CATEGORIA_USUARIOCreateManyInput = {
    SQ_CATEGORIA_USUARIO?: number
    NO_CATEGORIA: string
  }

  export type TB_CATEGORIA_USUARIOUpdateManyMutationInput = {
    NO_CATEGORIA?: StringFieldUpdateOperationsInput | string
  }

  export type TB_CATEGORIA_USUARIOUncheckedUpdateManyInput = {
    SQ_CATEGORIA_USUARIO?: IntFieldUpdateOperationsInput | number
    NO_CATEGORIA?: StringFieldUpdateOperationsInput | string
  }

  export type TB_PRODUTOCreateInput = {
    ST_PRODUTO: number
    NO_PRODUTO: string
    DT_CRIACAO?: Date | string
    DT_EDITADO?: Date | string
    tiposProduto?: TB_TIPO_PRODUTOCreateNestedManyWithoutProdutoInput
    quantidades?: TB_QTD_PRODUTOCreateNestedManyWithoutProdutoInput
    itens?: TB_ITENSCreateNestedManyWithoutProdutoInput
  }

  export type TB_PRODUTOUncheckedCreateInput = {
    SQ_PRODUTO?: number
    ST_PRODUTO: number
    NO_PRODUTO: string
    DT_CRIACAO?: Date | string
    DT_EDITADO?: Date | string
    tiposProduto?: TB_TIPO_PRODUTOUncheckedCreateNestedManyWithoutProdutoInput
    quantidades?: TB_QTD_PRODUTOUncheckedCreateNestedManyWithoutProdutoInput
    itens?: TB_ITENSUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type TB_PRODUTOUpdateInput = {
    ST_PRODUTO?: IntFieldUpdateOperationsInput | number
    NO_PRODUTO?: StringFieldUpdateOperationsInput | string
    DT_CRIACAO?: DateTimeFieldUpdateOperationsInput | Date | string
    DT_EDITADO?: DateTimeFieldUpdateOperationsInput | Date | string
    tiposProduto?: TB_TIPO_PRODUTOUpdateManyWithoutProdutoNestedInput
    quantidades?: TB_QTD_PRODUTOUpdateManyWithoutProdutoNestedInput
    itens?: TB_ITENSUpdateManyWithoutProdutoNestedInput
  }

  export type TB_PRODUTOUncheckedUpdateInput = {
    SQ_PRODUTO?: IntFieldUpdateOperationsInput | number
    ST_PRODUTO?: IntFieldUpdateOperationsInput | number
    NO_PRODUTO?: StringFieldUpdateOperationsInput | string
    DT_CRIACAO?: DateTimeFieldUpdateOperationsInput | Date | string
    DT_EDITADO?: DateTimeFieldUpdateOperationsInput | Date | string
    tiposProduto?: TB_TIPO_PRODUTOUncheckedUpdateManyWithoutProdutoNestedInput
    quantidades?: TB_QTD_PRODUTOUncheckedUpdateManyWithoutProdutoNestedInput
    itens?: TB_ITENSUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type TB_PRODUTOCreateManyInput = {
    SQ_PRODUTO?: number
    ST_PRODUTO: number
    NO_PRODUTO: string
    DT_CRIACAO?: Date | string
    DT_EDITADO?: Date | string
  }

  export type TB_PRODUTOUpdateManyMutationInput = {
    ST_PRODUTO?: IntFieldUpdateOperationsInput | number
    NO_PRODUTO?: StringFieldUpdateOperationsInput | string
    DT_CRIACAO?: DateTimeFieldUpdateOperationsInput | Date | string
    DT_EDITADO?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TB_PRODUTOUncheckedUpdateManyInput = {
    SQ_PRODUTO?: IntFieldUpdateOperationsInput | number
    ST_PRODUTO?: IntFieldUpdateOperationsInput | number
    NO_PRODUTO?: StringFieldUpdateOperationsInput | string
    DT_CRIACAO?: DateTimeFieldUpdateOperationsInput | Date | string
    DT_EDITADO?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TB_TIPO_PRODUTOCreateInput = {
    produto: TB_PRODUTOCreateNestedOneWithoutTiposProdutoInput
    categoriaProduto: TB_CATEGORIA_PRODUTOCreateNestedOneWithoutTiposProdutoInput
  }

  export type TB_TIPO_PRODUTOUncheckedCreateInput = {
    SQ_TIPO_PRODUTO?: number
    SQ_PRODUTO: number
    SQ_CATEGORIA_PRODUTO: number
  }

  export type TB_TIPO_PRODUTOUpdateInput = {
    produto?: TB_PRODUTOUpdateOneRequiredWithoutTiposProdutoNestedInput
    categoriaProduto?: TB_CATEGORIA_PRODUTOUpdateOneRequiredWithoutTiposProdutoNestedInput
  }

  export type TB_TIPO_PRODUTOUncheckedUpdateInput = {
    SQ_TIPO_PRODUTO?: IntFieldUpdateOperationsInput | number
    SQ_PRODUTO?: IntFieldUpdateOperationsInput | number
    SQ_CATEGORIA_PRODUTO?: IntFieldUpdateOperationsInput | number
  }

  export type TB_TIPO_PRODUTOCreateManyInput = {
    SQ_TIPO_PRODUTO?: number
    SQ_PRODUTO: number
    SQ_CATEGORIA_PRODUTO: number
  }

  export type TB_TIPO_PRODUTOUpdateManyMutationInput = {

  }

  export type TB_TIPO_PRODUTOUncheckedUpdateManyInput = {
    SQ_TIPO_PRODUTO?: IntFieldUpdateOperationsInput | number
    SQ_PRODUTO?: IntFieldUpdateOperationsInput | number
    SQ_CATEGORIA_PRODUTO?: IntFieldUpdateOperationsInput | number
  }

  export type TB_CATEGORIA_PRODUTOCreateInput = {
    NO_CATEGORIA: string
    tiposProduto?: TB_TIPO_PRODUTOCreateNestedManyWithoutCategoriaProdutoInput
  }

  export type TB_CATEGORIA_PRODUTOUncheckedCreateInput = {
    SQ_CATEGORIA_PRODUTO?: number
    NO_CATEGORIA: string
    tiposProduto?: TB_TIPO_PRODUTOUncheckedCreateNestedManyWithoutCategoriaProdutoInput
  }

  export type TB_CATEGORIA_PRODUTOUpdateInput = {
    NO_CATEGORIA?: StringFieldUpdateOperationsInput | string
    tiposProduto?: TB_TIPO_PRODUTOUpdateManyWithoutCategoriaProdutoNestedInput
  }

  export type TB_CATEGORIA_PRODUTOUncheckedUpdateInput = {
    SQ_CATEGORIA_PRODUTO?: IntFieldUpdateOperationsInput | number
    NO_CATEGORIA?: StringFieldUpdateOperationsInput | string
    tiposProduto?: TB_TIPO_PRODUTOUncheckedUpdateManyWithoutCategoriaProdutoNestedInput
  }

  export type TB_CATEGORIA_PRODUTOCreateManyInput = {
    SQ_CATEGORIA_PRODUTO?: number
    NO_CATEGORIA: string
  }

  export type TB_CATEGORIA_PRODUTOUpdateManyMutationInput = {
    NO_CATEGORIA?: StringFieldUpdateOperationsInput | string
  }

  export type TB_CATEGORIA_PRODUTOUncheckedUpdateManyInput = {
    SQ_CATEGORIA_PRODUTO?: IntFieldUpdateOperationsInput | number
    NO_CATEGORIA?: StringFieldUpdateOperationsInput | string
  }

  export type TB_QTD_PRODUTOCreateInput = {
    QTD_PRODUTO: number
    produto: TB_PRODUTOCreateNestedOneWithoutQuantidadesInput
    tamanhoProduto: TB_TAMANHO_PRODUTOCreateNestedOneWithoutQtdProdutosInput
  }

  export type TB_QTD_PRODUTOUncheckedCreateInput = {
    SQ_QTD_PRODUTO?: number
    SQ_PRODUTO: number
    SQ_TAMANHO_PRODUTO: number
    QTD_PRODUTO: number
  }

  export type TB_QTD_PRODUTOUpdateInput = {
    QTD_PRODUTO?: IntFieldUpdateOperationsInput | number
    produto?: TB_PRODUTOUpdateOneRequiredWithoutQuantidadesNestedInput
    tamanhoProduto?: TB_TAMANHO_PRODUTOUpdateOneRequiredWithoutQtdProdutosNestedInput
  }

  export type TB_QTD_PRODUTOUncheckedUpdateInput = {
    SQ_QTD_PRODUTO?: IntFieldUpdateOperationsInput | number
    SQ_PRODUTO?: IntFieldUpdateOperationsInput | number
    SQ_TAMANHO_PRODUTO?: IntFieldUpdateOperationsInput | number
    QTD_PRODUTO?: IntFieldUpdateOperationsInput | number
  }

  export type TB_QTD_PRODUTOCreateManyInput = {
    SQ_QTD_PRODUTO?: number
    SQ_PRODUTO: number
    SQ_TAMANHO_PRODUTO: number
    QTD_PRODUTO: number
  }

  export type TB_QTD_PRODUTOUpdateManyMutationInput = {
    QTD_PRODUTO?: IntFieldUpdateOperationsInput | number
  }

  export type TB_QTD_PRODUTOUncheckedUpdateManyInput = {
    SQ_QTD_PRODUTO?: IntFieldUpdateOperationsInput | number
    SQ_PRODUTO?: IntFieldUpdateOperationsInput | number
    SQ_TAMANHO_PRODUTO?: IntFieldUpdateOperationsInput | number
    QTD_PRODUTO?: IntFieldUpdateOperationsInput | number
  }

  export type TB_TAMANHO_PRODUTOCreateInput = {
    NO_CATEGORIA: string
    qtdProdutos?: TB_QTD_PRODUTOCreateNestedManyWithoutTamanhoProdutoInput
    itens?: TB_ITENSCreateNestedManyWithoutTamanhoProdutoInput
  }

  export type TB_TAMANHO_PRODUTOUncheckedCreateInput = {
    SQ_TAMANHO_PRODUTO?: number
    NO_CATEGORIA: string
    qtdProdutos?: TB_QTD_PRODUTOUncheckedCreateNestedManyWithoutTamanhoProdutoInput
    itens?: TB_ITENSUncheckedCreateNestedManyWithoutTamanhoProdutoInput
  }

  export type TB_TAMANHO_PRODUTOUpdateInput = {
    NO_CATEGORIA?: StringFieldUpdateOperationsInput | string
    qtdProdutos?: TB_QTD_PRODUTOUpdateManyWithoutTamanhoProdutoNestedInput
    itens?: TB_ITENSUpdateManyWithoutTamanhoProdutoNestedInput
  }

  export type TB_TAMANHO_PRODUTOUncheckedUpdateInput = {
    SQ_TAMANHO_PRODUTO?: IntFieldUpdateOperationsInput | number
    NO_CATEGORIA?: StringFieldUpdateOperationsInput | string
    qtdProdutos?: TB_QTD_PRODUTOUncheckedUpdateManyWithoutTamanhoProdutoNestedInput
    itens?: TB_ITENSUncheckedUpdateManyWithoutTamanhoProdutoNestedInput
  }

  export type TB_TAMANHO_PRODUTOCreateManyInput = {
    SQ_TAMANHO_PRODUTO?: number
    NO_CATEGORIA: string
  }

  export type TB_TAMANHO_PRODUTOUpdateManyMutationInput = {
    NO_CATEGORIA?: StringFieldUpdateOperationsInput | string
  }

  export type TB_TAMANHO_PRODUTOUncheckedUpdateManyInput = {
    SQ_TAMANHO_PRODUTO?: IntFieldUpdateOperationsInput | number
    NO_CATEGORIA?: StringFieldUpdateOperationsInput | string
  }

  export type TB_CARRINHOCreateInput = {
    usuario: TB_USUARIOCreateNestedOneWithoutCarrinhoInput
    itens?: TB_ITENSCreateNestedManyWithoutCarrinhoInput
  }

  export type TB_CARRINHOUncheckedCreateInput = {
    SQ_CARRINHO?: number
    SQ_USUARIO: number
    itens?: TB_ITENSUncheckedCreateNestedManyWithoutCarrinhoInput
  }

  export type TB_CARRINHOUpdateInput = {
    usuario?: TB_USUARIOUpdateOneRequiredWithoutCarrinhoNestedInput
    itens?: TB_ITENSUpdateManyWithoutCarrinhoNestedInput
  }

  export type TB_CARRINHOUncheckedUpdateInput = {
    SQ_CARRINHO?: IntFieldUpdateOperationsInput | number
    SQ_USUARIO?: IntFieldUpdateOperationsInput | number
    itens?: TB_ITENSUncheckedUpdateManyWithoutCarrinhoNestedInput
  }

  export type TB_CARRINHOCreateManyInput = {
    SQ_CARRINHO?: number
    SQ_USUARIO: number
  }

  export type TB_CARRINHOUpdateManyMutationInput = {

  }

  export type TB_CARRINHOUncheckedUpdateManyInput = {
    SQ_CARRINHO?: IntFieldUpdateOperationsInput | number
    SQ_USUARIO?: IntFieldUpdateOperationsInput | number
  }

  export type TB_ITENSCreateInput = {
    QTD_PRODUTO: number
    carrinho: TB_CARRINHOCreateNestedOneWithoutItensInput
    produto: TB_PRODUTOCreateNestedOneWithoutItensInput
    tamanhoProduto: TB_TAMANHO_PRODUTOCreateNestedOneWithoutItensInput
  }

  export type TB_ITENSUncheckedCreateInput = {
    SQ_ITENS?: number
    SQ_CARRINHO: number
    SQ_PRODUTO: number
    SQ_TAMANHO_PRODUTO: number
    QTD_PRODUTO: number
  }

  export type TB_ITENSUpdateInput = {
    QTD_PRODUTO?: IntFieldUpdateOperationsInput | number
    carrinho?: TB_CARRINHOUpdateOneRequiredWithoutItensNestedInput
    produto?: TB_PRODUTOUpdateOneRequiredWithoutItensNestedInput
    tamanhoProduto?: TB_TAMANHO_PRODUTOUpdateOneRequiredWithoutItensNestedInput
  }

  export type TB_ITENSUncheckedUpdateInput = {
    SQ_ITENS?: IntFieldUpdateOperationsInput | number
    SQ_CARRINHO?: IntFieldUpdateOperationsInput | number
    SQ_PRODUTO?: IntFieldUpdateOperationsInput | number
    SQ_TAMANHO_PRODUTO?: IntFieldUpdateOperationsInput | number
    QTD_PRODUTO?: IntFieldUpdateOperationsInput | number
  }

  export type TB_ITENSCreateManyInput = {
    SQ_ITENS?: number
    SQ_CARRINHO: number
    SQ_PRODUTO: number
    SQ_TAMANHO_PRODUTO: number
    QTD_PRODUTO: number
  }

  export type TB_ITENSUpdateManyMutationInput = {
    QTD_PRODUTO?: IntFieldUpdateOperationsInput | number
  }

  export type TB_ITENSUncheckedUpdateManyInput = {
    SQ_ITENS?: IntFieldUpdateOperationsInput | number
    SQ_CARRINHO?: IntFieldUpdateOperationsInput | number
    SQ_PRODUTO?: IntFieldUpdateOperationsInput | number
    SQ_TAMANHO_PRODUTO?: IntFieldUpdateOperationsInput | number
    QTD_PRODUTO?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TB_CARRINHONullableScalarRelationFilter = {
    is?: TB_CARRINHOWhereInput | null
    isNot?: TB_CARRINHOWhereInput | null
  }

  export type TB_TIPO_USUARIONullableScalarRelationFilter = {
    is?: TB_TIPO_USUARIOWhereInput | null
    isNot?: TB_TIPO_USUARIOWhereInput | null
  }

  export type TB_USUARIOCountOrderByAggregateInput = {
    SQ_USUARIO?: SortOrder
    TP_USUARIO?: SortOrder
    ST_USUARIO?: SortOrder
    NO_USUARIO?: SortOrder
    EMAIL_USUARIO?: SortOrder
    SENHA_USUARIO?: SortOrder
    DT_CRIACAO?: SortOrder
    DT_EDITADO?: SortOrder
  }

  export type TB_USUARIOAvgOrderByAggregateInput = {
    SQ_USUARIO?: SortOrder
    TP_USUARIO?: SortOrder
    ST_USUARIO?: SortOrder
  }

  export type TB_USUARIOMaxOrderByAggregateInput = {
    SQ_USUARIO?: SortOrder
    TP_USUARIO?: SortOrder
    ST_USUARIO?: SortOrder
    NO_USUARIO?: SortOrder
    EMAIL_USUARIO?: SortOrder
    SENHA_USUARIO?: SortOrder
    DT_CRIACAO?: SortOrder
    DT_EDITADO?: SortOrder
  }

  export type TB_USUARIOMinOrderByAggregateInput = {
    SQ_USUARIO?: SortOrder
    TP_USUARIO?: SortOrder
    ST_USUARIO?: SortOrder
    NO_USUARIO?: SortOrder
    EMAIL_USUARIO?: SortOrder
    SENHA_USUARIO?: SortOrder
    DT_CRIACAO?: SortOrder
    DT_EDITADO?: SortOrder
  }

  export type TB_USUARIOSumOrderByAggregateInput = {
    SQ_USUARIO?: SortOrder
    TP_USUARIO?: SortOrder
    ST_USUARIO?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TB_USUARIOScalarRelationFilter = {
    is?: TB_USUARIOWhereInput
    isNot?: TB_USUARIOWhereInput
  }

  export type TB_CATEGORIA_USUARIOScalarRelationFilter = {
    is?: TB_CATEGORIA_USUARIOWhereInput
    isNot?: TB_CATEGORIA_USUARIOWhereInput
  }

  export type TB_TIPO_USUARIOCountOrderByAggregateInput = {
    SQ_TIPO_USUARIO?: SortOrder
    SQ_USUARIO?: SortOrder
    SQ_CATEGORIA_USUARIO?: SortOrder
  }

  export type TB_TIPO_USUARIOAvgOrderByAggregateInput = {
    SQ_TIPO_USUARIO?: SortOrder
    SQ_USUARIO?: SortOrder
    SQ_CATEGORIA_USUARIO?: SortOrder
  }

  export type TB_TIPO_USUARIOMaxOrderByAggregateInput = {
    SQ_TIPO_USUARIO?: SortOrder
    SQ_USUARIO?: SortOrder
    SQ_CATEGORIA_USUARIO?: SortOrder
  }

  export type TB_TIPO_USUARIOMinOrderByAggregateInput = {
    SQ_TIPO_USUARIO?: SortOrder
    SQ_USUARIO?: SortOrder
    SQ_CATEGORIA_USUARIO?: SortOrder
  }

  export type TB_TIPO_USUARIOSumOrderByAggregateInput = {
    SQ_TIPO_USUARIO?: SortOrder
    SQ_USUARIO?: SortOrder
    SQ_CATEGORIA_USUARIO?: SortOrder
  }

  export type TB_TIPO_USUARIOListRelationFilter = {
    every?: TB_TIPO_USUARIOWhereInput
    some?: TB_TIPO_USUARIOWhereInput
    none?: TB_TIPO_USUARIOWhereInput
  }

  export type TB_TIPO_USUARIOOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TB_CATEGORIA_USUARIOCountOrderByAggregateInput = {
    SQ_CATEGORIA_USUARIO?: SortOrder
    NO_CATEGORIA?: SortOrder
  }

  export type TB_CATEGORIA_USUARIOAvgOrderByAggregateInput = {
    SQ_CATEGORIA_USUARIO?: SortOrder
  }

  export type TB_CATEGORIA_USUARIOMaxOrderByAggregateInput = {
    SQ_CATEGORIA_USUARIO?: SortOrder
    NO_CATEGORIA?: SortOrder
  }

  export type TB_CATEGORIA_USUARIOMinOrderByAggregateInput = {
    SQ_CATEGORIA_USUARIO?: SortOrder
    NO_CATEGORIA?: SortOrder
  }

  export type TB_CATEGORIA_USUARIOSumOrderByAggregateInput = {
    SQ_CATEGORIA_USUARIO?: SortOrder
  }

  export type TB_TIPO_PRODUTOListRelationFilter = {
    every?: TB_TIPO_PRODUTOWhereInput
    some?: TB_TIPO_PRODUTOWhereInput
    none?: TB_TIPO_PRODUTOWhereInput
  }

  export type TB_QTD_PRODUTOListRelationFilter = {
    every?: TB_QTD_PRODUTOWhereInput
    some?: TB_QTD_PRODUTOWhereInput
    none?: TB_QTD_PRODUTOWhereInput
  }

  export type TB_ITENSListRelationFilter = {
    every?: TB_ITENSWhereInput
    some?: TB_ITENSWhereInput
    none?: TB_ITENSWhereInput
  }

  export type TB_TIPO_PRODUTOOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TB_QTD_PRODUTOOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TB_ITENSOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TB_PRODUTOCountOrderByAggregateInput = {
    SQ_PRODUTO?: SortOrder
    ST_PRODUTO?: SortOrder
    NO_PRODUTO?: SortOrder
    DT_CRIACAO?: SortOrder
    DT_EDITADO?: SortOrder
  }

  export type TB_PRODUTOAvgOrderByAggregateInput = {
    SQ_PRODUTO?: SortOrder
    ST_PRODUTO?: SortOrder
  }

  export type TB_PRODUTOMaxOrderByAggregateInput = {
    SQ_PRODUTO?: SortOrder
    ST_PRODUTO?: SortOrder
    NO_PRODUTO?: SortOrder
    DT_CRIACAO?: SortOrder
    DT_EDITADO?: SortOrder
  }

  export type TB_PRODUTOMinOrderByAggregateInput = {
    SQ_PRODUTO?: SortOrder
    ST_PRODUTO?: SortOrder
    NO_PRODUTO?: SortOrder
    DT_CRIACAO?: SortOrder
    DT_EDITADO?: SortOrder
  }

  export type TB_PRODUTOSumOrderByAggregateInput = {
    SQ_PRODUTO?: SortOrder
    ST_PRODUTO?: SortOrder
  }

  export type TB_PRODUTOScalarRelationFilter = {
    is?: TB_PRODUTOWhereInput
    isNot?: TB_PRODUTOWhereInput
  }

  export type TB_CATEGORIA_PRODUTOScalarRelationFilter = {
    is?: TB_CATEGORIA_PRODUTOWhereInput
    isNot?: TB_CATEGORIA_PRODUTOWhereInput
  }

  export type TB_TIPO_PRODUTOCountOrderByAggregateInput = {
    SQ_TIPO_PRODUTO?: SortOrder
    SQ_PRODUTO?: SortOrder
    SQ_CATEGORIA_PRODUTO?: SortOrder
  }

  export type TB_TIPO_PRODUTOAvgOrderByAggregateInput = {
    SQ_TIPO_PRODUTO?: SortOrder
    SQ_PRODUTO?: SortOrder
    SQ_CATEGORIA_PRODUTO?: SortOrder
  }

  export type TB_TIPO_PRODUTOMaxOrderByAggregateInput = {
    SQ_TIPO_PRODUTO?: SortOrder
    SQ_PRODUTO?: SortOrder
    SQ_CATEGORIA_PRODUTO?: SortOrder
  }

  export type TB_TIPO_PRODUTOMinOrderByAggregateInput = {
    SQ_TIPO_PRODUTO?: SortOrder
    SQ_PRODUTO?: SortOrder
    SQ_CATEGORIA_PRODUTO?: SortOrder
  }

  export type TB_TIPO_PRODUTOSumOrderByAggregateInput = {
    SQ_TIPO_PRODUTO?: SortOrder
    SQ_PRODUTO?: SortOrder
    SQ_CATEGORIA_PRODUTO?: SortOrder
  }

  export type TB_CATEGORIA_PRODUTOCountOrderByAggregateInput = {
    SQ_CATEGORIA_PRODUTO?: SortOrder
    NO_CATEGORIA?: SortOrder
  }

  export type TB_CATEGORIA_PRODUTOAvgOrderByAggregateInput = {
    SQ_CATEGORIA_PRODUTO?: SortOrder
  }

  export type TB_CATEGORIA_PRODUTOMaxOrderByAggregateInput = {
    SQ_CATEGORIA_PRODUTO?: SortOrder
    NO_CATEGORIA?: SortOrder
  }

  export type TB_CATEGORIA_PRODUTOMinOrderByAggregateInput = {
    SQ_CATEGORIA_PRODUTO?: SortOrder
    NO_CATEGORIA?: SortOrder
  }

  export type TB_CATEGORIA_PRODUTOSumOrderByAggregateInput = {
    SQ_CATEGORIA_PRODUTO?: SortOrder
  }

  export type TB_TAMANHO_PRODUTOScalarRelationFilter = {
    is?: TB_TAMANHO_PRODUTOWhereInput
    isNot?: TB_TAMANHO_PRODUTOWhereInput
  }

  export type TB_QTD_PRODUTOCountOrderByAggregateInput = {
    SQ_QTD_PRODUTO?: SortOrder
    SQ_PRODUTO?: SortOrder
    SQ_TAMANHO_PRODUTO?: SortOrder
    QTD_PRODUTO?: SortOrder
  }

  export type TB_QTD_PRODUTOAvgOrderByAggregateInput = {
    SQ_QTD_PRODUTO?: SortOrder
    SQ_PRODUTO?: SortOrder
    SQ_TAMANHO_PRODUTO?: SortOrder
    QTD_PRODUTO?: SortOrder
  }

  export type TB_QTD_PRODUTOMaxOrderByAggregateInput = {
    SQ_QTD_PRODUTO?: SortOrder
    SQ_PRODUTO?: SortOrder
    SQ_TAMANHO_PRODUTO?: SortOrder
    QTD_PRODUTO?: SortOrder
  }

  export type TB_QTD_PRODUTOMinOrderByAggregateInput = {
    SQ_QTD_PRODUTO?: SortOrder
    SQ_PRODUTO?: SortOrder
    SQ_TAMANHO_PRODUTO?: SortOrder
    QTD_PRODUTO?: SortOrder
  }

  export type TB_QTD_PRODUTOSumOrderByAggregateInput = {
    SQ_QTD_PRODUTO?: SortOrder
    SQ_PRODUTO?: SortOrder
    SQ_TAMANHO_PRODUTO?: SortOrder
    QTD_PRODUTO?: SortOrder
  }

  export type TB_TAMANHO_PRODUTOCountOrderByAggregateInput = {
    SQ_TAMANHO_PRODUTO?: SortOrder
    NO_CATEGORIA?: SortOrder
  }

  export type TB_TAMANHO_PRODUTOAvgOrderByAggregateInput = {
    SQ_TAMANHO_PRODUTO?: SortOrder
  }

  export type TB_TAMANHO_PRODUTOMaxOrderByAggregateInput = {
    SQ_TAMANHO_PRODUTO?: SortOrder
    NO_CATEGORIA?: SortOrder
  }

  export type TB_TAMANHO_PRODUTOMinOrderByAggregateInput = {
    SQ_TAMANHO_PRODUTO?: SortOrder
    NO_CATEGORIA?: SortOrder
  }

  export type TB_TAMANHO_PRODUTOSumOrderByAggregateInput = {
    SQ_TAMANHO_PRODUTO?: SortOrder
  }

  export type TB_CARRINHOCountOrderByAggregateInput = {
    SQ_CARRINHO?: SortOrder
    SQ_USUARIO?: SortOrder
  }

  export type TB_CARRINHOAvgOrderByAggregateInput = {
    SQ_CARRINHO?: SortOrder
    SQ_USUARIO?: SortOrder
  }

  export type TB_CARRINHOMaxOrderByAggregateInput = {
    SQ_CARRINHO?: SortOrder
    SQ_USUARIO?: SortOrder
  }

  export type TB_CARRINHOMinOrderByAggregateInput = {
    SQ_CARRINHO?: SortOrder
    SQ_USUARIO?: SortOrder
  }

  export type TB_CARRINHOSumOrderByAggregateInput = {
    SQ_CARRINHO?: SortOrder
    SQ_USUARIO?: SortOrder
  }

  export type TB_CARRINHOScalarRelationFilter = {
    is?: TB_CARRINHOWhereInput
    isNot?: TB_CARRINHOWhereInput
  }

  export type TB_ITENSCountOrderByAggregateInput = {
    SQ_ITENS?: SortOrder
    SQ_CARRINHO?: SortOrder
    SQ_PRODUTO?: SortOrder
    SQ_TAMANHO_PRODUTO?: SortOrder
    QTD_PRODUTO?: SortOrder
  }

  export type TB_ITENSAvgOrderByAggregateInput = {
    SQ_ITENS?: SortOrder
    SQ_CARRINHO?: SortOrder
    SQ_PRODUTO?: SortOrder
    SQ_TAMANHO_PRODUTO?: SortOrder
    QTD_PRODUTO?: SortOrder
  }

  export type TB_ITENSMaxOrderByAggregateInput = {
    SQ_ITENS?: SortOrder
    SQ_CARRINHO?: SortOrder
    SQ_PRODUTO?: SortOrder
    SQ_TAMANHO_PRODUTO?: SortOrder
    QTD_PRODUTO?: SortOrder
  }

  export type TB_ITENSMinOrderByAggregateInput = {
    SQ_ITENS?: SortOrder
    SQ_CARRINHO?: SortOrder
    SQ_PRODUTO?: SortOrder
    SQ_TAMANHO_PRODUTO?: SortOrder
    QTD_PRODUTO?: SortOrder
  }

  export type TB_ITENSSumOrderByAggregateInput = {
    SQ_ITENS?: SortOrder
    SQ_CARRINHO?: SortOrder
    SQ_PRODUTO?: SortOrder
    SQ_TAMANHO_PRODUTO?: SortOrder
    QTD_PRODUTO?: SortOrder
  }

  export type TB_CARRINHOCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<TB_CARRINHOCreateWithoutUsuarioInput, TB_CARRINHOUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: TB_CARRINHOCreateOrConnectWithoutUsuarioInput
    connect?: TB_CARRINHOWhereUniqueInput
  }

  export type TB_TIPO_USUARIOCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<TB_TIPO_USUARIOCreateWithoutUsuarioInput, TB_TIPO_USUARIOUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: TB_TIPO_USUARIOCreateOrConnectWithoutUsuarioInput
    connect?: TB_TIPO_USUARIOWhereUniqueInput
  }

  export type TB_CARRINHOUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<TB_CARRINHOCreateWithoutUsuarioInput, TB_CARRINHOUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: TB_CARRINHOCreateOrConnectWithoutUsuarioInput
    connect?: TB_CARRINHOWhereUniqueInput
  }

  export type TB_TIPO_USUARIOUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<TB_TIPO_USUARIOCreateWithoutUsuarioInput, TB_TIPO_USUARIOUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: TB_TIPO_USUARIOCreateOrConnectWithoutUsuarioInput
    connect?: TB_TIPO_USUARIOWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TB_CARRINHOUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<TB_CARRINHOCreateWithoutUsuarioInput, TB_CARRINHOUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: TB_CARRINHOCreateOrConnectWithoutUsuarioInput
    upsert?: TB_CARRINHOUpsertWithoutUsuarioInput
    disconnect?: TB_CARRINHOWhereInput | boolean
    delete?: TB_CARRINHOWhereInput | boolean
    connect?: TB_CARRINHOWhereUniqueInput
    update?: XOR<XOR<TB_CARRINHOUpdateToOneWithWhereWithoutUsuarioInput, TB_CARRINHOUpdateWithoutUsuarioInput>, TB_CARRINHOUncheckedUpdateWithoutUsuarioInput>
  }

  export type TB_TIPO_USUARIOUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<TB_TIPO_USUARIOCreateWithoutUsuarioInput, TB_TIPO_USUARIOUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: TB_TIPO_USUARIOCreateOrConnectWithoutUsuarioInput
    upsert?: TB_TIPO_USUARIOUpsertWithoutUsuarioInput
    disconnect?: TB_TIPO_USUARIOWhereInput | boolean
    delete?: TB_TIPO_USUARIOWhereInput | boolean
    connect?: TB_TIPO_USUARIOWhereUniqueInput
    update?: XOR<XOR<TB_TIPO_USUARIOUpdateToOneWithWhereWithoutUsuarioInput, TB_TIPO_USUARIOUpdateWithoutUsuarioInput>, TB_TIPO_USUARIOUncheckedUpdateWithoutUsuarioInput>
  }

  export type TB_CARRINHOUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<TB_CARRINHOCreateWithoutUsuarioInput, TB_CARRINHOUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: TB_CARRINHOCreateOrConnectWithoutUsuarioInput
    upsert?: TB_CARRINHOUpsertWithoutUsuarioInput
    disconnect?: TB_CARRINHOWhereInput | boolean
    delete?: TB_CARRINHOWhereInput | boolean
    connect?: TB_CARRINHOWhereUniqueInput
    update?: XOR<XOR<TB_CARRINHOUpdateToOneWithWhereWithoutUsuarioInput, TB_CARRINHOUpdateWithoutUsuarioInput>, TB_CARRINHOUncheckedUpdateWithoutUsuarioInput>
  }

  export type TB_TIPO_USUARIOUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<TB_TIPO_USUARIOCreateWithoutUsuarioInput, TB_TIPO_USUARIOUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: TB_TIPO_USUARIOCreateOrConnectWithoutUsuarioInput
    upsert?: TB_TIPO_USUARIOUpsertWithoutUsuarioInput
    disconnect?: TB_TIPO_USUARIOWhereInput | boolean
    delete?: TB_TIPO_USUARIOWhereInput | boolean
    connect?: TB_TIPO_USUARIOWhereUniqueInput
    update?: XOR<XOR<TB_TIPO_USUARIOUpdateToOneWithWhereWithoutUsuarioInput, TB_TIPO_USUARIOUpdateWithoutUsuarioInput>, TB_TIPO_USUARIOUncheckedUpdateWithoutUsuarioInput>
  }

  export type TB_USUARIOCreateNestedOneWithoutTipoUsuarioInput = {
    create?: XOR<TB_USUARIOCreateWithoutTipoUsuarioInput, TB_USUARIOUncheckedCreateWithoutTipoUsuarioInput>
    connectOrCreate?: TB_USUARIOCreateOrConnectWithoutTipoUsuarioInput
    connect?: TB_USUARIOWhereUniqueInput
  }

  export type TB_CATEGORIA_USUARIOCreateNestedOneWithoutTiposUsuarioInput = {
    create?: XOR<TB_CATEGORIA_USUARIOCreateWithoutTiposUsuarioInput, TB_CATEGORIA_USUARIOUncheckedCreateWithoutTiposUsuarioInput>
    connectOrCreate?: TB_CATEGORIA_USUARIOCreateOrConnectWithoutTiposUsuarioInput
    connect?: TB_CATEGORIA_USUARIOWhereUniqueInput
  }

  export type TB_USUARIOUpdateOneRequiredWithoutTipoUsuarioNestedInput = {
    create?: XOR<TB_USUARIOCreateWithoutTipoUsuarioInput, TB_USUARIOUncheckedCreateWithoutTipoUsuarioInput>
    connectOrCreate?: TB_USUARIOCreateOrConnectWithoutTipoUsuarioInput
    upsert?: TB_USUARIOUpsertWithoutTipoUsuarioInput
    connect?: TB_USUARIOWhereUniqueInput
    update?: XOR<XOR<TB_USUARIOUpdateToOneWithWhereWithoutTipoUsuarioInput, TB_USUARIOUpdateWithoutTipoUsuarioInput>, TB_USUARIOUncheckedUpdateWithoutTipoUsuarioInput>
  }

  export type TB_CATEGORIA_USUARIOUpdateOneRequiredWithoutTiposUsuarioNestedInput = {
    create?: XOR<TB_CATEGORIA_USUARIOCreateWithoutTiposUsuarioInput, TB_CATEGORIA_USUARIOUncheckedCreateWithoutTiposUsuarioInput>
    connectOrCreate?: TB_CATEGORIA_USUARIOCreateOrConnectWithoutTiposUsuarioInput
    upsert?: TB_CATEGORIA_USUARIOUpsertWithoutTiposUsuarioInput
    connect?: TB_CATEGORIA_USUARIOWhereUniqueInput
    update?: XOR<XOR<TB_CATEGORIA_USUARIOUpdateToOneWithWhereWithoutTiposUsuarioInput, TB_CATEGORIA_USUARIOUpdateWithoutTiposUsuarioInput>, TB_CATEGORIA_USUARIOUncheckedUpdateWithoutTiposUsuarioInput>
  }

  export type TB_TIPO_USUARIOCreateNestedManyWithoutCategoriaUsuarioInput = {
    create?: XOR<TB_TIPO_USUARIOCreateWithoutCategoriaUsuarioInput, TB_TIPO_USUARIOUncheckedCreateWithoutCategoriaUsuarioInput> | TB_TIPO_USUARIOCreateWithoutCategoriaUsuarioInput[] | TB_TIPO_USUARIOUncheckedCreateWithoutCategoriaUsuarioInput[]
    connectOrCreate?: TB_TIPO_USUARIOCreateOrConnectWithoutCategoriaUsuarioInput | TB_TIPO_USUARIOCreateOrConnectWithoutCategoriaUsuarioInput[]
    createMany?: TB_TIPO_USUARIOCreateManyCategoriaUsuarioInputEnvelope
    connect?: TB_TIPO_USUARIOWhereUniqueInput | TB_TIPO_USUARIOWhereUniqueInput[]
  }

  export type TB_TIPO_USUARIOUncheckedCreateNestedManyWithoutCategoriaUsuarioInput = {
    create?: XOR<TB_TIPO_USUARIOCreateWithoutCategoriaUsuarioInput, TB_TIPO_USUARIOUncheckedCreateWithoutCategoriaUsuarioInput> | TB_TIPO_USUARIOCreateWithoutCategoriaUsuarioInput[] | TB_TIPO_USUARIOUncheckedCreateWithoutCategoriaUsuarioInput[]
    connectOrCreate?: TB_TIPO_USUARIOCreateOrConnectWithoutCategoriaUsuarioInput | TB_TIPO_USUARIOCreateOrConnectWithoutCategoriaUsuarioInput[]
    createMany?: TB_TIPO_USUARIOCreateManyCategoriaUsuarioInputEnvelope
    connect?: TB_TIPO_USUARIOWhereUniqueInput | TB_TIPO_USUARIOWhereUniqueInput[]
  }

  export type TB_TIPO_USUARIOUpdateManyWithoutCategoriaUsuarioNestedInput = {
    create?: XOR<TB_TIPO_USUARIOCreateWithoutCategoriaUsuarioInput, TB_TIPO_USUARIOUncheckedCreateWithoutCategoriaUsuarioInput> | TB_TIPO_USUARIOCreateWithoutCategoriaUsuarioInput[] | TB_TIPO_USUARIOUncheckedCreateWithoutCategoriaUsuarioInput[]
    connectOrCreate?: TB_TIPO_USUARIOCreateOrConnectWithoutCategoriaUsuarioInput | TB_TIPO_USUARIOCreateOrConnectWithoutCategoriaUsuarioInput[]
    upsert?: TB_TIPO_USUARIOUpsertWithWhereUniqueWithoutCategoriaUsuarioInput | TB_TIPO_USUARIOUpsertWithWhereUniqueWithoutCategoriaUsuarioInput[]
    createMany?: TB_TIPO_USUARIOCreateManyCategoriaUsuarioInputEnvelope
    set?: TB_TIPO_USUARIOWhereUniqueInput | TB_TIPO_USUARIOWhereUniqueInput[]
    disconnect?: TB_TIPO_USUARIOWhereUniqueInput | TB_TIPO_USUARIOWhereUniqueInput[]
    delete?: TB_TIPO_USUARIOWhereUniqueInput | TB_TIPO_USUARIOWhereUniqueInput[]
    connect?: TB_TIPO_USUARIOWhereUniqueInput | TB_TIPO_USUARIOWhereUniqueInput[]
    update?: TB_TIPO_USUARIOUpdateWithWhereUniqueWithoutCategoriaUsuarioInput | TB_TIPO_USUARIOUpdateWithWhereUniqueWithoutCategoriaUsuarioInput[]
    updateMany?: TB_TIPO_USUARIOUpdateManyWithWhereWithoutCategoriaUsuarioInput | TB_TIPO_USUARIOUpdateManyWithWhereWithoutCategoriaUsuarioInput[]
    deleteMany?: TB_TIPO_USUARIOScalarWhereInput | TB_TIPO_USUARIOScalarWhereInput[]
  }

  export type TB_TIPO_USUARIOUncheckedUpdateManyWithoutCategoriaUsuarioNestedInput = {
    create?: XOR<TB_TIPO_USUARIOCreateWithoutCategoriaUsuarioInput, TB_TIPO_USUARIOUncheckedCreateWithoutCategoriaUsuarioInput> | TB_TIPO_USUARIOCreateWithoutCategoriaUsuarioInput[] | TB_TIPO_USUARIOUncheckedCreateWithoutCategoriaUsuarioInput[]
    connectOrCreate?: TB_TIPO_USUARIOCreateOrConnectWithoutCategoriaUsuarioInput | TB_TIPO_USUARIOCreateOrConnectWithoutCategoriaUsuarioInput[]
    upsert?: TB_TIPO_USUARIOUpsertWithWhereUniqueWithoutCategoriaUsuarioInput | TB_TIPO_USUARIOUpsertWithWhereUniqueWithoutCategoriaUsuarioInput[]
    createMany?: TB_TIPO_USUARIOCreateManyCategoriaUsuarioInputEnvelope
    set?: TB_TIPO_USUARIOWhereUniqueInput | TB_TIPO_USUARIOWhereUniqueInput[]
    disconnect?: TB_TIPO_USUARIOWhereUniqueInput | TB_TIPO_USUARIOWhereUniqueInput[]
    delete?: TB_TIPO_USUARIOWhereUniqueInput | TB_TIPO_USUARIOWhereUniqueInput[]
    connect?: TB_TIPO_USUARIOWhereUniqueInput | TB_TIPO_USUARIOWhereUniqueInput[]
    update?: TB_TIPO_USUARIOUpdateWithWhereUniqueWithoutCategoriaUsuarioInput | TB_TIPO_USUARIOUpdateWithWhereUniqueWithoutCategoriaUsuarioInput[]
    updateMany?: TB_TIPO_USUARIOUpdateManyWithWhereWithoutCategoriaUsuarioInput | TB_TIPO_USUARIOUpdateManyWithWhereWithoutCategoriaUsuarioInput[]
    deleteMany?: TB_TIPO_USUARIOScalarWhereInput | TB_TIPO_USUARIOScalarWhereInput[]
  }

  export type TB_TIPO_PRODUTOCreateNestedManyWithoutProdutoInput = {
    create?: XOR<TB_TIPO_PRODUTOCreateWithoutProdutoInput, TB_TIPO_PRODUTOUncheckedCreateWithoutProdutoInput> | TB_TIPO_PRODUTOCreateWithoutProdutoInput[] | TB_TIPO_PRODUTOUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: TB_TIPO_PRODUTOCreateOrConnectWithoutProdutoInput | TB_TIPO_PRODUTOCreateOrConnectWithoutProdutoInput[]
    createMany?: TB_TIPO_PRODUTOCreateManyProdutoInputEnvelope
    connect?: TB_TIPO_PRODUTOWhereUniqueInput | TB_TIPO_PRODUTOWhereUniqueInput[]
  }

  export type TB_QTD_PRODUTOCreateNestedManyWithoutProdutoInput = {
    create?: XOR<TB_QTD_PRODUTOCreateWithoutProdutoInput, TB_QTD_PRODUTOUncheckedCreateWithoutProdutoInput> | TB_QTD_PRODUTOCreateWithoutProdutoInput[] | TB_QTD_PRODUTOUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: TB_QTD_PRODUTOCreateOrConnectWithoutProdutoInput | TB_QTD_PRODUTOCreateOrConnectWithoutProdutoInput[]
    createMany?: TB_QTD_PRODUTOCreateManyProdutoInputEnvelope
    connect?: TB_QTD_PRODUTOWhereUniqueInput | TB_QTD_PRODUTOWhereUniqueInput[]
  }

  export type TB_ITENSCreateNestedManyWithoutProdutoInput = {
    create?: XOR<TB_ITENSCreateWithoutProdutoInput, TB_ITENSUncheckedCreateWithoutProdutoInput> | TB_ITENSCreateWithoutProdutoInput[] | TB_ITENSUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: TB_ITENSCreateOrConnectWithoutProdutoInput | TB_ITENSCreateOrConnectWithoutProdutoInput[]
    createMany?: TB_ITENSCreateManyProdutoInputEnvelope
    connect?: TB_ITENSWhereUniqueInput | TB_ITENSWhereUniqueInput[]
  }

  export type TB_TIPO_PRODUTOUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<TB_TIPO_PRODUTOCreateWithoutProdutoInput, TB_TIPO_PRODUTOUncheckedCreateWithoutProdutoInput> | TB_TIPO_PRODUTOCreateWithoutProdutoInput[] | TB_TIPO_PRODUTOUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: TB_TIPO_PRODUTOCreateOrConnectWithoutProdutoInput | TB_TIPO_PRODUTOCreateOrConnectWithoutProdutoInput[]
    createMany?: TB_TIPO_PRODUTOCreateManyProdutoInputEnvelope
    connect?: TB_TIPO_PRODUTOWhereUniqueInput | TB_TIPO_PRODUTOWhereUniqueInput[]
  }

  export type TB_QTD_PRODUTOUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<TB_QTD_PRODUTOCreateWithoutProdutoInput, TB_QTD_PRODUTOUncheckedCreateWithoutProdutoInput> | TB_QTD_PRODUTOCreateWithoutProdutoInput[] | TB_QTD_PRODUTOUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: TB_QTD_PRODUTOCreateOrConnectWithoutProdutoInput | TB_QTD_PRODUTOCreateOrConnectWithoutProdutoInput[]
    createMany?: TB_QTD_PRODUTOCreateManyProdutoInputEnvelope
    connect?: TB_QTD_PRODUTOWhereUniqueInput | TB_QTD_PRODUTOWhereUniqueInput[]
  }

  export type TB_ITENSUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<TB_ITENSCreateWithoutProdutoInput, TB_ITENSUncheckedCreateWithoutProdutoInput> | TB_ITENSCreateWithoutProdutoInput[] | TB_ITENSUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: TB_ITENSCreateOrConnectWithoutProdutoInput | TB_ITENSCreateOrConnectWithoutProdutoInput[]
    createMany?: TB_ITENSCreateManyProdutoInputEnvelope
    connect?: TB_ITENSWhereUniqueInput | TB_ITENSWhereUniqueInput[]
  }

  export type TB_TIPO_PRODUTOUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<TB_TIPO_PRODUTOCreateWithoutProdutoInput, TB_TIPO_PRODUTOUncheckedCreateWithoutProdutoInput> | TB_TIPO_PRODUTOCreateWithoutProdutoInput[] | TB_TIPO_PRODUTOUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: TB_TIPO_PRODUTOCreateOrConnectWithoutProdutoInput | TB_TIPO_PRODUTOCreateOrConnectWithoutProdutoInput[]
    upsert?: TB_TIPO_PRODUTOUpsertWithWhereUniqueWithoutProdutoInput | TB_TIPO_PRODUTOUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: TB_TIPO_PRODUTOCreateManyProdutoInputEnvelope
    set?: TB_TIPO_PRODUTOWhereUniqueInput | TB_TIPO_PRODUTOWhereUniqueInput[]
    disconnect?: TB_TIPO_PRODUTOWhereUniqueInput | TB_TIPO_PRODUTOWhereUniqueInput[]
    delete?: TB_TIPO_PRODUTOWhereUniqueInput | TB_TIPO_PRODUTOWhereUniqueInput[]
    connect?: TB_TIPO_PRODUTOWhereUniqueInput | TB_TIPO_PRODUTOWhereUniqueInput[]
    update?: TB_TIPO_PRODUTOUpdateWithWhereUniqueWithoutProdutoInput | TB_TIPO_PRODUTOUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: TB_TIPO_PRODUTOUpdateManyWithWhereWithoutProdutoInput | TB_TIPO_PRODUTOUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: TB_TIPO_PRODUTOScalarWhereInput | TB_TIPO_PRODUTOScalarWhereInput[]
  }

  export type TB_QTD_PRODUTOUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<TB_QTD_PRODUTOCreateWithoutProdutoInput, TB_QTD_PRODUTOUncheckedCreateWithoutProdutoInput> | TB_QTD_PRODUTOCreateWithoutProdutoInput[] | TB_QTD_PRODUTOUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: TB_QTD_PRODUTOCreateOrConnectWithoutProdutoInput | TB_QTD_PRODUTOCreateOrConnectWithoutProdutoInput[]
    upsert?: TB_QTD_PRODUTOUpsertWithWhereUniqueWithoutProdutoInput | TB_QTD_PRODUTOUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: TB_QTD_PRODUTOCreateManyProdutoInputEnvelope
    set?: TB_QTD_PRODUTOWhereUniqueInput | TB_QTD_PRODUTOWhereUniqueInput[]
    disconnect?: TB_QTD_PRODUTOWhereUniqueInput | TB_QTD_PRODUTOWhereUniqueInput[]
    delete?: TB_QTD_PRODUTOWhereUniqueInput | TB_QTD_PRODUTOWhereUniqueInput[]
    connect?: TB_QTD_PRODUTOWhereUniqueInput | TB_QTD_PRODUTOWhereUniqueInput[]
    update?: TB_QTD_PRODUTOUpdateWithWhereUniqueWithoutProdutoInput | TB_QTD_PRODUTOUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: TB_QTD_PRODUTOUpdateManyWithWhereWithoutProdutoInput | TB_QTD_PRODUTOUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: TB_QTD_PRODUTOScalarWhereInput | TB_QTD_PRODUTOScalarWhereInput[]
  }

  export type TB_ITENSUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<TB_ITENSCreateWithoutProdutoInput, TB_ITENSUncheckedCreateWithoutProdutoInput> | TB_ITENSCreateWithoutProdutoInput[] | TB_ITENSUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: TB_ITENSCreateOrConnectWithoutProdutoInput | TB_ITENSCreateOrConnectWithoutProdutoInput[]
    upsert?: TB_ITENSUpsertWithWhereUniqueWithoutProdutoInput | TB_ITENSUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: TB_ITENSCreateManyProdutoInputEnvelope
    set?: TB_ITENSWhereUniqueInput | TB_ITENSWhereUniqueInput[]
    disconnect?: TB_ITENSWhereUniqueInput | TB_ITENSWhereUniqueInput[]
    delete?: TB_ITENSWhereUniqueInput | TB_ITENSWhereUniqueInput[]
    connect?: TB_ITENSWhereUniqueInput | TB_ITENSWhereUniqueInput[]
    update?: TB_ITENSUpdateWithWhereUniqueWithoutProdutoInput | TB_ITENSUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: TB_ITENSUpdateManyWithWhereWithoutProdutoInput | TB_ITENSUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: TB_ITENSScalarWhereInput | TB_ITENSScalarWhereInput[]
  }

  export type TB_TIPO_PRODUTOUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<TB_TIPO_PRODUTOCreateWithoutProdutoInput, TB_TIPO_PRODUTOUncheckedCreateWithoutProdutoInput> | TB_TIPO_PRODUTOCreateWithoutProdutoInput[] | TB_TIPO_PRODUTOUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: TB_TIPO_PRODUTOCreateOrConnectWithoutProdutoInput | TB_TIPO_PRODUTOCreateOrConnectWithoutProdutoInput[]
    upsert?: TB_TIPO_PRODUTOUpsertWithWhereUniqueWithoutProdutoInput | TB_TIPO_PRODUTOUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: TB_TIPO_PRODUTOCreateManyProdutoInputEnvelope
    set?: TB_TIPO_PRODUTOWhereUniqueInput | TB_TIPO_PRODUTOWhereUniqueInput[]
    disconnect?: TB_TIPO_PRODUTOWhereUniqueInput | TB_TIPO_PRODUTOWhereUniqueInput[]
    delete?: TB_TIPO_PRODUTOWhereUniqueInput | TB_TIPO_PRODUTOWhereUniqueInput[]
    connect?: TB_TIPO_PRODUTOWhereUniqueInput | TB_TIPO_PRODUTOWhereUniqueInput[]
    update?: TB_TIPO_PRODUTOUpdateWithWhereUniqueWithoutProdutoInput | TB_TIPO_PRODUTOUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: TB_TIPO_PRODUTOUpdateManyWithWhereWithoutProdutoInput | TB_TIPO_PRODUTOUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: TB_TIPO_PRODUTOScalarWhereInput | TB_TIPO_PRODUTOScalarWhereInput[]
  }

  export type TB_QTD_PRODUTOUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<TB_QTD_PRODUTOCreateWithoutProdutoInput, TB_QTD_PRODUTOUncheckedCreateWithoutProdutoInput> | TB_QTD_PRODUTOCreateWithoutProdutoInput[] | TB_QTD_PRODUTOUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: TB_QTD_PRODUTOCreateOrConnectWithoutProdutoInput | TB_QTD_PRODUTOCreateOrConnectWithoutProdutoInput[]
    upsert?: TB_QTD_PRODUTOUpsertWithWhereUniqueWithoutProdutoInput | TB_QTD_PRODUTOUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: TB_QTD_PRODUTOCreateManyProdutoInputEnvelope
    set?: TB_QTD_PRODUTOWhereUniqueInput | TB_QTD_PRODUTOWhereUniqueInput[]
    disconnect?: TB_QTD_PRODUTOWhereUniqueInput | TB_QTD_PRODUTOWhereUniqueInput[]
    delete?: TB_QTD_PRODUTOWhereUniqueInput | TB_QTD_PRODUTOWhereUniqueInput[]
    connect?: TB_QTD_PRODUTOWhereUniqueInput | TB_QTD_PRODUTOWhereUniqueInput[]
    update?: TB_QTD_PRODUTOUpdateWithWhereUniqueWithoutProdutoInput | TB_QTD_PRODUTOUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: TB_QTD_PRODUTOUpdateManyWithWhereWithoutProdutoInput | TB_QTD_PRODUTOUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: TB_QTD_PRODUTOScalarWhereInput | TB_QTD_PRODUTOScalarWhereInput[]
  }

  export type TB_ITENSUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<TB_ITENSCreateWithoutProdutoInput, TB_ITENSUncheckedCreateWithoutProdutoInput> | TB_ITENSCreateWithoutProdutoInput[] | TB_ITENSUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: TB_ITENSCreateOrConnectWithoutProdutoInput | TB_ITENSCreateOrConnectWithoutProdutoInput[]
    upsert?: TB_ITENSUpsertWithWhereUniqueWithoutProdutoInput | TB_ITENSUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: TB_ITENSCreateManyProdutoInputEnvelope
    set?: TB_ITENSWhereUniqueInput | TB_ITENSWhereUniqueInput[]
    disconnect?: TB_ITENSWhereUniqueInput | TB_ITENSWhereUniqueInput[]
    delete?: TB_ITENSWhereUniqueInput | TB_ITENSWhereUniqueInput[]
    connect?: TB_ITENSWhereUniqueInput | TB_ITENSWhereUniqueInput[]
    update?: TB_ITENSUpdateWithWhereUniqueWithoutProdutoInput | TB_ITENSUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: TB_ITENSUpdateManyWithWhereWithoutProdutoInput | TB_ITENSUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: TB_ITENSScalarWhereInput | TB_ITENSScalarWhereInput[]
  }

  export type TB_PRODUTOCreateNestedOneWithoutTiposProdutoInput = {
    create?: XOR<TB_PRODUTOCreateWithoutTiposProdutoInput, TB_PRODUTOUncheckedCreateWithoutTiposProdutoInput>
    connectOrCreate?: TB_PRODUTOCreateOrConnectWithoutTiposProdutoInput
    connect?: TB_PRODUTOWhereUniqueInput
  }

  export type TB_CATEGORIA_PRODUTOCreateNestedOneWithoutTiposProdutoInput = {
    create?: XOR<TB_CATEGORIA_PRODUTOCreateWithoutTiposProdutoInput, TB_CATEGORIA_PRODUTOUncheckedCreateWithoutTiposProdutoInput>
    connectOrCreate?: TB_CATEGORIA_PRODUTOCreateOrConnectWithoutTiposProdutoInput
    connect?: TB_CATEGORIA_PRODUTOWhereUniqueInput
  }

  export type TB_PRODUTOUpdateOneRequiredWithoutTiposProdutoNestedInput = {
    create?: XOR<TB_PRODUTOCreateWithoutTiposProdutoInput, TB_PRODUTOUncheckedCreateWithoutTiposProdutoInput>
    connectOrCreate?: TB_PRODUTOCreateOrConnectWithoutTiposProdutoInput
    upsert?: TB_PRODUTOUpsertWithoutTiposProdutoInput
    connect?: TB_PRODUTOWhereUniqueInput
    update?: XOR<XOR<TB_PRODUTOUpdateToOneWithWhereWithoutTiposProdutoInput, TB_PRODUTOUpdateWithoutTiposProdutoInput>, TB_PRODUTOUncheckedUpdateWithoutTiposProdutoInput>
  }

  export type TB_CATEGORIA_PRODUTOUpdateOneRequiredWithoutTiposProdutoNestedInput = {
    create?: XOR<TB_CATEGORIA_PRODUTOCreateWithoutTiposProdutoInput, TB_CATEGORIA_PRODUTOUncheckedCreateWithoutTiposProdutoInput>
    connectOrCreate?: TB_CATEGORIA_PRODUTOCreateOrConnectWithoutTiposProdutoInput
    upsert?: TB_CATEGORIA_PRODUTOUpsertWithoutTiposProdutoInput
    connect?: TB_CATEGORIA_PRODUTOWhereUniqueInput
    update?: XOR<XOR<TB_CATEGORIA_PRODUTOUpdateToOneWithWhereWithoutTiposProdutoInput, TB_CATEGORIA_PRODUTOUpdateWithoutTiposProdutoInput>, TB_CATEGORIA_PRODUTOUncheckedUpdateWithoutTiposProdutoInput>
  }

  export type TB_TIPO_PRODUTOCreateNestedManyWithoutCategoriaProdutoInput = {
    create?: XOR<TB_TIPO_PRODUTOCreateWithoutCategoriaProdutoInput, TB_TIPO_PRODUTOUncheckedCreateWithoutCategoriaProdutoInput> | TB_TIPO_PRODUTOCreateWithoutCategoriaProdutoInput[] | TB_TIPO_PRODUTOUncheckedCreateWithoutCategoriaProdutoInput[]
    connectOrCreate?: TB_TIPO_PRODUTOCreateOrConnectWithoutCategoriaProdutoInput | TB_TIPO_PRODUTOCreateOrConnectWithoutCategoriaProdutoInput[]
    createMany?: TB_TIPO_PRODUTOCreateManyCategoriaProdutoInputEnvelope
    connect?: TB_TIPO_PRODUTOWhereUniqueInput | TB_TIPO_PRODUTOWhereUniqueInput[]
  }

  export type TB_TIPO_PRODUTOUncheckedCreateNestedManyWithoutCategoriaProdutoInput = {
    create?: XOR<TB_TIPO_PRODUTOCreateWithoutCategoriaProdutoInput, TB_TIPO_PRODUTOUncheckedCreateWithoutCategoriaProdutoInput> | TB_TIPO_PRODUTOCreateWithoutCategoriaProdutoInput[] | TB_TIPO_PRODUTOUncheckedCreateWithoutCategoriaProdutoInput[]
    connectOrCreate?: TB_TIPO_PRODUTOCreateOrConnectWithoutCategoriaProdutoInput | TB_TIPO_PRODUTOCreateOrConnectWithoutCategoriaProdutoInput[]
    createMany?: TB_TIPO_PRODUTOCreateManyCategoriaProdutoInputEnvelope
    connect?: TB_TIPO_PRODUTOWhereUniqueInput | TB_TIPO_PRODUTOWhereUniqueInput[]
  }

  export type TB_TIPO_PRODUTOUpdateManyWithoutCategoriaProdutoNestedInput = {
    create?: XOR<TB_TIPO_PRODUTOCreateWithoutCategoriaProdutoInput, TB_TIPO_PRODUTOUncheckedCreateWithoutCategoriaProdutoInput> | TB_TIPO_PRODUTOCreateWithoutCategoriaProdutoInput[] | TB_TIPO_PRODUTOUncheckedCreateWithoutCategoriaProdutoInput[]
    connectOrCreate?: TB_TIPO_PRODUTOCreateOrConnectWithoutCategoriaProdutoInput | TB_TIPO_PRODUTOCreateOrConnectWithoutCategoriaProdutoInput[]
    upsert?: TB_TIPO_PRODUTOUpsertWithWhereUniqueWithoutCategoriaProdutoInput | TB_TIPO_PRODUTOUpsertWithWhereUniqueWithoutCategoriaProdutoInput[]
    createMany?: TB_TIPO_PRODUTOCreateManyCategoriaProdutoInputEnvelope
    set?: TB_TIPO_PRODUTOWhereUniqueInput | TB_TIPO_PRODUTOWhereUniqueInput[]
    disconnect?: TB_TIPO_PRODUTOWhereUniqueInput | TB_TIPO_PRODUTOWhereUniqueInput[]
    delete?: TB_TIPO_PRODUTOWhereUniqueInput | TB_TIPO_PRODUTOWhereUniqueInput[]
    connect?: TB_TIPO_PRODUTOWhereUniqueInput | TB_TIPO_PRODUTOWhereUniqueInput[]
    update?: TB_TIPO_PRODUTOUpdateWithWhereUniqueWithoutCategoriaProdutoInput | TB_TIPO_PRODUTOUpdateWithWhereUniqueWithoutCategoriaProdutoInput[]
    updateMany?: TB_TIPO_PRODUTOUpdateManyWithWhereWithoutCategoriaProdutoInput | TB_TIPO_PRODUTOUpdateManyWithWhereWithoutCategoriaProdutoInput[]
    deleteMany?: TB_TIPO_PRODUTOScalarWhereInput | TB_TIPO_PRODUTOScalarWhereInput[]
  }

  export type TB_TIPO_PRODUTOUncheckedUpdateManyWithoutCategoriaProdutoNestedInput = {
    create?: XOR<TB_TIPO_PRODUTOCreateWithoutCategoriaProdutoInput, TB_TIPO_PRODUTOUncheckedCreateWithoutCategoriaProdutoInput> | TB_TIPO_PRODUTOCreateWithoutCategoriaProdutoInput[] | TB_TIPO_PRODUTOUncheckedCreateWithoutCategoriaProdutoInput[]
    connectOrCreate?: TB_TIPO_PRODUTOCreateOrConnectWithoutCategoriaProdutoInput | TB_TIPO_PRODUTOCreateOrConnectWithoutCategoriaProdutoInput[]
    upsert?: TB_TIPO_PRODUTOUpsertWithWhereUniqueWithoutCategoriaProdutoInput | TB_TIPO_PRODUTOUpsertWithWhereUniqueWithoutCategoriaProdutoInput[]
    createMany?: TB_TIPO_PRODUTOCreateManyCategoriaProdutoInputEnvelope
    set?: TB_TIPO_PRODUTOWhereUniqueInput | TB_TIPO_PRODUTOWhereUniqueInput[]
    disconnect?: TB_TIPO_PRODUTOWhereUniqueInput | TB_TIPO_PRODUTOWhereUniqueInput[]
    delete?: TB_TIPO_PRODUTOWhereUniqueInput | TB_TIPO_PRODUTOWhereUniqueInput[]
    connect?: TB_TIPO_PRODUTOWhereUniqueInput | TB_TIPO_PRODUTOWhereUniqueInput[]
    update?: TB_TIPO_PRODUTOUpdateWithWhereUniqueWithoutCategoriaProdutoInput | TB_TIPO_PRODUTOUpdateWithWhereUniqueWithoutCategoriaProdutoInput[]
    updateMany?: TB_TIPO_PRODUTOUpdateManyWithWhereWithoutCategoriaProdutoInput | TB_TIPO_PRODUTOUpdateManyWithWhereWithoutCategoriaProdutoInput[]
    deleteMany?: TB_TIPO_PRODUTOScalarWhereInput | TB_TIPO_PRODUTOScalarWhereInput[]
  }

  export type TB_PRODUTOCreateNestedOneWithoutQuantidadesInput = {
    create?: XOR<TB_PRODUTOCreateWithoutQuantidadesInput, TB_PRODUTOUncheckedCreateWithoutQuantidadesInput>
    connectOrCreate?: TB_PRODUTOCreateOrConnectWithoutQuantidadesInput
    connect?: TB_PRODUTOWhereUniqueInput
  }

  export type TB_TAMANHO_PRODUTOCreateNestedOneWithoutQtdProdutosInput = {
    create?: XOR<TB_TAMANHO_PRODUTOCreateWithoutQtdProdutosInput, TB_TAMANHO_PRODUTOUncheckedCreateWithoutQtdProdutosInput>
    connectOrCreate?: TB_TAMANHO_PRODUTOCreateOrConnectWithoutQtdProdutosInput
    connect?: TB_TAMANHO_PRODUTOWhereUniqueInput
  }

  export type TB_PRODUTOUpdateOneRequiredWithoutQuantidadesNestedInput = {
    create?: XOR<TB_PRODUTOCreateWithoutQuantidadesInput, TB_PRODUTOUncheckedCreateWithoutQuantidadesInput>
    connectOrCreate?: TB_PRODUTOCreateOrConnectWithoutQuantidadesInput
    upsert?: TB_PRODUTOUpsertWithoutQuantidadesInput
    connect?: TB_PRODUTOWhereUniqueInput
    update?: XOR<XOR<TB_PRODUTOUpdateToOneWithWhereWithoutQuantidadesInput, TB_PRODUTOUpdateWithoutQuantidadesInput>, TB_PRODUTOUncheckedUpdateWithoutQuantidadesInput>
  }

  export type TB_TAMANHO_PRODUTOUpdateOneRequiredWithoutQtdProdutosNestedInput = {
    create?: XOR<TB_TAMANHO_PRODUTOCreateWithoutQtdProdutosInput, TB_TAMANHO_PRODUTOUncheckedCreateWithoutQtdProdutosInput>
    connectOrCreate?: TB_TAMANHO_PRODUTOCreateOrConnectWithoutQtdProdutosInput
    upsert?: TB_TAMANHO_PRODUTOUpsertWithoutQtdProdutosInput
    connect?: TB_TAMANHO_PRODUTOWhereUniqueInput
    update?: XOR<XOR<TB_TAMANHO_PRODUTOUpdateToOneWithWhereWithoutQtdProdutosInput, TB_TAMANHO_PRODUTOUpdateWithoutQtdProdutosInput>, TB_TAMANHO_PRODUTOUncheckedUpdateWithoutQtdProdutosInput>
  }

  export type TB_QTD_PRODUTOCreateNestedManyWithoutTamanhoProdutoInput = {
    create?: XOR<TB_QTD_PRODUTOCreateWithoutTamanhoProdutoInput, TB_QTD_PRODUTOUncheckedCreateWithoutTamanhoProdutoInput> | TB_QTD_PRODUTOCreateWithoutTamanhoProdutoInput[] | TB_QTD_PRODUTOUncheckedCreateWithoutTamanhoProdutoInput[]
    connectOrCreate?: TB_QTD_PRODUTOCreateOrConnectWithoutTamanhoProdutoInput | TB_QTD_PRODUTOCreateOrConnectWithoutTamanhoProdutoInput[]
    createMany?: TB_QTD_PRODUTOCreateManyTamanhoProdutoInputEnvelope
    connect?: TB_QTD_PRODUTOWhereUniqueInput | TB_QTD_PRODUTOWhereUniqueInput[]
  }

  export type TB_ITENSCreateNestedManyWithoutTamanhoProdutoInput = {
    create?: XOR<TB_ITENSCreateWithoutTamanhoProdutoInput, TB_ITENSUncheckedCreateWithoutTamanhoProdutoInput> | TB_ITENSCreateWithoutTamanhoProdutoInput[] | TB_ITENSUncheckedCreateWithoutTamanhoProdutoInput[]
    connectOrCreate?: TB_ITENSCreateOrConnectWithoutTamanhoProdutoInput | TB_ITENSCreateOrConnectWithoutTamanhoProdutoInput[]
    createMany?: TB_ITENSCreateManyTamanhoProdutoInputEnvelope
    connect?: TB_ITENSWhereUniqueInput | TB_ITENSWhereUniqueInput[]
  }

  export type TB_QTD_PRODUTOUncheckedCreateNestedManyWithoutTamanhoProdutoInput = {
    create?: XOR<TB_QTD_PRODUTOCreateWithoutTamanhoProdutoInput, TB_QTD_PRODUTOUncheckedCreateWithoutTamanhoProdutoInput> | TB_QTD_PRODUTOCreateWithoutTamanhoProdutoInput[] | TB_QTD_PRODUTOUncheckedCreateWithoutTamanhoProdutoInput[]
    connectOrCreate?: TB_QTD_PRODUTOCreateOrConnectWithoutTamanhoProdutoInput | TB_QTD_PRODUTOCreateOrConnectWithoutTamanhoProdutoInput[]
    createMany?: TB_QTD_PRODUTOCreateManyTamanhoProdutoInputEnvelope
    connect?: TB_QTD_PRODUTOWhereUniqueInput | TB_QTD_PRODUTOWhereUniqueInput[]
  }

  export type TB_ITENSUncheckedCreateNestedManyWithoutTamanhoProdutoInput = {
    create?: XOR<TB_ITENSCreateWithoutTamanhoProdutoInput, TB_ITENSUncheckedCreateWithoutTamanhoProdutoInput> | TB_ITENSCreateWithoutTamanhoProdutoInput[] | TB_ITENSUncheckedCreateWithoutTamanhoProdutoInput[]
    connectOrCreate?: TB_ITENSCreateOrConnectWithoutTamanhoProdutoInput | TB_ITENSCreateOrConnectWithoutTamanhoProdutoInput[]
    createMany?: TB_ITENSCreateManyTamanhoProdutoInputEnvelope
    connect?: TB_ITENSWhereUniqueInput | TB_ITENSWhereUniqueInput[]
  }

  export type TB_QTD_PRODUTOUpdateManyWithoutTamanhoProdutoNestedInput = {
    create?: XOR<TB_QTD_PRODUTOCreateWithoutTamanhoProdutoInput, TB_QTD_PRODUTOUncheckedCreateWithoutTamanhoProdutoInput> | TB_QTD_PRODUTOCreateWithoutTamanhoProdutoInput[] | TB_QTD_PRODUTOUncheckedCreateWithoutTamanhoProdutoInput[]
    connectOrCreate?: TB_QTD_PRODUTOCreateOrConnectWithoutTamanhoProdutoInput | TB_QTD_PRODUTOCreateOrConnectWithoutTamanhoProdutoInput[]
    upsert?: TB_QTD_PRODUTOUpsertWithWhereUniqueWithoutTamanhoProdutoInput | TB_QTD_PRODUTOUpsertWithWhereUniqueWithoutTamanhoProdutoInput[]
    createMany?: TB_QTD_PRODUTOCreateManyTamanhoProdutoInputEnvelope
    set?: TB_QTD_PRODUTOWhereUniqueInput | TB_QTD_PRODUTOWhereUniqueInput[]
    disconnect?: TB_QTD_PRODUTOWhereUniqueInput | TB_QTD_PRODUTOWhereUniqueInput[]
    delete?: TB_QTD_PRODUTOWhereUniqueInput | TB_QTD_PRODUTOWhereUniqueInput[]
    connect?: TB_QTD_PRODUTOWhereUniqueInput | TB_QTD_PRODUTOWhereUniqueInput[]
    update?: TB_QTD_PRODUTOUpdateWithWhereUniqueWithoutTamanhoProdutoInput | TB_QTD_PRODUTOUpdateWithWhereUniqueWithoutTamanhoProdutoInput[]
    updateMany?: TB_QTD_PRODUTOUpdateManyWithWhereWithoutTamanhoProdutoInput | TB_QTD_PRODUTOUpdateManyWithWhereWithoutTamanhoProdutoInput[]
    deleteMany?: TB_QTD_PRODUTOScalarWhereInput | TB_QTD_PRODUTOScalarWhereInput[]
  }

  export type TB_ITENSUpdateManyWithoutTamanhoProdutoNestedInput = {
    create?: XOR<TB_ITENSCreateWithoutTamanhoProdutoInput, TB_ITENSUncheckedCreateWithoutTamanhoProdutoInput> | TB_ITENSCreateWithoutTamanhoProdutoInput[] | TB_ITENSUncheckedCreateWithoutTamanhoProdutoInput[]
    connectOrCreate?: TB_ITENSCreateOrConnectWithoutTamanhoProdutoInput | TB_ITENSCreateOrConnectWithoutTamanhoProdutoInput[]
    upsert?: TB_ITENSUpsertWithWhereUniqueWithoutTamanhoProdutoInput | TB_ITENSUpsertWithWhereUniqueWithoutTamanhoProdutoInput[]
    createMany?: TB_ITENSCreateManyTamanhoProdutoInputEnvelope
    set?: TB_ITENSWhereUniqueInput | TB_ITENSWhereUniqueInput[]
    disconnect?: TB_ITENSWhereUniqueInput | TB_ITENSWhereUniqueInput[]
    delete?: TB_ITENSWhereUniqueInput | TB_ITENSWhereUniqueInput[]
    connect?: TB_ITENSWhereUniqueInput | TB_ITENSWhereUniqueInput[]
    update?: TB_ITENSUpdateWithWhereUniqueWithoutTamanhoProdutoInput | TB_ITENSUpdateWithWhereUniqueWithoutTamanhoProdutoInput[]
    updateMany?: TB_ITENSUpdateManyWithWhereWithoutTamanhoProdutoInput | TB_ITENSUpdateManyWithWhereWithoutTamanhoProdutoInput[]
    deleteMany?: TB_ITENSScalarWhereInput | TB_ITENSScalarWhereInput[]
  }

  export type TB_QTD_PRODUTOUncheckedUpdateManyWithoutTamanhoProdutoNestedInput = {
    create?: XOR<TB_QTD_PRODUTOCreateWithoutTamanhoProdutoInput, TB_QTD_PRODUTOUncheckedCreateWithoutTamanhoProdutoInput> | TB_QTD_PRODUTOCreateWithoutTamanhoProdutoInput[] | TB_QTD_PRODUTOUncheckedCreateWithoutTamanhoProdutoInput[]
    connectOrCreate?: TB_QTD_PRODUTOCreateOrConnectWithoutTamanhoProdutoInput | TB_QTD_PRODUTOCreateOrConnectWithoutTamanhoProdutoInput[]
    upsert?: TB_QTD_PRODUTOUpsertWithWhereUniqueWithoutTamanhoProdutoInput | TB_QTD_PRODUTOUpsertWithWhereUniqueWithoutTamanhoProdutoInput[]
    createMany?: TB_QTD_PRODUTOCreateManyTamanhoProdutoInputEnvelope
    set?: TB_QTD_PRODUTOWhereUniqueInput | TB_QTD_PRODUTOWhereUniqueInput[]
    disconnect?: TB_QTD_PRODUTOWhereUniqueInput | TB_QTD_PRODUTOWhereUniqueInput[]
    delete?: TB_QTD_PRODUTOWhereUniqueInput | TB_QTD_PRODUTOWhereUniqueInput[]
    connect?: TB_QTD_PRODUTOWhereUniqueInput | TB_QTD_PRODUTOWhereUniqueInput[]
    update?: TB_QTD_PRODUTOUpdateWithWhereUniqueWithoutTamanhoProdutoInput | TB_QTD_PRODUTOUpdateWithWhereUniqueWithoutTamanhoProdutoInput[]
    updateMany?: TB_QTD_PRODUTOUpdateManyWithWhereWithoutTamanhoProdutoInput | TB_QTD_PRODUTOUpdateManyWithWhereWithoutTamanhoProdutoInput[]
    deleteMany?: TB_QTD_PRODUTOScalarWhereInput | TB_QTD_PRODUTOScalarWhereInput[]
  }

  export type TB_ITENSUncheckedUpdateManyWithoutTamanhoProdutoNestedInput = {
    create?: XOR<TB_ITENSCreateWithoutTamanhoProdutoInput, TB_ITENSUncheckedCreateWithoutTamanhoProdutoInput> | TB_ITENSCreateWithoutTamanhoProdutoInput[] | TB_ITENSUncheckedCreateWithoutTamanhoProdutoInput[]
    connectOrCreate?: TB_ITENSCreateOrConnectWithoutTamanhoProdutoInput | TB_ITENSCreateOrConnectWithoutTamanhoProdutoInput[]
    upsert?: TB_ITENSUpsertWithWhereUniqueWithoutTamanhoProdutoInput | TB_ITENSUpsertWithWhereUniqueWithoutTamanhoProdutoInput[]
    createMany?: TB_ITENSCreateManyTamanhoProdutoInputEnvelope
    set?: TB_ITENSWhereUniqueInput | TB_ITENSWhereUniqueInput[]
    disconnect?: TB_ITENSWhereUniqueInput | TB_ITENSWhereUniqueInput[]
    delete?: TB_ITENSWhereUniqueInput | TB_ITENSWhereUniqueInput[]
    connect?: TB_ITENSWhereUniqueInput | TB_ITENSWhereUniqueInput[]
    update?: TB_ITENSUpdateWithWhereUniqueWithoutTamanhoProdutoInput | TB_ITENSUpdateWithWhereUniqueWithoutTamanhoProdutoInput[]
    updateMany?: TB_ITENSUpdateManyWithWhereWithoutTamanhoProdutoInput | TB_ITENSUpdateManyWithWhereWithoutTamanhoProdutoInput[]
    deleteMany?: TB_ITENSScalarWhereInput | TB_ITENSScalarWhereInput[]
  }

  export type TB_USUARIOCreateNestedOneWithoutCarrinhoInput = {
    create?: XOR<TB_USUARIOCreateWithoutCarrinhoInput, TB_USUARIOUncheckedCreateWithoutCarrinhoInput>
    connectOrCreate?: TB_USUARIOCreateOrConnectWithoutCarrinhoInput
    connect?: TB_USUARIOWhereUniqueInput
  }

  export type TB_ITENSCreateNestedManyWithoutCarrinhoInput = {
    create?: XOR<TB_ITENSCreateWithoutCarrinhoInput, TB_ITENSUncheckedCreateWithoutCarrinhoInput> | TB_ITENSCreateWithoutCarrinhoInput[] | TB_ITENSUncheckedCreateWithoutCarrinhoInput[]
    connectOrCreate?: TB_ITENSCreateOrConnectWithoutCarrinhoInput | TB_ITENSCreateOrConnectWithoutCarrinhoInput[]
    createMany?: TB_ITENSCreateManyCarrinhoInputEnvelope
    connect?: TB_ITENSWhereUniqueInput | TB_ITENSWhereUniqueInput[]
  }

  export type TB_ITENSUncheckedCreateNestedManyWithoutCarrinhoInput = {
    create?: XOR<TB_ITENSCreateWithoutCarrinhoInput, TB_ITENSUncheckedCreateWithoutCarrinhoInput> | TB_ITENSCreateWithoutCarrinhoInput[] | TB_ITENSUncheckedCreateWithoutCarrinhoInput[]
    connectOrCreate?: TB_ITENSCreateOrConnectWithoutCarrinhoInput | TB_ITENSCreateOrConnectWithoutCarrinhoInput[]
    createMany?: TB_ITENSCreateManyCarrinhoInputEnvelope
    connect?: TB_ITENSWhereUniqueInput | TB_ITENSWhereUniqueInput[]
  }

  export type TB_USUARIOUpdateOneRequiredWithoutCarrinhoNestedInput = {
    create?: XOR<TB_USUARIOCreateWithoutCarrinhoInput, TB_USUARIOUncheckedCreateWithoutCarrinhoInput>
    connectOrCreate?: TB_USUARIOCreateOrConnectWithoutCarrinhoInput
    upsert?: TB_USUARIOUpsertWithoutCarrinhoInput
    connect?: TB_USUARIOWhereUniqueInput
    update?: XOR<XOR<TB_USUARIOUpdateToOneWithWhereWithoutCarrinhoInput, TB_USUARIOUpdateWithoutCarrinhoInput>, TB_USUARIOUncheckedUpdateWithoutCarrinhoInput>
  }

  export type TB_ITENSUpdateManyWithoutCarrinhoNestedInput = {
    create?: XOR<TB_ITENSCreateWithoutCarrinhoInput, TB_ITENSUncheckedCreateWithoutCarrinhoInput> | TB_ITENSCreateWithoutCarrinhoInput[] | TB_ITENSUncheckedCreateWithoutCarrinhoInput[]
    connectOrCreate?: TB_ITENSCreateOrConnectWithoutCarrinhoInput | TB_ITENSCreateOrConnectWithoutCarrinhoInput[]
    upsert?: TB_ITENSUpsertWithWhereUniqueWithoutCarrinhoInput | TB_ITENSUpsertWithWhereUniqueWithoutCarrinhoInput[]
    createMany?: TB_ITENSCreateManyCarrinhoInputEnvelope
    set?: TB_ITENSWhereUniqueInput | TB_ITENSWhereUniqueInput[]
    disconnect?: TB_ITENSWhereUniqueInput | TB_ITENSWhereUniqueInput[]
    delete?: TB_ITENSWhereUniqueInput | TB_ITENSWhereUniqueInput[]
    connect?: TB_ITENSWhereUniqueInput | TB_ITENSWhereUniqueInput[]
    update?: TB_ITENSUpdateWithWhereUniqueWithoutCarrinhoInput | TB_ITENSUpdateWithWhereUniqueWithoutCarrinhoInput[]
    updateMany?: TB_ITENSUpdateManyWithWhereWithoutCarrinhoInput | TB_ITENSUpdateManyWithWhereWithoutCarrinhoInput[]
    deleteMany?: TB_ITENSScalarWhereInput | TB_ITENSScalarWhereInput[]
  }

  export type TB_ITENSUncheckedUpdateManyWithoutCarrinhoNestedInput = {
    create?: XOR<TB_ITENSCreateWithoutCarrinhoInput, TB_ITENSUncheckedCreateWithoutCarrinhoInput> | TB_ITENSCreateWithoutCarrinhoInput[] | TB_ITENSUncheckedCreateWithoutCarrinhoInput[]
    connectOrCreate?: TB_ITENSCreateOrConnectWithoutCarrinhoInput | TB_ITENSCreateOrConnectWithoutCarrinhoInput[]
    upsert?: TB_ITENSUpsertWithWhereUniqueWithoutCarrinhoInput | TB_ITENSUpsertWithWhereUniqueWithoutCarrinhoInput[]
    createMany?: TB_ITENSCreateManyCarrinhoInputEnvelope
    set?: TB_ITENSWhereUniqueInput | TB_ITENSWhereUniqueInput[]
    disconnect?: TB_ITENSWhereUniqueInput | TB_ITENSWhereUniqueInput[]
    delete?: TB_ITENSWhereUniqueInput | TB_ITENSWhereUniqueInput[]
    connect?: TB_ITENSWhereUniqueInput | TB_ITENSWhereUniqueInput[]
    update?: TB_ITENSUpdateWithWhereUniqueWithoutCarrinhoInput | TB_ITENSUpdateWithWhereUniqueWithoutCarrinhoInput[]
    updateMany?: TB_ITENSUpdateManyWithWhereWithoutCarrinhoInput | TB_ITENSUpdateManyWithWhereWithoutCarrinhoInput[]
    deleteMany?: TB_ITENSScalarWhereInput | TB_ITENSScalarWhereInput[]
  }

  export type TB_CARRINHOCreateNestedOneWithoutItensInput = {
    create?: XOR<TB_CARRINHOCreateWithoutItensInput, TB_CARRINHOUncheckedCreateWithoutItensInput>
    connectOrCreate?: TB_CARRINHOCreateOrConnectWithoutItensInput
    connect?: TB_CARRINHOWhereUniqueInput
  }

  export type TB_PRODUTOCreateNestedOneWithoutItensInput = {
    create?: XOR<TB_PRODUTOCreateWithoutItensInput, TB_PRODUTOUncheckedCreateWithoutItensInput>
    connectOrCreate?: TB_PRODUTOCreateOrConnectWithoutItensInput
    connect?: TB_PRODUTOWhereUniqueInput
  }

  export type TB_TAMANHO_PRODUTOCreateNestedOneWithoutItensInput = {
    create?: XOR<TB_TAMANHO_PRODUTOCreateWithoutItensInput, TB_TAMANHO_PRODUTOUncheckedCreateWithoutItensInput>
    connectOrCreate?: TB_TAMANHO_PRODUTOCreateOrConnectWithoutItensInput
    connect?: TB_TAMANHO_PRODUTOWhereUniqueInput
  }

  export type TB_CARRINHOUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<TB_CARRINHOCreateWithoutItensInput, TB_CARRINHOUncheckedCreateWithoutItensInput>
    connectOrCreate?: TB_CARRINHOCreateOrConnectWithoutItensInput
    upsert?: TB_CARRINHOUpsertWithoutItensInput
    connect?: TB_CARRINHOWhereUniqueInput
    update?: XOR<XOR<TB_CARRINHOUpdateToOneWithWhereWithoutItensInput, TB_CARRINHOUpdateWithoutItensInput>, TB_CARRINHOUncheckedUpdateWithoutItensInput>
  }

  export type TB_PRODUTOUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<TB_PRODUTOCreateWithoutItensInput, TB_PRODUTOUncheckedCreateWithoutItensInput>
    connectOrCreate?: TB_PRODUTOCreateOrConnectWithoutItensInput
    upsert?: TB_PRODUTOUpsertWithoutItensInput
    connect?: TB_PRODUTOWhereUniqueInput
    update?: XOR<XOR<TB_PRODUTOUpdateToOneWithWhereWithoutItensInput, TB_PRODUTOUpdateWithoutItensInput>, TB_PRODUTOUncheckedUpdateWithoutItensInput>
  }

  export type TB_TAMANHO_PRODUTOUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<TB_TAMANHO_PRODUTOCreateWithoutItensInput, TB_TAMANHO_PRODUTOUncheckedCreateWithoutItensInput>
    connectOrCreate?: TB_TAMANHO_PRODUTOCreateOrConnectWithoutItensInput
    upsert?: TB_TAMANHO_PRODUTOUpsertWithoutItensInput
    connect?: TB_TAMANHO_PRODUTOWhereUniqueInput
    update?: XOR<XOR<TB_TAMANHO_PRODUTOUpdateToOneWithWhereWithoutItensInput, TB_TAMANHO_PRODUTOUpdateWithoutItensInput>, TB_TAMANHO_PRODUTOUncheckedUpdateWithoutItensInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TB_CARRINHOCreateWithoutUsuarioInput = {
    itens?: TB_ITENSCreateNestedManyWithoutCarrinhoInput
  }

  export type TB_CARRINHOUncheckedCreateWithoutUsuarioInput = {
    SQ_CARRINHO?: number
    itens?: TB_ITENSUncheckedCreateNestedManyWithoutCarrinhoInput
  }

  export type TB_CARRINHOCreateOrConnectWithoutUsuarioInput = {
    where: TB_CARRINHOWhereUniqueInput
    create: XOR<TB_CARRINHOCreateWithoutUsuarioInput, TB_CARRINHOUncheckedCreateWithoutUsuarioInput>
  }

  export type TB_TIPO_USUARIOCreateWithoutUsuarioInput = {
    categoriaUsuario: TB_CATEGORIA_USUARIOCreateNestedOneWithoutTiposUsuarioInput
  }

  export type TB_TIPO_USUARIOUncheckedCreateWithoutUsuarioInput = {
    SQ_TIPO_USUARIO?: number
    SQ_CATEGORIA_USUARIO: number
  }

  export type TB_TIPO_USUARIOCreateOrConnectWithoutUsuarioInput = {
    where: TB_TIPO_USUARIOWhereUniqueInput
    create: XOR<TB_TIPO_USUARIOCreateWithoutUsuarioInput, TB_TIPO_USUARIOUncheckedCreateWithoutUsuarioInput>
  }

  export type TB_CARRINHOUpsertWithoutUsuarioInput = {
    update: XOR<TB_CARRINHOUpdateWithoutUsuarioInput, TB_CARRINHOUncheckedUpdateWithoutUsuarioInput>
    create: XOR<TB_CARRINHOCreateWithoutUsuarioInput, TB_CARRINHOUncheckedCreateWithoutUsuarioInput>
    where?: TB_CARRINHOWhereInput
  }

  export type TB_CARRINHOUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: TB_CARRINHOWhereInput
    data: XOR<TB_CARRINHOUpdateWithoutUsuarioInput, TB_CARRINHOUncheckedUpdateWithoutUsuarioInput>
  }

  export type TB_CARRINHOUpdateWithoutUsuarioInput = {
    itens?: TB_ITENSUpdateManyWithoutCarrinhoNestedInput
  }

  export type TB_CARRINHOUncheckedUpdateWithoutUsuarioInput = {
    SQ_CARRINHO?: IntFieldUpdateOperationsInput | number
    itens?: TB_ITENSUncheckedUpdateManyWithoutCarrinhoNestedInput
  }

  export type TB_TIPO_USUARIOUpsertWithoutUsuarioInput = {
    update: XOR<TB_TIPO_USUARIOUpdateWithoutUsuarioInput, TB_TIPO_USUARIOUncheckedUpdateWithoutUsuarioInput>
    create: XOR<TB_TIPO_USUARIOCreateWithoutUsuarioInput, TB_TIPO_USUARIOUncheckedCreateWithoutUsuarioInput>
    where?: TB_TIPO_USUARIOWhereInput
  }

  export type TB_TIPO_USUARIOUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: TB_TIPO_USUARIOWhereInput
    data: XOR<TB_TIPO_USUARIOUpdateWithoutUsuarioInput, TB_TIPO_USUARIOUncheckedUpdateWithoutUsuarioInput>
  }

  export type TB_TIPO_USUARIOUpdateWithoutUsuarioInput = {
    categoriaUsuario?: TB_CATEGORIA_USUARIOUpdateOneRequiredWithoutTiposUsuarioNestedInput
  }

  export type TB_TIPO_USUARIOUncheckedUpdateWithoutUsuarioInput = {
    SQ_TIPO_USUARIO?: IntFieldUpdateOperationsInput | number
    SQ_CATEGORIA_USUARIO?: IntFieldUpdateOperationsInput | number
  }

  export type TB_USUARIOCreateWithoutTipoUsuarioInput = {
    TP_USUARIO?: number
    ST_USUARIO: number
    NO_USUARIO: string
    EMAIL_USUARIO: string
    SENHA_USUARIO: string
    DT_CRIACAO?: Date | string
    DT_EDITADO?: Date | string
    carrinho?: TB_CARRINHOCreateNestedOneWithoutUsuarioInput
  }

  export type TB_USUARIOUncheckedCreateWithoutTipoUsuarioInput = {
    SQ_USUARIO?: number
    TP_USUARIO?: number
    ST_USUARIO: number
    NO_USUARIO: string
    EMAIL_USUARIO: string
    SENHA_USUARIO: string
    DT_CRIACAO?: Date | string
    DT_EDITADO?: Date | string
    carrinho?: TB_CARRINHOUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type TB_USUARIOCreateOrConnectWithoutTipoUsuarioInput = {
    where: TB_USUARIOWhereUniqueInput
    create: XOR<TB_USUARIOCreateWithoutTipoUsuarioInput, TB_USUARIOUncheckedCreateWithoutTipoUsuarioInput>
  }

  export type TB_CATEGORIA_USUARIOCreateWithoutTiposUsuarioInput = {
    NO_CATEGORIA: string
  }

  export type TB_CATEGORIA_USUARIOUncheckedCreateWithoutTiposUsuarioInput = {
    SQ_CATEGORIA_USUARIO?: number
    NO_CATEGORIA: string
  }

  export type TB_CATEGORIA_USUARIOCreateOrConnectWithoutTiposUsuarioInput = {
    where: TB_CATEGORIA_USUARIOWhereUniqueInput
    create: XOR<TB_CATEGORIA_USUARIOCreateWithoutTiposUsuarioInput, TB_CATEGORIA_USUARIOUncheckedCreateWithoutTiposUsuarioInput>
  }

  export type TB_USUARIOUpsertWithoutTipoUsuarioInput = {
    update: XOR<TB_USUARIOUpdateWithoutTipoUsuarioInput, TB_USUARIOUncheckedUpdateWithoutTipoUsuarioInput>
    create: XOR<TB_USUARIOCreateWithoutTipoUsuarioInput, TB_USUARIOUncheckedCreateWithoutTipoUsuarioInput>
    where?: TB_USUARIOWhereInput
  }

  export type TB_USUARIOUpdateToOneWithWhereWithoutTipoUsuarioInput = {
    where?: TB_USUARIOWhereInput
    data: XOR<TB_USUARIOUpdateWithoutTipoUsuarioInput, TB_USUARIOUncheckedUpdateWithoutTipoUsuarioInput>
  }

  export type TB_USUARIOUpdateWithoutTipoUsuarioInput = {
    TP_USUARIO?: IntFieldUpdateOperationsInput | number
    ST_USUARIO?: IntFieldUpdateOperationsInput | number
    NO_USUARIO?: StringFieldUpdateOperationsInput | string
    EMAIL_USUARIO?: StringFieldUpdateOperationsInput | string
    SENHA_USUARIO?: StringFieldUpdateOperationsInput | string
    DT_CRIACAO?: DateTimeFieldUpdateOperationsInput | Date | string
    DT_EDITADO?: DateTimeFieldUpdateOperationsInput | Date | string
    carrinho?: TB_CARRINHOUpdateOneWithoutUsuarioNestedInput
  }

  export type TB_USUARIOUncheckedUpdateWithoutTipoUsuarioInput = {
    SQ_USUARIO?: IntFieldUpdateOperationsInput | number
    TP_USUARIO?: IntFieldUpdateOperationsInput | number
    ST_USUARIO?: IntFieldUpdateOperationsInput | number
    NO_USUARIO?: StringFieldUpdateOperationsInput | string
    EMAIL_USUARIO?: StringFieldUpdateOperationsInput | string
    SENHA_USUARIO?: StringFieldUpdateOperationsInput | string
    DT_CRIACAO?: DateTimeFieldUpdateOperationsInput | Date | string
    DT_EDITADO?: DateTimeFieldUpdateOperationsInput | Date | string
    carrinho?: TB_CARRINHOUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type TB_CATEGORIA_USUARIOUpsertWithoutTiposUsuarioInput = {
    update: XOR<TB_CATEGORIA_USUARIOUpdateWithoutTiposUsuarioInput, TB_CATEGORIA_USUARIOUncheckedUpdateWithoutTiposUsuarioInput>
    create: XOR<TB_CATEGORIA_USUARIOCreateWithoutTiposUsuarioInput, TB_CATEGORIA_USUARIOUncheckedCreateWithoutTiposUsuarioInput>
    where?: TB_CATEGORIA_USUARIOWhereInput
  }

  export type TB_CATEGORIA_USUARIOUpdateToOneWithWhereWithoutTiposUsuarioInput = {
    where?: TB_CATEGORIA_USUARIOWhereInput
    data: XOR<TB_CATEGORIA_USUARIOUpdateWithoutTiposUsuarioInput, TB_CATEGORIA_USUARIOUncheckedUpdateWithoutTiposUsuarioInput>
  }

  export type TB_CATEGORIA_USUARIOUpdateWithoutTiposUsuarioInput = {
    NO_CATEGORIA?: StringFieldUpdateOperationsInput | string
  }

  export type TB_CATEGORIA_USUARIOUncheckedUpdateWithoutTiposUsuarioInput = {
    SQ_CATEGORIA_USUARIO?: IntFieldUpdateOperationsInput | number
    NO_CATEGORIA?: StringFieldUpdateOperationsInput | string
  }

  export type TB_TIPO_USUARIOCreateWithoutCategoriaUsuarioInput = {
    usuario: TB_USUARIOCreateNestedOneWithoutTipoUsuarioInput
  }

  export type TB_TIPO_USUARIOUncheckedCreateWithoutCategoriaUsuarioInput = {
    SQ_TIPO_USUARIO?: number
    SQ_USUARIO: number
  }

  export type TB_TIPO_USUARIOCreateOrConnectWithoutCategoriaUsuarioInput = {
    where: TB_TIPO_USUARIOWhereUniqueInput
    create: XOR<TB_TIPO_USUARIOCreateWithoutCategoriaUsuarioInput, TB_TIPO_USUARIOUncheckedCreateWithoutCategoriaUsuarioInput>
  }

  export type TB_TIPO_USUARIOCreateManyCategoriaUsuarioInputEnvelope = {
    data: TB_TIPO_USUARIOCreateManyCategoriaUsuarioInput | TB_TIPO_USUARIOCreateManyCategoriaUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type TB_TIPO_USUARIOUpsertWithWhereUniqueWithoutCategoriaUsuarioInput = {
    where: TB_TIPO_USUARIOWhereUniqueInput
    update: XOR<TB_TIPO_USUARIOUpdateWithoutCategoriaUsuarioInput, TB_TIPO_USUARIOUncheckedUpdateWithoutCategoriaUsuarioInput>
    create: XOR<TB_TIPO_USUARIOCreateWithoutCategoriaUsuarioInput, TB_TIPO_USUARIOUncheckedCreateWithoutCategoriaUsuarioInput>
  }

  export type TB_TIPO_USUARIOUpdateWithWhereUniqueWithoutCategoriaUsuarioInput = {
    where: TB_TIPO_USUARIOWhereUniqueInput
    data: XOR<TB_TIPO_USUARIOUpdateWithoutCategoriaUsuarioInput, TB_TIPO_USUARIOUncheckedUpdateWithoutCategoriaUsuarioInput>
  }

  export type TB_TIPO_USUARIOUpdateManyWithWhereWithoutCategoriaUsuarioInput = {
    where: TB_TIPO_USUARIOScalarWhereInput
    data: XOR<TB_TIPO_USUARIOUpdateManyMutationInput, TB_TIPO_USUARIOUncheckedUpdateManyWithoutCategoriaUsuarioInput>
  }

  export type TB_TIPO_USUARIOScalarWhereInput = {
    AND?: TB_TIPO_USUARIOScalarWhereInput | TB_TIPO_USUARIOScalarWhereInput[]
    OR?: TB_TIPO_USUARIOScalarWhereInput[]
    NOT?: TB_TIPO_USUARIOScalarWhereInput | TB_TIPO_USUARIOScalarWhereInput[]
    SQ_TIPO_USUARIO?: IntFilter<"TB_TIPO_USUARIO"> | number
    SQ_USUARIO?: IntFilter<"TB_TIPO_USUARIO"> | number
    SQ_CATEGORIA_USUARIO?: IntFilter<"TB_TIPO_USUARIO"> | number
  }

  export type TB_TIPO_PRODUTOCreateWithoutProdutoInput = {
    categoriaProduto: TB_CATEGORIA_PRODUTOCreateNestedOneWithoutTiposProdutoInput
  }

  export type TB_TIPO_PRODUTOUncheckedCreateWithoutProdutoInput = {
    SQ_TIPO_PRODUTO?: number
    SQ_CATEGORIA_PRODUTO: number
  }

  export type TB_TIPO_PRODUTOCreateOrConnectWithoutProdutoInput = {
    where: TB_TIPO_PRODUTOWhereUniqueInput
    create: XOR<TB_TIPO_PRODUTOCreateWithoutProdutoInput, TB_TIPO_PRODUTOUncheckedCreateWithoutProdutoInput>
  }

  export type TB_TIPO_PRODUTOCreateManyProdutoInputEnvelope = {
    data: TB_TIPO_PRODUTOCreateManyProdutoInput | TB_TIPO_PRODUTOCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type TB_QTD_PRODUTOCreateWithoutProdutoInput = {
    QTD_PRODUTO: number
    tamanhoProduto: TB_TAMANHO_PRODUTOCreateNestedOneWithoutQtdProdutosInput
  }

  export type TB_QTD_PRODUTOUncheckedCreateWithoutProdutoInput = {
    SQ_QTD_PRODUTO?: number
    SQ_TAMANHO_PRODUTO: number
    QTD_PRODUTO: number
  }

  export type TB_QTD_PRODUTOCreateOrConnectWithoutProdutoInput = {
    where: TB_QTD_PRODUTOWhereUniqueInput
    create: XOR<TB_QTD_PRODUTOCreateWithoutProdutoInput, TB_QTD_PRODUTOUncheckedCreateWithoutProdutoInput>
  }

  export type TB_QTD_PRODUTOCreateManyProdutoInputEnvelope = {
    data: TB_QTD_PRODUTOCreateManyProdutoInput | TB_QTD_PRODUTOCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type TB_ITENSCreateWithoutProdutoInput = {
    QTD_PRODUTO: number
    carrinho: TB_CARRINHOCreateNestedOneWithoutItensInput
    tamanhoProduto: TB_TAMANHO_PRODUTOCreateNestedOneWithoutItensInput
  }

  export type TB_ITENSUncheckedCreateWithoutProdutoInput = {
    SQ_ITENS?: number
    SQ_CARRINHO: number
    SQ_TAMANHO_PRODUTO: number
    QTD_PRODUTO: number
  }

  export type TB_ITENSCreateOrConnectWithoutProdutoInput = {
    where: TB_ITENSWhereUniqueInput
    create: XOR<TB_ITENSCreateWithoutProdutoInput, TB_ITENSUncheckedCreateWithoutProdutoInput>
  }

  export type TB_ITENSCreateManyProdutoInputEnvelope = {
    data: TB_ITENSCreateManyProdutoInput | TB_ITENSCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type TB_TIPO_PRODUTOUpsertWithWhereUniqueWithoutProdutoInput = {
    where: TB_TIPO_PRODUTOWhereUniqueInput
    update: XOR<TB_TIPO_PRODUTOUpdateWithoutProdutoInput, TB_TIPO_PRODUTOUncheckedUpdateWithoutProdutoInput>
    create: XOR<TB_TIPO_PRODUTOCreateWithoutProdutoInput, TB_TIPO_PRODUTOUncheckedCreateWithoutProdutoInput>
  }

  export type TB_TIPO_PRODUTOUpdateWithWhereUniqueWithoutProdutoInput = {
    where: TB_TIPO_PRODUTOWhereUniqueInput
    data: XOR<TB_TIPO_PRODUTOUpdateWithoutProdutoInput, TB_TIPO_PRODUTOUncheckedUpdateWithoutProdutoInput>
  }

  export type TB_TIPO_PRODUTOUpdateManyWithWhereWithoutProdutoInput = {
    where: TB_TIPO_PRODUTOScalarWhereInput
    data: XOR<TB_TIPO_PRODUTOUpdateManyMutationInput, TB_TIPO_PRODUTOUncheckedUpdateManyWithoutProdutoInput>
  }

  export type TB_TIPO_PRODUTOScalarWhereInput = {
    AND?: TB_TIPO_PRODUTOScalarWhereInput | TB_TIPO_PRODUTOScalarWhereInput[]
    OR?: TB_TIPO_PRODUTOScalarWhereInput[]
    NOT?: TB_TIPO_PRODUTOScalarWhereInput | TB_TIPO_PRODUTOScalarWhereInput[]
    SQ_TIPO_PRODUTO?: IntFilter<"TB_TIPO_PRODUTO"> | number
    SQ_PRODUTO?: IntFilter<"TB_TIPO_PRODUTO"> | number
    SQ_CATEGORIA_PRODUTO?: IntFilter<"TB_TIPO_PRODUTO"> | number
  }

  export type TB_QTD_PRODUTOUpsertWithWhereUniqueWithoutProdutoInput = {
    where: TB_QTD_PRODUTOWhereUniqueInput
    update: XOR<TB_QTD_PRODUTOUpdateWithoutProdutoInput, TB_QTD_PRODUTOUncheckedUpdateWithoutProdutoInput>
    create: XOR<TB_QTD_PRODUTOCreateWithoutProdutoInput, TB_QTD_PRODUTOUncheckedCreateWithoutProdutoInput>
  }

  export type TB_QTD_PRODUTOUpdateWithWhereUniqueWithoutProdutoInput = {
    where: TB_QTD_PRODUTOWhereUniqueInput
    data: XOR<TB_QTD_PRODUTOUpdateWithoutProdutoInput, TB_QTD_PRODUTOUncheckedUpdateWithoutProdutoInput>
  }

  export type TB_QTD_PRODUTOUpdateManyWithWhereWithoutProdutoInput = {
    where: TB_QTD_PRODUTOScalarWhereInput
    data: XOR<TB_QTD_PRODUTOUpdateManyMutationInput, TB_QTD_PRODUTOUncheckedUpdateManyWithoutProdutoInput>
  }

  export type TB_QTD_PRODUTOScalarWhereInput = {
    AND?: TB_QTD_PRODUTOScalarWhereInput | TB_QTD_PRODUTOScalarWhereInput[]
    OR?: TB_QTD_PRODUTOScalarWhereInput[]
    NOT?: TB_QTD_PRODUTOScalarWhereInput | TB_QTD_PRODUTOScalarWhereInput[]
    SQ_QTD_PRODUTO?: IntFilter<"TB_QTD_PRODUTO"> | number
    SQ_PRODUTO?: IntFilter<"TB_QTD_PRODUTO"> | number
    SQ_TAMANHO_PRODUTO?: IntFilter<"TB_QTD_PRODUTO"> | number
    QTD_PRODUTO?: IntFilter<"TB_QTD_PRODUTO"> | number
  }

  export type TB_ITENSUpsertWithWhereUniqueWithoutProdutoInput = {
    where: TB_ITENSWhereUniqueInput
    update: XOR<TB_ITENSUpdateWithoutProdutoInput, TB_ITENSUncheckedUpdateWithoutProdutoInput>
    create: XOR<TB_ITENSCreateWithoutProdutoInput, TB_ITENSUncheckedCreateWithoutProdutoInput>
  }

  export type TB_ITENSUpdateWithWhereUniqueWithoutProdutoInput = {
    where: TB_ITENSWhereUniqueInput
    data: XOR<TB_ITENSUpdateWithoutProdutoInput, TB_ITENSUncheckedUpdateWithoutProdutoInput>
  }

  export type TB_ITENSUpdateManyWithWhereWithoutProdutoInput = {
    where: TB_ITENSScalarWhereInput
    data: XOR<TB_ITENSUpdateManyMutationInput, TB_ITENSUncheckedUpdateManyWithoutProdutoInput>
  }

  export type TB_ITENSScalarWhereInput = {
    AND?: TB_ITENSScalarWhereInput | TB_ITENSScalarWhereInput[]
    OR?: TB_ITENSScalarWhereInput[]
    NOT?: TB_ITENSScalarWhereInput | TB_ITENSScalarWhereInput[]
    SQ_ITENS?: IntFilter<"TB_ITENS"> | number
    SQ_CARRINHO?: IntFilter<"TB_ITENS"> | number
    SQ_PRODUTO?: IntFilter<"TB_ITENS"> | number
    SQ_TAMANHO_PRODUTO?: IntFilter<"TB_ITENS"> | number
    QTD_PRODUTO?: IntFilter<"TB_ITENS"> | number
  }

  export type TB_PRODUTOCreateWithoutTiposProdutoInput = {
    ST_PRODUTO: number
    NO_PRODUTO: string
    DT_CRIACAO?: Date | string
    DT_EDITADO?: Date | string
    quantidades?: TB_QTD_PRODUTOCreateNestedManyWithoutProdutoInput
    itens?: TB_ITENSCreateNestedManyWithoutProdutoInput
  }

  export type TB_PRODUTOUncheckedCreateWithoutTiposProdutoInput = {
    SQ_PRODUTO?: number
    ST_PRODUTO: number
    NO_PRODUTO: string
    DT_CRIACAO?: Date | string
    DT_EDITADO?: Date | string
    quantidades?: TB_QTD_PRODUTOUncheckedCreateNestedManyWithoutProdutoInput
    itens?: TB_ITENSUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type TB_PRODUTOCreateOrConnectWithoutTiposProdutoInput = {
    where: TB_PRODUTOWhereUniqueInput
    create: XOR<TB_PRODUTOCreateWithoutTiposProdutoInput, TB_PRODUTOUncheckedCreateWithoutTiposProdutoInput>
  }

  export type TB_CATEGORIA_PRODUTOCreateWithoutTiposProdutoInput = {
    NO_CATEGORIA: string
  }

  export type TB_CATEGORIA_PRODUTOUncheckedCreateWithoutTiposProdutoInput = {
    SQ_CATEGORIA_PRODUTO?: number
    NO_CATEGORIA: string
  }

  export type TB_CATEGORIA_PRODUTOCreateOrConnectWithoutTiposProdutoInput = {
    where: TB_CATEGORIA_PRODUTOWhereUniqueInput
    create: XOR<TB_CATEGORIA_PRODUTOCreateWithoutTiposProdutoInput, TB_CATEGORIA_PRODUTOUncheckedCreateWithoutTiposProdutoInput>
  }

  export type TB_PRODUTOUpsertWithoutTiposProdutoInput = {
    update: XOR<TB_PRODUTOUpdateWithoutTiposProdutoInput, TB_PRODUTOUncheckedUpdateWithoutTiposProdutoInput>
    create: XOR<TB_PRODUTOCreateWithoutTiposProdutoInput, TB_PRODUTOUncheckedCreateWithoutTiposProdutoInput>
    where?: TB_PRODUTOWhereInput
  }

  export type TB_PRODUTOUpdateToOneWithWhereWithoutTiposProdutoInput = {
    where?: TB_PRODUTOWhereInput
    data: XOR<TB_PRODUTOUpdateWithoutTiposProdutoInput, TB_PRODUTOUncheckedUpdateWithoutTiposProdutoInput>
  }

  export type TB_PRODUTOUpdateWithoutTiposProdutoInput = {
    ST_PRODUTO?: IntFieldUpdateOperationsInput | number
    NO_PRODUTO?: StringFieldUpdateOperationsInput | string
    DT_CRIACAO?: DateTimeFieldUpdateOperationsInput | Date | string
    DT_EDITADO?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidades?: TB_QTD_PRODUTOUpdateManyWithoutProdutoNestedInput
    itens?: TB_ITENSUpdateManyWithoutProdutoNestedInput
  }

  export type TB_PRODUTOUncheckedUpdateWithoutTiposProdutoInput = {
    SQ_PRODUTO?: IntFieldUpdateOperationsInput | number
    ST_PRODUTO?: IntFieldUpdateOperationsInput | number
    NO_PRODUTO?: StringFieldUpdateOperationsInput | string
    DT_CRIACAO?: DateTimeFieldUpdateOperationsInput | Date | string
    DT_EDITADO?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidades?: TB_QTD_PRODUTOUncheckedUpdateManyWithoutProdutoNestedInput
    itens?: TB_ITENSUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type TB_CATEGORIA_PRODUTOUpsertWithoutTiposProdutoInput = {
    update: XOR<TB_CATEGORIA_PRODUTOUpdateWithoutTiposProdutoInput, TB_CATEGORIA_PRODUTOUncheckedUpdateWithoutTiposProdutoInput>
    create: XOR<TB_CATEGORIA_PRODUTOCreateWithoutTiposProdutoInput, TB_CATEGORIA_PRODUTOUncheckedCreateWithoutTiposProdutoInput>
    where?: TB_CATEGORIA_PRODUTOWhereInput
  }

  export type TB_CATEGORIA_PRODUTOUpdateToOneWithWhereWithoutTiposProdutoInput = {
    where?: TB_CATEGORIA_PRODUTOWhereInput
    data: XOR<TB_CATEGORIA_PRODUTOUpdateWithoutTiposProdutoInput, TB_CATEGORIA_PRODUTOUncheckedUpdateWithoutTiposProdutoInput>
  }

  export type TB_CATEGORIA_PRODUTOUpdateWithoutTiposProdutoInput = {
    NO_CATEGORIA?: StringFieldUpdateOperationsInput | string
  }

  export type TB_CATEGORIA_PRODUTOUncheckedUpdateWithoutTiposProdutoInput = {
    SQ_CATEGORIA_PRODUTO?: IntFieldUpdateOperationsInput | number
    NO_CATEGORIA?: StringFieldUpdateOperationsInput | string
  }

  export type TB_TIPO_PRODUTOCreateWithoutCategoriaProdutoInput = {
    produto: TB_PRODUTOCreateNestedOneWithoutTiposProdutoInput
  }

  export type TB_TIPO_PRODUTOUncheckedCreateWithoutCategoriaProdutoInput = {
    SQ_TIPO_PRODUTO?: number
    SQ_PRODUTO: number
  }

  export type TB_TIPO_PRODUTOCreateOrConnectWithoutCategoriaProdutoInput = {
    where: TB_TIPO_PRODUTOWhereUniqueInput
    create: XOR<TB_TIPO_PRODUTOCreateWithoutCategoriaProdutoInput, TB_TIPO_PRODUTOUncheckedCreateWithoutCategoriaProdutoInput>
  }

  export type TB_TIPO_PRODUTOCreateManyCategoriaProdutoInputEnvelope = {
    data: TB_TIPO_PRODUTOCreateManyCategoriaProdutoInput | TB_TIPO_PRODUTOCreateManyCategoriaProdutoInput[]
    skipDuplicates?: boolean
  }

  export type TB_TIPO_PRODUTOUpsertWithWhereUniqueWithoutCategoriaProdutoInput = {
    where: TB_TIPO_PRODUTOWhereUniqueInput
    update: XOR<TB_TIPO_PRODUTOUpdateWithoutCategoriaProdutoInput, TB_TIPO_PRODUTOUncheckedUpdateWithoutCategoriaProdutoInput>
    create: XOR<TB_TIPO_PRODUTOCreateWithoutCategoriaProdutoInput, TB_TIPO_PRODUTOUncheckedCreateWithoutCategoriaProdutoInput>
  }

  export type TB_TIPO_PRODUTOUpdateWithWhereUniqueWithoutCategoriaProdutoInput = {
    where: TB_TIPO_PRODUTOWhereUniqueInput
    data: XOR<TB_TIPO_PRODUTOUpdateWithoutCategoriaProdutoInput, TB_TIPO_PRODUTOUncheckedUpdateWithoutCategoriaProdutoInput>
  }

  export type TB_TIPO_PRODUTOUpdateManyWithWhereWithoutCategoriaProdutoInput = {
    where: TB_TIPO_PRODUTOScalarWhereInput
    data: XOR<TB_TIPO_PRODUTOUpdateManyMutationInput, TB_TIPO_PRODUTOUncheckedUpdateManyWithoutCategoriaProdutoInput>
  }

  export type TB_PRODUTOCreateWithoutQuantidadesInput = {
    ST_PRODUTO: number
    NO_PRODUTO: string
    DT_CRIACAO?: Date | string
    DT_EDITADO?: Date | string
    tiposProduto?: TB_TIPO_PRODUTOCreateNestedManyWithoutProdutoInput
    itens?: TB_ITENSCreateNestedManyWithoutProdutoInput
  }

  export type TB_PRODUTOUncheckedCreateWithoutQuantidadesInput = {
    SQ_PRODUTO?: number
    ST_PRODUTO: number
    NO_PRODUTO: string
    DT_CRIACAO?: Date | string
    DT_EDITADO?: Date | string
    tiposProduto?: TB_TIPO_PRODUTOUncheckedCreateNestedManyWithoutProdutoInput
    itens?: TB_ITENSUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type TB_PRODUTOCreateOrConnectWithoutQuantidadesInput = {
    where: TB_PRODUTOWhereUniqueInput
    create: XOR<TB_PRODUTOCreateWithoutQuantidadesInput, TB_PRODUTOUncheckedCreateWithoutQuantidadesInput>
  }

  export type TB_TAMANHO_PRODUTOCreateWithoutQtdProdutosInput = {
    NO_CATEGORIA: string
    itens?: TB_ITENSCreateNestedManyWithoutTamanhoProdutoInput
  }

  export type TB_TAMANHO_PRODUTOUncheckedCreateWithoutQtdProdutosInput = {
    SQ_TAMANHO_PRODUTO?: number
    NO_CATEGORIA: string
    itens?: TB_ITENSUncheckedCreateNestedManyWithoutTamanhoProdutoInput
  }

  export type TB_TAMANHO_PRODUTOCreateOrConnectWithoutQtdProdutosInput = {
    where: TB_TAMANHO_PRODUTOWhereUniqueInput
    create: XOR<TB_TAMANHO_PRODUTOCreateWithoutQtdProdutosInput, TB_TAMANHO_PRODUTOUncheckedCreateWithoutQtdProdutosInput>
  }

  export type TB_PRODUTOUpsertWithoutQuantidadesInput = {
    update: XOR<TB_PRODUTOUpdateWithoutQuantidadesInput, TB_PRODUTOUncheckedUpdateWithoutQuantidadesInput>
    create: XOR<TB_PRODUTOCreateWithoutQuantidadesInput, TB_PRODUTOUncheckedCreateWithoutQuantidadesInput>
    where?: TB_PRODUTOWhereInput
  }

  export type TB_PRODUTOUpdateToOneWithWhereWithoutQuantidadesInput = {
    where?: TB_PRODUTOWhereInput
    data: XOR<TB_PRODUTOUpdateWithoutQuantidadesInput, TB_PRODUTOUncheckedUpdateWithoutQuantidadesInput>
  }

  export type TB_PRODUTOUpdateWithoutQuantidadesInput = {
    ST_PRODUTO?: IntFieldUpdateOperationsInput | number
    NO_PRODUTO?: StringFieldUpdateOperationsInput | string
    DT_CRIACAO?: DateTimeFieldUpdateOperationsInput | Date | string
    DT_EDITADO?: DateTimeFieldUpdateOperationsInput | Date | string
    tiposProduto?: TB_TIPO_PRODUTOUpdateManyWithoutProdutoNestedInput
    itens?: TB_ITENSUpdateManyWithoutProdutoNestedInput
  }

  export type TB_PRODUTOUncheckedUpdateWithoutQuantidadesInput = {
    SQ_PRODUTO?: IntFieldUpdateOperationsInput | number
    ST_PRODUTO?: IntFieldUpdateOperationsInput | number
    NO_PRODUTO?: StringFieldUpdateOperationsInput | string
    DT_CRIACAO?: DateTimeFieldUpdateOperationsInput | Date | string
    DT_EDITADO?: DateTimeFieldUpdateOperationsInput | Date | string
    tiposProduto?: TB_TIPO_PRODUTOUncheckedUpdateManyWithoutProdutoNestedInput
    itens?: TB_ITENSUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type TB_TAMANHO_PRODUTOUpsertWithoutQtdProdutosInput = {
    update: XOR<TB_TAMANHO_PRODUTOUpdateWithoutQtdProdutosInput, TB_TAMANHO_PRODUTOUncheckedUpdateWithoutQtdProdutosInput>
    create: XOR<TB_TAMANHO_PRODUTOCreateWithoutQtdProdutosInput, TB_TAMANHO_PRODUTOUncheckedCreateWithoutQtdProdutosInput>
    where?: TB_TAMANHO_PRODUTOWhereInput
  }

  export type TB_TAMANHO_PRODUTOUpdateToOneWithWhereWithoutQtdProdutosInput = {
    where?: TB_TAMANHO_PRODUTOWhereInput
    data: XOR<TB_TAMANHO_PRODUTOUpdateWithoutQtdProdutosInput, TB_TAMANHO_PRODUTOUncheckedUpdateWithoutQtdProdutosInput>
  }

  export type TB_TAMANHO_PRODUTOUpdateWithoutQtdProdutosInput = {
    NO_CATEGORIA?: StringFieldUpdateOperationsInput | string
    itens?: TB_ITENSUpdateManyWithoutTamanhoProdutoNestedInput
  }

  export type TB_TAMANHO_PRODUTOUncheckedUpdateWithoutQtdProdutosInput = {
    SQ_TAMANHO_PRODUTO?: IntFieldUpdateOperationsInput | number
    NO_CATEGORIA?: StringFieldUpdateOperationsInput | string
    itens?: TB_ITENSUncheckedUpdateManyWithoutTamanhoProdutoNestedInput
  }

  export type TB_QTD_PRODUTOCreateWithoutTamanhoProdutoInput = {
    QTD_PRODUTO: number
    produto: TB_PRODUTOCreateNestedOneWithoutQuantidadesInput
  }

  export type TB_QTD_PRODUTOUncheckedCreateWithoutTamanhoProdutoInput = {
    SQ_QTD_PRODUTO?: number
    SQ_PRODUTO: number
    QTD_PRODUTO: number
  }

  export type TB_QTD_PRODUTOCreateOrConnectWithoutTamanhoProdutoInput = {
    where: TB_QTD_PRODUTOWhereUniqueInput
    create: XOR<TB_QTD_PRODUTOCreateWithoutTamanhoProdutoInput, TB_QTD_PRODUTOUncheckedCreateWithoutTamanhoProdutoInput>
  }

  export type TB_QTD_PRODUTOCreateManyTamanhoProdutoInputEnvelope = {
    data: TB_QTD_PRODUTOCreateManyTamanhoProdutoInput | TB_QTD_PRODUTOCreateManyTamanhoProdutoInput[]
    skipDuplicates?: boolean
  }

  export type TB_ITENSCreateWithoutTamanhoProdutoInput = {
    QTD_PRODUTO: number
    carrinho: TB_CARRINHOCreateNestedOneWithoutItensInput
    produto: TB_PRODUTOCreateNestedOneWithoutItensInput
  }

  export type TB_ITENSUncheckedCreateWithoutTamanhoProdutoInput = {
    SQ_ITENS?: number
    SQ_CARRINHO: number
    SQ_PRODUTO: number
    QTD_PRODUTO: number
  }

  export type TB_ITENSCreateOrConnectWithoutTamanhoProdutoInput = {
    where: TB_ITENSWhereUniqueInput
    create: XOR<TB_ITENSCreateWithoutTamanhoProdutoInput, TB_ITENSUncheckedCreateWithoutTamanhoProdutoInput>
  }

  export type TB_ITENSCreateManyTamanhoProdutoInputEnvelope = {
    data: TB_ITENSCreateManyTamanhoProdutoInput | TB_ITENSCreateManyTamanhoProdutoInput[]
    skipDuplicates?: boolean
  }

  export type TB_QTD_PRODUTOUpsertWithWhereUniqueWithoutTamanhoProdutoInput = {
    where: TB_QTD_PRODUTOWhereUniqueInput
    update: XOR<TB_QTD_PRODUTOUpdateWithoutTamanhoProdutoInput, TB_QTD_PRODUTOUncheckedUpdateWithoutTamanhoProdutoInput>
    create: XOR<TB_QTD_PRODUTOCreateWithoutTamanhoProdutoInput, TB_QTD_PRODUTOUncheckedCreateWithoutTamanhoProdutoInput>
  }

  export type TB_QTD_PRODUTOUpdateWithWhereUniqueWithoutTamanhoProdutoInput = {
    where: TB_QTD_PRODUTOWhereUniqueInput
    data: XOR<TB_QTD_PRODUTOUpdateWithoutTamanhoProdutoInput, TB_QTD_PRODUTOUncheckedUpdateWithoutTamanhoProdutoInput>
  }

  export type TB_QTD_PRODUTOUpdateManyWithWhereWithoutTamanhoProdutoInput = {
    where: TB_QTD_PRODUTOScalarWhereInput
    data: XOR<TB_QTD_PRODUTOUpdateManyMutationInput, TB_QTD_PRODUTOUncheckedUpdateManyWithoutTamanhoProdutoInput>
  }

  export type TB_ITENSUpsertWithWhereUniqueWithoutTamanhoProdutoInput = {
    where: TB_ITENSWhereUniqueInput
    update: XOR<TB_ITENSUpdateWithoutTamanhoProdutoInput, TB_ITENSUncheckedUpdateWithoutTamanhoProdutoInput>
    create: XOR<TB_ITENSCreateWithoutTamanhoProdutoInput, TB_ITENSUncheckedCreateWithoutTamanhoProdutoInput>
  }

  export type TB_ITENSUpdateWithWhereUniqueWithoutTamanhoProdutoInput = {
    where: TB_ITENSWhereUniqueInput
    data: XOR<TB_ITENSUpdateWithoutTamanhoProdutoInput, TB_ITENSUncheckedUpdateWithoutTamanhoProdutoInput>
  }

  export type TB_ITENSUpdateManyWithWhereWithoutTamanhoProdutoInput = {
    where: TB_ITENSScalarWhereInput
    data: XOR<TB_ITENSUpdateManyMutationInput, TB_ITENSUncheckedUpdateManyWithoutTamanhoProdutoInput>
  }

  export type TB_USUARIOCreateWithoutCarrinhoInput = {
    TP_USUARIO?: number
    ST_USUARIO: number
    NO_USUARIO: string
    EMAIL_USUARIO: string
    SENHA_USUARIO: string
    DT_CRIACAO?: Date | string
    DT_EDITADO?: Date | string
    tipoUsuario?: TB_TIPO_USUARIOCreateNestedOneWithoutUsuarioInput
  }

  export type TB_USUARIOUncheckedCreateWithoutCarrinhoInput = {
    SQ_USUARIO?: number
    TP_USUARIO?: number
    ST_USUARIO: number
    NO_USUARIO: string
    EMAIL_USUARIO: string
    SENHA_USUARIO: string
    DT_CRIACAO?: Date | string
    DT_EDITADO?: Date | string
    tipoUsuario?: TB_TIPO_USUARIOUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type TB_USUARIOCreateOrConnectWithoutCarrinhoInput = {
    where: TB_USUARIOWhereUniqueInput
    create: XOR<TB_USUARIOCreateWithoutCarrinhoInput, TB_USUARIOUncheckedCreateWithoutCarrinhoInput>
  }

  export type TB_ITENSCreateWithoutCarrinhoInput = {
    QTD_PRODUTO: number
    produto: TB_PRODUTOCreateNestedOneWithoutItensInput
    tamanhoProduto: TB_TAMANHO_PRODUTOCreateNestedOneWithoutItensInput
  }

  export type TB_ITENSUncheckedCreateWithoutCarrinhoInput = {
    SQ_ITENS?: number
    SQ_PRODUTO: number
    SQ_TAMANHO_PRODUTO: number
    QTD_PRODUTO: number
  }

  export type TB_ITENSCreateOrConnectWithoutCarrinhoInput = {
    where: TB_ITENSWhereUniqueInput
    create: XOR<TB_ITENSCreateWithoutCarrinhoInput, TB_ITENSUncheckedCreateWithoutCarrinhoInput>
  }

  export type TB_ITENSCreateManyCarrinhoInputEnvelope = {
    data: TB_ITENSCreateManyCarrinhoInput | TB_ITENSCreateManyCarrinhoInput[]
    skipDuplicates?: boolean
  }

  export type TB_USUARIOUpsertWithoutCarrinhoInput = {
    update: XOR<TB_USUARIOUpdateWithoutCarrinhoInput, TB_USUARIOUncheckedUpdateWithoutCarrinhoInput>
    create: XOR<TB_USUARIOCreateWithoutCarrinhoInput, TB_USUARIOUncheckedCreateWithoutCarrinhoInput>
    where?: TB_USUARIOWhereInput
  }

  export type TB_USUARIOUpdateToOneWithWhereWithoutCarrinhoInput = {
    where?: TB_USUARIOWhereInput
    data: XOR<TB_USUARIOUpdateWithoutCarrinhoInput, TB_USUARIOUncheckedUpdateWithoutCarrinhoInput>
  }

  export type TB_USUARIOUpdateWithoutCarrinhoInput = {
    TP_USUARIO?: IntFieldUpdateOperationsInput | number
    ST_USUARIO?: IntFieldUpdateOperationsInput | number
    NO_USUARIO?: StringFieldUpdateOperationsInput | string
    EMAIL_USUARIO?: StringFieldUpdateOperationsInput | string
    SENHA_USUARIO?: StringFieldUpdateOperationsInput | string
    DT_CRIACAO?: DateTimeFieldUpdateOperationsInput | Date | string
    DT_EDITADO?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoUsuario?: TB_TIPO_USUARIOUpdateOneWithoutUsuarioNestedInput
  }

  export type TB_USUARIOUncheckedUpdateWithoutCarrinhoInput = {
    SQ_USUARIO?: IntFieldUpdateOperationsInput | number
    TP_USUARIO?: IntFieldUpdateOperationsInput | number
    ST_USUARIO?: IntFieldUpdateOperationsInput | number
    NO_USUARIO?: StringFieldUpdateOperationsInput | string
    EMAIL_USUARIO?: StringFieldUpdateOperationsInput | string
    SENHA_USUARIO?: StringFieldUpdateOperationsInput | string
    DT_CRIACAO?: DateTimeFieldUpdateOperationsInput | Date | string
    DT_EDITADO?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoUsuario?: TB_TIPO_USUARIOUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type TB_ITENSUpsertWithWhereUniqueWithoutCarrinhoInput = {
    where: TB_ITENSWhereUniqueInput
    update: XOR<TB_ITENSUpdateWithoutCarrinhoInput, TB_ITENSUncheckedUpdateWithoutCarrinhoInput>
    create: XOR<TB_ITENSCreateWithoutCarrinhoInput, TB_ITENSUncheckedCreateWithoutCarrinhoInput>
  }

  export type TB_ITENSUpdateWithWhereUniqueWithoutCarrinhoInput = {
    where: TB_ITENSWhereUniqueInput
    data: XOR<TB_ITENSUpdateWithoutCarrinhoInput, TB_ITENSUncheckedUpdateWithoutCarrinhoInput>
  }

  export type TB_ITENSUpdateManyWithWhereWithoutCarrinhoInput = {
    where: TB_ITENSScalarWhereInput
    data: XOR<TB_ITENSUpdateManyMutationInput, TB_ITENSUncheckedUpdateManyWithoutCarrinhoInput>
  }

  export type TB_CARRINHOCreateWithoutItensInput = {
    usuario: TB_USUARIOCreateNestedOneWithoutCarrinhoInput
  }

  export type TB_CARRINHOUncheckedCreateWithoutItensInput = {
    SQ_CARRINHO?: number
    SQ_USUARIO: number
  }

  export type TB_CARRINHOCreateOrConnectWithoutItensInput = {
    where: TB_CARRINHOWhereUniqueInput
    create: XOR<TB_CARRINHOCreateWithoutItensInput, TB_CARRINHOUncheckedCreateWithoutItensInput>
  }

  export type TB_PRODUTOCreateWithoutItensInput = {
    ST_PRODUTO: number
    NO_PRODUTO: string
    DT_CRIACAO?: Date | string
    DT_EDITADO?: Date | string
    tiposProduto?: TB_TIPO_PRODUTOCreateNestedManyWithoutProdutoInput
    quantidades?: TB_QTD_PRODUTOCreateNestedManyWithoutProdutoInput
  }

  export type TB_PRODUTOUncheckedCreateWithoutItensInput = {
    SQ_PRODUTO?: number
    ST_PRODUTO: number
    NO_PRODUTO: string
    DT_CRIACAO?: Date | string
    DT_EDITADO?: Date | string
    tiposProduto?: TB_TIPO_PRODUTOUncheckedCreateNestedManyWithoutProdutoInput
    quantidades?: TB_QTD_PRODUTOUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type TB_PRODUTOCreateOrConnectWithoutItensInput = {
    where: TB_PRODUTOWhereUniqueInput
    create: XOR<TB_PRODUTOCreateWithoutItensInput, TB_PRODUTOUncheckedCreateWithoutItensInput>
  }

  export type TB_TAMANHO_PRODUTOCreateWithoutItensInput = {
    NO_CATEGORIA: string
    qtdProdutos?: TB_QTD_PRODUTOCreateNestedManyWithoutTamanhoProdutoInput
  }

  export type TB_TAMANHO_PRODUTOUncheckedCreateWithoutItensInput = {
    SQ_TAMANHO_PRODUTO?: number
    NO_CATEGORIA: string
    qtdProdutos?: TB_QTD_PRODUTOUncheckedCreateNestedManyWithoutTamanhoProdutoInput
  }

  export type TB_TAMANHO_PRODUTOCreateOrConnectWithoutItensInput = {
    where: TB_TAMANHO_PRODUTOWhereUniqueInput
    create: XOR<TB_TAMANHO_PRODUTOCreateWithoutItensInput, TB_TAMANHO_PRODUTOUncheckedCreateWithoutItensInput>
  }

  export type TB_CARRINHOUpsertWithoutItensInput = {
    update: XOR<TB_CARRINHOUpdateWithoutItensInput, TB_CARRINHOUncheckedUpdateWithoutItensInput>
    create: XOR<TB_CARRINHOCreateWithoutItensInput, TB_CARRINHOUncheckedCreateWithoutItensInput>
    where?: TB_CARRINHOWhereInput
  }

  export type TB_CARRINHOUpdateToOneWithWhereWithoutItensInput = {
    where?: TB_CARRINHOWhereInput
    data: XOR<TB_CARRINHOUpdateWithoutItensInput, TB_CARRINHOUncheckedUpdateWithoutItensInput>
  }

  export type TB_CARRINHOUpdateWithoutItensInput = {
    usuario?: TB_USUARIOUpdateOneRequiredWithoutCarrinhoNestedInput
  }

  export type TB_CARRINHOUncheckedUpdateWithoutItensInput = {
    SQ_CARRINHO?: IntFieldUpdateOperationsInput | number
    SQ_USUARIO?: IntFieldUpdateOperationsInput | number
  }

  export type TB_PRODUTOUpsertWithoutItensInput = {
    update: XOR<TB_PRODUTOUpdateWithoutItensInput, TB_PRODUTOUncheckedUpdateWithoutItensInput>
    create: XOR<TB_PRODUTOCreateWithoutItensInput, TB_PRODUTOUncheckedCreateWithoutItensInput>
    where?: TB_PRODUTOWhereInput
  }

  export type TB_PRODUTOUpdateToOneWithWhereWithoutItensInput = {
    where?: TB_PRODUTOWhereInput
    data: XOR<TB_PRODUTOUpdateWithoutItensInput, TB_PRODUTOUncheckedUpdateWithoutItensInput>
  }

  export type TB_PRODUTOUpdateWithoutItensInput = {
    ST_PRODUTO?: IntFieldUpdateOperationsInput | number
    NO_PRODUTO?: StringFieldUpdateOperationsInput | string
    DT_CRIACAO?: DateTimeFieldUpdateOperationsInput | Date | string
    DT_EDITADO?: DateTimeFieldUpdateOperationsInput | Date | string
    tiposProduto?: TB_TIPO_PRODUTOUpdateManyWithoutProdutoNestedInput
    quantidades?: TB_QTD_PRODUTOUpdateManyWithoutProdutoNestedInput
  }

  export type TB_PRODUTOUncheckedUpdateWithoutItensInput = {
    SQ_PRODUTO?: IntFieldUpdateOperationsInput | number
    ST_PRODUTO?: IntFieldUpdateOperationsInput | number
    NO_PRODUTO?: StringFieldUpdateOperationsInput | string
    DT_CRIACAO?: DateTimeFieldUpdateOperationsInput | Date | string
    DT_EDITADO?: DateTimeFieldUpdateOperationsInput | Date | string
    tiposProduto?: TB_TIPO_PRODUTOUncheckedUpdateManyWithoutProdutoNestedInput
    quantidades?: TB_QTD_PRODUTOUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type TB_TAMANHO_PRODUTOUpsertWithoutItensInput = {
    update: XOR<TB_TAMANHO_PRODUTOUpdateWithoutItensInput, TB_TAMANHO_PRODUTOUncheckedUpdateWithoutItensInput>
    create: XOR<TB_TAMANHO_PRODUTOCreateWithoutItensInput, TB_TAMANHO_PRODUTOUncheckedCreateWithoutItensInput>
    where?: TB_TAMANHO_PRODUTOWhereInput
  }

  export type TB_TAMANHO_PRODUTOUpdateToOneWithWhereWithoutItensInput = {
    where?: TB_TAMANHO_PRODUTOWhereInput
    data: XOR<TB_TAMANHO_PRODUTOUpdateWithoutItensInput, TB_TAMANHO_PRODUTOUncheckedUpdateWithoutItensInput>
  }

  export type TB_TAMANHO_PRODUTOUpdateWithoutItensInput = {
    NO_CATEGORIA?: StringFieldUpdateOperationsInput | string
    qtdProdutos?: TB_QTD_PRODUTOUpdateManyWithoutTamanhoProdutoNestedInput
  }

  export type TB_TAMANHO_PRODUTOUncheckedUpdateWithoutItensInput = {
    SQ_TAMANHO_PRODUTO?: IntFieldUpdateOperationsInput | number
    NO_CATEGORIA?: StringFieldUpdateOperationsInput | string
    qtdProdutos?: TB_QTD_PRODUTOUncheckedUpdateManyWithoutTamanhoProdutoNestedInput
  }

  export type TB_TIPO_USUARIOCreateManyCategoriaUsuarioInput = {
    SQ_TIPO_USUARIO?: number
    SQ_USUARIO: number
  }

  export type TB_TIPO_USUARIOUpdateWithoutCategoriaUsuarioInput = {
    usuario?: TB_USUARIOUpdateOneRequiredWithoutTipoUsuarioNestedInput
  }

  export type TB_TIPO_USUARIOUncheckedUpdateWithoutCategoriaUsuarioInput = {
    SQ_TIPO_USUARIO?: IntFieldUpdateOperationsInput | number
    SQ_USUARIO?: IntFieldUpdateOperationsInput | number
  }

  export type TB_TIPO_USUARIOUncheckedUpdateManyWithoutCategoriaUsuarioInput = {
    SQ_TIPO_USUARIO?: IntFieldUpdateOperationsInput | number
    SQ_USUARIO?: IntFieldUpdateOperationsInput | number
  }

  export type TB_TIPO_PRODUTOCreateManyProdutoInput = {
    SQ_TIPO_PRODUTO?: number
    SQ_CATEGORIA_PRODUTO: number
  }

  export type TB_QTD_PRODUTOCreateManyProdutoInput = {
    SQ_QTD_PRODUTO?: number
    SQ_TAMANHO_PRODUTO: number
    QTD_PRODUTO: number
  }

  export type TB_ITENSCreateManyProdutoInput = {
    SQ_ITENS?: number
    SQ_CARRINHO: number
    SQ_TAMANHO_PRODUTO: number
    QTD_PRODUTO: number
  }

  export type TB_TIPO_PRODUTOUpdateWithoutProdutoInput = {
    categoriaProduto?: TB_CATEGORIA_PRODUTOUpdateOneRequiredWithoutTiposProdutoNestedInput
  }

  export type TB_TIPO_PRODUTOUncheckedUpdateWithoutProdutoInput = {
    SQ_TIPO_PRODUTO?: IntFieldUpdateOperationsInput | number
    SQ_CATEGORIA_PRODUTO?: IntFieldUpdateOperationsInput | number
  }

  export type TB_TIPO_PRODUTOUncheckedUpdateManyWithoutProdutoInput = {
    SQ_TIPO_PRODUTO?: IntFieldUpdateOperationsInput | number
    SQ_CATEGORIA_PRODUTO?: IntFieldUpdateOperationsInput | number
  }

  export type TB_QTD_PRODUTOUpdateWithoutProdutoInput = {
    QTD_PRODUTO?: IntFieldUpdateOperationsInput | number
    tamanhoProduto?: TB_TAMANHO_PRODUTOUpdateOneRequiredWithoutQtdProdutosNestedInput
  }

  export type TB_QTD_PRODUTOUncheckedUpdateWithoutProdutoInput = {
    SQ_QTD_PRODUTO?: IntFieldUpdateOperationsInput | number
    SQ_TAMANHO_PRODUTO?: IntFieldUpdateOperationsInput | number
    QTD_PRODUTO?: IntFieldUpdateOperationsInput | number
  }

  export type TB_QTD_PRODUTOUncheckedUpdateManyWithoutProdutoInput = {
    SQ_QTD_PRODUTO?: IntFieldUpdateOperationsInput | number
    SQ_TAMANHO_PRODUTO?: IntFieldUpdateOperationsInput | number
    QTD_PRODUTO?: IntFieldUpdateOperationsInput | number
  }

  export type TB_ITENSUpdateWithoutProdutoInput = {
    QTD_PRODUTO?: IntFieldUpdateOperationsInput | number
    carrinho?: TB_CARRINHOUpdateOneRequiredWithoutItensNestedInput
    tamanhoProduto?: TB_TAMANHO_PRODUTOUpdateOneRequiredWithoutItensNestedInput
  }

  export type TB_ITENSUncheckedUpdateWithoutProdutoInput = {
    SQ_ITENS?: IntFieldUpdateOperationsInput | number
    SQ_CARRINHO?: IntFieldUpdateOperationsInput | number
    SQ_TAMANHO_PRODUTO?: IntFieldUpdateOperationsInput | number
    QTD_PRODUTO?: IntFieldUpdateOperationsInput | number
  }

  export type TB_ITENSUncheckedUpdateManyWithoutProdutoInput = {
    SQ_ITENS?: IntFieldUpdateOperationsInput | number
    SQ_CARRINHO?: IntFieldUpdateOperationsInput | number
    SQ_TAMANHO_PRODUTO?: IntFieldUpdateOperationsInput | number
    QTD_PRODUTO?: IntFieldUpdateOperationsInput | number
  }

  export type TB_TIPO_PRODUTOCreateManyCategoriaProdutoInput = {
    SQ_TIPO_PRODUTO?: number
    SQ_PRODUTO: number
  }

  export type TB_TIPO_PRODUTOUpdateWithoutCategoriaProdutoInput = {
    produto?: TB_PRODUTOUpdateOneRequiredWithoutTiposProdutoNestedInput
  }

  export type TB_TIPO_PRODUTOUncheckedUpdateWithoutCategoriaProdutoInput = {
    SQ_TIPO_PRODUTO?: IntFieldUpdateOperationsInput | number
    SQ_PRODUTO?: IntFieldUpdateOperationsInput | number
  }

  export type TB_TIPO_PRODUTOUncheckedUpdateManyWithoutCategoriaProdutoInput = {
    SQ_TIPO_PRODUTO?: IntFieldUpdateOperationsInput | number
    SQ_PRODUTO?: IntFieldUpdateOperationsInput | number
  }

  export type TB_QTD_PRODUTOCreateManyTamanhoProdutoInput = {
    SQ_QTD_PRODUTO?: number
    SQ_PRODUTO: number
    QTD_PRODUTO: number
  }

  export type TB_ITENSCreateManyTamanhoProdutoInput = {
    SQ_ITENS?: number
    SQ_CARRINHO: number
    SQ_PRODUTO: number
    QTD_PRODUTO: number
  }

  export type TB_QTD_PRODUTOUpdateWithoutTamanhoProdutoInput = {
    QTD_PRODUTO?: IntFieldUpdateOperationsInput | number
    produto?: TB_PRODUTOUpdateOneRequiredWithoutQuantidadesNestedInput
  }

  export type TB_QTD_PRODUTOUncheckedUpdateWithoutTamanhoProdutoInput = {
    SQ_QTD_PRODUTO?: IntFieldUpdateOperationsInput | number
    SQ_PRODUTO?: IntFieldUpdateOperationsInput | number
    QTD_PRODUTO?: IntFieldUpdateOperationsInput | number
  }

  export type TB_QTD_PRODUTOUncheckedUpdateManyWithoutTamanhoProdutoInput = {
    SQ_QTD_PRODUTO?: IntFieldUpdateOperationsInput | number
    SQ_PRODUTO?: IntFieldUpdateOperationsInput | number
    QTD_PRODUTO?: IntFieldUpdateOperationsInput | number
  }

  export type TB_ITENSUpdateWithoutTamanhoProdutoInput = {
    QTD_PRODUTO?: IntFieldUpdateOperationsInput | number
    carrinho?: TB_CARRINHOUpdateOneRequiredWithoutItensNestedInput
    produto?: TB_PRODUTOUpdateOneRequiredWithoutItensNestedInput
  }

  export type TB_ITENSUncheckedUpdateWithoutTamanhoProdutoInput = {
    SQ_ITENS?: IntFieldUpdateOperationsInput | number
    SQ_CARRINHO?: IntFieldUpdateOperationsInput | number
    SQ_PRODUTO?: IntFieldUpdateOperationsInput | number
    QTD_PRODUTO?: IntFieldUpdateOperationsInput | number
  }

  export type TB_ITENSUncheckedUpdateManyWithoutTamanhoProdutoInput = {
    SQ_ITENS?: IntFieldUpdateOperationsInput | number
    SQ_CARRINHO?: IntFieldUpdateOperationsInput | number
    SQ_PRODUTO?: IntFieldUpdateOperationsInput | number
    QTD_PRODUTO?: IntFieldUpdateOperationsInput | number
  }

  export type TB_ITENSCreateManyCarrinhoInput = {
    SQ_ITENS?: number
    SQ_PRODUTO: number
    SQ_TAMANHO_PRODUTO: number
    QTD_PRODUTO: number
  }

  export type TB_ITENSUpdateWithoutCarrinhoInput = {
    QTD_PRODUTO?: IntFieldUpdateOperationsInput | number
    produto?: TB_PRODUTOUpdateOneRequiredWithoutItensNestedInput
    tamanhoProduto?: TB_TAMANHO_PRODUTOUpdateOneRequiredWithoutItensNestedInput
  }

  export type TB_ITENSUncheckedUpdateWithoutCarrinhoInput = {
    SQ_ITENS?: IntFieldUpdateOperationsInput | number
    SQ_PRODUTO?: IntFieldUpdateOperationsInput | number
    SQ_TAMANHO_PRODUTO?: IntFieldUpdateOperationsInput | number
    QTD_PRODUTO?: IntFieldUpdateOperationsInput | number
  }

  export type TB_ITENSUncheckedUpdateManyWithoutCarrinhoInput = {
    SQ_ITENS?: IntFieldUpdateOperationsInput | number
    SQ_PRODUTO?: IntFieldUpdateOperationsInput | number
    SQ_TAMANHO_PRODUTO?: IntFieldUpdateOperationsInput | number
    QTD_PRODUTO?: IntFieldUpdateOperationsInput | number
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