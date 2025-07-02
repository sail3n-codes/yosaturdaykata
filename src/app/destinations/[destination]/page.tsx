import React from "react";

export default async function DestinationDetail({
  params,
}: {
  params: Promise<{ destination: string }>;
}) {
  const destination = await params;
  console.log(destination);

  return <div></div>;
}

export async function generateStaticParams() {
  return [
    // { destination: "paris" },
    // { destination: "tokyo" },
    // { destination: "kathmandu" },
    // Add all your expected static paths here
  ];
}
