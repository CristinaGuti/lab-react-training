import './App.css'
import IdCard from './IdCard/IdCard'
import Greetings from './Greetings/Greetings'
import Random from './Random/Random'
import BoxColor from './BoxColor/BoxColor'
import CreditCard from './CreditCard/CreditCard'
import Rating from './Rating/Rating'
import DriverCard from './DriverCard/DriverCard'
import LikeButton from './LikeButton/LikeButton'
import ClickablePicture from './ClickablePicture/ClickablePicture'
import Dice from './Dice/Dice'
import Carousel from './Carousel/Carousel'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <IdCard
            lastName='Doe'
            firstName='John'
            gender='male'
            height={178}
            birth={new Date("1992-07-14")}
            picture="https://randomuser.me/api/portraits/men/44.jpg"
          />

          <IdCard
            lastName='Delores '
            firstName='Obrien'
            gender='female'
            height={172}
            birth={new Date("1988-05-11")}
            picture="https://randomuser.me/api/portraits/women/44.jpg"
          />
        </section>

        <hr />

        <section>
          <Greetings lang="de">Juan</Greetings>
          <Greetings lang="es">Gonzalo</Greetings>
          <Greetings lang="en">Iván</Greetings>
          <Greetings lang="fr">Juanan</Greetings>
        </section>

        <hr />

        <section>
          <Random min={1} max={6} />
          <Random min={1} max={100} />
        </section>

        <hr />

        <section>
          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={128} g={255} b={0} />
        </section>

        <hr />

        <section className='CreditCardsContainer'>
          <CreditCard
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white"
          />

          <CreditCard
            type="Master Card"
            number="0123456789010995"
            expirationMonth={3}
            expirationYear={2021}
            bank="N26"
            owner="Maxence Bouret"
            bgColor="#eeeeee"
            color="#222222"
          />

          <CreditCard
            type="Visa"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={2019}
            bank="Name of the Bank"
            owner="Firstname Lastname"
            bgColor="#ddbb55"
            color="white"
          />
        </section>

        <hr />

        <section>
          <Rating>0</Rating>
          <Rating>1.49</Rating>
          <Rating>1.5</Rating>
          <Rating>3</Rating>
          <Rating>4</Rating>
          <Rating>5</Rating>
        </section>

        <hr />

        <section className='DriverCardsContainer'>
          <DriverCard
            name="Travis Kalanick"
            rating={4.2}
            img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
            car={{
              model: "Toyota Corolla Altis",
              licensePlate: "CO42DE"
            }}
          />

          <DriverCard
            name="Dara Khosrowshahi"
            rating={4.9}
            img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
            car={{
              model: "Audi A3",
              licensePlate: "BE33ER"
            }}
          />
        </section>

        <hr />

        <section className='LikeButtonsContainer'>
          <LikeButton />
          <LikeButton />
        </section>

        <hr />

        <section>
          <ClickablePicture />
        </section>

        <hr />

        <section>
          <Dice />
        </section>

        <hr />

        <section>
          <Carousel
            images={[
              'https://randomuser.me/api/portraits/women/1.jpg',
              'https://randomuser.me/api/portraits/men/1.jpg',
              'https://randomuser.me/api/portraits/women/2.jpg',
              'https://randomuser.me/api/portraits/men/2.jpg'
            ]}
          />
        </section>

        <hr />

      </header>
    </div>
  )
}

export default App