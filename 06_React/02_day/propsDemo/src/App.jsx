import Demo from './components/Demo'

const fullName = "Amol Tukaram Kadam "

const App = (props) => {

  return (
    <>
      <div className='bg-info'>

        <h1 className='bg-info'>Hello MY name is {fullName} From Pune </h1>

        <Demo name={fullName} />
      </div>
    </>
  )
}

export default App
