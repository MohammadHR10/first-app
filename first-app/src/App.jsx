import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';
import ContactForm from './components/ContactForm';
import TodoList from './components/TodoList';

/* All the jsx imports are imported here as 
it works as a whole for all the jsx componants */

function App() {

  return (
    <>
    <Navbar/>

    <div className='cards'>
      <Card title="card 1" description="card 1 desc"/>
      <Card title="card 2" description="card 2 desc"/>
      <Card title="card 3" description="card 3 desc"/>
      <Card title="card 4" description="card 4 desc"/>
    </div>
    <ContactForm />
    <TodoList />
    <Footer/>

    </>
  )
}

export default App
/* App.jsx is the core of the project
import every componant here for the whole */