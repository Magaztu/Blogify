import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen bg-gray-900 text-gray-100 font-mono">
          <Sidebar />
          <main className="flex-1 p-6 max-w-3x1 mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}