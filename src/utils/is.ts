const is = {
  null: <T extends unknown>(value: T | null | undefined): value is null | undefined => value == null,
  notNull: <T extends unknown>(value: T | null | undefined): value is T => !is.null(value),
}

export default is;
