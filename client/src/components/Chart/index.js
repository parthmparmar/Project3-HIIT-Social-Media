import React, { Component } from 'react'
import Chart from "chart.js";
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';

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
                //Customize chart options
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