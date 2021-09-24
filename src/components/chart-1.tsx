import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {baseEchartOptions} from '../shared/base-echart-options';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart1 = () => {
    const divRef = useRef(null)
    useEffect(()=>{
        const myChart = echarts.init(divRef.current);
        myChart.setOption(createEchartsOptions({
            ...baseEchartOptions,
            xAxis: {
                axisLine:{
                    show:true,
                    lineStyle:{color: '#083B70'}
                },
                axisTick:{show: false},
                data: ['兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区'],
                axisLabel:{
                    formatter(val) {
                        if(val.length > 2){
                            const array = val.split('')
                            array.splice(2, 0, '\n');
                            return array.join('')
                        }else{
                            return val;
                        }
                    }
                }
            },
            yAxis: {
                splitLine:{show: false},
                axisLine:{
                    show:true,
                    lineStyle:{color: '#083B70'}
                },
            },
            series: [{
                type: 'bar',
                data: [32, 15, 20, 18, 30, 35, 24, 41, 28]
            }]
        }));
    },[])
    return (
        <div className="bordered 管辖统计">
            <h2>案发派出所管辖统计</h2>
            <div ref={divRef} className="chart">

            </div>
        </div>
    )
}