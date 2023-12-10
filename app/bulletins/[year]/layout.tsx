import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Image
        className="relative"
        src={"/images/bulletins1.png"}
        alt="Open Bible"
        width={1024}
        height={260}
      />
      {children}
    </div>
  );
}
