import * as React from 'react';
import ThemeRegistry from '../ThemeRegistry/ThemeRegistry';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry> 
            {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}