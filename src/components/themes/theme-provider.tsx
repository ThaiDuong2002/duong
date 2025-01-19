"use client";

import { ThemeProvider } from "next-themes";
import { ComponentProps } from "react";

const CustomThemeProvider = ({
  children,
  ...props
}: ComponentProps<typeof ThemeProvider>) => {
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
