import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart2 = () =>{
    const divRef = useRef(null);
    const myChart = useRef(null)
    const data = [
        {name:'某1公安局',2019:300, 2020:200},
        {name:'某2公安局',2019:400, 2020:300},
        {name:'某3公安局',2019:500, 2020:400},
        {name:'某4公安局',2019:600, 2020:500},
        {name:'某5公安局',2019:700, 2020:600},
        {name:'某6公安局',2019:800, 2020:700},
        {name:'某7公安局',2019:900, 2020:800},
        {name:'某8公安局',2019:1000, 2020:900},
        {name:'某9公安局',2019:1100, 2020:1000},
    ]
    useEffect(()=>{
        setInterval(()=>{
            const newData = [
                {name:'某1公安局',2019:300, 2020: Math.random()*1000},
                {name:'某2公安局',2019:400, 2020:Math.random()*1000},
                {name:'某3公安局',2019:500, 2020:Math.random()*1000},
                {name:'某4公安局',2019:600, 2020:Math.random()*1000},
                {name:'某5公安局',2019:700, 2020:Math.random()*1000},
                {name:'某6公安局',2019:800, 2020:Math.random()*1000},
                {name:'某7公安局',2019:900, 2020:Math.random()*1000},
                {name:'某8公安局',2019:1000, 2020:Math.random()*1000},
                {name:'某9公安局',2019:1100, 2020:Math.random()*1000},
            ];
            x(newData)
        },1000)
    },[])
    const x = (data)=>{
        myChart.current.setOption(createEchartsOptions({
            xAxis: {
                type:'value',
                boundaryGap: [0, 0.01],
                splitLine:{show: false},
                axisLabel:{show: false}
            },
            yAxis: {
                axisTick:{show: false},
                type:'category',
                data: data.map(i=>i.name),
                axisLabel:{
                    formatter(val){
                        return val.replace('公安局','\n公安局');
                    }
                }
            },
            series: [
                {
                    name: '2019年',
                    type: 'bar',
                    data: data.map(i=>i[2019]),
                    itemStyle:{
                        normal:{
                            color: new echarts.graphic.LinearGradient(0,0,1,0,[{
                                offset:0,
                                color:'#2034f9'
                            },{
                                offset:1,
                                color:'#04a1ff'
                            }])
                        }
                    }
                },
                {
                    name: '2020年',
                    type: 'bar',
                    data: data.map(i=>i[2020]),
                    itemStyle:{
                        normal:{
                            color: new echarts.graphic.LinearGradient(0,0,1,0,[{
                                offset:0,
                                color:'#b92ae8'
                            },{
                                offset:1,
                                color:'#6773e7'
                            }])
                        }
                    }
                },
            ]
        }));
    }
    useEffect(()=>{
        myChart.current = echarts.init(divRef.current)
        x(data)
    },[])
    return (
        <div className="bordered 破获排名">
            <h2>案件破获排名</h2>
            <div ref={divRef} className="chart"/>
            <div className="legend">
                <span className="first"/> 破案排名1
                <span className="second"/> 破案排名2
            </div>
        </div>
    )
}