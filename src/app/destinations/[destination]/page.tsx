import React from "react";

export default function DestinationDetail({
  params,
}: {
  params: { destination: string };
}) {
  return <div>page :{params.destination}</div>;
}

export async function generateStaticParams() {
  return [
    { destination: "paris" },
    { destination: "tokyo" },
    { destination: "kathmandu" },
    // Add all your expected static paths here
  ];
}
