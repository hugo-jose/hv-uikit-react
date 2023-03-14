import { HvBaseProps } from "../../../types";
import { BrandRoot, BrandSeparator, BrandName } from "./Brand.styles";
import headerBrandClasses, { HvHeaderBrandClasses } from "./brandClasses";
import clsx from "clsx";

export type HvBrandProps = HvBaseProps & {
  logo?: React.ReactNode;
  name?: string;
  classes?: HvHeaderBrandClasses;
};

/**
 * Header component is used to render a header bar with logo and brand name, navigation and actions.
 */
export const HvBrand = ({
  classes,
  logo,
  name,
  className,
  ...others
}: HvBrandProps) => {
  return (
    <BrandRoot
      className={clsx(classes?.root, headerBrandClasses.root, className)}
      {...others}
    >
      {logo}
      {logo && name && (
        <BrandSeparator
          className={clsx(classes?.separator, headerBrandClasses.separator)}
        />
      )}
      {name && <BrandName variant="label">{name}</BrandName>}
    </BrandRoot>
  );
};
