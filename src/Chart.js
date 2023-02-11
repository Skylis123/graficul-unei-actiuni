import React from 'react'
import {useState, useEffect} from 'react'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./style.css";

export default function BarChart(props) {
  
  const [dateTime, setDateTime] = useState([]);
  const [openValue, setOpenValue] = useState([]);

  const userData = {
    labels: dateTime,
    datasets: [{
      label: props.companyName,
      data : openValue
    }]
  };

  useEffect(() => {
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${props.companyName}&outputsize=compact&apikey=AMA3UNBUIQWO55T9`)
    .then((response) => response.json())
    .then((json) => {
      const date = [];
      const open = [];
      for (var key in json['Time Series (Daily)']) {
        date.push(key);
        open.push(json['Time Series (Daily)'][key]['1. open']);
      }
      setDateTime(date.reverse());
      setOpenValue(open.reverse());
    })
  },[props.companyName]);
  
  return (
    <div className = "chart">
      <Line data = {userData}/>
    </div>
  )
}
