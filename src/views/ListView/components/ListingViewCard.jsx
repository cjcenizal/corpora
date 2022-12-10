import { Card, FlexBox, FlexItem, Spacer, Text, Title } from '../../../components';

const statIdToNameMap = {
  requests: 'Requests',
  indexed_traffic: 'Indexed traffic',
  data_volume: 'Data volume',
};

export const ListingViewCard = ({ card }) => {
  const stats = [
    'requests',
    'indexed_traffic',
    'data_volume'
  ].map(id => ({
    name: statIdToNameMap[id],
    value: card.stats[id].value,
    level: card.stats[id].level,
  }));

  return (
    <Card key={card.title}>
      <Title size="s" color="accent">
        <h3>{card.title}</h3>
      </Title>

      <Spacer size="m" />

      <FlexBox justifyContent="spaceBetween">
        <FlexItem flexGrow={1}>
          {stats.map(({name, value, level}, index) => {
            return (
              <div key={name}>
                <FlexBox spacing="s">
                  <FlexItem>
                    <p><strong>{name}</strong></p>
                  </FlexItem>
                  <FlexItem>
                    <p>{value}</p>
                  </FlexItem>
                </FlexBox>
                {
                  index !== stats.length - 1 && (
                    <Spacer size='m' />
                  )
                }
              </div>
            );
          })}          
        </FlexItem>

        <FlexItem>
          {
            card.is_enabled && (
              <p>Enabled</p>
            )
          }
        </FlexItem>
      </FlexBox>

      <Spacer size="m" />
      
      <Text color="subtle">
        <p>{card.description}</p>
      </Text>
    </Card>
  );
};