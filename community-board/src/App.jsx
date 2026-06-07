import './App.css';
import Card from './components/Card';


const App = () => {

  return (
    <div className="App">
      <h1>Hoos Hungry?</h1>
      <h4>Welcome to Cherry's Charlottesville food diary! Discover my favorite local food options as a getaway from UVA's dining halls!</h4>

      <div className="card-grid">
        <Card card='Monsoon Siam' location=' 113 W Market St' color='blue' buttonLink='https://www.monsoonsiamcville.com/' image="/images/monsoon.jpg"/>
        <Card card='The Nook' location='415 E Main St' color='blue' buttonLink='https://thenookcville.com/' image="/images/nook.jpeg"/>
        <Card card='Bizou' location='119 W Main St' color='blue' buttonLink='https://www.bizoudowntown.com/' image="/images/bizou.jpg"/>
        <Card card='Lazeez' location='401 E Main St' color='blue' buttonLink='https://www.lazeezrva.com/' image="/images/lazeez.jpg"/>

        <Card card='Roots' location='1329 W Main St' color='navy-blue' buttonLink='https://www.rootsnaturalkitchen.com/locations/charlottesville/' image="/images/roots.jpeg" />
        <Card card='The Virginian' location='1521 University Ave' color='navy-blue' buttonLink='https://www.thevirginiancville.com/' image="/images/virg.jpg"/>
        <Card card='Asados Wings & Taco Company' location='1327 W Main St' color='navy-blue' buttonLink='https://asadocville.com/' image="/images/asados.jpeg"/>
        <Card card='Take It Away' location='115 Elliewood Ave' color='navy-blue' buttonLink='https://www.takeitawaysandwichshop.com/' image="/images/takeitawayshop.jpg"/>

        <Card card='First Watch' location='1114B Emmet St N' color='light-orange' buttonLink='https://firstwatch.com/locations/barrackse' image="/images/firstwatch.jpg"/>
        <Card card='Panera Bread' location='1121 Emmet St N' color='light-orange' buttonLink='https://www.panerabread.com/en-us/cafe/locations/va/charlottesville/1121-emmet-street-n' image="/images/panera.jpg"/>
        <Card card='Milk & Honey' location='973 Emmet St N Suite A' color='light-orange' buttonLink='https://www.themilkandhoney.com/charlottesville' image="/images/milkhoney.jpg"/>
        <Card card='Cava' location='1200 Emmet St N STE 110' color='light-orange' buttonLink='https://cava.com/locations/barracks-road-va' image="/images/cava.jpg"/>

        <Card card='Hoos Hot Chicken' location='Crossroads, Observatory Hill' color='orange' buttonLink='https://virginia.mydininghub.com/en/location/hoos-hot-chicken-at-crossroads' image="/images/hooshot.jpeg"/>
        <Card card='Bento Sushi' location='Pavilion, Newcomb Hall' color='orange' buttonLink='https://virginia.mydininghub.com/en/location/bento-sushi-at-the-pavilion-xi' image="/images/bento.jpg" />
        <Card card='Subway' location='Pavilion, Newcomb Hall' color='orange' buttonLink='https://virginia.mydininghub.com/en/location/subway-at-the-pavilion-xi' image="/images/sub.jpg"/>
        <Card card='Bodega' location='Gaston House' color='orange' buttonLink='https://virginia.mydininghub.com/en/location/bodega'image="/images/bodega.jpg" />
      </div>

    </div>
  )
}

export default App