import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { ChartTooltip } from "../chartTooltip";
import dayjs from "dayjs";
import { ISalesChart } from "../../../interfaces";

type Props = {
  data: ISalesChart[];
};

export const DailyRevenue = (props: Props) => {
  const data = props.data || [];

  return (
    <ResponsiveContainer width="99%">
      <LineChart
        data={data}
        margin={{ top: 30, right: 10, left: 0, bottom: 0 }}
      >
        <XAxis
          dataKey="date"
          fontSize={12}
          tickFormatter={(value) => {
            if (data.length > 7) {
              return dayjs(value).format("MM/DD");
            }

            return dayjs(value).format("ddd");
          }}
        />
        <YAxis
          dataKey="value"
          fontSize={12}
          tickFormatter={(value) => {
            return `$${Number(value) / 1000}k`;
          }}
        />
        <Line
          type="natural"
          dataKey="value"
          stroke="#2196F3"
          dot={false}
          strokeWidth={2}
        />
        <Tooltip
          content={
            <ChartTooltip
              valueFormatter={(value) =>
                new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(Number(value))
              }
              labelFormatter={(label) => dayjs(label).format("MMM D, YYYY")}
            />
          }
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
