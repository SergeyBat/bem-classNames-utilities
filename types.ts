export type Mods = Record<string, boolean | string | undefined>;

export type Args = [
  elementName?: string,
  modifiers?: Mods,
  additional?: Array<string | undefined>,
]

export type ModuleStyles = Record<string, string>;
