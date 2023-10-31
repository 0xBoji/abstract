/**
* This file was automatically generated by @abstract-money/ts-codegen@0.28.3.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @abstract-money/ts-codegen generate command to regenerate this file.
*/

import { AssetEntry, InstantiateMsg, ExecuteMsg, QueryMsg, MigrateMsg, ConfigResponse, Addr, Uint128, TippersResponse, TipperResponse, TipCountResponse } from "./Template.types";
import { CamelCasedProperties } from "type-fest";
export abstract class TemplateExecuteMsgBuilder {
  static tip = (): ExecuteMsg => {
    return {
      tip: ({} as const)
    };
  };
  static updateConfig = ({
    exchanges
  }: CamelCasedProperties<Extract<ExecuteMsg, {
    update_config: unknown;
  }>["update_config"]>): ExecuteMsg => {
    return {
      update_config: ({
        exchanges
      } as const)
    };
  };
}
export abstract class TemplateQueryMsgBuilder {
  static config = (): QueryMsg => {
    return {
      config: ({} as const)
    };
  };
  static tipper = ({
    address
  }: CamelCasedProperties<Extract<QueryMsg, {
    tipper: unknown;
  }>["tipper"]>): QueryMsg => {
    return {
      tipper: ({
        address
      } as const)
    };
  };
  static tipCount = (): QueryMsg => {
    return {
      tip_count: ({} as const)
    };
  };
  static listTippers = ({
    limit,
    startAfter
  }: CamelCasedProperties<Extract<QueryMsg, {
    list_tippers: unknown;
  }>["list_tippers"]>): QueryMsg => {
    return {
      list_tippers: ({
        limit,
        start_after: startAfter
      } as const)
    };
  };
}