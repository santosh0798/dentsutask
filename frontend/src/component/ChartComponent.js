import React from 'react';
import { Pie } from '@ant-design/plots';
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 64px 32px;
`;

function ChartComponent({ data,inputValue }) {
    // Custom options for the half-doughnut chart
  
      const colors = data.map((item) => item.color);
      const config = {
        appendPadding: 10,
        data: data,
        angleField: 'type',
        colorField: "color",
        radius: 1,
        innerRadius: 0.5,
        label: {
          type: "inner",
          offset: "-50%",
          content: (data ) => `${(data.value)}`,
          style: {
            textAlign: "center",
            fontSize: 14
          }
        },
        startAngle: 2.1,
        endAngle: 7.30,
        color: colors,
        interactions: [{ type: "element-selected" }, { type: "element-active" }],
        statistic: {
          title: false,
          content: {
            style: {
              whiteSpace: "pre-wrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            },
            formatter: function formatter() {
              return ``;
            }
          }
        }
          };
    return (
        <div >
            <h2>Result</h2>
            <Wrapper>
            <Pie {...config} />
            </Wrapper>

        </div>
    );
}

export default ChartComponent;
