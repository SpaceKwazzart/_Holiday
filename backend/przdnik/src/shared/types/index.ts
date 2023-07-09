export enum AccessStatus {
  Private = 'private',
  Public = 'public',
}

export type Without<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type Email = string & { __emailBrand: never };
