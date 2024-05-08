import React from "react";
import PropTypes, { any } from "prop-types";

import styles from "./SectionHeader.module.css";

/**
 * A header for a `Section[…]` component
 *
 * - heading text
 * - actions (e.g. links, buttons, form)
 * - automatic styles or markup for given context (ex: within a form or a table)
 *
 * @example
 * // a section header with heading text
 * <SectionHeader>
 *   <a href="…">Hyperlinked Name of Section</a>
 * </SectionHeader>
 * @example
 * // a form header with actions and heading text
 * <SectionHeader
 *   actions={<button type="reset">Reset</button>}
 *   isForForm
 * >
 *   Name of Form
 * </SectionHeader>
 * @example
 * // a table header with actions and heading text
 * <SectionHeader
 *   actions={<input type="search" />}
 *   isForTable
 * >
 *   Name of Table
 * </SectionHeader>
 */
function SectionHeader({
  actions,
  children,
  className,
  isForForm,
  isForTable,
}) {
  let styleName = "";
  const styleNameList = [styles["root"]];
  const HeadingTagName = isForForm || isForTable ? "h3" : "h2";

  if (isForForm) styleNameList.push(styles["for-form"]);
  if (isForTable) styleNameList.push(styles["for-table"]);

  // Do not join inside JSX (otherwise arcane styleName error occurs)
  styleName = styleNameList.join(" ");

  return (
    <header className={`${styleName} ${className}`}>
      {children && (
        <HeadingTagName className={styles.heading}>{children}</HeadingTagName>
      )}
      {actions}
    </header>
  );
}
SectionHeader.propTypes = {
  /** Any actions (buttons, links, forms, etc) */
  actions: any,
  /** The text a.k.a. title */
  children: any,
  /** Any additional className(s) for the root element */
  className: PropTypes.string,
  /** Whether this header is for a form */
  isForForm: PropTypes.bool,
  /** Whether this header is for a table */
  isForTable: PropTypes.bool,
};
SectionHeader.defaultProps = {
  actions: "",
  className: "",
  children: "",
  isForForm: false,
  isForTable: false,
};

export default SectionHeader;
