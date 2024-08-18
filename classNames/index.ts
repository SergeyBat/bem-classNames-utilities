import {Mods} from "../types";

export function classNames(
  cls: string = '',
  modifiers: Mods = {},
  additionalStyles: Array<string | undefined> = [],
): string {
  return [
    cls,
    ...Object.entries(modifiers)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
    ...additionalStyles,
  ].join(' ');
}
