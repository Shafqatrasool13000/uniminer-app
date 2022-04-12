import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import { BelowNav } from './components/BelowNav/BelowNav';
import PaymentCards from './components/PaymentCards/PaymentCards';
import Footer from './components/Footer/Footer';
import PlanDetails from './components/PlanDetails/PlanDetails';
import RevenueRate from './components/RevenueRate/RevenueRate';
import Antiminer from './components/Antiminer/Antiminer';


function App() {
  return (
    <>
      <Navbar />
      <BelowNav />
      {/* <PaymentCards/> */}
      {/* <PlanDetails/>
      <RevenueRate/>
      <Footer/>  */}
      {/* <Antiminer/> */}
    </>
  );
}

export default App;
