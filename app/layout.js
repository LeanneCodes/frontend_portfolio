"use client";

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@styles/GlobalStyles';
import theme from '@styles/theme';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
