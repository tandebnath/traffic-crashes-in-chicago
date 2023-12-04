"use client";
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import ChicagoMap from "@/components/ChicagoMap/ChicagoMap";
import Hero from "@/components/Hero/Hero";
import Introduction from "@/components/Introduction/Introduction";
import FilteredAnalysis from "@/components/FilteredAnalysis/FilteredAnalysis";
import ComparativeAnalysis from "@/components/ComparativeAnalysis/ComparativeAnalysis";

// Define the type for your data
interface DataPoint {
  latitude: number;
  longitude: number;
}

export default function Home() {
  // Replace this with your actual dataset
  // const data: DataPoint[] = [
  //   { latitude: 41.9, longitude: -87.6 },
  //   // Add more data points as needed
  // ];

  // const [data, setData] = React.useState<any>();
  // React.useEffect(() => {
  //   fetch(
  //     `https://data.cityofchicago.org/resource/85ca-t3if.json?$query=SELECT%20crash_record_id%2C%20latitude%2C%20longitude%20ORDER%20BY%20crash_date%20DESC%2C%20crash_record_id%20ASC%20LIMIT%20100`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  return (
    <div>
      <Hero />
      <FilteredAnalysis />
      <ComparativeAnalysis />
      <Introduction />
    </div>
  );
}
