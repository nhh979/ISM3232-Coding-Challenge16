//Hoang Nguyen
//U12840485

import Gallery from "./Gallery"
import Header from "./Header"
import "./App.css"


// Create a list of team members
const memberList = [
  {name: "Cassie Kozyrkov", role: "Decision Scientist", photoURL:"https://media.licdn.com/dms/image/D5603AQGZe5Rh6RTOtA/profile-displayphoto-shrink_400_400/0/1709746519023?e=1724284800&v=beta&t=ML60Lv1dCnbU72Zzjgej1XEGpPNvACrqwe0TQgfV5mA"},
  {name: "Snoop Dogg", role: "Rapper", photoURL:"https://media.licdn.com/dms/image/D5603AQEaYwnDrlNaRg/profile-displayphoto-shrink_400_400/0/1681490983697?e=1724284800&v=beta&t=KNp1EPHNx1aoflbZThraaFWAPZPdORJQzof2fmJCdsE"},
  {name: "Elon Musk", role: "CEO of Tesla", photoURL: "https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg"}
]

export default function App() {
  return (
    <>
      <Header title="Meet the Team" />
      <Gallery members={memberList}/>
    </>
  )
}