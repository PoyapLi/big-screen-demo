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
            xAxis: {
                type:'value',
                boundaryGap: [0, 0.01],
                splitLine:{show: false},
                axisLabel:{show: false}
            },
            yAxis: {
                axisTick:{show: false},
                type:'category',
                data:['某某公安局', '某某公安局', '某某公安局', '某某公安局', '某某公安局', '某某公安局', '某某公安局', '某某公安局', '某某公安局'],
                axisLabel:{
                    formatter(val){
                        return val.replace('公安局','\n公安局');
                    }
                }
            },
            series: [
                {
                    name: '2020年',
                    type: 'bar',
                    data: [3221, 1125, 3210, 3418, 1230, 1235, 4524, 2341, 1228],
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
                    name: '2021年',
                    type: 'bar',
                    data: [1125, 3221, 3210, 1235, 3418, 2341, 1230, 1228, 4524],
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
    },[])
    return (
        <div className="bordered 破获排名">
            <h2>案件破获排名</h2>
            <div ref={divRef} className="chart"/>
            <div className="legend">
                <span className="first"/> 破案排名2021
                <span className="second"/> 破案排名2020
            </div>
        </div>
    )
}