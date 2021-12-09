import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
  } from 'recharts';
import React, {useState, useEffect} from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import '@mui/material/Grid';
  
  export default function Chart() {
    const [training, setTraining] = useState([]);
    var map = {};
    var chartData = [];

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then(data => {setTraining(data.content)})
        .catch(err => console.error(err))
    } 
    
    useEffect(() => fetchData(), []);

    training.forEach((training) => {
        if (map[training.activity]) {
            map[training.activity] += training.duration
        } else {
            map[training.activity] = training.duration;
        }
    });
    
    Object.keys(map).forEach((key) => {
        chartData.push({
            name: key,
            minutes: map[key]
        },)
    })

    return (
        <div className='chartViewPort'>
            <ResponsiveContainer>
                <BarChart
                    //width={1800}
                    //height={700}
                    data={chartData}
                    //margin={{
                    //    top: 53,
                    //    right: 30    
                    //}}
                >
                    <CartesianGrid strokeDasharray='10 10' />
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Legend align='center' height={1} />
                    <Bar dataKey='minutes' fill='#349133' />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
  }