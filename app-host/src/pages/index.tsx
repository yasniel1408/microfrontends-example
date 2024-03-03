import dynamic from "next/dynamic";

const App1 = dynamic(() => import("app1/app1"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <>
      <p style={{ padding: 10, border: "red 1px solid" }}>Soy el Host</p>
      <App1 />
    </>
  );
}
