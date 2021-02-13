import React, { Component } from 'react'
import Chart from "chart.js";

export default class LineGraph extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: this.props.labels,
                datasets: [
                    {
                        label: this.props.title,
                        data: this.props.data,
                        // backgroundColor: "rgb(51,55,107)",
                        borderColor: "rgb(93, 99, 177)"
                    }
                ]
            },
            options: {
                scales: {
                    xAxes: [{
                        type: 'time',
                        time: {
                            unit: 'day'
                        },
                        distribution: 'series'
                    }]
                }
            }
        });
    }
    render() {
        return (

            <div className="test">
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>

        );
    }
}