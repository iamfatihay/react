import { Card, Metric, Text, Icon, Flex, Color, Grid } from "@tremor/react";

import { CashIcon, TicketIcon,  CurrencyDollarIcon } from "@heroicons/react/solid";

const categories = [
  {
    title: "Sales",
    metric: "$ 23,456,456",
    icon: TicketIcon,
    color: "indigo",
  },
  {
    title: "Profit",
    metric: "$ 13,123",
    icon: CashIcon,
    color: "fuchsia",
  },
  {
    title: "Purchases",
    metric: "456",
    icon: CurrencyDollarIcon,
    color: "amber",
  },
];

export default function KpiCards() {
  return (
    <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
      {categories.map(item => (
        <Card key={item.title} decoration="top" decorationColor={item.color}>
          <Flex justifyContent="start" className="space-x-4">
            <Icon
              icon={item.icon}
              variant="light"
              size="xl"
              color={item.color}
            />
            <div className="truncate">
              <Text>{item.title}</Text>
              <Metric className="truncate">{item.metric}</Metric>
            </div>
          </Flex>
        </Card>
      ))}
    </Grid>
  );
}
