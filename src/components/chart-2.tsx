import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {baseEchartOptions} from '../shared/base-echart-options';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart2 = () =>{
    const divRef = useRef(null)
    useEffect(()=>{
        const myChart = echarts.init(divRef.current);
        myChart.setOption(createEchartsOptions({
            ...baseEchartOptions,
            xAxis: {
                type:'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type:'category',
                data:['示例', '示例', '示例', '示例', '示例', '示例', '示例']
            },
            series: [
                {
                    name: '2020年',
                    type: 'bar',
                    data: [3221, 1125, 3210, 3418, 1230, 1235, 4524, 2341, 1228]
                },
                {
                    name: '2021年',
                    type: 'bar',
                    data: [1125, 3221, 3210, 1235, 3418, 2341, 1230, 1228, 4524]
                },
            ]
        }));
    },[])
    return (
        <div className="bordered 管辖统计">
            <h2>案件破获排名</h2>
            <div ref={divRef} className="chart">

            </div>
        </div>
    )
}