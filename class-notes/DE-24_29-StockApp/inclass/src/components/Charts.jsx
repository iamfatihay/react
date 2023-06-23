import {
  Card,
  Title,
  Text,
  LineChart,
  TabList,
  Tab,
  TabGroup,
  TabPanel,
  TabPanels,
} from "@tremor/react";

const data = {
  relative: [
    {
      Date: "01.01.2021",
      "Customer Churn": 9.73,
    },
    {
      Date: "02.01.2021",
      "Customer Churn": 10.74,
    },
    // ...
    {
      Date: "13.03.2021",
      "Customer Churn": 8.82,
    },
  ],
  absolute: [
    {
      Date: "01.01.2021",
      "Customer Churn": 90,
    },
    // ...
    {
      Date: "13.03.2021",
      "Customer Churn": 88,
    },
  ],
};

const valueFormatterRelative = (number) =>
  `${Intl.NumberFormat("us").format(number).toString()}%`;

const valueFormatterAbsolute = (number) =>
  Intl.NumberFormat("us").format(number).toString();

export default function Charts() {
  return (
    <Card className="mt-4">
      <TabGroup>
        <div className="block sm:flex sm:justify-between">
          <div>
            <Title>Churn Rate</Title>
            <Text>Lost customers per day</Text>
          </div>
          <div className="mt-4 sm:mt-0">
            <TabList variant="solid">
              <Tab>relative</Tab>
              <Tab>absolute</Tab>
            </TabList>
          </div>
        </div>
        <TabPanels>
          <TabPanel>
            <LineChart
              className="mt-8 h-80"
              data={data.relative}
              index="Date"
              categories={["Customer Churn"]}
              colors={["blue"]}
              showLegend={false}
              valueFormatter={valueFormatterRelative}
              yAxisWidth={40}
            />
          </TabPanel>
          <TabPanel>
            <LineChart
              className="mt-8 h-80"
              data={data.absolute}
              index="Date"
              categories={["Customer Churn"]}
              colors={["blue"]}
              showLegend={false}
              valueFormatter={valueFormatterAbsolute}
              yAxisWidth={40}
            />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  );
}
