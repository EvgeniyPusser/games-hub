// Spinner.tsx
// export default function Spinner() {
//   return (
//     <div style={{ textAlign: "center", padding: "2rem", fontSize: "1.5rem" }}>
//       🌀 Summoning data from the void...
//     </div>
//   );
// }

// Even funnier variant
export default function Spinner() {
  return (
    <div style={{ textAlign: "center", padding: "2rem", fontSize: "1.2rem", fontFamily: "monospace" }}>
      <pre>
        {`
Loading...
     .--.
    |o_o |
    |:_/ |
   //   \\ \\
  (|     | )
 /'\\_   _/\\\`
 \\___)=(___/
        `}
      </pre>
      <div>Fetching secrets from the Matrix...</div>
    </div>
  );
}

