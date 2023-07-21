import dynamic from 'next/dynamic';  
import { ApexOptions } from 'apexcharts';

export const ApexCharts = dynamic(()=> import("react-apexcharts"), {ssr: false});

