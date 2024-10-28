export type WithLoading<
  TLoadedTypeMap extends object,
  TBaseTypeMap extends object = object
> = TBaseTypeMap &
  (
    | ({
        loading: true;
      } & Partial<Record<keyof TLoadedTypeMap, undefined> | TLoadedTypeMap>)
    | ({ loading: false } & TLoadedTypeMap)
  );
