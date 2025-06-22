import React from "react";

interface Props {
  params: { destination: string };
}

export default function DestinationDetail({ params }: Props) {
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
