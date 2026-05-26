import { cn, type ClassValue } from "./cn";

type VariantMap = Record<string, Record<string, ClassValue>>;

type VariantSelection<TVariants extends VariantMap> = Partial<{
  [Key in keyof TVariants]: keyof TVariants[Key];
}>;

type CompoundVariant<TVariants extends VariantMap> = VariantSelection<TVariants> & {
  className: ClassValue;
};

export interface VariantClassConfig<TVariants extends VariantMap> {
  base?: ClassValue;
  variants: TVariants;
  defaults?: VariantSelection<TVariants>;
  compoundVariants?: Array<CompoundVariant<TVariants>>;
}

export function createVariantClass<TVariants extends VariantMap>(
  config: VariantClassConfig<TVariants>,
) {
  return (selection: VariantSelection<TVariants> = {}) => {
    const resolved = { ...config.defaults, ...selection };
    const variantClasses = Object.entries(config.variants).map(([variantName, values]) => {
      const selected = resolved[variantName as keyof TVariants];
      return selected ? values[String(selected)] : undefined;
    });

    const compoundClasses = config.compoundVariants
      ?.filter((compound) =>
        Object.entries(compound).every(([key, value]) => {
          if (key === "className") {
            return true;
          }

          return resolved[key as keyof TVariants] === value;
        }),
      )
      .map((compound) => compound.className);

    return cn(config.base, variantClasses, compoundClasses);
  };
}
