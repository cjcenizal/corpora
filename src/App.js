
import './App.scss';
import { ListingViewCard } from './views/ListView/components/ListingViewCard';

function App() {
  const cards = [{
    title: 'Amazon Product 2 Reviews',
    is_enabled: true,
    description: 'Amazon Product 2 Reviews - Acer Aspire 5 Slim Laptop - https://www.amazon.com/Acer-Display-Graphics-Keyboard-A515-43-R19/DP/B07RF1XD36/',
    stats: {
      requests: {
        value: '34,443',
        level: 'high',
      },
      indexed_traffic: {
        value: '156.9 MB',
      },
      data_volume: {
        value: '2.3 GB',
      }
    }
  }, {
    title: 'Amazon Product 3 Reviews',
    is_enabled: false,
    description: 'Amazon Product 2 Reviews - Acer Aspire 5 Slim Laptop - https://www.amazon.com/Acer-Display-Graphics-Keyboard-A515-43-R19/DP/B07RF1XD36/',
    stats: {
      requests: {
        value: '34,443',
        level: 'high',
      },
      indexed_traffic: {
        value: '156.9 MB',
      },
      data_volume: {
        value: '2.3 GB',
      }
    }
  }, {
    title: 'Amazon Product 4 Reviews',
    is_enabled: false,
    description: 'Amazon Product 2 Reviews - Acer Aspire 5 Slim Laptop - https://www.amazon.com/Acer-Display-Graphics-Keyboard-A515-43-R19/DP/B07RF1XD36/',
    stats: {
      requests: {
        value: '34,443',
        level: 'high',
      },
      indexed_traffic: {
        value: '156.9 MB',
      },
      data_volume: {
        value: '2.3 GB',
      }
    }
  }];

  return (
    <div className="App">
      <div class="flexboxLayout">
        {cards.map(card =>
          <ListingViewCard card={card} />
        )}
      </div>
    </div>
  );
}

export default App;
