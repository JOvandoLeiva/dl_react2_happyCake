
import Nav from './NavBar';

const Home = () => {
  return (
   <>
    <Nav />
              <div className='text-center'> 
                <h1 className='p-3' >Bienvenido a Happy Cake</h1>
                  <p>El lugar de los pasteles felices</p>
                  <img src="src\assets\cake.png" alt="" className='img img-rounded b-3' />
              
               </div>
   
   </>
  );
}

export default Home;