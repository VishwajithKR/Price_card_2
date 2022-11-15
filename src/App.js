import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import Card from './Card';

function App() {
  let List = [
    {
      tittle: "BASIC",
      team: 'For Team of 3-5 Members',
      Rs: '28',
      period: 'month',
      save: '20',
      features: [{
        point1: 'Perfect of Small Team',
        enable: true
      }, {
        point1: 'Unlimited Invoices',
        enable: true
      }, {
        point1: 'Project Management',
        enable: true
      }, {
        point1: 'Team Management',
        enable: false
      }, {
        point1: 'Time Tracking',
        enable: false
      },{
        point1: 'Time Tracking',
        enable: false
      }]

    },{
      tittle: "INTERMEDIATE",
      team: 'For Team of  Members',
      Rs: '39',
      period: 'month',
      pop:"popular",
      save: '30',
      features: [{
        point1: 'Perfect of Small Team',
        enable: true
      }, {
        point1: 'Unlimited Invoices',
        enable: true
      }, {
        point1: 'Project Management',
        enable: true
      }, {
        point1: 'Team Management',
        enable: true
      }, {
        point1: 'Time Tracking',
        enable: false
      },{
        point1: 'Time Tracking',
        enable: false
      }]

    },{
      tittle: "HIGH CLASS",
      team: 'For Team of 10-25 Members',
      Rs: '58',
      period: 'month',
      save: '50',
      features: [{
        point1: 'Perfect of Small Team',
        enable: true
      }, {
        point1: 'Unlimited Invoices',
        enable: true
      }, {
        point1: 'Project Management',
        enable: true
      }, {
        point1: 'Team Management',
        enable: true
      }, {
        point1: 'Time Tracking',
        enable: true
      },{
        point1: 'Time Tracking',
        enable: false
      }]

    },{
      tittle: "SUPREME",
      team: 'For Team of 25-100 Members',
      Rs: '99',
      period: 'month',
      save: '80',
      features: [{
        point1: 'Perfect of Small Team',
        enable: true
      }, {
        point1: 'Unlimited Invoices',
        enable: true
      }, {
        point1: 'Project Management',
        enable: true
      }, {
        point1: 'Team Management',
        enable: true
      }, {
        point1: 'Time Tracking',
        enable: true
      },{
        point1: 'Time Tracking',
        enable: true
      }]

    }
  ]


  return (<div>

    <div class="pricing1 py-5 bg-light">
      <div class="container">
        <Heading></Heading>
        <div class="row mt-5">
         {
          List.map(obj=><Card data={obj}></Card>)
         }
        </div>
      </div>
    </div>
  </div>


  );
}

export default App;
