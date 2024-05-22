import './globals.css'
import './carousel.css'
import './reset.css'
import Root from '@/config/Root'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
      />
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      <body>
        <Root>{children}</Root>
      </body>
    </html>
  )
}
