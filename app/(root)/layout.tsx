
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <main>
    Sibe Bar
        {children}
   </main>
  )
}
