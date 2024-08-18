import {Args, ModuleStyles} from "../types";

type BemOnlyModule = (...args: Args) => string;

const checkClassInModule = (className: string, styles: ModuleStyles): string => {
  return styles[className] || className;
}

export function bem(
  blockName: string,
  styles: ModuleStyles = {}
): BemOnlyModule {
  return (...args: Args): string => {
    const [
      elementName= '',
      modifiers = {},
      additionalStyles = [],
    ] = args;

    const fullElementName: string =  elementName ? blockName.concat(blockName ?'__' : '', elementName) : blockName
    let elementNameWithAffix: string;


    if (elementName && !styles[fullElementName]) {
      elementNameWithAffix = styles[elementName] || fullElementName;
    } else {
      elementNameWithAffix = checkClassInModule(
        elementName
          ? fullElementName
          : blockName,
        styles
      )
    }


    return [
      elementNameWithAffix,
      ...Object.entries(modifiers)
        .filter(([_, value]) => Boolean(value))
        .map(([className]) => checkClassInModule(
          fullElementName.concat('_', className),
          styles
        )),
      ...additionalStyles,
    ].join(' ');
  }
};
