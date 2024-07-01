import HeaderBox from '@/components/headerbox'

const Home = () => {

  const loggedIn = { firstName: "Avi"}

  return (
    <section className="home">
      <div className="home-content">
        <div className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access to the app"
          />
        </div>
      Simple Home  
      </div>
    </section>
  )
}

export default Home