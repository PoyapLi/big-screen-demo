import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {baseEchartOptions} from '../shared/base-echart-options';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart1 = () => {
    const divRef = useRef(null);
    const myChart = useRef(null);
    const data = [
        {name:'兰州1新区','policeStation':32},
        {name:'兰州2新区','policeStation':15},
        {name:'兰州3新区','policeStation':20},
        {name:'兰州4新区','policeStation':18},
        {name:'兰州5新区','policeStation':30},
        {name:'兰州6新区','policeStation':35},
        {name:'兰州7新区','policeStation':24},
        {name:'兰州8新区','policeStation':40},
        {name:'兰州9新区','policeStation':28}
    ];
    useEffect(()=>{
        setInterval(()=>{
            const newData = [
                {name:'兰州1新区','policeStation': 20 + Math.random()*10},
                {name:'兰州2新区','policeStation': 26 + Math.random()*10},
                {name:'兰州3新区','policeStation': 24 + Math.random()*10},
                {name:'兰州4新区','policeStation': 32 + Math.random()*10},
                {name:'兰州5新区','policeStation': 19 + Math.random()*10},
                {name:'兰州6新区','policeStation': 21 + Math.random()*10},
                {name:'兰州7新区','policeStation': 11 + Math.random()*10},
                {name:'兰州8新区','policeStation': 27 + Math.random()*10},
                {name:'兰州9新区','policeStation': 30 + Math.random()*10}
            ];
            updateChart1(newData)
        },1000)
    },[])

    const updateChart1 = (data)=> {
        myChart.current.setOption(createEchartsOptions({
            ...baseEchartOptions,
            xAxis: {
                axisLine: {
                    show: true,
                    lineStyle: {color: '#083B70'}
                },
                axisTick: {show: false},
                data: ['兰州1新区', '兰州2新区', '兰州3新区', '兰州4新区', '兰州5新区', '兰州6新区', '兰州7新区', '兰州8新区', '兰州9新区'],
                axisLabel: {
                    formatter(val) {
                        if (val.length > 2) {
                            const array = val.split('')
                            array.splice(2, 0, '\n');
                            return array.join('')
                        } else {
                            return val;
                        }
                    }
                }
            },
            yAxis: {
                min: 5,
                max: 40,
                splitLine: {show: false},
                axisLine: {
                    show: true,
                    lineStyle: {color: '#083B70'}
                },
            },
            series: [{
                name: 'policeStation',
                type: 'bar',
                data: data.map(i=>i['policeStation'])
            }]

        }))
    }
    useEffect(()=>{
        myChart.current = echarts.init(divRef.current)
        updateChart1(data)
    },[])

    return (
        <div className="bordered 管辖统计">
            <h2>案发派出所管辖统计</h2>
            <div ref={divRef} className="chart">

            </div>
        </div>
    )
}